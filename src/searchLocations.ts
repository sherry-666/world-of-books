import { CITIES } from './cities';

export interface SearchLocation {
  name: string;
  type: 'continent' | 'region' | 'country';
  lng: number;
  lat: number;
  zoom: number;
}

const CONTINENTS_AND_REGIONS: SearchLocation[] = [
  // Continents
  { name: 'Africa',        type: 'continent', lng:  20,   lat:   0,  zoom: 2.2 },
  { name: 'Asia',          type: 'continent', lng:  90,   lat:  35,  zoom: 1.8 },
  { name: 'Europe',        type: 'continent', lng:  15,   lat:  52,  zoom: 3.0 },
  { name: 'North America', type: 'continent', lng: -100,  lat:  45,  zoom: 2.2 },
  { name: 'South America', type: 'continent', lng:  -60,  lat: -15,  zoom: 2.2 },
  { name: 'Oceania',       type: 'continent', lng:  140,  lat: -25,  zoom: 2.2 },
  { name: 'Antarctica',    type: 'continent', lng:    0,  lat: -80,  zoom: 2.0 },
  // Regions
  { name: 'Middle East',       type: 'region', lng:  45,  lat:  28,  zoom: 3.5 },
  { name: 'Southeast Asia',    type: 'region', lng: 110,  lat:  10,  zoom: 3.0 },
  { name: 'Central Asia',      type: 'region', lng:  65,  lat:  45,  zoom: 3.0 },
  { name: 'East Africa',       type: 'region', lng:  37,  lat:  -2,  zoom: 3.5 },
  { name: 'West Africa',       type: 'region', lng:   0,  lat:  10,  zoom: 3.0 },
  { name: 'North Africa',      type: 'region', lng:  20,  lat:  25,  zoom: 2.8 },
  { name: 'Southern Africa',   type: 'region', lng:  25,  lat: -28,  zoom: 3.5 },
  { name: 'Caribbean',         type: 'region', lng: -70,  lat:  17,  zoom: 4.5 },
  { name: 'Central America',   type: 'region', lng: -85,  lat:  13,  zoom: 4.5 },
  { name: 'Scandinavia',       type: 'region', lng:  18,  lat:  64,  zoom: 4.0 },
  { name: 'British Isles',     type: 'region', lng:  -3,  lat:  54,  zoom: 5.0 },
  { name: 'Iberian Peninsula', type: 'region', lng:  -4,  lat:  40,  zoom: 5.0 },
  { name: 'Balkans',           type: 'region', lng:  21,  lat:  43,  zoom: 5.0 },
  { name: 'Caucasus',          type: 'region', lng:  44,  lat:  42,  zoom: 5.5 },
  { name: 'East Asia',         type: 'region', lng: 115,  lat:  35,  zoom: 3.0 },
  { name: 'South Asia',        type: 'region', lng:  78,  lat:  22,  zoom: 3.0 },
  { name: 'Pacific Islands',   type: 'region', lng: 170,  lat:  -8,  zoom: 3.0 },
];

// Build country list from capitals in cities.ts (one entry per country, using capital coords)
const countryMap = new Map<string, SearchLocation>();
for (const city of CITIES) {
  if (city.type === 'capital' && !countryMap.has(city.country)) {
    countryMap.set(city.country, {
      name: city.country,
      type: 'country',
      lng: city.lng,
      lat: city.lat,
      zoom: 5,
    });
  }
}

export const SEARCH_LOCATIONS: SearchLocation[] = [
  ...CONTINENTS_AND_REGIONS,
  ...Array.from(countryMap.values()),
];

export function searchLocations(query: string): SearchLocation[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  // Prioritise prefix matches, then contains
  const prefix = SEARCH_LOCATIONS.filter(l => l.name.toLowerCase().startsWith(q));
  const contains = SEARCH_LOCATIONS.filter(
    l => !l.name.toLowerCase().startsWith(q) && l.name.toLowerCase().includes(q),
  );
  return [...prefix, ...contains].slice(0, 8);
}
