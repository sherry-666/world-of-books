export const UI = {
  English: {
    eyebrow:          'An Atlas of Literature',
    title:            'Map of Literature',
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
    authorLife:       'Explore life →',
    booksIn:          (n: number, place: string) => `${n} books in ${place}`,
    tweaksTitle:      'Tweaks',
    mapDetail:        'Map detail',
    revealRate:       'Reveal rate',
    placeLabels:      'Place labels',
    graticule:        'Graticule',
    searchPlaceholder:'Search country or region…',
    luckyButton:      'Try my luck',
    authorBack:       '← Map of Literature',
    authorsTitle:     'Atlas of Lives',
    authorsTagline:   'Trace where the writers lived, wandered, and wrote.',
    authorsLoading:   'Charting lives…',
    lifeJourney:      'Life Journey',
    booksOnThisMap:   'Books on this map',
    authorEmptyPrompt:'Open a book on the map, then tap Explore the author to trace their life journey.',
    authorsList:      'Explore an author',
    zoomToPlace:      'Zoom to this place',
    wikiLink:         'Wikipedia',
    present:          'present',
    timelineLabels:   { birth: 'Born', lived: 'Lived', traveled: 'Visited', wrote: 'Wrote', died: 'Died' },
    eventLabels:      { birth: 'Born', lived: 'Lived here', traveled: 'Traveled', wrote: 'Wrote here', died: 'Died' },
    genres: {} as Record<string, string>,
  },
  French: {
    eyebrow:          'Un Atlas de Littérature',
    title:            'Carte de la Littérature',
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
    authorLife:       'Explorer la vie →',
    booksIn:          (n: number, place: string) => `${n} livres à ${place}`,
    tweaksTitle:      'Réglages',
    mapDetail:        'Détails de la carte',
    revealRate:       'Taux de révélation',
    placeLabels:      'Noms de lieux',
    graticule:        'Graticule',
    searchPlaceholder:'Rechercher un pays ou une région…',
    luckyButton:      'Tenter ma chance',
    authorBack:       '← Carte de la Littérature',
    authorsTitle:     'Atlas des Vies',
    authorsTagline:   'Suivez les lieux où les écrivains ont vécu, voyagé et écrit.',
    authorsLoading:   'Cartographie des vies…',
    lifeJourney:      'Parcours de vie',
    booksOnThisMap:   'Livres sur cette carte',
    authorEmptyPrompt:'Ouvrez un livre sur la carte, puis touchez Explorer l\'auteur pour suivre son parcours de vie.',
    authorsList:      'Explorer un auteur',
    zoomToPlace:      'Zoomer sur ce lieu',
    wikiLink:         'Wikipedia',
    present:          'présent',
    timelineLabels:   { birth: 'Né', lived: 'A vécu', traveled: 'A visité', wrote: 'A écrit', died: 'Décédé' },
    eventLabels:      { birth: 'Naissance', lived: 'A vécu ici', traveled: 'A voyagé', wrote: 'A écrit ici', died: 'Décès' },
    genres: {
      'Adventure Fiction':  'Roman d\'aventure',
      'Classic Fiction':    'Fiction classique',
      'Coming-of-Age':      'Roman d\'apprentissage',
      'Drama':              'Drame',
      'Dystopian Fiction':  'Fiction dystopique',
      'Fable':              'Fable',
      'Fantasy':            'Fantaisie',
      'Gothic Fiction':     'Fiction gothique',
      'Historical Epic':    'Épopée historique',
      'Historical Fiction': 'Roman historique',
      'History':            'Histoire',
      'Literary Fiction':   'Fiction littéraire',
      'Magical Realism':    'Réalisme magique',
      'Memoir':             'Mémoires',
      'Mystery':            'Roman policier',
      'Philosophical Fiction':'Fiction philosophique',
      'Romance':            'Roman sentimental',
      'Satire':             'Satire',
      'Science Fiction':    'Science-fiction',
      'Short Stories':      'Nouvelles',
      'Social Realism':     'Réalisme social',
      'Western':            'Western',
    },
  },
  Chinese: {
    eyebrow:          '文学地图集',
    title:            '文海坐标',
    tagline:          '每一处印记，都是一部伟大作品的发生之地。',
    loading:          '绘制世界地图中……',
    zoomHint:         '放大以发现更多故事。',
    ofBooks:          (n: number, total: number) => `共 ${total} 本，显示 ${n} 本`,
    setIn:            '发生地：',
    portraitOf:       '关于',
    aNOVEL:           '小 说',
    aPORTRAIT:        '传 记',
    getBook:          '获取此书',
    authorJourney:    (name: string) => `探索${name}的人生旅程 →`,
    authorLife:       '探索人生旅程 →',
    booksIn:          (n: number, place: string) => `${place}的 ${n} 本书`,
    tweaksTitle:      '设置',
    mapDetail:        '地图细节',
    revealRate:       '显示比例',
    placeLabels:      '地名标注',
    graticule:        '经纬线',
    searchPlaceholder:'搜索国家或地区……',
    luckyButton:      '随机探索',
    authorBack:       '← 文海坐标',
    authorsTitle:     '文人足迹',
    authorsTagline:   '追寻作家们生活、漫游与写作的足迹。',
    authorsLoading:   '绘制人生轨迹中……',
    lifeJourney:      '人生旅程',
    booksOnThisMap:   '地图上的著作',
    authorEmptyPrompt:'在地图上打开一本书，然后点击“探索作者”，追溯其人生旅程。',
    authorsList:      '探索作家',
    zoomToPlace:      '缩放至此地',
    wikiLink:         '维基百科',
    present:          '至今',
    timelineLabels:   { birth: '出生', lived: '居住', traveled: '到访', wrote: '写作', died: '逝世' },
    eventLabels:      { birth: '出生', lived: '曾居于此', traveled: '游历', wrote: '在此写作', died: '逝世' },
    genres: {
      'Adventure Fiction':  '冒险小说',
      'Classic Fiction':    '古典小说',
      'Coming-of-Age':      '成长小说',
      'Drama':              '戏剧',
      'Dystopian Fiction':  '反乌托邦小说',
      'Fable':              '寓言',
      'Fantasy':            '奇幻小说',
      'Gothic Fiction':     '哥特式小说',
      'Historical Epic':    '历史长篇',
      'Historical Fiction': '历史小说',
      'History':            '历史',
      'Literary Fiction':   '文学小说',
      'Magical Realism':    '魔幻现实主义',
      'Memoir':             '回忆录',
      'Mystery':            '悬疑小说',
      'Philosophical Fiction':'哲学小说',
      'Romance':            '言情小说',
      'Satire':             '讽刺小说',
      'Science Fiction':    '科幻小说',
      'Short Stories':      '短篇小说集',
      'Social Realism':     '社会现实主义',
      'Western':            '西部小说',
    },
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
  authorLife: string;
  booksIn: (n: number, place: string) => string;
  tweaksTitle: string;
  mapDetail: string;
  revealRate: string;
  placeLabels: string;
  graticule: string;
  searchPlaceholder: string;
  luckyButton: string;
  authorBack: string;
  authorsTitle: string;
  authorsTagline: string;
  authorsLoading: string;
  lifeJourney: string;
  booksOnThisMap: string;
  authorEmptyPrompt: string;
  authorsList: string;
  zoomToPlace: string;
  wikiLink: string;
  present: string;
  timelineLabels: Record<string, string>;
  eventLabels: Record<string, string>;
  genres: Record<string, string>;
};

export function getUI(lang: string): UIStrings {
  return (UI as Record<string, UIStrings>)[lang] ?? UI.English;
}
