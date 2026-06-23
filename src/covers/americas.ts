// The Americas — United States, Canada, and Latin America.
import { scene, stars } from './helpers';

export const AMERICAS_COVERS: Record<string, string> = {

  /* ── To Kill a Mockingbird · Alabama — warm Southern dusk, a great oak, a mockingbird ── */
  mockingbird: scene(`
    <defs>
      <linearGradient id="mbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3e3a5e"/><stop offset=".42" stop-color="#9c6a6a"/>
        <stop offset=".72" stop-color="#dd9a5a"/><stop offset="1" stop-color="#f0c46e"/></linearGradient>
      <radialGradient id="mbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3d0" stop-opacity=".9"/><stop offset="1" stop-color="#fff3d0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mbSky)"/>
    <circle cx="150" cy="210" r="120" fill="url(#mbSun)"/>
    ${stars(8, 5)}
    <path d="M0 318 q70 -16 150 -4 t150 4 V450 H0 Z" fill="#3a4a2e"/>
    <g fill="#241c14">
      <rect x="142" y="240" width="14" height="110"/>
      <path d="M149 240 q-30 -34 -56 -18 M149 250 q34 -30 58 -10 M149 268 q-26 -24 -50 -8 M149 276 q30 -22 52 -6"/>
      <ellipse cx="120" cy="232" rx="46" ry="30" opacity=".9"/>
      <ellipse cx="180" cy="238" rx="44" ry="28" opacity=".9"/>
      <ellipse cx="150" cy="214" rx="40" ry="26" opacity=".9"/>
    </g>
    <g fill="#1a140e"><ellipse cx="150" cy="320" rx="7" ry="3.4"/><path d="M150 320 q10 -8 22 -4 q-10 4 -22 4Z"/><path d="M150 320 q-8 -6 -18 -2"/></g>
  `),

  /* ── East of Eden · Salinas Valley — golden California hills, a lone oak ── */
  eden: scene(`
    <defs>
      <linearGradient id="edSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f3d984"/><stop offset=".45" stop-color="#eeb45a"/>
        <stop offset=".75" stop-color="#cf8240"/><stop offset="1" stop-color="#8a5430"/></linearGradient>
      <radialGradient id="edSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0"/><stop offset=".5" stop-color="#ffe6a8" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffe6a8" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#edSky)"/>
    <circle cx="150" cy="160" r="116" fill="url(#edSun)"/>
    <circle cx="150" cy="160" r="34" fill="#fff7df" opacity=".9"/>
    ${stars(7, 3)}
    <path d="M0 300 q90 -50 180 -16 t120 -10 V360 H0 Z" fill="#c79046"/>
    <path d="M0 336 q80 -36 170 -8 t130 0 V450 H0 Z" fill="#8a5e2e"/>
    <path d="M0 380 q90 -24 180 0 t120 8 V450 H0 Z" fill="#5a3c1e"/>
    <g fill="#2a1c10">
      <rect x="146" y="296" width="9" height="44"/>
      <ellipse cx="150" cy="288" rx="36" ry="22"/>
      <ellipse cx="124" cy="298" rx="22" ry="14"/><ellipse cx="176" cy="298" rx="22" ry="14"/>
    </g>
  `),

  /* ── Beloved · Cincinnati — cold indigo night, the haunted house at 124, a red-lit window ── */
  beloved: scene(`
    <defs>
      <linearGradient id="blSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#16203a"/><stop offset=".5" stop-color="#27314f"/>
        <stop offset="1" stop-color="#3e4a64"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#blSky)"/>
    <circle cx="190" cy="120" r="22" fill="#cdd6ec" opacity=".5"/>
    ${stars(14, 7)}
    <g stroke="#0e1428" stroke-width="3" fill="none" stroke-linecap="round"><path d="M96 300 V236"/><path d="M96 262 L78 244"/><path d="M96 272 L114 250"/><path d="M96 250 L84 234"/></g>
    <g fill="#0c1226">
      <rect x="120" y="276" width="80" height="74"/>
      <path d="M112 276 L160 244 L208 276 Z"/>
      <rect x="0" y="350" width="300" height="100"/>
    </g>
    <rect x="150" y="292" width="20" height="26" rx="1.5" fill="#e23b2e" opacity=".85"/>
    <rect x="150" y="292" width="20" height="26" rx="1.5" fill="#ff7a3c" opacity=".25"/>
    <circle cx="160" cy="305" r="20" fill="#e23b2e" opacity=".14"/>
    <rect x="128" y="296" width="14" height="18" fill="#1a2236"/><rect x="178" y="296" width="14" height="18" fill="#1a2236"/>
  `),

  /* ── Anne of Green Gables · Prince Edward Island — soft pastoral dusk, the green-gabled house, cherry blossom ── */
  greengables: scene(`
    <defs>
      <linearGradient id="ggSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#9ec0d6"/><stop offset=".42" stop-color="#cfc0cf"/>
        <stop offset=".74" stop-color="#f0c4a6"/><stop offset="1" stop-color="#e89a78"/></linearGradient>
      <radialGradient id="ggSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3da" stop-opacity=".85"/><stop offset="1" stop-color="#fff3da" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ggSky)"/>
    <circle cx="150" cy="180" r="100" fill="url(#ggSun)"/>
    ${stars(6, 5)}
    <path d="M0 330 q80 -16 160 -4 t140 4 V450 H0 Z" fill="#7a9a52"/>
    <path d="M0 372 q80 -12 160 2 t140 4 V450 H0 Z" fill="#9c5a3a"/>
    <g fill="#2a3a24">
      <rect x="124" y="288" width="56" height="52"/>
      <path d="M118 288 L152 258 L186 288 Z"/>
      <path d="M150 288 L168 270 L186 288 Z" fill="#1c2a18"/>
    </g>
    <rect x="138" y="302" width="12" height="16" fill="#ffcf78" opacity=".75"/>
    <g stroke="#3a241c" stroke-width="2.6" fill="none" stroke-linecap="round"><path d="M196 64 Q166 90 124 82"/></g>
    ${[[124, 82], [148, 74], [172, 70], [194, 62]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#fbe4ec" opacity=".95"/>`).join('')}
  `),

  /* ── Here Is New York · Manhattan — warm gold skyline at dusk, the Empire State ── */
  hereisnewyork: scene(`
    <defs>
      <linearGradient id="nySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2c52"/><stop offset=".42" stop-color="#6e4a66"/>
        <stop offset=".72" stop-color="#d98a52"/><stop offset="1" stop-color="#f0bd6a"/></linearGradient>
      <radialGradient id="nySun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3d0" stop-opacity=".85"/><stop offset="1" stop-color="#fff3d0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nySky)"/>
    <circle cx="150" cy="250" r="120" fill="url(#nySun)"/>
    ${stars(10, 3)}
    <g fill="#1c1a30">
      <rect x="0" y="300" width="300" height="150"/>
      ${Array.from({ length: 13 }).map((_, i) => { const x = i * 24, h = 30 + ((i * 67) % 90), w = 18; return `<rect x="${x}" y="${300 - h}" width="${w}" height="${h}"/>`; }).join('')}
      <rect x="138" y="196" width="24" height="104"/>
      <path d="M144 196 L150 168 L156 196 Z"/>
      <line x1="150" y1="168" x2="150" y2="154" stroke="#1c1a30" stroke-width="2"/>
    </g>
    ${Array.from({ length: 26 }).map((_, i) => { const x = 8 + (i * 41) % 280, y = 240 + (i * 53) % 100; return `<rect x="${x}" y="${y}" width="2.4" height="3" fill="#ffd98a" opacity="${(0.4 + (i % 4) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── The Catcher in the Rye · New York — wintry grey city, Central Park carousel, one red note ── */
  catcherrye: scene(`
    <defs>
      <linearGradient id="crSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4452"/><stop offset=".5" stop-color="#5a6470"/>
        <stop offset="1" stop-color="#8a9098"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#crSky)"/>
    ${stars(8, 9)}
    <g fill="#2a323c">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 11 }).map((_, i) => { const x = i * 27, h = 24 + ((i * 53) % 56); return `<rect x="${x}" y="${300 - h}" width="22" height="${h}"/>`; }).join('')}
    </g>
    <rect x="0" y="340" width="300" height="110" fill="#1f2730"/>
    <g fill="#222a32">
      <path d="M118 340 L118 320 Q150 300 182 320 L182 340 Z"/>
      <line x1="150" y1="304" x2="150" y2="292" stroke="#222a32" stroke-width="3"/><circle cx="150" cy="290" r="3" fill="#c23a3a"/>
      ${[126, 150, 174].map(x => `<line x1="${x}" y1="318" x2="${x}" y2="340" stroke="#222a32" stroke-width="3"/>`).join('')}
    </g>
    ${[[126, 318, '#c23a3a'], [150, 312, '#3a6ea8'], [174, 318, '#c2a23a']].map(([x, y, c]) => `<rect x="${(x as number) - 5}" y="${(y as number) - 8}" width="10" height="8" rx="2" fill="${c}" opacity=".75"/>`).join('')}
    ${Array.from({ length: 40 }).map((_, i) => { const x = (i * 53 + i * i * 7) % 300, y = (i * 71 + i * i * 3) % 340, r = ((i * 13) % 10) / 10 * 0.9 + 0.5; return `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#eef2f6" opacity="${(0.4 + ((i * 5) % 5) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── In Cold Blood · Holcomb, Kansas — cold prairie night, the Clutter farmhouse, one lit window ── */
  incoldblood: scene(`
    <defs>
      <linearGradient id="icSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#141a30"/><stop offset=".5" stop-color="#26304a"/>
        <stop offset="1" stop-color="#46506a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#icSky)"/>
    <circle cx="186" cy="118" r="20" fill="#cdd6ec" opacity=".5"/>
    ${stars(18, 5)}
    <path d="M0 320 q150 -10 300 0 V360 H0 Z" fill="#1a2034"/>
    <g fill="#0e1426">
      <rect x="120" y="288" width="60" height="44"/>
      <path d="M112 288 L150 262 L188 288 Z"/>
      <rect x="0" y="332" width="300" height="118"/>
    </g>
    <rect x="138" y="298" width="14" height="18" fill="#ffcf78" opacity=".8"/>
    <circle cx="145" cy="307" r="14" fill="#ffcf78" opacity=".1"/>
    <g stroke="#0c1020" stroke-width="2" fill="none" stroke-linecap="round">
      ${Array.from({ length: 24 }).map((_, i) => { const x = i * 13 + 2; const h = 14 + ((i * 23) % 16); return `<line x1="${x}" y1="350" x2="${x - 2}" y2="${350 - h}"/>`; }).join('')}
    </g>
  `),

  /* ── Do Androids Dream of Electric Sheep? · San Francisco — smoggy dystopian dusk, dark towers, a flying car ── */
  androidsdream: scene(`
    <defs>
      <linearGradient id="adSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a1f2e"/><stop offset=".45" stop-color="#7a3a2e"/>
        <stop offset=".75" stop-color="#b56a32"/><stop offset="1" stop-color="#5a3320"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#adSky)"/>
    <circle cx="150" cy="170" r="60" fill="#e08a3e" opacity=".4"/>
    ${stars(8, 11)}
    ${[[100, 230], [200, 224]].map(([cx, cy]) => `<ellipse cx="${cx}" cy="${cy}" rx="120" ry="10" fill="#2a1620" opacity=".4"/>`).join('')}
    <g fill="#160d18">
      <rect x="0" y="300" width="300" height="150"/>
      ${Array.from({ length: 9 }).map((_, i) => { const x = i * 33, h = 50 + ((i * 71) % 110), w = 26; return `<rect x="${x}" y="${300 - h}" width="${w}" height="${h}"/>`; }).join('')}
    </g>
    ${Array.from({ length: 22 }).map((_, i) => { const x = 6 + (i * 47) % 288, y = 220 + (i * 37) % 120; return `<rect x="${x}" y="${y}" width="2.4" height="3" fill="${i % 4 ? '#ffb14d' : '#9fe9e4'}" opacity="${(0.4 + (i % 4) / 10).toFixed(2)}"/>`; }).join('')}
    <g transform="translate(150 150)"><ellipse cx="0" cy="0" rx="20" ry="6" fill="#0e0a10"/><path d="M-12 -2 Q0 -12 12 -2 Z" fill="#1a1218"/><circle cx="-14" cy="2" r="2.2" fill="#ff5a3a"/><circle cx="14" cy="2" r="2.2" fill="#ff5a3a"/></g>
  `),

  /* ── The Shining · Estes Park — the Overlook in a blizzard, dark peaks, red-lit windows ── */
  theshining: scene(`
    <defs>
      <linearGradient id="shSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2238"/><stop offset=".5" stop-color="#2e3a52"/>
        <stop offset="1" stop-color="#4e5a70"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#shSky)"/>
    ${stars(8, 3)}
    <path d="M0 260 L70 180 L120 250 L170 170 L240 250 L300 200 V300 H0 Z" fill="#283042"/>
    <path d="M70 180 L86 210 L54 210 Z" fill="#dfe6f0"/><path d="M170 170 L186 204 L154 204 Z" fill="#dfe6f0"/>
    <g fill="#10182a">
      <rect x="108" y="282" width="84" height="68"/>
      <path d="M102 282 L150 256 L198 282 Z"/>
      <rect x="0" y="350" width="300" height="100"/>
    </g>
    ${Array.from({ length: 6 }).map((_, i) => { const x = 116 + (i % 3) * 26, y = 294 + Math.floor(i / 3) * 22; return `<rect x="${x}" y="${y}" width="12" height="14" rx="1" fill="#c23a2e" opacity=".82"/>`; }).join('')}
    ${Array.from({ length: 70 }).map((_, i) => { const x = (i * 53 + i * i * 7) % 300, y = (i * 71 + i * i * 3) % 450, r = ((i * 13) % 10) / 10 * 1.2 + 0.5; return `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#eef3fb" opacity="${(0.4 + ((i * 5) % 5) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── The Handmaid's Tale · Boston — slate dusk, the Wall, red-cloaked handmaids ── */
  handmaidstale: scene(`
    <defs>
      <linearGradient id="htSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3e48"/><stop offset=".5" stop-color="#5a5e66"/>
        <stop offset="1" stop-color="#83837e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#htSky)"/>
    <circle cx="150" cy="170" r="80" fill="#cfc4a6" opacity=".22"/>
    ${stars(6, 7)}
    <rect x="0" y="300" width="300" height="40" fill="#3a342c"/>
    ${Array.from({ length: 16 }).map((_, i) => `<rect x="${i * 19}" y="294" width="14" height="6" fill="#3a342c"/>`).join('')}
    <rect x="0" y="340" width="300" height="110" fill="#4a443a"/>
    ${[110, 150, 190].map((x, i) => `<g transform="translate(${x} ${354 + (i % 2) * 4})"><path d="M0 0 L-14 56 L14 56 Z" fill="#b5302a"/><path d="M0 -6 a9 9 0 1 1 0 18 a9 9 0 1 1 0 -18Z" fill="#b5302a"/><path d="M-9 0 Q0 -10 9 0 L9 6 Q0 -2 -9 6 Z" fill="#f0ece0"/></g>`).join('')}
  `),

  /* ── The Joy Luck Club · San Francisco — warm Chinatown dusk, red lanterns, the bay ── */
  joyluckclub: scene(`
    <defs>
      <linearGradient id="jlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a2030"/><stop offset=".45" stop-color="#8a3a36"/>
        <stop offset=".75" stop-color="#c2693a"/><stop offset="1" stop-color="#e0a05a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#jlSky)"/>
    <circle cx="150" cy="200" r="90" fill="#ffcf8e" opacity=".3"/>
    ${stars(8, 5)}
    <g fill="#2a1620">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 10 }).map((_, i) => { const x = i * 30, h = 26 + ((i * 47) % 50); return `<rect x="${x}" y="${300 - h}" width="24" height="${h}"/>`; }).join('')}
      <path d="M108 268 Q108 256 120 256 L180 256 Q192 256 192 268 L196 268 L196 274 L104 274 L104 268 Z"/>
    </g>
    ${[120, 150, 180].map(x => `<g><circle cx="${x}" cy="284" r="9" fill="#ff7a3c" opacity=".4"/><ellipse cx="${x}" cy="284" rx="5" ry="6.5" fill="#e23b2e"/></g>`).join('')}
    ${[[112, 290], [150, 286], [188, 290], [134, 282], [166, 282]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="5" fill="#ffd98a" opacity=".7"/>`).join('')}
    <rect x="0" y="340" width="300" height="110" fill="#1f1018"/>
    <rect x="0" y="340" width="300" height="110" fill="#ffcf8e" opacity=".08"/>
  `),

  /* ── American Psycho · Manhattan — glossy cold corporate night, mirror-black towers, red sheen ── */
  americanpsycho: scene(`
    <defs>
      <linearGradient id="apSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c0e16"/><stop offset=".5" stop-color="#16202c"/>
        <stop offset="1" stop-color="#22323c"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#apSky)"/>
    ${stars(6, 7)}
    <g fill="#0a1016">
      <rect x="0" y="180" width="300" height="270"/>
      ${Array.from({ length: 7 }).map((_, i) => { const x = i * 43; return `<rect x="${x}" y="${190 + (i % 2) * 26}" width="40" height="260"/>`; }).join('')}
    </g>
    ${Array.from({ length: 60 }).map((_, i) => { const x = 6 + (i % 7) * 43 + ((i * 7) % 28), y = 200 + Math.floor(i / 7) * 28; return `<rect x="${x}" y="${y}" width="6" height="8" fill="${i % 9 === 0 ? '#e23b2e' : '#cfe2ea'}" opacity="${i % 9 === 0 ? '.85' : (0.22 + (i % 4) / 14).toFixed(2)}"/>`; }).join('')}
    <rect x="0" y="180" width="300" height="270" fill="url(#apSheen)" opacity=".0"/>
    <linearGradient id="apSheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".06"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <rect x="0" y="180" width="300" height="270" fill="url(#apSheen)"/>
    <line x1="150" y1="180" x2="150" y2="450" stroke="#e23b2e" stroke-width="1" opacity=".25"/>
  `),

  /* ── The Secret History · Hampden, Vermont — cold New England snow, autumn woods, a Greek column ── */
  secrethistory: scene(`
    <defs>
      <linearGradient id="seSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3346"/><stop offset=".5" stop-color="#46546a"/>
        <stop offset="1" stop-color="#7a8290"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#seSky)"/>
    <circle cx="150" cy="160" r="80" fill="#dfe4f0" opacity=".25"/>
    ${stars(8, 3)}
    <g fill="#1f2a1e">
      ${[60, 100, 200, 240].map((x, i) => `<g transform="translate(${x} 300)"><rect x="-3" y="-70" width="6" height="70" fill="#28201a"/><circle cx="0" cy="-74" r="${12 + (i % 2) * 4}" fill="#7a3a26" opacity=".8"/></g>`).join('')}
    </g>
    <g fill="#e8e6dc">
      <rect x="120" y="244" width="60" height="10"/>
      <path d="M120 244 L150 226 L180 244 Z"/>
      ${[128, 146, 164].map(x => `<rect x="${x}" y="254" width="8" height="62"/>`).join('')}
      <rect x="116" y="316" width="68" height="10"/>
    </g>
    <rect x="0" y="322" width="300" height="128" fill="#d8dde2"/>
    ${Array.from({ length: 60 }).map((_, i) => { const x = (i * 53 + i * i * 7) % 300, y = (i * 71 + i * i * 3) % 340, r = ((i * 13) % 10) / 10 * 1 + 0.4; return `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#f4f7fb" opacity="${(0.35 + ((i * 5) % 5) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── Infinite Jest · Boston — hazy hilltop tennis academy, a court grid, an odd bright sky ── */
  infinitejest: scene(`
    <defs>
      <linearGradient id="ijSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a4a5e"/><stop offset=".45" stop-color="#5a8a7a"/>
        <stop offset=".75" stop-color="#c2b45a"/><stop offset="1" stop-color="#7a8a3e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ijSky)"/>
    <circle cx="150" cy="160" r="70" fill="#fff3c8" opacity=".4"/>
    ${stars(8, 9)}
    <path d="M0 300 Q150 256 300 300 V330 H0 Z" fill="#3a5a32"/>
    <g fill="#3e6e44" stroke="#eef2d6" stroke-width="1.4">
      <path d="M110 452 L190 452 L168 322 L132 322 Z"/>
    </g>
    <g stroke="#eef2d6" stroke-width="1.2" opacity=".8">
      <line x1="150" y1="322" x2="150" y2="452"/>
      <line x1="138" y1="362" x2="162" y2="362"/><line x1="128" y1="408" x2="172" y2="408"/>
    </g>
    <line x1="120" y1="340" x2="180" y2="340" stroke="#1a2418" stroke-width="2"/>
    <circle cx="150" cy="300" r="4" fill="#e8f06a"/>
  `),

  /* ── Gone Girl · North Carthage, Missouri — cold riverine dusk, a McMansion, the Mississippi ── */
  gonegirl: scene(`
    <defs>
      <linearGradient id="ggrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#26303a"/><stop offset=".5" stop-color="#46525a"/>
        <stop offset=".82" stop-color="#7a7e6e"/><stop offset="1" stop-color="#9a9476"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ggrSky)"/>
    <circle cx="150" cy="180" r="70" fill="#cfd2bc" opacity=".25"/>
    ${stars(8, 5)}
    <path d="M0 296 q150 -10 300 0 V330 H0 Z" fill="#2a3036" opacity=".8"/>
    <g fill="#1a2024">
      <rect x="118" y="270" width="64" height="60"/>
      <path d="M110 270 L150 244 L190 270 Z"/>
      <rect x="160" y="256" width="22" height="14"/><path d="M156 256 L171 246 L186 256 Z"/>
    </g>
    <rect x="136" y="286" width="12" height="16" fill="#ffcf78" opacity=".55"/>
    <rect x="0" y="330" width="300" height="120" fill="#1c2228"/>
    <rect x="0" y="330" width="300" height="120" fill="#9a9476" opacity=".08"/>
    <path d="M0 360 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#aab0a0" stroke-width=".7" fill="none" opacity=".25"/>
    <path d="M0 396 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#aab0a0" stroke-width=".6" fill="none" opacity=".18"/>
    <g fill="#11161a"><path d="M150 230 q-10 -4 -18 2 q8 0 18 3 q10 -3 18 -3 q-8 -6 -18 -2Z"/></g>
  `),

  /* ── My Year of Rest and Relaxation · Manhattan — muted greige, a dim Y2K apartment window, blinds ── */
  yearrestrelaxation: scene(`
    <defs>
      <linearGradient id="yrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#b9b0a4"/><stop offset=".5" stop-color="#9a948c"/>
        <stop offset="1" stop-color="#6e6a64"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#yrSky)"/>
    <circle cx="150" cy="160" r="70" fill="#e6e0d4" opacity=".3"/>
    ${stars(5, 3)}
    <g fill="#5a564e">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 10 }).map((_, i) => { const x = i * 30, h = 26 + ((i * 53) % 56); return `<rect x="${x}" y="${300 - h}" width="24" height="${h}"/>`; }).join('')}
    </g>
    <rect x="0" y="340" width="300" height="110" fill="#3e3a34"/>
    <rect x="108" y="278" width="84" height="62" fill="#2a2620"/>
    <rect x="112" y="282" width="76" height="54" fill="#cdb88a" opacity=".5"/>
    ${Array.from({ length: 9 }).map((_, i) => `<rect x="112" y="${284 + i * 6}" width="76" height="3" fill="#2a2620" opacity=".55"/>`).join('')}
    <rect x="118" y="330" width="6" height="10" fill="#e6c878" opacity=".5"/>
  `),

  /* ── On Earth We're Briefly Gorgeous · Hartford — warm rose dusk, tobacco fields, monarchs ── */
  brieflygorgeous: scene(`
    <defs>
      <linearGradient id="bgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6e4a7e"/><stop offset=".42" stop-color="#c06a7a"/>
        <stop offset=".72" stop-color="#e89a64"/><stop offset="1" stop-color="#f3c878"/></linearGradient>
      <radialGradient id="bgSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3d6" stop-opacity=".85"/><stop offset="1" stop-color="#fff3d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bgSky)"/>
    <circle cx="150" cy="210" r="116" fill="url(#bgSun)"/>
    ${stars(8, 5)}
    <path d="M0 320 q80 -14 160 -2 t140 4 V450 H0 Z" fill="#7a6a34"/>
    <path d="M0 360 q80 -10 160 2 t140 2 V450 H0 Z" fill="#4e4420"/>
    <g stroke="#3a3416" stroke-width="2" stroke-linecap="round">
      ${Array.from({ length: 16 }).map((_, i) => { const x = 8 + i * 19; return `<line x1="${x}" y1="360" x2="${x}" y2="${330 - (i % 3) * 6}"/>`; }).join('')}
    </g>
    ${[[120, 150], [180, 130], [150, 200]].map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M0 0 Q-12 -10 -8 2 Q-12 12 0 4 Q12 12 8 2 Q12 -10 0 0Z" fill="#e0772e"/><line x1="0" y1="-3" x2="0" y2="5" stroke="#2a1810" stroke-width=".7"/></g>`).join('')}
  `),

  /* ── Like Water for Chocolate · Coahuila — warm magical-realist desert dusk, roses, a flame ── */
  likewater: scene(`
    <defs>
      <linearGradient id="lwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5e1f2a"/><stop offset=".42" stop-color="#a8362e"/>
        <stop offset=".72" stop-color="#d96e36"/><stop offset="1" stop-color="#f0b45a"/></linearGradient>
      <radialGradient id="lwSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0c8"/><stop offset=".5" stop-color="#ffb14d" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffb14d" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lwSky)"/>
    <circle cx="150" cy="200" r="120" fill="url(#lwSun)"/>
    <circle cx="150" cy="206" r="32" fill="#fff0c0" opacity=".9"/>
    ${stars(8, 7)}
    <path d="M0 318 L60 300 L120 318 L180 300 L240 318 L300 302 V450 H0 Z" fill="#5a2a22"/>
    <path d="M0 360 q80 -12 160 2 t140 2 V450 H0 Z" fill="#33160f"/>
    ${[[110, 350], [150, 364], [192, 350]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="6" fill="#c2262e"/><circle r="3" fill="#e2546a"/><path d="M0 6 L0 24" stroke="#2a4a22" stroke-width="2"/><path d="M0 14 q-8 -2 -10 6" stroke="#2a4a22" stroke-width="1.6" fill="none"/></g>`).join('')}
    <g transform="translate(150 300)"><path d="M0 0 Q-8 -16 0 -30 Q8 -16 0 0Z" fill="#ffd36a" opacity=".9"/><path d="M0 -4 Q-4 -14 0 -22 Q4 -14 0 -4Z" fill="#ff7a3c"/></g>
  `),

  /* ── Ficciones · Buenos Aires — deep blue night, an infinite golden labyrinth, a mirror ── */
  ficciones: scene(`
    <defs>
      <linearGradient id="fiSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c1430"/><stop offset=".5" stop-color="#172148"/>
        <stop offset="1" stop-color="#26315e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fiSky)"/>
    ${stars(30, 7)}
    <g transform="translate(150 230)" stroke="#e0bd72" stroke-width="2" fill="none" opacity=".85">
      ${Array.from({ length: 7 }).map((_, i) => { const s = 12 + i * 14; return `<rect x="${-s}" y="${-s}" width="${s * 2}" height="${s * 2}"/>`; }).join('')}
      <line x1="0" y1="0" x2="0" y2="-96"/>
    </g>
    <g transform="translate(150 230)" stroke="#e0bd72" stroke-width="1" opacity=".4">
      ${Array.from({ length: 6 }).map((_, i) => { const s = 12 + i * 14; return `<line x1="${-s}" y1="${s}" x2="${-(s + 14)}" y2="${s + 14}"/>`; }).join('')}
    </g>
    <circle cx="150" cy="230" r="6" fill="#fff3c8"/>
  `),
};
