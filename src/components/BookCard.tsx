import type { Book } from '../types';

function coverInitials(title: string): string {
  // For Latin-script titles, take the first letter of up to 3 words.
  const latin = title.replace(/[^A-Za-z ]/g, '').trim();
  if (latin) {
    return latin.split(/\s+/).filter(Boolean).slice(0, 3).map(w => w[0]).join('');
  }
  // For non-Latin scripts (e.g. CJK), use the first character of the title.
  return Array.from(title)[0] ?? '';
}

interface BookCardProps {
  book: Book;
  displayLanguage: string;
  onClose: () => void;
  onCenter: () => void;
}

export function BookCard({ book, displayLanguage, onClose, onCenter }: BookCardProps) {
  const title = book.titles[displayLanguage] ?? book.titles[book.languages[0]];
  const blurb = book.blurbs[displayLanguage] ?? book.blurbs[book.languages[0]];
  const initials = coverInitials(title);
  const rel = book.relation === 'set' ? 'Set in' : 'A portrait of';
  const eyebrow = book.relation === 'set' ? 'A NOVEL' : 'A PORTRAIT';

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
        <div className="card-kicker">
          <span className="pin" />
          {rel} {book.place}, {book.country}
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-meta">{book.author} · {book.year}</div>
        {book.rating !== undefined && (
          <div className="card-rating">
            <span className="card-rating-star">★</span>
            <span className="card-rating-num">{book.rating.toFixed(2)}</span>
            <span className="card-rating-src">Goodreads</span>
          </div>
        )}
        <p className="card-blurb">{blurb}</p>
        <button
          className="card-fly"
          onClick={(e) => { e.stopPropagation(); onCenter(); }}
        >
          Center on map →
        </button>
      </div>
    </>
  );
}
