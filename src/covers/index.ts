// Illustrated "Map of Stories" book covers, keyed by Book.id.
//
// Scenes live in per-tradition / per-region modules and are merged here. To add
// a cover, drop a new entry into the matching module (or add a module and spread
// it below). See ./helpers.ts and design/Book Covers Design - Map of Stories.html.
import { LUXUN_COVERS } from './luxun';
import { MODERN_CHINA_COVERS } from './modernChina';
import { CHINESE_CLASSIC_COVERS } from './chineseClassics';
import { FRENCH_COVERS } from './french';
import { AMERICAS_COVERS } from './americas';
import { EUROPE_COVERS } from './europe';
import { ASIA_AFRICA_PACIFIC_COVERS } from './asiaAfricaPacific';
import { WORLD_COVERS } from './world';
import { LATIN_AMERICA_COVERS } from './latinAmerica';
import { AMERICAS_EXTRA_COVERS } from './americasExtra';

export const BOOK_COVER_SCENES: Record<string, string> = {
  ...LUXUN_COVERS,
  ...MODERN_CHINA_COVERS,
  ...CHINESE_CLASSIC_COVERS,
  ...FRENCH_COVERS,
  ...AMERICAS_COVERS,
  ...LATIN_AMERICA_COVERS,
  ...AMERICAS_EXTRA_COVERS,
  ...EUROPE_COVERS,
  ...ASIA_AFRICA_PACIFIC_COVERS,
  ...WORLD_COVERS,
};
