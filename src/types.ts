export interface Book {
  id: string;
  author: string;
  year: number;
  place: string;
  country: string;
  lng: number;
  lat: number;
  tier: 1 | 2 | 3;
  relation: 'set' | 'about';
  /**
   * Languages the book is offered in, ranked by preference (primary first).
   * Each entry must have a matching key in `titles` and `blurbs`.
   * When the user's filter includes several of these, the first matching one wins.
   */
  languages: string[];
  /** Title per language, keyed by language name. */
  titles: Record<string, string>;
  /** Blurb per language, keyed by language name. */
  blurbs: Record<string, string>;
  /** Genre label shown in the book card. */
  genre?: string;
  /** Page count (used to compute reading time). */
  pages?: number;
  /** Average rating (0–5). */
  rating?: number;
  /** Source of the rating, defaults to 'Goodreads'. */
  ratingSource?: string;
}

export interface MapTweaks {
  theme: 'atlas' | 'parchment' | 'modern';
  markerStyle: 'spine' | 'dot' | 'cover';
  graticule: boolean;
  labels: boolean;
  reveal: number;
  animate: boolean;
}

/** Text with per-language variants. English is required; others fall back to it. */
export type Localized = { English: string; French?: string; Chinese?: string };

export interface AuthorEvent {
  year: number;
  yearEnd?: number;
  place: string;
  country: string;
  lng: number;
  lat: number;
  type: 'birth' | 'lived' | 'traveled' | 'wrote' | 'died';
  note?: Localized;
  /**
   * For 'wrote' events: the book finished here. Draws a blue link from the
   * book's setting (city written about) to this writing location.
   */
  bookId?: string;
}

export interface Author {
  id: string;        // URL slug, e.g. "garcia-marquez"
  nameKey: string;   // exact match for Book.author field
  name: string;      // display name (English canonical)
  localizedName?: Localized;
  born: number;
  died?: number;
  nationality: Localized;
  blurb: Localized;
  bookIds: string[];
  events: AuthorEvent[];
}

export interface MapHandle {
  zoomBy: (factor: number) => void;
  zoomHome: () => void;
  zoomToBook: (book: Book) => void;
  zoomToScale: (k: number) => void;
  panToLocation: (lng: number, lat: number, zoom: number) => void;
  openBookById: (id: string) => void;
  applyTweaks: (tweaks: MapTweaks) => void;
  setLanguageFilter: (languages: string[]) => void;
  showAuthor: (author: Author) => void;
  clearAuthor: () => void;
  cleanup: () => void;
}

/** Resolves the display language for a book. Primary language is preferred when available. */
export function pickDisplayLanguage(book: Book, filter: Set<string> | null, primary?: string): string | null {
  if (filter === null) {
    return primary && book.languages.includes(primary) ? primary : (book.languages[0] ?? null);
  }
  const eligible = book.languages.filter(l => filter.has(l));
  if (!eligible.length) return null;
  if (primary && eligible.includes(primary)) return primary;
  return eligible[0];
}
