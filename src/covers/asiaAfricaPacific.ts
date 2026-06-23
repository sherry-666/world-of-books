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
};
