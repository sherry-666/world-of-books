// Classical Chinese fiction & drama.
import { scene, stars } from './helpers';

export const CHINESE_CLASSIC_COVERS: Record<string, string> = {

  /* ── 红楼梦 Dream of the Red Chamber · Beijing — rose twilight garden, pavilion, red lanterns ── */
  redchamber: scene(`
    <defs>
      <linearGradient id="rcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c8859a"/><stop offset=".42" stop-color="#a96a7e"/>
        <stop offset=".74" stop-color="#664a5e"/><stop offset="1" stop-color="#2c2438"/></linearGradient>
      <radialGradient id="rcGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0d6" stop-opacity=".8"/><stop offset="1" stop-color="#fff0d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#rcSky)"/>
    <circle cx="150" cy="150" r="96" fill="url(#rcGlow)"/>
    <circle cx="150" cy="150" r="24" fill="#fff3e0" opacity=".55"/>
    ${stars(10, 5)}
    <g fill="#241420">
      <rect x="0" y="360" width="300" height="90"/>
      <rect x="120" y="300" width="60" height="60"/>
      <path d="M104 300 Q108 290 120 290 L180 290 Q192 290 196 300 Z"/>
      <rect x="132" y="272" width="36" height="20"/>
      <path d="M118 272 Q124 258 150 256 Q176 258 182 272 Z"/>
      <line x1="150" y1="256" x2="150" y2="246" stroke="#241420" stroke-width="2"/><circle cx="150" cy="244" r="2.4" fill="#e0a83e"/>
      <rect x="96" y="346" width="108" height="14"/>
    </g>
    <rect x="142" y="318" width="16" height="20" fill="#ffcf78" opacity=".55"/>
    ${[126, 174].map(x => `<g><circle cx="${x}" cy="306" r="8" fill="#ff7a3c" opacity=".4"/><ellipse cx="${x}" cy="306" rx="4.5" ry="5.5" fill="#e23b2e"/></g>`).join('')}
    <g stroke="#3a2230" stroke-width="2.6" fill="none" stroke-linecap="round"><path d="M196 50 Q150 78 108 70"/></g>
    ${[[108, 70], [134, 64], [166, 60], [192, 54]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#ffd9e0" opacity=".95"/>`).join('')}
    ${Array.from({ length: 10 }).map((_, i) => { const x = 90 + (i * 47) % 120, y = (i * 53 + 40) % 240; return `<ellipse cx="${x}" cy="${y}" rx="2.4" ry="1.3" transform="rotate(${i * 40} ${x} ${y})" fill="#ffdbe2" opacity="${(0.4 + (i % 4) / 12).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── 水浒传 Water Margin · Liangshan — stormy ochre marsh, the outlaw fort, a banner ── */
  watermargin: scene(`
    <defs>
      <linearGradient id="wmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2e3038"/><stop offset=".45" stop-color="#5a4f3e"/>
        <stop offset=".78" stop-color="#8a6f44"/><stop offset="1" stop-color="#b5894a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wmSky)"/>
    ${[[150, 90, 120, 18], [110, 130, 90, 12], [200, 120, 80, 12]].map(([cx, cy, rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#23252c" opacity=".5"/>`).join('')}
    ${stars(6, 3)}
    <path d="M0 270 q60 -30 130 -12 t170 4 V330 H0 Z" fill="#4a4334" opacity=".8"/>
    <g fill="#1f1c16">
      <path d="M96 300 L150 250 L204 300 Z"/>
      <rect x="120" y="288" width="60" height="22"/>
      <line x1="150" y1="250" x2="150" y2="214" stroke="#1f1c16" stroke-width="3"/>
    </g>
    <path d="M150 216 L188 222 L150 236 Z" fill="#9c3320"/>
    <rect x="0" y="310" width="300" height="140" fill="#2a2a26"/>
    <g stroke="#171712" stroke-width="2.4" fill="none" stroke-linecap="round">
      ${Array.from({ length: 22 }).map((_, i) => { const x = i * 14 + 4; const h = 30 + ((i * 31) % 40); const sway = (i % 2 ? 1 : -1) * 6; return `<path d="M${x} 360 Q${x + sway} ${360 - h * 0.6} ${x + sway} ${360 - h}"/>`; }).join('')}
    </g>
    <path d="M0 380 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#9a8a5a" stroke-width=".7" fill="none" opacity=".3"/>
  `),

  /* ── 三国演义 Romance of the Three Kingdoms · Luoyang — crimson war sky, banners, spears, a wall ── */
  threek: scene(`
    <defs>
      <linearGradient id="tkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5e1a18"/><stop offset=".42" stop-color="#9c3320"/>
        <stop offset=".74" stop-color="#c2552a"/><stop offset="1" stop-color="#e08a3e"/></linearGradient>
      <radialGradient id="tkSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe6a8"/><stop offset=".5" stop-color="#f6c662" stop-opacity=".8"/>
        <stop offset="1" stop-color="#f6c662" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tkSky)"/>
    <circle cx="150" cy="170" r="90" fill="url(#tkSun)"/>
    <circle cx="150" cy="170" r="38" fill="#ffe6b0" opacity=".8"/>
    ${stars(8, 7)}
    ${[[110, 110], [150, 60], [192, 96]].map(([x, y]) => `<g><line x1="${x}" y1="${y}" x2="${x}" y2="${y + 70}" stroke="#3a0f0e" stroke-width="3"/><path d="M${x} ${y} L${x + 26} ${y + 6} L${x} ${y + 18} Z" fill="#7e1a14"/></g>`).join('')}
    <g fill="#3a0f0e">
      <rect x="0" y="316" width="300" height="134"/>
      <rect x="0" y="296" width="300" height="20"/>
      ${Array.from({ length: 15 }).map((_, i) => `<rect x="${i * 20}" y="289" width="12" height="8"/>`).join('')}
      <rect x="120" y="260" width="60" height="36"/>
      <path d="M114 260 L150 240 L186 260 Z"/>
    </g>
    <g stroke="#1f0a09" stroke-width="2" stroke-linecap="round">
      ${Array.from({ length: 14 }).map((_, i) => { const x = 96 + i * 8; return `<line x1="${x}" y1="316" x2="${x - 10}" y2="276"/>`; }).join('')}
    </g>
  `),

  /* ── 西游记 Journey to the West · Chang'an — teal-gold mythic sky, auspicious clouds, a pagoda ── */
  journeywest: scene(`
    <defs>
      <linearGradient id="jwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1d6e7a"/><stop offset=".4" stop-color="#2a9a86"/>
        <stop offset=".74" stop-color="#bca04e"/><stop offset="1" stop-color="#e0c45e"/></linearGradient>
      <radialGradient id="jwSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3c8"/><stop offset=".55" stop-color="#ffd36a" stop-opacity=".8"/>
        <stop offset="1" stop-color="#ffd36a" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#jwSky)"/>
    <circle cx="150" cy="150" r="100" fill="url(#jwSun)"/>
    <circle cx="150" cy="150" r="26" fill="#fff3d6" opacity=".7"/>
    ${stars(8, 11)}
    ${[[112, 96], [196, 120], [104, 150]].map(([x, y]) => `<path d="M${x} ${y} q-10 -8 -2 -16 q8 -6 16 0 q10 -4 14 6 q4 10 -8 12 q-8 6 -20 -2Z" fill="#eaf6f0" opacity=".25"/>`).join('')}
    <path d="M0 330 L70 260 L120 320 L150 286 L180 320 L230 262 L300 330 V450 H0 Z" fill="#16302e"/>
    <g fill="#0e201f">
      <rect x="138" y="240" width="24" height="80"/>
      ${[0, 22, 44].map(d => `<path d="M132 ${250 + d} L150 ${238 + d} L168 ${250 + d} Z"/><rect x="140" y="${250 + d} " width="20" height="4"/>`).join('')}
      <line x1="150" y1="238" x2="150" y2="226" stroke="#0e201f" stroke-width="2"/><circle cx="150" cy="224" r="2.4" fill="#e0c45e"/>
    </g>
    <g transform="translate(150 196)"><path d="M-16 6 q8 -10 18 -4 q10 -6 16 4 q-6 8 -16 4 q-10 6 -18 -4Z" fill="#f4ecd6" opacity=".6"/><circle cx="2" cy="-2" r="4" fill="#1a120c"/><path d="M2 2 L-4 16 L8 16 Z" fill="#1a120c"/><line x1="10" y1="-6" x2="10" y2="18" stroke="#caa14e" stroke-width="1.6"/></g>
  `),

  /* ── 围城 Fortress Besieged · Shanghai — cool deco dusk over the Bund, a clock tower ── */
  fortress: scene(`
    <defs>
      <linearGradient id="ftSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#39474c"/><stop offset=".45" stop-color="#5a6660"/>
        <stop offset=".78" stop-color="#9a8a64"/><stop offset="1" stop-color="#c2a06a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ftSky)"/>
    <circle cx="150" cy="170" r="80" fill="#e6cf94" opacity=".3"/>
    ${stars(8, 5)}
    <ellipse cx="150" cy="250" rx="220" ry="22" fill="#dcd2b8" opacity=".12"/>
    <g fill="#222a2c">
      <rect x="0" y="300" width="300" height="40"/>
      ${Array.from({ length: 11 }).map((_, i) => { const x = 4 + i * 27, h = 30 + ((i * 53) % 60), w = 22; return `<rect x="${x}" y="${300 - h}" width="${w}" height="${h}"/>`; }).join('')}
      <rect x="138" y="244" width="24" height="56"/>
      <path d="M138 244 L150 232 L162 244 Z"/>
      <circle cx="150" cy="262" r="8" fill="#1a2022"/><circle cx="150" cy="262" r="6" fill="#e6cf94" opacity=".5"/>
    </g>
    ${[[40, 286], [88, 280], [196, 282], [244, 288], [150, 250]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="5" fill="#ffd98a" opacity=".7"/>`).join('')}
    <rect x="0" y="340" width="300" height="110" fill="#1a2224"/>
    <rect x="0" y="340" width="300" height="110" fill="#e6cf94" opacity=".06"/>
    <path d="M0 372 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#cfd0c0" stroke-width=".7" fill="none" opacity=".22"/>
  `),

  /* ── 活着 To Live · rural Sichuan — ochre dusk over a vast field, a farmer and his ox ── */
  tolive: scene(`
    <defs>
      <linearGradient id="tlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e6b85e"/><stop offset=".42" stop-color="#d68a4a"/>
        <stop offset=".74" stop-color="#a85a36"/><stop offset="1" stop-color="#5e3326"/></linearGradient>
      <radialGradient id="tlSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3d0"/><stop offset=".5" stop-color="#ffce82" stop-opacity=".8"/>
        <stop offset="1" stop-color="#ffce82" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tlSky)"/>
    <circle cx="150" cy="220" r="120" fill="url(#tlSun)"/>
    <circle cx="150" cy="226" r="34" fill="#fff0c0" opacity=".92"/>
    ${stars(6, 9)}
    <path d="M0 300 q80 -16 160 -4 t140 6 V450 H0 Z" fill="#9c6f36"/>
    <path d="M0 338 q70 -14 150 0 t150 4 V450 H0 Z" fill="#6e4a26"/>
    <path d="M0 384 q80 -12 160 2 t140 4 V450 H0 Z" fill="#43301c"/>
    <g stroke="#2a1c10" stroke-width="2.6" fill="none" stroke-linecap="round"><path d="M196 322 V298"/><path d="M196 308 L186 296"/><path d="M196 312 L206 300"/></g>
    <g fill="#241509">
      <path d="M120 332 q14 -8 30 0 l-2 14 -26 0 Z"/>
      <rect x="116" y="334" width="6" height="14"/><rect x="146" y="334" width="6" height="14"/>
      <path d="M118 330 q-6 -3 -10 2"/><circle cx="108" cy="330" r="3"/>
      <circle cx="100" cy="322" r="4"/><path d="M100 326 L96 344 L106 344 Z"/>
    </g>
  `),

  /* ── 西厢记 Romance of the Western Chamber · Pujiu Temple — moonlit courtyard, willow, a tryst ── */
  westernchamber: scene(`
    <defs>
      <linearGradient id="wcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#26315a"/><stop offset=".5" stop-color="#46577e"/>
        <stop offset="1" stop-color="#7282a0"/></linearGradient>
      <radialGradient id="wcMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fbf6ff"/><stop offset=".5" stop-color="#d6e0f4" stop-opacity=".8"/>
        <stop offset="1" stop-color="#d6e0f4" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wcSky)"/>
    <circle cx="150" cy="146" r="104" fill="url(#wcMoon)"/>
    <circle cx="150" cy="146" r="34" fill="#f4f2ff" opacity=".95"/>
    ${stars(12, 7)}
    <g fill="#16203c">
      <rect x="0" y="332" width="300" height="118"/>
      <rect x="108" y="296" width="84" height="36"/>
      <path d="M98 296 Q104 284 116 284 L184 284 Q196 284 202 296 Z"/>
      <line x1="150" y1="284" x2="150" y2="272" stroke="#16203c" stroke-width="2"/>
    </g>
    <rect x="142" y="306" width="16" height="26" fill="#ffcf78" opacity=".5"/>
    <g stroke="#14223e" stroke-width="2.4" fill="none" stroke-linecap="round">
      <path d="M104 332 V230"/>
      ${[238, 252, 266, 280].map(y => `<path d="M104 ${y} q-18 8 -26 30"/><path d="M104 ${y + 4} q16 8 24 30"/>`).join('')}
    </g>
  `),

  /* ── 桃花扇 The Peach Blossom Fan · Nanjing — peach dusk over the Qinhuai, lantern boats, petals ── */
  peachblossomfan: scene(`
    <defs>
      <linearGradient id="pbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e8a6a0"/><stop offset=".42" stop-color="#d97a7e"/>
        <stop offset=".74" stop-color="#a85060"/><stop offset="1" stop-color="#4e2a3e"/></linearGradient>
      <radialGradient id="pbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0d6" stop-opacity=".85"/><stop offset="1" stop-color="#fff0d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pbSky)"/>
    <circle cx="150" cy="160" r="100" fill="url(#pbSun)"/>
    <circle cx="150" cy="160" r="26" fill="#fff3e0" opacity=".7"/>
    ${stars(8, 5)}
    <g fill="#3a2030">
      <rect x="0" y="304" width="300" height="36"/>
      ${Array.from({ length: 9 }).map((_, i) => { const x = 6 + i * 32, h = 20 + ((i * 37) % 34); return `<rect x="${x}" y="${304 - h}" width="22" height="${h}"/>`; }).join('')}
    </g>
    <path d="M118 320 L182 320 L172 332 L128 332 Z" fill="#2a1622"/>
    <path d="M128 320 Q150 306 172 320 Z" fill="#5a2e44"/>
    <line x1="150" y1="318" x2="150" y2="302" stroke="#2a1622" stroke-width="2"/>
    <rect x="0" y="340" width="300" height="110" fill="#2a1626"/>
    <rect x="0" y="340" width="300" height="110" fill="url(#pbSun)" opacity=".14"/>
    ${[[108, 352], [150, 360], [196, 350], [128, 380], [174, 386]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#ffb14d" opacity=".4"/><ellipse cx="${x}" cy="${y}" rx="3" ry="4" fill="#ffcf78"/>`).join('')}
    ${Array.from({ length: 12 }).map((_, i) => { const x = 90 + (i * 53) % 120, y = (i * 47 + 30) % 250; return `<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.4" transform="rotate(${i * 40} ${x} ${y})" fill="#ffd6dc" opacity="${(0.4 + (i % 4) / 12).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── 窦娥冤 The Injustice to Dou E · Chuzhou — ashen sky, snow in midsummer, the execution post ── */
  doue: scene(`
    <defs>
      <linearGradient id="dueSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5e636a"/><stop offset=".5" stop-color="#838890"/>
        <stop offset="1" stop-color="#a6abb2"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dueSky)"/>
    <circle cx="150" cy="150" r="90" fill="#c2c6cc" opacity=".3"/>
    <ellipse cx="150" cy="300" rx="220" ry="26" fill="#e2e4e8" opacity=".5"/>
    <rect x="0" y="318" width="300" height="132" fill="#cdd1d6"/>
    <rect x="0" y="318" width="300" height="132" fill="#b8bcc2" opacity=".4"/>
    <g fill="#3a3e44">
      <rect x="146" y="236" width="8" height="92"/>
      <rect x="120" y="236" width="60" height="8"/>
      <line x1="150" y1="244" x2="150" y2="236" stroke="#3a3e44" stroke-width="2"/>
    </g>
    <rect x="156" y="240" width="12" height="40" fill="#e6e8ea" opacity=".9"/>
    <path d="M156 240 q14 6 0 14 q14 6 0 14 q14 6 0 12" stroke="#c24a3a" stroke-width="2" fill="none" opacity=".8"/>
    ${Array.from({ length: 70 }).map((_, i) => { const x = (i * 53 + i * i * 7) % 300, y = (i * 71 + i * i * 3) % 450, r = ((i * 13) % 10) / 10 * 1.1 + 0.5; return `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#fbfcfe" opacity="${(0.45 + ((i * 5) % 5) / 10).toFixed(2)}"/>`; }).join('')}
  `),

  /* ── 海上花列传 · Shanghai 1890s — sing-song girls, opium lamp glow, courtyard pavilion ── */
  singsonggirls: scene(`
    <defs>
      <linearGradient id="sgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1008"/><stop offset=".5" stop-color="#2e1c0c"/>
        <stop offset="1" stop-color="#4a2e14"/>
      </linearGradient>
      <radialGradient id="sgG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8a040" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e8a040" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sgSky)"/>
    ${stars(8, 147)}
    <rect x="96" y="148" width="108" height="168" fill="#1e1208"/>
    <rect x="102" y="154" width="96" height="156" fill="#2e1c08"/>
    <circle cx="150" cy="228" r="78" fill="url(#sgG)"/>
    <g fill="#c8a040" opacity=".65">
      <rect x="96" y="148" width="108" height="8"/>
      <rect x="96" y="310" width="108" height="8"/>
      <rect x="96" y="148" width="8" height="168"/>
      <rect x="196" y="148" width="8" height="168"/>
      <path d="M88 154 Q150 136 212 154 Z"/>
    </g>
    <rect x="110" y="166" width="36" height="54" fill="#e8a040" opacity=".18"/>
    <rect x="154" y="166" width="36" height="54" fill="#e8a040" opacity=".14"/>
    <rect x="110" y="228" width="36" height="54" fill="#e8a040" opacity=".12"/>
    <rect x="154" y="228" width="36" height="54" fill="#e8a040" opacity=".1"/>
    <rect x="0" y="316" width="300" height="134" fill="#140e04"/>
    <path d="M0 316 Q150 310 300 314" stroke="#c8a040" stroke-width=".6" fill="none" opacity=".28"/>
    <g fill="#1a1008">
      <circle cx="134" cy="258" r="5.5"/>
      <rect x="131" y="263" width="5" height="14" rx="1"/>
      <circle cx="166" cy="262" r="5"/>
      <rect x="163" y="267" width="5" height="12" rx="1"/>
    </g>
    ${[114,136,158,178].map(x=>`<rect x="${x}" y="${322}" width="8" height="18" rx="1" fill="#1e1608"/>`).join('')}
  `),

  /* ── 洛阳伽蓝记 · Luoyang Northern Wei — temple complex in a ruined capital, Buddhist grandeur ── */
  luoyangmonasteries: scene(`
    <defs>
      <linearGradient id="lmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3050"/><stop offset=".4" stop-color="#4a5878"/>
        <stop offset=".7" stop-color="#8a9898"/><stop offset="1" stop-color="#b0c0b8"/>
      </linearGradient>
      <radialGradient id="lmSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8d8b0" stop-opacity=".65"/>
        <stop offset="1" stop-color="#e8d8b0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lmSky)"/>
    ${stars(8, 149)}
    <circle cx="150" cy="148" r="68" fill="url(#lmSun)"/>
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#7a8060"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#5a6048"/>
    <g fill="#2a2c38">
      <rect x="106" y="256" width="88" height="72"/>
      <path d="M94 262 Q150 228 206 262 Z"/>
      <rect x="118" y="228" width="64" height="34"/>
      <path d="M108 234 Q150 206 192 234 Z"/>
      <rect x="132" y="206" width="36" height="28"/>
      <path d="M124 212 Q150 190 176 212 Z"/>
      <rect x="142" y="190" width="16" height="18"/>
      <rect x="146" y="178" width="8" height="14"/>
      <rect x="148" y="162" width="4" height="18"/>
    </g>
    ${[[112,268],[128,268],[158,268],[174,268],[112,296],[128,296]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd880" opacity=".35"/>`).join('')}
    <g fill="#1e2028">
      <rect x="90" y="246" width="8" height="78"/>
      <path d="M86 250 Q94 242 102 250 Z"/>
      <rect x="202" y="240" width="8" height="84"/>
      <path d="M198 244 Q206 236 214 244 Z"/>
    </g>
    <path d="M0 322 Q150 314 300 320" stroke="#b0c0b8" stroke-width=".6" fill="none" opacity=".3"/>
  `),
};
