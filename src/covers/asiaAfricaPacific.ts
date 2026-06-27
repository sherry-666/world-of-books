// Asia, Africa, the Pacific, and a few island & rail settings.
import { scene, stars } from './helpers';

export const ASIA_AFRICA_PACIFIC_COVERS: Record<string, string> = {

  /* ── Robinson Crusoe · Caribbean — turquoise castaway shore, a lone palm, a wreck offshore ── */
  crusoe: scene(`
    <defs>
      <linearGradient id="csSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a8aa6"/><stop offset=".45" stop-color="#7fc0cf"/>
        <stop offset=".75" stop-color="#e8d6a6"/><stop offset="1" stop-color="#d9b46e"/></linearGradient>
      <radialGradient id="csSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0" stop-opacity=".9"/><stop offset="1" stop-color="#fff8e0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#csSky)"/>
    <circle cx="186" cy="150" r="100" fill="url(#csSun)"/>
    <circle cx="186" cy="150" r="28" fill="#fff8e0" opacity=".85"/>
    ${stars(6, 3)}
    <g fill="#2a3a22"><rect x="120" y="300" width="200" height="0"/></g>
    <g stroke="#4a3420" stroke-width="6" fill="none" stroke-linecap="round"><path d="M150 330 q-6 -50 -2 -90"/></g>
    <g fill="#2e6e3a"><path d="M148 244 q-30 -16 -44 -2 q24 -4 44 8Z"/><path d="M148 244 q30 -16 44 -2 q-24 -4 -44 8Z"/><path d="M148 244 q-18 -28 -36 -30 q14 14 36 38Z"/><path d="M148 244 q18 -28 36 -30 q-14 14 -36 38Z"/></g>
    <path d="M0 326 q70 18 150 6 t150 -8 V450 H0 Z" fill="#e0c884"/>
    <path d="M0 320 q70 -16 150 -6 t150 6 V332 H0 Z" fill="#2f7e92"/>
    <g fill="#3a2a1a"><path d="M70 300 l16 -8 4 8 Z"/><rect x="74" y="288" width="2" height="14"/></g>
  `),

  /* ── Murder on the Orient Express · the Balkans — snowbound night, the lit train, a mountain pass ── */
  orientexpress: scene(`
    <defs>
      <linearGradient id="oeSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#141d3a"/><stop offset=".5" stop-color="#26315a"/>
        <stop offset="1" stop-color="#46527a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#oeSky)"/>
    <circle cx="186" cy="120" r="20" fill="#cdd6ec" opacity=".5"/>
    ${stars(14, 7)}
    <path d="M0 280 L70 200 L130 270 L200 190 L300 280 Z" fill="#26304a"/>
    <path d="M70 200 L84 230 L56 230 Z" fill="#dfe6f0"/><path d="M200 190 L216 224 L184 224 Z" fill="#dfe6f0"/>
    <rect x="0" y="300" width="300" height="40" fill="#0f1730"/>
    <g fill="#1a1410">
      <rect x="40" y="296" width="220" height="34" rx="3"/>
      <path d="M30 314 L40 296 L40 330 Z"/>
      <rect x="36" y="284" width="20" height="12"/>
    </g>
    ${Array.from({ length: 9 }).map((_, i) => `<rect x="${60 + i * 20}" y="304" width="12" height="12" rx="1" fill="#ffcf78" opacity=".85"/>`).join('')}
    <circle cx="44" cy="322" r="3" fill="#ffe6a8"/>
    <rect x="0" y="330" width="300" height="120" fill="#e8edf4"/>
    ${Array.from({ length: 50 }).map((_, i) => { const x = (i * 53 + i * i * 7) % 300, y = (i * 71 + i * i * 3) % 330, r = ((i * 13) % 10) / 10 * 1 + 0.5; return `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#eef3fb" opacity="${(0.4 + ((i * 5) % 5) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── And Then There Were None · Devon — stormy slate sea, a lone island manor, crashing waves ── */
  andthentherewerenone: scene(`
    <defs>
      <linearGradient id="atSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3138"/><stop offset=".5" stop-color="#454e54"/>
        <stop offset="1" stop-color="#646a6c"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#atSky)"/>
    ${stars(8, 5)}
    ${[[120, 110, 100, 14], [200, 130, 80, 12]].map(([cx, cy, rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#1f2629" opacity=".5"/>`).join('')}
    <path d="M70 320 Q150 270 230 320 Z" fill="#1a2024"/>
    <g fill="#0e1316">
      <rect x="126" y="270" width="48" height="50"/>
      <path d="M120 270 L150 248 L180 270 Z"/>
      <rect x="158" y="256" width="14" height="14"/>
    </g>
    <rect x="138" y="284" width="10" height="14" fill="#ffcf78" opacity=".55"/>
    <rect x="0" y="320" width="300" height="130" fill="#161c20"/>
    ${[0, 1, 2].map(k => `<path d="M0 ${340 + k * 28} q40 -14 75 0 t75 0 t75 0 t75 0" stroke="#8a9296" stroke-width="${1 - k * 0.2}" fill="none" opacity="${(0.4 - k * 0.1).toFixed(2)}"/>`).join('')}
    <path d="M90 322 q12 -16 26 -4 M180 322 q12 -16 26 -4" stroke="#aeb4b6" stroke-width="2" fill="none" opacity=".5"/>
  `),

  /* ── Empire of the Sun · Shanghai — pale wartime sky over the camp, fighter planes, a distant flash ── */
  empiresun: scene(`
    <defs>
      <linearGradient id="esSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#9aa6b0"/><stop offset=".45" stop-color="#cdc6b2"/>
        <stop offset=".78" stop-color="#e0c890"/><stop offset="1" stop-color="#b59a64"/></linearGradient>
      <radialGradient id="esFlash" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#fff3c8" stop-opacity=".9"/>
        <stop offset="1" stop-color="#fff3c8" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#esSky)"/>
    <circle cx="150" cy="170" r="60" fill="url(#esFlash)"/>
    ${[[112, 110, 1], [188, 140, .8]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#3a3e44"><rect x="-22" y="-2" width="44" height="4"/><rect x="-3" y="-10" width="6" height="20"/><rect x="-16" y="7" width="32" height="3"/></g>`).join('')}
    <g fill="#5a3018"><circle cx="112" cy="110" r="3"/></g>
    <g fill="#2e3236">
      <rect x="0" y="318" width="300" height="132"/>
      ${Array.from({ length: 6 }).map((_, i) => { const x = 18 + i * 46; return `<rect x="${x}" y="296" width="38" height="22"/><path d="M${x} 296 L${x + 19} 286 L${x + 38} 296 Z"/>`; }).join('')}
    </g>
    <g stroke="#1c2024" stroke-width="1.4" opacity=".7">${Array.from({ length: 14 }).map((_, i) => `<line x1="${i * 22}" y1="318" x2="${i * 22}" y2="306"/>`).join('')}<line x1="0" y1="310" x2="300" y2="310"/></g>
  `),

  /* ── The Sheltering Sky · the Sahara — immense indigo-to-amber sky, a lone caravan on the dunes ── */
  shelteringsky: scene(`
    <defs>
      <linearGradient id="ssSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#16245e"/><stop offset=".4" stop-color="#3a4a86"/>
        <stop offset=".72" stop-color="#c2885a"/><stop offset="1" stop-color="#e6b46e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ssSky)"/>
    <circle cx="150" cy="300" r="40" fill="#ffe6a8" opacity=".5"/>
    ${stars(20, 7)}
    <path d="M0 326 q70 -28 150 -8 t150 -4 V450 H0 Z" fill="#c2965a"/>
    <path d="M0 368 q80 -22 160 -2 t140 2 V450 H0 Z" fill="#9a6e3a"/>
    <path d="M0 408 q80 -16 160 2 t140 2 V450 H0 Z" fill="#6e4a26"/>
    ${[[132, 340, 1], [150, 338, 1.1], [168, 342, 1]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#241608"><path d="M-7 0 q-2 -8 2 -10 q1 -5 4 0 q4 2 3 10 l-2 0 q0 -6 -3 -7 q-3 1 -3 7Z"/><circle cx="2" cy="-12" r="2"/><line x1="-5" y1="0" x2="-5" y2="6"/><line x1="5" y1="0" x2="5" y2="6"/></g>`).join('')}
  `),

  /* ── The Alchemist · Giza — golden desert sunset, the pyramids, a shepherd and a falcon ── */
  alchemist: scene(`
    <defs>
      <linearGradient id="alSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d98a4a"/><stop offset=".42" stop-color="#e8a85a"/>
        <stop offset=".72" stop-color="#f0c46e"/><stop offset="1" stop-color="#caa05a"/></linearGradient>
      <radialGradient id="alSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0"/><stop offset=".5" stop-color="#ffe9ae" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffe9ae" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#alSky)"/>
    <circle cx="150" cy="190" r="110" fill="url(#alSun)"/>
    <circle cx="150" cy="190" r="32" fill="#fff8e0" opacity=".9"/>
    ${stars(6, 5)}
    <g fill="#8a5a2e">
      <path d="M96 320 L150 232 L204 320 Z"/>
      <path d="M40 320 L84 256 L128 320 Z"/>
      <path d="M172 320 L216 256 L260 320 Z"/>
    </g>
    <path d="M0 320 q80 -8 160 0 t140 4 V450 H0 Z" fill="#caa05a"/>
    <path d="M0 360 q80 -8 160 2 t140 2 V450 H0 Z" fill="#9a7440"/>
    <g fill="#2e1d10"><circle cx="150" cy="356" r="5"/><path d="M150 361 L144 384 L156 384 Z"/><line x1="150" y1="364" x2="162" y2="352" stroke="#2e1d10" stroke-width="2"/></g>
    <g transform="translate(186 130)" fill="#2e1d10"><path d="M0 0 L-12 -4 L-2 0 L-12 4 Z"/><path d="M0 0 L12 -4 L2 0 L12 4 Z"/><circle cx="0" cy="0" r="2.4"/></g>
  `),

  /* ── Things Fall Apart · Igboland — red-earth dusk over the village, round huts, an iroko tree ── */
  thingsfallapart: scene(`
    <defs>
      <linearGradient id="tfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5e2a2a"/><stop offset=".42" stop-color="#a8523a"/>
        <stop offset=".72" stop-color="#d98a44"/><stop offset="1" stop-color="#e6b25a"/></linearGradient>
      <radialGradient id="tfSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0c8"/><stop offset=".5" stop-color="#ffc878" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffc878" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tfSky)"/>
    <circle cx="150" cy="200" r="110" fill="url(#tfSun)"/>
    <circle cx="150" cy="206" r="30" fill="#fff0c0" opacity=".9"/>
    ${stars(6, 9)}
    <g fill="#241410"><rect x="186" y="180" width="6" height="130"/><path d="M189 180 q-26 -10 -42 6 M189 190 q28 -10 44 4 M189 172 q-18 -16 -34 -14 M189 166 q20 -16 36 -12"/><ellipse cx="170" cy="168" rx="34" ry="20"/><ellipse cx="210" cy="176" rx="30" ry="18"/></g>
    <path d="M0 320 q80 -10 160 0 t140 4 V450 H0 Z" fill="#7a3e26"/>
    <g fill="#3a2014">
      ${[[110, 320], [150, 326], [190, 322]].map(([x, y]) => `<path d="M${(x as number) - 22} ${y} a22 14 0 0 1 44 0 Z"/><path d="M${(x as number) - 26} ${y} L${x} ${(y as number) - 26} L${(x as number) + 26} ${y} Z"/>`).join('')}
    </g>
  `),

  /* ── Shōgun · Osaka — indigo-and-red dusk, a feudal castle keep, Mt Fuji, a banner ── */
  shogun: scene(`
    <defs>
      <linearGradient id="sgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2a52"/><stop offset=".42" stop-color="#6e3a52"/>
        <stop offset=".72" stop-color="#c2603a"/><stop offset="1" stop-color="#e8a85a"/></linearGradient>
      <radialGradient id="sgSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0c8"/><stop offset=".5" stop-color="#ff9a52" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ff9a52" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sgSky)"/>
    <circle cx="150" cy="180" r="80" fill="url(#sgSun)"/>
    <circle cx="150" cy="180" r="30" fill="#ffdca0" opacity=".9"/>
    ${stars(8, 5)}
    <path d="M0 300 L70 250 L110 290 L130 256 L150 290 L170 256 L190 290 L230 250 L300 300 Z" fill="#3a2a44" opacity=".7"/>
    <path d="M104 300 L150 240 L196 300 Z" fill="#2a2236"/><path d="M134 256 L150 244 L166 256 L160 268 L140 268 Z" fill="#efeae0" opacity=".5"/>
    <g fill="#1a1626">
      <rect x="0" y="320" width="300" height="130"/>
      ${[0, 1, 2].map(k => { const w = 70 - k * 16, y = 320 - k * 30; return `<g><rect x="${150 - w / 2}" y="${y - 22}" width="${w}" height="24"/><path d="M${150 - w / 2 - 8} ${y - 22} Q150 ${y - 36} ${150 + w / 2 + 8} ${y - 22} Z"/></g>`; }).join('')}
    </g>
    ${[[126, 308], [150, 304], [174, 308]].map(([x, y]) => `<rect x="${x}" y="${y}" width="4" height="6" fill="#ffcf78" opacity=".7"/>`).join('')}
    <g><line x1="206" y1="320" x2="206" y2="250" stroke="#1a1626" stroke-width="3"/><rect x="206" y="252" width="16" height="40" fill="#c2262e"/><circle cx="214" cy="272" r="5" fill="#1a1626"/></g>
  `),

  /* ── The God of Small Things · Kerala — lush green backwaters, a boat, a red blossom ── */
  smallthings: scene(`
    <defs>
      <linearGradient id="gstSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1d5e4a"/><stop offset=".42" stop-color="#3a8a5e"/>
        <stop offset=".72" stop-color="#c2b45a"/><stop offset="1" stop-color="#7a8a3e"/></linearGradient>
      <radialGradient id="gstSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8d0" stop-opacity=".8"/><stop offset="1" stop-color="#fff8d0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gstSky)"/>
    <circle cx="150" cy="170" r="90" fill="url(#gstSun)"/>
    ${stars(6, 5)}
    <path d="M0 280 q60 -16 120 -6 q40 6 80 -4 q60 -8 100 6 V320 H0 Z" fill="#16402e" opacity=".85"/>
    <g fill="#0e2a1e">${[40, 90, 210, 260].map((x, i) => `<g transform="translate(${x} 300)"><rect x="-2" y="-44" width="4" height="44"/><path d="M0 -44 q-16 -6 -24 6 M0 -40 q16 -6 24 4 M0 -48 q-12 -12 -22 -12 M0 -52 q12 -10 22 -8"/></g>`).join('')}</g>
    <rect x="0" y="300" width="300" height="150" fill="#16463a"/>
    <rect x="0" y="300" width="300" height="150" fill="#bce0c4" opacity=".12"/>
    <g fill="#3a2418"><path d="M118 358 L182 358 L170 370 L130 370 Z"/><path d="M150 358 Q150 346 150 346" /></g>
    <line x1="170" y1="360" x2="196" y2="338" stroke="#3a2418" stroke-width="2"/>
    <circle cx="150" cy="352" r="3" fill="#3a2418"/>
    <g transform="translate(108 326)"><circle r="6" fill="#d6262e"/><circle r="2.6" fill="#ffd36a"/></g>
    <path d="M0 392 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#cfeacd" stroke-width=".7" fill="none" opacity=".3"/>
  `),

  /* ── Cry, the Beloved Country · Natal — golden dawn over the rolling veld, a small church ── */
  crybcountry: scene(`
    <defs>
      <linearGradient id="cbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4a6e"/><stop offset=".4" stop-color="#a8865e"/>
        <stop offset=".7" stop-color="#e8b45a"/><stop offset="1" stop-color="#f3d27a"/></linearGradient>
      <radialGradient id="cbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0"/><stop offset=".5" stop-color="#ffe6a8" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffe6a8" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cbSky)"/>
    <circle cx="150" cy="210" r="110" fill="url(#cbSun)"/>
    <circle cx="150" cy="216" r="28" fill="#fff8e0" opacity=".9"/>
    ${stars(6, 3)}
    <path d="M0 300 q90 -40 180 -12 t120 -6 V340 H0 Z" fill="#a8743e" opacity=".8"/>
    <path d="M0 340 q80 -30 170 -6 t130 0 V450 H0 Z" fill="#6e4a26"/>
    <path d="M0 384 q90 -20 180 2 t120 6 V450 H0 Z" fill="#43301c"/>
    <g fill="#241509">
      <rect x="138" y="312" width="24" height="22"/>
      <path d="M134 312 L150 298 L166 312 Z"/>
      <rect x="148" y="288" width="4" height="12"/><rect x="146" y="290" width="8" height="3"/>
    </g>
  `),

  /* ── Cloudstreet · Perth — warm river dusk, a big rambling house, gum trees, the Swan ── */
  cloudstreet: scene(`
    <defs>
      <linearGradient id="clSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3060"/><stop offset=".42" stop-color="#9c5a6e"/>
        <stop offset=".72" stop-color="#e0925a"/><stop offset="1" stop-color="#f0c06a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#clSky)"/>
    <circle cx="150" cy="200" r="100" fill="#fff3d0" opacity=".4"/>
    ${stars(10, 7)}
    <g fill="#241828"><path d="M70 300 V250 M70 270 L58 256 M70 278 L84 262"/><ellipse cx="70" cy="244" rx="18" ry="14"/></g>
    <g fill="#2a1e2e">
      <rect x="108" y="266" width="84" height="64"/>
      <path d="M100 266 L150 238 L200 266 Z"/>
      <rect x="120" y="252" width="14" height="14"/>
      <rect x="0" y="300" width="300" height="30"/>
    </g>
    ${Array.from({ length: 6 }).map((_, i) => { const x = 116 + (i % 3) * 26, y = 280 + Math.floor(i / 3) * 24; const lit = i === 2; return `<rect x="${x}" y="${y}" width="12" height="16" fill="${lit ? '#ffcf78' : '#1a1220'}" opacity="${lit ? '.85' : '.85'}"/>`; }).join('')}
    <rect x="0" y="330" width="300" height="120" fill="#1a1226"/>
    <rect x="0" y="330" width="300" height="120" fill="#ffcf8e" opacity=".08"/>
    <path d="M0 360 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#ffd9b0" stroke-width=".7" fill="none" opacity=".25"/>
  `),

  /* ── The Thorn Birds · New South Wales — red-ochre outback dusk, a lone thorn tree, a single bird ── */
  thornbirds: scene(`
    <defs>
      <linearGradient id="tbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7a2a2e"/><stop offset=".42" stop-color="#c2552e"/>
        <stop offset=".72" stop-color="#e0903e"/><stop offset="1" stop-color="#f0c46a"/></linearGradient>
      <radialGradient id="tbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3c8"/><stop offset=".5" stop-color="#ffce82" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffce82" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tbSky)"/>
    <circle cx="150" cy="210" r="110" fill="url(#tbSun)"/>
    <circle cx="150" cy="216" r="30" fill="#fff0c0" opacity=".9"/>
    ${stars(6, 5)}
    <path d="M0 330 q80 -10 160 0 t140 4 V450 H0 Z" fill="#8a3e26"/>
    <path d="M0 372 q80 -8 160 2 t140 2 V450 H0 Z" fill="#5a2818"/>
    <g stroke="#1f1009" stroke-width="3.4" fill="none" stroke-linecap="round">
      <path d="M150 332 V230"/>
      <path d="M150 268 q-22 -10 -34 -28 M150 258 q24 -8 34 -30 M150 248 q-16 -16 -20 -34 M150 244 q18 -14 22 -32"/>
    </g>
    <g fill="#1f1009"><path d="M168 150 q8 -6 16 -2 q-6 2 -8 6 q-2 -4 -8 -4Z"/><path d="M168 150 q-8 -6 -16 -2 q6 2 8 6 q2 -4 8 -4Z"/></g>
  `),

  /* ── The Narrow Road to the Deep North · Matsushima — ink-wash dawn, pine islets, a crescent ── */
  narrowroad: scene(`
    <defs>
      <linearGradient id="nwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4660"/><stop offset=".45" stop-color="#7e8aa0"/>
        <stop offset=".78" stop-color="#cbc6c0"/><stop offset="1" stop-color="#e6dcc8"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nwSky)"/>
    <path d="M186 86 A16 16 0 1 0 198 112 A12 12 0 1 1 186 86 Z" fill="#fbf3e0" opacity=".9"/>
    ${stars(8, 3)}
    <ellipse cx="150" cy="300" rx="220" ry="22" fill="#eee6d6" opacity=".4"/>
    <g fill="#2a3140">
      ${[[96, 300, 28, 22], [150, 304, 36, 26], [206, 300, 26, 20]].map(([x, y, rx, ry]) => `<path d="M${(x as number) - (rx as number)} ${y} Q${(x as number) - (rx as number)} ${(y as number) - (ry as number)} ${x} ${(y as number) - (ry as number)} Q${(x as number) + (rx as number)} ${(y as number) - (ry as number)} ${(x as number) + (rx as number)} ${y} Z`).join('')}
    </g>
    <g stroke="#1a2030" stroke-width="1.6" fill="none">${[[96, 278], [150, 278], [206, 280]].map(([x, y]) => `<path d="M${x} ${y} q-8 -16 0 -26 q8 10 0 26"/>`).join('')}</g>
    <rect x="0" y="300" width="300" height="150" fill="#46506a"/>
    <rect x="0" y="300" width="300" height="150" fill="#dfe0d0" opacity=".12"/>
    <path d="M0 348 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#e8e2d2" stroke-width=".7" fill="none" opacity=".4"/>
    <path d="M0 386 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#e8e2d2" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── The Wind-Up Bird Chronicle · Tokyo — deep blue night, suburban roofs, a dry well, the moon ── */
  windupbird: scene(`
    <defs>
      <linearGradient id="wbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1430"/><stop offset=".5" stop-color="#1c2748"/>
        <stop offset="1" stop-color="#33405e"/></linearGradient>
      <radialGradient id="wbMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#f4f6ff"/><stop offset=".5" stop-color="#cdd9f0" stop-opacity=".8"/>
        <stop offset="1" stop-color="#cdd9f0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wbSky)"/>
    <circle cx="186" cy="120" r="80" fill="url(#wbMoon)"/>
    <circle cx="186" cy="120" r="24" fill="#eef3ff" opacity=".95"/>
    ${stars(16, 7)}
    <g fill="#0c1226">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 6 }).map((_, i) => { const x = i * 52; return `<path d="M${x} 300 L${x} 286 L${x + 24} 274 L${x + 48} 286 L${x + 48} 300 Z"/>`; }).join('')}
    </g>
    <rect x="0" y="340" width="300" height="110" fill="#0a0f22"/>
    <g fill="#10182e" stroke="#1c2640" stroke-width="2"><ellipse cx="150" cy="356" rx="22" ry="8"/><path d="M128 356 L130 410 L170 410 L172 356"/></g>
    <ellipse cx="150" cy="356" rx="15" ry="5" fill="#05080f"/>
    <g transform="translate(150 232)" fill="#cdd9f0" opacity=".7"><ellipse cx="0" cy="0" rx="7" ry="5"/><path d="M-5 -3 L-12 -8 L-4 -2 Z"/><path d="M6 -2 L14 -6 L5 0 Z"/><circle cx="-2" cy="-1" r="1.2" fill="#0e1430"/></g>
    <circle cx="120" cy="150" r="2" fill="#9fb4e8"/>
  `),

  /* ── This Earth of Mankind · Surabaya — warm tropical dawn, a colonial veranda, palms ── */
  earthofmankind: scene(`
    <defs>
      <linearGradient id="emSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a3a6a"/><stop offset=".42" stop-color="#c2705e"/>
        <stop offset=".72" stop-color="#e8a85a"/><stop offset="1" stop-color="#f3cf7a"/></linearGradient>
      <radialGradient id="emSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0"/><stop offset=".5" stop-color="#ffe0a0" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffe0a0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#emSky)"/>
    <circle cx="150" cy="200" r="110" fill="url(#emSun)"/>
    <circle cx="150" cy="206" r="30" fill="#fff8e0" opacity=".9"/>
    ${stars(6, 5)}
    <g fill="#241824">${[44, 256].map(x => `<g transform="translate(${x} 300)"><path d="M0 0 V-50" stroke="#241824" stroke-width="5"/><path d="M0 -50 q-22 -8 -34 6 M0 -50 q22 -8 34 6 M0 -56 q-16 -16 -30 -16 M0 -56 q16 -16 30 -16"/></g>`).join('')}</g>
    <g fill="#2a1c26">
      <rect x="0" y="320" width="300" height="130"/>
      <rect x="104" y="288" width="92" height="32"/>
      <path d="M94 288 L150 262 L206 288 Z"/>
      ${[112, 134, 166, 188].map(x => `<rect x="${x}" y="296" width="6" height="24" fill="#1a1018"/>`).join('')}
    </g>
    <rect x="140" y="300" width="20" height="20" fill="#ffcf78" opacity=".5"/>
  `),

  /* ── The Lover · Saigon — warm hazy river dusk, the Mekong ferry, a girl's hat ── */
  thelover: scene(`
    <defs>
      <linearGradient id="loSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c2855a"/><stop offset=".42" stop-color="#d99a6a"/>
        <stop offset=".72" stop-color="#c2745e"/><stop offset="1" stop-color="#7a4a44"/></linearGradient>
      <radialGradient id="loSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0d6" stop-opacity=".85"/><stop offset="1" stop-color="#fff0d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#loSky)"/>
    <circle cx="150" cy="200" r="110" fill="url(#loSun)"/>
    <circle cx="150" cy="206" r="28" fill="#fff3e0" opacity=".8"/>
    ${stars(6, 9)}
    <path d="M0 270 q70 -10 150 -2 t150 4 V300 H0 Z" fill="#5a4636" opacity=".6"/>
    <g fill="#2a2018">
      <path d="M96 300 L204 300 L196 314 L104 314 Z"/>
      <rect x="120" y="278" width="60" height="22"/>
      <path d="M116 278 L150 266 L184 278 Z"/>
    </g>
    <rect x="0" y="314" width="300" height="136" fill="#3a2620"/>
    <rect x="0" y="314" width="300" height="136" fill="url(#loSun)" opacity=".18"/>
    <rect x="140" y="314" width="20" height="120" fill="#ffe0b0" opacity=".22"/>
    <g transform="translate(150 250)" fill="#2a1c14"><ellipse cx="0" cy="2" rx="16" ry="4"/><path d="M-9 2 Q-9 -10 0 -10 Q9 -10 9 2 Z"/></g>
    <path d="M0 360 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#ffe0b0" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 396 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#ffe0b0" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── The Sympathizer · Saigon — the smoky red fall of Saigon, helicopters over the city, palms ── */
  sympathizer: scene(`
    <defs>
      <linearGradient id="sySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a1620"/><stop offset=".42" stop-color="#7a2a22"/>
        <stop offset=".72" stop-color="#c2552a"/><stop offset="1" stop-color="#e0903e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sySky)"/>
    <circle cx="150" cy="220" r="120" fill="#ff8a3c" opacity=".25"/>
    ${stars(10, 7)}
    ${[[120, 110, 1], [196, 140, .8]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#160d0e"><ellipse cx="0" cy="0" rx="12" ry="3"/><rect x="-2" y="0" width="4" height="10"/><rect x="-14" y="-12" width="28" height="2.4"/><line x1="0" y1="-1" x2="0" y2="-12" stroke="#160d0e" stroke-width="2"/></g>`).join('')}
    <g fill="#1c0f10">
      <rect x="0" y="316" width="300" height="134"/>
      ${Array.from({ length: 10 }).map((_, i) => { const x = i * 31, h = 28 + ((i * 53) % 56); return `<rect x="${x}" y="${316 - h}" width="26" height="${h}"/>`; }).join('')}
    </g>
    <g fill="#1c0f10">${[40, 256].map(x => `<g transform="translate(${x} 316)"><path d="M0 0 V-40" stroke="#1c0f10" stroke-width="5"/><path d="M0 -40 q-18 -8 -28 4 M0 -40 q18 -8 28 4 M0 -46 q-12 -12 -24 -12 M0 -46 q12 -12 24 -12"/></g>`).join('')}</g>
    ${[[150, 270], [120, 300]].map(([x, y]) => `<path d="M${x} ${y} q-3 -12 0 -22 q3 10 0 22Z" fill="#ffae4d" opacity=".6"/>`).join('')}
  `),

  /* ── The Poisonwood Bible · Congo — crimson jungle dusk, a mission hut, dense green, a parrot ── */
  poisonwood: scene(`
    <defs>
      <linearGradient id="pwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6e2424"/><stop offset=".4" stop-color="#b04a2e"/>
        <stop offset=".7" stop-color="#d98a3e"/><stop offset="1" stop-color="#3a5a2e"/></linearGradient>
      <radialGradient id="pwSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0c8"/><stop offset=".5" stop-color="#ffb14d" stop-opacity=".8"/>
        <stop offset="1" stop-color="#ffb14d" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pwSky)"/>
    <circle cx="150" cy="180" r="90" fill="url(#pwSun)"/>
    <circle cx="150" cy="184" r="26" fill="#fff0c0" opacity=".85"/>
    ${stars(6, 5)}
    <path d="M0 300 q60 -30 120 -10 q40 12 80 -6 q60 -14 100 8 V340 H0 Z" fill="#16361f" opacity=".9"/>
    <g fill="#0e2614">${[36, 80, 220, 264].map(x => `<g transform="translate(${x} 320)"><path d="M0 0 V-50" stroke="#0e2614" stroke-width="5"/><path d="M0 -50 q-24 -6 -34 8 M0 -50 q24 -6 34 8 M0 -56 q-16 -18 -30 -18 M0 -56 q16 -18 30 -18"/></g>`).join('')}</g>
    <g fill="#241409">
      <rect x="116" y="296" width="68" height="24"/>
      <path d="M108 296 L150 270 L192 296 Z"/>
      <line x1="150" y1="270" x2="150" y2="258" stroke="#241409" stroke-width="2"/><path d="M150 258 L160 264 L150 268 Z"/>
    </g>
    <rect x="0" y="320" width="300" height="130" fill="#13301c"/>
    <g transform="translate(196 150)"><ellipse cx="0" cy="0" rx="6" ry="9" fill="#c2262e"/><path d="M-5 -4 L-12 -8 L-3 -3 Z" fill="#3a6ea8"/><circle cx="2" cy="-4" r="1.6" fill="#ffd36a"/></g>
  `),

  /* ── The Garden of Evening Mists · Cameron Highlands, Malaysia — tea terraces, mist, a Japanese garden ── */
  gardenevening: scene(`
    <defs>
      <linearGradient id="geSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3838"/><stop offset=".4" stop-color="#4a6858"/>
        <stop offset=".7" stop-color="#788878"/><stop offset="1" stop-color="#a0b098"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#geSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#e8f0e8" opacity=".14"/>
    ${stars(5, 79)}
    <path d="M0 302 Q150 288 300 300 L300 450 L0 450 Z" fill="#3a5840"/>
    <path d="M0 342 Q150 330 300 340 L300 450 L0 450 Z" fill="#304a38"/>
    <path d="M0 386 Q150 376 300 384 L300 450 L0 450 Z" fill="#263c30"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${78+i*20} ${310+i%2*12} Q${88+i*20} ${294+i%2*8} ${98+i*20} ${310+i%2*12}" stroke="#4a7850" stroke-width="2.4" fill="none" opacity=".65"/>`).join('')}
    <rect x="126" y="0" width="48" height="300" fill="#e8f0e8" opacity=".18"/>
    <g fill="#1e2c20">
      <rect x="140" y="180" width="20" height="122"/>
      <path d="M122 192 Q150 166 178 192 Z"/>
      <path d="M128 210 Q150 188 172 210 Z"/>
      <path d="M132 228 Q150 210 168 228 Z"/>
    </g>
    <g fill="#1e2c20" opacity=".75">
      <rect x="98" y="220" width="14" height="82"/>
      <path d="M88 230 Q105 218 122 230 Z"/>
      <path d="M92 246 Q105 236 118 246 Z"/>
      <rect x="182" y="228" width="14" height="74"/>
      <path d="M174 238 Q189 226 204 238 Z"/>
    </g>
    <path d="M0 302 Q150 294 300 300" stroke="#c8d8c0" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── Maximum City: Bombay Lost and Found · Mumbai — towers, monsoon sky, Dharavi ── */
  maximumcity: scene(`
    <defs>
      <linearGradient id="mcitySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2038"/><stop offset=".36" stop-color="#3a4868"/>
        <stop offset=".65" stop-color="#8a7058"/><stop offset="1" stop-color="#c09858"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mcitySky)"/>
    ${stars(12, 83)}
    <g fill="#1a1c28">
      <rect x="0" y="136" width="28" height="314"/>
      <rect x="32" y="168" width="22" height="282"/>
      <rect x="58" y="148" width="30" height="302"/>
      <rect x="92" y="200" width="18" height="250"/>
      <rect x="114" y="164" width="26" height="286"/>
      <rect x="144" y="138" width="32" height="312"/>
      <rect x="180" y="172" width="24" height="278"/>
      <rect x="208" y="152" width="30" height="298"/>
      <rect x="242" y="188" width="22" height="262"/>
      <rect x="268" y="144" width="32" height="306"/>
    </g>
    ${Array.from({length:20}).map((_,i)=>{const x=(i*53+17)%300, y=160+(i*37)%200; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#ffc848" opacity="${0.2+((i*7)%4)/10}"/>`;}).join('')}
    <path d="M0 372 Q150 362 300 370 L300 450 L0 450 Z" fill="#2a3040" opacity=".8"/>
    <path d="M0 406 Q75 398 150 404 T300 402 L300 450 L0 450 Z" fill="#1e2438" opacity=".9"/>
    <path d="M0 438 Q150 432 300 436 L300 450 L0 450 Z" fill="#182030"/>
    <path d="M0 372 Q150 364 300 370" stroke="#c09858" stroke-width=".6" fill="none" opacity=".25"/>
  `),

  /* ── A Fine Balance · Bombay — four lives, a tailor's shop, ruin and resilience ── */
  finebalance: scene(`
    <defs>
      <linearGradient id="fbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4058"/><stop offset=".38" stop-color="#6a6870"/>
        <stop offset=".68" stop-color="#b09070"/><stop offset="1" stop-color="#d0b070"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fbSky)"/>
    ${stars(8, 89)}
    <path d="M0 308 Q150 296 300 306 L300 450 L0 450 Z" fill="#2a2018"/>
    <path d="M0 360 Q150 350 300 358 L300 450 L0 450 Z" fill="#201808"/>
    <g fill="#1e1810">
      <rect x="0" y="228" width="66" height="80"/>
      <rect x="234" y="218" width="66" height="90"/>
      <rect x="84" y="246" width="48" height="62"/>
      <rect x="170" y="238" width="48" height="70"/>
    </g>
    <rect x="108" y="198" width="84" height="116" fill="#2a2018"/>
    <rect x="114" y="204" width="72" height="104" fill="#382c18"/>
    <rect x="118" y="208" width="28" height="44" fill="#e0a040" opacity=".2"/>
    <rect x="154" y="208" width="28" height="44" fill="#e0a040" opacity=".15"/>
    <rect x="118" y="258" width="28" height="44" fill="#e0a040" opacity=".12"/>
    <path d="M0 308 Q150 300 300 306" stroke="#d0b070" stroke-width=".6" fill="none" opacity=".28"/>
    ${Array.from({length:4}).map((_,i)=>{const x=108+i*22, y=278; return `<g fill="#1a1408"><rect x="${x}" y="${y}" width="5" height="18" rx="1"/><circle cx="${x+2}" cy="${y-3}" r="4"/></g>`;}).join('')}
  `),

  /* ── Disgrace · Eastern Cape — a professor's fall, a farm, the new South Africa ── */
  disgrace: scene(`
    <defs>
      <linearGradient id="disSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a3828"/><stop offset=".36" stop-color="#7a5a38"/>
        <stop offset=".68" stop-color="#b08840"/><stop offset="1" stop-color="#d0a848"/>
      </linearGradient>
      <radialGradient id="disSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe890" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe890" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#disSky)"/>
    <circle cx="62" cy="164" r="58" fill="url(#disSun)"/>
    <circle cx="62" cy="164" r="18" fill="#ffe890" opacity=".8"/>
    ${stars(6, 91)}
    <path d="M0 308 Q150 296 300 306 L300 450 L0 450 Z" fill="#6a5030"/>
    <path d="M0 358 Q150 346 300 354 L300 450 L0 450 Z" fill="#4a3820"/>
    <path d="M0 406 Q150 396 300 404 L300 450 L0 450 Z" fill="#382a14"/>
    <g fill="#2e2210">
      <rect x="104" y="228" width="92" height="82"/>
      <path d="M96 232 L150 202 L204 232 Z"/>
      <rect x="120" y="270" width="60" height="40"/>
    </g>
    <rect x="128" y="244" width="44" height="30" fill="#3e2e18" rx="1"/>
    <rect x="136" y="250" width="28" height="24" fill="#e8a838" opacity=".2"/>
    ${[-24,-8,8,24].map(dx=>`<g fill="#382a10"><rect x="${150+dx}" y="248" width="4" height="14" rx="1"/></g>`).join('')}
    <path d="M96 312 Q150 302 204 310" stroke="#a08030" stroke-width=".8" fill="none" opacity=".4"/>
    <g fill="#1a1208">
      <circle cx="150" cy="296" r="5"/>
      <rect x="147" y="301" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── Pachinko · Japan/Korea — a pachinko parlor neon glow, Osaka at night, three generations ── */
  pachinko: scene(`
    <defs>
      <linearGradient id="pkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080610"/><stop offset=".5" stop-color="#12101e"/>
        <stop offset="1" stop-color="#1e1a2c"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pkSky)"/>
    ${stars(10, 97)}
    <g fill="#141220">
      <rect x="0" y="186" width="62" height="264"/>
      <rect x="238" y="172" width="62" height="278"/>
      <rect x="70" y="210" width="44" height="240"/>
      <rect x="186" y="200" width="44" height="250"/>
    </g>
    ${[[4,204],[4,234],[4,264],[4,294],[244,192],[244,222],[244,252],[244,282]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="18" fill="#ff3080" opacity=".55"/>`).join('')}
    ${[[76,226],[76,256],[76,286],[192,216],[192,246]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#3080ff" opacity=".45"/>`).join('')}
    <rect x="94" y="156" width="112" height="60" fill="#1e1a2c"/>
    <rect x="96" y="158" width="108" height="56" fill="#241e30"/>
    <rect x="100" y="162" width="100" height="48" fill="#ff3080" opacity=".12"/>
    <circle cx="150" cy="188" r="44" fill="#ff3080" opacity=".08"/>
    ${Array.from({length:6}).map((_,i)=>`<rect x="${100+i*18}" y="168" width="14" height="42" rx="1" fill="#ff3080" opacity="${0.06+i%2*0.04}"/>`).join('')}
    <rect x="0" y="394" width="300" height="56" fill="#0c0a14"/>
    <path d="M0 394 Q150 388 300 392" stroke="#ff3080" stroke-width=".5" fill="none" opacity=".3"/>
  `),

  /* ── Cutting for Stone · Addis Ababa/New York — a surgeon's hands, an Ethiopian hospital ── */
  cuttingstone: scene(`
    <defs>
      <linearGradient id="csSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2838"/><stop offset=".36" stop-color="#3a5058"/>
        <stop offset=".68" stop-color="#7a8870"/><stop offset="1" stop-color="#a0a870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#csSky)"/>
    ${stars(8, 101)}
    <path d="M0 312 Q150 300 300 310 L300 450 L0 450 Z" fill="#4a5828"/>
    <path d="M0 362 Q150 352 300 360 L300 450 L0 450 Z" fill="#3a4820"/>
    <g fill="#1e2818">
      <rect x="86" y="216" width="128" height="100"/>
      <path d="M78 220 L150 188 L222 220 Z"/>
      <rect x="102" y="188" width="96" height="32"/>
      <path d="M96 192 L150 164 L204 192 Z"/>
      <rect x="122" y="164" width="56" height="28"/>
    </g>
    ${[[92,230],[108,230],[92,260],[108,260],[178,228],[192,228],[178,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd060" opacity=".38"/>`).join('')}
    <rect x="126" y="282" width="48" height="8" rx="1" fill="#c8d0a8" opacity=".4"/>
    <path d="M0 312 Q150 304 300 310" stroke="#a0a870" stroke-width=".6" fill="none" opacity=".28"/>
    <g fill="#1a2018">
      <rect x="142" y="290" width="16" height="6" rx="1"/>
      <rect x="146" y="296" width="8" height="22" rx="1"/>
      <ellipse cx="150" cy="318" rx="10" ry="4" opacity=".6"/>
    </g>
    <path d="M142 290 Q136 282 130 276 Q122 270 122 262" stroke="#c0a0a0" stroke-width="1.5" fill="none" opacity=".4"/>
    <path d="M158 290 Q164 282 170 276 Q178 270 178 262" stroke="#c0a0a0" stroke-width="1.5" fill="none" opacity=".4"/>
  `),

  /* ── Woman at Point Zero · Cairo — a woman in prison, bars of light, revolutionary dignity ── */
  womanpointzero: scene(`
    <defs>
      <linearGradient id="wpzSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".5" stop-color="#1e1c28"/>
        <stop offset="1" stop-color="#2e2a38"/>
      </linearGradient>
      <radialGradient id="wpzG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8c060" stop-opacity=".4"/>
        <stop offset="1" stop-color="#e8c060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wpzSky)"/>
    ${stars(8, 103)}
    <circle cx="150" cy="200" r="90" fill="url(#wpzG)"/>
    ${Array.from({length:10}).map((_,i)=>`<rect x="${90+i*14}" y="100" width="4" height="250" fill="#e8c060" opacity="${0.12+i%2*0.06}"/>`).join('')}
    <rect x="0" y="340" width="300" height="110" fill="#0e1018"/>
    <rect x="88" y="98" width="124" height="254" fill="#0e1018" opacity=".55"/>
    <g fill="#1e1c28">
      <rect x="0" y="340" width="300" height="4"/>
      <rect x="0" y="360" width="300" height="3"/>
      <rect x="0" y="380" width="300" height="2.5"/>
    </g>
    <g fill="#0c0a14">
      <rect x="136" y="196" width="28" height="48" rx="2"/>
      <circle cx="150" cy="190" r="16"/>
      <path d="M128 232 L136 214 L164 214 L172 232 L164 264 L136 264 Z"/>
    </g>
    <rect x="0" y="338" width="300" height="6" fill="#e8c060" opacity=".15"/>
  `),

  /* ── Picnic at Hanging Rock · Victoria, Australia — the red rock, girls in white, midsummer ── */
  picnic: scene(`
    <defs>
      <linearGradient id="prSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a6880"/><stop offset=".38" stop-color="#8a9498"/>
        <stop offset=".68" stop-color="#b8a890"/><stop offset="1" stop-color="#d0b878"/>
      </linearGradient>
      <radialGradient id="prSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0" stop-opacity=".72"/>
        <stop offset="1" stop-color="#fff8e0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#prSky)"/>
    <circle cx="150" cy="148" r="72" fill="url(#prSun)"/>
    <circle cx="150" cy="148" r="20" fill="#fff8e0" opacity=".85"/>
    ${stars(5, 107)}
    <g fill="#7a4830">
      <path d="M86 400 Q86 340 100 296 Q112 264 120 248 Q130 236 144 224 Q150 218 156 224 Q170 236 180 248 Q188 264 200 296 Q214 340 214 400 Z"/>
      <path d="M100 400 Q94 358 96 316 Q98 292 108 272 Q116 256 126 244 L150 224 L174 244 Q184 256 192 272 Q202 292 204 316 Q206 358 200 400 Z"/>
    </g>
    <path d="M0 390 Q150 378 300 388 L300 450 L0 450 Z" fill="#4a6030"/>
    <path d="M0 430 Q150 422 300 428 L300 450 L0 450 Z" fill="#3a5028"/>
    ${Array.from({length:4}).map((_,i)=>`<g fill="#f0f0e8"><circle cx="${108+i*28}" cy="${304+i%2*14}" r="6"/><rect x="${104+i*28}" y="${310+i%2*14}" width="8" height="20" rx="1"/></g>`).join('')}
    <path d="M80 402 Q150 390 220 400" stroke="#8a6840" stroke-width=".7" fill="none" opacity=".4"/>
  `),

  /* ── The Emissary · Japan (near future) — a glowing child, ancient trees, post-catastrophe serenity ── */
  emissary: scene(`
    <defs>
      <linearGradient id="emSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".4" stop-color="#2a2838"/>
        <stop offset=".72" stop-color="#4a4858"/><stop offset="1" stop-color="#6a6878"/>
      </linearGradient>
      <radialGradient id="emG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e0f0e0" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e0f0e0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#emSky)"/>
    ${stars(14, 109)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#1e2818"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#162014"/>
    <g fill="#0e1a10">
      ${[-60,-30,0,30,60].map(dx=>`<rect x="${150+dx}" y="${188}" width="6" height="130"/><path d="M${153+dx} 188 Q${166+dx} 208 ${153+dx} 228 Q${140+dx} 248 ${153+dx} 268 Q${166+dx} 288 ${153+dx} 318" stroke="#0e1a10" stroke-width="16" fill="none"/>`).join('')}
    </g>
    <circle cx="150" cy="256" r="58" fill="url(#emG)"/>
    <g fill="#1a2818">
      <circle cx="150" cy="282" r="8"/>
      <rect x="146" y="290" width="7" height="28" rx="1"/>
      <path d="M138 306 L146 294 L154 294 L162 306 L158 320 L142 320 Z"/>
    </g>
    <circle cx="150" cy="282" r="20" fill="#e0f0e0" opacity=".2"/>
    <path d="M0 318 Q150 310 300 316" stroke="#4a6040" stroke-width=".6" fill="none" opacity=".35"/>
  `),

  /* ── Midnight's Children · Bombay — Gateway of India at monsoon, a crowd of a thousand children ── */
  midnightschild: scene(`
    <defs>
      <linearGradient id="mchdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#101828"/><stop offset=".36" stop-color="#1c2c44"/>
        <stop offset=".64" stop-color="#284060"/><stop offset=".88" stop-color="#385870"/>
        <stop offset="1" stop-color="#507888"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mchdSky)"/>
    ${stars(8, 341)}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#1a2830" opacity=".9"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#2a3c4c"/>
    <path d="M0 416 Q150 408 300 414 L300 450 L0 450 Z" fill="#1a2c3c"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${30+i*48} ${322+i%2*12} Q${44+i*48} ${310+i%2*10} ${58+i*48} ${322+i%2*12}" stroke="#2a4050" stroke-width=".8" fill="none" opacity=".55"/>`).join('')}
    <g fill="#141c28">
      <rect x="96" y="178" width="108" height="140"/>
      <path d="M88 186 L150 156 L212 186 Z"/>
      <rect x="118" y="156" width="64" height="32"/>
      <path d="M112 162 L150 138 L188 162 Z"/>
      <rect x="130" y="138" width="40" height="26"/>
      <path d="M122 192 L178 192 L178 204 Q150 214 122 204 Z"/>
      <path d="M108 204 L108 218 L192 218 L192 204 Z"/>
      ${[100,118,136,154,172,190].map(x => `<path d="M${x} ${178} L${x} ${156} Q${x+9} ${148} ${x+9} ${156} L${x+9} ${178} Z" fill="#1c2838"/>`).join('')}
    </g>
    ${Array.from({length:10}).map((_,i)=>`<rect x="${98+i*11}" y="${240}" width="7" height="14" fill="#e8c050" opacity="${0.12+i%3*0.06}"/>`).join('')}
    <g fill="#0e1820">
      <circle cx="140" cy="308" r="5"/>
      <circle cx="155" cy="310" r="4.5"/>
      <circle cx="168" cy="308" r="5"/>
    </g>
  `),

  /* ── The History of Bhutan · Thimphu — Tiger's Nest monastery, Himalayan peaks, prayer flags ── */
  histbhutan: scene(`
    <defs>
      <linearGradient id="hbtSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060c18"/><stop offset=".36" stop-color="#102040"/>
        <stop offset=".64" stop-color="#2050a0"/><stop offset=".88" stop-color="#4880c0"/>
        <stop offset="1" stop-color="#70a8d8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hbtSky)"/>
    ${stars(10, 385)}
    <path d="M0 282 Q50 240 90 256 Q120 268 150 246 Q180 224 210 246 Q250 268 300 240 L300 450 L0 450 Z" fill="#8090a0" opacity=".7"/>
    <path d="M0 336 Q150 324 300 334 L300 450 L0 450 Z" fill="#606870"/>
    <path d="M0 388 Q150 378 300 386 L300 450 L0 450 Z" fill="#485058"/>
    <g fill="#d4c090">
      <rect x="108" y="198" width="84" height="88"/>
      <path d="M100 202 L150 170 L200 202 Z"/>
      <rect x="126" y="170" width="48" height="34"/>
      <path d="M120 176 L150 150 L180 176 Z"/>
      <rect x="138" y="150" width="24" height="28"/>
      <rect x="142" y="138" width="16" height="14"/>
    </g>
    <rect x="108" y="198" width="84" height="14" fill="#c04020" opacity=".6"/>
    <rect x="100" y="202" width="100" height="6" fill="#c04020" opacity=".4"/>
    ${[[112,220],[128,220],[154,220],[170,220],[112,252],[128,252],[154,252],[170,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#f8f0d0" opacity="${y<240?'.45':'.3'}"/>`).join('')}
    ${Array.from({length:7}).map((_,i)=>`<path d="M${60+i*28} ${260} Q${66+i*28} ${230} ${72+i*28} ${210}" stroke="${['#e03020','#e8c020','#2080e0','#28a030','#e8e8e8'][i%5]}" stroke-width="1.5" fill="none" opacity=".6"/>`).join('')}
    <path d="M0 282 Q150 276 300 280" stroke="#70a8d8" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#0c0e14">
      <circle cx="150" cy="274" r="5.5"/>
      <rect x="147" y="279" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── A Passage to India · Chandrapore — Marabar Caves, a colonial sun, the Ganges plain ── */
  passagetoindia: scene(`
    <defs>
      <linearGradient id="ptiSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0e18"/><stop offset=".36" stop-color="#183060"/>
        <stop offset=".68" stop-color="#3870b0"/><stop offset="1" stop-color="#60a0c0"/>
      </linearGradient>
      <radialGradient id="ptiSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe060" stop-opacity=".9"/>
        <stop offset="1" stop-color="#ffe060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ptiSky)"/>
    ${stars(7, 361)}
    <circle cx="150" cy="232" r="100" fill="url(#ptiSun)"/>
    <circle cx="150" cy="232" r="26" fill="#ffe878" opacity=".9"/>
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#3a5028"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#2e4020"/>
    <path d="M0 416 Q150 408 300 414 L300 450 L0 450 Z" fill="#243218"/>
    <g fill="#181808" opacity=".85">
      ${[72,108,192,228].map((x,i)=>`<path d="M${x} ${318} L${x} ${210+i%2*20} Q${x+18} ${190+i%2*18} ${x+36} ${210+i%2*20} L${x+36} ${318} Z"/>`).join('')}
      ${[72,108,192,228].map((x,i)=>`<path d="M${x+10} ${210+i%2*20} Q${x+18} ${186+i%2*16} ${x+26} ${210+i%2*20} Z"/>`).join('')}
    </g>
    <path d="M0 318 Q150 312 300 316" stroke="#60a0c0" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#100e08">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── The White Tiger · Delhi — a Delhi night skyline, an autorickshaw, neon lights ── */
  whitetiger: scene(`
    <defs>
      <linearGradient id="wtgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080810"/><stop offset=".4" stop-color="#10101c"/>
        <stop offset=".72" stop-color="#181820"/><stop offset="1" stop-color="#242428"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wtgSky)"/>
    ${stars(9, 363)}
    <path d="M0 292 Q150 280 300 290 L300 450 L0 450 Z" fill="#181010"/>
    <path d="M0 344 Q150 334 300 342 L300 450 L0 450 Z" fill="#120c0c"/>
    <path d="M0 396 Q150 388 300 394 L300 450 L0 450 Z" fill="#0e0808"/>
    <g fill="#0e0c14">
      ${[30,76,122,168,214,260].map((x,i)=>`<rect x="${x}" y="${160+i%3*22}" width="36" height="${136-i%3*22}"/>`).join('')}
    </g>
    ${Array.from({length:24}).map((_,i)=>{const x=(i*52+4)%298,y=168+(i*37)%120; return `<rect x="${x}" y="${y}" width="8" height="12" fill="${i%3===0?'#e03030':i%3===1?'#30a0e0':'#e0a030'}" opacity="${0.12+(i%4)*0.05}"/>`;}).join('')}
    <path d="M0 292 Q150 286 300 290" stroke="#303040" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#0c0808">
      <path d="M100 278 L100 268 Q120 252 180 252 Q200 252 200 268 L200 278 Z"/>
      <ellipse cx="150" cy="278" rx="52" ry="10"/>
      <rect x="108" y="262" width="84" height="18" rx="4"/>
      <ellipse cx="120" cy="288" rx="10" ry="10" fill="none" stroke="#0c0808" stroke-width="6"/>
      <ellipse cx="180" cy="288" rx="10" ry="10" fill="none" stroke="#0c0808" stroke-width="6"/>
    </g>
    <rect x="108" y="262" width="84" height="8" fill="#e03030" opacity=".25"/>
    <g fill="#060606">
      <circle cx="150" cy="288" r="5.5"/>
      <rect x="147" y="293" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Kite Runner · Kabul — Hindu Kush mountains, a kite against a winter sky ── */
  kiterunner: scene(`
    <defs>
      <linearGradient id="ktrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6090c0"/><stop offset=".42" stop-color="#80b0d8"/>
        <stop offset=".72" stop-color="#a8c8e0"/><stop offset="1" stop-color="#c8e0f0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ktrSky)"/>
    ${stars(4, 365)}
    <path d="M0 290 Q60 254 100 264 Q130 272 150 248 Q170 228 200 244 Q240 264 300 244 L300 450 L0 450 Z" fill="#606858"/>
    <path d="M0 340 Q80 320 150 334 T300 318 L300 450 L0 450 Z" fill="#4c5444"/>
    <path d="M0 390 Q80 374 150 384 T300 370 L300 450 L0 450 Z" fill="#383e30"/>
    <path d="M0 290 Q150 282 300 286" stroke="#c8d8e8" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#505840" opacity=".7">
      ${Array.from({length:6}).map((_,i)=>`<path d="M${40+i*40} ${290+i%2*14} Q${52+i*40} ${262+i%2*12} ${56+i*40} ${250+i%2*10} Q${60+i*40} ${238+i%2*8} ${64+i*40} ${240+i%2*6}" stroke="#505840" stroke-width="5" fill="none" opacity=".6"/>`).join('')}
    </g>
    <g transform="translate(186,148) rotate(-18)">
      <path d="M0 -24 L16 0 L0 24 L-16 0 Z" fill="#e03020" opacity=".88"/>
      <path d="M0 -24 L16 0 L0 0 Z" fill="#c02818" opacity=".7"/>
    </g>
    <path d="M186 172 Q200 210 210 248 Q218 278 212 290" stroke="#c8a070" stroke-width=".8" fill="none" opacity=".6"/>
    <g fill="#181c10">
      <circle cx="150" cy="280" r="5.5"/>
      <rect x="147" y="285" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── Heart of Darkness · Congo River — a steamboat in dense jungle, a river winding into mist ── */
  heartdarkness: scene(`
    <defs>
      <linearGradient id="hdkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#141010"/><stop offset=".36" stop-color="#1e1808"/>
        <stop offset=".68" stop-color="#302808"/><stop offset="1" stop-color="#504010"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hdkSky)"/>
    ${stars(5, 343)}
    <path d="M0 274 Q150 262 300 272 L300 450 L0 450 Z" fill="#1c2808"/>
    <path d="M0 324 Q150 314 300 322 L300 450 L0 450 Z" fill="#182008"/>
    <path d="M0 374 Q150 366 300 372 L300 450 L0 450 Z" fill="#141808"/>
    <g fill="#0e1808" opacity=".9">
      ${Array.from({length:14}).map((_,i)=>{const x=(i*47+4)%300; const y=120+i%3*30; return `<path d="M${x} ${y} Q${x+10} ${y-24} ${x+20} ${y-10} Q${x+30} ${y-28} ${x+40} ${y} L${x+40} ${280} L${x} ${280} Z"/>`;}).join('')}
    </g>
    <path d="M0 274 Q150 268 300 272" stroke="#504010" stroke-width=".5" fill="none" opacity=".4"/>
    ${Array.from({length:4}).map((_,i)=>`<path d="M${60+i*44} ${282+i%2*8} Q${74+i*44} ${270+i%2*6} ${88+i*44} ${282+i%2*8}" stroke="#302000" stroke-width=".7" fill="none" opacity=".55"/>`).join('')}
    <g fill="#0c1008">
      <path d="M110 246 L110 280 L190 280 L190 246 Z"/>
      <rect x="98" y="256" width="16" height="24"/>
      <rect x="186" y="258" width="16" height="22"/>
      <rect x="120" y="228" width="60" height="18"/>
      <rect x="144" y="200" width="12" height="28"/>
      <circle cx="150" cy="196" r="8"/>
    </g>
    ${Array.from({length:3}).map((_,i)=>`<path d="M${148+i*6} ${200} Q${150+i*6} ${178} ${146+i*6} ${162}" stroke="#201808" stroke-width="${2.5-i*0.5}" fill="none" opacity=".5"/>`).join('')}
    <rect x="0" y="262" width="300" height="18" fill="#384808" opacity=".22"/>
  `),

  /* ── Palace Walk · Cairo — minarets at dusk, a Khan el-Khalili alley, warm golden light ── */
  palacewalk: scene(`
    <defs>
      <linearGradient id="pwkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181008"/><stop offset=".38" stop-color="#301808"/>
        <stop offset=".68" stop-color="#603020"/><stop offset=".88" stop-color="#b07030"/>
        <stop offset="1" stop-color="#d09050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pwkSky)"/>
    ${stars(8, 367)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#201408"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#180e08"/>
    <g fill="#0e0c08">
      <rect x="82" y="152" width="136" height="170"/>
      <path d="M74 156 L150 116 L226 156 Z"/>
      ${[86,108,130,152,174,196].map(x=>`<rect x="${x}" y="${156}" width="16" height="24" rx="1" fill="#1a1208" opacity=".5"/>`).join('')}
    </g>
    <g fill="#2a1c08">
      <rect x="56" y="188" width="30" height="134"/>
      <path d="M50 192 L71 168 L92 192 Z"/>
      <rect x="63" y="168" width="16" height="26"/>
      <rect x="67" y="156" width="8" height="14"/>
      <rect x="69" y="144" width="4" height="14"/>
      <rect x="214" y="200" width="30" height="122"/>
      <path d="M208 204 L229 180 L250 204 Z"/>
      <rect x="221" y="180" width="16" height="26"/>
      <rect x="225" y="168" width="8" height="14"/>
      <rect x="227" y="156" width="4" height="14"/>
    </g>
    ${[[86,184],[102,184],[86,216],[102,216],[174,196],[190,196],[174,228],[190,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#e8a030" opacity="${y<200?'.42':'.28'}"/>`).join('')}
    <path d="M0 318 Q150 312 300 316" stroke="#d09050" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#0c0a06">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── So Long a Letter · Dakar — the Atlantic at dusk, a Senegalese courtyard, a pen and paper ── */
  solongletter: scene(`
    <defs>
      <linearGradient id="sllSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1018"/><stop offset=".38" stop-color="#3a2028"/>
        <stop offset=".68" stop-color="#8a4030"/><stop offset=".88" stop-color="#c07040"/>
        <stop offset="1" stop-color="#d09060"/>
      </linearGradient>
      <radialGradient id="sllSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e06020" stop-opacity=".8"/>
        <stop offset="1" stop-color="#e06020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sllSky)"/>
    ${stars(6, 369)}
    <circle cx="220" cy="248" r="80" fill="url(#sllSun)"/>
    <circle cx="220" cy="248" r="22" fill="#e87030" opacity=".85"/>
    <path d="M0 308 Q150 296 300 306 L300 450 L0 450 Z" fill="#1c3050"/>
    <path d="M0 358 Q150 346 300 356 L300 450 L0 450 Z" fill="#142440"/>
    <path d="M0 408 Q150 398 300 406 L300 450 L0 450 Z" fill="#0e1830"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${24+i*48} ${316+i%2*14} Q${38+i*48} ${304+i%2*12} ${52+i*48} ${316+i%2*12}" stroke="#1c3050" stroke-width=".8" fill="none" opacity=".55"/>`).join('')}
    <g fill="#1a1010">
      <rect x="80" y="188" width="140" height="124"/>
      <path d="M72 192 L150 156 L228 192 Z"/>
      ${Array.from({length:5}).map((_,i)=>`<path d="M${84+i*28} ${188} L${84+i*28} ${170} Q${98+i*28} ${160} ${112+i*28} ${170} L${112+i*28} ${188} Z" fill="#1e1414"/>`).join('')}
    </g>
    ${[[84,208],[100,208],[84,240],[100,240],[176,208],[192,208],[176,240],[192,240]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#f0c060" opacity="${y<220?'.38':'.26'}"/>`).join('')}
    <rect x="110" y="284" width="80" height="30" rx="2" fill="#e8e0c8" opacity=".18"/>
    <path d="M116 296 L184 296 M116 302 L170 302 M116 308 L178 308" stroke="#e8e0c8" stroke-width=".7" opacity=".3"/>
    <g fill="#100e0a">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#c07040" stroke-width=".5" fill="none" opacity=".3"/>
  `),

  /* ── Purple Hibiscus · Enugu — a Nigerian garden, purple hibiscus blooms, a walled compound ── */
  purplehibiscus: scene(`
    <defs>
      <linearGradient id="phbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5060a0"/><stop offset=".4" stop-color="#7888c0"/>
        <stop offset=".7" stop-color="#9898b8"/><stop offset="1" stop-color="#c0c0c8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#phbSky)"/>
    ${stars(4, 371)}
    <path d="M0 308 Q150 296 300 306 L300 450 L0 450 Z" fill="#385828"/>
    <path d="M0 360 Q150 348 300 358 L300 450 L0 450 Z" fill="#2c4820"/>
    <path d="M0 412 Q150 402 300 410 L300 450 L0 450 Z" fill="#203818"/>
    <rect x="66" y="214" width="168" height="96" fill="#3a2810"/>
    <rect x="66" y="210" width="168" height="8" fill="#2e2008"/>
    ${Array.from({length:7}).map((_,i)=>`<rect x="${70+i*24}" y="${218}" width="16" height="92" fill="#2e2008" opacity=".3"/>`).join('')}
    ${[[70,230],[90,230],[70,264],[90,264],[184,230],[200,230],[184,264],[200,264]].map(([x,y])=>`<rect x="${x}" y="${y}" width="14" height="22" fill="#f0d080" opacity="${y<250?'.38':'.26'}"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<path d="M${54+i*28} ${308} Q${60+i*28} ${278} ${66+i*28} ${260} Q${70+i*28} ${244} ${74+i*28} ${238}" stroke="#4a6830" stroke-width="3" fill="none" opacity=".7"/>`).join('')}
    ${Array.from({length:10}).map((_,i)=>{const x=50+(i%5)*44+(Math.floor(i/5))*20,y=252+(i%3)*18; return `<circle cx="${x}" cy="${y}" r="${5+i%2*3}" fill="#9040a0" opacity="${0.5+i%3*0.1}"/>`;}).join('')}
    ${Array.from({length:6}).map((_,i)=>{const x=60+(i%3)*52+(Math.floor(i/3))*24,y=272+(i%2)*16; return `<circle cx="${x}" cy="${y}" r="${4+i%2*2}" fill="#b060c0" opacity="${0.4+i%2*0.1}"/>`;}).join('')}
    <g fill="#201808">
      <circle cx="150" cy="302" r="5.5"/>
      <rect x="147" y="307" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#c0c0c8" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Half of a Yellow Sun · Biafra — a half-sun flag, red laterite earth, wartime skies ── */
  halfyellowsun: scene(`
    <defs>
      <linearGradient id="hysSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181010"/><stop offset=".38" stop-color="#2c1808"/>
        <stop offset=".68" stop-color="#602808"/><stop offset=".88" stop-color="#904020"/>
        <stop offset="1" stop-color="#b06030"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hysSky)"/>
    ${stars(7, 373)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#6a3010"/>
    <path d="M0 366 Q150 356 300 364 L300 450 L0 450 Z" fill="#4a2008"/>
    <path d="M0 416 Q150 408 300 414 L300 450 L0 450 Z" fill="#301408"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${30+i*52} ${326+i%2*14} Q${44+i*52} ${314+i%2*12} ${58+i*52} ${326+i%2*12}" stroke="#4a2010" stroke-width=".8" fill="none" opacity=".55"/>`).join('')}
    <path d="M150 96 L150 288" stroke="#e8a020" stroke-width="80" opacity=".08"/>
    <path d="M150 96 L236 242 A96 96 0 0 1 64 242 Z" fill="#e8b020" opacity=".82"/>
    <path d="M150 96 L236 242 A96 96 0 0 1 64 242 Z" fill="none" stroke="#c88010" stroke-width="1.5" opacity=".6"/>
    <path d="M150 96 L150 288 L64 242 Z" fill="#c88010" opacity=".5"/>
    <path d="M150 96 L150 288" stroke="#a06808" stroke-width="1" opacity=".4"/>
    <g fill="#1a1008">
      <circle cx="138" cy="308" r="5"/>
      <circle cx="162" cy="308" r="5"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#904020" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── Americanah · Lagos — Victoria Island skyline, Lagos lagoon, a woman with natural hair ── */
  americanah: scene(`
    <defs>
      <linearGradient id="amnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#101828"/><stop offset=".38" stop-color="#1c2c48"/>
        <stop offset=".68" stop-color="#2c4878"/><stop offset="1" stop-color="#4070a0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#amnSky)"/>
    ${stars(8, 375)}
    <path d="M0 306 Q150 294 300 304 L300 450 L0 450 Z" fill="#182038"/>
    <path d="M0 354 Q150 342 300 352 L300 450 L0 450 Z" fill="#10182c"/>
    <path d="M0 402 Q150 392 300 400 L300 450 L0 450 Z" fill="#0c1020"/>
    <g fill="#0e1628">
      ${[34,70,106,142,178,214,250].map((x,i)=>`<rect x="${x}" y="${168+i%3*24}" width="28" height="${140-i%3*24}"/>`).join('')}
    </g>
    ${Array.from({length:18}).map((_,i)=>{const x=(i*54+6)%296,y=176+(i*38)%130; return `<rect x="${x}" y="${y}" width="8" height="14" fill="${i%2===0?'#e0b030':'#30a0c0'}" opacity="${0.12+(i%4)*0.05}"/>`;}).join('')}
    ${Array.from({length:4}).map((_,i)=>`<path d="M${28+i*64} ${314+i%2*12} Q${42+i*64} ${302+i%2*10} ${56+i*64} ${314+i%2*10}" stroke="#1c2c48" stroke-width=".7" fill="none" opacity=".55"/>`).join('')}
    <path d="M0 306 Q150 300 300 304" stroke="#4070a0" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#0a0e18">
      <circle cx="150" cy="296" r="8"/>
      <path d="M136 280 Q150 260 164 280 Q162 268 150 264 Q138 268 136 280 Z" fill="#0a0e18"/>
      <rect x="146" y="304" width="7" height="10" rx="1"/>
      <path d="M136 310 L146 306 L154 306 L164 310 L160 328 L140 328 Z"/>
    </g>
  `),

  /* ── 台北人 / Taipei People · Taipei — neon ballroom, a coat-check girl, the old city's fading grace ── */
  taipeipeople: scene(`
    <defs>
      <linearGradient id="tpnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080408"/><stop offset=".38" stop-color="#100810"/>
        <stop offset=".68" stop-color="#200c18"/><stop offset=".88" stop-color="#401828"/>
        <stop offset="1" stop-color="#581e2c"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tpnSky)"/>
    ${stars(7, 427)}
    <g fill="#0c0808" opacity=".85">
      ${[22,60,100,144,192,236,272].map((x,i)=>`<rect x="${x}" y="${108+i%3*18}" width="${30+i%2*4}" height="${206-i%3*18}"/>`).join('')}
    </g>
    ${Array.from({length:16}).map((_,i)=>{const x=(i*52+8)%296,y=118+(i*38)%168; return `<rect x="${x}" y="${y}" width="8" height="14" fill="#e8a040" opacity="${0.07+(i%4)*0.03}"/>`;}).join('')}
    <g fill="#1a0c10">
      <rect x="90" y="236" width="120" height="84"/>
      <path d="M82 240 L150 206 L218 240 Z"/>
    </g>
    <rect x="90" y="236" width="120" height="10" fill="#c03050" opacity=".55"/>
    ${Array.from({length:6}).map((_,i)=>`<circle cx="${102+i*18}" cy="${232}" r="4" fill="#e8b040" opacity=".5"/>`).join('')}
    ${[[94,256],[110,256],[94,288],[110,288],[168,256],[184,256],[168,288],[184,288]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#ffe090" opacity="${y<272?'.4':'.25'}"/>`).join('')}
    <g fill="#100810">
      <ellipse cx="150" cy="244" rx="22" ry="28"/>
      <ellipse cx="150" cy="232" rx="14" ry="16" fill="#e8b888"/>
      <rect x="138" y="266" width="24" height="58"/>
    </g>
    <g fill="#c03050" opacity=".6">
      <rect x="130" y="246" width="40" height="12" rx="4"/>
    </g>
    <g fill="#060408">
      <circle cx="150" cy="316" r="5.5"/>
      <rect x="147" y="321" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 322 Q150 316 300 320" stroke="#581e2c" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── 孽子 / Crystal Boys · Taipei — New Park at night, a lone boy under a streetlight ── */
  crystalboys: scene(`
    <defs>
      <linearGradient id="cbySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#040608"/><stop offset=".4" stop-color="#080c12"/>
        <stop offset=".72" stop-color="#101420"/><stop offset="1" stop-color="#181c28"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cbySky)"/>
    ${stars(11, 429)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#0c1810"/>
    <path d="M0 366 Q150 354 300 364 L300 450 L0 450 Z" fill="#081008"/>
    <g fill="#081008" opacity=".8">
      ${[28,68,108,152,198,244,278].map((x,i)=>`
        <rect x="${x-2}" y="${174+i%2*14}" width="4" height="${142-i%2*14}" rx="1"/>
        <ellipse cx="${x}" cy="${174+i%2*14}" rx="${14+i%2*6}" ry="${10+i%2*4}" fill="#0a1a0a"/>
        <ellipse cx="${x}" cy="${200+i%2*12}" rx="${18+i%2*6}" ry="${12+i%2*4}" fill="#0a1a0a" opacity=".7"/>
      `).join('')}
    </g>
    <circle cx="150" cy="260" r="50" fill="#e8d060" opacity=".08"/>
    <circle cx="150" cy="260" r="8" fill="#e8d060" opacity=".7"/>
    <path d="M150 268 L144 310 Q150 316 156 310 Z" fill="#e8d060" opacity=".2"/>
    <g fill="#101820" opacity=".85">
      <circle cx="150" cy="282" r="10"/>
      <rect x="144" y="292" width="12" height="30" rx="2"/>
      <path d="M136 296 L144 294 L144 318 Q138 320 134 316 Z"/>
      <path d="M164 296 L156 294 L156 318 Q162 320 166 316 Z"/>
    </g>
    <g fill="#060810">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#181c28" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── 天橋上的魔術師 / The Magician on the Skywalk · Taipei — arcade crowds, a conjurer above ── */
  magicianskywalk: scene(`
    <defs>
      <linearGradient id="mskSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#100808"/><stop offset=".38" stop-color="#1c1008"/>
        <stop offset=".66" stop-color="#402808"/><stop offset=".88" stop-color="#906030"/>
        <stop offset="1" stop-color="#b08040"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mskSky)"/>
    ${stars(6, 431)}
    <g fill="#180c08" opacity=".9">
      ${[14,56,100,146,192,238,276].map((x,i)=>`<rect x="${x}" y="${132+i%3*16}" width="${28+i%2*4}" height="${182-i%3*16}"/>`).join('')}
    </g>
    ${Array.from({length:18}).map((_,i)=>{const x=(i*44+6)%296,y=144+(i*34)%150,c=['#e88030','#e04020','#40a0c0','#e0c020'][i%4]; return `<rect x="${x}" y="${y}" width="8" height="14" fill="${c}" opacity="${0.07+(i%3)*0.03}"/>`;}).join('')}
    <rect x="46" y="238" width="208" height="12" fill="#281808" rx="2"/>
    <rect x="46" y="238" width="208" height="4" fill="#604020" opacity=".5"/>
    <path d="M46 238 L54 216 L246 216 L254 238 Z" fill="#201008"/>
    <g fill="#f0f0f0" opacity=".85">
      <circle cx="150" cy="204" r="12"/>
      <rect x="144" y="216" width="12" height="24" rx="2"/>
      <path d="M136 214 L144 218 L144 238 Q138 240 132 234 Z"/>
      <path d="M164 214 L156 218 L156 238 Q162 240 168 234 Z"/>
    </g>
    <circle cx="150" cy="196" r="14" fill="#e0c080" opacity=".3"/>
    <circle cx="150" cy="200" r="4" fill="#f8f8f8" opacity=".6"/>
    ${Array.from({length:7}).map((_,i)=>`<circle cx="${112+i*12}" cy="${200}" r="2" fill="${['#e04020','#e8b020','#4090e0','#40b040','#e04080','#80c0e0','#e8e040'][i]}" opacity=".7"/>`).join('')}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#1a1008"/>
    <g fill="#0e0806">
      <circle cx="150" cy="306" r="5.5"/>
      <rect x="147" y="311" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── 荒人手記 / Notes of a Desolate Man · Taipei — rainy Taipei alley, a solitary window ── */
  desolateman: scene(`
    <defs>
      <linearGradient id="dsmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060808"/><stop offset=".4" stop-color="#0c1010"/>
        <stop offset=".72" stop-color="#141618"/><stop offset="1" stop-color="#1c1e20"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dsmSky)"/>
    ${stars(6, 433)}
    <rect width="300" height="450" fill="#608090" opacity=".09"/>
    <g fill="#0c1010" opacity=".85">
      ${[30,72,116,162,208,252].map((x,i)=>`<rect x="${x}" y="${142+i%3*18}" width="${34+i%2*4}" height="${172-i%3*18}"/>`).join('')}
    </g>
    ${Array.from({length:12}).map((_,i)=>{const x=(i*52+10)%294,y=154+(i*36)%140; return `<rect x="${x}" y="${y}" width="10" height="16" fill="#d0c090" opacity="${0.06+(i%3)*0.03}"/>`;}).join('')}
    <rect x="126" y="198" width="48" height="78" fill="#0e1214"/>
    <rect x="128" y="200" width="44" height="38" fill="#d0c080" opacity=".22"/>
    <g fill="#50607a" opacity=".6">
      <path d="M128 238 L152 226 L172 238 L172 278 L128 278 Z"/>
    </g>
    ${Array.from({length:20}).map((_,i)=>`<line x1="${i*16+2}" y1="${160+i%3*8}" x2="${i*16+8}" y2="${180+i%3*8}" stroke="#5080a0" stroke-width=".5" opacity=".3"/>`).join('')}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#0e0e10"/>
    <g fill="#060808">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#1c1e20" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Pounamu Pounamu · Gisborne — pōhutukawa coast, green hills, the East Coast Pacific ── */
  pounamu: scene(`
    <defs>
      <linearGradient id="pnmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c1828"/><stop offset=".36" stop-color="#183040"/>
        <stop offset=".65" stop-color="#2c6060"/><stop offset=".85" stop-color="#4898a0"/>
        <stop offset="1" stop-color="#60b0b8"/>
      </linearGradient>
      <radialGradient id="pnmSun" cx="70%" cy="38%" r="28%">
        <stop offset="0" stop-color="#f0d860" stop-opacity=".55"/>
        <stop offset="1" stop-color="#f0d860" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pnmSky)"/>
    ${stars(5, 475)}
    <rect width="300" height="450" fill="url(#pnmSun)"/>
    <circle cx="210" cy="182" r="14" fill="#f8e060" opacity=".72"/>
    <path d="M0 192 Q150 180 300 190 L300 316 Q150 304 0 316 Z" fill="#3888a0" opacity=".6"/>
    <path d="M0 300 Q60 268 100 282 Q132 294 164 274 Q200 252 244 268 Q274 280 300 264 L300 450 L0 450 Z" fill="#3c7040"/>
    <path d="M0 354 Q150 338 300 352 L300 450 L0 450 Z" fill="#2c5e30"/>
    <path d="M0 404 Q150 390 300 402 L300 450 L0 450 Z" fill="#1e4c20"/>
    <g fill="#801818" opacity=".8">
      ${[30,72,116,162,210,256].map((x,i)=>`
        <ellipse cx="${x}" cy="${276+i%2*12}" rx="${22+i%2*8}" ry="${28+i%2*8}"/>
        <ellipse cx="${x+10}" cy="${290+i%2*10}" rx="${18+i%2*6}" ry="${20+i%2*6}" opacity=".7"/>
        <rect x="${x-3}" y="${300+i%2*10}" width="6" height="${18+i%2*6}" rx="2"/>
      `).join('')}
    </g>
    ${Array.from({length:18}).map((_,i)=>`<circle cx="${22+(i*24)%276}" cy="${270+(i*16)%56}" r="${1.5+i%3*.5}" fill="#e04030" opacity="${0.4+i%3*0.1}"/>`).join('')}
    <g fill="#c0a060" opacity=".5">
      <rect x="134" y="254" width="32" height="22" rx="3"/>
      <path d="M134 256 Q150 248 166 256"/>
    </g>
    <path d="M0 192 Q150 186 300 190 M0 316 Q150 310 300 314" stroke="#3888a0" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#0c1820">
      <circle cx="150" cy="292" r="5.5"/>
      <rect x="147" y="297" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Owls Do Cry · Oamaru — Victorian limestone buildings, grey South Island sky, a family ── */
  owlsdocry: scene(`
    <defs>
      <linearGradient id="odcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1c24"/><stop offset=".4" stop-color="#282c38"/>
        <stop offset=".72" stop-color="#383c48"/><stop offset="1" stop-color="#484c58"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#odcSky)"/>
    ${stars(8, 477)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#2a2c30"/>
    <path d="M0 368 Q150 356 300 366 L300 450 L0 450 Z" fill="#222428"/>
    <g fill="#e8e4d8" opacity=".7">
      <rect x="62" y="184" width="72" height="136"/>
      <path d="M54 188 L98 152 L142 188 Z"/>
      <rect x="78" y="152" width="40" height="38"/>
      ${Array.from({length:4}).map((_,i)=>`<rect x="62" y="${184+i*34}" width="72" height="4" fill="#d8d4c8" opacity=".4"/>`).join('')}
      <rect x="166" y="196" width="64" height="124"/>
      <path d="M158 200 L198 164 L238 200 Z"/>
      <rect x="180" y="164" width="36" height="38"/>
    </g>
    ${[[66,204],[82,204],[66,240],[82,240],[98,204],[114,204],[170,218],[186,218],[170,252],[186,252],[202,218],[218,218]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#d0c890" opacity="${y<230?'.38':'.24'}"/>`).join('')}
    <rect x="62" y="180" width="72" height="8" fill="#d0c890" opacity=".5"/>
    <rect x="166" y="192" width="64" height="8" fill="#d0c890" opacity=".5"/>
    <g fill="#181c22">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 318 Q150 312 300 316" stroke="#484c58" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Collected Stories · Wellington — the Tinakori Road house, the harbour, a colonial garden party ── */
  mansfieldstories: scene(`
    <defs>
      <linearGradient id="msfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2028"/><stop offset=".38" stop-color="#28303c"/>
        <stop offset=".68" stop-color="#485060"/><stop offset=".88" stop-color="#8898a8"/>
        <stop offset="1" stop-color="#a8b8c4"/>
      </linearGradient>
      <radialGradient id="msfSun" cx="62%" cy="42%" r="30%">
        <stop offset="0" stop-color="#e8d080" stop-opacity=".45"/>
        <stop offset="1" stop-color="#e8d080" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#msfSky)"/>
    ${stars(6, 479)}
    <rect width="300" height="450" fill="url(#msfSun)"/>
    <path d="M0 198 Q150 186 300 196 L300 312 Q150 300 0 312 Z" fill="#3060a0" opacity=".55"/>
    <path d="M0 306 Q150 294 300 304 L300 450 L0 450 Z" fill="#2a3828"/>
    <path d="M0 356 Q150 344 300 354 L300 450 L0 450 Z" fill="#202e20"/>
    <path d="M0 198 Q150 192 300 196 M0 312 Q150 306 300 310" stroke="#4080c0" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#d0c8a0" opacity=".75">
      <rect x="82" y="188" width="136" height="118"/>
      <path d="M74 192 L150 154 L226 192 Z"/>
      <rect x="108" y="154" width="84" height="40"/>
      <rect x="74" y="188" width="136" height="8" fill="#b8a888" opacity=".6"/>
    </g>
    ${[[86,212],[102,212],[86,248],[102,248],[166,212],[182,212],[166,248],[182,248],[118,212],[134,212]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="24" fill="#f8f0d0" opacity="${y<232?'.45':'.3'}"/>`).join('')}
    <g fill="#2a3820" opacity=".8">
      ${[50,78,192,222].map((x,i)=>`
        <rect x="${x-2}" y="${276+i%2*10}" width="4" height="${32-i%2*10}" rx="1"/>
        <ellipse cx="${x}" cy="${264+i%2*8}" rx="${14+i%2*4}" ry="${16+i%2*4}"/>
        <ellipse cx="${x+8}" cy="${278+i%2*6}" rx="${10+i%2*3}" ry="${12+i%2*3}" opacity=".8"/>
      `).join('')}
    </g>
    <g fill="#1a2020">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 306 Q150 300 300 304" stroke="#a8b8c4" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Endurance · Weddell Sea — a ship crushed in pack ice, polar night, a crew's last hope ── */
  endurance: scene(`
    <defs>
      <linearGradient id="endSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020408"/><stop offset=".38" stop-color="#04080c"/>
        <stop offset=".68" stop-color="#080c14"/><stop offset="1" stop-color="#0c1018"/>
      </linearGradient>
      <radialGradient id="endMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e0eaf8" stop-opacity=".8"/>
        <stop offset="1" stop-color="#e0eaf8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#endSky)"/>
    ${stars(18, 471)}
    <circle cx="224" cy="128" r="60" fill="url(#endMoon)"/>
    <circle cx="224" cy="128" r="16" fill="#e8f0f8" opacity=".82"/>
    <path d="M0 296 Q40 268 80 280 Q110 290 140 272 Q168 254 200 268 Q236 284 272 264 Q288 254 300 256 L300 450 L0 450 Z" fill="#c8d8e8" opacity=".75"/>
    <path d="M0 350 Q150 334 300 348 L300 450 L0 450 Z" fill="#b8c8d8" opacity=".85"/>
    <path d="M0 400 Q150 386 300 398 L300 450 L0 450 Z" fill="#a8b8c8"/>
    ${Array.from({length:14}).map((_,i)=>`<path d="M${14+i*22} ${298+i%3*10} Q${22+i*22} ${278+i%3*8} ${30+i*22} ${294+i%3*8}" stroke="#c8d8e8" stroke-width=".6" fill="#b8c8d8" opacity=".55"/>`).join('')}
    <g fill="#0e1418" opacity=".88">
      <rect x="110" y="208" width="80" height="92"/>
      <path d="M102 212 L150 174 L198 212 Z"/>
      <rect x="128" y="174" width="44" height="40"/>
      <rect x="146" y="142" width="8" height="36"/>
      <path d="M140 146 L150 106 L160 146 Z"/>
    </g>
    <g fill="#1a2830" opacity=".7">
      ${Array.from({length:5}).map((_,i)=>`<path d="M${98+i*4} ${296} Q${100+i*4} ${282} ${102+i*4} ${270}" stroke="#2a3c4c" stroke-width="2" fill="none" opacity=".5"/>`).join('')}
      ${Array.from({length:5}).map((_,i)=>`<path d="M${196+i*4} ${296} Q${198+i*4} ${280} ${200+i*4} ${268}" stroke="#2a3c4c" stroke-width="2" fill="none" opacity=".5"/>`).join('')}
    </g>
    <g fill="#060810">
      <circle cx="150" cy="288" r="5.5"/>
      <rect x="147" y="293" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 296 Q150 290 300 294" stroke="#0c1018" stroke-width=".5" fill="none" opacity=".5"/>
  `),

  /* ── North Pole Walk · Arctic — endless white ice, a lone figure, the midnight sun ── */
  northpolewalk: scene(`
    <defs>
      <linearGradient id="npwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c8d8f0"/><stop offset=".3" stop-color="#d8e8f8"/>
        <stop offset=".6" stop-color="#e8f0f8"/><stop offset=".8" stop-color="#f0f4f8"/>
        <stop offset="1" stop-color="#e8eef4"/>
      </linearGradient>
      <radialGradient id="npwSun" cx="50%" cy="30%" r="30%">
        <stop offset="0" stop-color="#ffe0a0" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe0a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#npwSky)"/>
    <rect width="300" height="450" fill="url(#npwSun)"/>
    <circle cx="150" cy="148" r="18" fill="#fff0b0" opacity=".75"/>
    <path d="M0 310 Q150 296 300 308 L300 450 L0 450 Z" fill="#d8e8f0" opacity=".9"/>
    <path d="M0 360 Q150 346 300 358 L300 450 L0 450 Z" fill="#c8d8e8" opacity=".92"/>
    <path d="M0 410 Q150 398 300 408 L300 450 L0 450 Z" fill="#b8c8d8"/>
    ${Array.from({length:12}).map((_,i)=>`<path d="M${16+i*24} ${312+i%3*12} Q${26+i*24} ${294+i%3*10} ${36+i*24} ${310+i%3*10}" stroke="#d8e8f0" stroke-width=".6" fill="#c8d8e8" opacity=".6"/>`).join('')}
    <g fill="#304860" opacity=".85">
      <circle cx="150" cy="278" r="10"/>
      <rect x="144" y="288" width="12" height="28" rx="2"/>
      <path d="M130 282 L144 286 L144 312 Q132 316 126 306 Z"/>
      <path d="M170 282 L156 286 L156 312 Q168 316 174 306 Z"/>
      <path d="M142 288 L108 304 L110 298 L144 282 Z"/>
      <rect x="126" y="312" width="48" height="6" rx="2" fill="#203448"/>
    </g>
    <g fill="#203448" opacity=".6">
      <path d="M0 310 Q75 306 150 310 Q225 314 300 308" stroke="#203448" stroke-width="1.5" fill="none" opacity=".3"/>
    </g>
    <g fill="#182838">
      <circle cx="150" cy="302" r="5.5"/>
      <rect x="147" y="307" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── 南极绝恋 · Antarctica — aurora australis, a research station, two souls at the end of the earth ── */
  antarcticlove: scene(`
    <defs>
      <linearGradient id="aalSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020608"/><stop offset=".36" stop-color="#040c0e"/>
        <stop offset=".64" stop-color="#061412"/><stop offset=".86" stop-color="#0a1c18"/>
        <stop offset="1" stop-color="#102420"/>
      </linearGradient>
      <radialGradient id="aalAurora" cx="50%" cy="40%" r="60%">
        <stop offset="0" stop-color="#40e0a0" stop-opacity=".4"/>
        <stop offset="1" stop-color="#40e0a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#aalSky)"/>
    ${stars(16, 473)}
    <rect width="300" height="450" fill="url(#aalAurora)"/>
    <path d="M60 100 Q80 60 100 100 Q120 60 140 100 Q160 60 180 100 Q200 60 220 100" stroke="#40e0a0" stroke-width="1.5" fill="none" opacity=".5"/>
    <path d="M40 130 Q70 80 100 130 Q130 80 160 130 Q190 80 220 130 Q250 80 270 130" stroke="#60c8e0" stroke-width="1" fill="none" opacity=".35"/>
    <path d="M0 308 Q150 294 300 306 L300 450 L0 450 Z" fill="#c8d8e0" opacity=".8"/>
    <path d="M0 358 Q150 344 300 356 L300 450 L0 450 Z" fill="#b8c8d0" opacity=".85"/>
    <path d="M0 408 Q150 396 300 406 L300 450 L0 450 Z" fill="#a8b8c0"/>
    ${Array.from({length:12}).map((_,i)=>`<path d="M${18+i*24} ${310+i%3*10} Q${28+i*24} ${292+i%3*8} ${38+i*24} ${308+i%3*8}" stroke="#c8d8e0" stroke-width=".6" fill="#b8c8d0" opacity=".55"/>`).join('')}
    <g fill="#0c1416" opacity=".9">
      <rect x="98" y="232" width="104" height="78"/>
      <path d="M90 236 L150 200 L210 236 Z"/>
      <rect x="118" y="200" width="64" height="38"/>
      ${Array.from({length:4}).map((_,i)=>`<rect x="${102+i*26}" y="${232}" width="18" height="78" fill="#0e1618" opacity=".2"/>`).join('')}
    </g>
    ${[[102,254],[118,254],[162,254],[178,254],[102,288],[118,288]].map(([x,y])=>`<rect x="${x}" y="${y}" width="14" height="22" fill="#80f0d0" opacity="${y<270?'.3':'.2'}"/>`).join('')}
    <g fill="#060c0e">
      <circle cx="150" cy="300" r="5.5"/>
      <rect x="147" y="305" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#102420" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Long Walk to Freedom · Johannesburg — sunrise over the Highveld, a prison door opening ── */
  longwalkfreedom: scene(`
    <defs>
      <linearGradient id="lwfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".34" stop-color="#101828"/>
        <stop offset=".62" stop-color="#3c3020"/><stop offset=".82" stop-color="#906020"/>
        <stop offset="1" stop-color="#c09030"/>
      </linearGradient>
      <radialGradient id="lwfSun" cx="50%" cy="58%" r="42%">
        <stop offset="0" stop-color="#ffd040" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffd040" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lwfSky)"/>
    ${stars(8, 457)}
    <rect width="300" height="450" fill="url(#lwfSun)"/>
    <circle cx="150" cy="262" r="20" fill="#ffd840" opacity=".82"/>
    <path d="M0 308 Q150 294 300 306 L300 450 L0 450 Z" fill="#6a6040"/>
    <path d="M0 358 Q150 344 300 356 L300 450 L0 450 Z" fill="#585030"/>
    <path d="M0 408 Q150 396 300 406 L300 450 L0 450 Z" fill="#484020"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${18+i*28} ${310+i%2*12} Q${28+i*28} ${296+i%2*10} ${38+i*28} ${310+i%2*10}" stroke="#6a6040" stroke-width=".5" fill="#585030" opacity=".5"/>`).join('')}
    <g fill="#181410" opacity=".88">
      <rect x="106" y="204" width="88" height="106"/>
      <path d="M98 208 L150 172 L202 208 Z"/>
      <rect x="124" y="172" width="52" height="38"/>
      <rect x="96" y="200" width="108" height="10" fill="#282018" opacity=".5"/>
    </g>
    <g fill="#302818" opacity=".9">
      <rect x="118" y="258" width="64" height="52"/>
      <rect x="140" y="268" width="20" height="42" fill="#201808"/>
    </g>
    <rect x="136" y="268" width="28" height="6" fill="#c09030" opacity=".5"/>
    <g fill="#080808">
      <circle cx="150" cy="300" r="5.5"/>
      <rect x="147" y="305" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#c09030" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── The Boy Who Harnessed the Wind · Wimbe, Malawi — a windmill against the sky, red African earth ── */
  windboy: scene(`
    <defs>
      <linearGradient id="wbySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2c08"/><stop offset=".38" stop-color="#2c4810"/>
        <stop offset=".66" stop-color="#608030"/><stop offset=".88" stop-color="#c0a040"/>
        <stop offset="1" stop-color="#d8c060"/>
      </linearGradient>
      <radialGradient id="wbySun" cx="74%" cy="38%" r="30%">
        <stop offset="0" stop-color="#ffe060" stop-opacity=".6"/>
        <stop offset="1" stop-color="#ffe060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wbySky)"/>
    ${stars(6, 459)}
    <rect width="300" height="450" fill="url(#wbySun)"/>
    <circle cx="222" cy="196" r="14" fill="#ffe060" opacity=".78"/>
    <path d="M0 304 Q150 290 300 302 L300 450 L0 450 Z" fill="#785838"/>
    <path d="M0 354 Q150 340 300 352 L300 450 L0 450 Z" fill="#684828"/>
    <path d="M0 404 Q150 392 300 402 L300 450 L0 450 Z" fill="#583820"/>
    <rect x="147" y="168" width="6" height="138" fill="#301c08"/>
    <g fill="#402808" opacity=".85">
      <path d="M150 172 L138 212 L150 200 Z"/>
      <path d="M150 172 L162 212 L150 200 Z"/>
      <path d="M150 172 L110 184 L138 190 Z"/>
      <path d="M150 172 L190 184 L162 190 Z"/>
    </g>
    <g fill="#c09030" opacity=".5">
      <circle cx="150" cy="172" r="8"/>
      <circle cx="150" cy="172" r="4" fill="#e0b040"/>
    </g>
    <g fill="#481c08" opacity=".7">
      ${[34,68,210,246].map((x,i)=>`<rect x="${x-2}" y="${236+i%2*14}" width="4" height="${68-i%2*14}" rx="1"/><ellipse cx="${x}" cy="${236+i%2*14}" rx="${12+i%2*4}" ry="${8+i%2*3}" fill="#3c5018" opacity=".7"/>`).join('')}
    </g>
    <g fill="#200c04">
      <circle cx="150" cy="296" r="5.5"/>
      <rect x="147" y="301" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 304 Q150 298 300 302" stroke="#d8c060" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── Out of Africa · Nairobi — a coffee farm at dusk, the Ngong Hills, a vast Kenyan sky ── */
  outofafrica: scene(`
    <defs>
      <linearGradient id="oafSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c1018"/><stop offset=".36" stop-color="#1c2030"/>
        <stop offset=".64" stop-color="#503838"/><stop offset=".84" stop-color="#a06840"/>
        <stop offset="1" stop-color="#c89050"/>
      </linearGradient>
      <radialGradient id="oafSun" cx="64%" cy="60%" r="36%">
        <stop offset="0" stop-color="#e08030" stop-opacity=".65"/>
        <stop offset="1" stop-color="#e08030" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#oafSky)"/>
    ${stars(9, 461)}
    <rect width="300" height="450" fill="url(#oafSun)"/>
    <circle cx="192" cy="282" r="16" fill="#e08030" opacity=".72"/>
    <path d="M0 274 Q40 238 80 254 Q110 266 140 246 Q170 226 206 244 Q244 264 278 242 Q290 234 300 236 L300 450 L0 450 Z" fill="#4a5030" opacity=".55"/>
    <path d="M0 330 Q150 314 300 328 L300 450 L0 450 Z" fill="#3a4028"/>
    <path d="M0 380 Q150 366 300 378 L300 450 L0 450 Z" fill="#2a3018"/>
    <g fill="#1c1408" opacity=".85">
      ${[34,66,100,136,172,208,242,272].map((x,i)=>`
        <ellipse cx="${x}" cy="${264+i%2*12}" rx="${16+i%2*6}" ry="${22+i%2*8}"/>
        <ellipse cx="${x}" cy="${286+i%2*10}" rx="${18+i%2*6}" ry="${14+i%2*4}" opacity=".8"/>
        <rect x="${x-3}" y="${284+i%2*10}" width="6" height="${24+i%2*8}" rx="1"/>
      `).join('')}
    </g>
    <g fill="#100c08" opacity=".8">
      <rect x="110" y="216" width="80" height="60"/>
      <path d="M102 220 L150 190 L198 220 Z"/>
      <rect x="126" y="190" width="48" height="32"/>
    </g>
    ${[[114,234],[130,234],[158,234],[174,234]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#f0d060" opacity=".35"/>`).join('')}
    <g fill="#080c04">
      <circle cx="150" cy="266" r="5.5"/>
      <rect x="147" y="271" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 274 Q150 268 300 272" stroke="#c89050" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── The Flame Trees of Thika · Thika — scarlet flame trees, red Kenyan earth, a child's world ── */
  flamethika: scene(`
    <defs>
      <linearGradient id="ftkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2808"/><stop offset=".38" stop-color="#2c4010"/>
        <stop offset=".66" stop-color="#508028"/><stop offset=".88" stop-color="#90b040"/>
        <stop offset="1" stop-color="#b0c858"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ftkSky)"/>
    ${stars(5, 463)}
    <path d="M0 306 Q150 292 300 304 L300 450 L0 450 Z" fill="#785838"/>
    <path d="M0 356 Q150 342 300 354 L300 450 L0 450 Z" fill="#684828"/>
    <path d="M0 406 Q150 394 300 404 L300 450 L0 450 Z" fill="#583820"/>
    <g fill="#481808" opacity=".85">
      ${[36,90,150,210,264].map((x,i)=>`
        <rect x="${x-3}" y="${224+i%2*14}" width="6" height="${82-i%2*14}" rx="2"/>
        <ellipse cx="${x}" cy="${202+i%2*12}" rx="${28+i%2*10}" ry="${30+i%2*8}" fill="#901808" opacity=".75"/>
        <ellipse cx="${x-12}" cy="${218+i%2*10}" rx="${22+i%2*8}" ry="${24+i%2*6}" fill="#a02010" opacity=".6"/>
        <ellipse cx="${x+14}" cy="${214+i%2*12}" rx="${18+i%2*6}" ry="${20+i%2*4}" fill="#c03020" opacity=".55"/>
      `).join('')}
    </g>
    ${Array.from({length:20}).map((_,i)=>`<circle cx="${20+(i*26)%280}" cy="${196+(i*18)%80}" r="${2+i%3}" fill="${['#e03020','#c82010','#e04828'][i%3]}" opacity="${0.4+i%3*0.1}"/>`).join('')}
    <g fill="#100c04">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 306 Q150 300 300 304" stroke="#b0c858" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── Skeletons on the Zahara · Western Sahara — endless dunes, a shipwrecked sailor, desert sun ── */
  zahara: scene(`
    <defs>
      <linearGradient id="zhrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".36" stop-color="#201808"/>
        <stop offset=".64" stop-color="#604810"/><stop offset=".84" stop-color="#c09020"/>
        <stop offset="1" stop-color="#d8b030"/>
      </linearGradient>
      <radialGradient id="zhrSun" cx="50%" cy="46%" r="34%">
        <stop offset="0" stop-color="#ffe040" stop-opacity=".75"/>
        <stop offset="1" stop-color="#ffe040" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#zhrSky)"/>
    ${stars(7, 465)}
    <rect width="300" height="450" fill="url(#zhrSun)"/>
    <circle cx="150" cy="228" r="20" fill="#ffe878" opacity=".82"/>
    <path d="M0 296 Q60 258 110 272 Q148 284 170 262 Q200 238 240 254 Q272 268 300 250 L300 450 L0 450 Z" fill="#c8a030" opacity=".7"/>
    <path d="M0 348 Q100 326 200 340 Q252 348 300 330 L300 450 L0 450 Z" fill="#b89020"/>
    <path d="M0 398 Q150 382 300 396 L300 450 L0 450 Z" fill="#a88010"/>
    ${Array.from({length:12}).map((_,i)=>{const x=10+(i*26)%288; return `<path d="M${x} ${298+i%3*10} Q${x+8} ${274+i%3*8} ${x+16} ${290+i%3*8} Q${x+24} ${274+i%3*8} ${x+32} ${298+i%3*10}" stroke="#c8a030" stroke-width=".5" fill="#b89020" opacity=".55"/>`;}).join('')}
    <g fill="#180e04" opacity=".85">
      <circle cx="150" cy="282" r="8"/>
      <rect x="144" y="290" width="12" height="16" rx="1"/>
      <path d="M132 286 L144 290 L144 306 Q136 310 130 302 Z"/>
      <path d="M168 286 L156 290 L156 306 Q164 310 170 302 Z"/>
    </g>
    <g fill="#080608">
      <circle cx="150" cy="288" r="5.5"/>
      <rect x="147" y="293" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 296 Q150 290 300 294" stroke="#d8b030" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── A Long Way Gone · Freetown — Sierra Leone jungle, a boy, the weight of a gun ── */
  longwaygone: scene(`
    <defs>
      <linearGradient id="lwgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080c08"/><stop offset=".38" stop-color="#101408"/>
        <stop offset=".68" stop-color="#182010"/><stop offset=".88" stop-color="#283018"/>
        <stop offset="1" stop-color="#384020"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lwgSky)"/>
    ${stars(6, 467)}
    <path d="M0 310 Q150 298 300 308 L300 450 L0 450 Z" fill="#202810"/>
    <path d="M0 360 Q150 348 300 358 L300 450 L0 450 Z" fill="#182010"/>
    <g fill="#0c1008" opacity=".9">
      ${[18,50,84,120,158,196,234,268].map((x,i)=>`
        <rect x="${x-4}" y="${158+i%2*18}" width="8" height="${154-i%2*18}" rx="2"/>
        <ellipse cx="${x}" cy="${148+i%2*14}" rx="${20+i%2*8}" ry="${24+i%2*8}" fill="#0e1408"/>
        <ellipse cx="${x+12}" cy="${168+i%2*12}" rx="${16+i%2*6}" ry="${18+i%2*6}" fill="#0a1006" opacity=".8"/>
      `).join('')}
    </g>
    <rect width="300" height="450" fill="#182810" opacity=".14"/>
    <g fill="#181008" opacity=".88">
      <circle cx="150" cy="274" r="10"/>
      <rect x="144" y="284" width="12" height="28" rx="1"/>
      <path d="M132 278 L144 282 L144 308 Q134 312 128 302 Z"/>
      <path d="M168 278 L156 282 L156 308 Q166 312 172 302 Z"/>
    </g>
    <g fill="#504030" opacity=".6">
      <rect x="156" y="284" width="30" height="4" rx="1"/>
      <rect x="182" y="281" width="4" height="10" rx="1"/>
    </g>
    <g fill="#060808">
      <circle cx="150" cy="302" r="5.5"/>
      <rect x="147" y="307" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 310 Q150 304 300 308" stroke="#384020" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Cry of the Kalahari · Botswana — a lion at sunset, vast red dunes, the Kalahari sky ── */
  cryofkalahari: scene(`
    <defs>
      <linearGradient id="cokSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c0c18"/><stop offset=".34" stop-color="#1c1820"/>
        <stop offset=".62" stop-color="#5c3818"/><stop offset=".82" stop-color="#b06820"/>
        <stop offset="1" stop-color="#d08830"/>
      </linearGradient>
      <radialGradient id="cokSun" cx="66%" cy="56%" r="36%">
        <stop offset="0" stop-color="#e07018" stop-opacity=".65"/>
        <stop offset="1" stop-color="#e07018" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cokSky)"/>
    ${stars(10, 469)}
    <rect width="300" height="450" fill="url(#cokSun)"/>
    <circle cx="198" cy="266" r="18" fill="#e07018" opacity=".72"/>
    <path d="M0 300 Q60 264 100 278 Q132 290 162 270 Q200 246 244 264 Q272 276 300 258 L300 450 L0 450 Z" fill="#9a6020" opacity=".6"/>
    <path d="M0 352 Q150 336 300 350 L300 450 L0 450 Z" fill="#8a5018"/>
    <path d="M0 402 Q150 388 300 400 L300 450 L0 450 Z" fill="#7a4010"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${20+i*28} ${302+i%2*12} Q${30+i*28} ${286+i%2*10} ${40+i*28} ${302+i%2*10}" stroke="#9a6020" stroke-width=".5" fill="#8a5018" opacity=".5"/>`).join('')}
    <g fill="#201008" opacity=".88">
      <ellipse cx="118" cy="284" rx="32" ry="22"/>
      <ellipse cx="118" cy="268" rx="20" ry="16"/>
      <ellipse cx="100" cy="264" rx="16" ry="14"/>
      <path d="M96 268 Q86 256 90 248 Q98 256 100 264 Z"/>
      <path d="M136 268 Q148 256 144 248 Q138 256 136 264 Z"/>
      <ellipse cx="118" cy="260" rx="12" ry="10" fill="#302010"/>
    </g>
    <g fill="#e07018" opacity=".4">
      <path d="M88 256 Q82 244 86 238 Q92 248 92 256 Z"/>
      <path d="M148 256 Q154 244 150 238 Q144 248 144 256 Z"/>
      <path d="M96 250 Q88 242 90 236 Q98 244 98 252 Z"/>
      <path d="M140 250 Q148 242 146 236 Q138 244 138 252 Z"/>
    </g>
    <g fill="#100808">
      <circle cx="150" cy="292" r="5.5"/>
      <rect x="147" y="297" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 300 Q150 294 300 298" stroke="#d08830" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Kebra Nagast · Aksum — ancient stelae, Ethiopian highlands, the Ark of the Covenant ── */
  kebranagast: scene(`
    <defs>
      <linearGradient id="kngSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1008"/><stop offset=".36" stop-color="#2c1c08"/>
        <stop offset=".64" stop-color="#604018"/><stop offset=".86" stop-color="#c08030"/>
        <stop offset="1" stop-color="#e0b050"/>
      </linearGradient>
      <radialGradient id="kngSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe060" stop-opacity=".55"/>
        <stop offset="1" stop-color="#ffe060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#kngSky)"/>
    ${stars(8, 447)}
    <circle cx="220" cy="240" r="80" fill="url(#kngSun)"/>
    <circle cx="220" cy="240" r="18" fill="#ffe878" opacity=".8"/>
    <path d="M0 308 Q60 272 100 286 Q130 298 160 278 Q196 256 240 270 Q270 280 300 264 L300 450 L0 450 Z" fill="#6a5030" opacity=".6"/>
    <path d="M0 358 Q150 342 300 356 L300 450 L0 450 Z" fill="#5a4028"/>
    <path d="M0 408 Q150 394 300 406 L300 450 L0 450 Z" fill="#4a3020"/>
    <g fill="#2a1c08" opacity=".9">
      <rect x="108" y="176" width="24" height="134"/>
      <rect x="100" y="174" width="40" height="12" rx="2"/>
      <rect x="112" y="162" width="16" height="16"/>
      <rect x="118" y="148" width="4" height="16"/>
      ${Array.from({length:8}).map((_,i)=>`<rect x="100" y="${188+i*14}" width="40" height="4" rx="1" opacity=".5"/>`).join('')}
    </g>
    <g fill="#2a1c08" opacity=".9">
      <rect x="166" y="196" width="20" height="116"/>
      <rect x="158" y="194" width="36" height="10" rx="2"/>
      <rect x="170" y="182" width="12" height="14"/>
      <rect x="175" y="170" width="4" height="14"/>
      ${Array.from({length:6}).map((_,i)=>`<rect x="158" y="${206+i*14}" width="36" height="4" rx="1" opacity=".5"/>`).join('')}
    </g>
    <g fill="#c09040" opacity=".55">
      <rect x="126" y="248" width="48" height="64"/>
      <path d="M118 252 L150 228 L182 252 Z"/>
      <rect x="136" y="284" width="28" height="28"/>
    </g>
    <g fill="#180e04">
      <circle cx="150" cy="300" r="5.5"/>
      <rect x="147" y="305" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#e0b050" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── Chaka · KwaZulu-Natal — rolling green hills, a Zulu warrior at dusk, an assegai silhouette ── */
  chaka: scene(`
    <defs>
      <linearGradient id="chkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c1018"/><stop offset=".36" stop-color="#1c2028"/>
        <stop offset=".64" stop-color="#504038"/><stop offset=".84" stop-color="#a07848"/>
        <stop offset="1" stop-color="#c89858"/>
      </linearGradient>
      <radialGradient id="chkSun" cx="72%" cy="62%" r="32%">
        <stop offset="0" stop-color="#e89030" stop-opacity=".6"/>
        <stop offset="1" stop-color="#e89030" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#chkSky)"/>
    ${stars(8, 449)}
    <rect width="300" height="450" fill="url(#chkSun)"/>
    <circle cx="216" cy="278" r="16" fill="#e89030" opacity=".75"/>
    <path d="M0 298 Q50 262 90 278 Q120 290 148 270 Q174 252 204 268 Q244 286 278 264 Q290 256 300 258 L300 450 L0 450 Z" fill="#487048" opacity=".65"/>
    <path d="M0 350 Q150 332 300 348 L300 450 L0 450 Z" fill="#386038"/>
    <path d="M0 400 Q150 384 300 398 L300 450 L0 450 Z" fill="#285028"/>
    <g fill="#1c1008" opacity=".88">
      <ellipse cx="134" cy="278" rx="16" ry="24"/>
      <circle cx="134" cy="260" r="12" fill="#c09870"/>
      <rect x="128" y="272" width="12" height="30" rx="2"/>
      <path d="M116 268 L128 274 L128 298 Q118 302 112 292 Z"/>
      <path d="M152 268 L140 274 L140 298 Q150 302 156 292 Z"/>
    </g>
    <g fill="#2a1808" opacity=".8">
      <rect x="138" y="188" width="4" height="106"/>
      <path d="M136 188 L140 172 L144 188 Z"/>
    </g>
    <g fill="#c09040" opacity=".5">
      <path d="M110 282 Q112 270 120 264 Q124 276 118 288 Z"/>
      <path d="M116 268 Q124 262 130 270"/>
    </g>
    <g fill="#100808">
      <circle cx="150" cy="290" r="5.5"/>
      <rect x="147" y="295" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 298 Q150 292 300 296" stroke="#c89858" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── Season of Migration to the North · Khartoum — the Nile at dusk, a village, a returning stranger ── */
  seasonmigration: scene(`
    <defs>
      <linearGradient id="smnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".36" stop-color="#201828"/>
        <stop offset=".64" stop-color="#603840"/><stop offset=".84" stop-color="#b07050"/>
        <stop offset="1" stop-color="#d09060"/>
      </linearGradient>
      <radialGradient id="smnSun" cx="58%" cy="62%" r="32%">
        <stop offset="0" stop-color="#e08040" stop-opacity=".6"/>
        <stop offset="1" stop-color="#e08040" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#smnSky)"/>
    ${stars(9, 451)}
    <rect width="300" height="450" fill="url(#smnSun)"/>
    <circle cx="174" cy="282" r="14" fill="#e09040" opacity=".72"/>
    <path d="M0 188 Q150 176 300 186 L300 320 Q150 308 0 320 Z" fill="#1c3848" opacity=".65"/>
    <path d="M0 310 Q150 298 300 308 L300 450 L0 450 Z" fill="#c09850"/>
    <path d="M0 360 Q150 348 300 358 L300 450 L0 450 Z" fill="#b08840"/>
    <path d="M0 410 Q150 400 300 408 L300 450 L0 450 Z" fill="#a07830"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${18+i*28} ${312+i%2*12} Q${28+i*28} ${298+i%2*10} ${38+i*28} ${312+i%2*10}" stroke="#c09850" stroke-width=".5" fill="#b08840" opacity=".5"/>`).join('')}
    <g fill="#0e1c28" opacity=".8">
      <rect x="54" y="214" width="72" height="98"/>
      <path d="M46 218 L90 186 L134 218 Z"/>
      <rect x="70" y="186" width="40" height="34"/>
      <path d="M90 182 Q100 168 110 182 Q100 176 90 182 Z" fill="#1c2c38"/>
    </g>
    ${[[58,234],[74,234],[98,234],[114,234],[58,268],[74,268]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#f0d060" opacity="${y<250?'.35':'.22'}"/>`).join('')}
    <path d="M0 188 Q150 182 300 186 M0 320 Q150 314 300 318" stroke="#2c4860" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#0c1008">
      <circle cx="150" cy="302" r="5.5"/>
      <rect x="147" y="307" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Nervous Conditions · Mutare — a mission school, Zimbabwe highlands, a girl's determined gaze ── */
  nervouscond: scene(`
    <defs>
      <linearGradient id="nvcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2808"/><stop offset=".4" stop-color="#2c4010"/>
        <stop offset=".7" stop-color="#506828"/><stop offset=".9" stop-color="#809840"/>
        <stop offset="1" stop-color="#a0b858"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nvcSky)"/>
    ${stars(5, 453)}
    <path d="M0 298 Q60 262 100 278 Q132 290 162 270 Q196 248 238 264 Q266 276 300 258 L300 450 L0 450 Z" fill="#506830" opacity=".6"/>
    <path d="M0 352 Q150 334 300 350 L300 450 L0 450 Z" fill="#405828"/>
    <path d="M0 402 Q150 386 300 400 L300 450 L0 450 Z" fill="#304820"/>
    <g fill="#2c2818">
      <rect x="82" y="196" width="136" height="104"/>
      <path d="M74 200 L150 162 L226 200 Z"/>
      <rect x="108" y="162" width="84" height="40"/>
      <rect x="106" y="200" width="88" height="8" fill="#483c20" opacity=".6"/>
    </g>
    ${[[86,220],[102,220],[164,220],[180,220],[86,256],[102,256],[164,256],[180,256]].map(([x,y])=>`<rect x="${x}" y="${y}" width="14" height="24" fill="#f0e898" opacity="${y<238?'.4':'.26'}"/>`).join('')}
    <g fill="#1c1808" opacity=".85">
      <circle cx="150" cy="280" r="10"/>
      <rect x="144" y="290" width="12" height="14"/>
      <path d="M132 284 L144 288 L144 302 Q136 306 130 298 Z"/>
      <path d="M168 284 L156 288 L156 302 Q164 306 170 298 Z"/>
    </g>
    <g fill="#c09870" opacity=".55">
      <ellipse cx="150" cy="272" rx="8" ry="10"/>
    </g>
    <g fill="#101008">
      <circle cx="150" cy="290" r="5.5"/>
      <rect x="147" y="295" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 298 Q150 292 300 296" stroke="#a0b858" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── My Sister, the Serial Killer · Lagos — neon Lagos at night, a hospital, two sisters ── */
  sisterserialkiller: scene(`
    <defs>
      <linearGradient id="sskSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#040408"/><stop offset=".38" stop-color="#08060c"/>
        <stop offset=".68" stop-color="#10081a"/><stop offset=".88" stop-color="#1c0c28"/>
        <stop offset="1" stop-color="#280e30"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sskSky)"/>
    ${stars(10, 455)}
    <g fill="#0c0810" opacity=".9">
      ${[18,58,100,146,194,240,274].map((x,i)=>`<rect x="${x}" y="${108+i%3*18}" width="${30+i%2*6}" height="${198-i%3*18}"/>`).join('')}
    </g>
    ${Array.from({length:20}).map((_,i)=>{const x=(i*44+8)%296,y=118+(i*32)%168,c=['#e02060','#c020a0','#2060e0','#20c080','#e0a020'][i%5]; return `<rect x="${x}" y="${y}" width="8" height="12" fill="${c}" opacity="${0.07+(i%4)*0.03}"/>`;}).join('')}
    <path d="M0 308 Q150 296 300 306 L300 450 L0 450 Z" fill="#100818"/>
    <path d="M0 358 Q150 346 300 356 L300 450 L0 450 Z" fill="#0c0610"/>
    <g fill="#c020a0" opacity=".18">
      <circle cx="150" cy="256" r="50"/>
    </g>
    <g fill="#0e0c14" opacity=".9">
      <circle cx="130" cy="258" r="10"/>
      <rect x="124" y="268" width="12" height="32" rx="1"/>
      <circle cx="170" cy="258" r="10"/>
      <rect x="164" y="268" width="12" height="32" rx="1"/>
    </g>
    <g fill="#c020a0" opacity=".5">
      <rect x="158" y="272" width="24" height="4" rx="1"/>
    </g>
    <g fill="#060408">
      <circle cx="150" cy="300" r="5.5"/>
      <rect x="147" y="305" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#280e30" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── 田園之秋 · Pingtung — rice paddies, banana fronds, a golden Taiwan autumn evening ── */
  tianyuanqiu: scene(`
    <defs>
      <linearGradient id="tyqSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2808"/><stop offset=".38" stop-color="#304010"/>
        <stop offset=".65" stop-color="#607828"/><stop offset=".86" stop-color="#b0a040"/>
        <stop offset="1" stop-color="#d0c060"/>
      </linearGradient>
      <radialGradient id="tyqSun" cx="72%" cy="58%" r="28%">
        <stop offset="0" stop-color="#ffe840" stop-opacity=".65"/>
        <stop offset="1" stop-color="#ffe840" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tyqSky)"/>
    ${stars(5, 415)}
    <rect width="300" height="450" fill="url(#tyqSun)"/>
    <circle cx="216" cy="260" r="16" fill="#ffe060" opacity=".8"/>
    <path d="M0 300 Q150 286 300 298 L300 450 L0 450 Z" fill="#587030"/>
    <path d="M0 350 Q150 336 300 348 L300 450 L0 450 Z" fill="#48602a"/>
    <path d="M0 400 Q150 388 300 398 L300 450 L0 450 Z" fill="#385020"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${24+i*28} ${302+i%2*10} Q${30+i*28} ${282+i%2*8} ${36+i*28} ${302+i%2*8}" stroke="#587030" stroke-width=".5" fill="#48602a" opacity=".55"/>`).join('')}
    <g fill="#2c4818" opacity=".85">
      ${[34,72,112].map((x,i)=>`
        <path d="M${x} ${270} Q${x-14} ${238} ${x-8} ${208} Q${x} ${220} ${x+8} ${208} Q${x+14} ${238} ${x} ${270}"/>
        <path d="M${x} ${270} Q${x+18} ${244} ${x+28} ${216} Q${x+24} ${228} ${x+36} ${220} Q${x+26} ${248} ${x} ${270}"/>
        <path d="M${x} ${270} Q${x-18} ${244} ${x-28} ${220} Q${x-22} ${232} ${x-36} ${226} Q${x-24} ${250} ${x} ${270}"/>
        <rect x="${x-3}" y="${270}" width="6" height="${30+i*4}" rx="1"/>
      `).join('')}
    </g>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${i*38+10} ${300} L${i*38+10} ${310} M${i*38+20} ${300} L${i*38+20} ${308}" stroke="#8aac40" stroke-width="1.5" opacity=".5"/>`).join('')}
    <g fill="#182008">
      <circle cx="150" cy="292" r="5.5"/>
      <rect x="147" y="297" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 300 Q150 294 300 298" stroke="#d0c060" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── Jamila · Kyrgyz steppe — mountains, harvest, a woman walking free at dusk ── */
  jamila: scene(`
    <defs>
      <linearGradient id="jmlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".36" stop-color="#202438"/>
        <stop offset=".65" stop-color="#604858"/><stop offset=".86" stop-color="#c08060"/>
        <stop offset="1" stop-color="#d8a878"/>
      </linearGradient>
      <radialGradient id="jmlSun" cx="60%" cy="66%" r="34%">
        <stop offset="0" stop-color="#ffb040" stop-opacity=".65"/>
        <stop offset="1" stop-color="#ffb040" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#jmlSky)"/>
    ${stars(9, 417)}
    <rect width="300" height="450" fill="url(#jmlSun)"/>
    <circle cx="180" cy="296" r="14" fill="#ffb840" opacity=".78"/>
    <path d="M0 278 Q40 244 80 256 Q110 266 130 248 Q156 228 184 242 Q220 260 260 238 Q278 228 300 232 L300 450 L0 450 Z" fill="#706848" opacity=".55"/>
    <path d="M0 330 Q150 314 300 328 L300 450 L0 450 Z" fill="#585838"/>
    <path d="M0 380 Q150 366 300 378 L300 450 L0 450 Z" fill="#484828"/>
    <path d="M0 278 Q40 244 80 256 Q110 266 130 248 Q156 228 184 242 Q220 260 260 238 Q278 228 300 232" stroke="#907858" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#382808" opacity=".75">
      <ellipse cx="136" cy="268" rx="18" ry="28"/>
      <ellipse cx="136" cy="244" rx="12" ry="16"/>
      <path d="M128 240 Q136 226 144 240"/>
      <path d="M118 264 Q108 278 110 296 Q124 292 128 276 Z" opacity=".8"/>
      <path d="M154 264 Q164 278 162 296 Q148 292 144 276 Z" opacity=".8"/>
    </g>
    <g fill="#d09060" opacity=".6">
      <rect x="120" y="238" width="32" height="6" rx="2"/>
      ${Array.from({length:4}).map((_,i)=>`<path d="M${122+i*8} 238 Q${124+i*8} 226 ${126+i*8} 218" stroke="#d09060" stroke-width="2" fill="none" opacity=".5"/>`).join('')}
    </g>
    <g fill="#201408">
      <circle cx="150" cy="272" r="5.5"/>
      <rect x="147" y="277" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Day Lasts More Than a Hundred Years · Kazakh steppe — a vast sky, a yurt, railway tracks ── */
  daylasts: scene(`
    <defs>
      <linearGradient id="dlcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c1428"/><stop offset=".4" stop-color="#182438"/>
        <stop offset=".7" stop-color="#304860"/><stop offset=".9" stop-color="#6080a0"/>
        <stop offset="1" stop-color="#8090b0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dlcSky)"/>
    ${stars(14, 419)}
    <path d="M0 304 Q150 292 300 302 L300 450 L0 450 Z" fill="#786848"/>
    <path d="M0 354 Q150 342 300 352 L300 450 L0 450 Z" fill="#685838"/>
    <path d="M0 404 Q150 394 300 402 L300 450 L0 450 Z" fill="#584828"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${18+i*30} ${306+i%2*12} Q${28+i*30} ${294+i%2*10} ${38+i*30} ${306+i%2*10}" stroke="#786848" stroke-width=".5" fill="#685838" opacity=".5"/>`).join('')}
    <g fill="#4a3818" opacity=".8">
      <path d="M106 278 Q150 240 194 278 L194 304 L106 304 Z"/>
      <rect x="106" y="278" width="88" height="26" rx="2"/>
      <circle cx="150" cy="278" r="8" fill="#5a4820"/>
      <rect x="140" y="290" width="20" height="14"/>
    </g>
    <g fill="#e8d080" opacity=".3">
      ${Array.from({length:5}).map((_,i)=>`<line x1="${108+i*4}" y1="${278}" x2="${108+i*4}" y2="${303}" stroke="#e8d080" stroke-width=".8" opacity=".3"/>`).join('')}
      ${Array.from({length:3}).map((_,i)=>`<line x1="${106}" y1="${282+i*7}" x2="${194}" y2="${282+i*7}" stroke="#e8d080" stroke-width=".5" opacity=".25"/>`).join('')}
    </g>
    <g fill="#201808">
      <rect x="0" y="298" width="300" height="6"/>
      <rect x="0" y="302" width="300" height="3" fill="#302818"/>
      ${Array.from({length:9}).map((_,i)=>`<rect x="${i*36+6}" y="294" width="24" height="4"/>`).join('')}
    </g>
    <g fill="#100c08">
      <circle cx="150" cy="290" r="5.5"/>
      <rect x="147" y="295" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Railway · Uzbek steppe — a dusty halt, a minaret, shimmering heat haze ── */
  therailway: scene(`
    <defs>
      <linearGradient id="trwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1408"/><stop offset=".38" stop-color="#2c2408"/>
        <stop offset=".66" stop-color="#705c20"/><stop offset=".88" stop-color="#b09030"/>
        <stop offset="1" stop-color="#d0b040"/>
      </linearGradient>
      <radialGradient id="trwHaze" cx="50%" cy="68%" r="50%">
        <stop offset="0" stop-color="#e0d080" stop-opacity=".25"/>
        <stop offset="1" stop-color="#e0d080" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#trwSky)"/>
    ${stars(6, 421)}
    <rect width="300" height="450" fill="url(#trwHaze)"/>
    <path d="M0 310 Q150 298 300 308 L300 450 L0 450 Z" fill="#c8b060"/>
    <path d="M0 360 Q150 348 300 358 L300 450 L0 450 Z" fill="#b8a050"/>
    <path d="M0 410 Q150 400 300 408 L300 450 L0 450 Z" fill="#a89040"/>
    <g fill="#1c1808">
      <rect x="206" y="168" width="18" height="144"/>
      <rect x="196" y="168" width="38" height="18" rx="2"/>
      <rect x="200" y="154" width="30" height="16"/>
      <rect x="206" y="138" width="18" height="18"/>
      <rect x="209" y="124" width="12" height="16"/>
      <rect x="212" y="108" width="6" height="18"/>
    </g>
    <g fill="#2a5080" opacity=".6">
      <path d="M196 168 Q215 156 234 168 L232 186 Q215 174 198 186 Z"/>
    </g>
    <g fill="#1c1808">
      <rect x="60" y="222" width="80" height="90"/>
      <path d="M52 226 L100 194 L148 226 Z"/>
      <rect x="74" y="194" width="52" height="34"/>
    </g>
    ${[[64,246],[80,246],[64,278],[80,278],[108,246],[124,246]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#e8c050" opacity="${y<260?'.35':'.22'}"/>`).join('')}
    <g fill="#140e04">
      <rect x="0" y="304" width="300" height="6"/>
      <rect x="0" y="308" width="300" height="3" fill="#201808"/>
      ${Array.from({length:9}).map((_,i)=>`<rect x="${i*36+6}" y="300" width="24" height="4"/>`).join('')}
    </g>
    <g fill="#100804">
      <circle cx="150" cy="296" r="5.5"/>
      <rect x="147" y="301" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Samarkand · Uzbekistan — blue-tiled domes of the Registan, Silk Road sky ── */
  samarkand: scene(`
    <defs>
      <linearGradient id="smkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060c18"/><stop offset=".36" stop-color="#0c1828"/>
        <stop offset=".66" stop-color="#183060"/><stop offset=".88" stop-color="#3060a0"/>
        <stop offset="1" stop-color="#4878c0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#smkSky)"/>
    ${stars(13, 423)}
    <circle cx="150" cy="176" r="50" fill="#2060a0" opacity=".5"/>
    <circle cx="150" cy="176" r="36" fill="#2870b0" opacity=".6"/>
    <circle cx="150" cy="176" r="24" fill="#3888c8" opacity=".7"/>
    <path d="M138 176 Q150 148 162 176 Q162 200 150 208 Q138 200 138 176 Z" fill="#40a0d8" opacity=".8"/>
    <g fill="#0e1c2c" opacity=".85">
      <rect x="60" y="228" width="180" height="84"/>
      <path d="M52 232 L150 178 L248 232 Z"/>
      ${[64,106,150,194,232].map((x,i)=>`<rect x="${x}" y="${228}" width="28" height="${84}" fill="#101e2e" opacity=".3"/>`).join('')}
      ${[64,106,194,232].map(x=>`<path d="M${x} 228 Q${x+14} 212 ${x+28} 228 Z" fill="#1a3050" opacity=".6"/>`).join('')}
    </g>
    ${[[68,252],[84,252],[68,288],[84,288],[106,252],[120,252],[178,252],[194,252],[178,288],[194,288],[208,252],[222,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#e8d060" opacity="${y<270?'.4':'.28'}"/>`).join('')}
    <g fill="#2870b0" opacity=".45">
      ${[[90,228],[150,190],[210,228]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="18"/>`).join('')}
    </g>
    <path d="M0 312 Q150 300 300 310 L300 450 L0 450 Z" fill="#0c1828"/>
    <g fill="#060c14">
      <circle cx="150" cy="304" r="5.5"/>
      <rect x="147" y="309" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Where We Once Belonged · Samoa — fale, frangipani, tropical Pacific coast ── */
  weoncbelonged: scene(`
    <defs>
      <linearGradient id="wobSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1828"/><stop offset=".3" stop-color="#1a3050"/>
        <stop offset=".6" stop-color="#2a7080"/><stop offset=".82" stop-color="#48b8c0"/>
        <stop offset="1" stop-color="#60c8c8"/>
      </linearGradient>
      <radialGradient id="wobSun" cx="72%" cy="34%" r="26%">
        <stop offset="0" stop-color="#f8d060" stop-opacity=".6"/>
        <stop offset="1" stop-color="#f8d060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wobSky)"/>
    <rect width="300" height="450" fill="url(#wobSun)"/>
    <circle cx="216" cy="162" r="18" fill="#f8e060" opacity=".72"/>
    <path d="M0 286 Q150 270 300 282 L300 450 L0 450 Z" fill="#38a0b0" opacity=".65"/>
    <path d="M0 330 Q150 316 300 328 L300 450 L0 450 Z" fill="#2c7060"/>
    <path d="M0 384 Q150 370 300 382 L300 450 L0 450 Z" fill="#1c5040"/>
    <g fill="#1a4830" opacity=".85">
      <path d="M150 204 Q180 172 220 190 Q200 198 210 214 Q188 206 178 222 Q164 210 150 204 Z"/>
      <path d="M150 204 Q120 172 80 190 Q100 198 90 214 Q112 206 122 222 Q136 210 150 204 Z"/>
    </g>
    <g fill="#c88040" opacity=".85">
      <polygon points="90,280 210,280 220,238 80,238"/>
      <rect x="90" y="278" width="120" height="6" rx="1"/>
    </g>
    <g fill="#a06030" opacity=".7">
      ${Array.from({length:8}).map((_,i)=>`<rect x="${94+i*15}" y="${242}" width="3" height="${38}" opacity=".8"/>`).join('')}
    </g>
    <rect x="80" y="238" width="140" height="8" fill="#b87030" opacity=".8"/>
    ${[[86,290],[100,294],[188,292],[202,288]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="#f0a0c0" opacity=".7"/>`).join('')}
    <g fill="#0c1820">
      <circle cx="150" cy="280" r="5.5"/>
      <rect x="147" y="285" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Frangipani · Papeete, Tahiti — harbour, blooms, Tahitian warmth ── */
  frangipani: scene(`
    <defs>
      <linearGradient id="franSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080e18"/><stop offset=".32" stop-color="#102040"/>
        <stop offset=".6" stop-color="#1c5878"/><stop offset=".82" stop-color="#3090b8"/>
        <stop offset="1" stop-color="#50b0c8"/>
      </linearGradient>
      <radialGradient id="franSun" cx="35%" cy="30%" r="28%">
        <stop offset="0" stop-color="#f8c040" stop-opacity=".65"/>
        <stop offset="1" stop-color="#f8c040" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#franSky)"/>
    ${stars(4, 481)}
    <rect width="300" height="450" fill="url(#franSun)"/>
    <circle cx="105" cy="148" r="16" fill="#f8d840" opacity=".7"/>
    <path d="M0 272 Q150 258 300 270 L300 450 L0 450 Z" fill="#2888b8" opacity=".6"/>
    <path d="M0 316 Q150 302 300 314 L300 450 L0 450 Z" fill="#205870"/>
    <path d="M0 370 Q150 358 300 368 L300 450 L0 450 Z" fill="#183c4c"/>
    <g fill="#c0b080" opacity=".75">
      <rect x="76" y="192" width="148" height="82"/>
      <path d="M68 196 L150 162 L232 196 Z"/>
      <rect x="100" y="162" width="100" height="36"/>
    </g>
    ${[[80,210],[96,210],[80,246],[96,246],[188,210],[204,210],[188,246],[204,246],[120,210],[136,210]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="24" fill="#f0e898" opacity="${y<230?'.48':'.32'}"/>`).join('')}
    <g fill="#e8b0d0" opacity=".8">
      ${[60,88,192,224,248].map((x,i)=>`<circle cx="${x}" cy="${260+i%2*12}" r="${14+i%3*3}"/><circle cx="${x+8}" cy="${270+i%2*8}" r="${10+i%3*2}" opacity=".7"/>`).join('')}
    </g>
    <g fill="#0c1420">
      <circle cx="150" cy="264" r="5.5"/>
      <rect x="147" y="269" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Crocodile · Gulf Province, PNG — jungle river, mangroves, starlit night ── */
  thecrocodile: scene(`
    <defs>
      <linearGradient id="crocSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020408"/><stop offset=".38" stop-color="#04080c"/>
        <stop offset=".65" stop-color="#040e0a"/><stop offset="1" stop-color="#081408"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#crocSky)"/>
    ${stars(14, 483)}
    <path d="M0 284 Q150 270 300 282 L300 450 L0 450 Z" fill="#081808" opacity=".9"/>
    <path d="M0 288 Q60 282 100 278 Q120 276 140 272 Q160 268 180 274 Q220 284 260 276 Q280 272 300 268 L300 292 Q270 300 240 294 Q200 288 170 294 Q150 298 130 294 Q100 288 60 296 Q28 302 0 294 Z" fill="#0c2810" opacity=".9"/>
    <path d="M0 364 Q150 350 300 362 L300 450 L0 450 Z" fill="#062008"/>
    <path d="M0 412 Q150 400 300 410 L300 450 L0 450 Z" fill="#041808"/>
    <g fill="#0a2008" opacity=".9">
      ${[18,52,86,128,172,210,248,278].map((x,i)=>`<path d="M${x} 288 Q${x+10} ${258+i%3*12} ${x+20} 286 Q${x+14} ${274+i%3*8} ${x+8} 284 Z"/>`).join('')}
    </g>
    <path d="M88 300 Q110 292 132 300 Q110 304 88 300 Z" fill="#203828" opacity=".7"/>
    <ellipse cx="110" cy="299" rx="4" ry="2" fill="#203828" opacity=".7"/>
    <ellipse cx="130" cy="298" rx="4" ry="2.5" fill="#203828" opacity=".7"/>
    <g fill="#182028">
      <circle cx="150" cy="286" r="5.5"/>
      <rect x="147" y="291" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Color of Air · Hilo, Hawaii — Mauna Loa erupting at night, cane fields ── */
  colorofair: scene(`
    <defs>
      <linearGradient id="coaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020406"/><stop offset=".3" stop-color="#08060a"/>
        <stop offset=".55" stop-color="#180808"/><stop offset=".75" stop-color="#381008"/>
        <stop offset="1" stop-color="#602010"/>
      </linearGradient>
      <radialGradient id="coaGlow" cx="50%" cy="40%" r="36%">
        <stop offset="0" stop-color="#e04010" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e04010" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#coaSky)"/>
    ${stars(12, 485)}
    <rect width="300" height="450" fill="url(#coaGlow)"/>
    <path d="M50 264 Q150 194 250 264 L260 450 L40 450 Z" fill="#280808" opacity=".9"/>
    <path d="M80 264 Q150 214 220 264 L225 450 L75 450 Z" fill="#1e0606" opacity=".9"/>
    <path d="M100 264 Q150 228 200 264 L204 450 L96 450 Z" fill="#180404"/>
    <path d="M130 242 Q150 224 170 242 Q162 248 150 244 Q138 248 130 242 Z" fill="#e84020" opacity=".6"/>
    <path d="M140 234 Q150 218 160 234 Q155 240 150 238 Q145 240 140 234 Z" fill="#f06030" opacity=".5"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${146+i*3} ${228-i*2} Q${148+i*3} ${212-i*3} ${150+i*3} ${224-i*2}" stroke="#f08040" stroke-width="${1+i*.3}" fill="none" opacity="${0.15+i*.05}"/>`).join('')}
    <path d="M0 322 Q150 308 300 320 L300 450 L0 450 Z" fill="#101008" opacity=".9"/>
    <path d="M0 372 Q150 360 300 370 L300 450 L0 450 Z" fill="#0a0c08"/>
    <g fill="#182010" opacity=".6">
      ${Array.from({length:14}).map((_,i)=>`<path d="M${10+i*22} ${320} Q${16+i*22} ${300+i%3*8} ${22+i*22} ${318}" stroke="#202810" stroke-width="1.2" fill="none" opacity=".6"/>`).join('')}
    </g>
    <g fill="#0c100c">
      <circle cx="150" cy="314" r="5.5"/>
      <rect x="147" y="319" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Last Aloha · Honolulu — Iolani Palace, palms, Diamond Head, dusk ── */
  lastaloha: scene(`
    <defs>
      <linearGradient id="lalSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1220"/><stop offset=".34" stop-color="#182440"/>
        <stop offset=".65" stop-color="#2c6080"/><stop offset=".84" stop-color="#5098b8"/>
        <stop offset="1" stop-color="#68b0c4"/>
      </linearGradient>
      <radialGradient id="lalSun" cx="64%" cy="35%" r="26%">
        <stop offset="0" stop-color="#f0c858" stop-opacity=".6"/>
        <stop offset="1" stop-color="#f0c858" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lalSky)"/>
    ${stars(5, 487)}
    <rect width="300" height="450" fill="url(#lalSun)"/>
    <circle cx="192" cy="168" r="15" fill="#f8e060" opacity=".7"/>
    <path d="M0 302 Q150 290 300 300 L300 450 L0 450 Z" fill="#2878a8" opacity=".6"/>
    <path d="M0 348 Q150 336 300 346 L300 450 L0 450 Z" fill="#205870"/>
    <path d="M0 400 Q150 388 300 398 L300 450 L0 450 Z" fill="#183048"/>
    <path d="M202 248 Q218 222 234 248 L246 306 L190 306 Z" fill="#604828" opacity=".8"/>
    <g fill="#d0b870" opacity=".78">
      <rect x="68" y="210" width="130" height="94"/>
      <path d="M60 214 L133 176 L206 214 Z"/>
      <rect x="92" y="176" width="82" height="40"/>
      ${Array.from({length:3}).map((_,i)=>`<rect x="68" y="${210+i*32}" width="130" height="5" fill="#b89850" opacity=".4"/>`).join('')}
    </g>
    ${[[72,228],[88,228],[72,264],[88,264],[156,228],[172,228],[156,264],[172,264],[108,228],[124,228],[108,264],[124,264]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="24" fill="#f8f0c8" opacity="${y<250?'.42':'.28'}"/>`).join('')}
    <g fill="#284820" opacity=".75">
      ${[44,68,208,232].map((x,i)=>`<rect x="${x}" y="${268+i%2*8}" width="4" height="${36-i%2*8}" rx="1"/><ellipse cx="${x+2}" cy="${252+i%2*6}" rx="${16+i%2*4}" ry="${18+i%2*4}"/>`).join('')}
    </g>
    <g fill="#0c1820">
      <circle cx="150" cy="294" r="5.5"/>
      <rect x="147" y="299" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Life of Pi · Pacific Ocean — a lifeboat, a Bengal tiger, stars and endless sea ── */
  lifeofpi: scene(`
    <defs>
      <linearGradient id="lopSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020408"/><stop offset=".28" stop-color="#040c14"/>
        <stop offset=".55" stop-color="#061828"/><stop offset=".78" stop-color="#0c3050"/>
        <stop offset="1" stop-color="#1050a0"/>
      </linearGradient>
      <radialGradient id="lopMoon" cx="75%" cy="22%" r="22%">
        <stop offset="0" stop-color="#c0d8f8" stop-opacity=".7"/>
        <stop offset="1" stop-color="#c0d8f8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lopSky)"/>
    ${stars(20, 489)}
    <rect width="300" height="450" fill="url(#lopMoon)"/>
    <circle cx="224" cy="102" r="12" fill="#d8ecf8" opacity=".78"/>
    <path d="M0 268 Q60 256 90 250 Q120 244 150 252 Q180 260 210 250 Q240 240 270 250 Q286 254 300 248 L300 270 Q270 278 240 270 Q210 262 180 272 Q160 278 140 272 Q110 266 80 274 Q46 280 0 274 Z" fill="#102848" opacity=".82"/>
    <path d="M0 316 Q150 302 300 314 L300 450 L0 450 Z" fill="#081e42"/>
    <path d="M0 374 Q150 362 300 372 L300 450 L0 450 Z" fill="#040e24"/>
    <g fill="#e08830" opacity=".72">
      <ellipse cx="150" cy="260" rx="40" ry="9"/>
      <rect x="116" y="250" width="68" height="12" rx="3"/>
    </g>
    <g fill="#c06818" opacity=".6">
      <rect x="120" y="248" width="4" height="14"/>
      <rect x="176" y="248" width="4" height="14"/>
    </g>
    <g fill="#c87030" opacity=".85">
      <ellipse cx="150" cy="248" rx="18" ry="11"/>
      <path d="M136 244 Q150 234 164 244 Q157 248 150 246 Q143 248 136 244 Z"/>
      ${Array.from({length:6}).map((_,i)=>`<path d="M${135+i*6} ${248} Q${136+i*6} ${241} ${137+i*6} ${247}" stroke="#a05020" stroke-width=".8" fill="none"/>`).join('')}
    </g>
    <g fill="#0a1828">
      <circle cx="150" cy="252" r="5.5"/>
      <rect x="147" y="257" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── A History of Madagascar · Antananarivo — baobabs, highland plateau, evening sky ── */
  histmadagascar: scene(`
    <defs>
      <linearGradient id="hmgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0c14"/><stop offset=".3" stop-color="#14101c"/>
        <stop offset=".58" stop-color="#281828"/><stop offset=".8" stop-color="#602030"/>
        <stop offset="1" stop-color="#a03828"/>
      </linearGradient>
      <radialGradient id="hmgGlow" cx="38%" cy="72%" r="32%">
        <stop offset="0" stop-color="#f06828" stop-opacity=".5"/>
        <stop offset="1" stop-color="#f06828" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hmgSky)"/>
    ${stars(10, 491)}
    <rect width="300" height="450" fill="url(#hmgGlow)"/>
    <path d="M0 316 Q150 302 300 314 L300 450 L0 450 Z" fill="#3c2010"/>
    <path d="M0 366 Q150 354 300 364 L300 450 L0 450 Z" fill="#2c1808"/>
    <path d="M0 416 Q150 404 300 414 L300 450 L0 450 Z" fill="#1c1006"/>
    <g fill="#281408" opacity=".9">
      ${[44,98,152,206,256].map((x,i)=>`
        <rect x="${x}" y="${208+i%2*24}" width="${8+i%3*2}" height="${108-i%2*24}" rx="${4+i%3}"/>
        <ellipse cx="${x+4+i%3}" cy="${200+i%2*22}" rx="${18+i%3*4}" ry="${22+i%3*4}"/>
        <ellipse cx="${x+4+i%3}" cy="${188+i%2*18}" rx="${14+i%3*3}" ry="${16+i%3*3}" opacity=".8"/>
        <ellipse cx="${x+4+i%3}" cy="${178+i%2*14}" rx="${10+i%3*2}" ry="${10+i%3*2}" opacity=".6"/>
      `).join('')}
    </g>
    <path d="M0 316 Q60 308 100 312 Q150 316 200 310 Q240 306 300 312" stroke="#5c3018" stroke-width=".6" fill="none" opacity=".5"/>
    <g fill="#0c0808">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Sloth Lemur's Song · Andasibe — a lemur in the rainforest canopy, mist ── */
  slothlemur: scene(`
    <defs>
      <linearGradient id="slsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020608"/><stop offset=".3" stop-color="#040c0a"/>
        <stop offset=".6" stop-color="#061410"/><stop offset=".85" stop-color="#0a2018"/>
        <stop offset="1" stop-color="#102818"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#slsSky)"/>
    ${stars(8, 493)}
    <path d="M0 292 Q150 278 300 290 L300 450 L0 450 Z" fill="#081808"/>
    <path d="M0 342 Q150 330 300 340 L300 450 L0 450 Z" fill="#061408"/>
    <path d="M0 402 Q150 390 300 400 L300 450 L0 450 Z" fill="#040e06"/>
    <g fill="#0a2010" opacity=".9">
      ${[10,46,82,118,160,196,232,266].map((x,i)=>`
        <rect x="${x}" y="${200+i%3*18}" width="${5+i%2*3}" height="${92-i%3*18}" rx="2"/>
        <path d="M${x-14+i%2*4} ${200+i%3*16} Q${x+2} ${160+i%3*14} ${x+18-i%2*4} ${196+i%3*14}" fill="#0c2810" opacity=".8"/>
        <path d="M${x-10+i%2*3} ${218+i%3*10} Q${x+2} ${190+i%3*8} ${x+14-i%2*3} ${216+i%3*8}" fill="#0e3012" opacity=".7"/>
      `).join('')}
    </g>
    <ellipse cx="152" cy="182" rx="20" ry="16" fill="#3c2818" opacity=".85"/>
    <ellipse cx="152" cy="178" rx="14" ry="12" fill="#4c3420" opacity=".9"/>
    <circle cx="146" cy="176" r="4" fill="#f0f0e8" opacity=".9"/>
    <circle cx="158" cy="176" r="4" fill="#f0f0e8" opacity=".9"/>
    <circle cx="146" cy="176" r="2" fill="#0c0808"/>
    <circle cx="158" cy="176" r="2" fill="#0c0808"/>
    <path d="M148 184 Q152 188 156 184" stroke="#3c2010" stroke-width="1" fill="none" opacity=".7"/>
    <path d="M138 168 Q140 158 148 162" stroke="#3c2010" stroke-width="2" fill="none" opacity=".6"/>
    <path d="M166 168 Q164 158 156 162" stroke="#3c2010" stroke-width="2" fill="none" opacity=".6"/>
    <path d="M120 196 Q136 186 152 194 Q168 186 184 196" stroke="#1a4020" stroke-width="1.2" fill="none" opacity=".5"/>
    <g fill="#060c08">
      <circle cx="150" cy="284" r="5.5"/>
      <rect x="147" y="289" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Antipode · Ranomafana — rainforest undergrowth, poison dart frogs, field science ── */
  antipode: scene(`
    <defs>
      <linearGradient id="antpSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020408"/><stop offset=".3" stop-color="#040808"/>
        <stop offset=".6" stop-color="#060e08"/><stop offset=".85" stop-color="#081808"/>
        <stop offset="1" stop-color="#0c2010"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#antpSky)"/>
    ${stars(6, 495)}
    <path d="M0 302 Q150 288 300 300 L300 450 L0 450 Z" fill="#061008"/>
    <path d="M0 356 Q150 344 300 354 L300 450 L0 450 Z" fill="#040c06"/>
    <path d="M0 412 Q150 400 300 410 L300 450 L0 450 Z" fill="#020804"/>
    <g fill="#071208" opacity=".9">
      ${[8,38,68,104,140,176,212,248,278].map((x,i)=>`
        <rect x="${x}" y="${180+i%4*14}" width="${4+i%3*2}" height="${122-i%4*14}" rx="2"/>
        <path d="M${x-16+i%2*6} ${192+i%3*10} Q${x} ${158+i%3*8} ${x+20-i%2*6} ${188+i%3*10}" fill="#091408" opacity=".75"/>
        <path d="M${x-12+i%2*4} ${220+i%3*8} Q${x} ${196+i%3*6} ${x+16-i%2*4} ${218+i%3*8}" fill="#0a1809" opacity=".7"/>
        <path d="M${x-8} ${248+i%3*6} Q${x} ${228+i%3*4} ${x+12} ${246+i%3*6}" fill="#0c1a0a" opacity=".65"/>
      `).join('')}
    </g>
    <g opacity=".88">
      <ellipse cx="106" cy="274" rx="14" ry="8" fill="#1a6820"/>
      <ellipse cx="100" cy="270" rx="8" ry="5" fill="#e04018"/>
      <circle cx="96" cy="268" r="2.5" fill="#101008"/>
      <circle cx="104" cy="268" r="2.5" fill="#101008"/>
      <ellipse cx="178" cy="284" rx="12" ry="7" fill="#1a6820"/>
      <ellipse cx="172" cy="280" rx="7" ry="4.5" fill="#d83010"/>
      <circle cx="169" cy="279" r="2" fill="#101008"/>
      <circle cx="175" cy="279" r="2" fill="#101008"/>
    </g>
    <g fill="#050c06">
      <circle cx="150" cy="294" r="5.5"/>
      <rect x="147" y="299" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Noli Me Tangere · Manila — Spanish colonial church, torch-lit plaza, revolution's eve ── */
  nolimetangere: scene(`
    <defs>
      <linearGradient id="nliSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080410"/><stop offset=".28" stop-color="#14081c"/>
        <stop offset=".55" stop-color="#381020"/><stop offset=".76" stop-color="#782030"/>
        <stop offset="1" stop-color="#c03828"/>
      </linearGradient>
      <radialGradient id="nliGlow" cx="50%" cy="78%" r="35%">
        <stop offset="0" stop-color="#f07020" stop-opacity=".6"/>
        <stop offset="1" stop-color="#f07020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nliSky)"/>
    ${stars(8, 497)}
    <rect width="300" height="450" fill="url(#nliGlow)"/>
    <g fill="#c8a060" opacity=".82">
      <rect x="96" y="168" width="108" height="148"/>
      <path d="M88 172 L150 126 L212 172 Z"/>
      <rect x="120" y="126" width="60" height="48"/>
      <rect x="136" y="96" width="28" height="34"/>
      <rect x="146" y="72" width="8" height="28"/>
      <path d="M144 74 Q150 64 156 74 L156 80 L144 80 Z"/>
      ${Array.from({length:3}).map((_,i)=>`<rect x="96" y="${168+i*50}" width="108" height="4" fill="#a08040" opacity=".4"/>`).join('')}
    </g>
    ${[[100,192],[116,192],[100,240],[116,240],[178,192],[194,192],[178,240],[194,240],[136,192],[152,192],[136,240],[152,240]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="28" fill="#f8d870" opacity="${y<220?'.45':'.3'}"/>`).join('')}
    <g fill="#a07830" opacity=".6">
      <rect x="138" y="306" width="24" height="10" rx="2"/>
      <rect x="144" y="294" width="12" height="14"/>
    </g>
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#281008"/>
    <path d="M0 370 Q150 358 300 368 L300 450 L0 450 Z" fill="#1c0a06"/>
    <g fill="#180808" opacity=".75">
      ${[30,68,210,252].map((x,i)=>`<ellipse cx="${x}" cy="${310+i%2*8}" rx="${18+i%2*4}" ry="${22+i%2*4}"/><rect x="${x-3}" y="${330+i%2*8}" width="6" height="${20-i%2*4}" rx="2"/>`).join('')}
    </g>
    <g fill="#0c0810">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Woman Who Had Two Navels · Manila — layered colonial memory, a woman, the bay ── */
  twonavels: scene(`
    <defs>
      <linearGradient id="twnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#04060e"/><stop offset=".32" stop-color="#080c1c"/>
        <stop offset=".6" stop-color="#102038"/><stop offset=".82" stop-color="#284870"/>
        <stop offset="1" stop-color="#3868a0"/>
      </linearGradient>
      <radialGradient id="twnMoon" cx="68%" cy="28%" r="24%">
        <stop offset="0" stop-color="#d0c8f0" stop-opacity=".65"/>
        <stop offset="1" stop-color="#d0c8f0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#twnSky)"/>
    ${stars(10, 499)}
    <rect width="300" height="450" fill="url(#twnMoon)"/>
    <circle cx="204" cy="136" r="14" fill="#e0d8f4" opacity=".72"/>
    <path d="M0 288 Q150 274 300 286 L300 450 L0 450 Z" fill="#183060" opacity=".7"/>
    <path d="M0 334 Q150 322 300 332 L300 450 L0 450 Z" fill="#102040"/>
    <path d="M0 390 Q150 378 300 388 L300 450 L0 450 Z" fill="#081428"/>
    <g fill="#c8b880" opacity=".7">
      <rect x="72" y="196" width="156" height="94"/>
      <path d="M64 200 L150 164 L236 200 Z"/>
      <rect x="102" y="164" width="96" height="38"/>
      ${Array.from({length:3}).map((_,i)=>`<rect x="72" y="${196+i*32}" width="156" height="4" fill="#a89860" opacity=".4"/>`).join('')}
    </g>
    ${[[76,214],[92,214],[76,250],[92,250],[202,214],[218,214],[202,250],[218,250],[116,214],[132,214],[152,214],[168,214]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="26" fill="#f0e8b0" opacity="${y<235?'.42':'.28'}"/>`).join('')}
    <g fill="#c8a870" opacity=".55">
      <rect x="64" y="196" width="172" height="7"/>
      <rect x="64" y="288" width="172" height="7"/>
    </g>
    <g fill="#d0b8a0" opacity=".6">
      <ellipse cx="150" cy="178" rx="14" ry="18"/>
      <ellipse cx="150" cy="166" rx="10" ry="10"/>
      <path d="M138 178 Q150 190 162 178" stroke="#b89880" stroke-width="1" fill="none" opacity=".7"/>
    </g>
    <g fill="#080c18">
      <circle cx="150" cy="280" r="5.5"/>
      <rect x="147" y="285" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Frankenstein in Baghdad · Baghdad — rubble streets, a monstrous assembled figure, smoke ── */
  frankbaghdad: scene(`
    <defs>
      <linearGradient id="fkbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#040206"/><stop offset=".3" stop-color="#0a0408"/>
        <stop offset=".58" stop-color="#200808"/><stop offset=".8" stop-color="#401010"/>
        <stop offset="1" stop-color="#601818"/>
      </linearGradient>
      <radialGradient id="fkbFire" cx="50%" cy="75%" r="40%">
        <stop offset="0" stop-color="#e06010" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e06010" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fkbSky)"/>
    ${stars(6, 501)}
    <rect width="300" height="450" fill="url(#fkbFire)"/>
    <g fill="#181010" opacity=".88">
      ${[0,44,88,128,172,216,256].map((x,i)=>`
        <rect x="${x}" y="${196+i%3*18}" width="${38+i%2*8}" height="${114-i%3*18}"/>
        <path d="M${x} ${196+i%3*18} L${x+20+i%2*4} ${164+i%3*14} L${x+38+i%2*8} ${196+i%3*18} Z"/>
        ${i%2===0?`<rect x="${x+8}" y="${196+i%3*18}" width="10" height="${114-i%3*18}" fill="#201410" opacity=".3"/>`:''}
      `).join('')}
    </g>
    <g fill="#0c0808" opacity=".7">
      ${Array.from({length:8}).map((_,i)=>`<rect x="${20+i*34}" y="${288+i%3*14}" width="${18+i%2*6}" height="${22+i%2*8}" rx="1" opacity=".8"/>`).join('')}
    </g>
    <g fill="#301808" opacity=".75">
      <ellipse cx="150" cy="256" rx="22" ry="38"/>
      <ellipse cx="150" cy="232" rx="16" ry="18"/>
      <path d="M132 256 Q120 242 128 232 Q136 224 150 228 Q164 224 172 232 Q180 242 168 256 Z" fill="#281408" opacity=".8"/>
      <path d="M138 232 Q134 222 138 218" stroke="#381808" stroke-width="2" fill="none"/>
      <path d="M162 232 Q166 222 162 218" stroke="#381808" stroke-width="2" fill="none"/>
      <circle cx="143" cy="230" r="3" fill="#0c0808"/>
      <circle cx="157" cy="230" r="3" fill="#0c0808"/>
    </g>
    <g fill="#0c0808">
      <circle cx="150" cy="294" r="5.5"/>
      <rect x="147" y="299" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── In the Country of Men · Tripoli — whitewashed walls, Mediterranean glare, a child at a gate ── */
  countryofmen: scene(`
    <defs>
      <linearGradient id="comSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1020"/><stop offset=".32" stop-color="#183060"/>
        <stop offset=".62" stop-color="#3478b0"/><stop offset=".82" stop-color="#68a8d0"/>
        <stop offset="1" stop-color="#88c0d8"/>
      </linearGradient>
      <radialGradient id="comSun" cx="62%" cy="28%" r="28%">
        <stop offset="0" stop-color="#f8e060" stop-opacity=".7"/>
        <stop offset="1" stop-color="#f8e060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#comSky)"/>
    ${stars(4, 503)}
    <rect width="300" height="450" fill="url(#comSun)"/>
    <circle cx="186" cy="138" r="20" fill="#f8f0a0" opacity=".72"/>
    <path d="M0 300 Q150 286 300 298 L300 450 L0 450 Z" fill="#c8c0a8" opacity=".8"/>
    <path d="M0 354 Q150 342 300 352 L300 450 L0 450 Z" fill="#b8b098"/>
    <path d="M0 406 Q150 396 300 404 L300 450 L0 450 Z" fill="#a8a088"/>
    <g fill="#e8e0c8" opacity=".85">
      <rect x="58" y="178" width="184" height="124"/>
      <rect x="48" y="178" width="204" height="10" fill="#d8d0b8" opacity=".6"/>
      <rect x="68" y="296" width="164" height="10" fill="#d8d0b8" opacity=".5"/>
      ${Array.from({length:5}).map((_,i)=>`<rect x="58" y="${178+i*26}" width="184" height="3" fill="#d0c8b0" opacity=".35"/>`).join('')}
    </g>
    ${[[62,196],[78,196],[62,232],[78,232],[196,196],[212,196],[196,232],[212,232],[112,196],[128,196],[148,196],[164,196]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="26" fill="#a0c8e8" opacity="${y<220?'.52':'.36'}"/>`).join('')}
    <g fill="#604820" opacity=".7">
      <rect x="130" y="234" width="40" height="62"/>
      <path d="M126 238 Q150 224 174 238 Z"/>
      <rect x="144" y="258" width="12" height="38" fill="#503818" opacity=".9"/>
    </g>
    <g fill="#503010" opacity=".8">
      <circle cx="144" cy="254" r="6"/>
      <rect x="140" y="256" width="8" height="40" rx="1"/>
      <path d="M134 262 Q140 256 144 262"/>
    </g>
    <g fill="#0c1018">
      <circle cx="150" cy="292" r="5.5"/>
      <rect x="147" y="297" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Enter Ghost · Haifa — hillside terraces, the Mediterranean, an outdoor stage ── */
  enterghost: scene(`
    <defs>
      <linearGradient id="engSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".3" stop-color="#0e1428"/>
        <stop offset=".6" stop-color="#183868"/><stop offset=".82" stop-color="#3870a8"/>
        <stop offset="1" stop-color="#5898c0"/>
      </linearGradient>
      <radialGradient id="engMoon" cx="28%" cy="25%" r="22%">
        <stop offset="0" stop-color="#d8e8f8" stop-opacity=".65"/>
        <stop offset="1" stop-color="#d8e8f8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#engSky)"/>
    ${stars(12, 505)}
    <rect width="300" height="450" fill="url(#engMoon)"/>
    <circle cx="84" cy="124" r="13" fill="#e8f0f8" opacity=".72"/>
    <path d="M0 272 Q150 258 300 270 L300 450 L0 450 Z" fill="#2858a0" opacity=".6"/>
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#203868"/>
    <path d="M0 378 Q150 366 300 376 L300 450 L0 450 Z" fill="#182840"/>
    <g fill="#c8c0a0" opacity=".78">
      ${[[52,196],[90,180],[130,194],[170,178],[210,192],[250,176]].map(([x,y],i)=>`
        <rect x="${x}" y="${y}" width="${34+i%2*8}" height="${76-i%2*10}"/>
        <path d="M${x-4} ${y+4} L${x+17+i%2*4} ${y-16} L${x+38+i%2*8} ${y+4} Z"/>
      `).join('')}
    </g>
    <g fill="#304820" opacity=".75">
      ${[40,76,200,240].map((x,i)=>`<ellipse cx="${x}" cy="${256+i%2*8}" rx="${16+i%2*4}" ry="${20+i%2*4}"/><rect x="${x-2}" y="${272+i%2*8}" width="4" height="${14-i%2*4}" rx="1"/>`).join('')}
    </g>
    <g fill="#c8a060" opacity=".6">
      <rect x="108" y="254" width="84" height="18" rx="2"/>
      <rect x="112" y="250" width="76" height="6" rx="1"/>
    </g>
    <g fill="#e8e0d0" opacity=".55">
      <rect x="138" y="238" width="8" height="18"/>
      <rect x="154" y="240" width="8" height="16"/>
    </g>
    <g fill="#080e18">
      <circle cx="150" cy="264" r="5.5"/>
      <rect x="147" y="269" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── The Yacoubian Building · Cairo — art deco facade, lit windows, rooftop Cairo ── */
  yacoubianbuilding: scene(`
    <defs>
      <linearGradient id="ycbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#04060e"/><stop offset=".28" stop-color="#08102a"/>
        <stop offset=".55" stop-color="#142048"/><stop offset=".78" stop-color="#283870"/>
        <stop offset="1" stop-color="#384888"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ycbSky)"/>
    ${stars(14, 507)}
    <g fill="#c8b880" opacity=".8">
      <rect x="62" y="128" width="176" height="178"/>
      <path d="M54 134 L150 96 L246 134 Z"/>
      <rect x="96" y="96" width="108" height="40"/>
      ${Array.from({length:6}).map((_,i)=>`<rect x="62" y="${128+i*30}" width="176" height="4" fill="#b0a060" opacity=".45"/>`).join('')}
    </g>
    <g fill="#c8b060" opacity=".5">
      <rect x="62" y="128" width="6" height="178"/>
      <rect x="232" y="128" width="6" height="178"/>
      ${Array.from({length:4}).map((_,i)=>`<rect x="${88+i*36}" y="128" width="6" height="178" opacity=".6"/>`).join('')}
    </g>
    ${[
      [66,146],[82,146],[98,146],[66,180],[82,180],[98,180],[66,214],[82,214],[98,214],[66,248],[82,248],[98,248],[66,282],[82,282],[98,282],
      [172,146],[188,146],[204,146],[220,146],[172,180],[188,180],[204,180],[220,180],[172,214],[188,214],[204,214],[220,214],[172,248],[188,248],[204,248],[220,248],[172,282],[188,282],[204,282],[220,282],
      [118,146],[136,146],[154,146],[118,180],[136,180],[154,180],[118,214],[136,214],[154,214],[118,248],[136,248],[154,248],[118,282],[136,282],[154,282],
    ].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="22" fill="#f8e870" opacity="${.15+Math.random()*.38}"/>`).join('')}
    <path d="M0 304 Q150 292 300 302 L300 450 L0 450 Z" fill="#0c1018"/>
    <g fill="#060a14">
      <circle cx="150" cy="296" r="5.5"/>
      <rect x="147" y="301" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── Girls of Riyadh · Riyadh — glass towers, night skyline, a woman's silhouette ── */
  girlsriyadh: scene(`
    <defs>
      <linearGradient id="grdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#020408"/><stop offset=".3" stop-color="#040810"/>
        <stop offset=".58" stop-color="#081420"/><stop offset=".8" stop-color="#102840"/>
        <stop offset="1" stop-color="#183858"/>
      </linearGradient>
      <radialGradient id="grdMoon" cx="75%" cy="20%" r="20%">
        <stop offset="0" stop-color="#d8e0f0" stop-opacity=".6"/>
        <stop offset="1" stop-color="#d8e0f0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#grdSky)"/>
    ${stars(16, 509)}
    <rect width="300" height="450" fill="url(#grdMoon)"/>
    <circle cx="225" cy="100" r="11" fill="#e0e8f4" opacity=".7"/>
    <g fill="#0c1828" opacity=".92">
      ${[[30,168,52,262],[88,144,40,262],[134,120,36,262],[176,152,44,262],[220,136,38,262],[258,160,36,262]].map(([x,y,w,h])=>`
        <rect x="${x}" y="${y}" width="${w}" height="${h}"/>
        <path d="M${x-4} ${y+4} L${x+w/2} ${y-20} L${x+w+4} ${y+4} Z"/>
      `).join('')}
    </g>
    ${[[34,184],[50,184],[34,218],[50,218],[34,252],[50,252],[92,158],[108,158],[92,196],[108,196],[92,234],[108,234],
       [138,136],[154,136],[138,174],[154,174],[138,212],[154,212],[180,168],[196,168],[180,204],[196,204],[180,240],[196,240],
       [224,150],[240,150],[224,186],[240,186],[224,224],[240,224],[262,174],[278,174],[262,210],[278,210]
    ].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="20" fill="#a8d0f0" opacity="${.2+.15}" />`).join('')}
    <path d="M0 302 Q150 290 300 300 L300 450 L0 450 Z" fill="#0a0e18"/>
    <g fill="#d8b080" opacity=".7">
      <ellipse cx="150" cy="278" rx="12" ry="16"/>
      <ellipse cx="150" cy="264" rx="9" ry="9"/>
      <rect x="140" y="292" width="20" height="12" rx="2"/>
    </g>
    <g fill="#060a14">
      <circle cx="150" cy="294" r="5.5"/>
      <rect x="147" y="299" width="5" height="8" rx="1"/>
    </g>
  `),

};
