import type { Author } from './types';

export const AUTHORS: Author[] = [
  {
    id: 'garcia-marquez',
    nameKey: 'Gabriel García Márquez',
    name: 'Gabriel García Márquez',
    born: 1927,
    died: 2014,
    nationality: 'Colombian',
    blurb: 'Born in a small Caribbean town, García Márquez spent decades wandering between Bogotá, Paris, Mexico City, and Barcelona before the solitude of his childhood crystallised into the mythical world of Macondo.',
    bookIds: ['hundredyears', 'cholera'],
    events: [
      { year: 1927, place: 'Aracataca', country: 'Colombia', lng: -74.1909, lat: 10.5942, type: 'birth', note: 'Born in the coastal town that became Macondo' },
      { year: 1948, yearEnd: 1954, place: 'Bogotá / Barranquilla', country: 'Colombia', lng: -74.0721, lat: 4.7110, type: 'lived', note: 'Law student, then journalist — El Espectador' },
      { year: 1955, yearEnd: 1957, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'traveled', note: 'Stranded with almost no money after Colombia severed ties with France' },
      { year: 1957, yearEnd: 1961, place: 'Caracas', country: 'Venezuela', lng: -66.9036, lat: 10.4806, type: 'lived', note: 'Journalist; witnessed the fall of Marcos Pérez Jiménez' },
      { year: 1961, yearEnd: 1967, place: 'Mexico City', country: 'Mexico', lng: -99.1332, lat: 19.4326, type: 'wrote', note: 'Wrote One Hundred Years of Solitude here in 18 months (1965–1966)' },
      { year: 1967, yearEnd: 1975, place: 'Barcelona', country: 'Spain', lng: 2.1734, lat: 41.3851, type: 'lived', note: 'Part of the Latin American literary boom; befriended Mario Vargas Llosa' },
      { year: 1975, yearEnd: 2014, place: 'Mexico City', country: 'Mexico', lng: -99.1332, lat: 19.4326, type: 'lived', note: 'Final home; received Nobel Prize for Literature in 1982' },
      { year: 2014, place: 'Mexico City', country: 'Mexico', lng: -99.1332, lat: 19.4326, type: 'died', note: 'Died of pneumonia, aged 87' },
    ],
  },
  {
    id: 'victor-hugo',
    nameKey: 'Victor Hugo',
    name: 'Victor Hugo',
    born: 1802,
    died: 1885,
    nationality: 'French',
    blurb: 'Hugo spent most of his life in Paris but was twice exiled — first to Brussels, then to the Channel Islands — where he wrote Les Misérables. His return to France was treated as a national event.',
    bookIds: ['notredame', 'lesmis'],
    events: [
      { year: 1802, place: 'Besançon', country: 'France', lng: 6.0241, lat: 47.2378, type: 'birth', note: 'Born in Franche-Comté; father was a general in Napoleon\'s army' },
      { year: 1815, yearEnd: 1851, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: 'Rose from poet-child to towering literary and political figure' },
      { year: 1831, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'wrote', note: 'Published The Hunchback of Notre-Dame' },
      { year: 1851, place: 'Brussels', country: 'Belgium', lng: 4.3517, lat: 50.8503, type: 'traveled', note: 'Fled after Louis-Napoleon\'s coup d\'état' },
      { year: 1852, place: 'Jersey', country: 'UK', lng: -2.1207, lat: 49.2144, type: 'lived', note: 'Exiled from Belgium; began dictating Les Misérables' },
      { year: 1855, yearEnd: 1870, place: 'Guernsey', country: 'UK', lng: -2.5350, lat: 49.4660, type: 'wrote', note: 'Hauteville House — completed Les Misérables (published 1862)' },
      { year: 1870, yearEnd: 1885, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: 'Returned after the fall of Napoleon III; became a senator' },
      { year: 1885, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'died', note: 'State funeral; two million people lined the streets' },
    ],
  },
  {
    id: 'george-orwell',
    nameKey: 'George Orwell',
    name: 'George Orwell',
    born: 1903,
    died: 1950,
    nationality: 'British',
    blurb: 'Eric Blair — who wrote as George Orwell — was born in India, policed Burma, lived in poverty in Paris, fought in Spain, and retreated to a remote Scottish island to write Nineteen Eighty-Four. His life was as restless as his prose.',
    bookIds: ['nineteen84'],
    events: [
      { year: 1903, place: 'Motihari', country: 'India', lng: 84.9120, lat: 26.6584, type: 'birth', note: 'Born in British India (now Bihar, near the Nepal border)' },
      { year: 1911, yearEnd: 1922, place: 'Henley / Eton', country: 'UK', lng: -1.0740, lat: 51.5085, type: 'lived', note: 'Schooling in England; won a scholarship to Eton College' },
      { year: 1922, yearEnd: 1927, place: 'Mandalay', country: 'Myanmar', lng: 96.0891, lat: 21.9588, type: 'lived', note: 'Served as an Imperial Police officer in Burma; resigned in disgust at colonialism' },
      { year: 1928, yearEnd: 1929, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: 'Plunged deliberately into poverty; washed dishes; material for Down and Out in Paris and London' },
      { year: 1936, yearEnd: 1937, place: 'Barcelona', country: 'Spain', lng: 2.1734, lat: 41.3851, type: 'traveled', note: 'Fought with POUM militia in the Spanish Civil War; wounded in the throat' },
      { year: 1938, place: 'Marrakech', country: 'Morocco', lng: -7.9811, lat: 31.6295, type: 'traveled', note: 'Convalesced from tuberculosis; wrote A Moroccan Journal' },
      { year: 1944, yearEnd: 1946, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'wrote', note: 'Wrote Animal Farm; worked at Tribune; wife Eileen died 1945' },
      { year: 1947, yearEnd: 1949, place: 'Jura', country: 'UK', lng: -5.8000, lat: 55.9500, type: 'wrote', note: 'Remote farmhouse on the Isle of Jura — wrote Nineteen Eighty-Four in worsening health' },
      { year: 1950, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'died', note: 'Died of tuberculosis in University College Hospital, aged 46' },
    ],
  },
  {
    id: 'jg-ballard',
    nameKey: 'J.G. Ballard',
    name: 'J.G. Ballard',
    born: 1930,
    died: 2009,
    nationality: 'British',
    blurb: "Ballard was born in Shanghai's International Settlement, interned by the Japanese as a child, and spent the rest of his life in suburban England — yet the trauma of his Shanghai years never left his fiction.",
    bookIds: ['empiresun'],
    events: [
      { year: 1930, place: 'Shanghai', country: 'China', lng: 121.4737, lat: 31.2304, type: 'birth', note: 'Born in the International Settlement; privileged expatriate childhood' },
      { year: 1943, yearEnd: 1945, place: 'Lunghua Camp, Shanghai', country: 'China', lng: 121.4800, lat: 31.1500, type: 'lived', note: 'Interned in Lunghua Civilian Assembly Centre by Japan — the basis for Empire of the Sun' },
      { year: 1946, place: 'Cambridge', country: 'UK', lng: 0.1218, lat: 52.2053, type: 'traveled', note: 'Sent to England; felt like an alien in his own country' },
      { year: 1949, yearEnd: 1951, place: 'Cambridge', country: 'UK', lng: 0.1218, lat: 52.2053, type: 'lived', note: 'Read medicine at King\'s College; left before graduating' },
      { year: 1960, yearEnd: 2009, place: 'Shepperton', country: 'UK', lng: -0.5110, lat: 51.3950, type: 'lived', note: 'Spent almost 50 years in the same semi-detached house in Shepperton, Surrey' },
      { year: 1984, place: 'Shepperton', country: 'UK', lng: -0.5110, lat: 51.3950, type: 'wrote', note: 'Published Empire of the Sun; shortlisted for the Booker Prize' },
      { year: 2009, place: 'Shepperton', country: 'UK', lng: -0.5110, lat: 51.3950, type: 'died', note: 'Died of prostate cancer, aged 78' },
    ],
  },
  {
    id: 'khaled-hosseini',
    nameKey: 'Khaled Hosseini',
    name: 'Khaled Hosseini',
    born: 1965,
    nationality: 'Afghan-American',
    blurb: 'Hosseini grew up in Kabul, lived in Tehran and Paris as the son of a diplomat, and fled to California after the Soviet invasion. His novels are acts of memory — returning to Afghanistan on the page when he could no longer do so in person.',
    bookIds: ['kiterunner', 'thousandsuns'],
    events: [
      { year: 1965, place: 'Kabul', country: 'Afghanistan', lng: 69.1760, lat: 34.5260, type: 'birth', note: 'Born into a middle-class family in Kabul' },
      { year: 1970, yearEnd: 1973, place: 'Tehran', country: 'Iran', lng: 51.3890, lat: 35.6892, type: 'lived', note: 'Father posted to Iranian capital as a diplomat' },
      { year: 1976, yearEnd: 1980, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: 'Father posted to Paris; family applied for asylum after Soviet invasion of Afghanistan (1979)' },
      { year: 1980, yearEnd: 2001, place: 'San Jose', country: 'USA', lng: -121.8863, lat: 37.3382, type: 'lived', note: 'Settled in California; worked as a physician while writing secretly' },
      { year: 2003, place: 'San Jose', country: 'USA', lng: -121.8863, lat: 37.3382, type: 'wrote', note: 'Published The Kite Runner — his debut novel became a global phenomenon' },
      { year: 2007, place: 'San Jose', country: 'USA', lng: -121.8863, lat: 37.3382, type: 'wrote', note: 'Published A Thousand Splendid Suns' },
    ],
  },
  {
    id: 'kazuo-ishiguro',
    nameKey: 'Kazuo Ishiguro',
    name: 'Kazuo Ishiguro',
    born: 1954,
    nationality: 'British-Japanese',
    blurb: 'Born in Nagasaki and raised in England from age five, Ishiguro writes from a position of dual displacement — Japanese by origin yet quintessentially English in sensibility, exploring memory, loss, and what people choose not to remember.',
    bookIds: ['remainsday'],
    events: [
      { year: 1954, place: 'Nagasaki', country: 'Japan', lng: 129.8737, lat: 32.7503, type: 'birth', note: 'Born two years after the atomic bombing; father was an oceanographer' },
      { year: 1960, yearEnd: 1978, place: 'Guildford', country: 'UK', lng: -0.5680, lat: 51.2362, type: 'lived', note: 'Family moved when his father took a job with the British government; grew up in Surrey' },
      { year: 1978, yearEnd: 1980, place: 'Edinburgh', country: 'UK', lng: -3.1883, lat: 55.9533, type: 'lived', note: 'Worked as a grouse beater on the Balmoral estate; later studied at University of East Anglia' },
      { year: 1980, yearEnd: 1986, place: 'Norwich', country: 'UK', lng: 1.2929, lat: 52.6309, type: 'wrote', note: 'MA in Creative Writing at UEA under Malcolm Bradbury; published A Pale View of Hills (1982)' },
      { year: 1987, yearEnd: 1989, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'wrote', note: 'Wrote The Remains of the Day, which won the Booker Prize in 1989' },
      { year: 1989, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'lived', note: 'Settled in London; awarded Nobel Prize for Literature in 2017' },
    ],
  },
  {
    id: 'f-scott-fitzgerald',
    nameKey: 'F. Scott Fitzgerald',
    name: 'F. Scott Fitzgerald',
    born: 1896,
    died: 1940,
    nationality: 'American',
    blurb: 'Fitzgerald charted the arc of the Jazz Age with glittering precision — from the parties of Long Island Sound to the cafés of the Left Bank and the fatal glamour of the French Riviera — before the party ended for him in Hollywood.',
    bookIds: ['gatsby'],
    events: [
      { year: 1896, place: 'Saint Paul, MN', country: 'USA', lng: -93.0900, lat: 44.9537, type: 'birth', note: 'Born in Saint Paul, Minnesota' },
      { year: 1913, yearEnd: 1917, place: 'Princeton, NJ', country: 'USA', lng: -74.6514, lat: 40.3573, type: 'lived', note: 'Princeton University; left without graduating to join the Army in WWI' },
      { year: 1920, yearEnd: 1924, place: 'New York', country: 'USA', lng: -73.9857, lat: 40.7484, type: 'lived', note: 'This Side of Paradise made him famous overnight; married Zelda; the Jazz Age began' },
      { year: 1924, yearEnd: 1926, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'wrote', note: 'Part of the Lost Generation on the Left Bank; wrote The Great Gatsby (published 1925)' },
      { year: 1924, yearEnd: 1930, place: 'Côte d\'Azur', country: 'France', lng: 7.2661, lat: 43.7102, type: 'lived', note: 'Summers on the French Riviera; Tender is the Night is set here; Zelda\'s breakdown began' },
      { year: 1937, yearEnd: 1940, place: 'Hollywood', country: 'USA', lng: -118.2437, lat: 34.0522, type: 'lived', note: 'Worked as a screenwriter; working on The Last Tycoon when he died' },
      { year: 1940, place: 'Hollywood', country: 'USA', lng: -118.2437, lat: 34.0522, type: 'died', note: 'Died of a heart attack, aged 44' },
    ],
  },
];

/** Set of nameKeys for quick lookup in BookCard */
export const AUTHOR_NAME_KEYS = new Set(AUTHORS.map(a => a.nameKey));

/** Find an author by their URL slug */
export function findAuthorById(id: string): Author | undefined {
  return AUTHORS.find(a => a.id === id);
}

/** Find an author by their book.author nameKey */
export function findAuthorByNameKey(nameKey: string): Author | undefined {
  return AUTHORS.find(a => a.nameKey === nameKey);
}
