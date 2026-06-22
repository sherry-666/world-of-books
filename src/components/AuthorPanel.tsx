import { BOOKS } from '../books';
import { AUTHORS, localize } from '../authors';
import { translatePlace } from '../placeNames';
import type { Author, AuthorEvent } from '../types';
import type { UIStrings } from '../i18n';

function coverInitials(name: string): string {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('');
}

const TYPE_COLOR: Record<string, string> = {
  birth: '#f0c060',
  lived: '#4a9edd',
  traveled: '#50c8a0',
  wrote: '#f0a040',
  died: '#9aa0aa',
};

interface Props {
  author: Author | null;
  /** Whether the panel is slid into view (author detail or browse list). */
  open: boolean;
  onClose: () => void;
  t: UIStrings;
  primaryLanguage: string;
  /** Zoom the map to a timeline event's location when its place is clicked. */
  onEventSelect?: (event: AuthorEvent) => void;
  /** Select an author from the browse list (in-page, no reload). */
  onSelectAuthor?: (author: Author) => void;
}

export function AuthorPanel({ author, open, onClose, t, primaryLanguage, onEventSelect, onSelectAuthor }: Props) {
  const authorBooks = author
    ? BOOKS.filter(b => author.bookIds.includes(b.id))
    : [];

  return (
    <div className={`author-panel ${open ? 'open' : ''}`}>
      {!author ? (
        <div className="author-panel-empty">
          <button className="author-panel-close" onClick={onClose} aria-label="Close">×</button>
          <div className="author-section-label">{t.authorsList}</div>
          <div className="author-panel-grid">
            {AUTHORS.map(a => {
              const inner = (
                <>
                  <div className="author-thumb-avatar">{coverInitials(a.name)}</div>
                  <div className="author-thumb-name">{a.name}</div>
                  <div className="author-thumb-dates">{a.born}–{a.died ?? t.present}</div>
                </>
              );
              return onSelectAuthor ? (
                <button key={a.id} className="author-thumb" onClick={() => onSelectAuthor(a)}>
                  {inner}
                </button>
              ) : (
                <a key={a.id} className="author-thumb" href={`/authors?author=${a.id}&primary=${primaryLanguage}`}>
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <button className="author-panel-close" onClick={onClose} aria-label="Close">×</button>
          <div className="author-panel-header">
            <div className="author-avatar">{coverInitials(author.name)}</div>
            <div>
              <h2 className="author-name">{author.name}</h2>
              <div className="author-meta">
                {author.born}–{author.died ?? t.present} · {localize(author.nationality, primaryLanguage)}
              </div>
            </div>
          </div>

          <p className="author-blurb">{localize(author.blurb, primaryLanguage)}</p>

          <div className="author-section-label">{t.lifeJourney}</div>
          <ol className="author-timeline">
            {author.events.map((e, i) => (
              <li key={i} className={`author-tl-item tl-${e.type}`}>
                <span className="tl-dot" style={{ background: TYPE_COLOR[e.type] }} />
                <div className="tl-body">
                  <span className="tl-type" style={{ color: TYPE_COLOR[e.type] }}>
                    {t.timelineLabels[e.type]}
                  </span>
                  <span className="tl-year">
                    {e.yearEnd ? `${e.year}–${e.yearEnd}` : e.year}
                  </span>
                  {onEventSelect ? (
                    <button
                      type="button"
                      className="tl-place tl-place-btn"
                      onClick={() => onEventSelect(e)}
                      title={t.zoomToPlace}
                    >
                      {translatePlace(e.place, primaryLanguage)}
                    </button>
                  ) : (
                    <div className="tl-place">{translatePlace(e.place, primaryLanguage)}</div>
                  )}
                  {e.note && <div className="tl-note">{localize(e.note, primaryLanguage)}</div>}
                </div>
              </li>
            ))}
          </ol>

          {authorBooks.length > 0 && (
            <>
              <div className="author-section-label">{t.booksOnThisMap}</div>
              <div className="author-books">
                {authorBooks.map(b => {
                  const chipTitle = b.titles[primaryLanguage] ?? b.titles['English'] ?? b.titles[b.languages[0]];
                  return (
                  <a
                    key={b.id}
                    className="author-book-chip"
                    href={`/?book=${b.id}&primary=${primaryLanguage}`}
                    title={chipTitle}
                  >
                    <span className="author-book-title">
                      {chipTitle}
                    </span>
                    <span className="author-book-year">{b.year}</span>
                  </a>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
