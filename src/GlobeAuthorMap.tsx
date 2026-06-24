import { useState, useEffect, useRef, useCallback } from 'react';
import { initGlobe } from './map/globeEngine';
import { AuthorPanel } from './components/AuthorPanel';
import { BookCard } from './components/BookCard';
import { findAuthorById } from './authors';
import { getUI } from './i18n';
import { LANGUAGE_OPTIONS } from './components/LanguageFilter';
import type { Author, Book, MapHandle } from './types';

function detectPrimaryLanguage(): string {
  const param = new URLSearchParams(location.search).get('primary');
  if (param && (LANGUAGE_OPTIONS as readonly string[]).includes(param)) return param;
  const bcp47ToApp: Record<string, string> = { en: 'English', fr: 'French', zh: 'Chinese' };
  for (const tag of navigator.languages) {
    const mapped = bcp47ToApp[tag.split('-')[0].toLowerCase()];
    if (mapped) return mapped;
  }
  return 'English';
}

export default function GlobeAuthorMap() {
  const stageRef  = useRef<HTMLDivElement>(null);
  const cardRef   = useRef<HTMLDivElement>(null);
  const mapHandle = useRef<MapHandle | null>(null);

  const [loaded,     setLoaded]     = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);
  const [author,     setAuthor]     = useState<Author | null>(null);
  const [showList,   setShowList]   = useState(true);
  const [openBook,   setOpenBook]   = useState<Book | null>(null);
  const [zoomK,      setZoomK]      = useState(1);
  const [primaryLanguage] = useState<string>(detectPrimaryLanguage);
  const t = getUI(primaryLanguage);

  const authorRef = useRef<Author | null>(null);
  authorRef.current = author;

  const closeCard = useCallback(() => setOpenBook(null), []);

  const setCardPosition = useCallback((left: number, top: number, flip: boolean) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.left = left + 'px';
    el.style.top  = top  + 'px';
    el.classList.toggle('flip', flip);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'atlas');
    document.documentElement.setAttribute('data-mode', 'author');
    document.documentElement.setAttribute('data-primary-lang', primaryLanguage);
    return () => document.documentElement.removeAttribute('data-mode');
  }, [primaryLanguage]);

  useEffect(() => {
    document.documentElement.toggleAttribute('data-author-active', author !== null);
  }, [author]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handle = initGlobe(stage, {
      onBookOpen:           setOpenBook,
      onBookClose:          closeCard,
      onVisibleCountChange: () => {},
      onZoomChange:         setZoomK,
      setCardPosition,
      onLoaded: () => {
        setLoaded(true);
        setTimeout(() => setLoaderGone(true), 700);

        const param = new URLSearchParams(location.search).get('author');
        if (param) {
          const found = findAuthorById(param);
          if (found) {
            setAuthor(found);
            handle.showAuthor(found);
          }
        }
      },
    });

    mapHandle.current = handle;
    return () => { handle.cleanup(); mapHandle.current = null; };
  }, [closeCard, setCardPosition]);

  const handleSelectAuthor = useCallback((a: Author) => {
    setAuthor(a);
    setShowList(false);
    mapHandle.current?.showAuthor(a);
    const url = new URL(location.href);
    url.searchParams.set('author', a.id);
    history.replaceState(null, '', url);
  }, []);

  const handleClosePanel = useCallback(() => {
    if (authorRef.current) {
      setAuthor(null);
      setShowList(true);
      mapHandle.current?.clearAuthor();
      const url = new URL(location.href);
      url.searchParams.delete('author');
      history.replaceState(null, '', url);
    } else {
      setShowList(false);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeCard(); handleClosePanel(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCard, handleClosePanel]);

  const zoomBy   = (factor: number) => mapHandle.current?.zoomBy(factor);
  const zoomHome = () => { closeCard(); mapHandle.current?.zoomHome(); };

  return (
    <div className="app">
      <div id="stage" ref={stageRef} />

      {!loaderGone && (
        <div id="loader" className={loaded ? 'gone' : ''}>
          <div className="compass" />
          <div className="ld-text">{t.authorsLoading}</div>
        </div>
      )}

      <header className="chrome masthead masthead-authors">
        <a className="masthead-back" href={`/globe?primary=${primaryLanguage}`}>{t.authorBack}</a>
        <h1>
          <img className="masthead-logo logo-dark"  src="/icon-dark.svg"  alt="" width="36" height="36" aria-hidden="true" />
          <img className="masthead-logo logo-light" src="/icon-light.svg" alt="" width="36" height="36" aria-hidden="true" />
          {t.authorsTitle}
        </h1>
        <div className="rule"><i /></div>
        <p className="sub">{t.authorsTagline}</p>
      </header>

      <AuthorPanel
        author={author}
        open={author !== null || showList}
        onClose={handleClosePanel}
        t={t}
        primaryLanguage={primaryLanguage}
        onEventSelect={(e) => mapHandle.current?.panToLocation(e.lng, e.lat, Math.max(zoomK * 2, 6))}
        onSelectAuthor={handleSelectAuthor}
        onBookSelect={(id) => mapHandle.current?.openBookById(id)}
      />

      <div className="chrome zoomctl">
        <button onClick={() => zoomBy(1.6)}     title="Zoom in"  aria-label="Zoom in">+</button>
        <span className="globe-zoom-label">{zoomK.toFixed(1)}×</span>
        <button onClick={() => zoomBy(1 / 1.6)} title="Zoom out" aria-label="Zoom out">−</button>
        <button className="home" onClick={zoomHome} title="Reset view" aria-label="Reset view">⤢</button>
      </div>

      <div
        ref={cardRef}
        id="bookCard"
        className={openBook ? 'show' : ''}
        onClick={e => e.stopPropagation()}
      >
        {openBook && (
          <BookCard
            book={openBook}
            displayLanguage={openBook.languages.includes(primaryLanguage) ? primaryLanguage : openBook.languages[0]}
            onClose={closeCard}
            t={t}
            onAuthorSelect={handleSelectAuthor}
          />
        )}
      </div>
    </div>
  );
}
