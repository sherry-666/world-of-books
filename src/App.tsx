import { useState, useEffect, useRef, useCallback } from 'react';
import { BOOKS } from './books';
import { initMap } from './map/mapEngine';
import { BookCard } from './components/BookCard';
import { LanguageFilter, LANGUAGE_OPTIONS } from './components/LanguageFilter';
import { ZoomScale } from './components/ZoomScale';
import { SearchBar } from './components/SearchBar';
import { pickDisplayLanguage } from './types';
import { getUI } from './i18n';
import type { SearchLocation } from './searchLocations';
import type { Book, MapTweaks, MapHandle } from './types';

const DEFAULT_TWEAKS: MapTweaks = {
  theme: 'atlas',       // fixed — Vintage only
  markerStyle: 'spine', // fixed — Spine only
  animate: true,        // fixed — always animated
  graticule: false,
  labels: false,
  reveal: 0.9,
};

export default function App() {
  const stageRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const mapHandle  = useRef<MapHandle | null>(null);

  // openCluster holds the current cluster (1 book = normal open, 2+ = cluster card)
  const [openCluster,  setOpenCluster]  = useState<{ books: Book[]; index: number } | null>(null);
  const openBook = openCluster ? openCluster.books[openCluster.index] : null;

  const [visibleCount, setVisibleCount] = useState(0);
  const [loaded,       setLoaded]       = useState(false);
  const [loaderGone,   setLoaderGone]   = useState(false);
  const [tweaks] = useState<MapTweaks>(DEFAULT_TWEAKS);
  const [primaryLanguage, setPrimaryLanguageRaw] = useState<string>(() => {
    const param = new URLSearchParams(location.search).get('primary');
    if (param && (LANGUAGE_OPTIONS as readonly string[]).includes(param)) return param;
    const bcp47ToApp: Record<string, string> = { en: 'English', fr: 'French', zh: 'Chinese' };
    for (const tag of navigator.languages) {
      const mapped = bcp47ToApp[tag.split('-')[0].toLowerCase()];
      if (mapped) return mapped;
    }
    return 'English';
  });

  const [languages,    setLanguages]    = useState<Set<string>>(() => {
    const param = new URLSearchParams(location.search).get('lang');
    if (param) {
      const valid = param.split(',').filter(l => (LANGUAGE_OPTIONS as readonly string[]).includes(l));
      if (valid.length) return new Set(valid);
    }
    // Auto-detect from browser language preferences
    const bcp47ToApp: Record<string, string> = { en: 'English', fr: 'French', zh: 'Chinese' };
    const detected = new Set<string>(['English']); // English always included
    for (const tag of navigator.languages) {
      const mapped = bcp47ToApp[tag.split('-')[0].toLowerCase()];
      if (mapped && (LANGUAGE_OPTIONS as readonly string[]).includes(mapped)) detected.add(mapped);
    }
    // If only English detected, show all (user likely hasn't customised their browser)
    return detected.size === 1 ? new Set(LANGUAGE_OPTIONS) : detected;
  });
  const [zoomK,        setZoomK]        = useState(1);

  // Refs let the async onLoaded callback read the latest filter values
  // without re-binding the map init effect.
  const languagesRef = useRef(languages);
  const tweaksRef    = useRef(tweaks);
  languagesRef.current = languages;
  tweaksRef.current    = tweaks;

  // Imperatively set card position on every zoom tick — avoids React re-renders at 60fps
  const setCardPosition = useCallback((left: number, top: number, flip: boolean) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.left = left + 'px';
    el.style.top  = top  + 'px';
    el.classList.toggle('flip', flip);
  }, []);

  const closeCard = useCallback(() => setOpenCluster(null), []);

  // Init map once; cleanup handles React StrictMode double-invoke
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handle = initMap(stage, {
      onBookOpen:            (book) => setOpenCluster({ books: [book], index: 0 }),
      onClusterOpen:         (books) => setOpenCluster({ books, index: 0 }),
      onBookClose:           closeCard,
      onVisibleCountChange:  setVisibleCount,
      onZoomChange:          setZoomK,
      setCardPosition,
      onLoaded: () => {
        // Re-apply current filters once markers exist
        handle.setLanguageFilter(Array.from(languagesRef.current));
        handle.applyTweaks(tweaksRef.current);
        setLoaded(true);
        setTimeout(() => setLoaderGone(true), 700);
      },
    });

    mapHandle.current = handle;
    return () => { handle.cleanup(); mapHandle.current = null; };
  }, [closeCard, setCardPosition]);

  // Sync tweaks to DOM and map engine
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    document.documentElement.classList.toggle('show-stars', tweaks.theme === 'atlas');
    document.documentElement.classList.toggle('show-grat',  tweaks.graticule);
    document.documentElement.classList.toggle('no-anim',    !tweaks.animate);
    mapHandle.current?.applyTweaks(tweaks);
  }, [tweaks]);

  // Push language filter to the map engine and sync URL
  useEffect(() => {
    mapHandle.current?.setLanguageFilter(Array.from(languages));
    const url = new URL(location.href);
    if (languages.size === LANGUAGE_OPTIONS.length) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', Array.from(languages).join(','));
    }
    history.replaceState(null, '', url);
  }, [languages]);

  // Sync primary language to URL
  useEffect(() => {
    const url = new URL(location.href);
    if (primaryLanguage === 'English') {
      url.searchParams.delete('primary');
    } else {
      url.searchParams.set('primary', primaryLanguage);
    }
    history.replaceState(null, '', url);
  }, [primaryLanguage]);

  // Close the open card if its book no longer matches any selected language
  useEffect(() => {
    if (openBook && pickDisplayLanguage(openBook, languages) === null) {
      setOpenCluster(null);
    }
  }, [openBook, languages]);

  // Resolve the display language for the open book (drives card content)
  const openLanguage = openBook
    ? (pickDisplayLanguage(openBook, languages, primaryLanguage) ?? openBook.languages[0])
    : null;

  const setPrimaryLanguage = useCallback((lang: string) => {
    setPrimaryLanguageRaw(lang);
    setLanguages(prev => prev.has(lang) ? prev : new Set([...prev, lang]));
  }, []);

  const t = getUI(primaryLanguage);

  const zoomBy   = (factor: number) => mapHandle.current?.zoomBy(factor);
  const zoomHome = () => { closeCard(); mapHandle.current?.zoomHome(); };
  const panTo    = (loc: SearchLocation) => mapHandle.current?.panToLocation(loc.lng, loc.lat, loc.zoom);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeCard(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCard]);

  const clusterTotal = openCluster?.books.length ?? 1;
  const clusterIndex = openCluster?.index ?? 0;
  const clusterPlace = clusterTotal > 1
    ? `${openCluster!.books[0].place}, ${openCluster!.books[0].country}`
    : undefined;

  return (
    <div className="app">
      {/* Map canvas */}
      <div id="stage" ref={stageRef} />

      {/* Loading screen */}
      {!loaderGone && (
        <div id="loader" className={loaded ? 'gone' : ''}>
          <div className="compass" />
          <div className="ld-text">{t.loading}</div>
        </div>
      )}

      {/* Masthead */}
      <header className="chrome masthead">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <div className="rule"><i /></div>
        <p className="sub">{t.tagline}</p>
      </header>

      {/* Search bar */}
      <SearchBar onSelect={panTo} placeholder={t.searchPlaceholder} />

      {/* Language filter */}
      <LanguageFilter
        selected={languages}
        onChange={setLanguages}
        primaryLanguage={primaryLanguage}
        onPrimaryChange={setPrimaryLanguage}
      />

      {/* Zoom controls */}
      <div className="chrome zoomctl">
        <button onClick={() => zoomBy(1.6)}     title="Zoom in"    aria-label="Zoom in">+</button>
        <ZoomScale
          zoom={zoomK}
          min={1}
          max={256}
          onChange={(k) => mapHandle.current?.zoomToScale(k)}
        />
        <button onClick={() => zoomBy(1 / 1.6)} title="Zoom out"   aria-label="Zoom out">−</button>
        <button className="home" onClick={zoomHome} title="Reset view" aria-label="Reset view">⤢</button>
      </div>

      {/* Book count legend */}
      <div className="chrome legend">
        <div className="hint">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3.5 3.5" />
            <path d="M7 5v4M5 7h4" />
          </svg>
          <span>{t.zoomHint}</span>
        </div>
        <div className="countpill">
          <span className="dot" />
          <span className="lbl">{t.ofBooks(visibleCount, BOOKS.length)}</span>
        </div>
      </div>

      {/* Book card — always in DOM so position can be set imperatively before show */}
      <div
        ref={cardRef}
        id="bookCard"
        className={openBook ? 'show' : ''}
        onClick={e => e.stopPropagation()}
      >
        {openBook && openLanguage && (
          <BookCard
            book={openBook}
            displayLanguage={openLanguage}
            onClose={closeCard}
            t={t}
            clusterTotal={clusterTotal}
            clusterIndex={clusterIndex}
            clusterPlace={clusterPlace}
            onPrev={clusterIndex > 0
              ? () => setOpenCluster(c => c && { ...c, index: c.index - 1 })
              : undefined}
            onNext={clusterIndex < clusterTotal - 1
              ? () => setOpenCluster(c => c && { ...c, index: c.index + 1 })
              : undefined}
          />
        )}
      </div>

    </div>
  );
}
