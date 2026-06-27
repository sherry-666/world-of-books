// Modern Chinese literature — Xiao Hong, Shen Congwen, Eileen Chang, Lao She, Ba Jin.
import { scene, stars, mansion, lanterns } from './helpers';

export const MODERN_CHINA_COVERS: Record<string, string> = {

  /* ── 呼兰河传 Tales of Hulan River · Hulan — blazing northern sunset clouds (火烧云) over the plain ── */
  hulanriver: scene(`
    <defs>
      <linearGradient id="hlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#36304e"/><stop offset=".38" stop-color="#8a3a4a"/>
        <stop offset=".68" stop-color="#e0632e"/><stop offset="1" stop-color="#f6b24e"/></linearGradient>
      <radialGradient id="hlSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3c8"/><stop offset=".5" stop-color="#ffcf72" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffcf72" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hlSky)"/>
    <circle cx="150" cy="276" r="118" fill="url(#hlSun)"/>
    <circle cx="150" cy="284" r="30" fill="#fff0c0" opacity=".9"/>
    ${stars(8, 5)}
    ${[[150, 110, 130, 14, '#c64a3e', .5], [110, 150, 150, 12, '#e0632e', .5], [180, 196, 170, 13, '#f08a3e', .5], [120, 232, 200, 16, '#ffc066', .45]].map(([cx, cy, rx, ry, c, o]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}" opacity="${o}"/>`).join('')}
    <rect x="0" y="318" width="300" height="132" fill="#3a2a22"/>
    <g fill="#241712">
      <rect x="0" y="306" width="300" height="14"/>
      <rect x="36" y="288" width="40" height="20"/><path d="M30 288 L56 274 L82 288 Z"/>
      <rect x="200" y="292" width="34" height="16"/><path d="M195 292 L217 280 L239 292 Z"/>
    </g>
    ${[[92, 340], [120, 348], [182, 342], [208, 350]].map(([x, y]) => `<g stroke="#1a3a1f" stroke-width="2.4" fill="none" stroke-linecap="round"><path d="M${x} ${y + 18} V${y}"/><circle cx="${x}" cy="${y - 3}" r="4" fill="#e8c84a"/></g>`).join('')}
  `),

  /* ── 湘行散记 A Record of Journey to Hunan · Xiangxi — misty jade river, karst peaks, a sampan ── */
  xiangjournals: scene(`
    <defs>
      <linearGradient id="xjSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d4e6dc"/><stop offset=".45" stop-color="#a7cabf"/>
        <stop offset=".78" stop-color="#7aa89c"/><stop offset="1" stop-color="#577f76"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#xjSky)"/>
    <circle cx="150" cy="140" r="120" fill="#eef5ef" opacity=".4"/>
    ${stars(7, 9)}
    <path d="M0 250 L40 200 L70 248 L110 188 L150 250 H0 Z" fill="#86aaa0" opacity=".6"/>
    <path d="M150 250 L200 192 L240 246 L280 196 L300 250 H150 Z" fill="#86aaa0" opacity=".6"/>
    <path d="M0 268 L60 210 L120 268 Z" fill="#5f8a7f" opacity=".75"/>
    <path d="M150 268 L220 204 L300 268 Z" fill="#5f8a7f" opacity=".75"/>
    <ellipse cx="150" cy="262" rx="220" ry="22" fill="#e4efe8" opacity=".4"/>
    <rect x="0" y="278" width="300" height="172" fill="#4d756c"/>
    <rect x="0" y="278" width="300" height="172" fill="#c7ddd4" opacity=".12"/>
    <g>
      <path d="M124 350 L176 350 L168 362 L132 362 Z" fill="#2e1f15"/>
      <path d="M134 350 Q150 332 166 350 Z" fill="#5a3e26"/>
      <line x1="166" y1="346" x2="190" y2="320" stroke="#2e1f15" stroke-width="2"/>
      <circle cx="150" cy="345" r="3" fill="#2e1f15"/>
    </g>
    <path d="M0 392 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#e4efe8" stroke-width=".7" fill="none" opacity=".4"/>
    <path d="M0 418 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#e4efe8" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── 倾城之恋 Love in a Fallen City · Hong Kong — rose-gold harbour dusk, the Peak, a searchlight ── */
  fallencity: scene(`
    <defs>
      <linearGradient id="fcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f3c6a4"/><stop offset=".4" stop-color="#e69684"/>
        <stop offset=".72" stop-color="#bf5a6c"/><stop offset="1" stop-color="#572d49"/></linearGradient>
      <radialGradient id="fcSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff1d6"/><stop offset=".5" stop-color="#ffcd8e" stop-opacity=".82"/>
        <stop offset="1" stop-color="#ffcd8e" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fcSky)"/>
    <circle cx="118" cy="250" r="110" fill="url(#fcSun)"/>
    <circle cx="118" cy="250" r="30" fill="#fff0c8" opacity=".9"/>
    ${stars(9, 11)}
    <polygon points="0,206 70,206 30,300 0,300" fill="#fff3d6" opacity=".12"/>
    <path d="M0 300 Q90 250 180 300 Z" fill="#4a2c44"/>
    <g fill="#3a2036">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 13 }).map((_, i) => { const x = i * 24, h = 18 + ((i * 53) % 46), w = 16; return `<rect x="${x}" y="${300 - h}" width="${w}" height="${h}"/>`; }).join('')}
    </g>
    ${[[34, 290], [82, 286], [150, 292], [206, 288], [262, 294]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="5" fill="#ffd98a" opacity=".75"/>`).join('')}
    <rect x="0" y="340" width="300" height="110" fill="#2e1830"/>
    <rect x="0" y="340" width="300" height="110" fill="url(#fcSun)" opacity=".16"/>
    <rect x="104" y="340" width="20" height="92" fill="#ffd9a0" opacity=".22"/>
    <path d="M0 372 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#ffd9b0" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 404 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#ffd9b0" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── 骆驼祥子 Rickshaw Boy · Old Beijing — dusty yellow haze, Qianmen gate, a lone rickshaw ── */
  rickshaw: scene(`
    <defs>
      <linearGradient id="rkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#caa85a"/><stop offset=".45" stop-color="#d6b46a"/>
        <stop offset=".75" stop-color="#c19450"/><stop offset="1" stop-color="#8a6336"/></linearGradient>
      <radialGradient id="rkSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff2cf" stop-opacity=".9"/><stop offset="1" stop-color="#fff2cf" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#rkSky)"/>
    <circle cx="150" cy="150" r="120" fill="url(#rkSun)"/>
    <circle cx="150" cy="150" r="28" fill="#fff0c0" opacity=".55"/>
    ${stars(6, 3)}
    <ellipse cx="150" cy="250" rx="220" ry="26" fill="#e6cf94" opacity=".18"/>
    <g fill="#5a4326">
      <rect x="0" y="318" width="300" height="36"/>
      <rect x="104" y="276" width="92" height="42"/>
      <path d="M96 276 Q100 266 112 266 L188 266 Q200 266 204 276 Z"/>
      <rect x="118" y="250" width="64" height="26"/>
      <path d="M110 250 Q114 240 126 240 L174 240 Q186 240 190 250 Z"/>
      <line x1="150" y1="240" x2="150" y2="228" stroke="#5a4326" stroke-width="3"/>
    </g>
    <rect x="0" y="354" width="300" height="96" fill="#4a3620"/>
    <g fill="#241a10" stroke="#241a10">
      <circle cx="132" cy="402" r="15" fill="none" stroke-width="3"/>
      <circle cx="132" cy="402" r="2.4"/>
      <path d="M120 392 L156 392 L162 404 L120 404 Z" stroke="none"/>
      <line x1="156" y1="394" x2="178" y2="382" stroke-width="3"/>
      <circle cx="184" cy="376" r="5" stroke="none"/>
      <path d="M184 381 L178 400 L190 400 Z" stroke="none"/>
    </g>
  `),

  /* ── 茶馆 Teahouse · Beijing — evening rooftops, a lantern-lit teahouse front, rising steam ── */
  teahouse: scene(`
    <defs>
      <linearGradient id="thSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#221a28"/><stop offset=".55" stop-color="#3e2a2e"/>
        <stop offset="1" stop-color="#6e4632"/></linearGradient>
      <radialGradient id="thGlow" cx="50%" cy="78%" r="55%">
        <stop offset="0" stop-color="#ffb14d" stop-opacity=".5"/><stop offset="1" stop-color="#ffb14d" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#thSky)"/>
    <rect width="300" height="450" fill="url(#thGlow)"/>
    ${stars(10, 7)}
    <g fill="#1a1118">
      <path d="M0 300 Q40 286 80 300 L80 308 L0 308 Z"/>
      <path d="M220 300 Q260 286 300 300 L300 308 L220 308 Z"/>
    </g>
    <g fill="#2a1a18">
      <rect x="78" y="300" width="144" height="150"/>
      <rect x="70" y="286" width="160" height="16"/>
      <path d="M62 286 Q72 272 88 272 L212 272 Q228 272 238 286 Z"/>
    </g>
    ${[[108, 312], [150, 312], [192, 312]].map(([x, y]) => `<rect x="${x - 11}" y="${y}" width="22" height="26" rx="1.5" fill="#ffb84d"/><rect x="${x - 11}" y="${y}" width="22" height="26" rx="1.5" fill="#7a3a16" opacity=".18"/>`).join('')}
    ${[100, 200].map(x => `<g><circle cx="${x}" cy="300" r="9" fill="#ff7a3c" opacity=".45"/><ellipse cx="${x}" cy="300" rx="5.5" ry="7" fill="#e23b2e"/></g>`).join('')}
    <rect x="138" y="338" width="24" height="40" fill="#5a2e18"/>
    <rect x="143" y="344" width="14" height="20" fill="#ffcf78" opacity=".5"/>
    <g stroke="#e8d8c0" stroke-width="2" fill="none" opacity=".3" stroke-linecap="round">
      <path d="M120 270 q-6 -16 2 -30 q6 -10 0 -22"/>
      <path d="M180 270 q6 -16 -2 -30 q-6 -10 0 -22"/>
    </g>
  `),

  /* ── 家 Family · Chengdu — the Gao mansion at cold twilight, lanterns lit (Torrents I) ── */
  family: scene(`
    <defs>
      <linearGradient id="faSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1b2444"/><stop offset=".5" stop-color="#2e3a5c"/>
        <stop offset="1" stop-color="#4a4a64"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#faSky)"/>
    <circle cx="196" cy="120" r="30" fill="#dfe4f2" opacity=".5"/>
    ${stars(14, 5)}
    <ellipse cx="150" cy="280" rx="220" ry="26" fill="#cdd6ec" opacity=".08"/>
    ${mansion('#0e1426')}
    <rect x="142" y="296" width="16" height="14" fill="#ffcf78" opacity=".7"/>
    ${lanterns(0.95)}
  `),

  /* ── 春 Spring · Chengdu — the same house under a tender green dawn, a blossom branch (Torrents II) ── */
  chun: scene(`
    <defs>
      <linearGradient id="chnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#cfe2c4"/><stop offset=".45" stop-color="#e7dcc0"/>
        <stop offset=".8" stop-color="#e9c6c2"/><stop offset="1" stop-color="#b89a86"/></linearGradient>
      <radialGradient id="chnSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff7e0" stop-opacity=".9"/><stop offset="1" stop-color="#fff7e0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#chnSky)"/>
    <circle cx="150" cy="150" r="110" fill="url(#chnSun)"/>
    <circle cx="150" cy="150" r="26" fill="#fff7e0" opacity=".7"/>
    ${stars(6, 3)}
    ${mansion('#3a4a3a')}
    ${lanterns(0.5)}
    <g stroke="#5a3e36" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M0 44 Q56 76 110 64"/>
      <path d="M38 58 Q66 34 88 40"/>
    </g>
    ${[[18, 50], [50, 54], [84, 46], [106, 62], [66, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#ffd9e0" opacity=".95"/><circle cx="${x}" cy="${y}" r="1.4" fill="#e88aa0"/>`).join('')}
    ${Array.from({ length: 12 }).map((_, i) => { const x = (i * 67) % 300, y = (i * 47 + 40) % 250; return `<ellipse cx="${x}" cy="${y}" rx="2.4" ry="1.3" transform="rotate(${i * 40} ${x} ${y})" fill="#ffdbe2" opacity="${(0.4 + (i % 4) / 12).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── 秋 Autumn · Chengdu — the house in rust dusk, falling leaves, the family disperses (Torrents III) ── */
  qiu: scene(`
    <defs>
      <linearGradient id="qiuSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#caa14e"/><stop offset=".4" stop-color="#c07636"/>
        <stop offset=".74" stop-color="#8a4630"/><stop offset="1" stop-color="#3e2420"/></linearGradient>
      <radialGradient id="qiuSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffeec0"/><stop offset=".5" stop-color="#ffc878" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffc878" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#qiuSky)"/>
    <circle cx="150" cy="160" r="120" fill="url(#qiuSun)"/>
    <circle cx="150" cy="160" r="28" fill="#fff0cf" opacity=".75"/>
    ${stars(8, 7)}
    ${mansion('#2a1b16')}
    ${lanterns(0.4)}
    ${Array.from({ length: 18 }).map((_, i) => { const x = (i * 71 + 12) % 300, y = (i * 53 + 30) % 280, rot = i * 47; return `<path d="M${x} ${y} q4 -5 0 -10 q-4 5 0 10Z" transform="rotate(${rot} ${x} ${y})" fill="${i % 2 ? '#d98a3e' : '#b5562a'}" opacity="${(0.5 + (i % 4) / 12).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── 寒夜 Cold Nights · Chongqing — cold dark hillside city, fog over the river, one dim window ── */
  coldnight: scene(`
    <defs>
      <linearGradient id="cnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#10162a"/><stop offset=".5" stop-color="#1b2440"/>
        <stop offset="1" stop-color="#2c3653"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cnSky)"/>
    <circle cx="196" cy="110" r="46" fill="#aab6d2" opacity=".14"/>
    <circle cx="196" cy="110" r="20" fill="#c6d0e6" opacity=".3"/>
    ${stars(14, 3)}
    <path d="M0 300 L300 230 L300 300 Z" fill="#141b30"/>
    <g fill="#0c1124">
      ${Array.from({ length: 16 }).map((_, i) => { const x = i * 19; const base = 318 - i * 4; const h = 30 + ((i * 37) % 40); return `<rect x="${x}" y="${base - h}" width="16" height="${h + 140}"/>`; }).join('')}
    </g>
    ${[[50, 300], [104, 284], [156, 270], [120, 320], [70, 330], [210, 264], [244, 250]].map(([x, y]) => `<rect x="${x}" y="${y}" width="5" height="7" fill="#3f4a68" opacity=".7"/>`).join('')}
    <rect x="150" y="296" width="6" height="8" fill="#ffcf78" opacity=".55"/>
    <circle cx="153" cy="300" r="9" fill="#ffcf78" opacity=".12"/>
    <rect x="0" y="416" width="300" height="34" fill="#0a0f1f"/>
    <ellipse cx="150" cy="416" rx="240" ry="14" fill="#aab6d2" opacity=".08"/>
  `),

  /* ── 扶桑 · San Francisco Chinatown 1870s — fog, red lanterns, a woman of endurance ── */
  fusang: scene(`
    <defs>
      <linearGradient id="fusSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1010"/><stop offset=".5" stop-color="#2e1e10"/>
        <stop offset="1" stop-color="#3e2810"/>
      </linearGradient>
      <radialGradient id="fusG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e84020" stop-opacity=".3"/>
        <stop offset="1" stop-color="#e84020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fusSky)"/>
    ${stars(8, 113)}
    <rect x="0" y="0" width="300" height="450" fill="#e8e0d0" opacity=".06"/>
    <g fill="#160e08">
      <rect x="0" y="194" width="72" height="256"/>
      <rect x="228" y="180" width="72" height="270"/>
      <rect x="80" y="220" width="48" height="230"/>
      <rect x="174" y="210" width="48" height="240"/>
    </g>
    ${[[6,212],[20,212],[6,244],[20,244],[234,196],[248,196],[234,228],[248,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e84020" opacity=".42"/>`).join('')}
    <rect x="0" y="370" width="300" height="80" fill="#120a04"/>
    <g fill="#e84020" opacity=".72">
      ${[114,136,158,180].map(x=>`<ellipse cx="${x}" cy="${218}" rx="8" ry="12"/><rect x="${x-2}" y="${206}" width="4" height="10"/><rect x="${x-10}" y="${230}" width="20" height="4" rx="1"/>`).join('')}
    </g>
    <circle cx="147" cy="194" r="80" fill="url(#fusG)"/>
    <g fill="#1e1208">
      <circle cx="150" cy="282" r="8"/>
      <rect x="146" y="290" width="7" height="30" rx="1"/>
      <path d="M138 306 L146 294 L154 294 L162 306 L158 322 L142 322 Z"/>
      <path d="M138 306 Q128 318 132 330 Q136 318 144 316"/>
      <path d="M162 306 Q172 318 168 330 Q164 318 156 316"/>
    </g>
    <path d="M0 370 Q150 362 300 368" stroke="#e84020" stroke-width=".5" fill="none" opacity=".2"/>
  `),

  /* ── 纽约客 · New York — Manhattan skyline, an exile's winter window, cold blue longing ── */
  newyorkers: scene(`
    <defs>
      <linearGradient id="nySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".4" stop-color="#0e1422"/>
        <stop offset=".7" stop-color="#182038"/><stop offset="1" stop-color="#243050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nySky)"/>
    ${stars(14, 117)}
    <g fill="#0e1422">
      <rect x="0" y="180" width="18" height="270"/>
      <rect x="22" y="206" width="14" height="244"/>
      <rect x="40" y="170" width="20" height="280"/>
      <rect x="64" y="228" width="12" height="222"/>
      <rect x="80" y="188" width="16" height="262"/>
      <rect x="100" y="160" width="24" height="290"/>
      <rect x="128" y="192" width="14" height="258"/>
      <rect x="146" y="140" width="28" height="310"/>
      <rect x="178" y="196" width="16" height="254"/>
      <rect x="198" y="168" width="22" height="282"/>
      <rect x="224" y="206" width="14" height="244"/>
      <rect x="242" y="178" width="20" height="272"/>
      <rect x="266" y="218" width="14" height="232"/>
      <rect x="284" y="186" width="16" height="264"/>
    </g>
    ${Array.from({length:28}).map((_,i)=>{const x=(i*37+11)%300, y=160+(i*29)%220; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#ffc848" opacity="${0.15+((i*7)%5)/10}"/>`;}).join('')}
    <rect x="146" y="132" width="4" height="10" fill="#0e1422"/>
    <rect x="144" y="128" width="8" height="6" fill="#0e1422"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#08101c"/>
    <path d="M0 398 Q150 390 300 396 L300 450 L0 450 Z" fill="#040c16"/>
    <path d="M0 368 Q150 362 300 366" stroke="#3a5880" stroke-width=".7" fill="none" opacity=".4"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${48+i*28} ${374+i%2*8} Q${62+i*28} ${368+i%2*6} ${76+i*28} ${374+i%2*8}" stroke="#3a5880" stroke-width=".8" fill="none" opacity=".3"/>`).join('')}
  `),

  /* ── 三体 · Inner Mongolia/Trisolaris — three alien suns, a desperate civilization, radio telescope ── */
  threebody: scene(`
    <defs>
      <linearGradient id="tbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080408"/><stop offset=".3" stop-color="#1a0a08"/>
        <stop offset=".6" stop-color="#3a1808"/><stop offset=".85" stop-color="#6a2808"/>
        <stop offset="1" stop-color="#9a4818"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tbSky)"/>
    ${stars(20, 119)}
    <circle cx="100" cy="112" r="22" fill="#f08020" opacity=".78"/>
    <circle cx="100" cy="112" r="12" fill="#ffe090" opacity=".85"/>
    <circle cx="200" cy="148" r="16" fill="#e06818" opacity=".72"/>
    <circle cx="200" cy="148" r="8" fill="#ffd080" opacity=".82"/>
    <circle cx="148" cy="80" r="10" fill="#d04808" opacity=".68"/>
    <circle cx="148" cy="80" r="5" fill="#ffb060" opacity=".78"/>
    <rect x="0" y="330" width="300" height="120" fill="#140a04"/>
    <path d="M0 330 Q150 320 300 328" stroke="#6a2808" stroke-width=".8" fill="none" opacity=".4"/>
    <g fill="#100804">
      <path d="M130 330 L136 280 L142 278 L148 240 L154 278 L160 280 L166 330 Z"/>
      <rect x="128" y="326" width="44" height="8" rx="1"/>
      <rect x="136" y="320" width="28" height="6" rx="1"/>
      ${[-30,-16,0,16,30].map(dx=>`<path d="M148 248 L${148+dx} ${300+Math.abs(dx)*0.8}" stroke="#100804" stroke-width="1.2"/>`).join('')}
    </g>
    <rect x="0" y="370" width="300" height="80" fill="#0a0604"/>
    <path d="M0 330 Q150 322 300 328" stroke="#9a4818" stroke-width=".5" fill="none" opacity=".25"/>
  `),

  /* ── 长恨歌 · Shanghai — a longtang alley, a beauty queen's fate across decades ── */
  sorrow: scene(`
    <defs>
      <linearGradient id="srwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a1e10"/><stop offset=".45" stop-color="#4a3218"/>
        <stop offset=".75" stop-color="#8a6030"/><stop offset="1" stop-color="#b08040"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#srwSky)"/>
    ${stars(8, 123)}
    <g fill="#160e04">
      <rect x="0" y="158" width="54" height="292"/>
      <rect x="246" y="142" width="54" height="308"/>
      <rect x="62" y="188" width="44" height="262"/>
      <rect x="194" y="174" width="44" height="276"/>
    </g>
    ${[[6,176],[20,176],[6,210],[20,210],[6,244],[252,162],[266,162],[252,196],[252,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#c87828" opacity=".38"/>`).join('')}
    <path d="M54 370 L54 240 L246 240 L246 370" stroke="#2a1e08" stroke-width="1" fill="none"/>
    ${Array.from({length:7}).map((_,i)=>`<path d="M54 ${256+i*18} L246 ${256+i*18}" stroke="#2a1e08" stroke-width=".6" fill="none" opacity=".5"/>`).join('')}
    <rect x="0" y="370" width="300" height="80" fill="#100c04"/>
    <g fill="#1a1008">
      <circle cx="150" cy="278" r="7.5"/>
      <rect x="146" y="286" width="7" height="28" rx="1"/>
      <path d="M138 302 L146 290 L154 290 L162 302 L158 318 L142 318 Z"/>
    </g>
    <path d="M60 450 Q60 380 60 370 L240 370 L240 450" stroke="#1e1408" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── 边城 · Xiangxi, Hunan — a river, a ferry, green mountains, a girl named Cuicui ── */
  bordertown: scene(`
    <defs>
      <linearGradient id="bdtSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3838"/><stop offset=".38" stop-color="#4a6858"/>
        <stop offset=".68" stop-color="#78a880"/><stop offset="1" stop-color="#9ac898"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bdtSky)"/>
    ${stars(6, 127)}
    <path d="M0 310 Q150 296 300 308 L300 450 L0 450 Z" fill="#3a6848"/>
    <path d="M0 356 Q75 346 150 352 T300 350 L300 450 L0 450 Z" fill="#4a8868"/>
    <path d="M0 402 Q75 394 150 400 T300 398 L300 450 L0 450 Z" fill="#2a5848"/>
    <g fill="#182816">
      <path d="M0 248 Q0 186 30 164 Q44 158 60 176 Q78 198 78 248 Z"/>
      <path d="M220 258 Q220 188 250 168 Q264 160 278 178 Q296 202 300 258 Z"/>
    </g>
    <path d="M0 310 Q150 298 300 308" stroke="#c8e8c0" stroke-width=".6" fill="none" opacity=".35"/>
    <path d="M0 344 Q75 336 150 342 T300 340" stroke="#a8d0a8" stroke-width=".5" fill="none" opacity=".28"/>
    <g fill="#2a3a20">
      <rect x="118" y="254" width="5" height="58"/>
      <ellipse cx="120" cy="248" rx="18" ry="24"/>
      <rect x="172" y="268" width="4" height="44"/>
      <ellipse cx="174" cy="262" rx="14" ry="18"/>
    </g>
    <g fill="#3a2010">
      <path d="M106 318 L108 298 L114 294 L150 310 L186 294 L192 298 L194 318 Z"/>
      <rect x="104" y="314" width="92" height="6" rx="1"/>
    </g>
    <g fill="#1a1808">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── 平凡的世界 · Shaanxi Loess Plateau — terraced yellow hills, a young man's dream ── */
  ordinaryworld: scene(`
    <defs>
      <linearGradient id="owSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a78a0"/><stop offset=".44" stop-color="#8aaac8"/>
        <stop offset=".72" stop-color="#c8b888"/><stop offset="1" stop-color="#d8c878"/>
      </linearGradient>
      <radialGradient id="owSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe8a0" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe8a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#owSky)"/>
    <circle cx="186" cy="158" r="64" fill="url(#owSun)"/>
    <circle cx="186" cy="158" r="18" fill="#ffe8a0" opacity=".82"/>
    ${stars(5, 131)}
    <path d="M0 298 Q30 268 70 278 Q110 288 140 268 Q170 248 210 262 Q250 276 300 258 L300 450 L0 450 Z" fill="#c89840"/>
    <path d="M0 342 Q30 322 70 330 Q110 338 140 320 Q170 302 210 314 Q250 326 300 310 L300 450 L0 450 Z" fill="#a87e30"/>
    <path d="M0 390 Q30 374 70 380 Q110 386 140 370 Q170 354 210 364 Q250 374 300 360 L300 450 L0 450 Z" fill="#886520"/>
    <path d="M0 430 Q150 420 300 428 L300 450 L0 450 Z" fill="#704e14"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${60+i*24} ${298+i%2*10} Q${72+i*24} ${286+i%2*8} ${84+i*24} ${298+i%2*10}" stroke="#e8b860" stroke-width="1.2" fill="none" opacity=".4"/>`).join('')}
    <g fill="#1e1408">
      <circle cx="106" cy="282" r="5.5"/>
      <rect x="103" y="287" width="5" height="16" rx="1"/>
      <path d="M96 300 L103 290 L108 290 L115 300 L112 312 L99 312 Z"/>
    </g>
  `),

  /* ── 白鹿原 · Shaanxi Plain — an ancient clan village, a white deer, generations of conflict ── */
  whitedeerplain: scene(`
    <defs>
      <linearGradient id="wdpSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a5868"/><stop offset=".38" stop-color="#7a8888"/>
        <stop offset=".68" stop-color="#a89868"/><stop offset="1" stop-color="#c8b060"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wdpSky)"/>
    ${stars(7, 137)}
    <path d="M0 312 Q150 300 300 310 L300 450 L0 450 Z" fill="#a88840"/>
    <path d="M0 362 Q150 352 300 360 L300 450 L0 450 Z" fill="#8a6e30"/>
    <path d="M0 410 Q150 400 300 408 L300 450 L0 450 Z" fill="#705820"/>
    <g fill="#2e2010">
      <rect x="0" y="246" width="58" height="68"/>
      <path d="M0 248 Q29 230 58 248 Z"/>
      <rect x="242" y="238" width="58" height="74"/>
      <path d="M242 240 Q271 222 300 240 Z"/>
    </g>
    <g fill="#382818">
      <rect x="102" y="210" width="96" height="106"/>
      <path d="M90 214 Q150 178 210 214 Z"/>
      <rect x="118" y="178" width="64" height="36"/>
      <path d="M110 182 Q150 158 190 182 Z"/>
      <rect x="134" y="158" width="32" height="24"/>
    </g>
    ${[[110,228],[126,228],[160,228],[176,228],[110,262],[126,262],[160,262]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#ffd060" opacity=".30"/>`).join('')}
    <g fill="#f0f0e8" opacity=".82">
      <path d="M138 300 Q150 274 162 300 Q154 288 150 286 Q146 288 138 300 Z"/>
      <ellipse cx="150" cy="306" rx="12" ry="4"/>
      <rect x="148" y="294" width="4" height="10" rx="1"/>
    </g>
  `),

  /* ── 许三观卖血记 · Jiangnan town — a man sells his blood, grey China, red life-force ── */
  bloodmerchant: scene(`
    <defs>
      <linearGradient id="bmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#484848"/><stop offset=".5" stop-color="#686868"/>
        <stop offset="1" stop-color="#888888"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bmSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#1a1010" opacity=".35"/>
    <g fill="#282828">
      <rect x="0" y="214" width="68" height="236"/>
      <rect x="232" y="200" width="68" height="250"/>
      <rect x="76" y="240" width="52" height="210"/>
      <rect x="174" y="230" width="52" height="220"/>
    </g>
    ${[[6,232],[20,232],[6,264],[20,264],[238,218],[252,218],[238,250]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#888" opacity=".45"/>`).join('')}
    <rect x="108" y="184" width="84" height="60" fill="#303030"/>
    <rect x="114" y="190" width="72" height="48" fill="#404040"/>
    <rect x="118" y="196" width="28" height="36" fill="#888" opacity=".18"/>
    <rect x="154" y="196" width="28" height="36" fill="#888" opacity=".14"/>
    <rect x="0" y="332" width="300" height="118" fill="#1a1a1a"/>
    <path d="M0 332 Q150 326 300 330" stroke="#c82020" stroke-width=".8" fill="none" opacity=".45"/>
    <g fill="#1c1010">
      <rect x="144" y="248" width="12" height="32" rx="1"/>
      <circle cx="150" cy="244" r="8"/>
      <path d="M136 268 L144 256 L156 256 L164 268 L160 284 L140 284 Z"/>
    </g>
    <rect x="132" y="186" width="36" height="4" rx="1" fill="#c82020" opacity=".55"/>
    <circle cx="150" cy="336" r="8" fill="#c82020" opacity=".4"/>
    <circle cx="150" cy="336" r="4" fill="#c82020" opacity=".6"/>
  `),

  /* ── 兄弟 · Jiangnan town — Cultural Revolution grey then reform-era neon, two brothers ── */
  brothers: scene(`
    <defs>
      <linearGradient id="broSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0a14"/><stop offset=".5" stop-color="#141222"/>
        <stop offset="1" stop-color="#1e1c30"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#broSky)"/>
    ${stars(8, 139)}
    <rect x="0" y="202" width="300" height="248" fill="#0e0c18"/>
    <g fill="#141220">
      <rect x="0" y="202" width="56" height="248"/>
      <rect x="244" y="190" width="56" height="260"/>
      <rect x="64" y="220" width="42" height="230"/>
      <rect x="196" y="212" width="42" height="238"/>
      <rect x="110" y="198" width="82" height="252"/>
    </g>
    ${[[4,220],[4,250],[4,280],[250,208],[250,238],[250,268],[70,234],[70,264],[116,214],[116,244],[116,274],[174,214],[174,244]].map(([x,y])=>`<rect x="${x}" y="${y}" width="9" height="13" fill="#ff4080" opacity="${0.35+((x+y)%3)*0.08}"/>`).join('')}
    ${[[8,308],[8,338],[8,368],[256,296],[256,326],[256,356],[74,322],[74,352],[120,302],[120,332],[178,302],[178,332]].map(([x,y])=>`<rect x="${x}" y="${y}" width="9" height="13" fill="#40a0ff" opacity="${0.28+((x+y)%3)*0.06}"/>`).join('')}
    <path d="M0 202 Q150 196 300 200" stroke="#ff4080" stroke-width=".6" fill="none" opacity=".3"/>
    <g fill="#0a0818">
      <circle cx="138" cy="302" r="6.5"/>
      <rect x="134" y="308" width="6" height="22" rx="1"/>
      <circle cx="162" cy="298" r="6"/>
      <rect x="158" y="304" width="6" height="20" rx="1"/>
    </g>
  `),

  /* ── 雷雨 · Shanghai 1920s — a patriarchal mansion on a summer storm night, inevitable ruin ── */
  thunderstorm: scene(`
    <defs>
      <linearGradient id="tstrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0e18"/><stop offset=".3" stop-color="#1a1828"/>
        <stop offset=".58" stop-color="#2e2838"/><stop offset=".82" stop-color="#4a3830"/>
        <stop offset="1" stop-color="#6a4e30"/>
      </linearGradient>
      <radialGradient id="tstrL" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe0a0" stop-opacity=".55"/>
        <stop offset="1" stop-color="#ffe0a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tstrSky)"/>
    ${stars(6, 253)}
    <g fill="#181420">
      <path d="M0 238 Q30 226 50 218 Q62 212 68 220 L64 238 Z"/>
      <path d="M300 248 Q270 234 248 226 Q236 220 230 228 L236 248 Z"/>
    </g>
    <g fill="#161018">
      <rect x="86" y="188" width="128" height="138"/>
      <path d="M78 192 L150 156 L222 192 Z"/>
      <rect x="98" y="156" width="104" height="36"/>
      <path d="M90 162 L150 130 L210 162 Z"/>
      <rect x="118" y="130" width="64" height="32"/>
      <rect x="130" y="118" width="40" height="14"/>
    </g>
    ${[[92,204],[108,204],[92,236],[108,236],[162,204],[178,204],[162,236],[178,236],[92,268],[108,268]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd060" opacity="${y===268?'.22':'.34'}"/>`).join('')}
    <rect x="0" y="322" width="300" height="128" fill="#100e14"/>
    <path d="M0 322 Q150 316 300 320" stroke="#6a4e30" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M148 98 L154 132 L146 132 Z" fill="#ffe0a0" opacity=".6"/>
    <circle cx="150" cy="132" r="50" fill="url(#tstrL)"/>
    <path d="M146 132 L152 132 L154 116 L150 110 L146 116 Z" fill="#ffe8b0" opacity=".7"/>
    <g fill="#1a1010">
      <rect x="143" y="254" width="14" height="38" rx="1"/>
      <circle cx="150" cy="250" r="9"/>
    </g>
  `),

  /* ── 巴尔扎克与小裁缝 · Sichuan mountains — re-education, a suitcase of books, a seamstress ── */
  balzac: scene(`
    <defs>
      <linearGradient id="blzSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a5878"/><stop offset=".4" stop-color="#6a8898"/>
        <stop offset=".68" stop-color="#9ab0a0"/><stop offset="1" stop-color="#c8c8b8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#blzSky)"/>
    ${stars(5, 257)}
    <rect x="0" y="0" width="300" height="450" fill="#e8f0e8" opacity=".12"/>
    <path d="M0 276 Q40 238 80 256 Q110 268 130 250 Q150 232 170 246 Q200 262 240 248 Q270 236 300 252 L300 450 L0 450 Z" fill="#5a7058"/>
    <path d="M0 320 Q80 306 150 314 T300 316 L300 450 L0 450 Z" fill="#4a6048"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#3a5038"/>
    <g fill="#2a2e20">
      <rect x="92" y="264" width="18" height="56"/>
      <path d="M88 266 Q101 252 114 266 Z"/>
      <rect x="136" y="254" width="24" height="66"/>
      <path d="M132 256 Q148 240 164 256 Z"/>
      <rect x="178" y="268" width="16" height="52"/>
      <path d="M174 270 Q186 258 198 270 Z"/>
    </g>
    <rect x="126" y="302" width="48" height="30" rx="3" fill="#6a4020"/>
    <rect x="130" y="298" width="40" height="6" rx="2" fill="#7a5030"/>
    <rect x="148" y="296" width="4" height="8" rx="1" fill="#8a6040"/>
    <rect x="126" y="316" width="48" height="2" fill="#4a2810"/>
    <g fill="#1e2010">
      <circle cx="110" cy="306" r="4.5"/>
      <rect x="108" y="310" width="4" height="12" rx="1"/>
      <circle cx="186" cy="304" r="4"/>
      <rect x="184" y="308" width="4" height="10" rx="1"/>
    </g>
    <rect x="0" y="248" width="300" height="10" fill="#e8f0e8" opacity=".2"/>
    <rect x="0" y="235" width="300" height="8" fill="#e8f0e8" opacity=".13"/>
  `),

  /* ── 子夜 · Shanghai 1930s — art deco skyline, factory chimneys, Huangpu at night ── */
  midnight: scene(`
    <defs>
      <linearGradient id="mdnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080812"/><stop offset=".4" stop-color="#141428"/>
        <stop offset=".72" stop-color="#2a2238"/><stop offset="1" stop-color="#382a40"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mdnSky)"/>
    ${stars(12, 143)}
    <g fill="#141228">
      <rect x="0" y="168" width="28" height="282"/>
      <rect x="32" y="196" width="20" height="254"/>
      <rect x="56" y="148" width="34" height="302"/>
      <rect x="94" y="180" width="22" height="270"/>
      <rect x="120" y="158" width="28" height="292"/>
      <rect x="152" y="136" width="36" height="314"/>
      <rect x="192" y="174" width="24" height="276"/>
      <rect x="220" y="152" width="32" height="298"/>
      <rect x="256" y="192" width="20" height="258"/>
      <rect x="280" y="162" width="20" height="288"/>
    </g>
    <rect x="152" y="118" width="4" height="20" fill="#141228"/>
    <rect x="148" y="115" width="12" height="6" fill="#141228"/>
    ${Array.from({length:16}).map((_,i)=>{const x=(i*41+7)%300, y=150+(i*31)%200; return `<rect x="${x}" y="${y}" width="5" height="7" fill="#e8b030" opacity="${0.18+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 362 Q150 352 300 360 L300 450 L0 450 Z" fill="#1a2038"/>
    <path d="M0 396 Q75 388 150 394 T300 392 L300 450 L0 450 Z" fill="#121828"/>
    <path d="M0 362 Q150 356 300 360" stroke="#e8b030" stroke-width=".5" fill="none" opacity=".22"/>
    ${Array.from({length:5}).map((_,i)=>`<rect x="${90+i*22}" y="${138}" width="4" height="${32+i%2*16}" fill="#141228"/>`).join('')}
    ${Array.from({length:5}).map((_,i)=>`<circle cx="${92+i*22}" cy="${136}" r="3" fill="#e84020" opacity=".35"/>`).join('')}
  `),

  /* ── Magic and Mystery in Tibet · Lhasa — a lone traveller on the plateau, a monastery, aurora-like mist ── */
  magictibet: scene(`
    <defs>
      <linearGradient id="mmtSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060410"/><stop offset=".36" stop-color="#0c0c28"/>
        <stop offset=".64" stop-color="#181840"/><stop offset=".88" stop-color="#302860"/>
        <stop offset="1" stop-color="#504078"/>
      </linearGradient>
      <radialGradient id="mmtGlow" cx="50%" cy="60%" r="50%">
        <stop offset="0" stop-color="#60d0c0" stop-opacity=".35"/>
        <stop offset="1" stop-color="#60d0c0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mmtSky)"/>
    ${stars(16, 395)}
    <rect width="300" height="450" fill="url(#mmtGlow)"/>
    <path d="M0 298 Q60 258 110 272 Q140 282 150 264 Q160 246 190 262 Q240 280 300 258 L300 450 L0 450 Z" fill="#706080" opacity=".65"/>
    <path d="M0 350 Q150 338 300 348 L300 450 L0 450 Z" fill="#504060"/>
    <path d="M0 400 Q150 392 300 398 L300 450 L0 450 Z" fill="#382c48"/>
    <g fill="#c09050" opacity=".7">
      <rect x="118" y="216" width="64" height="84"/>
      <path d="M110 220 L150 188 L190 220 Z"/>
      <rect x="134" y="188" width="32" height="34"/>
    </g>
    <rect x="118" y="216" width="64" height="10" fill="#e04020" opacity=".45"/>
    ${[[122,234],[138,234],[152,234],[168,234],[122,262],[138,262],[152,262],[168,262]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#f8e898" opacity="${y<250?'.5':'.35'}"/>`).join('')}
    ${Array.from({length:5}).map((_,i)=>`<path d="M${90+i*24} ${280} Q${96+i*24} ${256} ${102+i*24} ${238}" stroke="${['#e03020','#e8c020','#2080e0','#28a030','#e8e8e8'][i%5]}" stroke-width="1.2" fill="none" opacity=".55"/>`).join('')}
    <path d="M80 290 Q100 270 120 280 Q130 286 138 278 Q148 268 162 272 Q176 276 192 264 Q210 252 230 260" stroke="#60d0c0" stroke-width=".8" fill="none" opacity=".4"/>
    <g fill="#080610">
      <circle cx="150" cy="292" r="5.5"/>
      <rect x="147" y="297" width="5" height="8" rx="1"/>
      <path d="M140 302 L147 298 L153 298 L160 302 L158 314 L142 314 Z"/>
    </g>
    <path d="M0 298 Q150 292 300 296" stroke="#504078" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── 藏地密码 / Tibet Code · Lhasa — Potala Palace at dawn, snow peaks, a hidden mandala ── */
  tibetcode: scene(`
    <defs>
      <linearGradient id="tcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".36" stop-color="#0e1828"/>
        <stop offset=".64" stop-color="#1a3060"/><stop offset=".88" stop-color="#3870b0"/>
        <stop offset="1" stop-color="#60a0d0"/>
      </linearGradient>
      <radialGradient id="tcSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe070" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe070" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tcSky)"/>
    ${stars(9, 379)}
    <circle cx="150" cy="226" r="90" fill="url(#tcSun)"/>
    <circle cx="150" cy="226" r="22" fill="#ffe880" opacity=".85"/>
    <path d="M0 286 Q60 252 100 264 Q130 274 150 256 Q170 238 200 254 Q250 272 300 250 L300 450 L0 450 Z" fill="#7090b0" opacity=".6"/>
    <path d="M0 338 Q150 326 300 336 L300 450 L0 450 Z" fill="#c8b878"/>
    <path d="M0 386 Q150 376 300 384 L300 450 L0 450 Z" fill="#b0a060"/>
    <g fill="#b80808">
      <rect x="74" y="200" width="152" height="142"/>
      <path d="M66 204 L150 164 L234 204 Z"/>
    </g>
    <rect x="74" y="200" width="152" height="18" fill="#e8e0c0" opacity=".3"/>
    <g fill="#e8e0c0" opacity=".22">
      ${Array.from({length:8}).map((_,i)=>`<rect x="${78+i*18}" y="${202}" width="12" height="140"/>`).join('')}
    </g>
    ${[[78,224],[96,224],[78,258],[96,258],[180,224],[196,224],[180,258],[196,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#f8e090" opacity="${y<240?'.45':'.3'}"/>`).join('')}
    <rect x="98" y="310" width="104" height="34" fill="#d4aa30" opacity=".5"/>
    <path d="M74 338 L226 338" stroke="#d4aa30" stroke-width="1.5" opacity=".5"/>
    <g fill="#0a0808">
      <circle cx="150" cy="330" r="5.5"/>
      <rect x="147" y="335" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 338 Q150 332 300 336" stroke="#c8b878" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── 尘埃落定 / Red Poppies · Kham — Tibetan highland, poppy fields, a chieftain's fortress ── */
  dustsettles: scene(`
    <defs>
      <linearGradient id="dsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".38" stop-color="#302840"/>
        <stop offset=".68" stop-color="#5a5060"/><stop offset="1" stop-color="#807870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dsSky)"/>
    ${stars(8, 381)}
    <path d="M0 282 Q60 246 100 260 Q130 270 150 252 Q170 232 210 252 Q258 274 300 252 L300 450 L0 450 Z" fill="#5a6848"/>
    <path d="M0 336 Q150 324 300 334 L300 450 L0 450 Z" fill="#4a5838"/>
    <path d="M0 388 Q150 378 300 386 L300 450 L0 450 Z" fill="#3a4828"/>
    ${Array.from({length:16}).map((_,i)=>{const x=30+(i%8)*30,y=300+(Math.floor(i/8))*24; return `<circle cx="${x}" cy="${y}" r="${4+i%2*2}" fill="#c02820" opacity="${0.45+i%3*0.1}"/>`;}).join('')}
    ${Array.from({length:16}).map((_,i)=>{const x=44+(i%8)*30,y=296+(Math.floor(i/8))*22; return `<circle cx="${x}" cy="${y}" r="${3+i%2*2}" fill="#d83830" opacity="${0.38+i%3*0.08}"/>`;}).join('')}
    <g fill="#2a2018">
      <rect x="100" y="172" width="100" height="114"/>
      <path d="M92 178 L150 144 L208 178 Z"/>
      <rect x="122" y="144" width="56" height="36"/>
      <rect x="136" y="132" width="28" height="14"/>
    </g>
    ${[[104,192],[120,192],[104,224],[120,224],[164,192],[180,192],[164,224],[180,224]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#f0d070" opacity="${y<210?'.4':'.28'}"/>`).join('')}
    <path d="M0 282 Q150 276 300 280" stroke="#807870" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#181410">
      <circle cx="150" cy="278" r="5.5"/>
      <rect x="147" y="283" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── Wolf Totem · Inner Mongolia — a vast steppe under a full moon, a lone wolf ── */
  wolftotem: scene(`
    <defs>
      <linearGradient id="wtmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".4" stop-color="#10162c"/>
        <stop offset=".72" stop-color="#1c2840"/><stop offset="1" stop-color="#283850"/>
      </linearGradient>
      <radialGradient id="wtmMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8f0f8" stop-opacity=".85"/>
        <stop offset="1" stop-color="#e8f0f8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wtmSky)"/>
    ${stars(14, 383)}
    <circle cx="150" cy="148" r="80" fill="url(#wtmMoon)"/>
    <circle cx="150" cy="148" r="22" fill="#e8f0f8" opacity=".88"/>
    <path d="M0 326 Q150 314 300 324 L300 450 L0 450 Z" fill="#2c3820"/>
    <path d="M0 376 Q150 366 300 374 L300 450 L0 450 Z" fill="#202c18"/>
    <path d="M0 422 Q150 414 300 420 L300 450 L0 450 Z" fill="#182010"/>
    <path d="M0 326 Q150 320 300 324" stroke="#283850" stroke-width=".5" fill="none" opacity=".4"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${28+i*36} ${330+i%2*10} Q${42+i*36} ${318+i%2*8} ${56+i*36} ${330+i%2*8}" stroke="#2c3820" stroke-width=".6" fill="none" opacity=".5"/>`).join('')}
    <g fill="#0c0e08">
      <path d="M124 318 Q130 296 138 282 Q144 270 148 262 Q150 256 150 256 Q150 256 152 262 Q156 270 162 282 Q170 296 176 318 Z"/>
      <path d="M124 318 L108 306 L114 296 Q120 290 128 296 Z"/>
      <path d="M138 282 L120 278 L124 268 Q130 264 136 270 Z"/>
      <path d="M148 262 Q140 250 134 244 L138 240 Q146 244 150 256 Z"/>
    </g>
    <circle cx="146" cy="264" r="3" fill="#e8d0a0" opacity=".7"/>
    <circle cx="155" cy="262" r="2.5" fill="#e8d0a0" opacity=".7"/>
  `),

  /* ── 後街 / The Backstreets · Ürümqi — fog-shrouded city, a lone figure, amber streetlights ── */
  backstreets: scene(`
    <defs>
      <linearGradient id="bksSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#050810"/><stop offset=".4" stop-color="#0c1020"/>
        <stop offset=".72" stop-color="#141828"/><stop offset="1" stop-color="#1c2030"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bksSky)"/>
    <rect width="300" height="450" fill="#b0c0d0" opacity=".12"/>
    <g fill="#101420" opacity=".55">
      ${[24,64,106,150,196,242].map((x,i)=>`<rect x="${x}" y="${118+i%3*22}" width="36" height="${194-i%3*22}"/>`).join('')}
    </g>
    ${Array.from({length:18}).map((_,i)=>{const x=(i*52+6)%296,y=132+(i*38)%160; return `<rect x="${x}" y="${y}" width="9" height="14" fill="#e8c060" opacity="${0.06+(i%5)*0.03}"/>`;}).join('')}
    <rect width="300" height="450" fill="#8090a0" opacity=".28"/>
    <rect width="300" height="450" fill="#9aa8b8" opacity=".14"/>
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#181c24"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#14181e"/>
    <g fill="#e8a030" opacity=".7">
      ${[46,110,174,238].map(x=>`<circle cx="${x}" cy="310" r="3.5"/><path d="M${x} 310 L${x-18} 330 L${x+18} 330 Z" opacity=".25"/>`).join('')}
    </g>
    <g fill="#101418">
      <rect x="132" y="278" width="36" height="44"/>
      <circle cx="150" cy="268" r="12"/>
      <rect x="144" y="256" width="12" height="14"/>
    </g>
    <rect x="132" y="316" width="36" height="6" fill="#e8a030" opacity=".18"/>
    <g fill="#060810">
      <circle cx="150" cy="310" r="5.5"/>
      <rect x="147" y="315" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 318 Q150 312 300 316" stroke="#1c2030" stroke-width=".5" fill="none" opacity=".5"/>
  `),

  /* ── 虚土 / Xu Tu · Northern Xinjiang — loess ridge, empty steppe, a dreamlike sky ── */
  xutu: scene(`
    <defs>
      <linearGradient id="xutSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c0c8d8"/><stop offset=".42" stop-color="#d8dce8"/>
        <stop offset=".7" stop-color="#e8e0c8"/><stop offset="1" stop-color="#d8c8a0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#xutSky)"/>
    <path d="M0 296 Q80 248 140 268 Q170 278 200 256 Q240 228 300 248 L300 450 L0 450 Z" fill="#c8b888" opacity=".7"/>
    <path d="M0 340 Q150 318 300 336 L300 450 L0 450 Z" fill="#b8a878"/>
    <path d="M0 390 Q150 374 300 388 L300 450 L0 450 Z" fill="#a89868"/>
    <path d="M0 430 Q150 416 300 428 L300 450 L0 450 Z" fill="#988858"/>
    ${Array.from({length:10}).map((_,i)=>{const x=20+(i*28)%270; return `<path d="M${x} ${296+i%2*12} Q${x+8} ${278+i%2*8} ${x+16} ${296+i%2*12}" stroke="#c8b888" stroke-width=".5" fill="#b8a878" opacity=".55"/>`;}).join('')}
    <g fill="#706040" opacity=".5">
      ${[66,98,132,166].map((x,i)=>`<rect x="${x}" y="${212+i%2*18}" width="${14+i%2*4}" height="${86-i%2*18}"/>`).join('')}
      ${[66,98,132,166].map((x,i)=>`<path d="M${x-6} ${216+i%2*18} L${x+9+i%2*2} ${190+i%2*14} L${x+24+i%2*4} ${216+i%2*18} Z"/>`).join('')}
    </g>
    <rect width="300" height="450" fill="#e8e0d0" opacity=".12"/>
    <g fill="#504020" opacity=".25">
      <circle cx="150" cy="230" r="40"/>
      <circle cx="150" cy="220" r="28"/>
      <circle cx="150" cy="212" r="18"/>
    </g>
    <g fill="#403010">
      <circle cx="150" cy="288" r="5.5"/>
      <rect x="147" y="293" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 296 Q150 290 300 294" stroke="#d8c8a0" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── 木垒河 · Mori County — Republican-era Xinjiang town, poplar trees, Tianshan foothills ── */
  mulerhe: scene(`
    <defs>
      <linearGradient id="mlrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1808"/><stop offset=".38" stop-color="#2c2810"/>
        <stop offset=".65" stop-color="#604828"/><stop offset=".86" stop-color="#a07838"/>
        <stop offset="1" stop-color="#c09848"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mlrSky)"/>
    ${stars(7, 413)}
    <path d="M0 276 Q50 238 90 252 Q120 262 150 246 Q180 230 220 248 Q258 264 300 244 L300 450 L0 450 Z" fill="#484028" opacity=".6"/>
    <path d="M0 334 Q150 318 300 332 L300 450 L0 450 Z" fill="#382c18"/>
    <path d="M0 384 Q150 370 300 382 L300 450 L0 450 Z" fill="#2c2010"/>
    <g fill="#241808">
      <rect x="78" y="196" width="60" height="82"/>
      <path d="M70 200 L108 168 L146 200 Z"/>
      <rect x="90" y="168" width="36" height="34"/>
      <rect x="162" y="204" width="60" height="74"/>
      <path d="M154 208 L192 176 L230 208 Z"/>
      <rect x="174" y="176" width="36" height="34"/>
    </g>
    ${[[82,220],[98,220],[82,252],[98,252],[166,224],[182,224],[166,256],[182,256]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#f0c860" opacity="${y<240?'.38':'.24'}"/>`).join('')}
    <g fill="#2c3818" opacity=".85">
      ${[46,118,192,254].map((x,i)=>`<rect x="${x-2}" y="${196+i%2*14}" width="4" height="${84-i%2*14}" rx="1"/><path d="M${x-10} ${210+i%2*10} Q${x} ${190+i%2*8} ${x+10} ${210+i%2*10}" stroke="#3c5020" stroke-width="5" fill="none" opacity=".7"/><path d="M${x-8} ${230+i%2*8} Q${x} ${212+i%2*6} ${x+8} ${230+i%2*8}" stroke="#3c5020" stroke-width="4" fill="none" opacity=".6"/>`).join('')}
    </g>
    <path d="M0 276 Q150 270 300 274" stroke="#c09848" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#180e04">
      <circle cx="150" cy="268" r="5.5"/>
      <rect x="147" y="273" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── 凤凰琴 · Dabie Mountains — a village schoolroom, misty peaks, a teacher at the blackboard ── */
  fenghuangqin: scene(`
    <defs>
      <linearGradient id="fhqSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#b0b8c8"/><stop offset=".4" stop-color="#c8ccd8"/>
        <stop offset=".72" stop-color="#d8d4c8"/><stop offset="1" stop-color="#c8c0a8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fhqSky)"/>
    <rect width="300" height="450" fill="#d0d8e0" opacity=".18"/>
    <path d="M0 264 Q40 224 80 238 Q110 248 140 230 Q166 214 196 228 Q236 246 270 224 Q286 214 300 218 L300 450 L0 450 Z" fill="#6a7868" opacity=".55"/>
    <path d="M0 318 Q150 302 300 316 L300 450 L0 450 Z" fill="#586650"/>
    <path d="M0 368 Q150 354 300 366 L300 450 L0 450 Z" fill="#485640"/>
    <rect width="300" height="450" fill="#c8d0d8" opacity=".12"/>
    <g fill="#3a3828">
      <rect x="82" y="200" width="136" height="120"/>
      <path d="M74 204 L150 166 L226 204 Z"/>
      <rect x="106" y="166" width="88" height="40"/>
    </g>
    <rect x="82" y="200" width="136" height="8" fill="#604838" opacity=".6"/>
    ${[[86,224],[102,224],[86,258],[102,258],[172,224],[188,224],[172,258],[188,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#f0e8c0" opacity="${y<242?'.5':'.35'}"/>`).join('')}
    <rect x="112" y="208" width="76" height="94" fill="#302e1e"/>
    <g fill="#d0d8c8" opacity=".7">
      ${Array.from({length:4}).map((_,i)=>`<line x1="116" y1="${224+i*18}" x2="184" y2="${224+i*18}" stroke="#d0d8c8" stroke-width="1.2" opacity=".5"/>`).join('')}
      <path d="M124 214 L160 214" stroke="#d0d8c8" stroke-width="2" opacity=".6"/>
    </g>
    <g fill="#e8e0b0" opacity=".6">
      <circle cx="116" cy="250" r="3"/>
      <rect x="114" y="253" width="4" height="22" rx="1"/>
      <path d="M108 254 L114 256 L114 272 Q110 274 106 270 Z"/>
      <path d="M124 254 L118 256 L118 272 Q122 274 126 270 Z"/>
    </g>
    <path d="M0 318 Q150 312 300 316" stroke="#c8c0a8" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#282618">
      <circle cx="150" cy="310" r="5.5"/>
      <rect x="147" y="315" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── 天行者 · Dabie Mountains — dawn over misty peaks, a schoolbell, a lifetime of waiting ── */
  tianxingzhe: scene(`
    <defs>
      <linearGradient id="txzSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1820"/><stop offset=".36" stop-color="#182838"/>
        <stop offset=".64" stop-color="#3c5060"/><stop offset=".84" stop-color="#7898a8"/>
        <stop offset="1" stop-color="#a8c0c8"/>
      </linearGradient>
      <radialGradient id="txzDawn" cx="68%" cy="52%" r="36%">
        <stop offset="0" stop-color="#f0d080" stop-opacity=".55"/>
        <stop offset="1" stop-color="#f0d080" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#txzSky)"/>
    ${stars(7, 437)}
    <rect width="300" height="450" fill="url(#txzDawn)"/>
    <circle cx="204" cy="234" r="14" fill="#f8e080" opacity=".72"/>
    <path d="M0 270 Q50 232 90 248 Q120 260 148 240 Q174 222 206 240 Q248 260 284 236 Q292 230 300 232 L300 450 L0 450 Z" fill="#485848" opacity=".6"/>
    <path d="M0 324 Q150 308 300 322 L300 450 L0 450 Z" fill="#384838"/>
    <path d="M0 374 Q150 360 300 372 L300 450 L0 450 Z" fill="#283828"/>
    <rect width="300" height="450" fill="#a8c0c8" opacity=".08"/>
    <g fill="#2c2c1e" opacity=".85">
      <rect x="96" y="210" width="108" height="62"/>
      <path d="M88 214 L150 180 L212 214 Z"/>
      <rect x="116" y="180" width="68" height="36"/>
    </g>
    ${[[100,228],[116,228],[164,228],[180,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#f8e898" opacity=".4"/>`).join('')}
    <rect x="96" y="268" width="108" height="6" fill="#f8e898" opacity=".2"/>
    <g fill="#181c10">
      <rect x="140" y="188" width="20" height="8" rx="2"/>
      <rect x="148" y="174" width="4" height="16"/>
      <circle cx="150" cy="172" r="6" fill="none" stroke="#181c10" stroke-width="3"/>
    </g>
    <g fill="#1c2018">
      <circle cx="150" cy="262" r="5.5"/>
      <rect x="147" y="267" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 270 Q150 264 300 268" stroke="#a8c0c8" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── La Condition humaine / Man's Fate · Shanghai — revolutionary night, 1927, smoke and gunfire ── */
  mansfate: scene(`
    <defs>
      <linearGradient id="mfaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#050208"/><stop offset=".36" stop-color="#0c0410"/>
        <stop offset=".62" stop-color="#280814"/><stop offset=".84" stop-color="#500c10"/>
        <stop offset="1" stop-color="#6a1010"/>
      </linearGradient>
      <radialGradient id="mfaFire" cx="50%" cy="72%" r="40%">
        <stop offset="0" stop-color="#e05010" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e05010" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mfaSky)"/>
    ${stars(9, 435)}
    <rect width="300" height="450" fill="url(#mfaFire)"/>
    <g fill="#0a0408" opacity=".92">
      ${[18,56,96,140,186,230,268].map((x,i)=>`<rect x="${x}" y="${102+i%3*20}" width="${32+i%2*6}" height="${212-i%3*20}"/>`).join('')}
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*50+6)%296,y=114+(i*34)%168; return `<rect x="${x}" y="${y}" width="8" height="14" fill="#d04020" opacity="${0.06+(i%4)*0.025}"/>`;}).join('')}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#200408"/>
    <path d="M0 364 Q150 352 300 362 L300 450 L0 450 Z" fill="#180306"/>
    <g fill="#e05010" opacity=".55">
      ${[44,90,180,240].map((x,i)=>`<path d="M${x} ${314} Q${x+6} ${292+i%2*10} ${x+12} ${278+i%2*14} Q${x+18} ${292+i%2*10} ${x+24} ${314}" opacity=".6"/>`).join('')}
    </g>
    ${Array.from({length:6}).map((_,i)=>`<circle cx="${60+i*36}" cy="${310}" r="${4+i%2*2}" fill="#e08020" opacity="${0.15+i%3*0.08}"/>`).join('')}
    <g fill="#080408" opacity=".9">
      <circle cx="150" cy="270" r="10"/>
      <rect x="144" y="280" width="12" height="36" rx="1"/>
      <path d="M132 274 L144 278 L144 312 Q136 316 130 308 Z"/>
      <path d="M168 274 L156 278 L156 312 Q164 316 170 308 Z"/>
      <path d="M140 280 L110 296 L108 290 L138 274 Z"/>
    </g>
    <g fill="#040208">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 314 Q150 308 300 312" stroke="#6a1010" stroke-width=".5" fill="none" opacity=".45"/>
  `),

  /* ── 繁花 / Blossoms Shanghai · Shanghai — neon lane houses, the Bund at night, a city's bloom ── */
  blossoms: scene(`
    <defs>
      <linearGradient id="blsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060408"/><stop offset=".36" stop-color="#0c0810"/>
        <stop offset=".66" stop-color="#180c18"/><stop offset=".88" stop-color="#2c1028"/>
        <stop offset="1" stop-color="#401830"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#blsSky)"/>
    ${stars(8, 425)}
    <g fill="#0e0a0c" opacity=".9">
      ${[20,58,98,142,188,232,268].map((x,i)=>`<rect x="${x}" y="${96+i%3*22}" width="${32+i%2*6}" height="${218-i%3*22}"/>`).join('')}
    </g>
    ${Array.from({length:22}).map((_,i)=>{const x=(i*46+4)%298,y=108+(i*36)%180,c=['#e84060','#e8a020','#40c0e0','#e060a0','#60e0a0'][i%5]; return `<rect x="${x}" y="${y}" width="9" height="14" fill="${c}" opacity="${0.08+(i%4)*0.04}"/>`;}).join('')}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#120a0e"/>
    <path d="M0 366 Q150 354 300 364 L300 450 L0 450 Z" fill="#0e0808"/>
    <g fill="#c03050" opacity=".75">
      <rect x="108" y="248" width="84" height="72"/>
      <path d="M100 252 L150 222 L200 252 Z"/>
    </g>
    ${[[112,268],[128,268],[152,268],[168,268],[112,302],[128,302],[152,302],[168,302]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#e8c060" opacity="${y<285?'.45':'.3'}"/>`).join('')}
    ${Array.from({length:5}).map((_,i)=>`<circle cx="${118+i*14}" cy="${244}" r="5" fill="${['#e84060','#e8a020','#40c0e0','#e060a0','#60e0a0'][i]}" opacity=".5"/>`).join('')}
    <g fill="#060408">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#401830" stroke-width=".5" fill="none" opacity=".4"/>
  `),
};
