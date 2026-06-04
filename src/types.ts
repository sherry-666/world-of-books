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

export interface MapHandle {
  zoomBy: (factor: number) => void;
  zoomHome: () => void;
  zoomToBook: (book: Book) => void;
  zoomToScale: (k: number) => void;
  applyTweaks: (tweaks: MapTweaks) => void;
  setLanguageFilter: (languages: string[]) => void;
  cleanup: () => void;
}

/** Resolves the display language for a book given the current filter (highest-ranked match). */
export function pickDisplayLanguage(book: Book, filter: Set<string> | null): string | null {
  if (filter === null) return book.languages[0] ?? null;
  for (const lang of book.languages) if (filter.has(lang)) return lang;
  return null;
}
