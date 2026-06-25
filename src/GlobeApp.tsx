import { useState, useEffect, useRef, useCallback } from 'react';
import { BOOKS } from './books';
import { initGlobe } from './map/globeEngine';
import { BookCard } from './components/BookCard';
import { LanguageFilter, LANGUAGE_OPTIONS } from './components/LanguageFilter';
import { SearchBar } from './components/SearchBar';
import { pickDisplayLanguage } from './types';
import { getUI } from './i18n';
import type { SearchLocation } from './searchLocations';
import type { Book, MapTweaks, MapHandle } from './types';

const DEFAULT_TWEAKS: MapTweaks = {
  theme:       'atlas',
  markerStyle: 'spine',
  animate:     true,
  graticule:   false,
  labels:      false,
  reveal:      0.9,
};

export default function GlobeApp() {
  const stageRef  = useRef<HTMLDivElement>(null);
  const cardRef   = useRef<HTMLDivElement>(null);
  const mapHandle = useRef<MapHandle | null>(null);

  const [openCluster,  setOpenCluster]  = useState<{ books: Book[]; index: number } | null>(null);
  const openBook = openCluster ? openCluster.books[openCluster.index] : null;

  const [visibleCount, setVisibleCount] = useState(0);
  const [loaded,       setLoaded]       = useState(false);
  const [loaderGone,   setLoaderGone]   = useState(false);
  const [tweaks] = useState<MapTweaks>(DEFAULT_TWEAKS);
  const [zoomK,        setZoomK]        = useState(1);

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

  const [languages, setLanguages] = useState<Set<string>>(() => {
    const param = new URLSearchParams(location.search).get('lang');
    if (param) {
      const valid = param.split(',').filter(l => (LANGUAGE_OPTIONS as readonly string[]).includes(l));
      if (valid.length) return new Set(valid);
    }
    const bcp47ToApp: Record<string, string> = { en: 'English', fr: 'French', zh: 'Chinese' };
    const detected = new Set<string>(['English']);
    for (const tag of navigator.languages) {
      const mapped = bcp47ToApp[tag.split('-')[0].toLowerCase()];
      if (mapped && (LANGUAGE_OPTIONS as readonly string[]).includes(mapped)) detected.add(mapped);
    }
    return detected.size === 1 ? new Set(LANGUAGE_OPTIONS) : detected;
  });

  const languagesRef = useRef(languages);
  const tweaksRef    = useRef(tweaks);
  languagesRef.current = languages;
  tweaksRef.current    = tweaks;

  const setCardPosition = useCallback((left: number, top: number, flip: boolean) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.left = left + 'px';
    el.style.top  = top  + 'px';
    el.classList.toggle('flip', flip);
  }, []);

  const closeCard = useCallback(() => setOpenCluster(null), []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handle = initGlobe(stage, {
      onBookOpen:           (book) => setOpenCluster({ books: [book], index: 0 }),
      onClusterOpen:        (books) => setOpenCluster({ books, index: 0 }),
      onBookClose:          closeCard,
      onVisibleCountChange: setVisibleCount,
      onZoomChange:         setZoomK,
      setCardPosition,
      onLoaded: () => {
        handle.setLanguageFilter(Array.from(languagesRef.current));
        handle.applyTweaks(tweaksRef.current);
        setLoaded(true);
        setTimeout(() => setLoaderGone(true), 700);

        // Deep-link: open a specific book's card (e.g. from the author map)
        const bookParam = new URLSearchParams(location.search).get('book');
        if (bookParam) {
          const book = BOOKS.find(b => b.id === bookParam);
          if (book) {
            setLanguages(prev => {
              if (book.languages.some(l => prev.has(l))) return prev;
              return new Set([...prev, book.languages[0]]);
            });
            handle.openBookById(book.id);
          }
          const url = new URL(location.href);
          url.searchParams.delete('book');
          history.replaceState(null, '', url);
          return;
        }

        // Rotate globe to user's approximate location via IP geolocation
        fetch('https://ipapi.co/json/')
          .then(r => r.json())
          .then((data: { latitude?: number; longitude?: number }) => {
            if (data.latitude != null && data.longitude != null) {
              // zoom=6 → globeEngine maps to zoomFactor≈3 (regional view)
              handle.panToLocation(data.longitude, data.latitude, 6);
            }
          })
          .catch(() => { /* silently ignore if blocked or rate-limited */ });
      },
    });

    mapHandle.current = handle;
    return () => { handle.cleanup(); mapHandle.current = null; };
  }, [closeCard, setCardPosition]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    document.documentElement.classList.toggle('show-stars', tweaks.theme === 'atlas');
    document.documentElement.classList.toggle('show-grat',  tweaks.graticule);
    document.documentElement.classList.toggle('no-anim',    !tweaks.animate);
    mapHandle.current?.applyTweaks(tweaks);
  }, [tweaks]);

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

  useEffect(() => {
    document.documentElement.setAttribute('data-primary-lang', primaryLanguage);
    const url = new URL(location.href);
    url.searchParams.set('primary', primaryLanguage);
    history.replaceState(null, '', url);
  }, [primaryLanguage]);

  useEffect(() => {
    if (openBook && pickDisplayLanguage(openBook, languages) === null) {
      setOpenCluster(null);
    }
  }, [openBook, languages]);

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

  const tryMyLuck = useCallback(() => {
    const eligible = BOOKS.filter(b => pickDisplayLanguage(b, languages, primaryLanguage) !== null);
    if (!eligible.length) return;
    const pick = eligible[Math.floor(Math.random() * eligible.length)];
    mapHandle.current?.openBookById(pick.id);
  }, [languages, primaryLanguage]);

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
      <div id="stage" ref={stageRef} />

      {!loaderGone && (
        <div id="loader" className={loaded ? 'gone' : ''}>
          <div className="compass" />
          <div className="ld-text">{t.loading}</div>
        </div>
      )}

      {/* Masthead */}
      <header className="chrome masthead">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>
          <img className="masthead-logo logo-dark"  src="/icon-dark.svg"  alt="" width="36" height="36" aria-hidden="true" />
          <img className="masthead-logo logo-light" src="/icon-light.svg" alt="" width="36" height="36" aria-hidden="true" />
          {t.title}
        </h1>
        <div className="rule"><i /></div>
        <p className="sub">{t.tagline}</p>
        <div className="masthead-links">
          <a href={`/authors?primary=${primaryLanguage}`} className="globe-maplink" title="Authors on the globe">{t.authorsTitle} ↗</a>
        </div>
      </header>

      <SearchBar onSelect={panTo} placeholder={t.searchPlaceholder} onLucky={tryMyLuck} luckyLabel={t.luckyButton} />

      <LanguageFilter
        selected={languages}
        onChange={setLanguages}
        primaryLanguage={primaryLanguage}
        onPrimaryChange={setPrimaryLanguage}
      />

      {/* Zoom controls — simple +/− on globe (no log scale slider) */}
      <div className="chrome zoomctl">
        <button onClick={() => zoomBy(1.6)}     title="Zoom in"    aria-label="Zoom in">+</button>
        <span className="globe-zoom-label">{zoomK.toFixed(1)}×</span>
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

      {/* Book card */}
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
            primaryLanguage={primaryLanguage}
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
