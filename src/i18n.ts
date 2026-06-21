export const UI = {
  English: {
    eyebrow:          'An Atlas of Stories',
    title:            'Map of Stories',
    tagline:          'Every pin a place a great book is set in — or about.',
    loading:          'Charting the world…',
    zoomHint:         'Zoom in to uncover more stories.',
    ofBooks:          (n: number, total: number) => `${n} of ${total} books in view`,
    setIn:            'Set in',
    portraitOf:       'A portrait of',
    aNOVEL:           'A NOVEL',
    aPORTRAIT:        'A PORTRAIT',
    getBook:          'Get this Book',
    authorJourney:    (name: string) => `Explore ${name}'s journey →`,
    booksIn:          (n: number, place: string) => `${n} books in ${place}`,
    tweaksTitle:      'Tweaks',
    mapDetail:        'Map detail',
    revealRate:       'Reveal rate',
    placeLabels:      'Place labels',
    graticule:        'Graticule',
    searchPlaceholder:'Search country or region…',
  },
  French: {
    eyebrow:          'Un Atlas de Romans',
    title:            'Carte des Histoires',
    tagline:          'Chaque épingle, un lieu où un grand livre se déroule.',
    loading:          'Cartographie en cours…',
    zoomHint:         'Zoomez pour découvrir plus d\'histoires.',
    ofBooks:          (n: number, total: number) => `${n} sur ${total} livres visibles`,
    setIn:            'Situé à',
    portraitOf:       'Portrait de',
    aNOVEL:           'UN ROMAN',
    aPORTRAIT:        'UN PORTRAIT',
    getBook:          'Obtenir ce livre',
    authorJourney:    (name: string) => `Explorer le parcours de ${name} →`,
    booksIn:          (n: number, place: string) => `${n} livres à ${place}`,
    tweaksTitle:      'Réglages',
    mapDetail:        'Détails de la carte',
    revealRate:       'Taux de révélation',
    placeLabels:      'Noms de lieux',
    graticule:        'Graticule',
    searchPlaceholder:'Rechercher un pays ou une région…',
  },
  Chinese: {
    eyebrow:          '故事地图集',
    title:            '故事地图',
    tagline:          '每一枚图钉，都是一部伟大作品的发生之地。',
    loading:          '绘制世界地图中……',
    zoomHint:         '放大以发现更多故事。',
    ofBooks:          (n: number, total: number) => `共 ${total} 本，显示 ${n} 本`,
    setIn:            '发生地：',
    portraitOf:       '关于',
    aNOVEL:           '小 说',
    aPORTRAIT:        '传 记',
    getBook:          '获取此书',
    authorJourney:    (name: string) => `探索${name}的人生旅程 →`,
    booksIn:          (n: number, place: string) => `${place}的 ${n} 本书`,
    tweaksTitle:      '设置',
    mapDetail:        '地图细节',
    revealRate:       '显示比例',
    placeLabels:      '地名标注',
    graticule:        '经纬线',
    searchPlaceholder:'搜索国家或地区……',
  },
} as const satisfies Record<string, UIStrings>;

export type UIStrings = {
  eyebrow: string;
  title: string;
  tagline: string;
  loading: string;
  zoomHint: string;
  ofBooks: (n: number, total: number) => string;
  setIn: string;
  portraitOf: string;
  aNOVEL: string;
  aPORTRAIT: string;
  getBook: string;
  authorJourney: (name: string) => string;
  booksIn: (n: number, place: string) => string;
  tweaksTitle: string;
  mapDetail: string;
  revealRate: string;
  placeLabels: string;
  graticule: string;
  searchPlaceholder: string;
};

export function getUI(lang: string): UIStrings {
  return (UI as Record<string, UIStrings>)[lang] ?? UI.English;
}
