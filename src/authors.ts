import type { Author, Localized } from './types';

/** Build a localized text bundle. French/Chinese fall back to English when omitted. */
function loc(English: string, French?: string, Chinese?: string): Localized {
  return { English, French, Chinese };
}

/** Resolve a localized value for the given language, falling back to English. */
export function localize(text: Localized | undefined, lang: string): string {
  if (!text) return '';
  return (text as Record<string, string>)[lang] ?? text.English;
}

export const AUTHORS: Author[] = [
  {
    id: 'garcia-marquez',
    nameKey: 'Gabriel García Márquez',
    name: 'Gabriel García Márquez',
    born: 1927,
    died: 2014,
    nationality: loc('Colombian', 'Colombien', '哥伦比亚'),
    blurb: loc(
      'Born in a small Caribbean town, García Márquez spent decades wandering between Bogotá, Paris, Mexico City, and Barcelona before the solitude of his childhood crystallised into the mythical world of Macondo.',
      'Né dans une petite ville des Caraïbes, García Márquez a erré pendant des décennies entre Bogotá, Paris, Mexico et Barcelone avant que la solitude de son enfance ne se cristallise dans le monde mythique de Macondo.',
      '加西亚·马尔克斯生于加勒比海边的小镇，曾辗转于波哥大、巴黎、墨西哥城与巴塞罗那数十年，最终将童年的孤独凝结成马孔多那片神话般的世界。',
    ),
    bookIds: ['hundredyears', 'cholera'],
    events: [
      { year: 1927, place: 'Aracataca', country: 'Colombia', lng: -74.1909, lat: 10.5942, type: 'birth', note: loc('Born in the coastal town that became Macondo', 'Né dans la ville côtière qui devint Macondo', '生于后来化身为马孔多的海滨小镇') },
      { year: 1948, yearEnd: 1954, place: 'Bogotá / Barranquilla', country: 'Colombia', lng: -74.0721, lat: 4.7110, type: 'lived', note: loc('Law student, then journalist — El Espectador', 'Étudiant en droit, puis journaliste — El Espectador', '先攻读法律，后成为《观察家报》记者') },
      { year: 1955, yearEnd: 1957, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'traveled', note: loc('Stranded with almost no money after Colombia severed ties with France', 'Bloqué presque sans argent après la rupture des relations entre la Colombie et la France', '哥伦比亚与法国断交后，他几乎身无分文地滞留巴黎') },
      { year: 1957, yearEnd: 1961, place: 'Caracas', country: 'Venezuela', lng: -66.9036, lat: 10.4806, type: 'lived', note: loc('Journalist; witnessed the fall of Marcos Pérez Jiménez', 'Journaliste ; témoin de la chute de Marcos Pérez Jiménez', '任记者，亲历马科斯·佩雷斯·希门尼斯政权的垮台') },
      { year: 1961, yearEnd: 1967, place: 'Mexico City', country: 'Mexico', lng: -99.1332, lat: 19.4326, type: 'wrote', bookId: 'hundredyears', note: loc('Wrote One Hundred Years of Solitude here in 18 months (1965–1966)', 'Y écrivit Cent Ans de solitude en 18 mois (1965–1966)', '在此用十八个月写就《百年孤独》（1965—1966）') },
      { year: 1967, yearEnd: 1975, place: 'Barcelona', country: 'Spain', lng: 2.1734, lat: 41.3851, type: 'lived', note: loc('Part of the Latin American literary boom; befriended Mario Vargas Llosa', 'Au cœur du boom littéraire latino-américain ; se lia d\'amitié avec Mario Vargas Llosa', '置身拉美文学“爆炸”浪潮，与马里奥·巴尔加斯·略萨结为好友') },
      { year: 1975, yearEnd: 2014, place: 'Mexico City', country: 'Mexico', lng: -99.1332, lat: 19.4326, type: 'lived', note: loc('Final home; received Nobel Prize for Literature in 1982', 'Dernière demeure ; reçut le prix Nobel de littérature en 1982', '最后的居所，1982年获诺贝尔文学奖') },
      { year: 2014, place: 'Mexico City', country: 'Mexico', lng: -99.1332, lat: 19.4326, type: 'died', note: loc('Died of pneumonia, aged 87', 'Mort d\'une pneumonie, à 87 ans', '因肺炎逝世，享年87岁') },
    ],
  },
  {
    id: 'victor-hugo',
    nameKey: 'Victor Hugo',
    name: 'Victor Hugo',
    born: 1802,
    died: 1885,
    nationality: loc('French', 'Français', '法国'),
    blurb: loc(
      'Hugo spent most of his life in Paris but was twice exiled — first to Brussels, then to the Channel Islands — where he wrote Les Misérables. His return to France was treated as a national event.',
      'Hugo passa la majeure partie de sa vie à Paris, mais fut exilé deux fois — d\'abord à Bruxelles, puis dans les îles Anglo-Normandes — où il écrivit Les Misérables. Son retour en France fut vécu comme un événement national.',
      '雨果一生大半在巴黎度过，却两度流亡——先至布鲁塞尔，再到海峡群岛，并在那里写下《悲惨世界》。他重返法国时被视为举国大事。',
    ),
    bookIds: ['notredame', 'lesmis'],
    events: [
      { year: 1802, place: 'Besançon', country: 'France', lng: 6.0241, lat: 47.2378, type: 'birth', note: loc('Born in Franche-Comté; father was a general in Napoleon\'s army', 'Né en Franche-Comté ; son père était général dans l\'armée de Napoléon', '生于弗朗什-孔泰，父亲是拿破仑麾下的将军') },
      { year: 1815, yearEnd: 1851, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: loc('Rose from poet-child to towering literary and political figure', 'Passa d\'enfant poète à figure majeure de la littérature et de la politique', '从少年诗人成长为文学与政治的巨擘') },
      { year: 1831, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'wrote', bookId: 'notredame', note: loc('Published The Hunchback of Notre-Dame', 'Publia Notre-Dame de Paris', '出版《巴黎圣母院》') },
      { year: 1851, place: 'Brussels', country: 'Belgium', lng: 4.3517, lat: 50.8503, type: 'traveled', note: loc('Fled after Louis-Napoleon\'s coup d\'état', 'S\'enfuit après le coup d\'État de Louis-Napoléon', '路易·拿破仑发动政变后出逃') },
      { year: 1852, place: 'Jersey', country: 'UK', lng: -2.1207, lat: 49.2144, type: 'lived', note: loc('Exiled from Belgium; began dictating Les Misérables', 'Exilé de Belgique ; commença à dicter Les Misérables', '被逐出比利时，开始口授《悲惨世界》') },
      { year: 1855, yearEnd: 1870, place: 'Guernsey', country: 'UK', lng: -2.5350, lat: 49.4660, type: 'wrote', bookId: 'lesmis', note: loc('Hauteville House — completed Les Misérables (published 1862)', 'Hauteville House — acheva Les Misérables (publié en 1862)', '在高城居完成《悲惨世界》（1862年出版）') },
      { year: 1870, yearEnd: 1885, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: loc('Returned after the fall of Napoleon III; became a senator', 'Revint après la chute de Napoléon III ; devint sénateur', '拿破仑三世垮台后回国，出任参议员') },
      { year: 1885, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'died', note: loc('State funeral; two million people lined the streets', 'Funérailles nationales ; deux millions de personnes dans les rues', '国葬之日，二百万民众夹道送别') },
    ],
  },
  {
    id: 'george-orwell',
    nameKey: 'George Orwell',
    name: 'George Orwell',
    born: 1903,
    died: 1950,
    nationality: loc('British', 'Britannique', '英国'),
    blurb: loc(
      'Eric Blair — who wrote as George Orwell — was born in India, policed Burma, lived in poverty in Paris, fought in Spain, and retreated to a remote Scottish island to write Nineteen Eighty-Four. His life was as restless as his prose.',
      'Eric Blair — qui écrivait sous le nom de George Orwell — naquit en Inde, fut policier en Birmanie, vécut dans la misère à Paris, combattit en Espagne et se retira sur une île écossaise isolée pour écrire 1984. Sa vie fut aussi agitée que sa prose.',
      '埃里克·布莱尔——以乔治·奥威尔之名写作——生于印度，曾在缅甸当警察，在巴黎贫困度日，赴西班牙参战，最后隐居苏格兰偏远海岛写下《一九八四》。他的一生与他的文字一样不得安宁。',
    ),
    bookIds: ['nineteen84'],
    events: [
      { year: 1903, place: 'Motihari', country: 'India', lng: 84.9120, lat: 26.6584, type: 'birth', note: loc('Born in British India (now Bihar, near the Nepal border)', 'Né dans l\'Inde britannique (aujourd\'hui le Bihar, près de la frontière népalaise)', '生于英属印度（今比哈尔邦，邻近尼泊尔边境）') },
      { year: 1911, yearEnd: 1922, place: 'Henley / Eton', country: 'UK', lng: -1.0740, lat: 51.5085, type: 'lived', note: loc('Schooling in England; won a scholarship to Eton College', 'Scolarité en Angleterre ; obtint une bourse pour le collège d\'Eton', '在英格兰求学，获奖学金入读伊顿公学') },
      { year: 1922, yearEnd: 1927, place: 'Mandalay', country: 'Myanmar', lng: 96.0891, lat: 21.9588, type: 'lived', note: loc('Served as an Imperial Police officer in Burma; resigned in disgust at colonialism', 'Officier de la police impériale en Birmanie ; démissionna par dégoût du colonialisme', '在缅甸任帝国警官，因厌恶殖民统治而辞职') },
      { year: 1928, yearEnd: 1929, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: loc('Plunged deliberately into poverty; washed dishes; material for Down and Out in Paris and London', 'Se plongea volontairement dans la misère ; plongeur de vaisselle ; matière de Dans la dèche à Paris et à Londres', '主动投身贫困，靠洗碗为生，成为《巴黎伦敦落魄记》的素材') },
      { year: 1936, yearEnd: 1937, place: 'Barcelona', country: 'Spain', lng: 2.1734, lat: 41.3851, type: 'traveled', note: loc('Fought with POUM militia in the Spanish Civil War; wounded in the throat', 'Combattit dans la milice du POUM pendant la guerre civile espagnole ; blessé à la gorge', '在西班牙内战中随马统工党民兵作战，喉部中弹负伤') },
      { year: 1938, place: 'Marrakech', country: 'Morocco', lng: -7.9811, lat: 31.6295, type: 'traveled', note: loc('Convalesced from tuberculosis; wrote A Moroccan Journal', 'Convalescence après une tuberculose ; écrivit un Journal marocain', '为养肺结核而疗养，写下《摩洛哥日记》') },
      { year: 1944, yearEnd: 1946, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'wrote', note: loc('Wrote Animal Farm; worked at Tribune; wife Eileen died 1945', 'Écrivit La Ferme des animaux ; travailla au Tribune ; sa femme Eileen mourut en 1945', '写就《动物农场》，供职于《论坛报》，妻子艾琳于1945年去世') },
      { year: 1947, yearEnd: 1949, place: 'Jura', country: 'UK', lng: -5.8000, lat: 55.9500, type: 'wrote', bookId: 'nineteen84', note: loc('Remote farmhouse on the Isle of Jura — wrote Nineteen Eighty-Four in worsening health', 'Ferme isolée sur l\'île de Jura — écrivit 1984 alors que sa santé déclinait', '在朱拉岛偏僻的农舍里，于每况愈下的病体中写下《一九八四》') },
      { year: 1950, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'died', note: loc('Died of tuberculosis in University College Hospital, aged 46', 'Mort de la tuberculose au University College Hospital, à 46 ans', '因肺结核病逝于大学学院医院，享年46岁') },
    ],
  },
  {
    id: 'jg-ballard',
    nameKey: 'J.G. Ballard',
    name: 'J.G. Ballard',
    born: 1930,
    died: 2009,
    nationality: loc('British', 'Britannique', '英国'),
    blurb: loc(
      "Ballard was born in Shanghai's International Settlement, interned by the Japanese as a child, and spent the rest of his life in suburban England — yet the trauma of his Shanghai years never left his fiction.",
      'Ballard naquit dans la concession internationale de Shanghai, fut interné par les Japonais enfant et passa le reste de sa vie dans la banlieue anglaise — pourtant le traumatisme de ses années shanghaïennes ne quitta jamais son œuvre.',
      '巴拉德生于上海公共租界，幼年被日军关押，余生定居英格兰郊区——然而上海岁月的创伤始终萦绕在他的小说之中。',
    ),
    bookIds: ['empiresun'],
    events: [
      { year: 1930, place: 'Shanghai', country: 'China', lng: 121.4737, lat: 31.2304, type: 'birth', note: loc('Born in the International Settlement; privileged expatriate childhood', 'Né dans la concession internationale ; enfance privilégiée d\'expatrié', '生于公共租界，度过优渥的侨民童年') },
      { year: 1943, yearEnd: 1945, place: 'Lunghua Camp, Shanghai', country: 'China', lng: 121.4800, lat: 31.1500, type: 'lived', note: loc('Interned in Lunghua Civilian Assembly Centre by Japan — the basis for Empire of the Sun', 'Interné au centre civil de Lunghua par le Japon — source de L\'Empire du soleil', '被日军关押于龙华平民集中营——《太阳帝国》的原型') },
      { year: 1946, place: 'Cambridge', country: 'UK', lng: 0.1218, lat: 52.2053, type: 'traveled', note: loc('Sent to England; felt like an alien in his own country', 'Envoyé en Angleterre ; se sentit étranger dans son propre pays', '被送往英格兰，却在自己的祖国感到格格不入') },
      { year: 1949, yearEnd: 1951, place: 'Cambridge', country: 'UK', lng: 0.1218, lat: 52.2053, type: 'lived', note: loc('Read medicine at King\'s College; left before graduating', 'Étudia la médecine à King\'s College ; partit avant d\'obtenir son diplôme', '在国王学院攻读医学，未毕业便离开') },
      { year: 1960, yearEnd: 2009, place: 'Shepperton', country: 'UK', lng: -0.5110, lat: 51.3950, type: 'lived', note: loc('Spent almost 50 years in the same semi-detached house in Shepperton, Surrey', 'Passa près de 50 ans dans la même maison jumelée à Shepperton, dans le Surrey', '在萨里郡谢珀顿同一栋半独立住宅中住了近五十年') },
      { year: 1984, place: 'Shepperton', country: 'UK', lng: -0.5110, lat: 51.3950, type: 'wrote', bookId: 'empiresun', note: loc('Published Empire of the Sun; shortlisted for the Booker Prize', 'Publia L\'Empire du soleil ; finaliste du Booker Prize', '出版《太阳帝国》，入围布克奖短名单') },
      { year: 2009, place: 'Shepperton', country: 'UK', lng: -0.5110, lat: 51.3950, type: 'died', note: loc('Died of prostate cancer, aged 78', 'Mort d\'un cancer de la prostate, à 78 ans', '因前列腺癌逝世，享年78岁') },
    ],
  },
  {
    id: 'khaled-hosseini',
    nameKey: 'Khaled Hosseini',
    name: 'Khaled Hosseini',
    born: 1965,
    nationality: loc('Afghan-American', 'Afghano-américain', '阿富汗裔美国'),
    blurb: loc(
      'Hosseini grew up in Kabul, lived in Tehran and Paris as the son of a diplomat, and fled to California after the Soviet invasion. His novels are acts of memory — returning to Afghanistan on the page when he could no longer do so in person.',
      'Hosseini grandit à Kaboul, vécut à Téhéran et à Paris comme fils de diplomate, puis fuit en Californie après l\'invasion soviétique. Ses romans sont des actes de mémoire — un retour en Afghanistan sur la page, là où il ne pouvait plus le faire en personne.',
      '胡赛尼在喀布尔长大，作为外交官之子曾旅居德黑兰与巴黎，苏联入侵后逃往加利福尼亚。他的小说是记忆之举——当他再也无法亲身回到阿富汗，便在纸页上重返故土。',
    ),
    bookIds: ['kiterunner', 'thousandsuns'],
    events: [
      { year: 1965, place: 'Kabul', country: 'Afghanistan', lng: 69.1760, lat: 34.5260, type: 'birth', note: loc('Born into a middle-class family in Kabul', 'Né dans une famille de la classe moyenne à Kaboul', '生于喀布尔一个中产家庭') },
      { year: 1970, yearEnd: 1973, place: 'Tehran', country: 'Iran', lng: 51.3890, lat: 35.6892, type: 'lived', note: loc('Father posted to Iranian capital as a diplomat', 'Père en poste diplomatique dans la capitale iranienne', '父亲作为外交官派驻伊朗首都') },
      { year: 1976, yearEnd: 1980, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'lived', note: loc('Father posted to Paris; family applied for asylum after Soviet invasion of Afghanistan (1979)', 'Père en poste à Paris ; la famille demanda l\'asile après l\'invasion soviétique de l\'Afghanistan (1979)', '父亲调驻巴黎；苏联入侵阿富汗（1979年）后，全家申请政治庇护') },
      { year: 1980, yearEnd: 2001, place: 'San Jose', country: 'USA', lng: -121.8863, lat: 37.3382, type: 'lived', note: loc('Settled in California; worked as a physician while writing secretly', 'S\'installa en Californie ; exerça comme médecin tout en écrivant en secret', '定居加州，一边行医一边悄悄写作') },
      { year: 2003, place: 'San Jose', country: 'USA', lng: -121.8863, lat: 37.3382, type: 'wrote', bookId: 'kiterunner', note: loc('Published The Kite Runner — his debut novel became a global phenomenon', 'Publia Les Cerfs-volants de Kaboul — son premier roman devint un phénomène mondial', '出版《追风筝的人》，这部处女作风靡全球') },
      { year: 2007, place: 'San Jose', country: 'USA', lng: -121.8863, lat: 37.3382, type: 'wrote', bookId: 'thousandsuns', note: loc('Published A Thousand Splendid Suns', 'Publia Mille soleils splendides', '出版《灿烂千阳》') },
    ],
  },
  {
    id: 'kazuo-ishiguro',
    nameKey: 'Kazuo Ishiguro',
    name: 'Kazuo Ishiguro',
    born: 1954,
    nationality: loc('British-Japanese', 'Anglo-japonais', '日裔英国'),
    blurb: loc(
      'Born in Nagasaki and raised in England from age five, Ishiguro writes from a position of dual displacement — Japanese by origin yet quintessentially English in sensibility, exploring memory, loss, and what people choose not to remember.',
      'Né à Nagasaki et élevé en Angleterre dès l\'âge de cinq ans, Ishiguro écrit depuis un double déracinement — japonais d\'origine mais profondément anglais de sensibilité, explorant la mémoire, la perte et ce que l\'on choisit d\'oublier.',
      '石黑一雄生于长崎，五岁起在英格兰长大，从双重的疏离中写作——血缘上是日本人，气质却彻底英国化，他笔下探究记忆、失落，以及人们选择不去记起的事。',
    ),
    bookIds: ['remainsday'],
    events: [
      { year: 1954, place: 'Nagasaki', country: 'Japan', lng: 129.8737, lat: 32.7503, type: 'birth', note: loc('Born two years after the atomic bombing; father was an oceanographer', 'Né deux ans après le bombardement atomique ; son père était océanographe', '生于原子弹轰炸两年之后，父亲是海洋学家') },
      { year: 1960, yearEnd: 1978, place: 'Guildford', country: 'UK', lng: -0.5680, lat: 51.2362, type: 'lived', note: loc('Family moved when his father took a job with the British government; grew up in Surrey', 'La famille déménagea lorsque son père prit un poste au gouvernement britannique ; grandit dans le Surrey', '父亲受聘于英国政府后举家迁居，他在萨里郡长大') },
      { year: 1978, yearEnd: 1980, place: 'Edinburgh', country: 'UK', lng: -3.1883, lat: 55.9533, type: 'lived', note: loc('Worked as a grouse beater on the Balmoral estate; later studied at University of East Anglia', 'Rabatteur de grouse sur le domaine de Balmoral ; étudia ensuite à l\'université d\'East Anglia', '曾在巴尔莫勒尔庄园当松鸡驱赶员，后入读东英吉利大学') },
      { year: 1980, yearEnd: 1986, place: 'Norwich', country: 'UK', lng: 1.2929, lat: 52.6309, type: 'wrote', note: loc('MA in Creative Writing at UEA under Malcolm Bradbury; published A Pale View of Hills (1982)', 'Master de création littéraire à l\'UEA sous Malcolm Bradbury ; publia Lumière pâle sur les collines (1982)', '在东英吉利大学师从马尔科姆·布拉德伯里攻读创意写作硕士，出版《远山淡影》（1982）') },
      { year: 1987, yearEnd: 1989, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'wrote', bookId: 'remainsday', note: loc('Wrote The Remains of the Day, which won the Booker Prize in 1989', 'Écrivit Les Vestiges du jour, qui remporta le Booker Prize en 1989', '写就《长日将尽》，于1989年荣获布克奖') },
      { year: 1989, place: 'London', country: 'UK', lng: -0.1276, lat: 51.5074, type: 'lived', note: loc('Settled in London; awarded Nobel Prize for Literature in 2017', 'S\'installa à Londres ; reçut le prix Nobel de littérature en 2017', '定居伦敦，2017年获诺贝尔文学奖') },
    ],
  },
  {
    id: 'f-scott-fitzgerald',
    nameKey: 'F. Scott Fitzgerald',
    name: 'F. Scott Fitzgerald',
    born: 1896,
    died: 1940,
    nationality: loc('American', 'Américain', '美国'),
    blurb: loc(
      'Fitzgerald charted the arc of the Jazz Age with glittering precision — from the parties of Long Island Sound to the cafés of the Left Bank and the fatal glamour of the French Riviera — before the party ended for him in Hollywood.',
      'Fitzgerald traça l\'arc de l\'âge du jazz avec une précision étincelante — des fêtes du Long Island Sound aux cafés de la Rive gauche et au glamour fatal de la Côte d\'Azur — avant que la fête ne s\'achève pour lui à Hollywood.',
      '菲茨杰拉德以璀璨的笔触描摹爵士时代的轨迹——从长岛海湾的派对，到左岸的咖啡馆，再到法国里维埃拉那致命的浮华——直到这场盛宴最终在好莱坞为他落幕。',
    ),
    bookIds: ['gatsby'],
    events: [
      { year: 1896, place: 'Saint Paul, MN', country: 'USA', lng: -93.0900, lat: 44.9537, type: 'birth', note: loc('Born in Saint Paul, Minnesota', 'Né à Saint Paul, dans le Minnesota', '生于明尼苏达州圣保罗') },
      { year: 1913, yearEnd: 1917, place: 'Princeton, NJ', country: 'USA', lng: -74.6514, lat: 40.3573, type: 'lived', note: loc('Princeton University; left without graduating to join the Army in WWI', 'Université de Princeton ; partit sans diplôme pour s\'engager dans l\'armée durant la Première Guerre mondiale', '就读普林斯顿大学，未毕业即从军参加一战') },
      { year: 1920, yearEnd: 1924, place: 'New York', country: 'USA', lng: -73.9857, lat: 40.7484, type: 'lived', note: loc('This Side of Paradise made him famous overnight; married Zelda; the Jazz Age began', 'L\'Envers du paradis le rendit célèbre du jour au lendemain ; épousa Zelda ; l\'âge du jazz commença', '《人间天堂》令他一夜成名，迎娶泽尔达，爵士时代由此开启') },
      { year: 1924, yearEnd: 1926, place: 'Paris', country: 'France', lng: 2.3522, lat: 48.8566, type: 'wrote', bookId: 'gatsby', note: loc('Part of the Lost Generation on the Left Bank; wrote The Great Gatsby (published 1925)', 'Membre de la Génération perdue sur la Rive gauche ; écrivit Gatsby le Magnifique (publié en 1925)', '身处左岸“迷惘的一代”，写下《了不起的盖茨比》（1925年出版）') },
      { year: 1924, yearEnd: 1930, place: 'Côte d\'Azur', country: 'France', lng: 7.2661, lat: 43.7102, type: 'lived', note: loc('Summers on the French Riviera; Tender is the Night is set here; Zelda\'s breakdown began', 'Étés sur la Côte d\'Azur ; Tendre est la nuit s\'y déroule ; le déclin de Zelda commença', '在法国里维埃拉度过夏日，《夜色温柔》以此为背景，泽尔达的精神崩溃也始于此') },
      { year: 1937, yearEnd: 1940, place: 'Hollywood', country: 'USA', lng: -118.2437, lat: 34.0522, type: 'lived', note: loc('Worked as a screenwriter; working on The Last Tycoon when he died', 'Travailla comme scénariste ; rédigeait Le Dernier Nabab à sa mort', '担任编剧，离世时正在创作《最后的大亨》') },
      { year: 1940, place: 'Hollywood', country: 'USA', lng: -118.2437, lat: 34.0522, type: 'died', note: loc('Died of a heart attack, aged 44', 'Mort d\'une crise cardiaque, à 44 ans', '因心脏病发作逝世，享年44岁') },
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
