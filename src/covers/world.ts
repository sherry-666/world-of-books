// World literature — García Márquez, Verne, Pamuk, Fitzgerald, Hosseini.
import { scene, stars } from './helpers';

export const WORLD_COVERS: Record<string, string> = {

  /* ── One Hundred Years of Solitude · Macondo — golden tropics, yellow butterflies, sun ── */
  hundredyears: scene(`
    <defs>
      <linearGradient id="hySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f7d985"/><stop offset=".42" stop-color="#eeaa50"/>
        <stop offset=".72" stop-color="#d77b39"/><stop offset="1" stop-color="#9c4f2c"/></linearGradient>
      <radialGradient id="hySun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff7df"/><stop offset=".55" stop-color="#ffe9ae" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffe9ae" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hySky)"/>
    <circle cx="150" cy="150" r="120" fill="url(#hySun)"/>
    <circle cx="150" cy="150" r="38" fill="#fff7e0" opacity=".9"/>
    ${Array.from({ length: 16 }).map((_, i) => { const x = 10 + i * 19, off = (i % 3) * 8; return `<line x1="${x}" y1="${30 + off}" x2="${x - 12}" y2="${120 + off}" stroke="#fff6df" stroke-width="1" opacity=".28"/>`; }).join('')}
    <path d="M0 290 q50 -34 100 -14 t100 -8 t100 12 V450 H0 Z" fill="#4a7a3f"/>
    <path d="M0 330 q60 -26 130 -6 t170 6 V450 H0 Z" fill="#2f5a30"/>
    <path d="M0 376 q70 -20 160 0 t140 6 V450 H0 Z" fill="#1b3a22"/>
    ${[[60, 250, 1.1], [210, 210, 1.4], [120, 300, 1], [245, 300, 1.2], [95, 200, .9], [180, 330, 1.1], [40, 330, 1]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q-9 -11 -13 -2 Q-11 7 0 3 Q11 7 13 -2 Q9 -11 0 0Z" fill="#ffe14d" opacity=".92"/><line x1="0" y1="0" x2="0" y2="4" stroke="#a8761a" stroke-width=".6"/></g>`).join('')}
    ${stars(10, 3)}
  `),

  /* ── Love in the Time of Cholera · Cartagena — rose-gold Caribbean sunset, colonial port ── */
  cholera: scene(`
    <defs>
      <linearGradient id="chSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffd2a3"/><stop offset=".4" stop-color="#f59e7a"/>
        <stop offset=".72" stop-color="#d56b6e"/><stop offset="1" stop-color="#7e3a55"/></linearGradient>
      <radialGradient id="chSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3d9"/><stop offset=".5" stop-color="#ffcf8e" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffcf8e" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#chSky)"/>
    <circle cx="150" cy="296" r="120" fill="url(#chSun)"/>
    <circle cx="150" cy="296" r="34" fill="#fff0c8" opacity=".95"/>
    ${stars(10, 5)}
    ${[[40, 70], [60, 62], [80, 72], [232, 90], [250, 82], [268, 92]].map(([x, y]) => `<path d="M${x} ${y} q5 -5 10 0 q5 -5 10 0" stroke="#7e3a55" stroke-width="1.4" fill="none" opacity=".5"/>`).join('')}
    <g fill="#5e2940">
      <rect x="0" y="304" width="300" height="34"/>
      <rect x="40" y="280" width="46" height="24"/><path d="M36 280 L63 264 L90 280 Z"/>
      <path d="M120 304 Q120 268 150 268 Q180 268 180 304 Z"/>
      <line x1="150" y1="268" x2="150" y2="252" stroke="#5e2940" stroke-width="3"/><circle cx="150" cy="250" r="3" fill="#e0a83e"/>
      <rect x="210" y="266" width="26" height="38"/><path d="M206 266 L223 250 L240 266 Z"/>
      <rect x="217" y="276" width="12" height="12" rx="1.5" fill="#ffcf78"/>
    </g>
    <rect x="0" y="338" width="300" height="112" fill="#3c1f3a"/>
    <rect x="0" y="338" width="300" height="112" fill="url(#chSun)" opacity=".18"/>
    <rect x="140" y="338" width="20" height="96" fill="#ffd9a0" opacity=".22"/>
    <path d="M0 366 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#ffd9b0" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 398 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#ffd9b0" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── The General in His Labyrinth · Magdalena River — feverish dusk, a boat, jungle banks ── */
  generallabyrinth: scene(`
    <defs>
      <linearGradient id="glSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e8b25a"/><stop offset=".42" stop-color="#c06b3a"/>
        <stop offset=".74" stop-color="#4a5b33"/><stop offset="1" stop-color="#1d2c1f"/></linearGradient>
      <radialGradient id="glSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0cf"/><stop offset=".5" stop-color="#ffce82" stop-opacity=".75"/>
        <stop offset="1" stop-color="#ffce82" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#glSky)"/>
    <circle cx="150" cy="150" r="116" fill="url(#glSun)"/>
    <circle cx="150" cy="150" r="30" fill="#fff3da" opacity=".82"/>
    ${stars(9, 7)}
    <ellipse cx="150" cy="240" rx="220" ry="22" fill="#f3d8ac" opacity=".12"/>
    <path d="M0 250 q40 -34 90 -20 q30 8 60 -6 V330 H0 Z" fill="#1c2a1c"/>
    <path d="M300 250 q-40 -34 -90 -20 q-30 8 -60 -6 V330 H300 Z" fill="#16221a"/>
    ${[[36, 256], [70, 244], [250, 254], [220, 242]].map(([x, y]) => `<g transform="translate(${x} ${y})" stroke="#0f1810" stroke-width="3" fill="none" stroke-linecap="round"><path d="M0 36 V0"/><path d="M0 2 Q-16 -6 -24 4"/><path d="M0 2 Q16 -6 24 4"/><path d="M0 8 Q-14 4 -22 14"/><path d="M0 8 Q14 4 22 14"/></g>`).join('')}
    <rect x="0" y="318" width="300" height="132" fill="#23341f"/>
    <rect x="0" y="318" width="300" height="132" fill="url(#glSun)" opacity=".16"/>
    <rect x="138" y="318" width="24" height="118" fill="#ffe0a8" opacity=".2"/>
    <g>
      <path d="M126 352 L174 352 L166 366 L134 366 Z" fill="#10180e"/>
      <line x1="150" y1="352" x2="150" y2="332" stroke="#10180e" stroke-width="2"/>
      <path d="M150 334 L168 348 L150 350 Z" fill="#0e150d"/>
      <circle cx="150" cy="344" r="3.4" fill="#10180e"/>
    </g>
    <path d="M0 388 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#ffe0a8" stroke-width=".6" fill="none" opacity=".24"/>
  `),

  /* ── Twenty Thousand Leagues Under the Sea · the deep — god rays, the Nautilus, a jellyfish ── */
  leagues20k: scene(`
    <defs>
      <linearGradient id="seaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a8a93"/><stop offset=".35" stop-color="#13627a"/>
        <stop offset=".7" stop-color="#0a324a"/><stop offset="1" stop-color="#03121c"/></linearGradient>
      <radialGradient id="seaTop" cx="50%" cy="0%" r="70%">
        <stop offset="0" stop-color="#bdeef0" stop-opacity=".55"/><stop offset="1" stop-color="#bdeef0" stop-opacity="0"/></radialGradient>
      <radialGradient id="naLight" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe9b0"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#seaSky)"/>
    <rect width="300" height="180" fill="url(#seaTop)"/>
    ${[-44, -16, 12, 40].map((d, i) => `<polygon points="${150 + d},0 ${168 + d},0 ${120 + d + i * 8},300 ${96 + d + i * 8},300" fill="#cdeef2" opacity="${(0.1 - i * 0.012).toFixed(3)}"/>`).join('')}
    ${stars(7, 3)}
    <g>
      <ellipse cx="150" cy="300" rx="96" ry="26" fill="#0a2230"/>
      <ellipse cx="150" cy="300" rx="96" ry="26" fill="#1a4658" opacity=".5"/>
      <path d="M246 300 q14 -10 30 -2 q-10 2 -30 2 q20 4 30 8 q-16 6 -30 -8Z" fill="#0a2230"/>
      <path d="M118 280 Q150 262 182 280 Z" fill="#0a2230"/>
      ${[110, 134, 158, 182].map(x => `<circle cx="${x}" cy="300" r="4.6" fill="url(#naLight)"/><circle cx="${x}" cy="300" r="2.2" fill="#ffd98a"/>`).join('')}
      <line x1="54" y1="300" x2="22" y2="300" stroke="#0a2230" stroke-width="3"/>
    </g>
    <g opacity=".9">
      <path d="M214 360 Q214 342 234 342 Q254 342 254 360 Q244 356 234 360 Q224 356 214 360Z" fill="#9fe9e4" opacity=".5"/>
      <g stroke="#9fe9e4" stroke-width="1" fill="none" opacity=".4" stroke-linecap="round">
        <path d="M220 360 q-3 16 2 30"/><path d="M230 360 q0 18 -2 32"/><path d="M240 360 q3 16 -1 30"/><path d="M248 360 q4 14 1 26"/>
      </g>
    </g>
    ${Array.from({ length: 14 }).map((_, i) => { const x = (i * 71 + 20) % 300, y = (i * 53 + 40) % 420, r = (i % 3) * 0.6 + 0.7; return `<circle cx="${x}" cy="${y}" r="${r}" fill="#bdeef0" opacity="${(0.2 + (i % 4) / 12).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── Istanbul: Memories and the City · hüzün — grey foggy Bosphorus morning, misty skyline ── */
  istanbulmemoir: scene(`
    <defs>
      <linearGradient id="imSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d3d6d2"/><stop offset=".45" stop-color="#aab1b2"/>
        <stop offset=".8" stop-color="#7c878c"/><stop offset="1" stop-color="#566066"/></linearGradient>
      <radialGradient id="imSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#f4f1e6" stop-opacity=".9"/><stop offset="1" stop-color="#f4f1e6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#imSky)"/>
    <circle cx="150" cy="150" r="120" fill="url(#imSun)"/>
    <circle cx="150" cy="150" r="30" fill="#eceae0" opacity=".5"/>
    ${stars(7, 5)}
    <ellipse cx="150" cy="232" rx="220" ry="26" fill="#e2e5e2" opacity=".22"/>
    <ellipse cx="150" cy="288" rx="220" ry="30" fill="#e2e5e2" opacity=".18"/>
    <g fill="#4a545a" opacity=".92">
      <rect x="0" y="300" width="300" height="38"/>
      <path d="M96 300 Q96 256 150 256 Q204 256 204 300 Z"/>
      <rect x="122" y="288" width="56" height="14"/>
      <line x1="150" y1="256" x2="150" y2="240" stroke="#4a545a" stroke-width="3"/><circle cx="150" cy="238" r="2.6" fill="#7c878c"/>
      <path d="M62 300 Q62 276 84 276 Q106 276 106 300 Z"/>
      <path d="M194 300 Q194 276 216 276 Q238 276 238 300 Z"/>
      <rect x="76" y="226" width="6" height="74"/><path d="M72 226 L79 210 L86 226 Z"/>
      <rect x="218" y="234" width="6" height="66"/><path d="M214 234 L221 218 L228 234 Z"/>
      <rect x="40" y="258" width="4" height="42"/><path d="M37 258 L42 246 L47 258 Z"/>
      <rect x="256" y="262" width="4" height="38"/><path d="M253 262 L258 250 L263 262 Z"/>
    </g>
    <ellipse cx="150" cy="318" rx="240" ry="20" fill="#cfd5d4" opacity=".25"/>
    <rect x="0" y="332" width="300" height="118" fill="#454f54"/>
    <rect x="0" y="332" width="300" height="118" fill="#5a6469" opacity=".4"/>
    <g>
      <path d="M118 372 L182 372 L172 386 L128 386 Z" fill="#2b3236"/>
      <rect x="138" y="358" width="24" height="14" fill="#2b3236"/>
      <rect x="150" y="344" width="5" height="14" fill="#2b3236"/>
      <path d="M150 344 q-8 -10 -16 -6" stroke="#cdd2d0" stroke-width="2" fill="none" opacity=".5"/>
      <rect x="143" y="362" width="5" height="6" fill="#ffcf78" opacity=".7"/>
    </g>
    ${[[60, 150], [78, 142], [232, 130], [250, 138], [40, 120]].map(([x, y]) => `<path d="M${x} ${y} q6 -6 12 0 q6 -6 12 0" stroke="#3e474c" stroke-width="1.3" fill="none" opacity=".55"/>`).join('')}
    <path d="M0 360 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#cdd5d4" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 396 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#cdd5d4" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── The Great Gatsby · West Egg — deco night, the green light over the bay ── */
  gatsby: scene(`
    <defs>
      <linearGradient id="gatSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0f1a44"/><stop offset=".5" stop-color="#163a5c"/>
        <stop offset=".66" stop-color="#1c6f68"/><stop offset="1" stop-color="#0c2536"/></linearGradient>
      <radialGradient id="gatGreen" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#d6ffe6"/><stop offset=".4" stop-color="#5cf0a6" stop-opacity=".9"/>
        <stop offset="1" stop-color="#5cf0a6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gatSky)"/>
    ${Array.from({ length: 21 }).map((_, i) => { const a = (-90 + (i - 10) * 8.5) * Math.PI / 180; const x2 = 150 + Math.cos(a) * 260, y2 = 20 + Math.sin(a) * 260; return `<line x1="150" y1="20" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#e7c777" stroke-width="${i % 2 ? '.5' : '1'}" opacity="${i % 2 ? '.12' : '.22'}"/>`; }).join('')}
    ${stars(26, 7)}
    <rect x="0" y="296" width="300" height="154" fill="#0b2230" opacity=".9"/>
    <circle cx="150" cy="262" r="70" fill="url(#gatGreen)"/>
    <circle cx="150" cy="262" r="9" fill="#eafff2"/>
    <circle cx="150" cy="262" r="4" fill="#7dffc0"/>
    ${Array.from({ length: 11 }).map((_, i) => `<line x1="${150 - 44 + i * 9}" y1="300" x2="${150 - 44 + i * 9}" y2="${330 + (i % 3) * 22}" stroke="#5cf0a6" stroke-width="1.4" opacity="${(0.32 - (Math.abs(i - 5)) * 0.04).toFixed(2)}"/>`).join('')}
    <path d="M0 360 q40 -7 75 0 t75 0 t75 0 t75 0" stroke="#7fd9c2" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 392 q40 -7 75 0 t75 0 t75 0 t75 0" stroke="#7fd9c2" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── The Kite Runner · Kabul — autumn sky over the Hindu Kush, kites, a boy on a rooftop ── */
  kiterunner: scene(`
    <defs>
      <linearGradient id="krSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2e6b8a"/><stop offset=".4" stop-color="#6f9bac"/>
        <stop offset=".72" stop-color="#d9a85a"/><stop offset="1" stop-color="#e8c06a"/></linearGradient>
      <radialGradient id="krSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff4d6" stop-opacity=".9"/><stop offset="1" stop-color="#fff4d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#krSky)"/>
    <circle cx="214" cy="120" r="90" fill="url(#krSun)"/>
    <circle cx="214" cy="120" r="22" fill="#fff2cc" opacity=".7"/>
    ${stars(7, 5)}
    <path d="M0 300 L48 250 L88 286 L140 232 L190 286 L246 244 L300 292 V330 H0 Z" fill="#8a7560" opacity=".85"/>
    <path d="M140 232 L156 256 L124 256 Z" fill="#eef2f0"/>
    <path d="M246 244 L258 264 L234 264 Z" fill="#eef2f0"/>
    <path d="M48 250 L60 270 L36 270 Z" fill="#e6ece8"/>
    <g fill="#3a2c22">
      <rect x="0" y="318" width="300" height="132"/>
      ${Array.from({ length: 9 }).map((_, i) => `<rect x="${i * 34}" y="${300 + (i % 3) * 6}" width="30" height="${24 + (i % 3) * 6}"/>`).join('')}
    </g>
    ${[[70, 96, '#e23b2e', 18], [120, 60, '#3b7ae2', 14], [210, 200, '#2ea36a', 12]].map((k) => { const [x, y, c, s] = k as [number, number, string, number]; return `<g transform="translate(${x} ${y})"><path d="M0 ${-s} L${s * 0.66} 0 L0 ${s} L${-s * 0.66} 0 Z" fill="${c}"/><line x1="0" y1="${-s}" x2="0" y2="${s}" stroke="#1a1a1a" stroke-width=".6" opacity=".5"/><path d="M0 ${s} q4 8 -2 16 q-6 8 2 16" stroke="#f0e0c0" stroke-width=".7" fill="none" opacity=".6"/></g>`; }).join('')}
    <g fill="#241a14">
      <circle cx="60" cy="306" r="5"/>
      <path d="M60 311 L54 332 L66 332 Z"/>
      <line x1="60" y1="314" x2="86" y2="74" stroke="#241a14" stroke-width=".7" opacity=".5"/>
    </g>
  `),

  /* ── A Thousand Splendid Suns · Kabul — golden dusk, old city, crescent moon, scattered suns ── */
  thousandsuns: scene(`
    <defs>
      <linearGradient id="tsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5e2a38"/><stop offset=".4" stop-color="#a8482e"/>
        <stop offset=".72" stop-color="#df8a3a"/><stop offset="1" stop-color="#f6c468"/></linearGradient>
      <radialGradient id="tsSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff2c8"/><stop offset=".5" stop-color="#ffce72" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffce72" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tsSky)"/>
    <circle cx="150" cy="250" r="130" fill="url(#tsSun)"/>
    <circle cx="150" cy="256" r="32" fill="#fff0c0" opacity=".9"/>
    <path d="M76 70 A22 22 0 1 0 92 104 A17 17 0 1 1 76 70 Z" fill="#ffe9b0" opacity=".85"/>
    ${Array.from({ length: 26 }).map((_, i) => { const x = (i * 53 + 17) % 300, y = (i * 37 + 24) % 220, r = (i % 3) * 0.5 + 0.7; return `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffe6a8" opacity="${(0.3 + (i % 5) / 12).toFixed(2)}"/>`; }).join('')}
    <path d="M0 300 L60 264 L110 296 L170 258 L230 296 L300 268 V330 H0 Z" fill="#5a3320" opacity=".7"/>
    <g fill="#2e1a12">
      <rect x="0" y="318" width="300" height="132"/>
      ${Array.from({ length: 10 }).map((_, i) => `<rect x="${i * 31}" y="${302 + (i % 3) * 6}" width="27" height="${22 + (i % 3) * 6}"/>`).join('')}
      <rect x="138" y="262" width="10" height="56"/><path d="M134 262 Q143 248 152 262 Z"/><circle cx="143" cy="246" r="2.4" fill="#e0a83e"/>
      <path d="M196 318 Q196 290 214 290 Q232 290 232 318 Z"/>
    </g>
    ${[[150, 300], [212, 300]].map(([x, y]) => `<rect x="${x - 1}" y="${y}" width="4" height="6" fill="#ffcf78" opacity=".6"/>`).join('')}
  `),

  /* ── The Hunchback of Notre-Dame · Paris — gothic violet dusk, the cathedral, glowing rose window ── */
  notredame: scene(`
    <defs>
      <linearGradient id="ndSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#241f3e"/><stop offset=".5" stop-color="#3d3358"/>
        <stop offset=".8" stop-color="#5e4a5e"/><stop offset="1" stop-color="#8a6a58"/></linearGradient>
      <radialGradient id="ndRose" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe6a8"/><stop offset=".5" stop-color="#e0632e" stop-opacity=".8"/>
        <stop offset="1" stop-color="#e0632e" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ndSky)"/>
    <circle cx="226" cy="108" r="26" fill="#e6e0f0" opacity=".4"/>
    <circle cx="226" cy="108" r="13" fill="#f2eef8" opacity=".6"/>
    ${stars(14, 7)}
    <g fill="#15111f">
      <rect x="0" y="334" width="300" height="116"/>
      <line x1="150" y1="252" x2="150" y2="196" stroke="#15111f" stroke-width="3"/>
      <path d="M150 192 L155 208 L145 208 Z"/>
      <rect x="96" y="252" width="108" height="82"/>
      <rect x="96" y="212" width="34" height="122"/>
      <rect x="170" y="212" width="34" height="122"/>
      <rect x="92" y="250" width="116" height="9"/>
      ${[100, 112, 174, 186].map(x => `<rect x="${x}" y="206" width="6" height="8"/>`).join('')}
      <path d="M108 334 V300 Q108 288 120 288 Q132 288 132 300 V334 Z"/>
      <path d="M168 334 V300 Q168 288 180 288 Q192 288 192 300 V334 Z"/>
    </g>
    <circle cx="150" cy="280" r="22" fill="url(#ndRose)"/>
    <circle cx="150" cy="280" r="12" fill="#ffcf78"/>
    <g stroke="#3a2418" stroke-width="1" opacity=".7">
      ${Array.from({ length: 8 }).map((_, i) => { const a = i * Math.PI / 4; return `<line x1="150" y1="280" x2="${(150 + Math.cos(a) * 12).toFixed(1)}" y2="${(280 + Math.sin(a) * 12).toFixed(1)}"/>`; }).join('')}
    </g>
    <rect x="110" y="226" width="8" height="18" rx="4" fill="#ffcf78" opacity=".45"/>
    <rect x="182" y="226" width="8" height="18" rx="4" fill="#ffcf78" opacity=".45"/>
    ${[[70, 150], [88, 142], [250, 130]].map(([x, y]) => `<path d="M${x} ${y} q6 -6 12 0 q6 -6 12 0" stroke="#1c1726" stroke-width="1.4" fill="none" opacity=".6"/>`).join('')}
  `),

  /* ── Les Misérables · Paris — crimson revolutionary dawn, the barricade, a red flag ── */
  lesmis: scene(`
    <defs>
      <linearGradient id="lmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#14122a"/><stop offset=".4" stop-color="#3a1c2e"/>
        <stop offset=".72" stop-color="#7e2a26"/><stop offset="1" stop-color="#c2502e"/></linearGradient>
      <radialGradient id="lmSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffdfa6"/><stop offset=".5" stop-color="#ff8a44" stop-opacity=".8"/>
        <stop offset="1" stop-color="#ff8a44" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lmSky)"/>
    ${stars(16, 5)}
    <circle cx="150" cy="320" r="140" fill="url(#lmSun)"/>
    <g fill="#241420">
      <rect x="0" y="300" width="300" height="36"/>
      ${Array.from({ length: 10 }).map((_, i) => `<rect x="${i * 31 + 4}" y="${288 - (i % 3) * 8}" width="20" height="${24 + (i % 3) * 8}"/>`).join('')}
      <path d="M210 300 Q210 270 230 270 Q250 270 250 300 Z"/>
      <line x1="230" y1="270" x2="230" y2="256" stroke="#241420" stroke-width="2"/>
    </g>
    <path d="M0 366 L18 350 L40 360 L66 340 L96 358 L130 338 L168 356 L206 340 L244 358 L276 344 L300 354 L300 450 L0 450 Z" fill="#160e16"/>
    <g stroke="#0e0810" stroke-width="3" fill="none">
      <circle cx="74" cy="402" r="18"/>
      ${Array.from({ length: 6 }).map((_, i) => { const a = i * Math.PI / 3; return `<line x1="74" y1="402" x2="${(74 + Math.cos(a) * 18).toFixed(1)}" y2="${(402 + Math.sin(a) * 18).toFixed(1)}"/>`; }).join('')}
    </g>
    <g fill="#0e0810">
      <rect x="180" y="392" width="60" height="10" transform="rotate(-12 180 392)"/>
      <rect x="116" y="404" width="74" height="9" transform="rotate(6 116 404)"/>
    </g>
    <line x1="150" y1="350" x2="150" y2="262" stroke="#1a1410" stroke-width="3"/>
    <path d="M150 264 q24 5 44 -6 q-9 13 0 24 q-24 7 -44 0 Z" fill="#d12a26"/>
    <circle cx="106" cy="356" r="8" fill="#ffcf78" opacity=".4"/>
    <rect x="103" y="350" width="6" height="9" rx="1.5" fill="#ffcf78" opacity=".85"/>
  `),
};
