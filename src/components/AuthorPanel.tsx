import { BOOKS } from '../books';
import { AUTHORS } from '../authors';
import type { Author } from '../types';

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

const TYPE_LABEL: Record<string, string> = {
  birth: 'Born',
  lived: 'Lived',
  traveled: 'Visited',
  wrote: 'Wrote',
  died: 'Died',
};

interface Props {
  author: Author | null;
  onClose: () => void;
}

export function AuthorPanel({ author, onClose }: Props) {
  const authorBooks = author
    ? BOOKS.filter(b => author.bookIds.includes(b.id))
    : [];

  return (
    <div className={`author-panel ${author ? 'open' : ''}`}>
      {!author ? (
        <div className="author-panel-empty">
          <p>Open a book on the map, then tap <strong>Explore the author</strong> to trace their life journey.</p>
          <div className="author-panel-grid">
            {AUTHORS.map(a => (
              <a key={a.id} className="author-thumb" href={`/authors?author=${a.id}`}>
                <div className="author-thumb-avatar">{coverInitials(a.name)}</div>
                <div className="author-thumb-name">{a.name}</div>
                <div className="author-thumb-dates">{a.born}–{a.died ?? 'present'}</div>
              </a>
            ))}
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
                {author.born}–{author.died ?? 'present'} · {author.nationality}
              </div>
            </div>
          </div>

          <p className="author-blurb">{author.blurb}</p>

          <div className="author-section-label">Life Journey</div>
          <ol className="author-timeline">
            {author.events.map((e, i) => (
              <li key={i} className={`author-tl-item tl-${e.type}`}>
                <span className="tl-dot" style={{ background: TYPE_COLOR[e.type] }} />
                <div className="tl-body">
                  <span className="tl-type" style={{ color: TYPE_COLOR[e.type] }}>
                    {TYPE_LABEL[e.type]}
                  </span>
                  <span className="tl-year">
                    {e.yearEnd ? `${e.year}–${e.yearEnd}` : e.year}
                  </span>
                  <div className="tl-place">{e.place}</div>
                  {e.note && <div className="tl-note">{e.note}</div>}
                </div>
              </li>
            ))}
          </ol>

          {authorBooks.length > 0 && (
            <>
              <div className="author-section-label">Books on this map</div>
              <div className="author-books">
                {authorBooks.map(b => (
                  <a
                    key={b.id}
                    className="author-book-chip"
                    href={`/?book=${b.id}`}
                    title={b.titles['English'] ?? b.titles[b.languages[0]]}
                  >
                    <span className="author-book-title">
                      {b.titles['English'] ?? b.titles[b.languages[0]]}
                    </span>
                    <span className="author-book-year">{b.year}</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
