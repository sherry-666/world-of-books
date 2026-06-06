import { useState, useEffect, useRef, useCallback } from 'react';
import { BOOKS } from './books';
import { initMap } from './map/mapEngine';
import { BookCard } from './components/BookCard';
import { TweaksPanel } from './components/TweaksPanel';
import { LanguageFilter, LANGUAGE_OPTIONS } from './components/LanguageFilter';
import { ZoomScale } from './components/ZoomScale';
import { SearchBar } from './components/SearchBar';
import { pickDisplayLanguage } from './types';
import type { SearchLocation } from './searchLocations';
import type { Book, MapTweaks, MapHandle } from './types';

const DEFAULT_TWEAKS: MapTweaks = {
  theme: 'atlas',
  markerStyle: 'spine',
  graticule: false,
  labels: false,
  reveal: 0.9,
  animate: true,
};

export default function App() {
  const stageRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const mapHandle  = useRef<MapHandle | null>(null);

  const [openBook,     setOpenBook]     = useState<Book | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [loaded,       setLoaded]       = useState(false);
  const [loaderGone,   setLoaderGone]   = useState(false);
  const [tweaks,       setTweaks]       = useState<MapTweaks>(DEFAULT_TWEAKS);
  const [tweaksOpen,   setTweaksOpen]   = useState(false);
  const [languages,    setLanguages]    = useState<Set<string>>(() => {
    const param = new URLSearchParams(location.search).get('lang');
    if (param) {
      const valid = param.split(',').filter(l => (LANGUAGE_OPTIONS as readonly string[]).includes(l));
      if (valid.length) return new Set(valid);
    }
    return new Set(LANGUAGE_OPTIONS);
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

  const closeCard = useCallback(() => setOpenBook(null), []);

  // Init map once; cleanup handles React StrictMode double-invoke
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handle = initMap(stage, {
      onBookOpen:            setOpenBook,
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

  // Close the open card if its book no longer matches any selected language
  useEffect(() => {
    if (openBook && pickDisplayLanguage(openBook, languages) === null) {
      setOpenBook(null);
    }
  }, [openBook, languages]);

  // Resolve the display language for the open book (drives card content)
  const openLanguage = openBook
    ? (pickDisplayLanguage(openBook, languages) ?? openBook.languages[0])
    : null;

  const setTweak = useCallback(
    <K extends keyof MapTweaks>(key: K, value: MapTweaks[K]) =>
      setTweaks(prev => ({ ...prev, [key]: value })),
    [],
  );

  const zoomBy   = (factor: number) => mapHandle.current?.zoomBy(factor);
  const zoomHome = () => { closeCard(); mapHandle.current?.zoomHome(); };
  const panTo    = (loc: SearchLocation) => mapHandle.current?.panToLocation(loc.lng, loc.lat, loc.zoom);

  // Escape key closes card and tweaks panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeCard(); setTweaksOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCard]);

  return (
    <div className="app">
      {/* Map canvas */}
      <div id="stage" ref={stageRef} />

      {/* Loading screen */}
      {!loaderGone && (
        <div id="loader" className={loaded ? 'gone' : ''}>
          <div className="compass" />
          <div className="ld-text">Charting the world…</div>
        </div>
      )}

      {/* Masthead */}
      <header className="chrome masthead">
        <p className="eyebrow">An Atlas of Stories</p>
        <h1>Map of Books</h1>
        <div className="rule"><i /></div>
        <p className="sub">Every pin a place a great book is set in — or about.</p>
      </header>

      {/* Search bar */}
      <SearchBar onSelect={panTo} />

      {/* Language filter */}
      <LanguageFilter selected={languages} onChange={setLanguages} />

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
          <span>Zoom in to uncover more stories.</span>
        </div>
        <div className="countpill">
          <span className="dot" />
          <span className="num">{visibleCount}</span>
          <span className="lbl">of {BOOKS.length} books in view</span>
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
          />
        )}
      </div>

      {/* Tweaks gear button */}
      <button
        className="tweaks-toggle"
        onClick={() => setTweaksOpen(o => !o)}
        aria-label="Toggle tweaks"
        title="Tweaks"
      >
        ⚙
      </button>

      {/* Tweaks panel */}
      {tweaksOpen && (
        <TweaksPanel
          tweaks={tweaks}
          setTweak={setTweak}
          onClose={() => setTweaksOpen(false)}
        />
      )}
    </div>
  );
}
