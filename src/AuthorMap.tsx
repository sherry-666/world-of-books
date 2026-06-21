import { useState, useEffect, useRef, useCallback } from 'react';
import { initMap } from './map/mapEngine';
import { AuthorPanel } from './components/AuthorPanel';
import { EventTooltip } from './components/EventTooltip';
import { BookCard } from './components/BookCard';
import { ZoomScale } from './components/ZoomScale';
import { findAuthorById } from './authors';
import { getUI } from './i18n';
import type { Author, AuthorEvent, Book, MapHandle } from './types';

export default function AuthorMap() {
  const stageRef  = useRef<HTMLDivElement>(null);
  const cardRef   = useRef<HTMLDivElement>(null);
  const mapHandle = useRef<MapHandle | null>(null);

  const [loaded,     setLoaded]     = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);
  const [author,     setAuthor]     = useState<Author | null>(null);
  const [openBook,   setOpenBook]   = useState<Book | null>(null);
  const [zoomK,      setZoomK]      = useState(1);
  const [hoveredEvent, setHoveredEvent] = useState<{ event: AuthorEvent; x: number; y: number } | null>(null);

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
    return () => document.documentElement.removeAttribute('data-mode');
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handle = initMap(stage, {
      onBookOpen:           setOpenBook,
      onBookClose:          closeCard,
      onVisibleCountChange: () => {},
      onZoomChange:         setZoomK,
      setCardPosition,
      onEventHover: (event, x, y) => {
        setHoveredEvent(event ? { event, x, y } : null);
      },
      onLoaded: () => {
        setLoaded(true);
        setTimeout(() => setLoaderGone(true), 700);

        // Load author from URL param
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

  const zoomBy   = (factor: number) => mapHandle.current?.zoomBy(factor);
  const zoomHome = () => { closeCard(); mapHandle.current?.zoomHome(); };

  const handleSelectAuthor = useCallback((a: Author) => {
    setAuthor(a);
    mapHandle.current?.showAuthor(a);
    const url = new URL(location.href);
    url.searchParams.set('author', a.id);
    history.replaceState(null, '', url);
  }, []);

  const handleClosePanel = useCallback(() => {
    setAuthor(null);
    mapHandle.current?.clearAuthor();
    const url = new URL(location.href);
    url.searchParams.delete('author');
    history.replaceState(null, '', url);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeCard(); handleClosePanel(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCard, handleClosePanel]);

  return (
    <div className="app">
      <div id="stage" ref={stageRef} />

      {!loaderGone && (
        <div id="loader" className={loaded ? 'gone' : ''}>
          <div className="compass" />
          <div className="ld-text">Charting lives…</div>
        </div>
      )}

      <header className="chrome masthead masthead-authors">
        <a className="masthead-back" href="/">← Map of Books</a>
        <h1>Map of Authors</h1>
        <div className="rule"><i /></div>
        <p className="sub">Trace where the writers lived, wandered, and wrote.</p>
      </header>

      <AuthorPanel
        author={author}
        onClose={handleClosePanel}
      />

      <div className="chrome zoomctl">
        <button onClick={() => zoomBy(1.6)}     title="Zoom in"  aria-label="Zoom in">+</button>
        <ZoomScale zoom={zoomK} min={1} max={256} onChange={(k) => mapHandle.current?.zoomToScale(k)} />
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
            displayLanguage={openBook.languages[0]}
            onClose={closeCard}
            t={getUI(openBook.languages[0])}
            onAuthorSelect={handleSelectAuthor}
          />
        )}
      </div>

      {hoveredEvent && (
        <EventTooltip
          event={hoveredEvent.event}
          x={hoveredEvent.x}
          y={hoveredEvent.y}
        />
      )}
    </div>
  );
}
