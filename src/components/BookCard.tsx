import type { Book, Author } from '../types';
import { findAuthorByNameKey } from '../authors';

function coverInitials(title: string): string {
  const latin = title.replace(/[^A-Za-z ]/g, '').trim();
  if (latin) {
    return latin.split(/\s+/).filter(Boolean).slice(0, 3).map(w => w[0]).join('');
  }
  return Array.from(title)[0] ?? '';
}

interface BookCardProps {
  book: Book;
  displayLanguage: string;
  onClose: () => void;
  /** Called when the user clicks "Explore author" on the author map page. */
  onAuthorSelect?: (author: Author) => void;
  /** Cluster navigation — only set when 2+ books share the same marker. */
  clusterTotal?: number;
  clusterIndex?: number;
  clusterPlace?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export function BookCard({ book, displayLanguage, onClose, onAuthorSelect, clusterTotal, clusterIndex, clusterPlace, onPrev, onNext }: BookCardProps) {
  const title = book.titles[displayLanguage] ?? book.titles[book.languages[0]];
  const blurb = book.blurbs[displayLanguage] ?? book.blurbs[book.languages[0]];
  const initials = coverInitials(title);
  const rel = book.relation === 'set' ? 'Set in' : 'A portrait of';
  const eyebrow = book.relation === 'set' ? 'A NOVEL' : 'A PORTRAIT';
  const authorEntry = findAuthorByNameKey(book.author);

  return (
    <>
      <button
        className="card-close"
        aria-label="Close"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        ×
      </button>

      <div className="cover">
        <div className="cover-frame">
          <div className="cover-top">{eyebrow}</div>
          <div className="cover-title">{title}</div>
          <div className="cover-rule" />
          <div className="cover-author">{book.author}</div>
          <div className="cover-mark">{initials}</div>
        </div>
        <div className="cover-spine" />
      </div>

      <div className="card-body">
        {clusterTotal !== undefined && clusterTotal > 1 && (
          <div className="card-cluster-header">
            {clusterTotal} books in {clusterPlace}
          </div>
        )}
        <div className="card-kicker">
          <span className="pin" />
          {rel} {book.place}, {book.country}
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-meta">
          {book.author} · {book.year}
          {book.pages && <span className="card-readtime"> · ~{Math.round(book.pages / 60)} hr read</span>}
        </div>
        {book.genre && <span className="card-genre">{book.genre}</span>}
        {book.rating !== undefined && (
          <div className="card-rating">
            <span className="card-rating-star">★</span>
            <span className="card-rating-num">{book.rating.toFixed(2)}</span>
            <span className="card-rating-src">{book.ratingSource ?? 'Goodreads'}</span>
          </div>
        )}
        <p className="card-blurb">{blurb}</p>
        <a
          className="card-buy"
          href={`https://www.amazon.com/s?k=${encodeURIComponent((book.titles['English'] ?? title) + ' ' + book.author)}&tag=worldofboo0a6-20`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Get this Book
        </a>

        {clusterTotal !== undefined && clusterTotal > 1 && (
          <div className="card-cluster-nav">
            <button className="cnav-btn" onClick={onPrev} disabled={!onPrev}>‹</button>
            <span className="cnav-pos">{(clusterIndex ?? 0) + 1} / {clusterTotal}</span>
            <button className="cnav-btn" onClick={onNext} disabled={!onNext}>›</button>
          </div>
        )}

        {authorEntry && (
          onAuthorSelect ? (
            <button
              className="card-author-link"
              onClick={(e) => { e.stopPropagation(); onAuthorSelect(authorEntry); }}
            >
              Explore {authorEntry.name}'s journey →
            </button>
          ) : (
            <a
              className="card-author-link"
              href={`/authors?author=${authorEntry.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              Explore {authorEntry.name}'s journey →
            </a>
          )
        )}
      </div>
    </>
  );
}
