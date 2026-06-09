import * as d3 from 'd3';
import { feature, mesh } from 'topojson-client';
import { BOOKS } from '../books';
import { CITIES } from '../cities';
import { pickDisplayLanguage } from '../types';
import type { Book, MapTweaks, MapHandle } from '../types';
import type { City } from '../cities';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const CACHE_KEY = 'wob_geo_110m_v1';

type PBook = Book & { _x: number; _y: number };
type PCity = City & { _x: number; _y: number };

export interface MapCallbacks {
  onBookOpen: (book: Book) => void;
  onBookClose: () => void;
  onVisibleCountChange: (count: number) => void;
  onZoomChange?: (k: number) => void;
  setCardPosition: (left: number, top: number, flip: boolean) => void;
  onLoaded: () => void;
}

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

async function loadGeo() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch (_e) { /* storage unavailable */ }
  const res = await fetch(GEO_URL);
  const topo = await res.json();
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(topo)); } catch (_e) { /* quota exceeded */ }
  return topo;
}

export function initMap(stage: HTMLElement, callbacks: MapCallbacks): MapHandle {
  let isDestroyed = false;

  const pbooks: PBook[] = BOOKS.map(b => ({ ...b, _x: 0, _y: 0 }));
  const pcities: PCity[] = CITIES.map(c => ({ ...c, _x: 0, _y: 0 }));

  let W = stage.clientWidth;
  let H = stage.clientHeight;

  const svg = d3.select(stage)
    .append('svg')
    .attr('class', 'map-svg')
    .attr('width', W)
    .attr('height', H)
    .attr('role', 'application')
    .attr('aria-label', 'World of Books — interactive literary map');

  // Water ripple filter — static feTurbulence texture; CSS animation drives shimmer
  const defs = (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>).append('defs');
  const waterFilter = defs.append('filter')
    .attr('id', 'ocean-ripple')
    .attr('x', '-5%').attr('y', '-5%')
    .attr('width', '110%').attr('height', '110%');
  waterFilter.append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', '0.014 0.005')
    .attr('numOctaves', '2')
    .attr('seed', '11')
    .attr('result', 'noise');
  waterFilter.append('feGaussianBlur')
    .attr('in', 'noise')
    .attr('stdDeviation', '1.2')
    .attr('result', 'softNoise');
  waterFilter.append('feDisplacementMap')
    .attr('in', 'SourceGraphic')
    .attr('in2', 'softNoise')
    .attr('scale', '4')
    .attr('xChannelSelector', 'R')
    .attr('yChannelSelector', 'G');

  const gStars    = svg.append('g').attr('class', 'stars-layer');
  const gZoom     = svg.append('g').attr('class', 'zoom-layer');
  const gGrat     = gZoom.append('g').attr('class', 'grat-layer');
  const gLand     = gZoom.append('g').attr('class', 'land-layer');
  const gCities   = svg.append('g').attr('class', 'cities-layer');
  const gMarkers  = svg.append('g').attr('class', 'markers-layer');

  let projection!: d3.GeoProjection;
  let geoPath!: d3.GeoPath;
  let zoomBehavior!: d3.ZoomBehavior<SVGSVGElement, unknown>;
  let current = d3.zoomIdentity;
  let markerSel: d3.Selection<SVGGElement, PBook, SVGGElement, unknown> | null = null;
  let openId: string | null = null;
  let resizeTimer: ReturnType<typeof setTimeout>;
  let languageFilter: Set<string> | null = null;

  const graticule = d3.geoGraticule10();

  const tweaks: MapTweaks = {
    theme: 'atlas',
    markerStyle: 'spine',
    graticule: false,
    labels: false,
    reveal: 0.9,
    animate: true,
  };

  // ---- projection ----

  function fitProjection() {
    projection = d3.geoNaturalEarth1();
    const pad = Math.min(W, H) * 0.04;
    projection.fitExtent([[pad, pad + 6], [W - pad, H - pad]], { type: 'Sphere' } as d3.GeoSphere);
    geoPath = d3.geoPath(projection);
  }

  // ---- stars ----

  function makeStars() {
    gStars.selectAll('*').remove();
    const rnd = mulberry32(99);
    for (let i = 0; i < 150; i++) {
      gStars.append('circle')
        .attr('cx', rnd() * W)
        .attr('cy', rnd() * H)
        .attr('r', 0.3 + rnd() * 1.1)
        .attr('class', 'star')
        .style('opacity', String(0.25 + rnd() * 0.55));
    }
  }

  // ---- base geo ----

  function drawBase(land: GeoJSON.FeatureCollection, borders: GeoJSON.MultiLineString) {
    gLand.selectAll('*').remove();
    gGrat.selectAll('*').remove();

    gGrat.append('path')
      .datum(graticule as unknown as GeoJSON.MultiLineString)
      .attr('class', 'graticule')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .attr('d', geoPath as any);

    // Animated ocean fill — sits below the sphere stroke and land
    gLand.append('path')
      .datum({ type: 'Sphere' } as d3.GeoSphere)
      .attr('class', 'ocean-fill')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .attr('d', geoPath as any);

    gLand.append('path')
      .datum({ type: 'Sphere' } as d3.GeoSphere)
      .attr('class', 'sphere')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .attr('d', geoPath as any);

    gLand.append('path')
      .datum(land as unknown as GeoJSON.GeoJsonObject)
      .attr('class', 'land')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .attr('d', geoPath as any);

    gLand.append('path')
      .datum(borders as unknown as GeoJSON.GeoJsonObject)
      .attr('class', 'borders')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .attr('d', geoPath as any);
  }

  // ---- markers ----

  function projectBooks() {
    for (const b of pbooks) {
      const p = projection([b.lng, b.lat]);
      b._x = p ? p[0] : -9999;
      b._y = p ? p[1] : -9999;
    }
  }

  function projectCities() {
    for (const c of pcities) {
      const p = projection([c.lng, c.lat]);
      c._x = p ? p[0] : -9999;
      c._y = p ? p[1] : -9999;
    }
  }

  function buildCities() {
    gCities.selectAll('*').remove();
    const sel = gCities.selectAll<SVGGElement, PCity>('g.city')
      .data(pcities, c => `${c.country}-${c.name}`)
      .enter()
      .append('g')
      .attr('class', c => `city ${c.type}`);
    sel.append('circle')
      .attr('class', 'city-dot')
      .attr('r', c => c.type === 'capital' ? 2.4 : 1.8);
    sel.append('text')
      .attr('class', 'city-label')
      .attr('x', 6)
      .attr('y', 3)
      .text(c => c.name);
  }

  function updateCities() {
    // Fade cities in from k=80 → k=100; hidden below that.
    const k = current.k;
    const visOpacity = k < 80 ? 0 : k >= 100 ? 1 : (k - 80) / 20;
    if (visOpacity <= 0) {
      (gCities.node() as SVGGElement | null)?.style.setProperty('opacity', '0');
      return;
    }
    (gCities.node() as SVGGElement | null)?.style.setProperty('opacity', String(visOpacity));
    gCities.selectAll<SVGGElement, PCity>('g.city').each(function (c) {
      const x = current.applyX(c._x);
      const y = current.applyY(c._y);
      (this as SVGGElement).setAttribute('transform', `translate(${x},${y})`);
    });
  }

  function markerShape(sel: d3.Selection<SVGGElement, unknown, null, undefined>) {
    sel.selectAll('*').remove();
    const style = tweaks.markerStyle;

    sel.append('circle').attr('class', 'mk-hit').attr('r', 14);
    sel.append('circle').attr('class', 'mk-pulse').attr('r', 8);
    sel.append('circle').attr('class', 'mk-glow').attr('r', 11);

    if (style === 'dot') {
      sel.append('circle').attr('class', 'mk-ring').attr('r', 6.2);
      sel.append('circle').attr('class', 'mk-core').attr('r', 2.6);
    } else if (style === 'cover') {
      sel.append('rect').attr('class', 'mk-cover').attr('x', -6).attr('y', -8).attr('width', 12).attr('height', 16).attr('rx', 1);
      sel.append('line').attr('class', 'mk-coverspine').attr('x1', -3).attr('y1', -8).attr('x2', -3).attr('y2', 8);
      sel.append('line').attr('class', 'mk-coverline').attr('x1', 0).attr('y1', -3.5).attr('x2', 3.5).attr('y2', -3.5);
      sel.append('line').attr('class', 'mk-coverline').attr('x1', 0).attr('y1', -0.5).attr('x2', 3.5).attr('y2', -0.5);
    } else {
      // spine (default)
      sel.append('rect').attr('class', 'mk-spine').attr('x', -3.5).attr('y', -9).attr('width', 7).attr('height', 18).attr('rx', 1.2);
      sel.append('line').attr('class', 'mk-band').attr('x1', -3.5).attr('y1', -4).attr('x2', 3.5).attr('y2', -4);
      sel.append('line').attr('class', 'mk-band').attr('x1', -3.5).attr('y1',  4).attr('x2', 3.5).attr('y2',  4);
      sel.append('circle').attr('class', 'mk-dotsm').attr('cy', 0).attr('r', 0.9);
    }
  }

  function raise(node: SVGGElement) {
    node.parentNode?.appendChild(node);
  }

  function buildMarkers() {
    gMarkers.selectAll('*').remove();

    markerSel = gMarkers.selectAll<SVGGElement, PBook>('g.marker')
      .data(pbooks, d => d.id)
      .enter()
      .append('g')
      .attr('class', d => `marker tier-${d.tier} rel-${d.relation}`)
      .style('cursor', 'pointer');

    markerSel
      .on('mouseenter', function () {
        const node = this as SVGGElement;
        node.classList.add('hover');
        const lab = (node as any)._lab as SVGTextElement | null;
        if (lab) lab.style.opacity = '1';
      })
      .on('mouseleave', function () {
        const node = this as SVGGElement;
        node.classList.remove('hover');
        const lab = (node as any)._lab as SVGTextElement | null;
        if (lab) lab.style.opacity = String((node as any)._labelBase ?? 0);
      });

    // Click detection via Pointer Events. Mouse events on this SVG hit-test the
    // markers-layer parent instead of the marker children, but pointer events
    // hit-test correctly through to the marker descendants.
    markerSel.each(function (d) {
      const node = this as SVGGElement;
      let pstart: [number, number] | null = null;
      node.addEventListener('pointerdown', (ev) => {
        pstart = [ev.clientX, ev.clientY];
      });
      node.addEventListener('pointerup', (ev) => {
        if (!pstart) return;
        const dx = ev.clientX - pstart[0];
        const dy = ev.clientY - pstart[1];
        pstart = null;
        if (dx * dx + dy * dy < 36) {
          ev.stopPropagation();
          openCard(d, node);
        }
      });
    });

    markerSel.append('g').attr('class', 'mk-inner');
    markerSel.each(function () {
      markerShape(d3.select(this as SVGGElement).select<SVGGElement>('.mk-inner'));
    });

    markerSel.append('text')
      .attr('class', 'mk-label')
      .attr('y', 20)
      .attr('text-anchor', 'middle');
    // Initial label text — gets refreshed in updateMarkers whenever the filter changes
    markerSel.each(function (d) {
      const lab = (this as SVGGElement).querySelector<SVGTextElement>('.mk-label');
      if (lab) lab.textContent = d.titles[d.languages[0]] ?? '';
    });

    // Stagger animation delays so markers animate out of sync
    markerSel.each(function (_d, i) {
      const node = this as SVGGElement;
      const inner = node.querySelector('.mk-inner') as SVGGElement | null;
      const pulse = node.querySelector('.mk-pulse') as SVGElement | null;
      if (inner) inner.style.animationDelay = (-(i * 0.43 % 3.4)).toFixed(2) + 's';
      if (pulse) pulse.style.animationDelay = (-(i * 1.1 % 9.0)).toFixed(2) + 's';
    });
  }

  function tierVisible(tier: 1 | 2 | 3, k: number): boolean {
    const r = tweaks.reveal || 1;
    if (tier === 1) return true;
    if (tier === 2) return k >= 1.75 / r;
    return k >= 3.1 / r;
  }

  function updateMarkers() {
    if (!markerSel) return;
    const k = current.k;
    const labelsShow = tweaks.labels && k >= 1.3;
    let shown = 0;

    markerSel.each(function (d) {
      const node = this as SVGGElement;
      const displayLang = pickDisplayLanguage(d, languageFilter);
      const vis = tierVisible(d.tier, k) && displayLang !== null;
      if (vis) shown++;

      const x = current.applyX(d._x);
      const y = current.applyY(d._y);
      node.setAttribute('transform', `translate(${x},${y})`);
      node.classList.toggle('on', vis);

      const lab = (node as any)._lab as SVGTextElement | undefined
        || node.querySelector<SVGTextElement>('.mk-label') || undefined;
      if (lab) {
        (node as any)._lab = lab;
        // Refresh label text in the current display language
        const wanted = d.titles[displayLang ?? d.languages[0]] ?? '';
        if (lab.textContent !== wanted) lab.textContent = wanted;
      }

      // Inline opacity for labels — CSS cascade can silently lose to base rules in some browsers
      const labelBase = (vis && labelsShow) ? 0.82 : 0;
      (node as any)._labelBase = labelBase;
      if (!node.classList.contains('hover') && lab) {
        lab.style.opacity = String(labelBase);
      }
    });

    callbacks.onVisibleCountChange(shown);
    positionCard();
  }

  // ---- zoom ----

  function updateBorders() {
    // Fade country borders in between k=1.4 (hidden) and k=2.5 (full)
    const t = Math.max(0, Math.min(1, (current.k - 1.4) / 1.1));
    gLand.select('.borders').style('opacity', t);
  }

  function onZoom(ev: d3.D3ZoomEvent<SVGSVGElement, unknown>) {
    current = ev.transform;
    gZoom.attr('transform', current.toString());
    updateBorders();
    updateMarkers();
    updateCities();
    callbacks.onZoomChange?.(current.k);
  }

  function setupZoom() {
    zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 256])
      .translateExtent([[-W * 0.15, -H * 0.15], [W * 1.15, H * 1.15]])
      .on('zoom', onZoom);

    (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
      .call(zoomBehavior)
      .on('dblclick.zoom', null);

    // Background close — uses pointer events for the same reason marker clicks do.
    // Skip if the pointerdown originated inside a marker; that's handled per-marker.
    let svgPstart: [number, number] | null = null;
    const svgNode = svg.node()!;
    svgNode.addEventListener('pointerdown', (ev) => {
      if ((ev.target as Element).closest?.('.marker')) { svgPstart = null; return; }
      svgPstart = [ev.clientX, ev.clientY];
    });
    svgNode.addEventListener('pointerup', (ev) => {
      if (!svgPstart) return;
      const dx = ev.clientX - svgPstart[0];
      const dy = ev.clientY - svgPstart[1];
      svgPstart = null;
      if (dx * dx + dy * dy < 36) closeCard();
    });
  }

  // ---- card ----

  function openCard(d: PBook, node: SVGGElement) {
    openId = d.id;
    raise(node);
    callbacks.onBookOpen(d);
    positionCard();
  }

  function closeCard() {
    if (!openId) return;
    openId = null;
    callbacks.onBookClose();
  }

  function positionCard() {
    if (!openId) return;
    const d = pbooks.find(b => b.id === openId);
    if (!d) return;
    const x = current.applyX(d._x);
    const y = current.applyY(d._y);
    const cw = 360, ch = 220; // approximate card dimensions
    let left = x + 22;
    let top  = y - ch / 2;
    const flip = left + cw > W - 12;
    if (flip) left = x - cw - 22;
    if (left < 12) left = 12;
    top = Math.max(12, Math.min(top, H - ch - 12));
    callbacks.setCardPosition(left, top, flip);
  }

  // ---- resize ----

  function relayout() {
    W = stage.clientWidth;
    H = stage.clientHeight;
    (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
      .attr('width', W)
      .attr('height', H);
    fitProjection();
    makeStars();
    drawBase(landData, bordersData);
    projectBooks();
    projectCities();
    if (zoomBehavior) {
      zoomBehavior.translateExtent([[-W * 0.15, -H * 0.15], [W * 1.15, H * 1.15]]);
    }
    updateBorders();
    updateMarkers();
    updateCities();
  }

  // ---- async init ----

  let landData: GeoJSON.FeatureCollection;
  let bordersData: GeoJSON.MultiLineString;

  async function init() {
    let topo: any;
    try {
      topo = await loadGeo();
    } catch (_e) {
      return;
    }
    if (isDestroyed) return;

    landData = feature(topo, topo.objects.countries) as unknown as GeoJSON.FeatureCollection;
    // Interior country borders only (filter excludes coastlines, which have a === b)
    bordersData = mesh(topo, topo.objects.countries, (a: any, b: any) => a !== b) as unknown as GeoJSON.MultiLineString;

    fitProjection();
    makeStars();
    drawBase(landData, bordersData);
    projectBooks();
    projectCities();
    buildMarkers();
    buildCities();
    setupZoom();
    updateBorders();
    updateMarkers();
    updateCities();

    callbacks.onLoaded();

    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isDestroyed) relayout();
      }, 120);
    });
    ro.observe(stage);

    // Store ro reference for cleanup
    (svg.node() as any).__ro = ro;
  }

  init();

  // ---- public handle ----

  return {
    zoomBy(factor: number) {
      (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
        .transition().duration(420).ease(d3.easeCubicOut)
        .call(zoomBehavior.scaleBy, factor);
    },
    zoomHome() {
      (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
        .transition().duration(620).ease(d3.easeCubicInOut)
        .call(zoomBehavior.transform, d3.zoomIdentity);
    },
    zoomToScale(k: number) {
      // Clamp and zoom around the current screen center
      const [minK, maxK] = zoomBehavior.scaleExtent();
      const target = Math.max(minK, Math.min(maxK, k));
      const cx = W / 2, cy = H / 2;
      // Convert screen center to world space at current transform
      const wx = (cx - current.x) / current.k;
      const wy = (cy - current.y) / current.k;
      // Build transform that keeps that world point at the same screen point
      const tx = cx - wx * target;
      const ty = cy - wy * target;
      (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
        .call(zoomBehavior.transform, d3.zoomIdentity.translate(tx, ty).scale(target));
    },
    zoomToBook(book: Book) {
      const pb = pbooks.find(b => b.id === book.id);
      if (!pb) return;
      const k = Math.max(current.k, 4.2);
      const tx = W / 2 - k * pb._x;
      const ty = H / 2 - k * pb._y;
      (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
        .transition().duration(720).ease(d3.easeCubicInOut)
        .call(zoomBehavior.transform, d3.zoomIdentity.translate(tx, ty).scale(k));
    },
    panToLocation(lng: number, lat: number, zoom: number) {
      const p = projection([lng, lat]);
      if (!p) return;
      const k = zoom;
      const tx = W / 2 - k * p[0];
      const ty = H / 2 - k * p[1];
      (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
        .transition().duration(720).ease(d3.easeCubicInOut)
        .call(zoomBehavior.transform, d3.zoomIdentity.translate(tx, ty).scale(k));
    },
    setLanguageFilter(langs: string[]) {
      languageFilter = new Set(langs);
      // If the open card's book has no remaining matching language, close it
      if (openId) {
        const pb = pbooks.find(b => b.id === openId);
        if (pb && pickDisplayLanguage(pb, languageFilter) === null) closeCard();
      }
      updateMarkers();
    },
    applyTweaks(t: MapTweaks) {
      let needShape = false;
      if (t.markerStyle !== tweaks.markerStyle) needShape = true;
      Object.assign(tweaks, t);
      if (needShape && markerSel) {
        markerSel.each(function () {
          markerShape(d3.select(this as SVGGElement).select<SVGGElement>('.mk-inner'));
        });
        // Re-stagger after rebuild
        markerSel.each(function (_d, i) {
          const node = this as SVGGElement;
          const inner = node.querySelector('.mk-inner') as SVGGElement | null;
          const pulse = node.querySelector('.mk-pulse') as SVGElement | null;
          if (inner) inner.style.animationDelay = (-(i * 0.43 % 3.4)).toFixed(2) + 's';
          if (pulse) pulse.style.animationDelay = (-(i * 1.1 % 9.0)).toFixed(2) + 's';
        });
      }
      updateMarkers();
    },
    cleanup() {
      isDestroyed = true;
      clearTimeout(resizeTimer);
      const svgNode = svg.node();
      if (svgNode) {
        const ro = (svgNode as any).__ro as ResizeObserver | undefined;
        if (ro) ro.disconnect();
        svgNode.remove();
      }
    },
  };
}
