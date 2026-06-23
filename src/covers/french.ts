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
};
