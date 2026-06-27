import * as d3 from 'd3';
import { feature, mesh } from 'topojson-client';
import { BOOKS } from '../books';
import { pickDisplayLanguage } from '../types';
import type { Book, MapTweaks, MapHandle, Author, AuthorEvent } from '../types';
import { COUNTRY_NAMES, BIG_COUNTRY_IDS, BIG_COUNTRY_ISO2 } from '../countryNames';
import type { MapCallbacks } from './mapEngine';

const GEO_URL  = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const CACHE_KEY = 'wob_geo_110m_v1';

type PBook = Book & { _x: number; _y: number };

interface CountryLabel {
  id: number;
  name: string;
  isBig: boolean;
  lng: number;
  lat: number;
  _x: number;
  _y: number;
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
  const res  = await fetch(GEO_URL);
  const topo = await res.json();
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(topo)); } catch (_e) { /* quota exceeded */ }
  return topo;
}

function cssVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const MIN_ZOOM = 1.0;
const MAX_ZOOM = 14.0;

export function initGlobe(stage: HTMLElement, callbacks: MapCallbacks): MapHandle {
  let isDestroyed = false;
  let animFrame: number | null = null;

  const pbooks: PBook[] = BOOKS.map(b => ({ ...b, _x: 0, _y: 0 }));

  let W = stage.clientWidth;
  let H = stage.clientHeight;

  // Rotation [λ, φ] and zoom factor (1 = whole globe fits screen)
  let rotate: [number, number] = [0, -30];
  let zoomFactor = 1.0;

  function baseScale()    { return Math.min(W, H) * 0.42; }
  function currentScale() { return baseScale() * zoomFactor; }

  const projection = d3.geoOrthographic()
    .clipAngle(90)
    .precision(0.3)
    .translate([W / 2, H / 2])
    .rotate([rotate[0], rotate[1]])
    .scale(currentScale());

  const graticule = d3.geoGraticule10();

  // Canvas for the base map — fast full redraw on every drag frame
  const dpr    = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  stage.appendChild(canvas);
  const ctx = canvas.getContext('2d')!;
  const canvasPath = d3.geoPath(projection, ctx);

  function setCanvasSize() {
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  setCanvasSize();

  // SVG overlay for stars, markers, labels
  // SVG must be position:absolute so it stacks above the canvas (both are
  // positioned elements; DOM order then determines which is on top).
  const svg = d3.select(stage)
    .append('svg')
    .attr('class', 'map-svg globe-svg')
    .attr('width', W)
    .attr('height', H)
    .style('position', 'absolute')
    .style('inset', '0')
    .style('touch-action', 'none')
    .attr('role', 'application')
    .attr('aria-label', 'World of Books — interactive globe');

  const gStars           = svg.append('g').attr('class', 'stars-layer');
  const gCountryLabels   = svg.append('g').attr('class', 'country-labels-layer');
  const gProvinceLabels  = svg.append('g').attr('class', 'province-labels-layer');
  const gAuthors         = svg.append('g').attr('class', 'authors-layer');
  const gMarkers         = svg.append('g').attr('class', 'markers-layer');

  let markerSel: d3.Selection<SVGGElement, PBook, SVGGElement, unknown> | null = null;
  let openId: string | null = null;
  let languageFilter: Set<string> | null = null;
  let currentClusters  = new Map<string, PBook[]>();
  let countryLabels: CountryLabel[] = [];
  let countryLabelSel: d3.Selection<SVGTextElement, CountryLabel, SVGGElement, unknown> | null = null;
  let authorBookIds: Set<string> | null = null;
  let resizeTimer: ReturnType<typeof setTimeout>;

  // Province/state border + label data (lazy-loaded at zoomFactor ≥ 3)
  interface ProvinceLabel { name: string; lng: number; lat: number; }
  let provinceFeatures: GeoJSON.Feature[] = [];
  let provinceLabels: ProvinceLabel[] = [];
  let provinceLabelSel: d3.Selection<SVGTextElement, ProvinceLabel, SVGGElement, unknown> | null = null;
  let provinceDataLoaded = false;

  // ---- author layer ----
  type PEvent = AuthorEvent & { _x: number; _y: number };
  let pEvents: PEvent[] = [];
  let authorDotSel: d3.Selection<SVGGElement, PEvent, SVGGElement, unknown> | null = null;

  const tweaks: MapTweaks = {
    theme:       'atlas',
    markerStyle: 'spine',
    graticule:   false,
    labels:      false,
    reveal:      0.9,
    animate:     true,
  };

  // ---- visibility (dot-product great-circle check) ----

  function isVisible(lng: number, lat: number): boolean {
    const r    = projection.rotate();
    const cLon = -r[0] * Math.PI / 180;
    const cLat = -r[1] * Math.PI / 180;
    const pLon = lng * Math.PI / 180;
    const pLat = lat * Math.PI / 180;
    const dot  = Math.sin(cLat) * Math.sin(pLat) +
                 Math.cos(cLat) * Math.cos(pLat) * Math.cos(pLon - cLon);
    return dot > -0.08; // slightly past horizon so edge markers don't pop
  }


  // ---- stars (canvas) ----

  interface StarDot { x: number; y: number; r: number; a: number; }
  let starDots: StarDot[] = [];

  function makeStars() {
    // Stars are drawn on the canvas (below land), so they don't bleed over continents.
    // SVG gStars layer is kept empty.
    gStars.selectAll('*').remove();
    const rnd = mulberry32(99);
    starDots = [];
    for (let i = 0; i < 150; i++) {
      starDots.push({ x: rnd() * W, y: rnd() * H, r: 0.3 + rnd() * 1.1, a: 0.25 + rnd() * 0.55 });
    }
  }

  // ---- canvas base map ----

  function drawBase() {
    ctx.clearRect(0, 0, W, H);

    // Stars — painted first so land covers them
    for (const s of starDots) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    }

    const cx = W / 2, cy = H / 2, r = currentScale();

    // Atmospheric glow behind the globe
    const glow = ctx.createRadialGradient(cx, cy, r * 0.65, cx, cy, r * 1.6);
    const oceanHi = cssVar('--ocean-hi') || '#16233a';
    glow.addColorStop(0, oceanHi + '66');
    glow.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.6, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // Ocean — semi-transparent so the star field shows through
    ctx.beginPath();
    canvasPath({ type: 'Sphere' } as d3.GeoSphere);
    ctx.fillStyle = 'rgba(14,26,44,0.45)';
    ctx.fill();

    // Graticule (only when enabled via tweaks)
    if (tweaks.graticule) {
      ctx.beginPath();
      canvasPath(graticule as unknown as GeoJSON.MultiLineString);
      ctx.strokeStyle = cssVar('--graticule') || 'rgba(220,184,110,0.13)';
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }

    // Land
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvasPath(landData as any);
    ctx.fillStyle = cssVar('--land') || '#1b2c45';
    ctx.fill();

    // Country borders
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvasPath(bordersData as any);
    ctx.strokeStyle = cssVar('--land-stroke') || 'rgba(220,184,110,0.42)';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Sphere outline
    ctx.beginPath();
    canvasPath({ type: 'Sphere' } as d3.GeoSphere);
    ctx.strokeStyle = cssVar('--sphere-stroke') || 'rgba(220,184,110,0.38)';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  // ---- province / state borders (canvas, lazy-loaded) ----

  function drawProvinces() {
    if (!provinceFeatures.length) return;
    const opacity = zoomFactor < 3 ? 0 : zoomFactor >= 4 ? 0.55 : (zoomFactor - 3) * 0.55;
    if (opacity <= 0) return;
    const color = cssVar('--land-stroke') || 'rgba(220,184,110,0.42)';
    // Parse colour and apply opacity
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth   = 0.5;
    ctx.setLineDash([2, 3]);
    for (const f of provinceFeatures) {
      if (!f.geometry) continue;
      ctx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvasPath(f as any);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
  }

  function buildProvinceLabels() {
    gProvinceLabels.selectAll('*').remove();
    provinceLabelSel = null;
    provinceLabels = provinceFeatures
      .filter(f => f.properties?.latitude != null && f.properties?.longitude != null && f.properties?.name)
      .map(f => ({
        name: f.properties!.name as string,
        lng:  f.properties!.longitude as number,
        lat:  f.properties!.latitude  as number,
      }));
    provinceLabelSel = gProvinceLabels
      .selectAll<SVGTextElement, ProvinceLabel>('text.province-label')
      .data(provinceLabels)
      .enter()
      .append('text')
      .attr('class', 'province-label')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text(d => d.name);
  }

  function updateProvinceLabels() {
    if (!provinceLabelSel) return;
    const opacity = zoomFactor < 4 ? 0 : zoomFactor >= 5 ? 0.75 : (zoomFactor - 4) * 0.75;
    (gProvinceLabels.node() as SVGGElement | null)?.style.setProperty('opacity', String(opacity));
    if (opacity <= 0) return;
    provinceLabelSel.each(function (d) {
      const show = isVisible(d.lng, d.lat);
      (this as SVGTextElement).style.display = show ? '' : 'none';
      if (!show) return;
      const p = projection([d.lng, d.lat]);
      if (p) (this as SVGTextElement).setAttribute('transform', `translate(${p[0]},${p[1]})`);
    });
  }

  async function loadProvinceData() {
    if (provinceDataLoaded) return;
    provinceDataLoaded = true;
    try {
      const res     = await fetch('/provinces-large.json');
      const geojson = await res.json() as GeoJSON.FeatureCollection;
      provinceFeatures = geojson.features.filter(f => BIG_COUNTRY_ISO2.has(f.properties?.iso_a2));
      if (!isDestroyed) {
        buildProvinceLabels();
        redraw();
      }
    } catch (_e) {
      provinceFeatures = [];
    }
  }

  // ---- projection ----

  function projectBooks() {
    for (const b of pbooks) {
      const p = projection([b.lng, b.lat]);
      b._x = p ? p[0] : -9999;
      b._y = p ? p[1] : -9999;
    }
  }

  // ---- markers ----

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
      sel.append('rect').attr('class', 'mk-spine').attr('x', -3.5).attr('y', -9).attr('width', 7).attr('height', 18).attr('rx', 1.2);
      sel.append('line').attr('class', 'mk-band').attr('x1', -3.5).attr('y1', -4).attr('x2', 3.5).attr('y2', -4);
      sel.append('line').attr('class', 'mk-band').attr('x1', -3.5).attr('y1',  4).attr('x2', 3.5).attr('y2',  4);
      sel.append('circle').attr('class', 'mk-dotsm').attr('cy', 0).attr('r', 0.9);
    }
  }

  function raise(node: SVGGElement) { node.parentNode?.appendChild(node); }

  function buildMarkers() {
    gMarkers.selectAll('*').remove();
    markerSel = gMarkers.selectAll<SVGGElement, PBook>('g.marker')
      .data(pbooks, d => d.id)
      .enter()
      .append('g')
      .attr('class', d => `marker tier-${d.tier} rel-${d.relation}`)
      .style('cursor', 'pointer');

    markerSel
      .on('mouseenter', function () { (this as SVGGElement).classList.add('hover'); })
      .on('mouseleave', function () { (this as SVGGElement).classList.remove('hover'); });

    markerSel.each(function (d) {
      const node = this as SVGGElement;
      let pstart: [number, number] | null = null;
      node.addEventListener('pointerdown', (ev) => { pstart = [ev.clientX, ev.clientY]; });
      node.addEventListener('pointerup', (ev) => {
        if (!pstart) return;
        const dx = ev.clientX - pstart[0], dy = ev.clientY - pstart[1];
        pstart = null;
        if (dx * dx + dy * dy < 36) { ev.stopPropagation(); openCard(d, node); }
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
    markerSel.each(function (d) {
      const lab = (this as SVGGElement).querySelector<SVGTextElement>('.mk-label');
      if (lab) lab.textContent = d.titles[d.languages[0]] ?? '';
    });

    markerSel.each(function () {
      const g = d3.select(this as SVGGElement).append('g').attr('class', 'mk-badge-group');
      g.append('circle').attr('class', 'mk-badge-bg').attr('cx', 9).attr('cy', -10).attr('r', 7);
      g.append('text').attr('class', 'mk-badge').attr('x', 9).attr('y', -6.5).attr('text-anchor', 'middle');
    });

    markerSel.each(function (_d, i) {
      const node  = this as SVGGElement;
      const inner = node.querySelector('.mk-inner') as SVGGElement | null;
      const pulse = node.querySelector('.mk-pulse') as SVGElement | null;
      if (inner) inner.style.animationDelay = (-(i * 0.43 % 3.4)).toFixed(2) + 's';
      if (pulse) pulse.style.animationDelay = (-(i * 1.1 % 9.0)).toFixed(2) + 's';
    });
  }

  function computeClusters(): Map<string, PBook[]> {
    const eligible = pbooks.filter(b =>
      pickDisplayLanguage(b, languageFilter) !== null && isVisible(b.lng, b.lat),
    );
    const sorted = [...eligible].sort((a, b) =>
      a.tier !== b.tier ? a.tier - b.tier : (b.rating ?? 0) - (a.rating ?? 0),
    );

    const THRESHOLD = 36 / (tweaks.reveal || 1);
    const clusterMap = new Map<string, PBook[]>();
    const occupied: Array<{ leadId: string; sx: number; sy: number }> = [];

    for (const b of sorted) {
      const sx = b._x, sy = b._y;
      if (zoomFactor >= 8) {
        const hit = occupied.find(o => Math.hypot(sx - o.sx, sy - o.sy) < 28);
        if (hit) { clusterMap.get(hit.leadId)!.push(b); }
        else { clusterMap.set(b.id, [b]); occupied.push({ leadId: b.id, sx, sy }); }
      } else {
        const blocked = occupied.some(o => Math.hypot(sx - o.sx, sy - o.sy) < THRESHOLD);
        if (!blocked) { clusterMap.set(b.id, [b]); occupied.push({ leadId: b.id, sx, sy }); }
      }
    }
    return clusterMap;
  }

  function updateMarkers() {
    if (!markerSel) return;
    const labelsShow = tweaks.labels && zoomFactor >= 2;
    let shown = 0;
    currentClusters = computeClusters();

    markerSel.each(function (d) {
      const node        = this as SVGGElement;
      const displayLang = pickDisplayLanguage(d, languageFilter);
      const clusterBooks = currentClusters.get(d.id);
      const isLead      = clusterBooks !== undefined;
      const authorMatch = authorBookIds === null || authorBookIds.has(d.id);
      const vis = (isLead || d.id === openId) && displayLang !== null && authorMatch;
      if (vis) shown++;

      node.setAttribute('transform', `translate(${d._x},${d._y})`);
      node.classList.toggle('on', vis);

      const clusterSize = clusterBooks?.length ?? 0;
      node.classList.toggle('is-cluster', clusterSize > 1);
      const badge = node.querySelector<SVGTextElement>('.mk-badge');
      if (badge) badge.textContent = clusterSize > 1 ? String(clusterSize) : '';

      const lab = node.querySelector<SVGTextElement>('.mk-label');
      if (lab) {
        const wanted = d.titles[displayLang ?? d.languages[0]] ?? '';
        if (lab.textContent !== wanted) lab.textContent = wanted;
        lab.style.opacity = String(vis && labelsShow ? 0.82 : 0);
      }
    });

    callbacks.onVisibleCountChange(shown);
    positionCard();
  }

  // ---- country labels ----

  function buildCountryLabels(land: GeoJSON.FeatureCollection) {
    gCountryLabels.selectAll('*').remove();
    countryLabels = (land.features as GeoJSON.Feature[]).flatMap(f => {
      const id   = Number(f.id ?? -1);
      const name = COUNTRY_NAMES[id];
      if (!name) return [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [lng, lat] = d3.geoCentroid(f as any);
      return [{ id, name, isBig: BIG_COUNTRY_IDS.has(id), lng, lat, _x: 0, _y: 0 }];
    });
    countryLabelSel = gCountryLabels
      .selectAll<SVGTextElement, CountryLabel>('text.country-label')
      .data(countryLabels, d => String(d.id))
      .enter()
      .append('text')
      .attr('class', d => `country-label${d.isBig ? ' country-label-big' : ''}`)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text(d => d.name);
  }

  function updateCountryLabels() {
    if (!countryLabelSel) return;
    const showBig = zoomFactor >= 1.4;
    const showAll = zoomFactor >= 3.5;
    if (!showBig) {
      (gCountryLabels.node() as SVGGElement | null)?.style.setProperty('opacity', '0');
      return;
    }
    (gCountryLabels.node() as SVGGElement | null)?.style.setProperty('opacity', '1');
    countryLabelSel.each(function (d) {
      const show = (d.isBig ? showBig : showAll) && isVisible(d.lng, d.lat);
      (this as SVGTextElement).style.display = show ? '' : 'none';
      if (!show) return;
      const p = projection([d.lng, d.lat]);
      if (!p) return;
      (this as SVGTextElement).setAttribute('transform', `translate(${p[0]},${p[1]})`);
    });
  }

  // ---- author journey (canvas + SVG dots) ----

  // Draw the journey path and write-links onto the canvas (after land, before markers).
  // geoPath with geoOrthographic automatically clips great-circle arcs at the horizon.
  function drawAuthorPath() {
    if (!pEvents.length) return;

    // Blue dashed write-links: book setting → author's writing location
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = cssVar('--sphere-stroke') || 'rgba(90,150,220,0.5)';
    for (const e of pEvents) {
      if (!e.bookId) continue;
      const book = BOOKS.find(b => b.id === e.bookId);
      if (!book) continue;
      ctx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvasPath({ type: 'LineString', coordinates: [[book.lng, book.lat], [e.lng, e.lat]] } as any);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Gold solid journey path connecting events in chronological order
    if (pEvents.length >= 2) {
      ctx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvasPath({ type: 'LineString', coordinates: pEvents.map(e => [e.lng, e.lat]) } as any);
      ctx.strokeStyle = cssVar('--author-path') || 'rgba(212,167,64,0.75)';
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }
  }

  function buildAuthorDots(events: PEvent[]) {
    gAuthors.selectAll('*').remove();
    authorDotSel = null;
    if (!events.length) return;

    authorDotSel = gAuthors
      .selectAll<SVGGElement, PEvent>('g.author-event')
      .data(events)
      .enter()
      .append('g')
      .attr('class', e => `author-event ${e.type}`);

    authorDotSel.append('circle')
      .attr('class', 'author-event-dot')
      .attr('r', e => (e.type === 'birth' || e.type === 'died') ? 7 : 5);
  }

  function updateAuthorDots() {
    if (!authorDotSel) return;
    authorDotSel.each(function (e) {
      const vis = isVisible(e.lng, e.lat);
      const p   = projection([e.lng, e.lat]);
      const node = this as SVGGElement;
      node.style.display = vis && !!p ? '' : 'none';
      if (vis && p) node.setAttribute('transform', `translate(${p[0]},${p[1]})`);
    });
  }

  // ---- card ----

  function openCard(d: PBook, node: SVGGElement) {
    openId = d.id;
    raise(node);
    const cluster = currentClusters.get(d.id) ?? [d];
    if (cluster.length > 1 && callbacks.onClusterOpen) {
      callbacks.onClusterOpen(cluster);
    } else {
      callbacks.onBookOpen(cluster[0] ?? d);
    }
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
    const cw = 360, ch = 220;
    let left = d._x + 22;
    let top  = d._y - ch / 2;
    const flip = left + cw > W - 12;
    if (flip) left = d._x - cw - 22;
    if (left < 12) left = 12;
    top = Math.max(12, Math.min(top, H - ch - 12));
    callbacks.setCardPosition(left, top, flip);
  }

  // ---- full redraw ----

  function redraw() {
    drawBase();
    drawProvinces(); // dashed state/province lines, on canvas above land
    if (pEvents.length) drawAuthorPath();
    // Trigger lazy load once zoom is high enough
    if (zoomFactor >= 3 && !provinceDataLoaded) loadProvinceData();
    projectBooks();
    updateMarkers();
    updateAuthorDots();
    updateCountryLabels();
    updateProvinceLabels();
  }

  // ---- interaction: drag to rotate, wheel to zoom ----

  let dragState: { rotate: [number, number]; x: number; y: number } | null = null;
  let svgPstart: [number, number] | null = null;
  let dragRaf: number | null = null; // separate rAF handle for drag/pinch redraws

  function scheduleRedraw() {
    if (dragRaf !== null) return;
    dragRaf = requestAnimationFrame(() => { dragRaf = null; redraw(); });
  }

  const svgNode = svg.node()!;

  svgNode.addEventListener('pointerdown', (ev) => {
    if ((ev.target as Element).closest?.('.marker')) { svgPstart = null; return; }
    svgPstart = [ev.clientX, ev.clientY];
    dragState = { rotate: [rotate[0], rotate[1]], x: ev.clientX, y: ev.clientY };
    svgNode.setPointerCapture(ev.pointerId);
  });

  svgNode.addEventListener('pointermove', (ev) => {
    if (!dragState) return;
    const dx = ev.clientX - dragState.x;
    const dy = ev.clientY - dragState.y;
    const sensitivity = 75 / currentScale(); // degrees per pixel
    rotate[0] = dragState.rotate[0] + dx * sensitivity;
    rotate[1] = Math.max(-85, Math.min(85, dragState.rotate[1] - dy * sensitivity));
    projection.rotate([rotate[0], rotate[1]]);
    scheduleRedraw();
  });

  svgNode.addEventListener('pointerup', (ev) => {
    if (svgPstart && dragState) {
      const dx = ev.clientX - svgPstart[0], dy = ev.clientY - svgPstart[1];
      if (dx * dx + dy * dy < 36) closeCard();
    }
    dragState = null;
    svgPstart = null;
  });

  svgNode.addEventListener('wheel', (ev) => {
    ev.preventDefault();
    const factor = ev.deltaY < 0 ? 1.15 : 1 / 1.15;
    zoomFactor = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomFactor * factor));
    projection.scale(currentScale());
    callbacks.onZoomChange?.(zoomFactor);
    scheduleRedraw();
  }, { passive: false });

  // Pinch-to-zoom (two-finger) via PointerEvents
  const pointers = new Map<number, PointerEvent>();
  let lastPinchDist = 0;

  svgNode.addEventListener('pointerdown', (ev) => { pointers.set(ev.pointerId, ev); });
  svgNode.addEventListener('pointermove', (ev) => {
    pointers.set(ev.pointerId, ev);
    if (pointers.size === 2) {
      dragState = null; // cancel rotation during pinch
      const [p1, p2] = [...pointers.values()];
      const dist = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
      if (lastPinchDist > 0) {
        const factor = dist / lastPinchDist;
        zoomFactor = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomFactor * factor));
        projection.scale(currentScale());
        callbacks.onZoomChange?.(zoomFactor);
        scheduleRedraw();
      }
      lastPinchDist = dist;
    } else {
      lastPinchDist = 0;
    }
  });
  svgNode.addEventListener('pointerup', (ev) => {
    pointers.delete(ev.pointerId);
    if (pointers.size < 2) lastPinchDist = 0;
  });
  svgNode.addEventListener('pointercancel', (ev) => {
    pointers.delete(ev.pointerId);
    lastPinchDist = 0;
  });

  // ---- smooth animated rotation ----

  function animateTo(
    targetRotate: [number, number],
    targetZoom: number,
    duration = 800,
    onDone?: () => void,
  ) {
    if (animFrame !== null) cancelAnimationFrame(animFrame);
    const startRotate: [number, number] = [rotate[0], rotate[1]];
    const startZoom = zoomFactor;
    const startTime = performance.now();

    // Take the shortest arc around the globe
    let dLambda = targetRotate[0] - startRotate[0];
    while (dLambda > 180)  dLambda -= 360;
    while (dLambda < -180) dLambda += 360;
    const dPhi = targetRotate[1] - startRotate[1];

    function step(now: number) {
      const t = Math.min(1, (now - startTime) / duration);
      const e = d3.easeCubicInOut(t);
      rotate[0] = startRotate[0] + dLambda * e;
      rotate[1] = startRotate[1] + dPhi * e;
      zoomFactor = startZoom + (targetZoom - startZoom) * e;
      projection.rotate([rotate[0], rotate[1]]);
      projection.scale(currentScale());
      callbacks.onZoomChange?.(zoomFactor);
      redraw();
      if (t < 1) { animFrame = requestAnimationFrame(step); }
      else { animFrame = null; onDone?.(); }
    }
    animFrame = requestAnimationFrame(step);
  }

  // ---- resize ----

  function relayout() {
    W = stage.clientWidth;
    H = stage.clientHeight;
    setCanvasSize();
    (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>)
      .attr('width', W).attr('height', H);
    projection.translate([W / 2, H / 2]).scale(currentScale());
    makeStars();
    redraw();
  }

  // ---- async init ----

  let landData!: GeoJSON.FeatureCollection;
  let bordersData!: GeoJSON.MultiLineString;

  async function init() {
    let topo: any;
    try { topo = await loadGeo(); } catch (_e) { return; }
    if (isDestroyed) return;

    landData    = feature(topo, topo.objects.countries) as unknown as GeoJSON.FeatureCollection;
    bordersData = mesh(topo, topo.objects.countries, (a: any, b: any) => a !== b) as unknown as GeoJSON.MultiLineString;

    makeStars();
    drawBase();
    projectBooks();
    buildCountryLabels(landData);
    buildMarkers();
    updateCountryLabels();
    updateMarkers();

    callbacks.onLoaded();

    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { if (!isDestroyed) relayout(); }, 120);
    });
    ro.observe(stage);
    (canvas as any).__ro = ro;

    // Deep-link: if a ?book= param exists, open it
    const bookParam = new URLSearchParams(location.search).get('book');
    if (bookParam) {
      const book = BOOKS.find(b => b.id === bookParam);
      if (book) {
        openId = book.id;
        callbacks.onBookOpen(book);
        animateTo([-book.lng, -book.lat], Math.max(zoomFactor, 3.0), 820, () => positionCard());
      }
      const url = new URL(location.href);
      url.searchParams.delete('book');
      history.replaceState(null, '', url);
    }
  }

  init();

  // ---- public handle ----

  return {
    zoomBy(factor: number) {
      zoomFactor = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomFactor * factor));
      projection.scale(currentScale());
      callbacks.onZoomChange?.(zoomFactor);
      redraw();
    },
    zoomHome() {
      closeCard();
      animateTo([0, -30], 1.0, 800);
    },
    zoomToScale(k: number) {
      zoomFactor = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, k));
      projection.scale(currentScale());
      callbacks.onZoomChange?.(zoomFactor);
      redraw();
    },
    zoomToBook(book: Book) {
      animateTo([-book.lng, -book.lat], Math.max(zoomFactor, 3.0), 800, () => positionCard());
    },
    panToLocation(lng: number, lat: number, zoom: number) {
      // Flat-map zoom values (1–256) → globe zoom (1–14): divide by 2, clamp
      const targetZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom * 0.5));
      animateTo([-lng, -lat], targetZoom, 800);
    },
    openBookById(id: string) {
      const pb = pbooks.find(b => b.id === id);
      if (!pb) return;
      openId = pb.id;
      callbacks.onBookOpen(pb);
      animateTo([-pb.lng, -pb.lat], Math.max(zoomFactor, 3.0), 820, () => positionCard());
      positionCard();
    },
    showAuthor(author: Author) {
      authorBookIds = new Set(author.bookIds);
      pEvents = author.events.map(e => ({ ...e, _x: 0, _y: 0 }));
      buildAuthorDots(pEvents);
      if (pEvents.length) {
        const e = pEvents[0];
        animateTo([-e.lng, -e.lat], Math.max(zoomFactor, 2.0), 800);
      } else {
        redraw();
      }
      updateMarkers();
    },
    clearAuthor() {
      authorBookIds = null;
      pEvents = [];
      gAuthors.selectAll('*').remove();
      authorDotSel = null;
      updateMarkers();
      redraw();
    },
    setLanguageFilter(langs: string[]) {
      languageFilter = new Set(langs);
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
        markerSel.each(function (_d, i) {
          const node  = this as SVGGElement;
          const inner = node.querySelector('.mk-inner') as SVGGElement | null;
          const pulse = node.querySelector('.mk-pulse') as SVGElement | null;
          if (inner) inner.style.animationDelay = (-(i * 0.43 % 3.4)).toFixed(2) + 's';
          if (pulse) pulse.style.animationDelay = (-(i * 1.1 % 9.0)).toFixed(2) + 's';
        });
      }
      redraw();
    },
    cleanup() {
      isDestroyed = true;
      clearTimeout(resizeTimer);
      if (animFrame   !== null) cancelAnimationFrame(animFrame);
      if (dragRaf     !== null) cancelAnimationFrame(dragRaf);
      const ro = (canvas as any).__ro as ResizeObserver | undefined;
      if (ro) ro.disconnect();
      canvas.remove();
      svg.node()?.remove();
    },
  };
}
