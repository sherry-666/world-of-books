// Illustrated "Map of Stories" book covers, keyed by Book.id.
//
// Scenes live in per-tradition modules and are merged here. To add a cover,
// drop a new entry into the matching module (or add a module and spread it
// below). See ./helpers.ts and design/Book Covers Design - Map of Stories.html.
import { LUXUN_COVERS } from './luxun';
import { MODERN_CHINA_COVERS } from './modernChina';
import { WORLD_COVERS } from './world';

export const BOOK_COVER_SCENES: Record<string, string> = {
  ...LUXUN_COVERS,
  ...MODERN_CHINA_COVERS,
  ...WORLD_COVERS,
};
