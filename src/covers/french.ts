// Francophone literature — Proust, Camus, Dumas, Saint-Exupéry, Gabrielle Roy.
import { scene, stars } from './helpers';

export const FRENCH_COVERS: Record<string, string> = {

  /* ── À la recherche du temps perdu · Illiers-Combray — hawthorn dusk over a village, a lit window ── */
  proust: scene(`
    <defs>
      <linearGradient id="prSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3a5e"/><stop offset=".42" stop-color="#6e5a7e"/>
        <stop offset=".74" stop-color="#c08a7a"/><stop offset="1" stop-color="#e8b486"/></linearGradient>
      <radialGradient id="prSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0d6" stop-opacity=".85"/><stop offset="1" stop-color="#fff0d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#prSky)"/>
    <circle cx="150" cy="200" r="110" fill="url(#prSun)"/>
    ${stars(10, 5)}
    <path d="M0 312 q60 -16 130 -4 t170 4 V360 H0 Z" fill="#7a6a4e" opacity=".7"/>
    <g fill="#231f30">
      <rect x="0" y="330" width="300" height="120"/>
      <rect x="120" y="280" width="44" height="50"/>
      <path d="M114 280 L142 258 L170 280 Z"/>
      <rect x="148" y="252" width="10" height="34"/><path d="M145 252 L153 240 L161 252 Z"/>
      <rect x="80" y="306" width="34" height="24"/><path d="M74 306 L97 290 L120 306 Z"/>
    </g>
    <rect x="130" y="298" width="10" height="14" fill="#ffcf78" opacity=".7"/>
    <g stroke="#2a2438" stroke-width="2.4" fill="none" stroke-linecap="round"><path d="M196 60 Q160 86 120 78"/></g>
    ${[[120, 78], [144, 72], [170, 66], [192, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.4" fill="#f4dde6" opacity=".9"/>`).join('')}
  `),

  /* ── L'Étranger · Algiers — white glare, blinding sun over the sea and the Casbah ── */
  stranger: scene(`
    <defs>
      <linearGradient id="stSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#cfe2ea"/><stop offset=".45" stop-color="#bcd6dc"/>
        <stop offset=".75" stop-color="#d8cfae"/><stop offset="1" stop-color="#c2a86e"/></linearGradient>
      <radialGradient id="stSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#fff3c8" stop-opacity=".95"/>
        <stop offset="1" stop-color="#fff3c8" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#stSky)"/>
    <circle cx="150" cy="150" r="130" fill="url(#stSun)"/>
    <circle cx="150" cy="150" r="44" fill="#ffffff"/>
    ${Array.from({ length: 14 }).map((_, i) => { const a = (i / 14) * Math.PI * 2; return `<line x1="150" y1="150" x2="${(150 + Math.cos(a) * 200).toFixed(0)}" y2="${(150 + Math.sin(a) * 200).toFixed(0)}" stroke="#fff6df" stroke-width="${i % 2 ? '1' : '2'}" opacity=".2"/>`; }).join('')}
    <g fill="#b9b08c">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 12 }).map((_, i) => { const x = 4 + i * 25, h = 16 + ((i * 47) % 38); return `<rect x="${x}" y="${300 - h}" width="20" height="${h}"/>`; }).join('')}
      ${[100, 150, 200].map(x => `<rect x="${x - 6}" y="${278}" width="12" height="22"/><path d="M${x - 8} 278 Q${x} 268 ${x + 8} 278 Z"/>`).join('')}
    </g>
    <rect x="0" y="340" width="300" height="110" fill="#3f7a86"/>
    <rect x="0" y="340" width="300" height="110" fill="url(#stSun)" opacity=".2"/>
    <path d="M0 372 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#dff0f2" stroke-width=".7" fill="none" opacity=".4"/>
    <path d="M0 404 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#dff0f2" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── La Peste · Oran — shuttered ochre town under a sickly sky, gulls gone, a closed gate ── */
  plague: scene(`
    <defs>
      <linearGradient id="plSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7a6a4e"/><stop offset=".45" stop-color="#a89058"/>
        <stop offset=".78" stop-color="#c2a05e"/><stop offset="1" stop-color="#8a6a3e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#plSky)"/>
    <circle cx="150" cy="160" r="86" fill="#d9b86a" opacity=".4"/>
    <circle cx="150" cy="160" r="28" fill="#e6cf8a" opacity=".5"/>
    ${stars(5, 3)}
    <ellipse cx="150" cy="260" rx="220" ry="22" fill="#cfb878" opacity=".2"/>
    <g fill="#3a2e1c">
      <rect x="0" y="300" width="300" height="150"/>
      ${Array.from({ length: 10 }).map((_, i) => { const x = 6 + i * 29, h = 22 + ((i * 41) % 40); return `<rect x="${x}" y="${300 - h}" width="24" height="${h}"/>`; }).join('')}
      <path d="M120 300 Q120 276 150 276 Q180 276 180 300 Z"/>
    </g>
    ${Array.from({ length: 12 }).map((_, i) => { const x = 12 + (i % 5) * 56, y = 312 + Math.floor(i / 5) * 30; return `<rect x="${x}" y="${y}" width="12" height="16" rx="1" fill="#1f1810" opacity=".8"/>`; }).join('')}
    <rect x="140" y="340" width="20" height="60" fill="#241b10"/>
    <line x1="150" y1="340" x2="150" y2="400" stroke="#0f0a05" stroke-width="2"/>
  `),

  /* ── Le Comte de Monte-Cristo · Marseille — moonlit harbour, the Château d'If, a sail ── */
  montecristo: scene(`
    <defs>
      <linearGradient id="mcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#101a3a"/><stop offset=".5" stop-color="#26365e"/>
        <stop offset="1" stop-color="#3e5274"/></linearGradient>
      <radialGradient id="mcMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fbf6ff"/><stop offset=".5" stop-color="#cdd9f0" stop-opacity=".8"/>
        <stop offset="1" stop-color="#cdd9f0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mcSky)"/>
    <circle cx="186" cy="130" r="80" fill="url(#mcMoon)"/>
    <circle cx="186" cy="130" r="26" fill="#f2eefc" opacity=".95"/>
    ${stars(16, 7)}
    <g fill="#0c1428">
      <path d="M96 300 L96 264 L150 264 L150 300 Z"/>
      <rect x="104" y="248" width="14" height="16"/><rect x="128" y="248" width="14" height="16"/>
      ${[100, 114, 128, 142].map(x => `<rect x="${x}" y="244" width="6" height="6"/>`).join('')}
    </g>
    <rect x="0" y="300" width="300" height="150" fill="#0a1024"/>
    <rect x="0" y="300" width="300" height="150" fill="url(#mcMoon)" opacity=".12"/>
    <g fill="#060a18">
      <path d="M132 300 L132 248 L134 248 L160 296 L160 300 Z"/>
      <path d="M134 252 L158 262 L136 274 Z"/>
      <path d="M132 278 L156 286 L132 296 Z"/>
    </g>
    <rect x="178" y="300" width="16" height="60" fill="#f2eefc" opacity=".16"/>
    <path d="M0 364 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#aab6d2" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 398 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#aab6d2" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── Les Trois Mousquetaires · Paris — 17th-c. rooftops at dusk, crossed swords, a plumed hat ── */
  mousquetaires: scene(`
    <defs>
      <linearGradient id="msSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2444"/><stop offset=".45" stop-color="#4e3f5e"/>
        <stop offset=".78" stop-color="#9c6a52"/><stop offset="1" stop-color="#d8a05e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#msSky)"/>
    <circle cx="150" cy="180" r="80" fill="#ffdfa6" opacity=".35"/>
    ${stars(12, 5)}
    <g fill="#1c1730">
      <rect x="0" y="312" width="300" height="138"/>
      ${Array.from({ length: 8 }).map((_, i) => { const x = i * 38; return `<path d="M${x} 312 L${x} 290 L${x + 19} 276 L${x + 38} 290 L${x + 38} 312 Z"/><rect x="${x + 14}" y="278" width="6" height="10"/>`; }).join('')}
    </g>
    ${[[120, 300], [180, 300], [96, 290], [206, 290]].map(([x, y]) => `<rect x="${x}" y="${y}" width="5" height="7" fill="#ffcf78" opacity=".7"/>`).join('')}
    <g stroke="#e7d6b0" stroke-width="3" stroke-linecap="round">
      <line x1="118" y1="252" x2="182" y2="196"/><line x1="182" y1="252" x2="118" y2="196"/>
    </g>
    <g fill="#e7d6b0"><circle cx="118" cy="254" r="4"/><circle cx="182" cy="254" r="4"/></g>
    <g fill="#15101f"><path d="M124 150 Q150 134 176 150 Q166 158 150 158 Q134 158 124 150 Z"/><path d="M176 150 Q188 132 168 128 Q172 140 162 148 Z" fill="#c23a3a"/></g>
  `),

  /* ── Le Petit Prince · the Sahara — starry desert night, dunes, a tiny prince, his rose ── */
  petitprince: scene(`
    <defs>
      <linearGradient id="ppSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2452"/><stop offset=".5" stop-color="#2e3d6e"/>
        <stop offset=".82" stop-color="#6e5a7e"/><stop offset="1" stop-color="#c2986a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ppSky)"/>
    ${stars(40, 7)}
    <circle cx="120" cy="120" r="3" fill="#fff3c8"/><circle cx="190" cy="100" r="2.4" fill="#fff3c8"/>
    <path d="M150 78 l3 7 8 .6 -6 5 2 8 -7 -4 -7 4 2 -8 -6 -5 8 -.6 Z" fill="#ffe9a8" opacity=".9"/>
    <path d="M0 330 q70 -30 150 -10 t150 -2 V450 H0 Z" fill="#caa05e"/>
    <path d="M0 372 q80 -22 160 -2 t140 2 V450 H0 Z" fill="#9c7440"/>
    <g fill="#1a1228">
      <circle cx="150" cy="330" r="6"/>
      <path d="M150 336 L143 360 L157 360 Z"/>
      <path d="M150 326 q-8 -4 -12 2 q6 0 12 2 q6 -2 12 -2 q-4 -6 -12 -2Z"/>
    </g>
    <g><line x1="178" y1="358" x2="178" y2="340" stroke="#2a5a3a" stroke-width="2"/><circle cx="178" cy="336" r="5" fill="#e23b5a"/></g>
  `),

  /* ── Bonheur d'occasion (The Tin Flute) · Montréal — wintry blue dusk over Saint-Henri rowhouses ── */
  bonheurocc: scene(`
    <defs>
      <linearGradient id="boSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#26304e"/><stop offset=".5" stop-color="#46506e"/>
        <stop offset=".82" stop-color="#7a7286"/><stop offset="1" stop-color="#a89aa0"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#boSky)"/>
    <circle cx="150" cy="150" r="80" fill="#dfe4f2" opacity=".22"/>
    ${stars(10, 3)}
    <g fill="#1a2034">
      <rect x="0" y="296" width="300" height="154"/>
      ${Array.from({ length: 7 }).map((_, i) => { const x = i * 44; return `<rect x="${x}" y="${280 - (i % 2) * 10}" width="40" height="${30 + (i % 2) * 10}"/>`; }).join('')}
    </g>
    ${Array.from({ length: 18 }).map((_, i) => { const x = 10 + (i % 6) * 48, y = 308 + Math.floor(i / 6) * 34; const lit = i === 7 || i === 14; return `<rect x="${x}" y="${y}" width="13" height="17" rx="1" fill="${lit ? '#ffcf78' : '#0f1422'}" opacity="${lit ? '.85' : '.8'}"/>`; }).join('')}
    ${Array.from({ length: 50 }).map((_, i) => { const x = (i * 53 + i * i * 7) % 300, y = (i * 71 + i * i * 3) % 300, r = ((i * 13) % 10) / 10 * 1 + 0.5; return `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#eaf0fa" opacity="${(0.35 + ((i * 5) % 5) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── Voyage au bout de la nuit · Paris — deep night, gas-lamp halo on cobblestones, lone figure ── */
  voyagenuit: scene(`
    <defs>
      <linearGradient id="vnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#04030c"/><stop offset="1" stop-color="#12102a"/>
      </linearGradient>
      <radialGradient id="vnG" cx="50%" cy="44%" r="50%">
        <stop offset="0" stop-color="#ffd060" stop-opacity=".55"/>
        <stop offset="1" stop-color="#ffd060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#vnSky)"/>
    ${stars(9, 17)}
    <rect x="0" y="168" width="90" height="282" fill="#0e0b1c"/>
    <rect x="210" y="148" width="90" height="302" fill="#0a0818"/>
    <rect x="14" y="192" width="11" height="15" fill="#ffd050" opacity=".34"/>
    <rect x="30" y="192" width="11" height="15" fill="#ffd050" opacity=".26"/>
    <rect x="14" y="226" width="11" height="14" fill="#ffd050" opacity=".20"/>
    <rect x="46" y="208" width="10" height="14" fill="#ffd050" opacity=".16"/>
    <rect x="218" y="174" width="11" height="15" fill="#ffd050" opacity=".30"/>
    <rect x="234" y="174" width="11" height="15" fill="#ffd050" opacity=".22"/>
    <rect x="218" y="208" width="11" height="14" fill="#ffd050" opacity=".18"/>
    <rect x="149" y="200" width="3" height="122" fill="#1e1c2e"/>
    <path d="M142 206 Q149 196 158 206 L157 220 L143 220 Z" fill="#1e1c2e"/>
    <circle cx="150" cy="200" r="62" fill="url(#vnG)"/>
    <circle cx="150" cy="200" r="7" fill="#ffe9a8" opacity=".88"/>
    <path d="M62 380 L150 342 L238 380 L238 450 L62 450 Z" fill="#0c0a1a"/>
    <line x1="150" y1="342" x2="102" y2="420" stroke="#1a1828" stroke-width=".8"/>
    <line x1="150" y1="342" x2="198" y2="420" stroke="#1a1828" stroke-width=".8"/>
    <line x1="82" y1="390" x2="218" y2="386" stroke="#1a1828" stroke-width=".6"/>
    <rect x="148" y="373" width="4" height="20" rx="1" fill="#08060f"/>
    <circle cx="150" cy="370" r="4.5" fill="#08060f"/>
  `),

  /* ── Germinal · Nord-Pas-de-Calais — mine headframe against fire-glow sky, striking shadows ── */
  germinal: scene(`
    <defs>
      <linearGradient id="gmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#160c04"/><stop offset=".4" stop-color="#3e1c06"/>
        <stop offset=".72" stop-color="#8c3a0c"/><stop offset="1" stop-color="#c45218"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gmSky)"/>
    ${stars(5, 9)}
    <ellipse cx="150" cy="430" rx="170" ry="28" fill="#d85c18" opacity=".22"/>
    <g fill="#0c0a06">
      <rect x="130" y="168" width="7" height="172"/>
      <rect x="163" y="168" width="7" height="172"/>
      <rect x="122" y="166" width="56" height="10"/>
      <rect x="120" y="156" width="60" height="10"/>
      <rect x="138" y="136" width="24" height="20"/>
      <rect x="144" y="122" width="12" height="14"/>
      <path d="M122 166 L150 134 L178 166 Z"/>
      <rect x="112" y="316" width="76" height="8"/>
      <rect x="110" y="330" width="80" height="6"/>
    </g>
    <rect x="0" y="356" width="300" height="94" fill="#0a0804"/>
    ${Array.from({length:10}).map((_,i) => { const x=102+(i%5)*18, y=368+Math.floor(i/5)*20; return `<rect x="${x}" y="${y}" width="8" height="13" rx="1" fill="#0a0804"/><circle cx="${x+4}" cy="${y}" r="4" fill="#0a0804"/>`;}).join('')}
    <path d="M0 356 Q150 346 300 354" stroke="#c45218" stroke-width=".6" fill="none" opacity=".18"/>
  `),

  /* ── Bel-Ami · Paris — gas-lit boulevard at violet dusk, café awnings, a man ascending ── */
  belami: scene(`
    <defs>
      <linearGradient id="baSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#28203e"/><stop offset=".44" stop-color="#4e3a5e"/>
        <stop offset=".74" stop-color="#8a5848"/><stop offset="1" stop-color="#c89060"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#baSky)"/>
    ${stars(10, 3)}
    <g fill="#1c1428">
      <rect x="0" y="258" width="68" height="192"/>
      <rect x="232" y="238" width="68" height="212"/>
      <rect x="78" y="290" width="38" height="160"/>
      <rect x="186" y="276" width="38" height="174"/>
    </g>
    <rect x="14" y="276" width="12" height="16" fill="#ffc860" opacity=".52"/>
    <rect x="30" y="276" width="12" height="16" fill="#ffc860" opacity=".44"/>
    <rect x="14" y="306" width="12" height="15" fill="#ffc860" opacity=".36"/>
    <rect x="238" y="258" width="12" height="16" fill="#ffc860" opacity=".48"/>
    <rect x="254" y="258" width="12" height="16" fill="#ffc860" opacity=".40"/>
    <rect x="84" y="304" width="10" height="14" fill="#ffc860" opacity=".42"/>
    <rect x="192" y="294" width="10" height="14" fill="#ffc860" opacity=".38"/>
    <rect x="0" y="358" width="300" height="92" fill="#14101e"/>
    <path d="M96 370 L96 350 L104 344 L112 350 L112 370 Z" fill="#1c1428"/>
    <path d="M188 370 L188 348 L196 342 L204 348 L204 370 Z" fill="#1c1428"/>
    <circle cx="100" cy="340" r="16" fill="#ffc860" opacity=".24"/>
    <circle cx="196" cy="338" r="16" fill="#ffc860" opacity=".22"/>
    <rect x="147" y="318" width="5" height="40" rx="1" fill="#160c1a"/>
    <circle cx="149" cy="315" r="4.5" fill="#160c1a"/>
    <path d="M141 334 L147 327 L155 327 L159 334 L155 344 L143 344 Z" fill="#160c1a"/>
  `),

  /* ── Belle du Seigneur · Geneva — gilded salon, chandelier, curtains, lake beyond ── */
  belledusg: scene(`
    <defs>
      <linearGradient id="bdLake" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a587a"/><stop offset="1" stop-color="#6a9ab2"/>
      </linearGradient>
      <radialGradient id="bdC" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe090" stop-opacity=".88"/>
        <stop offset="1" stop-color="#ffe090" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="#241808"/>
    <rect x="108" y="72" width="84" height="188" fill="url(#bdLake)"/>
    <rect x="108" y="72" width="5" height="188" fill="#3a2618"/>
    <rect x="187" y="72" width="5" height="188" fill="#3a2618"/>
    <rect x="106" y="70" width="88" height="8" fill="#3a2618"/>
    <circle cx="150" cy="112" r="52" fill="url(#bdC)"/>
    <g fill="#c8a038" opacity=".82">
      <circle cx="150" cy="100" r="5"/>
      <ellipse cx="150" cy="100" rx="30" ry="7" fill="none" stroke="#c8a038" stroke-width="1.4"/>
      ${[-24,-12,0,12,24].map(dx => `<circle cx="${150+dx}" cy="118" r="3"/><line x1="${150+dx}" y1="100" x2="${150+dx}" y2="118" stroke="#c8a038" stroke-width="1.1"/>`).join('')}
    </g>
    <rect x="88" y="70" width="20" height="290" fill="#3a2618"/>
    <rect x="192" y="70" width="20" height="290" fill="#3a2618"/>
    <rect x="0" y="340" width="300" height="110" fill="#1c1208"/>
    <rect x="108" y="240" width="84" height="28" fill="#3a587a" opacity=".55"/>
    <path d="M120 270 Q150 268 180 270" stroke="#6a9ab2" stroke-width=".8" fill="none" opacity=".5"/>
    <rect x="0" y="356" width="300" height="5" fill="#c8a038" opacity=".45"/>
    <rect x="0" y="408" width="300" height="5" fill="#c8a038" opacity=".35"/>
  `),

  /* ── Suite française · France 1940 — refugee column under grey summer sky, poplars, exodus ── */
  suitefr: scene(`
    <defs>
      <linearGradient id="sfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#8a8e9a"/><stop offset=".5" stop-color="#b0a89a"/>
        <stop offset="1" stop-color="#c8b898"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sfSky)"/>
    <path d="M0 330 L88 272 L212 272 L300 330 L300 450 L0 450 Z" fill="#b4a87a"/>
    <path d="M0 400 Q150 390 300 398 L300 450 L0 450 Z" fill="#9a9268"/>
    ${[-54,-30,-6,18,42,68,94].map(dx => `<rect x="${150+dx}" y="${198}" width="3" height="${330-198}" fill="#2a3018" opacity=".68"/><ellipse cx="${151+dx}" cy="${216}" rx="${9}" ry="${22}" fill="#2a3018" opacity=".55"/>`).join('')}
    ${Array.from({length:16}).map((_,i) => { const x=100+(i%8)*14, y=298+Math.floor(i/8)*24; return `<circle cx="${x+3}" cy="${y}" r="3.8" fill="#3a3228" opacity=".82"/><rect x="${x}" y="${y+2}" width="7" height="11" rx="1" fill="#4a4038" opacity=".75"/>`;}).join('')}
    <path d="M88 272 L150 254 L212 272" fill="#c8b898" opacity=".55"/>
    <rect x="130" y="282" width="38" height="18" rx="2" fill="#8a8070" opacity=".6"/>
    <rect x="128" y="276" width="42" height="8" rx="1" fill="#9a9080" opacity=".5"/>
  `),

  /* ── Mémoires d'Hadrien · Tivoli — marble columns at golden dawn, cypress sentinels ── */
  hadrien: scene(`
    <defs>
      <linearGradient id="hdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a6a9a"/><stop offset=".38" stop-color="#8aacce"/>
        <stop offset=".68" stop-color="#d4a870"/><stop offset="1" stop-color="#e8c07a"/>
      </linearGradient>
      <radialGradient id="hdSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe8a0" stop-opacity=".72"/>
        <stop offset="1" stop-color="#ffe8a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hdSky)"/>
    <circle cx="190" cy="178" r="72" fill="url(#hdSun)"/>
    <circle cx="190" cy="178" r="20" fill="#ffe8b0" opacity=".78"/>
    <rect x="0" y="328" width="300" height="122" fill="#c8a868"/>
    <rect x="0" y="328" width="300" height="9" fill="#a88c56" opacity=".5"/>
    <g fill="#d4c498">
      ${[100,120,154,174,194].map((x,i) => `<rect x="${x}" y="${270-(i%2)*18}" width="11" height="${58+(i%2)*18}"/><rect x="${x-4}" y="${268-(i%2)*18}" width="19" height="5"/><rect x="${x-2}" y="${322}" width="15" height="7"/>`).join('')}
    </g>
    <path d="M96 272 L206 272" stroke="#c0aa84" stroke-width="2.5" opacity=".55"/>
    <g fill="#1a2a10">
      <rect x="88" y="198" width="8" height="130"/>
      <ellipse cx="92" cy="198" rx="10" ry="28"/>
      <rect x="190" y="178" width="8" height="150"/>
      <ellipse cx="194" cy="178" rx="10" ry="30"/>
      <rect x="212" y="218" width="6" height="110"/>
      <ellipse cx="215" cy="218" rx="8" ry="22"/>
    </g>
  `),

  /* ── La Promesse de l'aube · Nice — golden cliff above turquoise sea, mother silhouette at dusk ── */
  promesseaube: scene(`
    <defs>
      <linearGradient id="paSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a4a7a"/><stop offset=".36" stop-color="#6a8ab8"/>
        <stop offset=".62" stop-color="#e0a060"/><stop offset="1" stop-color="#e8c880"/>
      </linearGradient>
      <radialGradient id="paSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0a0" stop-opacity=".82"/>
        <stop offset="1" stop-color="#fff0a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#paSky)"/>
    <circle cx="150" cy="218" r="92" fill="url(#paSun)"/>
    <circle cx="150" cy="218" r="22" fill="#fff8c0" opacity=".88"/>
    <path d="M0 316 Q150 308 300 316 L300 450 L0 450 Z" fill="#3a6a9a"/>
    <path d="M0 366 Q75 358 150 364 T300 362" stroke="#7ab0d0" stroke-width="1" fill="none" opacity=".45"/>
    <path d="M0 406 Q75 399 150 404 T300 402" stroke="#7ab0d0" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M78 316 Q96 298 116 258 Q126 240 148 316 Z" fill="#c8844a"/>
    <path d="M78 316 Q88 294 100 278 Q112 264 116 258 Q122 248 118 270 Q112 290 102 308 Q90 322 78 316 Z" fill="#b87040"/>
    <g fill="#1a1208">
      <rect x="148" y="268" width="5" height="48" rx="1"/>
      <circle cx="150" cy="265" r="6.5"/>
      <path d="M140 284 L145 276 L155 276 L159 284 L156 296 L144 296 Z"/>
      <path d="M140 284 Q131 294 135 304 Q139 295 147 295"/>
      <path d="M159 284 Q168 294 164 304 Q160 295 152 295"/>
    </g>
  `),

  /* ── Le Hussard sur le toit · Provence — layered terracotta rooftops, blue sky, lone rider atop ── */
  hussardtoit: scene(`
    <defs>
      <linearGradient id="htSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a6aaa"/><stop offset=".55" stop-color="#7aaad8"/>
        <stop offset="1" stop-color="#a8c4e2"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#htSky)"/>
    <path d="M0 148 Q80 134 150 142 T300 148 L300 190 Q220 178 150 186 T0 190 Z" fill="#5a88c0" opacity=".28"/>
    <path d="M0 260 Q150 248 300 258 L300 298 Q150 288 0 298 Z" fill="#c86848"/>
    <path d="M0 296 Q150 286 300 294 L300 334 Q150 324 0 334 Z" fill="#b85c3e"/>
    <path d="M0 332 Q150 322 300 330 L300 370 Q150 360 0 370 Z" fill="#a85036"/>
    <path d="M0 368 Q150 358 300 366 L300 406 Q150 396 0 406 Z" fill="#c07048"/>
    <path d="M0 404 Q150 394 300 402 L300 450 L0 450 Z" fill="#9a6040"/>
    <rect x="0" y="440" width="300" height="10" fill="#8a5838"/>
    <g fill="#1a1010">
      <circle cx="150" cy="250" r="5.5"/>
      <rect x="147" y="255" width="5" height="20" rx="1"/>
      <path d="M136 261 L147 263 M152 263 L163 261"/>
      <rect x="148" y="275" width="3" height="14" rx="1"/>
      <path d="M145 275 L148 268 L152 275"/>
      <rect x="140" y="268" width="20" height="4" rx="2"/>
    </g>
  `),

  /* ── Le Lion · Masai Mara — orange savanna sunset, flat-top acacia, lion silhouette ── */
  lelion: scene(`
    <defs>
      <linearGradient id="llSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1830"/><stop offset=".28" stop-color="#6a3818"/>
        <stop offset=".58" stop-color="#e07820"/><stop offset=".84" stop-color="#f0b040"/>
        <stop offset="1" stop-color="#e8c060"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#llSky)"/>
    <circle cx="150" cy="228" r="56" fill="#e07820" opacity=".52"/>
    <circle cx="150" cy="228" r="22" fill="#f0c060" opacity=".78"/>
    ${stars(7, 21)}
    <rect x="0" y="328" width="300" height="122" fill="#4a3010"/>
    <path d="M0 328 Q150 318 300 326" stroke="#5a3a14" stroke-width="2" fill="none"/>
    <g fill="#1a0e06">
      <rect x="148" y="256" width="4" height="72"/>
      <path d="M92 264 Q120 254 148 258 Q178 254 208 264 L208 272 Q178 262 148 266 Q120 262 92 272 Z"/>
      <path d="M92 264 Q88 256 90 248 L94 248 Q92 256 94 264 Z"/>
      <path d="M206 264 Q210 256 210 248 L214 248 Q212 256 208 264 Z"/>
      <path d="M106 264 Q102 250 104 242 L108 242 Q106 250 108 264 Z"/>
      <path d="M194 264 Q198 250 196 242 L200 242 Q198 250 196 264 Z"/>
    </g>
    <g fill="#150e04">
      <ellipse cx="120" cy="358" rx="28" ry="10"/>
      <path d="M106 348 Q94 336 98 328 Q104 340 114 346 Z"/>
      <path d="M134 348 Q146 336 142 328 Q136 340 126 346 Z"/>
      <ellipse cx="100" cy="328" rx="9" ry="7"/>
      <path d="M95 328 L87 340 L95 337"/>
      <path d="M105 328 L112 338 L105 335"/>
    </g>
    <g fill="#1e1208">
      <rect x="196" y="290" width="3" height="38" rx="1"/>
      <circle cx="197" cy="290" r="2.5"/>
      <path d="M193 294 L197 287 L201 294"/>
    </g>
  `),

  /* ── La Vie devant soi · Belleville Paris — tenement blocks, Madame Rosa, a child's vigil ── */
  viedevant: scene(`
    <defs>
      <linearGradient id="vvSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3248"/><stop offset=".5" stop-color="#4a5068"/>
        <stop offset="1" stop-color="#6a6878"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#vvSky)"/>
    ${stars(8, 11)}
    <g fill="#181e2e">
      <rect x="0" y="130" width="64" height="320"/>
      <rect x="72" y="158" width="56" height="292"/>
      <rect x="136" y="110" width="60" height="340"/>
      <rect x="204" y="142" width="56" height="308"/>
      <rect x="264" y="124" width="36" height="326"/>
    </g>
    ${Array.from({length:24}).map((_,i)=>{const x=8+(i%4)*16, y=148+Math.floor(i/4)*34, c=i===9||i===17||i===5?'#ffd060':'#1a2038', o=i===9||i===17||i===5?'.78':'.7'; return `<rect x="${x}" y="${y}" width="10" height="14" fill="${c}" opacity="${o}"/>`;}).join('')}
    ${Array.from({length:18}).map((_,i)=>{const x=138+(i%3)*18, y=128+Math.floor(i/3)*38, c=i===4||i===13?'#ffd060':'#202840', o=i===4||i===13?'.8':'.72'; return `<rect x="${x}" y="${y}" width="12" height="16" fill="${c}" opacity="${o}"/>`;}).join('')}
    <rect x="0" y="418" width="300" height="32" fill="#12101e"/>
    <path d="M0 418 Q150 410 300 418" stroke="#ffd060" stroke-width=".5" fill="none" opacity=".2"/>
    <g fill="#0c0a18">
      <circle cx="150" cy="408" r="5"/>
      <rect x="147" y="413" width="5" height="5" rx="1"/>
    </g>
  `),

  /* ── L'Œuvre au noir · Bruges — alchemy, midnight stone, a scholar at his furnace ── */
  oeuvrenoir: scene(`
    <defs>
      <linearGradient id="onSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060508"/><stop offset=".6" stop-color="#12100e"/>
        <stop offset="1" stop-color="#1c1808"/>
      </linearGradient>
      <radialGradient id="onFire" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e08020" stop-opacity=".7"/>
        <stop offset="1" stop-color="#e08020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#onSky)"/>
    ${stars(12, 7)}
    <g fill="#0e0c08">
      <rect x="0" y="240" width="300" height="210"/>
      <rect x="96" y="160" width="108" height="80"/>
      <path d="M88 162 Q150 128 212 162 Z"/>
      <rect x="114" y="138" width="72" height="24"/>
      <path d="M108 138 Q150 114 192 138 Z"/>
      <rect x="126" y="118" width="48" height="20"/>
      <rect x="138" y="106" width="24" height="14"/>
      <rect x="144" y="96" width="12" height="12"/>
    </g>
    <rect x="116" y="348" width="68" height="92" fill="#100c06"/>
    <rect x="130" y="360" width="40" height="26" fill="#0c0a04"/>
    <circle cx="150" cy="370" r="44" fill="url(#onFire)"/>
    <circle cx="150" cy="374" r="16" fill="#e08020" opacity=".58"/>
    <circle cx="150" cy="374" r="7" fill="#f0c050" opacity=".72"/>
    <rect x="146" y="314" width="5" height="34" rx="1" fill="#0e0c08"/>
    <circle cx="148" cy="312" r="4.5" fill="#0e0c08"/>
    ${[[128,238],[154,222],[178,242]].map(([x,y])=>`<rect x="${x}" y="${y}" width="8" height="10" fill="#ffd050" opacity=".38"/>`).join('')}
  `),

  /* ── Chagrin d'école · Paris — a struggling pupil at his school desk, chalk dust light ── */
  chagrinec: scene(`
    <defs>
      <linearGradient id="ceSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c8c4b0"/><stop offset=".5" stop-color="#e0d8c8"/>
        <stop offset="1" stop-color="#ece6d4"/>
      </linearGradient>
      <radialGradient id="ceLight" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e8" stop-opacity=".8"/>
        <stop offset="1" stop-color="#fff8e8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ceSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#1a180e" opacity=".55"/>
    <rect x="108" y="60" width="84" height="200" fill="#2a2818" opacity=".8"/>
    <circle cx="150" cy="108" r="88" fill="url(#ceLight)"/>
    <rect x="118" y="78" width="64" height="90" fill="#1a1810" opacity=".9"/>
    <rect x="124" y="84" width="52" height="78" fill="#2e2c1a"/>
    <rect x="96" y="276" width="108" height="16" rx="2" fill="#5a5040"/>
    <rect x="104" y="292" width="92" height="70" rx="1" fill="#4a4030"/>
    <rect x="112" y="300" width="76" height="8" rx="1" fill="#2a2818"/>
    <rect x="112" y="316" width="60" height="6" rx="1" fill="#2a2818" opacity=".7"/>
    <rect x="112" y="330" width="50" height="5" rx="1" fill="#2a2818" opacity=".5"/>
    <g fill="#1a1808">
      <rect x="144" y="248" width="14" height="28" rx="2"/>
      <circle cx="151" cy="244" r="8"/>
      <path d="M140 260 L144 250 L158 250 L162 260 L158 274 L142 274 Z"/>
    </g>
    <rect x="108" y="172" width="64" height="4" fill="#e8e0c8" opacity=".22"/>
    ${Array.from({length:8}).map((_,i)=>`<rect x="${118}" y="${84+i*10}" width="${40+Math.abs(4-i)*4}" height="2" fill="#3a3828" opacity="${0.4+i*0.05}"/>`).join('')}
  `),

  /* ── L'Argent · Paris — the stock exchange, marble columns, ruin and greed ── */
  largent: scene(`
    <defs>
      <linearGradient id="laSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4058"/><stop offset=".45" stop-color="#6a7080"/>
        <stop offset=".78" stop-color="#a09080"/><stop offset="1" stop-color="#c8a870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#laSky)"/>
    ${stars(6, 13)}
    <g fill="#c8c4b0">
      ${[98,116,136,156,176,196].map((x,i)=>`<rect x="${x}" y="${248-(i%2)*16}" width="11" height="${72+(i%2)*16}"/><rect x="${x-4}" y="${246-(i%2)*16}" width="19" height="7"/><rect x="${x-2}" y="${314}" width="15" height="9"/>`).join('')}
    </g>
    <rect x="88" y="320" width="124" height="12" fill="#b8b4a0"/>
    <rect x="84" y="330" width="132" height="8" fill="#a8a494"/>
    <path d="M80 240 Q96 224 104 208 L196 208 Q204 224 220 240 Z" fill="#c0bca8"/>
    <rect x="104" y="194" width="92" height="14" fill="#b8b4a0"/>
    <rect x="116" y="178" width="68" height="16" fill="#c0bca8"/>
    <path d="M116 178 L150 156 L184 178 Z" fill="#b0ac98"/>
    <rect x="0" y="358" width="300" height="92" fill="#2a2418"/>
    ${Array.from({length:12}).map((_,i)=>{ const x=86+i*11, y=340+i%2*6; return `<rect x="${x}" y="${y}" width="7" height="18" rx="1" fill="#1e1c10"/>`;}).join('')}
    <path d="M0 358 Q150 350 300 356" stroke="#c8a870" stroke-width=".7" fill="none" opacity=".3"/>
  `),

  /* ── Que ma joie demeure / Cette année — French countryside, a woman's return, bare winter ── */
  thattimeyear: scene(`
    <defs>
      <linearGradient id="ttSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#b0c4cc"/><stop offset=".45" stop-color="#d8e4e0"/>
        <stop offset="1" stop-color="#e8e8e0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ttSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#181814" opacity=".32"/>
    <path d="M0 290 Q150 278 300 288 L300 450 L0 450 Z" fill="#2e2c24"/>
    <path d="M0 338 Q150 328 300 336 L300 450 L0 450 Z" fill="#242218"/>
    <path d="M0 388 Q150 380 300 386 L300 450 L0 450 Z" fill="#1a1810"/>
    <g fill="#181410">
      <rect x="148" y="178" width="4" height="112"/>
      <path d="M150 178 Q128 195 118 224 Q130 208 150 200 Q170 208 182 224 Q172 195 150 178 Z"/>
      <path d="M150 210 Q134 228 126 256 Q138 240 150 234 Q162 240 174 256 Q166 228 150 210 Z"/>
      <path d="M150 238 Q138 254 132 276 Q140 264 150 260 Q160 264 168 276 Q162 254 150 238 Z"/>
    </g>
    <g fill="#181410" opacity=".7">
      <rect x="110" y="208" width="3" height="82"/>
      <path d="M111 208 Q96 222 92 244 Q100 230 111 226 Q122 230 130 244 Q126 222 111 208 Z"/>
      <rect x="186" y="218" width="3" height="72"/>
      <path d="M187 218 Q172 230 168 250 Q176 238 187 234 Q198 238 206 250 Q202 230 187 218 Z"/>
    </g>
    <ellipse cx="150" cy="450" rx="200" ry="18" fill="#181814" opacity=".4"/>
    <g fill="#e8e8e0" opacity=".6">
      ${Array.from({length:10}).map((_,i)=>`<circle cx="${100+i*10}" cy="${294+i%3*8}" r="2" opacity=".5"/>`).join('')}
    </g>
  `),

  /* ── À l'ami qui ne m'a pas sauvé la vie · Paris — hospital ward, spectral light, an era's grief ── */
  tofriendwhodidnot: scene(`
    <defs>
      <linearGradient id="tfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".5" stop-color="#181c28"/>
        <stop offset="1" stop-color="#222434"/>
      </linearGradient>
      <radialGradient id="tfGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e0e8f0" stop-opacity=".4"/>
        <stop offset="1" stop-color="#e0e8f0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tfSky)"/>
    ${stars(6, 23)}
    <rect x="0" y="308" width="300" height="142" fill="#0e1018"/>
    <rect x="94" y="148" width="112" height="162" fill="#141820"/>
    <rect x="94" y="148" width="4" height="162" fill="#0e1018"/>
    <rect x="202" y="148" width="4" height="162" fill="#0e1018"/>
    <rect x="94" y="148" width="112" height="5" fill="#0e1018"/>
    ${Array.from({length:4}).map((_,i)=>`<rect x="${104+i*24}" y="${160}" width="18" height="28" fill="#c8d8e0" opacity=".22"/>`).join('')}
    ${Array.from({length:4}).map((_,i)=>`<rect x="${104+i*24}" y="${198}" width="18" height="28" fill="#c8d8e0" opacity="${0.14+i*0.04}"/>`).join('')}
    <circle cx="150" cy="220" r="80" fill="url(#tfGlow)"/>
    <rect x="108" y="294" width="84" height="14" rx="2" fill="#1a2030"/>
    <g fill="#0e1018">
      <rect x="138" y="256" width="24" height="52" rx="2"/>
      <rect x="143" y="248" width="14" height="10" rx="1"/>
    </g>
    <rect x="114" y="336" width="72" height="6" rx="1" fill="#c8d8e0" opacity=".18"/>
    <rect x="120" y="350" width="60" height="4" rx="1" fill="#c8d8e0" opacity=".12"/>
  `),

  /* ── Un long dimanche de fiançailles · Somme — barbed wire silhouette, grey shell-pocked earth ── */
  longdimanche: scene(`
    <defs>
      <linearGradient id="ldSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#686870"/><stop offset=".44" stop-color="#8a8890"/>
        <stop offset=".78" stop-color="#7a7470"/><stop offset="1" stop-color="#5a5048"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ldSky)"/>
    ${Array.from({length:5}).map((_,i) => `<circle cx="${110+i*18}" cy="${54+i*10}" r="${2+i%2*1.5}" fill="#a0a0a8" opacity=".28"/>`).join('')}
    <path d="M0 278 Q58 268 120 273 T242 271 T300 276 L300 450 L0 450 Z" fill="#4a4038"/>
    <path d="M0 308 Q150 298 300 306 L300 450 L0 450 Z" fill="#3a3028"/>
    <path d="M0 358 Q150 350 300 356 L300 450 L0 450 Z" fill="#2e2820"/>
    ${Array.from({length:9}).map((_,i) => { const x=90+i*13; return `<line x1="${x}" y1="276" x2="${x+6}" y2="266" stroke="#5a5050" stroke-width="1.2"/><line x1="${x+6}" y1="266" x2="${x-4}" y2="260" stroke="#5a5050" stroke-width="1"/><line x1="${x+6}" y1="266" x2="${x+14}" y2="273" stroke="#5a5050" stroke-width="1"/>`;}).join('')}
    <line x1="86" y1="276" x2="214" y2="276" stroke="#4a4040" stroke-width="2.2"/>
    <line x1="86" y1="280" x2="214" y2="280" stroke="#3a3030" stroke-width="1.4"/>
    ${Array.from({length:6}).map((_,i) => { const x=102+i*18, y=325+i%2*12; return `<rect x="${x}" y="${y}" width="4" height="8" fill="#3a3020"/><circle cx="${x+2}" cy="${y-2}" r="3.2" fill="#3a3020"/>`;}).join('')}
    <path d="M0 386 Q40 382 80 385 Q120 388 160 384 Q200 380 240 383 Q270 386 300 382" stroke="#2e2818" stroke-width="1.2" fill="none" opacity=".55"/>
  `),

  /* ── Madame Bovary · Normandy — Rouen cathedral silhouette, grey Norman skies, a woman at a window ── */
  madamebovary: scene(`
    <defs>
      <linearGradient id="mbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#484c54"/><stop offset=".44" stop-color="#686c72"/>
        <stop offset=".74" stop-color="#888880"/><stop offset="1" stop-color="#a8a890"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mbSky)"/>
    ${stars(5, 317)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#404838"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#343c2c"/>
    <g fill="#282c30">
      <rect x="104" y="118" width="92" height="200"/>
      <path d="M96 124 L150 72 L204 124 Z"/>
      <rect x="134" y="72" width="32" height="52"/>
      <path d="M128 78 L150 42 L172 78 Z"/>
      <rect x="138" y="42" width="24" height="36"/>
      <rect x="144" y="28" width="12" height="18"/>
      <rect x="146" y="18" width="8" height="12"/>
      ${Array.from({length:3}).map((_,i)=>`<path d="M${134+i*14} ${124} L${134+i*14} ${112} Q${141+i*14} ${106} ${148+i*14} ${112} L${148+i*14} ${124} Z"/>`).join('')}
    </g>
    <rect x="120" y="222" width="60" height="96" fill="#1c2024"/>
    ${[[124,228],[140,228],[156,228],[124,254],[140,254],[156,254],[124,280],[140,280]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#d4c080" opacity="${y===228?'.32':'.22'}"/>`).join('')}
    <g fill="#1e1c18">
      <circle cx="150" cy="304" r="5.5"/>
      <rect x="147" y="309" width="5" height="12" rx="1"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#a8a890" stroke-width=".5" fill="none" opacity=".25"/>
  `),
};
