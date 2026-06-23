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
};
