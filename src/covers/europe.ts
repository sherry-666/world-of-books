// European literature.
import { scene, stars } from './helpers';

export const EUROPE_COVERS: Record<string, string> = {

  /* ── The Trial · Prague — oppressive grey-green dusk, a looming court tower, a tiny figure ── */
  trial: scene(`
    <defs>
      <linearGradient id="trSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3030"/><stop offset=".5" stop-color="#46504a"/>
        <stop offset="1" stop-color="#6e7060"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#trSky)"/>
    <circle cx="150" cy="150" r="70" fill="#c2c4b2" opacity=".2"/>
    ${stars(6, 3)}
    <g fill="#181c1a">
      <rect x="112" y="170" width="76" height="180"/>
      <path d="M104 170 L150 132 L196 170 Z"/>
      <rect x="128" y="150" width="44" height="20"/><path d="M122 150 L150 128 L178 150 Z"/>
      <rect x="0" y="350" width="300" height="100"/>
    </g>
    ${Array.from({ length: 12 }).map((_, i) => { const x = 122 + (i % 3) * 24, y = 188 + Math.floor(i / 3) * 34; return `<rect x="${x}" y="${y}" width="10" height="18" fill="#2c322e"/>`; }).join('')}
    <g fill="#0c0e0c"><circle cx="150" cy="338" r="4"/><path d="M150 342 L145 360 L155 360 Z"/></g>
  `),

  /* ── The Unbearable Lightness of Being · Prague — wistful rose dusk over castle and bridge ── */
  lightnessbeing: scene(`
    <defs>
      <linearGradient id="lbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#41476a"/><stop offset=".45" stop-color="#7a6a82"/>
        <stop offset=".75" stop-color="#c89488"/><stop offset="1" stop-color="#e6b48e"/></linearGradient>
      <radialGradient id="lbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff0d6" stop-opacity=".8"/><stop offset="1" stop-color="#fff0d6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lbSky)"/>
    <circle cx="150" cy="210" r="110" fill="url(#lbSun)"/>
    ${stars(8, 5)}
    <g fill="#2a2436">
      <rect x="0" y="300" width="300" height="40"/>
      <rect x="118" y="262" width="64" height="38"/>
      <path d="M118 262 L150 240 L182 262 Z"/>
      <rect x="146" y="226" width="8" height="36"/><path d="M142 226 L150 214 L158 226 Z"/>
      <rect x="96" y="280" width="14" height="20"/><rect x="190" y="280" width="14" height="20"/>
    </g>
    <rect x="0" y="340" width="300" height="110" fill="#1f1a2a"/>
    <rect x="0" y="340" width="300" height="110" fill="url(#lbSun)" opacity=".14"/>
    ${[[120, 286], [150, 250], [180, 286]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="5" fill="#ffd98a" opacity=".7"/>`).join('')}
    <path d="M0 372 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#e8cdb0" stroke-width=".7" fill="none" opacity=".3"/>
  `),

  /* ── 1984 · London — grim grey, the Ministry pyramid, the watching eye ── */
  nineteen84: scene(`
    <defs>
      <linearGradient id="ofSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#33373e"/><stop offset=".5" stop-color="#4a4e54"/>
        <stop offset="1" stop-color="#646058"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ofSky)"/>
    ${stars(5, 3)}
    <g fill="#1c1f24">
      <rect x="0" y="316" width="300" height="134"/>
      ${Array.from({ length: 8 }).map((_, i) => { const x = i * 38; return `<rect x="${x}" y="${300 - (i % 2) * 14}" width="34" height="${30 + (i % 2) * 14}"/>`; }).join('')}
      <path d="M104 316 L150 196 L196 316 Z"/>
    </g>
    <g transform="translate(150 250)">
      <ellipse cx="0" cy="0" rx="34" ry="18" fill="#e8e2d2"/>
      <circle cx="0" cy="0" r="11" fill="#1c1f24"/><circle cx="0" cy="0" r="5" fill="#c23a2e"/>
      <circle cx="3" cy="-3" r="1.6" fill="#e8e2d2"/>
    </g>
    <g fill="#11141a" opacity=".5">${Array.from({ length: 18 }).map((_, i) => `<rect x="${i * 17}" y="404" width="12" height="46"/>`).join('')}</g>
  `),

  /* ── Mrs. Dalloway · London — fresh June morning, Big Ben, a scatter of flowers ── */
  mrsdalloway: scene(`
    <defs>
      <linearGradient id="mdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#8fb6d6"/><stop offset=".45" stop-color="#bcd0e0"/>
        <stop offset=".78" stop-color="#e8d2cf"/><stop offset="1" stop-color="#f0c2b0"/></linearGradient>
      <radialGradient id="mdSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff8e0" stop-opacity=".85"/><stop offset="1" stop-color="#fff8e0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mdSky)"/>
    <circle cx="150" cy="190" r="100" fill="url(#mdSun)"/>
    ${stars(5, 9)}
    <g fill="#46506a">
      <rect x="0" y="316" width="300" height="134"/>
      <rect x="138" y="222" width="24" height="94"/>
      <rect x="134" y="208" width="32" height="16"/>
      <circle cx="150" cy="216" r="6" fill="#e8d8b0"/>
      <path d="M138 208 L150 192 L162 208 Z"/>
    </g>
    ${[[112, 348, '#e2546a'], [138, 356, '#f0b44a'], [166, 350, '#9a6ad0'], [192, 358, '#e2546a'], [124, 366, '#f0b44a'], [180, 366, '#9a6ad0']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/><circle cx="${x}" cy="${y}" r="2" fill="#fff3c8"/>`).join('')}
  `),

  /* ── To the Lighthouse · Isle of Skye — dusky violet bay, the lighthouse and its beam ── */
  tothelighthouse: scene(`
    <defs>
      <linearGradient id="tllSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3158"/><stop offset=".45" stop-color="#4e527e"/>
        <stop offset=".78" stop-color="#a87a82"/><stop offset="1" stop-color="#e0a06e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tllSky)"/>
    <circle cx="150" cy="220" r="80" fill="#ffdfa6" opacity=".4"/>
    ${stars(10, 5)}
    <path d="M0 300 q150 -8 300 0 V330 H0 Z" fill="#2a2c44" opacity=".7"/>
    <polygon points="150,180 120,300 180,300" fill="#fff3c8" opacity=".14"/>
    <g fill="#161a2e">
      <path d="M142 300 L138 232 L162 232 L158 300 Z"/>
      <rect x="136" y="222" width="28" height="12"/>
      <rect x="142" y="208" width="16" height="14"/>
      <rect x="0" y="300" width="300" height="150"/>
    </g>
    <circle cx="150" cy="214" r="5" fill="#ffe9a8"/><circle cx="150" cy="214" r="11" fill="#ffe9a8" opacity=".3"/>
    <path d="M0 360 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#bcb6d0" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 396 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#bcb6d0" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── Rebecca · Cornwall — dark gothic night, Manderley aflame on the cliffs over the sea ── */
  rebecca: scene(`
    <defs>
      <linearGradient id="rbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#16182a"/><stop offset=".55" stop-color="#2a2434"/>
        <stop offset=".82" stop-color="#7a3a2e"/><stop offset="1" stop-color="#c2602e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#rbSky)"/>
    ${stars(14, 7)}
    <ellipse cx="150" cy="316" rx="150" ry="50" fill="#e0632e" opacity=".3"/>
    <g fill="#0e0c14">
      <rect x="110" y="270" width="80" height="60"/>
      <path d="M104 270 L150 244 L196 270 Z"/>
      <rect x="120" y="252" width="16" height="18"/><rect x="164" y="252" width="16" height="18"/>
      <path d="M120 252 L128 240 L136 252 Z"/><path d="M164 252 L172 240 L180 252 Z"/>
    </g>
    ${Array.from({ length: 6 }).map((_, i) => { const x = 118 + (i % 3) * 26, y = 286 + Math.floor(i / 3) * 20; return `<rect x="${x}" y="${y}" width="11" height="14" fill="#ffae4d" opacity=".88"/>`; }).join('')}
    ${[[126, 244], [150, 234], [174, 244]].map(([x, y]) => `<path d="M${x} ${y} q-3 -10 0 -18 q3 8 0 18Z" fill="#ff7a3c" opacity=".7"/>`).join('')}
    <rect x="0" y="330" width="300" height="120" fill="#0a0810"/>
    <rect x="0" y="330" width="300" height="120" fill="#e0632e" opacity=".08"/>
  `),

  /* ── Ulysses · Dublin — warm Edwardian dusk, Georgian doors, the Martello tower ── */
  ulysses: scene(`
    <defs>
      <linearGradient id="ulSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4466"/><stop offset=".45" stop-color="#7a6a72"/>
        <stop offset=".75" stop-color="#d09a5e"/><stop offset="1" stop-color="#e8c06a"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ulSky)"/>
    <circle cx="150" cy="200" r="100" fill="#fff3c8" opacity=".35"/>
    ${stars(8, 3)}
    <g fill="#241f30">
      <rect x="124" y="236" width="52" height="64"/>
      <path d="M120 236 q0 -10 10 -10 l40 0 q10 0 10 10 Z"/>
      ${[0, 22, 44].map(d => `<rect x="${130}" y="${248 + d}" width="40" height="4"/>`).join('')}
      <rect x="0" y="300" width="300" height="150"/>
    </g>
    ${Array.from({ length: 6 }).map((_, i) => { const x = 14 + (i % 3) * 96; const y = 270; const c = ['#c23a3a', '#3a6ea8', '#2e8a4a', '#c2a23a', '#8a4ab0', '#c2683a'][i]; return `<g><rect x="${x}" y="${y}" width="22" height="30" fill="#1c1726"/><path d="M${x} ${y} q0 -7 7 -7 l8 0 q7 0 7 7 Z" fill="${c}"/></g>`; }).join('')}
    <path d="M0 320 q40 -5 75 0 t75 0 t75 0 t75 0" stroke="#e8cd9a" stroke-width=".6" fill="none" opacity=".2"/>
  `),

  /* ── Goodbye to Berlin · Berlin — smoky Weimar cabaret amber under a cold gathering shadow ── */
  goodbyeberlin: scene(`
    <defs>
      <linearGradient id="gbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1c1d28"/><stop offset=".5" stop-color="#46343a"/>
        <stop offset="1" stop-color="#9c6a3e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gbSky)"/>
    ${stars(8, 7)}
    <g fill="#161118">
      <rect x="0" y="300" width="300" height="150"/>
      ${Array.from({ length: 9 }).map((_, i) => { const x = i * 33, h = 30 + ((i * 53) % 50); return `<rect x="${x}" y="${300 - h}" width="28" height="${h}"/>`; }).join('')}
    </g>
    <g>
      ${['CABARET'].map(() => '')}
      <rect x="116" y="280" width="68" height="20" fill="#0e0a0e"/>
      <rect x="118" y="282" width="64" height="16" fill="#e0632e" opacity=".5"/>
      <text x="150" y="295" text-anchor="middle" font-family="EB Garamond, serif" font-size="11" fill="#ffd98a">●●●●</text>
    </g>
    ${Array.from({ length: 18 }).map((_, i) => { const x = 8 + (i * 41) % 284, y = 270 + (i * 31) % 80; return `<rect x="${x}" y="${y}" width="2.4" height="3" fill="#ffb14d" opacity="${(0.4 + (i % 4) / 10).toFixed(2)}"/>`; }).join('')}
    <path d="M0 200 L300 150 L300 0 L0 0 Z" fill="#0a0b12" opacity=".5"/>
  `),

  /* ── Homage to Catalonia · Barcelona — warm revolutionary dusk, the city, an anarchist banner ── */
  homagetocatalonia: scene(`
    <defs>
      <linearGradient id="hcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5e2a2a"/><stop offset=".45" stop-color="#a8482e"/>
        <stop offset=".75" stop-color="#d98a3e"/><stop offset="1" stop-color="#f0bd64"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hcSky)"/>
    <circle cx="150" cy="200" r="90" fill="#ffe6a8" opacity=".35"/>
    ${stars(8, 5)}
    <g fill="#3a1f1c">
      <rect x="0" y="306" width="300" height="144"/>
      ${Array.from({ length: 10 }).map((_, i) => { const x = i * 30, h = 26 + ((i * 47) % 44); return `<rect x="${x}" y="${306 - h}" width="24" height="${h}"/>`; }).join('')}
      <path d="M126 270 L150 248 L174 270 Z"/><rect x="138" y="258" width="6" height="12"/>
    </g>
    <g><line x1="150" y1="300" x2="150" y2="214" stroke="#241210" stroke-width="3"/>
      <path d="M150 216 L196 222 L150 238 Z" fill="#1a1410"/>
      <path d="M150 216 L173 219 L150 227 Z" fill="#c2262e"/>
    </g>
    ${[[114, 290], [186, 290], [150, 280]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="5" fill="#ffd98a" opacity=".7"/>`).join('')}
  `),

  /* ── Catch-22 · Pianosa — bright Mediterranean noon, bomber silhouettes over the sea ── */
  catch22: scene(`
    <defs>
      <linearGradient id="c22Sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a78a8"/><stop offset=".5" stop-color="#5aa6c4"/>
        <stop offset="1" stop-color="#bcdde4"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#c22Sky)"/>
    <circle cx="150" cy="150" r="120" fill="#fff8e0" opacity=".4"/>
    <circle cx="150" cy="150" r="36" fill="#fff8e0" opacity=".8"/>
    ${[[110, 100, 1], [180, 130, .8], [150, 200, .7]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#1f2a30"><rect x="-24" y="-2" width="48" height="4"/><rect x="-3" y="-12" width="6" height="24"/><rect x="-20" y="8" width="40" height="3"/><circle cx="-14" cy="0" r="3"/><circle cx="14" cy="0" r="3"/></g>`).join('')}
    <rect x="0" y="330" width="300" height="120" fill="#1f6a8a"/>
    <rect x="0" y="330" width="300" height="120" fill="#fff8e0" opacity=".12"/>
    <path d="M0 360 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#dff0f4" stroke-width=".7" fill="none" opacity=".4"/>
    <path d="M0 396 q40 -6 75 0 t75 0 t75 0 t75 0" stroke="#dff0f4" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── The Name of the Rose · Piedmont — cold medieval fog, the abbey on the mount, a lit library ── */
  namerose: scene(`
    <defs>
      <linearGradient id="nrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2c3038"/><stop offset=".5" stop-color="#4a4e54"/>
        <stop offset="1" stop-color="#787a76"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nrSky)"/>
    <circle cx="190" cy="120" r="20" fill="#cdd0d6" opacity=".4"/>
    ${stars(8, 11)}
    <path d="M0 320 L80 230 L150 300 L220 220 L300 320 Z" fill="#23272c"/>
    <ellipse cx="150" cy="300" rx="220" ry="22" fill="#cdd2d6" opacity=".2"/>
    <g fill="#15181c">
      <rect x="120" y="232" width="60" height="86"/>
      <rect x="128" y="206" width="44" height="26"/>
      <path d="M124 206 L150 184 L176 206 Z"/>
      <rect x="0" y="318" width="300" height="132"/>
    </g>
    ${Array.from({ length: 8 }).map((_, i) => { const x = 128 + (i % 3) * 18, y = 244 + Math.floor(i / 3) * 26; const lit = i === 1; return `<rect x="${x}" y="${y}" width="10" height="16" rx="4" fill="${lit ? '#ffcf78' : '#2a2e32'}" opacity="${lit ? '.85' : '.9'}"/>`; }).join('')}
  `),

  /* ── My Brilliant Friend · Naples — warm gritty ochre dusk over the rione, Vesuvius behind ── */
  mybrilliantfriend: scene(`
    <defs>
      <linearGradient id="bfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a4a6a"/><stop offset=".42" stop-color="#b07a64"/>
        <stop offset=".72" stop-color="#e0a05a"/><stop offset="1" stop-color="#f0c878"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bfSky)"/>
    <circle cx="150" cy="210" r="100" fill="#fff3d0" opacity=".4"/>
    ${stars(7, 5)}
    <path d="M0 280 L90 226 L150 264 L210 226 L300 280 V310 H0 Z" fill="#6e5a6e" opacity=".7"/>
    <path d="M120 264 L150 232 L180 264 Z" fill="#5a4658" opacity=".8"/>
    <g fill="#3a2a26">
      <rect x="0" y="300" width="300" height="150"/>
      ${Array.from({ length: 7 }).map((_, i) => { const x = i * 44; return `<rect x="${x}" y="${280 - (i % 2) * 12}" width="40" height="${30 + (i % 2) * 12}"/>`; }).join('')}
    </g>
    ${Array.from({ length: 20 }).map((_, i) => { const x = 10 + (i % 6) * 48, y = 296 + Math.floor(i / 6) * 30; const lit = i % 5 === 0; return `<rect x="${x}" y="${y}" width="12" height="16" rx="1" fill="${lit ? '#ffcf78' : '#241814'}" opacity="${lit ? '.85' : '.85'}"/>`; }).join('')}
  `),

  /* ── The Master and Margarita · Moscow — indigo night, a huge moon, onion domes, a flying figure & cat ── */
  mastermargarita: scene(`
    <defs>
      <linearGradient id="mmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181f44"/><stop offset=".5" stop-color="#2a2f5e"/>
        <stop offset="1" stop-color="#46406e"/></linearGradient>
      <radialGradient id="mmMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff6e0"/><stop offset=".5" stop-color="#ffe6a8" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ffe6a8" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mmSky)"/>
    <circle cx="150" cy="150" r="116" fill="url(#mmMoon)"/>
    <circle cx="150" cy="150" r="40" fill="#fff3d0" opacity=".92"/>
    ${stars(16, 7)}
    <g transform="translate(150 150)" fill="#1a1730"><ellipse cx="0" cy="0" rx="9" ry="14"/><path d="M-8 -2 L-16 -16 L-4 -8 Z"/><path d="M8 -2 L16 -16 L4 -8 Z"/><line x1="-9" y1="14" x2="-9" y2="26" stroke="#1a1730" stroke-width="2"/><line x1="9" y1="14" x2="9" y2="26" stroke="#1a1730" stroke-width="2"/></g>
    <g fill="#11142a">
      <rect x="0" y="320" width="300" height="130"/>
      <path d="M120 320 L120 286 Q120 264 132 256 Q144 264 144 286 L144 320 Z"/>
      <path d="M156 320 L156 290 Q156 270 168 262 Q180 270 180 290 L180 320 Z"/>
      <line x1="132" y1="252" x2="132" y2="244" stroke="#11142a" stroke-width="2"/><line x1="168" y1="258" x2="168" y2="250" stroke="#11142a" stroke-width="2"/>
    </g>
    <g transform="translate(196 250)" fill="#0c0e1c"><ellipse cx="0" cy="0" rx="8" ry="6"/><path d="M-6 -4 L-9 -10 L-3 -6 Z"/><path d="M6 -4 L9 -10 L3 -6 Z"/><path d="M8 2 q8 0 10 8" stroke="#0c0e1c" stroke-width="2" fill="none"/></g>
  `),

  /* ── Anna Karenina · Moscow — a train, snow, a gilded ballroom ── */
  annakarenina: scene(`
    <defs>
      <linearGradient id="akaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0c14"/><stop offset=".4" stop-color="#141828"/>
        <stop offset=".72" stop-color="#202434"/><stop offset="1" stop-color="#303040"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#akaSky)"/>
    ${stars(11, 387)}
    <path d="M0 312 Q150 300 300 310 L300 450 L0 450 Z" fill="#e8eae8" opacity=".88"/>
    <path d="M0 362 Q150 352 300 360 L300 450 L0 450 Z" fill="#d8dcd8" opacity=".9"/>
    <path d="M0 412 Q150 404 300 410 L300 450 L0 450 Z" fill="#c8ccc8"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${28+i*34} ${322+i%2*12} Q${36+i*34} ${310+i%2*10} ${44+i*34} ${322+i%2*10}" stroke="#d0d4d0" stroke-width=".6" fill="none" opacity=".55"/>`).join('')}
    <g fill="#b89030">
      <rect x="76" y="174" width="148" height="140"/>
      <path d="M68 178 L150 140 L232 178 Z"/>
      ${Array.from({length:6}).map((_,i)=>`<rect x="${80+i*24}" y="${178}" width="20" height="136" fill="#c8a040" opacity=".2"/>`).join('')}
    </g>
    ${[[80,198],[100,198],[80,234],[100,234],[172,198],[192,198],[172,234],[192,234]].map(([x,y])=>`<rect x="${x}" y="${y}" width="16" height="26" fill="#fff8e0" opacity="${y<220?'.5':'.35'}"/>`).join('')}
    <rect x="76" y="170" width="148" height="8" fill="#d4aa40" opacity=".8"/>
    <rect x="0" y="295" width="300" height="20" fill="#1c1c24"/>
    <rect x="0" y="295" width="300" height="4" fill="#c0a030" opacity=".5"/>
    <rect x="0" y="311" width="300" height="4" fill="#c0a030" opacity=".4"/>
    <g fill="#101018">
      <rect x="56" y="290" width="16" height="24" rx="2"/>
      <rect x="80" y="290" width="160" height="18" rx="1"/>
      <circle cx="56" cy="316" r="10" fill="none" stroke="#101018" stroke-width="7"/>
      <circle cx="240" cy="316" r="10" fill="none" stroke="#101018" stroke-width="7"/>
    </g>
    <g fill="#0c0c10">
      <circle cx="150" cy="302" r="5.5"/>
      <rect x="147" y="307" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 312 Q150 306 300 310" stroke="#303040" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Doctor Zhivago · Moscow — a candlelit window in winter, frost, a red scarf ── */
  doctorzhivago: scene(`
    <defs>
      <linearGradient id="dzSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".4" stop-color="#0e1020"/>
        <stop offset=".72" stop-color="#161820"/><stop offset="1" stop-color="#222428"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dzSky)"/>
    ${stars(12, 389)}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#e8eae8" opacity=".85"/>
    <path d="M0 364 Q150 354 300 362 L300 450 L0 450 Z" fill="#d4d8d4" opacity=".9"/>
    <path d="M0 414 Q150 406 300 412 L300 450 L0 450 Z" fill="#c0c4c0"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${24+i*36} ${324+i%2*14} Q${34+i*36} ${312+i%2*12} ${44+i*36} ${324+i%2*12}" stroke="#d0d4d0" stroke-width=".6" fill="none" opacity=".5"/>`).join('')}
    <g fill="#0e1018">
      ${[42,88,136,184,230].map((x,i)=>`<rect x="${x}" y="${148+i%2*20}" width="44" height="${168-i%2*20}"/>`).join('')}
    </g>
    ${Array.from({length:12}).map((_,i)=>{const x=(i*68+6)%296,y=158+(i*44)%150; return `<rect x="${x}" y="${y}" width="10" height="16" fill="#e8c060" opacity="${0.08+(i%4)*0.04}"/>`;}).join('')}
    <rect x="118" y="198" width="64" height="118" fill="#181c28"/>
    <rect x="120" y="200" width="60" height="60" fill="#f0d080" opacity=".22"/>
    <g fill="#e04020" opacity=".6">
      <path d="M134 212 L134 258 Q150 268 166 258 L166 212 Q158 206 150 208 Q142 206 134 212 Z"/>
      <path d="M140 208 Q150 202 160 208 L162 212 Q150 218 138 212 Z" opacity=".8"/>
    </g>
    <rect x="118" y="312" width="64" height="6" fill="#e8e0d0" opacity=".5"/>
    <g fill="#0a0c10">
      <circle cx="150" cy="306" r="5.5"/>
      <rect x="147" y="311" width="5" height="8" rx="1"/>
    </g>
    <path d="M0 314 Q150 308 300 312" stroke="#222428" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── Crime and Punishment · St Petersburg — cold dusk over rooftops, a single lit window ── */
  crimepunishment: scene(`
    <defs>
      <linearGradient id="cpSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#243150"/><stop offset=".5" stop-color="#374763"/>
        <stop offset=".8" stop-color="#566179"/><stop offset="1" stop-color="#6b6f80"/></linearGradient>
      <radialGradient id="cpWin" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffd98a"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cpSky)"/>
    ${stars(18, 11)}
    <ellipse cx="150" cy="330" rx="220" ry="30" fill="#d9dde6" opacity=".06"/>
    <path d="M0 250 H40 V232 H70 V250 H120 V214 L140 214 L140 250 H300 V450 H0 Z" fill="#1a2236"/>
    <path d="M150 250 L158 196 L166 250 Z" fill="#161d2e"/><line x1="158" y1="196" x2="158" y2="178" stroke="#161d2e" stroke-width="2"/><circle cx="158" cy="176" r="2.4" fill="#cbb46a"/>
    <rect x="0" y="280" width="300" height="170" fill="#10162a"/>
    ${Array.from({ length: 18 }).map((_, i) => { const cx = 18 + (i % 6) * 48, cy = 300 + Math.floor(i / 6) * 42; const lit = (i === 8); return lit ? `<circle cx="${cx + 10}" cy="${cy + 8}" r="26" fill="url(#cpWin)"/><rect x="${cx}" y="${cy}" width="20" height="26" rx="1.5" fill="#ffcf78"/>` : `<rect x="${cx}" y="${cy}" width="20" height="26" rx="1.5" fill="#1d2740" opacity=".9"/>`; }).join('')}
    <rect x="0" y="430" width="300" height="20" fill="#0c1020"/>
    <rect x="146" y="430" width="20" height="16" fill="#ffcf78" opacity=".18"/>
  `),

  /* ── Istanbul: A Tale of Three Cities · Istanbul — Byzantine gold dusk, Hagia Sophia, a crescent ── */
  istanbul3: scene(`
    <defs>
      <linearGradient id="i3Sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#163a44"/><stop offset=".42" stop-color="#7a5a2e"/>
        <stop offset=".72" stop-color="#c2913a"/><stop offset="1" stop-color="#e8c468"/></linearGradient>
      <radialGradient id="i3Sun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff3c8"/><stop offset=".5" stop-color="#f6c662" stop-opacity=".85"/>
        <stop offset="1" stop-color="#f6c662" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#i3Sky)"/>
    <circle cx="150" cy="180" r="116" fill="url(#i3Sun)"/>
    <circle cx="150" cy="180" r="38" fill="#fff0c0" opacity=".9"/>
    <path d="M196 70 A18 18 0 1 0 208 98 A14 14 0 1 1 196 70 Z" fill="#fff0c0" opacity=".85"/>
    ${stars(10, 5)}
    <g fill="#2e1c10">
      <rect x="0" y="318" width="300" height="132"/>
      <path d="M104 318 Q104 262 150 262 Q196 262 196 318 Z"/>
      <rect x="124" y="300" width="52" height="18"/>
      <line x1="150" y1="262" x2="150" y2="246" stroke="#2e1c10" stroke-width="3"/><circle cx="150" cy="244" r="3" fill="#e0a83e"/>
      <path d="M78 318 Q78 292 98 292 Q118 292 118 318 Z"/>
      <path d="M182 318 Q182 292 202 292 Q222 292 222 318 Z"/>
      <rect x="92" y="238" width="6" height="80"/><path d="M88 238 L95 222 L102 238 Z"/><circle cx="95" cy="220" r="2" fill="#e0a83e"/>
      <rect x="204" y="244" width="6" height="74"/><path d="M200 244 L207 228 L214 244 Z"/><circle cx="207" cy="226" r="2" fill="#e0a83e"/>
    </g>
  `),

  /* ── Northern Lights · Svalbard — the aurora over arctic ice, an armoured bear, stars ── */
  goldencompass: scene(`
    <defs>
      <linearGradient id="glcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1430"/><stop offset=".5" stop-color="#11203e"/>
        <stop offset="1" stop-color="#1c2e44"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#glcSky)"/>
    ${stars(34, 7)}
    ${[0, 1, 2].map(k => `<path d="M${60 - k * 6} ${120 + k * 20} Q150 ${70 + k * 18} ${240 + k * 6} ${130 + k * 20}" stroke="${k % 2 ? '#8a6ad0' : '#5af0a6'}" stroke-width="${10 - k * 2}" fill="none" opacity="${(0.3 - k * 0.06).toFixed(2)}" stroke-linecap="round"/>`).join('')}
    <path d="M150 96 Q150 70 165 130 Q210 110 150 150 Q150 200 138 140 Q96 150 150 96Z" fill="#9ff0c4" opacity=".22"/>
    <path d="M0 330 q70 -14 150 -2 t150 4 V450 H0 Z" fill="#cde0ee"/>
    <path d="M0 366 q80 -10 160 2 t140 2 V450 H0 Z" fill="#aac4d8"/>
    <g fill="#eef4fa">
      <ellipse cx="150" cy="324" rx="34" ry="16"/>
      <ellipse cx="120" cy="320" rx="14" ry="12"/>
      <path d="M108 318 L96 312 L102 322 Z"/>
      <rect x="134" y="332" width="8" height="14"/><rect x="160" y="332" width="8" height="14"/>
    </g>
    <rect x="150" y="312" width="14" height="10" fill="#5a6a4a" opacity=".6"/>
  `),

  /* ── The Tin Drum · Gdańsk — a small boy with a drum, cobblestones, Baltic storm-light ── */
  tindrum: scene(`
    <defs>
      <linearGradient id="tdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a5868"/><stop offset=".46" stop-color="#7a8898"/>
        <stop offset=".78" stop-color="#a09880"/><stop offset="1" stop-color="#c4a870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tdSky)"/>
    ${stars(7, 13)}
    <g fill="#2a2820">
      <rect x="0" y="220" width="74" height="230"/>
      <rect x="226" y="208" width="74" height="242"/>
      <rect x="78" y="256" width="52" height="194"/>
      <rect x="174" y="244" width="52" height="206"/>
    </g>
    ${[[8,240],[22,240],[8,272],[22,272],[234,226],[250,226],[234,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="11" height="14" fill="#ffc848" opacity=".38"/>`).join('')}
    <rect x="0" y="372" width="300" height="78" fill="#1a1810"/>
    <path d="M62 372 Q150 362 238 370" stroke="#c4a870" stroke-width=".6" fill="none" opacity=".3"/>
    <g fill="#181410">
      <ellipse cx="150" cy="330" rx="22" ry="10"/>
      <rect x="138" y="290" width="24" height="40" rx="1"/>
      <circle cx="150" cy="284" r="12"/>
      <rect x="128" y="314" width="8" height="4" rx="1"/>
      <rect x="164" y="314" width="8" height="4" rx="1"/>
      ${[-10,0,10].map(dx=>`<rect x="${150+dx}" y="${310}" width="3" height="18" rx="1" fill="#c84820" opacity=".7"/>`).join('')}
      <rect x="136" y="308" width="28" height="6" rx="3"/>
    </g>
  `),

  /* ── Fatelessness · Budapest/Auschwitz — a boy in striped uniform, barbed wire, leaden sky ── */
  fatelessness: scene(`
    <defs>
      <linearGradient id="ftSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a5858"/><stop offset=".5" stop-color="#747272"/>
        <stop offset="1" stop-color="#8a8480"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ftSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#181410" opacity=".35"/>
    <path d="M0 310 Q150 300 300 308 L300 450 L0 450 Z" fill="#2a2420"/>
    <path d="M0 360 Q150 352 300 358 L300 450 L0 450 Z" fill="#1e1c18"/>
    ${Array.from({length:10}).map((_,i)=>`<line x1="${90+i*14}" y1="305" x2="${92+i*14}" y2="266" stroke="#4a4840" stroke-width="1.4"/>`).join('')}
    ${Array.from({length:9}).map((_,i)=>`<line x1="${90+i*14}" y1="280" x2="${104+i*14}" y2="275" stroke="#4a4840" stroke-width=".9"/><line x1="${96+i*14}" y1="273" x2="${84+i*14}" y2="270" stroke="#4a4840" stroke-width=".9"/>`).join('')}
    <line x1="88" y1="305" x2="212" y2="305" stroke="#3a3830" stroke-width="2"/>
    <g fill="#181410" opacity=".88">
      <rect x="144" y="226" width="12" height="36" rx="1"/>
      <circle cx="150" cy="220" r="8"/>
      <path d="M140 242 L144 232 L156 232 L160 242 L156 260 L144 260 Z"/>
      <path d="M140 242 Q133 252 137 262 Q141 253 147 251"/>
      <path d="M160 242 Q167 252 163 262 Q159 253 153 251"/>
      <rect x="143" y="260" width="5" height="12" rx="1"/>
      <rect x="152" y="260" width="5" height="12" rx="1"/>
    </g>
    ${[138,148,158].map(x=>`<rect x="${x}" y="226" width="4" height="40" fill="#c0c8d0" opacity=".18"/>`).join('')}
  `),

  /* ── The Bridge on the Drina · Višegrad — stone bridge arching over green river, minarets ── */
  bridgedrina: scene(`
    <defs>
      <linearGradient id="bdrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a5878"/><stop offset=".44" stop-color="#6a9ab0"/>
        <stop offset=".72" stop-color="#9ac8b0"/><stop offset="1" stop-color="#a8d4a8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bdrSky)"/>
    ${stars(6, 5)}
    <path d="M0 370 Q150 356 300 368 L300 450 L0 450 Z" fill="#3a7858"/>
    <path d="M0 390 Q150 378 300 388 L300 450 L0 450 Z" fill="#2e6448"/>
    <path d="M0 420 Q150 410 300 418 L300 450 L0 450 Z" fill="#224e38"/>
    <g fill="#4a3a28">
      <path d="M70 370 L80 310 Q90 295 100 310 L110 370 Z"/>
      <path d="M110 370 L120 340 Q130 325 140 340 L150 370 Z"/>
      <path d="M150 370 L160 340 Q170 325 180 340 L190 370 Z"/>
      <path d="M190 370 L200 310 Q210 295 220 310 L230 370 Z"/>
      <rect x="70" y="366" width="160" height="10" rx="1"/>
      <rect x="68" y="376" width="164" height="6" rx="1"/>
    </g>
    <g fill="#5a4a38">
      <rect x="82" y="268" width="8" height="42"/>
      <path d="M82 268 Q86 258 90 268 Z"/>
      <rect x="210" y="258" width="8" height="52"/>
      <path d="M210 258 Q214 246 218 258 Z"/>
    </g>
    <path d="M0 348 Q150 338 300 346 L300 370 Q150 360 0 370 Z" fill="#7ab8a8" opacity=".5"/>
    <path d="M0 368 Q150 360 300 366" stroke="#9ad0b8" stroke-width=".8" fill="none" opacity=".4"/>
  `),

  /* ── Danube · Central Europe — the great river, Baroque spires, a melancholy journey ── */
  danube: scene(`
    <defs>
      <linearGradient id="dnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3858"/><stop offset=".38" stop-color="#4a6880"/>
        <stop offset=".65" stop-color="#7a9aaa"/><stop offset="1" stop-color="#a8c4cc"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dnSky)"/>
    ${stars(8, 19)}
    <g fill="#1a2030" opacity=".85">
      <rect x="0" y="248" width="56" height="202"/>
      <rect x="244" y="232" width="56" height="218"/>
      <rect x="72" y="280" width="48" height="170"/>
      <rect x="180" y="264" width="48" height="186"/>
    </g>
    <g fill="#2a3040">
      <rect x="18" y="216" width="18" height="32"/><path d="M18 216 Q27 202 36 216 Z"/>
      <rect x="250" y="200" width="18" height="32"/><path d="M250 200 Q259 186 268 200 Z"/>
    </g>
    ${[[14,268],[34,268],[14,294],[254,250],[272,250],[254,276]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="13" fill="#ffd060" opacity=".35"/>`).join('')}
    <path d="M0 360 Q150 348 300 358 L300 450 L0 450 Z" fill="#3a6888"/>
    <path d="M0 390 Q75 382 150 388 T300 386" stroke="#6a9aaa" stroke-width="1" fill="none" opacity=".4"/>
    <path d="M0 418 Q75 412 150 416 T300 414" stroke="#6a9aaa" stroke-width=".7" fill="none" opacity=".28"/>
    <g fill="#2a3040" opacity=".8">
      <rect x="128" y="296" width="44" height="30" rx="1"/>
      <rect x="132" y="286" width="36" height="12" rx="1"/>
      <rect x="136" y="280" width="28" height="8"/>
      <rect x="140" y="274" width="20" height="8"/>
      <rect x="148" y="268" width="4" height="8"/>
      <rect x="108" y="322" width="84" height="8" rx="1"/>
    </g>
  `),

  /* ── The Picture of Dorian Gray · London — a gilt-framed portrait in a velvet drawing room ── */
  doriangray: scene(`
    <defs>
      <linearGradient id="dgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1208"/><stop offset="1" stop-color="#2e2010"/>
      </linearGradient>
      <radialGradient id="dgL" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8c060" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e8c060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dgSky)"/>
    <rect x="96" y="72" width="108" height="168" fill="#1e1608"/>
    <rect x="102" y="78" width="96" height="156" fill="#2e2010"/>
    <circle cx="150" cy="152" r="80" fill="url(#dgL)"/>
    <rect x="110" y="86" width="80" height="140" fill="#3a2c18"/>
    <g fill="#c0a050" opacity=".7">
      <rect x="96" y="72" width="108" height="6"/>
      <rect x="96" y="234" width="108" height="6"/>
      <rect x="96" y="72" width="6" height="168"/>
      <rect x="198" y="72" width="6" height="168"/>
    </g>
    <g fill="#c0a050" opacity=".42">
      <circle cx="99" cy="75" r="5"/><circle cx="201" cy="75" r="5"/>
      <circle cx="99" cy="237" r="5"/><circle cx="201" cy="237" r="5"/>
    </g>
    <g fill="#241a08">
      <ellipse cx="150" cy="162" rx="22" ry="28"/>
      <circle cx="150" cy="126" r="15"/>
    </g>
    <rect x="0" y="298" width="300" height="152" fill="#100c06"/>
    <rect x="86" y="274" width="128" height="28" fill="#180e04"/>
    <rect x="0" y="294" width="300" height="6" fill="#c0a050" opacity=".2"/>
    ${Array.from({length:6}).map((_,i)=>`<rect x="${90+i*24}" y="${314}" width="18" height="24" rx="1" fill="#1a1208"/>`).join('')}
  `),

  /* ── Wuthering Heights · Yorkshire Moors — wild heather, storm-raked manor, Heathcliff ── */
  wutheringheights: scene(`
    <defs>
      <linearGradient id="whSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1c2030"/><stop offset=".36" stop-color="#3a3848"/>
        <stop offset=".68" stop-color="#6a5850"/><stop offset="1" stop-color="#8a7060"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#whSky)"/>
    ${stars(8, 29)}
    <path d="M0 298 Q80 268 150 278 T300 288 L300 450 L0 450 Z" fill="#3a3028"/>
    <path d="M0 338 Q80 318 160 328 T300 330 L300 450 L0 450 Z" fill="#2e2420"/>
    <path d="M0 390 Q80 374 160 382 T300 382 L300 450 L0 450 Z" fill="#221c18"/>
    <g fill="#181210">
      <rect x="104" y="178" width="92" height="122"/>
      <path d="M96 182 L150 152 L204 182 Z"/>
      <rect x="118" y="152" width="64" height="30"/>
      <path d="M112 156 L150 130 L188 156 Z"/>
      <rect x="134" y="130" width="32" height="22"/>
      <rect x="144" y="118" width="12" height="12"/>
    </g>
    ${[[112,196],[128,196],[152,196],[168,196],[112,230],[128,230]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd060" opacity="${y===196?'.32':'.26'}"/>`).join('')}
    <g fill="#100e0c">
      <circle cx="150" cy="290" r="5"/>
      <rect x="147" y="295" width="5" height="8" rx="1"/>
    </g>
    <path d="M40 278 Q80 270 100 260 Q120 252 130 264" stroke="#484038" stroke-width="1.2" fill="none" opacity=".6"/>
    <path d="M170 256 Q192 248 220 260 Q240 268 260 278" stroke="#484038" stroke-width="1.2" fill="none" opacity=".6"/>
  `),

  /* ── Middlemarch · Midlands England — church spire, rolling fields, reform-era morning ── */
  middlemarch: scene(`
    <defs>
      <linearGradient id="mmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6a8098"/><stop offset=".44" stop-color="#a0b8c0"/>
        <stop offset=".74" stop-color="#c8d4b8"/><stop offset="1" stop-color="#d8e0c0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mmSky)"/>
    ${stars(5, 7)}
    <path d="M0 318 Q80 298 150 308 T300 312 L300 450 L0 450 Z" fill="#5a7840"/>
    <path d="M0 358 Q80 342 160 350 T300 348 L300 450 L0 450 Z" fill="#4a6830"/>
    <path d="M0 404 Q80 392 160 398 T300 396 L300 450 L0 450 Z" fill="#3a5828"/>
    <g fill="#2a2818">
      <rect x="136" y="178" width="28" height="142"/>
      <rect x="128" y="178" width="44" height="20"/>
      <path d="M122 180 L150 152 L178 180 Z"/>
      <rect x="140" y="152" width="20" height="26"/>
      <path d="M136 154 L150 136 L164 154 Z"/>
      <rect x="146" y="136" width="8" height="18"/>
      <rect x="144" y="128" width="12" height="12"/>
    </g>
    ${[[140,196],[156,196],[140,224],[156,224],[140,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="9" height="14" fill="#ffd880" opacity=".42"/>`).join('')}
    <path d="M100 310 Q120 302 140 308 Q160 314 180 308 Q200 302 220 310" stroke="#8ab050" stroke-width="1" fill="none" opacity=".5"/>
  `),

  /* ── The Painted Bird · Poland — lone child in wartime forest, dark pines, ash sky ── */
  paintedbird: scene(`
    <defs>
      <linearGradient id="pbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a5858"/><stop offset=".5" stop-color="#7a7070"/>
        <stop offset="1" stop-color="#8a7870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pbSky)"/>
    <path d="M0 308 Q150 296 300 306 L300 450 L0 450 Z" fill="#1a1a10"/>
    <path d="M0 358 Q150 348 300 356 L300 450 L0 450 Z" fill="#141410"/>
    <g fill="#0e0e08">
      ${[-60,-30,0,30,60,90,-90].map(dx=>`<rect x="${150+dx}" y="${180}" width="5" height="130"/><path d="M${152+dx} 180 Q${164+dx} 196 ${152+dx} 212 Q${140+dx} 228 ${152+dx} 244 Q${164+dx} 260 ${152+dx} 278 Q${140+dx} 294 ${152+dx} 308" stroke="#0e0e08" stroke-width="12" fill="none"/>`).join('')}
    </g>
    <g fill="#100e08">
      <circle cx="150" cy="288" r="5"/>
      <rect x="147" y="293" width="5" height="15" rx="1"/>
      <path d="M143 305 L147 298 L153 298 L157 305 L154 312 L146 312 Z"/>
    </g>
    ${[134,142,158,166].map(x=>`<path d="M${x} 270 L${x-4} 262 L${x+4} 265 Z" fill="#c83020" opacity=".55"/>`).join('')}
  `),

  /* ── The French Lieutenant's Woman · Lyme Regis — a lone woman on the Cobb in storm wind ── */
  frenchlieutenant: scene(`
    <defs>
      <linearGradient id="flSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3848"/><stop offset=".4" stop-color="#4a6070"/>
        <stop offset=".72" stop-color="#7a9898"/><stop offset="1" stop-color="#9ab8b8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#flSky)"/>
    ${stars(6, 31)}
    <path d="M0 360 Q150 348 300 358 L300 450 L0 450 Z" fill="#2a4858"/>
    <path d="M0 396 Q75 388 150 394 T300 392 L300 450 L0 450 Z" fill="#1e3a4a"/>
    <path d="M0 428 Q75 422 150 427 T300 425 L300 450 L0 450 Z" fill="#162e3c"/>
    <path d="M60 370 Q80 340 100 318 Q110 308 116 310 L118 320 Q104 330 94 360 L60 370 Z" fill="#4a5858"/>
    <path d="M184 370 Q164 340 144 318 Q134 308 130 310 L128 320 Q142 330 152 360 L184 370 Z" fill="#3a4848"/>
    <rect x="60" y="366" width="180" height="12" rx="2" fill="#3a4a58"/>
    <g fill="#180c04">
      <circle cx="150" cy="276" r="8"/>
      <rect x="146" y="284" width="7" height="36" rx="1"/>
      <path d="M138 300 L146 290 L153 290 L161 300 L157 318 L141 318 Z"/>
      <path d="M138 300 Q128 310 132 326 Q136 314 144 312"/>
      <path d="M161 300 Q171 310 167 326 Q163 314 155 312"/>
    </g>
    <path d="M146 284 Q138 278 128 272 Q120 267 118 260" stroke="#180c04" stroke-width="5" fill="none" stroke-linecap="round"/>
  `),

  /* ── The Sea, The Sea · British coast — reclusive writer's house above wild grey waters ── */
  seathesea: scene(`
    <defs>
      <linearGradient id="ssSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3848"/><stop offset=".38" stop-color="#4a6070"/>
        <stop offset=".65" stop-color="#7a9898"/><stop offset="1" stop-color="#9ab4b4"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ssSky)"/>
    ${stars(8, 37)}
    <g fill="#2a2e30">
      <rect x="128" y="188" width="44" height="132"/>
      <path d="M120 192 L150 168 L180 192 Z"/>
      <rect x="136" y="168" width="28" height="24"/>
      <rect x="144" y="156" width="12" height="14"/>
    </g>
    <rect x="134" y="210" width="12" height="16" fill="#ffd060" opacity=".52"/>
    <rect x="154" y="210" width="10" height="16" fill="#ffd060" opacity=".42"/>
    <rect x="134" y="240" width="12" height="14" fill="#ffd060" opacity=".36"/>
    <path d="M0 348 Q150 334 300 346 L300 450 L0 450 Z" fill="#3a6878"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${30+i*40} ${360+i%2*8} Q${50+i*40} ${352+i%2*6} ${70+i*40} ${360+i%2*8}" stroke="#7ab0c0" stroke-width="1.2" fill="none" opacity=".45"/>`).join('')}
    <path d="M0 402 Q150 394 300 400 L300 450 L0 450 Z" fill="#2a5868"/>
    <path d="M0 432 Q150 424 300 430 L300 450 L0 450 Z" fill="#1e4858"/>
  `),

  /* ── Love Among the Chickens · Rural Sussex — cottage, comic chaos, chickens at dawn ── */
  lovechickens: scene(`
    <defs>
      <linearGradient id="lcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a6a8a"/><stop offset=".44" stop-color="#8ab4c8"/>
        <stop offset=".74" stop-color="#c8d8a0"/><stop offset="1" stop-color="#d8e0a0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lcSky)"/>
    ${stars(6, 41)}
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#6a8040"/>
    <path d="M0 370 Q150 360 300 368 L300 450 L0 450 Z" fill="#5a7030"/>
    <g fill="#2a2010">
      <rect x="106" y="228" width="88" height="96"/>
      <path d="M98 232 L150 196 L202 232 Z"/>
      <rect x="122" y="280" width="56" height="44"/>
      <rect x="116" y="228" width="68" height="8" fill="#4a3820"/>
    </g>
    <rect x="134" y="242" width="32" height="22" fill="#3a2c18" rx="1"/>
    <rect x="142" y="248" width="16" height="16" fill="#ffd880" opacity=".48"/>
    ${Array.from({length:5}).map((_,i)=>`<g fill="#c8a030"><circle cx="${96+i*28}" cy="${342+i%2*10}" r="5"/><path d="M${94+i*28} ${344+i%2*10} L${88+i*28} ${355+i%2*10} L${102+i*28} ${355+i%2*10} Z"/><path d="M${100+i*28} ${342+i%2*10} L${108+i*28} ${339+i%2*10}" stroke="#c8a030" stroke-width="1.4"/></g>`).join('')}
  `),

  /* ── The Summer Book · Finnish archipelago — midsummer island, silver water, girl and grandmother ── */
  summerbook: scene(`
    <defs>
      <linearGradient id="sbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#a8c4d8"/><stop offset=".44" stop-color="#c8dce0"/>
        <stop offset=".72" stop-color="#d8ecf0"/><stop offset="1" stop-color="#e8f4f8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sbSky)"/>
    <circle cx="150" cy="100" r="56" fill="#fff8e8" opacity=".82"/>
    <circle cx="150" cy="100" r="24" fill="#fffce0" opacity=".88"/>
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#8ab8c8"/>
    <path d="M0 348 Q75 340 150 346 T300 344 L300 450 L0 450 Z" fill="#6aa4b8"/>
    <path d="M0 390 Q75 382 150 388 T300 386 L300 450 L0 450 Z" fill="#5090a8"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${50+i*34} ${326+i%2*6} Q${66+i*34} ${318+i%2*4} ${82+i*34} ${326+i%2*6}" stroke="#c8e4ec" stroke-width=".9" fill="none" opacity=".45"/>`).join('')}
    <g fill="#2a3c28">
      <path d="M0 310 Q0 280 20 268 Q30 264 40 276 Q50 290 50 310 Z"/>
      <path d="M240 312 Q240 280 260 264 Q270 256 284 266 Q296 278 300 310 Z"/>
    </g>
    <g fill="#3a4830" opacity=".8">
      <rect x="116" y="266" width="5" height="48"/>
      <ellipse cx="118" cy="260" rx="16" ry="20"/>
      <rect x="172" y="278" width="4" height="36"/>
      <ellipse cx="174" cy="274" rx="12" ry="16"/>
    </g>
    <g fill="#1a1810">
      <circle cx="136" cy="302" r="4.5"/>
      <rect x="134" y="306" width="4" height="8" rx="1"/>
      <circle cx="164" cy="308" r="3.5"/>
      <rect x="162" y="311" width="3" height="6" rx="1"/>
    </g>
  `),

  /* ── The Book of Disquiet · Lisbon — a clerk's window, Tagus below, fado twilight ── */
  bookdisquiet: scene(`
    <defs>
      <linearGradient id="bqSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2040"/><stop offset=".4" stop-color="#5a4868"/>
        <stop offset=".7" stop-color="#9a7860"/><stop offset="1" stop-color="#c0a06a"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bqSky)"/>
    ${stars(12, 23)}
    <path d="M0 338 Q150 326 300 336 L300 450 L0 450 Z" fill="#3a4a68"/>
    <path d="M0 374 Q75 366 150 372 T300 370 L300 450 L0 450 Z" fill="#2a3a58"/>
    <path d="M0 410 Q75 404 150 408 T300 406 L300 450 L0 450 Z" fill="#1e2e48"/>
    <g fill="#1a1828" opacity=".88">
      <rect x="0" y="220" width="68" height="218"/>
      <rect x="76" y="248" width="52" height="190"/>
      <rect x="172" y="240" width="56" height="198"/>
      <rect x="232" y="212" width="68" height="226"/>
    </g>
    ${[[8,240],[22,240],[8,270],[22,270],[8,298],[240,232],[256,232],[240,262],[240,290]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e0a050" opacity=".35"/>`).join('')}
    <rect x="106" y="156" width="88" height="70" fill="#201828" opacity=".9"/>
    <rect x="112" y="162" width="76" height="58" fill="#2e2438"/>
    <rect x="116" y="168" width="30" height="46" fill="#e8c070" opacity=".2"/>
    <rect x="154" y="168" width="30" height="46" fill="#e8c070" opacity=".15"/>
    <g fill="#180e04">
      <rect x="143" y="180" width="14" height="34" rx="1"/>
      <circle cx="150" cy="177" r="8"/>
    </g>
  `),

  /* ── The Remains of the Day · Darlington Hall — a butler at dusk, English country estate ── */
  remainsday: scene(`
    <defs>
      <linearGradient id="rdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3850"/><stop offset=".4" stop-color="#6a6888"/>
        <stop offset=".7" stop-color="#b09880"/><stop offset="1" stop-color="#d0b888"/>
      </linearGradient>
      <radialGradient id="rdSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffd890" stop-opacity=".6"/>
        <stop offset="1" stop-color="#ffd890" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#rdSky)"/>
    ${stars(7, 43)}
    <circle cx="188" cy="188" r="72" fill="url(#rdSun)"/>
    <path d="M0 310 Q150 298 300 308 L300 450 L0 450 Z" fill="#4a5838"/>
    <path d="M0 362 Q150 352 300 360 L300 450 L0 450 Z" fill="#3a4828"/>
    <g fill="#1a1808">
      <rect x="88" y="186" width="124" height="128"/>
      <path d="M80 190 L150 158 L220 190 Z"/>
      <rect x="100" y="158" width="100" height="32"/>
      <path d="M96 162 L150 134 L204 162 Z"/>
      <rect x="120" y="134" width="60" height="28"/>
      <rect x="144" y="122" width="12" height="14"/>
    </g>
    ${[[96,204],[112,204],[96,234],[112,234],[164,204],[180,204],[164,234],[180,234],[96,264],[112,264]].map(([x,y])=>`<rect x="${x}" y="${y}" width="11" height="18" fill="#ffd060" opacity=".35"/>`).join('')}
    <g fill="#100c04">
      <rect x="147" y="284" width="6" height="28" rx="1"/>
      <circle cx="150" cy="281" r="7"/>
      <path d="M140 298 L147 288 L153 288 L160 298 L156 314 L144 314 Z"/>
    </g>
    <path d="M0 310 Q150 302 300 308" stroke="#b09880" stroke-width=".7" fill="none" opacity=".3"/>
  `),

  /* ── A Gentleman in Moscow · Hotel Metropol — chandeliers, an elegant prisoner above Red Square ── */
  gentleman: scene(`
    <defs>
      <linearGradient id="gmMSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".5" stop-color="#2e2a3e"/>
        <stop offset="1" stop-color="#3e3648"/>
      </linearGradient>
      <radialGradient id="gmMC" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe090" stop-opacity=".75"/>
        <stop offset="1" stop-color="#ffe090" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gmMSky)"/>
    ${stars(10, 47)}
    <rect x="0" y="160" width="300" height="290" fill="#1e1820"/>
    <g fill="#c8a040" opacity=".65">
      <rect x="0" y="158" width="300" height="6"/>
      <rect x="0" y="210" width="300" height="4"/>
      <rect x="0" y="250" width="300" height="3"/>
    </g>
    <circle cx="150" cy="128" r="62" fill="url(#gmMC)"/>
    <g fill="#c8a040" opacity=".78">
      <circle cx="150" cy="108" r="6"/>
      <ellipse cx="150" cy="108" rx="32" ry="8" fill="none" stroke="#c8a040" stroke-width="1.5"/>
      ${[-30,-15,0,15,30].map(dx=>`<circle cx="${150+dx}" cy="128" r="3.5"/><line x1="${150+dx}" y1="108" x2="${150+dx}" y2="128" stroke="#c8a040" stroke-width="1.2"/>`).join('')}
    </g>
    ${Array.from({length:4}).map((_,i)=>`<rect x="${106+i*24}" y="170" width="18" height="26" fill="#c8a040" opacity=".22"/>`).join('')}
    ${Array.from({length:5}).map((_,i)=>`<rect x="${100+i*24}" y="216" width="16" height="22" fill="#c8a040" opacity=".18"/>`).join('')}
    <g fill="#1e1820">
      <rect x="138" y="282" width="24" height="34" rx="1"/>
      <circle cx="150" cy="278" r="9"/>
      <path d="M133 298 L138 286 L162 286 L167 298 L162 316 L138 316 Z"/>
    </g>
    <rect x="0" y="380" width="300" height="70" fill="#1a1828"/>
    <path d="M0 380 Q150 374 300 378" stroke="#c8a040" stroke-width=".6" fill="none" opacity=".22"/>
  `),

  /* ── All the Light We Cannot See · Saint-Malo — a radio tower, bombed city, a blind girl ── */
  allthelight: scene(`
    <defs>
      <linearGradient id="alSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2838"/><stop offset=".38" stop-color="#3a5068"/>
        <stop offset=".7" stop-color="#6a8090"/><stop offset="1" stop-color="#8aa0a0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#alSky)"/>
    ${stars(8, 53)}
    <g fill="#182028">
      <rect x="0" y="266" width="300" height="184"/>
      <rect x="86" y="214" width="24" height="52"/>
      <rect x="130" y="196" width="40" height="70"/>
      <rect x="182" y="226" width="26" height="40"/>
      <rect x="52" y="244" width="30" height="22"/>
      <rect x="220" y="238" width="30" height="28"/>
    </g>
    <rect x="146" y="128" width="8" height="86" fill="#182028"/>
    <rect x="138" y="128" width="24" height="6" fill="#182028"/>
    ${[-20,-8,4,16].map(y=>`<path d="M130 ${128+y} L150 ${128+y-10} L170 ${128+y}" stroke="#182028" stroke-width="2" fill="none"/>`).join('')}
    <rect x="143" y="102" width="14" height="28" fill="#182028"/>
    <rect x="141" y="98" width="18" height="6" fill="#182028"/>
    ${[[90,230],[106,230],[90,248],[106,248],[134,210],[152,210],[134,226],[152,226]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="13" fill="#ffd060" opacity="${y<230?'.22':'.18'}"/>`).join('')}
    <path d="M0 268 Q150 260 300 266" stroke="#8aa0a0" stroke-width=".7" fill="none" opacity=".3"/>
    <path d="M0 302 Q150 294 300 300" stroke="#6a8090" stroke-width=".5" fill="none" opacity=".2"/>
  `),

  /* ── Outline Trilogy · London/Athens — a woman listening, the sea, a life held in brackets ── */
  outlinetrilogy: scene(`
    <defs>
      <linearGradient id="otSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#283848"/><stop offset=".44" stop-color="#4a6878"/>
        <stop offset=".72" stop-color="#88a8b8"/><stop offset="1" stop-color="#b0ccd8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#otSky)"/>
    ${stars(7, 59)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#3a6888"/>
    <path d="M0 354 Q75 346 150 352 T300 350 L300 450 L0 450 Z" fill="#2a5878"/>
    <path d="M0 392 Q75 386 150 390 T300 388 L300 450 L0 450 Z" fill="#1e4868"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${60+i*40} ${334+i%2*8} Q${78+i*40} ${326+i%2*6} ${96+i*40} ${334+i%2*8}" stroke="#7ab0c0" stroke-width="1" fill="none" opacity=".4"/>`).join('')}
    <g fill="#e8f0f4" opacity=".18">
      <circle cx="150" cy="148" r="60"/>
    </g>
    <g fill="#1a2030">
      <circle cx="150" cy="258" r="7"/>
      <rect x="146" y="265" width="7" height="30" rx="1"/>
      <path d="M138 280 L146 268 L154 268 L162 280 L158 298 L142 298 Z"/>
      <path d="M138 280 Q128 290 132 304 Q136 292 144 290"/>
      <path d="M162 280 Q172 290 168 304 Q164 292 156 290"/>
    </g>
    <rect x="108" y="88" width="84" height="6" fill="#c8d8e0" opacity=".25"/>
    <rect x="114" y="100" width="72" height="5" fill="#c8d8e0" opacity=".2"/>
    <rect x="118" y="112" width="64" height="4" fill="#c8d8e0" opacity=".16"/>
    <rect x="120" y="122" width="60" height="4" fill="#c8d8e0" opacity=".13"/>
    <rect x="116" y="132" width="68" height="4" fill="#c8d8e0" opacity=".11"/>
  `),

  /* ── Fingersmith · London — a woman in an asylum window, Victorian fog, dark roses ── */
  fingersmith: scene(`
    <defs>
      <linearGradient id="fsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1820"/><stop offset=".5" stop-color="#2e2838"/>
        <stop offset="1" stop-color="#44384a"/>
      </linearGradient>
      <radialGradient id="fsG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#d0a8b0" stop-opacity=".4"/>
        <stop offset="1" stop-color="#d0a8b0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fsSky)"/>
    ${stars(8, 61)}
    <rect x="0" y="238" width="300" height="212" fill="#1a1820"/>
    <circle cx="150" cy="180" r="80" fill="url(#fsG)"/>
    <g fill="#100e18">
      <rect x="0" y="238" width="76" height="212"/>
      <rect x="224" y="238" width="76" height="212"/>
      <rect x="84" y="256" width="54" height="194"/>
      <rect x="164" y="256" width="54" height="194"/>
    </g>
    ${[[90,270],[104,270],[90,298],[104,298],[172,268],[186,268],[172,296]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#d8a8b8" opacity=".28"/>`).join('')}
    <rect x="118" y="128" width="64" height="90" fill="#1a1628"/>
    <rect x="124" y="134" width="52" height="78" fill="#241c30"/>
    <rect x="126" y="138" width="22" height="68" fill="#d0a8b0" opacity=".12"/>
    <rect x="152" y="138" width="22" height="68" fill="#d0a8b0" opacity=".09"/>
    <g fill="#0e0c16">
      <rect x="143" y="154" width="14" height="40" rx="1"/>
      <circle cx="150" cy="151" r="8"/>
    </g>
    ${[-16,-6,4,14].map(dx=>`<circle cx="${150+dx}" cy="${238}" r="4" fill="#901828" opacity=".6"/>`).join('')}
    ${[-20,-10,0,10,20].map(dx=>`<path d="M${150+dx} 228 Q${146+dx} 218 ${150+dx} 210 Q${154+dx} 218 ${150+dx} 228" fill="#901828" opacity=".5"/>`).join('')}
  `),

  /* ── White Teeth · North London — a multicultural street, mosque minaret, chip shop ── */
  whiteteeth: scene(`
    <defs>
      <linearGradient id="wtSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4868"/><stop offset=".5" stop-color="#6a7898"/>
        <stop offset=".78" stop-color="#9a8870"/><stop offset="1" stop-color="#c0a870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wtSky)"/>
    ${stars(9, 67)}
    <g fill="#1a1c28">
      <rect x="0" y="230" width="60" height="220"/>
      <rect x="64" y="246" width="48" height="204"/>
      <rect x="116" y="212" width="44" height="238"/>
      <rect x="164" y="228" width="56" height="222"/>
      <rect x="224" y="218" width="76" height="232"/>
    </g>
    ${Array.from({length:16}).map((_,i)=>{const x=8+(i%4)*16, y=248+Math.floor(i/4)*30; const lit=i===5||i===9||i===13; return `<rect x="${x}" y="${y}" width="11" height="15" fill="${lit?'#ffc848':'#242838'}" opacity="${lit?'.75':'.7'}"/>`;}).join('')}
    <rect x="128" y="168" width="20" height="44" fill="#1a1c28"/>
    <path d="M128 170 Q138 158 148 170 Z" fill="#1a1c28"/>
    <rect x="124" y="166" width="28" height="4" fill="#1a1c28"/>
    <circle cx="138" cy="162" r="4" fill="#c8a040" opacity=".6"/>
    <rect x="136" y="136" width="4" height="28" fill="#1a1c28"/>
    <rect x="118" y="214" width="6" height="14" fill="#ffc848" opacity=".45"/>
    <rect x="134" y="214" width="6" height="14" fill="#ffc848" opacity=".38"/>
    <rect x="0" y="394" width="300" height="56" fill="#141218"/>
    <path d="M0 394 Q150 388 300 392" stroke="#c0a870" stroke-width=".5" fill="none" opacity=".2"/>
  `),

  /* ── The Master · Rye — Henry James at his desk, the English coast, gaslight on a manuscript ── */
  themaster: scene(`
    <defs>
      <linearGradient id="tmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1c1810"/><stop offset=".5" stop-color="#2e2818"/>
        <stop offset="1" stop-color="#3e3420"/>
      </linearGradient>
      <radialGradient id="tmG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffd060" stop-opacity=".55"/>
        <stop offset="1" stop-color="#ffd060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tmSky)"/>
    ${stars(8, 71)}
    <rect x="0" y="234" width="300" height="216" fill="#181208"/>
    <rect x="108" y="118" width="84" height="128" fill="#1e1810"/>
    <rect x="113" y="123" width="74" height="118" fill="#2a2010"/>
    <circle cx="150" cy="170" r="70" fill="url(#tmG)"/>
    <rect x="117" y="127" width="32" height="50" fill="#e8c060" opacity=".18"/>
    <rect x="153" y="127" width="32" height="50" fill="#e8c060" opacity=".12"/>
    <rect x="0" y="234" width="300" height="4" fill="#c0a038" opacity=".18"/>
    <g fill="#1e1810">
      <rect x="116" y="270" width="68" height="48" rx="2"/>
      <rect x="120" y="278" width="60" height="6" rx="1"/>
      <rect x="120" y="290" width="52" height="4" rx="1"/>
      <rect x="120" y="300" width="56" height="4" rx="1"/>
      <rect x="120" y="310" width="44" height="4" rx="1"/>
    </g>
    <g fill="#100e08">
      <rect x="144" y="212" width="12" height="26" rx="1"/>
      <circle cx="150" cy="209" r="7.5"/>
      <path d="M138 226 L144 216 L156 216 L162 226 L158 240 L142 240 Z"/>
    </g>
    <rect x="126" y="322" width="48" height="6" fill="#c0a038" opacity=".2"/>
  `),

  /* ── Sexing the Cherry · London 1630s — a giant woman, river Thames, a boy and exotic fruits ── */
  sexingcherry: scene(`
    <defs>
      <linearGradient id="scSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3a5a"/><stop offset=".4" stop-color="#4a6a8a"/>
        <stop offset=".7" stop-color="#7a9aaa"/><stop offset="1" stop-color="#9ab8c0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#scSky)"/>
    ${stars(8, 73)}
    <path d="M0 342 Q150 330 300 340 L300 450 L0 450 Z" fill="#3a6888"/>
    <path d="M0 376 Q75 368 150 374 T300 372 L300 450 L0 450 Z" fill="#2a5878"/>
    <path d="M0 414 Q75 408 150 412 T300 410 L300 450 L0 450 Z" fill="#1e4868"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${50+i*42} ${354+i%2*8} Q${70+i*42} ${346+i%2*6} ${90+i*42} ${354+i%2*8}" stroke="#6ab0c0" stroke-width="1" fill="none" opacity=".4"/>`).join('')}
    <g fill="#1a2838">
      <rect x="0" y="270" width="66" height="72"/>
      <rect x="234" y="260" width="66" height="82"/>
    </g>
    <g fill="#2a1808">
      <ellipse cx="150" cy="220" rx="36" ry="54"/>
      <rect x="130" y="274" width="40" height="68" rx="4"/>
      <circle cx="150" cy="160" r="28"/>
    </g>
    <g fill="#100e06">
      <circle cx="130" cy="272" r="8"/>
      <rect x="127" y="280" width="6" height="20" rx="1"/>
      <circle cx="170" cy="269" r="7"/>
      <rect x="167" y="277" width="6" height="18" rx="1"/>
    </g>
    ${[-14,0,14].map(dx=>`<circle cx="${150+dx}" cy="${180}" r="6" fill="#c82030" opacity=".7"/>`).join('')}
    ${[-7,7].map(dx=>`<path d="M${150+dx} 174 Q${150+dx+4} 166 ${150+dx}" stroke="#4a2810" stroke-width="1.2" fill="none"/>`).join('')}
  `),

  /* ── Pride and Prejudice · Hertfordshire — Longbourn house, rolling English fields, a morning walk ── */
  prideprej: scene(`
    <defs>
      <linearGradient id="ppjSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7a9ab0"/><stop offset=".44" stop-color="#a8c4c0"/>
        <stop offset=".72" stop-color="#c8dab8"/><stop offset="1" stop-color="#d8e8c0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ppjSky)"/>
    ${stars(5, 259)}
    <path d="M0 312 Q80 294 150 302 T300 308 L300 450 L0 450 Z" fill="#5a7840"/>
    <path d="M0 358 Q80 342 150 350 T300 348 L300 450 L0 450 Z" fill="#4a6830"/>
    <path d="M0 406 Q80 392 150 400 T300 396 L300 450 L0 450 Z" fill="#3a5820"/>
    <g fill="#2a2618">
      <rect x="88" y="200" width="124" height="118"/>
      <path d="M80 204 L150 170 L220 204 Z"/>
      <rect x="102" y="170" width="96" height="34"/>
      <path d="M96 174 L150 144 L204 174 Z"/>
      <rect x="120" y="144" width="60" height="30"/>
      <rect x="140" y="132" width="20" height="14"/>
    </g>
    ${[[94,216],[110,216],[158,216],[174,216],[94,248],[110,248],[158,248],[174,248]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd880" opacity="${y===216?'.38':'.30'}"/>`).join('')}
    <g fill="#c8e8c0" opacity=".55">
      <path d="M40 310 Q56 298 72 310 Q64 302 56 300 Q48 302 40 310 Z"/>
      <path d="M220 308 Q236 296 252 308 Q244 300 236 298 Q228 300 220 308 Z"/>
    </g>
    <g fill="#1a1808">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="16" rx="1"/>
      <path d="M141 316 L147 306 L153 306 L159 316 L156 326 L144 326 Z"/>
    </g>
    <path d="M0 312 Q150 306 300 310" stroke="#c8dab8" stroke-width=".5" fill="none" opacity=".3"/>
  `),

  /* ── The Book Thief · Molching, Germany — a girl on a snowy street, books, ash sky ── */
  bookthief: scene(`
    <defs>
      <linearGradient id="bthSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#484848"/><stop offset=".44" stop-color="#686868"/>
        <stop offset=".74" stop-color="#888080"/><stop offset="1" stop-color="#a09090"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bthSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#1a1010" opacity=".35"/>
    ${stars(6, 261)}
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#e8e8f0" opacity=".85"/>
    <path d="M0 370 Q150 362 300 368 L300 450 L0 450 Z" fill="#d8d8e4" opacity=".92"/>
    <g fill="#282828">
      <rect x="0" y="214" width="54" height="110"/>
      <path d="M0 216 Q27 202 54 216 Z"/>
      <rect x="62" y="228" width="44" height="96"/>
      <path d="M62 230 Q84 218 106 230 Z"/>
      <rect x="114" y="204" width="56" height="120"/>
      <path d="M114 206 Q142 190 170 206 Z"/>
      <rect x="178" y="218" width="52" height="106"/>
      <path d="M178 220 Q204 208 230 220 Z"/>
      <rect x="240" y="208" width="60" height="116"/>
      <path d="M240 210 Q270 196 300 210 Z"/>
    </g>
    ${[[4,236],[20,236],[4,266],[68,244],[82,244],[118,220],[134,220],[118,248],[134,248],[182,234],[196,234],[244,224],[258,224]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#888888" opacity=".45"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<path d="M${60+i*24} 322 Q${60+i*24} 314 ${72+i*24} 314 Q${84+i*24} 314 ${84+i*24} 322" fill="#e8e8f0" opacity=".5"/>`).join('')}
    <path d="M0 322 Q150 316 300 320" stroke="#d8d8e4" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#181818">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="10" rx="1"/>
    </g>
    <rect x="130" y="290" width="40" height="26" rx="2" fill="#8a3010" opacity=".7"/>
    <rect x="134" y="294" width="32" height="18" rx="1" fill="#c04818" opacity=".5"/>
  `),

  /* ── A Year in Provence · Luberon — lavender fields, a stone farmhouse, blue summer sky ── */
  yearinprovence: scene(`
    <defs>
      <linearGradient id="yipSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a6aaa"/><stop offset=".55" stop-color="#7aaad8"/>
        <stop offset="1" stop-color="#a8c4e2"/>
      </linearGradient>
      <radialGradient id="yipSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe8a0" stop-opacity=".65"/>
        <stop offset="1" stop-color="#ffe8a0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#yipSky)"/>
    <circle cx="196" cy="148" r="60" fill="url(#yipSun)"/>
    <circle cx="196" cy="148" r="16" fill="#ffe8a0" opacity=".82"/>
    ${stars(4, 263)}
    <path d="M0 296 Q150 282 300 294 L300 450 L0 450 Z" fill="#7a6898"/>
    <path d="M0 336 Q150 324 300 334 L300 450 L0 450 Z" fill="#6a5888"/>
    <path d="M0 378 Q150 366 300 376 L300 450 L0 450 Z" fill="#9a8050"/>
    <path d="M0 416 Q150 408 300 414 L300 450 L0 450 Z" fill="#7a6030"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${78+i*16} ${300+i%2*14} Q${84+i*16} ${286+i%2*10} ${90+i*16} ${300+i%2*14}" stroke="#8a7aa8" stroke-width="3.5" fill="none" opacity=".65"/>`).join('')}
    <g fill="#c8a858">
      <rect x="86" y="218" width="128" height="84"/>
      <path d="M78 222 L150 190 L222 222 Z"/>
      <rect x="100" y="190" width="100" height="32"/>
      <path d="M94 194 L150 166 L206 194 Z"/>
      <rect x="118" y="166" width="64" height="28"/>
    </g>
    ${[[92,230],[108,230],[92,258],[108,258],[168,230],[184,230]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#a86828" opacity=".5"/>`).join('')}
    <path d="M0 296 Q150 290 300 294" stroke="#9a9898" stroke-width=".5" fill="none" opacity=".3"/>
  `),

  /* ── Tropic of Cancer · Paris 1930s — rain-slicked Montparnasse, bohemian poverty, the Seine ── */
  tropiccancer: scene(`
    <defs>
      <linearGradient id="tcnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080810"/><stop offset=".4" stop-color="#141420"/>
        <stop offset=".7" stop-color="#1e1c28"/><stop offset="1" stop-color="#2e2838"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tcnSky)"/>
    ${stars(10, 265)}
    <g fill="#10101e">
      <rect x="0" y="178" width="68" height="272"/>
      <rect x="232" y="162" width="68" height="288"/>
      <rect x="76" y="204" width="52" height="246"/>
      <rect x="174" y="192" width="52" height="258"/>
    </g>
    ${[[4,196],[18,196],[4,228],[18,228],[238,178],[252,178],[238,210],[238,242]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e0a038" opacity=".38"/>`).join('')}
    <path d="M0 358 Q150 346 300 356 L300 450 L0 450 Z" fill="#1a1c28"/>
    <path d="M0 394 Q75 386 150 392 T300 390 L300 450 L0 450 Z" fill="#12141e"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${44+i*42} ${368+i%2*8} Q${62+i*42} ${360+i%2*6} ${80+i*42} ${368+i%2*8}" stroke="#4a5868" stroke-width=".9" fill="none" opacity=".4"/>`).join('')}
    <path d="M0 358 Q150 352 300 356" stroke="#e0a038" stroke-width=".4" fill="none" opacity=".2"/>
    <g fill="#0c0c18">
      <circle cx="150" cy="328" r="6.5"/>
      <rect x="146" y="334" width="6" height="22" rx="1"/>
      <path d="M138 350 L146 338 L154 338 L162 350 L158 364 L142 364 Z"/>
    </g>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${96+i*18} ${290} Q${99+i*18} ${280} ${102+i*18} ${290}" stroke="#e0a038" stroke-width=".7" fill="none" opacity=".25"/>`).join('')}
  `),

  /* ── Giovanni's Room · Paris — a dim bar, amber bottles, an American alone with his shame ── */
  giovannisroom: scene(`
    <defs>
      <linearGradient id="gvrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1208"/><stop offset=".5" stop-color="#2e2010"/>
        <stop offset="1" stop-color="#3e2c18"/>
      </linearGradient>
      <radialGradient id="gvrG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8a030" stop-opacity=".55"/>
        <stop offset="1" stop-color="#e8a030" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gvrSky)"/>
    ${stars(6, 267)}
    <rect x="96" y="120" width="108" height="214" fill="#1e1608"/>
    <rect x="102" y="126" width="96" height="202" fill="#2e2010"/>
    <circle cx="150" cy="220" r="88" fill="url(#gvrG)"/>
    ${Array.from({length:6}).map((_,i)=>`<rect x="${108+i*16}" y="${136}" width="10" height="${38+i%2*16}" rx="2" fill="#e8a030" opacity="${0.22+i%2*0.08}"/>`).join('')}
    <rect x="102" y="174" width="96" height="4" fill="#c88020" opacity=".3"/>
    <rect x="102" y="218" width="96" height="3" fill="#c88020" opacity=".22"/>
    <rect x="102" y="258" width="96" height="3" fill="#c88020" opacity=".16"/>
    <rect x="0" y="330" width="300" height="120" fill="#140e06"/>
    <rect x="88" y="308" width="124" height="26" fill="#1a1008"/>
    <path d="M0 330 Q150 324 300 328" stroke="#c88020" stroke-width=".5" fill="none" opacity=".2"/>
    <g fill="#1a1008">
      <circle cx="150" cy="272" r="8"/>
      <rect x="146" y="280" width="7" height="32" rx="1"/>
      <path d="M136 300 L146 284 L154 284 L164 300 L158 320 L142 320 Z"/>
    </g>
    ${Array.from({length:5}).map((_,i)=>`<rect x="${108+i*16}" y="${316}" width="10" height="14" rx="2" fill="#3a2010"/>`).join('')}
  `),

  /* ── Othello · Venice — a canal at night, a palazzo, a green-eyed shadow behind a pillar ── */
  othello: scene(`
    <defs>
      <linearGradient id="otlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080c18"/><stop offset=".44" stop-color="#141c30"/>
        <stop offset=".74" stop-color="#1e2840"/><stop offset="1" stop-color="#2c3a50"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#otlSky)"/>
    ${stars(10, 321)}
    <path d="M0 338 Q150 326 300 336 L300 450 L0 450 Z" fill="#141c2c"/>
    <path d="M0 382 Q150 372 300 380 L300 450 L0 450 Z" fill="#0e1620"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${40+i*44} ${346+i%2*10} Q${54+i*44} ${336+i%2*8} ${68+i*44} ${346+i%2*10}" stroke="#1e3048" stroke-width=".8" fill="none" opacity=".55"/>`).join('')}
    <g fill="#101828">
      <rect x="86" y="170" width="128" height="174"/>
      <path d="M78 174 L150 142 L222 174 Z"/>
      ${Array.from({length:5}).map((_,i)=>`<path d="M${94+i*26} ${170} L${94+i*26} ${192} Q${107+i*26} ${204} ${120+i*26} ${192} L${120+i*26} ${170} Z"/>`).join('')}
    </g>
    ${[[90,206],[106,206],[90,238],[106,238],[162,206],[178,206],[162,238],[178,238],[90,270],[106,270]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="20" fill="#d0a840" opacity="${y===206?'.38':'.25'}"/>`).join('')}
    <path d="M148 188 L148 344 L152 344 L152 188" stroke="#1e3048" stroke-width="2" fill="none" opacity=".55"/>
    <path d="M0 338 Q150 332 300 336" stroke="#2c3a50" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#0a0e14">
      <circle cx="150" cy="320" r="6"/>
      <rect x="147" y="326" width="5" height="20" rx="1"/>
    </g>
  `),

  /* ── The Brothers Karamazov · Staraya Russa — an Orthodox church, a Russian tavern, snow ── */
  brothersk: scene(`
    <defs>
      <linearGradient id="bkaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1c28"/><stop offset=".4" stop-color="#2e3040"/>
        <stop offset=".7" stop-color="#484850"/><stop offset="1" stop-color="#686858"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bkaSky)"/>
    ${stars(11, 323)}
    <path d="M0 326 Q150 314 300 324 L300 450 L0 450 Z" fill="#e8eae8" opacity=".85"/>
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#d4d8d4" opacity=".9"/>
    <path d="M0 418 Q150 410 300 416 L300 450 L0 450 Z" fill="#c4c8c4"/>
    <g fill="#1e2028">
      <rect x="92" y="196" width="116" height="134"/>
      <path d="M84 200 L150 162 L216 200 Z"/>
      <rect x="116" y="162" width="68" height="38"/>
      <path d="M108 168 L150 136 L192 168 Z"/>
      <rect x="130" y="136" width="40" height="32"/>
      <rect x="140" y="120" width="20" height="18"/>
      <ellipse cx="150" cy="118" rx="12" ry="6"/>
      <rect x="147" y="104" width="6" height="16"/>
      <ellipse cx="150" cy="103" rx="6" ry="3"/>
    </g>
    ${[[96,212],[112,212],[96,244],[112,244],[168,212],[184,212],[168,244],[184,244]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#f0e090" opacity="${y===212?'.35':'.25'}"/>`).join('')}
    <rect x="86" y="316" width="128" height="14" fill="#c8d0c8" opacity=".7"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${86+i*18} ${326} Q${90+i*18} ${316} ${92+i*18} ${310} Q${96+i*18} ${316} ${104+i*18} ${326}" fill="#d4d8d4" opacity=".6"/>`).join('')}
    <g fill="#181c20">
      <circle cx="150" cy="314" r="6"/>
      <rect x="147" y="320" width="5" height="8" rx="1"/>
    </g>
  `),

  /* ── For Whom the Bell Tolls · Sierra de Guadarrama — pine mountains, a bridge, dawn mist ── */
  belltolls: scene(`
    <defs>
      <linearGradient id="fwbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2030"/><stop offset=".38" stop-color="#3a4050"/>
        <stop offset=".68" stop-color="#6a6860"/><stop offset="1" stop-color="#9a9880"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fwbSky)"/>
    ${stars(8, 325)}
    <path d="M0 282 Q60 252 110 264 Q140 272 150 258 Q160 244 190 256 Q250 272 300 248 L300 450 L0 450 Z" fill="#3a5030"/>
    <path d="M0 340 Q150 326 300 338 L300 450 L0 450 Z" fill="#2e4028"/>
    <path d="M0 396 Q150 384 300 394 L300 450 L0 450 Z" fill="#243418"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${60+i*30} ${282+i%2*10} Q${64+i*30} ${258+i%2*8} ${68+i*30} ${244+i%2*8} Q${72+i*30} ${228+i%2*6} ${76+i*30} ${224+i%2*6}" stroke="#2e4820" stroke-width="3.5" fill="none" opacity=".65"/>`).join('')}
    <path d="M86 258 L86 298 L214 298 L214 258" fill="none" stroke="#484030" stroke-width="6"/>
    <rect x="86" y="292" width="128" height="10" fill="#484030"/>
    <g fill="#1c1808">
      <circle cx="126" cy="298" r="5.5"/>
      <rect x="123" y="303" width="5" height="12" rx="1"/>
      <circle cx="174" cy="296" r="5"/>
      <rect x="171" y="301" width="5" height="10" rx="1"/>
    </g>
    <path d="M0 282 Q150 276 300 280" stroke="#9a9880" stroke-width=".5" fill="none" opacity=".28"/>
    <rect x="0" y="252" width="300" height="14" fill="#e8f0e8" opacity=".1"/>
  `),

  /* ── Tess of the d'Urbervilles · Dorset — rolling chalk downs, a dairy farm, Stonehenge at dusk ── */
  tess: scene(`
    <defs>
      <linearGradient id="tsdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2830"/><stop offset=".4" stop-color="#4a4848"/>
        <stop offset=".72" stop-color="#7a7060"/><stop offset="1" stop-color="#b0a880"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tsdSky)"/>
    ${stars(8, 327)}
    <path d="M0 308 Q80 288 150 298 T300 302 L300 450 L0 450 Z" fill="#5a6840"/>
    <path d="M0 360 Q80 344 150 352 T300 348 L300 450 L0 450 Z" fill="#4a5830"/>
    <path d="M0 410 Q80 398 150 404 T300 398 L300 450 L0 450 Z" fill="#3a4820"/>
    ${[100,120,140,160,180,200].map((x,i) => `<rect x="${x-3}" y="${268+i%2*12}" width="6" height="${44-i%2*12}" rx="1" fill="#484038"/>`).join('')}
    <rect x="96" y="296" width="108" height="8" fill="#484038"/>
    <g fill="#1c1808">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="14" rx="1"/>
      <path d="M140 312 L147 306 L153 306 L160 312 L158 326 L142 326 Z"/>
    </g>
    <path d="M0 308 Q150 302 300 306" stroke="#b0a880" stroke-width=".5" fill="none" opacity=".25"/>
  `),

  /* ── Jude the Obscure · Oxford — dreaming spires at dusk, a stonemason at the gate ── */
  judeobscure: scene(`
    <defs>
      <linearGradient id="judSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".38" stop-color="#2e2c40"/>
        <stop offset=".68" stop-color="#5a5050"/><stop offset="1" stop-color="#8a8070"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#judSky)"/>
    ${stars(9, 329)}
    <path d="M0 328 Q150 316 300 326 L300 450 L0 450 Z" fill="#2a3020"/>
    <path d="M0 376 Q150 366 300 374 L300 450 L0 450 Z" fill="#202818"/>
    <g fill="#201e2c">
      ${[86,118,150,182,214].map((x,i) => `
        <rect x="${x-10}" y="${172+i%2*18}" width="20" height="${162-i%2*18}"/>
        <path d="M${x-12} ${174+i%2*18} Q${x} ${148+i%2*16} ${x+12} ${174+i%2*18} Z"/>
        <rect x="${x-6}" y="${148+i%2*16}" width="12" height="${30-i%2*6}"/>
        <path d="M${x-8} ${150+i%2*16} Q${x} ${126+i%2*14} ${x+8} ${150+i%2*16} Z"/>
        <rect x="${x-3}" y="${126+i%2*14}" width="6" height="20"/>
        <rect x="${x-4}" y="${118+i%2*12}" width="8" height="10"/>
        <rect x="${x-1}" y="${108+i%2*10}" width="2" height="12"/>
      `).join('')}
    </g>
    <path d="M0 328 Q150 322 300 326" stroke="#8a8070" stroke-width=".5" fill="none" opacity=".28"/>
    <g fill="#181820">
      <circle cx="150" cy="316" r="5.5"/>
      <rect x="147" y="321" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── The Mayor of Casterbridge · Dorchester — a market square, Roman walls, a solitary man ── */
  casterbridge: scene(`
    <defs>
      <linearGradient id="cbrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4048"/><stop offset=".44" stop-color="#585858"/>
        <stop offset=".74" stop-color="#787868"/><stop offset="1" stop-color="#988870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cbrSky)"/>
    ${stars(7, 331)}
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#484430"/>
    <path d="M0 372 Q150 362 300 370 L300 450 L0 450 Z" fill="#383820"/>
    <g fill="#282818">
      <rect x="76" y="198" width="148" height="128"/>
      <path d="M68 202 L150 166 L232 202 Z"/>
      <rect x="116" y="166" width="68" height="36"/>
      <rect x="138" y="154" width="24" height="14"/>
      <rect x="143" y="142" width="14" height="14"/>
    </g>
    ${[[80,214],[96,214],[80,248],[96,248],[174,214],[190,214],[174,248],[190,248],[80,280],[96,280]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#e8c870" opacity="${y===214?'.38':'.28'}"/>`).join('')}
    <rect x="130" y="312" width="40" height="14" fill="#383818"/>
    <path d="M76 322 L76 202" stroke="#282818" stroke-width="4" opacity=".5"/>
    <path d="M224 322 L224 202" stroke="#282818" stroke-width="4" opacity=".5"/>
    <g fill="#181808">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="12" rx="1"/>
    </g>
    <path d="M0 322 Q150 316 300 320" stroke="#988870" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Far from the Madding Crowd · Dorset — rolling downs, a flock of sheep, harvest moonrise ── */
  maddingcrowd: scene(`
    <defs>
      <linearGradient id="fmcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181828"/><stop offset=".38" stop-color="#303040"/>
        <stop offset=".68" stop-color="#585850"/><stop offset="1" stop-color="#888870"/>
      </linearGradient>
      <radialGradient id="fmcMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#f8f0d8" stop-opacity=".7"/>
        <stop offset="1" stop-color="#f8f0d8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#fmcSky)"/>
    ${stars(10, 333)}
    <circle cx="216" cy="162" r="65" fill="url(#fmcMoon)"/>
    <circle cx="216" cy="162" r="18" fill="#f8f0d8" opacity=".78"/>
    <path d="M0 304 Q80 280 150 292 T300 286 L300 450 L0 450 Z" fill="#4a5838"/>
    <path d="M0 356 Q80 340 150 348 T300 340 L300 450 L0 450 Z" fill="#3c4a28"/>
    <path d="M0 408 Q80 396 150 402 T300 394 L300 450 L0 450 Z" fill="#2c3818"/>
    ${Array.from({length:12}).map((_,i)=>`<circle cx="${60+i*16}" cy="${304+i%3*8}" r="${4+i%2*2}" fill="#7a8860" opacity=".55"/>`).join('')}
    <g fill="#181c10">
      <rect x="130" y="238" width="40" height="68"/>
      <path d="M122 242 L150 212 L178 242 Z"/>
      <rect x="140" y="212" width="20" height="30"/>
    </g>
    ${[[134,250],[148,250],[134,276],[148,276]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8c050" opacity="${y===250?'.4':'.28'}"/>`).join('')}
    <g fill="#141008">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── Persuasion · Bath — the Royal Crescent, honey-coloured stone, autumn light ── */
  persuasion: scene(`
    <defs>
      <linearGradient id="perSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#8090a0"/><stop offset=".44" stop-color="#a0a898"/>
        <stop offset=".72" stop-color="#c0b890"/><stop offset="1" stop-color="#d8c890"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#perSky)"/>
    ${stars(5, 335)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#5a6840"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#4a5830"/>
    <path d="M40 230 Q150 210 260 230 Q220 214 150 218 Q80 214 40 230 Z" fill="#c8a858" opacity=".8"/>
    <g fill="#b89848">
      <rect x="40" y="228" width="220" height="98"/>
      ${Array.from({length:12}).map((_,i)=>`<rect x="${46+i*18}" y="${220}" width="8" height="${108}" rx="1" fill="#a88838" opacity=".4"/>`).join('')}
      ${Array.from({length:12}).map((_,i)=>`<path d="M${46+i*18} ${220} Q${50+i*18} ${208} ${54+i*18} ${220} Z" fill="#c8a858"/>`).join('')}
    </g>
    ${Array.from({length:24}).map((_,i)=>`<rect x="${44+i*9}" y="${242}" width="5" height="48" fill="#e8d890" opacity=".18"/>`).join('')}
    ${Array.from({length:24}).map((_,i)=>`<rect x="${44+i*9}" y="${260}" width="5" height="16" fill="#1c1808" opacity=".45"/>`).join('')}
    <rect x="40" y="324" width="220" height="6" fill="#a88838"/>
    <g fill="#1a1808">
      <circle cx="138" cy="314" r="5.5"/>
      <rect x="135" y="319" width="5" height="12" rx="1"/>
      <path d="M128 326 L135 322 L141 322 L148 326 L146 336 L130 336 Z"/>
      <circle cx="164" cy="312" r="5"/>
      <rect x="161" y="317" width="5" height="10" rx="1"/>
    </g>
    <path d="M0 318 Q150 312 300 316" stroke="#d8c890" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Emma · Highbury — a village green, a country house, a morning walk in Surrey ── */
  emma: scene(`
    <defs>
      <linearGradient id="emmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7090b0"/><stop offset=".44" stop-color="#98b0b0"/>
        <stop offset=".72" stop-color="#b8c8a8"/><stop offset="1" stop-color="#d8d8b0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#emmSky)"/>
    ${stars(4, 337)}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#5a7840"/>
    <path d="M0 366 Q150 354 300 364 L300 450 L0 450 Z" fill="#4a6832"/>
    <path d="M0 414 Q150 404 300 412 L300 450 L0 450 Z" fill="#3a5824"/>
    <g fill="#2a2818">
      <rect x="88" y="202" width="124" height="118"/>
      <path d="M80 206 L150 172 L220 206 Z"/>
      <rect x="104" y="172" width="92" height="34"/>
      <path d="M98 176 L150 148 L202 176 Z"/>
      <rect x="122" y="148" width="56" height="28"/>
      <rect x="138" y="136" width="24" height="14"/>
    </g>
    ${[[92,218],[108,218],[92,250],[108,250],[172,218],[188,218],[172,250],[188,250]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#e8d070" opacity="${y===218?'.4':'.30'}"/>`).join('')}
    <g fill="#3a5020" opacity=".7">
      <path d="M42 314 Q56 292 70 314 Q62 298 56 294 Q50 298 42 314 Z"/>
      <path d="M218 312 Q232 290 246 312 Q238 296 232 292 Q226 296 218 312 Z"/>
    </g>
    <g fill="#1a1808">
      <circle cx="150" cy="306" r="5.5"/>
      <rect x="147" y="311" width="5" height="12" rx="1"/>
      <path d="M140 318 L147 314 L153 314 L160 318 L158 330 L142 330 Z"/>
    </g>
    <path d="M0 314 Q150 308 300 312" stroke="#d8d8b0" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── The Secret Garden · Yorkshire — a locked door in a moor wall, a hidden garden, spring blooms ── */
  secretgarden: scene(`
    <defs>
      <linearGradient id="sgrdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6080a0"/><stop offset=".44" stop-color="#80a8b0"/>
        <stop offset=".72" stop-color="#a8c8b8"/><stop offset="1" stop-color="#c8e0c0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sgrdSky)"/>
    ${stars(5, 339)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#5a7848"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#4a6838"/>
    <path d="M0 416 Q150 408 300 414 L300 450 L0 450 Z" fill="#3a5828"/>
    <rect x="0" y="220" width="300" height="100" fill="#4a5830" opacity=".8"/>
    ${[[4,224],[16,224],[4,252],[16,252],[284,224],[284,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#3a4820" opacity=".9"/>`).join('')}
    <rect x="120" y="220" width="60" height="100" fill="#3a4820"/>
    <rect x="128" y="230" width="44" height="78" rx="2" fill="#4a6830"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${130+i*10} ${308} Q${132+i*10} ${280} ${136+i*10} ${260} Q${138+i*10} ${240} ${134+i*10} ${232}" stroke="#6a8a40" stroke-width="2.5" fill="none" opacity=".65"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<circle cx="${128+(i%4)*14}" cy="${248+(Math.floor(i/4))*28}" r="6" fill="#d080a0" opacity="${0.4+(i%3)*0.1}"/>`).join('')}
    ${Array.from({length:6}).map((_,i)=>`<circle cx="${132+(i%3)*16}" cy="${256+(Math.floor(i/3))*24}" r="5" fill="#e0d060" opacity="${0.35+i%2*0.1}"/>`).join('')}
    <rect x="146" y="272" width="8" height="48" rx="1" fill="#2a2010"/>
    <rect x="136" y="270" width="28" height="6" rx="1" fill="#2a2010"/>
    <g fill="#181c10">
      <circle cx="150" cy="308" r="5.5"/>
      <rect x="147" y="313" width="5" height="10" rx="1"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#c8e0c0" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Hamlet · Elsinore — sea-cliff castle, storm clouds, a ghost on the battlements ── */
  hamlet: scene(`
    <defs>
      <linearGradient id="hltSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0e16"/><stop offset=".38" stop-color="#1a2030"/>
        <stop offset=".68" stop-color="#2e3848"/><stop offset="1" stop-color="#465060"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hltSky)"/>
    ${stars(12, 301)}
    <path d="M0 348 Q150 336 300 346 L300 450 L0 450 Z" fill="#1a2838"/>
    <path d="M0 392 Q150 382 300 390 L300 450 L0 450 Z" fill="#0e1c28"/>
    <g fill="#141c24">
      <rect x="86" y="158" width="128" height="194"/>
      <rect x="86" y="148" width="18" height="20"/>
      <rect x="112" y="136" width="18" height="32"/>
      <rect x="144" y="124" width="18" height="44"/>
      <rect x="176" y="136" width="18" height="32"/>
      <rect x="196" y="148" width="18" height="20"/>
    </g>
    ${[[90,174],[106,174],[90,210],[106,210],[152,174],[168,174],[152,210],[168,210],[90,246],[106,246],[152,246],[168,246],[196,174],[196,210]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="20" fill="#c8a840" opacity="${y===174?'.35':'.22'}"/>`).join('')}
    <path d="M0 348 Q150 344 300 348" stroke="#465060" stroke-width=".5" fill="none" opacity=".4"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${40+i*36} ${360+i%2*10} Q${54+i*36} ${350+i%2*8} ${68+i*36} ${360+i%2*10}" stroke="#2e4858" stroke-width=".8" fill="none" opacity=".5"/>`).join('')}
    <g fill="#d8e8f0" opacity=".55">
      <circle cx="150" cy="112" r="6"/>
      <rect x="147" y="118" width="5" height="18" rx="1"/>
      <path d="M138 126 L147 120 L153 120 L162 126 L158 148 L142 148 Z"/>
    </g>
  `),

  /* ── Romeo and Juliet · Verona — a candlelit balcony, terracotta rooftops, warm Italian night ── */
  romeojuliet: scene(`
    <defs>
      <linearGradient id="rjSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0c18"/><stop offset=".4" stop-color="#1e1c30"/>
        <stop offset=".72" stop-color="#3a2e40"/><stop offset="1" stop-color="#5a4050"/>
      </linearGradient>
      <radialGradient id="rjG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8a020" stop-opacity=".6"/>
        <stop offset="1" stop-color="#e8a020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#rjSky)"/>
    ${stars(10, 303)}
    <path d="M0 346 Q150 334 300 344 L300 450 L0 450 Z" fill="#3a3020"/>
    <path d="M0 390 Q150 380 300 388 L300 450 L0 450 Z" fill="#2e2418"/>
    <g fill="#1e1410">
      <rect x="0" y="210" width="78" height="240"/>
      <rect x="222" y="196" width="78" height="254"/>
      <rect x="86" y="232" width="128" height="218"/>
    </g>
    ${[[4,226],[20,226],[4,258],[20,258],[228,212],[244,212],[228,244],[244,244]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#e8a828" opacity=".35"/>`).join('')}
    <rect x="114" y="182" width="72" height="56" fill="#241c10"/>
    <circle cx="150" cy="206" r="50" fill="url(#rjG)"/>
    ${[[118,190],[134,190],[150,190],[166,190],[118,214],[134,214],[150,214],[166,214]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#f8d060" opacity="${y===190?'.5':'.38'}"/>`).join('')}
    <rect x="130" y="238" width="40" height="8" rx="1" fill="#5a4030" opacity=".7"/>
    <g fill="#140e08">
      <circle cx="150" cy="276" r="6"/>
      <rect x="147" y="282" width="5" height="18" rx="1"/>
      <path d="M138 290 L147 286 L153 286 L162 290 L158 310 L142 310 Z"/>
    </g>
    <g fill="#180e08">
      <circle cx="150" cy="328" r="5.5"/>
      <rect x="147" y="333" width="5" height="14" rx="1"/>
    </g>
  `),

  /* ── Don Quixote · La Mancha — windmills on a flat plain, a knight on a gaunt horse ── */
  donquixote: scene(`
    <defs>
      <linearGradient id="dqSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3448"/><stop offset=".42" stop-color="#5a6880"/>
        <stop offset=".72" stop-color="#9090a0"/><stop offset="1" stop-color="#c0b890"/>
      </linearGradient>
      <radialGradient id="dqSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe880" stop-opacity=".65"/>
        <stop offset="1" stop-color="#ffe880" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dqSky)"/>
    ${stars(7, 305)}
    <circle cx="220" cy="168" r="70" fill="url(#dqSun)"/>
    <circle cx="220" cy="168" r="18" fill="#ffe880" opacity=".8"/>
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#a09060"/>
    <path d="M0 366 Q150 356 300 364 L300 450 L0 450 Z" fill="#888048"/>
    <path d="M0 414 Q150 404 300 412 L300 450 L0 450 Z" fill="#706030"/>
    ${[80, 130, 180, 230].map((x,i) => `
      <rect x="${x-8}" y="${220+i%2*14}" width="16" height="${100-i%2*14}" rx="2" fill="#484038"/>
      <line x1="${x}" y1="${220+i%2*14}" x2="${x-22}" y2="${220+i%2*14-22}" stroke="#484038" stroke-width="4" stroke-linecap="round"/>
      <line x1="${x}" y1="${220+i%2*14}" x2="${x+22}" y2="${220+i%2*14-22}" stroke="#484038" stroke-width="4" stroke-linecap="round"/>
      <line x1="${x}" y1="${220+i%2*14}" x2="${x-22}" y2="${220+i%2*14+22}" stroke="#484038" stroke-width="4" stroke-linecap="round"/>
      <line x1="${x}" y1="${220+i%2*14}" x2="${x+22}" y2="${220+i%2*14+22}" stroke="#484038" stroke-width="4" stroke-linecap="round"/>
    `).join('')}
    <g fill="#1e1808">
      <rect x="146" y="252" width="8" height="66" rx="1"/>
      <ellipse cx="150" cy="248" rx="10" ry="6"/>
      <circle cx="150" cy="304" r="6"/>
      <rect x="147" y="310" width="6" height="6" rx="1"/>
      <path d="M136 322 Q150 314 164 322 L166 338 L134 338 Z"/>
    </g>
  `),

  /* ── The Iliad · Troy — bronze shields on the plain, burning pyres, the walls of Ilium ── */
  iliad: scene(`
    <defs>
      <linearGradient id="ildSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1010"/><stop offset=".38" stop-color="#3a2818"/>
        <stop offset=".65" stop-color="#8a4820"/><stop offset="1" stop-color="#c07828"/>
      </linearGradient>
      <radialGradient id="ildG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ff8020" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ff8020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ildSky)"/>
    ${stars(8, 307)}
    <circle cx="82" cy="178" r="80" fill="url(#ildG)"/>
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#5a4020"/>
    <path d="M0 364 Q150 352 300 362 L300 450 L0 450 Z" fill="#48300e"/>
    <g fill="#1a1008">
      <rect x="96" y="154" width="108" height="164"/>
      <rect x="86" y="148" width="18" height="18"/>
      <rect x="196" y="148" width="18" height="18"/>
      ${Array.from({length:5}).map((_,i)=>`<rect x="${96+i*24}" y="${142}" width="10" height="14"/>`).join('')}
      <path d="M86 148 L150 118 L214 148 Z"/>
    </g>
    ${[[100,170],[116,170],[148,170],[164,170],[100,202],[148,202],[164,202]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="20" fill="#e88020" opacity=".22"/>`).join('')}
    <g fill="#cc4010" opacity=".7">
      ${Array.from({length:4}).map((_,i)=>`<path d="M${54+i*56} ${314} Q${58+i*56} ${296} ${62+i*56} ${280} Q${64+i*56} ${270} ${62+i*56} ${260} Q${58+i*56} ${250} ${54+i*56} ${240}" stroke="#ff6010" stroke-width="2" fill="none" opacity=".6"/>`).join('')}
    </g>
    <path d="M0 314 Q150 308 300 312" stroke="#c07828" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#0e0804">
      <circle cx="130" cy="302" r="5.5"/>
      <rect x="127" y="307" width="5" height="10" rx="1"/>
      <circle cx="170" cy="298" r="5"/>
      <rect x="167" y="303" width="5" height="10" rx="1"/>
    </g>
  `),

  /* ── Jane Eyre · Yorkshire — a Gothic manor on the moors, firelight, a locked chamber ── */
  janeeyre: scene(`
    <defs>
      <linearGradient id="jeSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c0e14"/><stop offset=".4" stop-color="#1c202c"/>
        <stop offset=".68" stop-color="#2e2e3c"/><stop offset="1" stop-color="#484448"/>
      </linearGradient>
      <radialGradient id="jeG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e88020" stop-opacity=".65"/>
        <stop offset="1" stop-color="#e88020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#jeSky)"/>
    ${stars(11, 309)}
    <path d="M0 322 Q150 308 300 320 L300 450 L0 450 Z" fill="#282428"/>
    <path d="M0 376 Q150 364 300 374 L300 450 L0 450 Z" fill="#1c1818"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${40+i*46} ${330+i%2*12} Q${54+i*46} ${318+i%2*10} ${68+i*46} ${330+i%2*12}" stroke="#383430" stroke-width="1.5" fill="none" opacity=".55"/>`).join('')}
    <g fill="#181824">
      <rect x="76" y="162" width="148" height="162"/>
      <rect x="76" y="152" width="22" height="16"/>
      <rect x="120" y="140" width="22" height="28"/>
      <rect x="158" y="140" width="22" height="28"/>
      <rect x="202" y="152" width="22" height="16"/>
      <path d="M68 166 L150 130 L232 166 Z"/>
      <rect x="110" y="130" width="80" height="36"/>
      <path d="M102 136 L150 104 L198 136 Z"/>
      <rect x="128" y="104" width="44" height="32"/>
      <rect x="140" y="92" width="20" height="14"/>
    </g>
    <rect x="128" y="230" width="44" height="58" fill="#181824"/>
    <circle cx="150" cy="256" r="38" fill="url(#jeG)"/>
    ${[[132,234],[146,234],[132,260],[146,260],[158,234],[172,234],[158,260],[172,260]].map(([x,y])=>`<rect x="${x}" y="${y}" width="8" height="16" fill="#f0a030" opacity="${y===234?'.55':'.42'}"/>`).join('')}
    <path d="M0 322 Q150 316 300 320" stroke="#484448" stroke-width=".5" fill="none" opacity=".3"/>
  `),

  /* ── Great Expectations · London — Thames fog, Newgate Prison walls, marsh mist at dusk ── */
  greatexpect: scene(`
    <defs>
      <linearGradient id="geSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181c24"/><stop offset=".38" stop-color="#2c3040"/>
        <stop offset=".65" stop-color="#4a4c50"/><stop offset="1" stop-color="#6a6860"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#geSky)"/>
    ${stars(9, 311)}
    <path d="M0 298 Q150 286 300 296 L300 450 L0 450 Z" fill="#2a3028" opacity=".9"/>
    <path d="M0 348 Q150 336 300 346 L300 450 L0 450 Z" fill="#1e2820"/>
    <path d="M0 400 Q150 390 300 398 L300 450 L0 450 Z" fill="#161e16"/>
    <rect x="0" y="0" width="300" height="450" fill="#a0b0b8" opacity=".08"/>
    <g fill="#1a1c20">
      <rect x="0" y="198" width="68" height="250"/>
      <rect x="232" y="182" width="68" height="268"/>
      <rect x="76" y="218" width="56" height="230"/>
      <rect x="170" y="206" width="58" height="242"/>
    </g>
    ${Array.from({length:12}).map((_,i)=>{const x=(i*53+7)%300, y=206+(i*43)%220; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e0c050" opacity="${0.12+((i*7)%5)/12}"/>`;}).join('')}
    <path d="M0 228 Q150 222 300 228" stroke="#6a6860" stroke-width=".5" fill="none" opacity=".25"/>
    <rect x="0" y="220" width="300" height="14" fill="#a0b0b8" opacity=".07"/>
    <rect x="0" y="236" width="300" height="8" fill="#a0b0b8" opacity=".05"/>
    <path d="M0 298 Q75 290 150 296 T300 296" stroke="#4a4c50" stroke-width=".6" fill="none" opacity=".3"/>
    <g fill="#141414">
      <circle cx="150" cy="278" r="6.5"/>
      <rect x="146" y="284" width="6" height="16" rx="1"/>
    </g>
    <path d="M110 164 L120 248 L116 248 L108 164 Z" fill="#1a1c20"/>
    <path d="M186 156 L196 248 L192 248 L184 156 Z" fill="#1a1c20"/>
  `),

  /* ── Slaughterhouse-Five · Dresden — the firestorm glow over the Baroque city, sheltering underground ── */
  slaughterhouse: scene(`
    <defs>
      <linearGradient id="s5Sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0808"/><stop offset=".35" stop-color="#2a1208"/>
        <stop offset=".65" stop-color="#6a2c08"/><stop offset="1" stop-color="#b05010"/>
      </linearGradient>
      <radialGradient id="s5G" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ff6010" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ff6010" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#s5Sky)"/>
    ${stars(5, 313)}
    <circle cx="150" cy="200" r="120" fill="url(#s5G)"/>
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#1a1008"/>
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#120c06"/>
    <g fill="#1a1008" opacity=".85">
      <rect x="80" y="194" width="30" height="132"/>
      <path d="M74 198 L95 166 L116 198 Z"/>
      <rect x="104" y="172" width="22" height="26"/>
      <rect x="120" y="184" width="60" height="142"/>
      <path d="M114 188 L150 156 L186 188 Z"/>
      <rect x="180" y="184" width="40" height="142"/>
      <path d="M176 188 L200 164 L224 188 Z"/>
    </g>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${86+i*30} ${322} Q${90+i*30} ${300} ${94+i*30} ${274} Q${96+i*30} ${254} ${92+i*30} ${236}" stroke="#ff6010" stroke-width="${1.5+i%2*0.5}" fill="none" opacity="${0.3+i%2*0.15}"/>`).join('')}
    <rect x="96" y="348" width="108" height="48" rx="2" fill="#1e1808"/>
    <rect x="100" y="352" width="100" height="40" rx="1" fill="#2a2010"/>
    <g fill="#141008">
      <circle cx="150" cy="368" r="5.5"/>
      <rect x="147" y="373" width="5" height="22" rx="1"/>
    </g>
  `),

  /* ── Crime and Punishment · St. Petersburg — yellow canal houses, a bridge at night, guilt ── */
  crimeandpunish: scene(`
    <defs>
      <linearGradient id="capSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060810"/><stop offset=".38" stop-color="#0e1020"/>
        <stop offset=".68" stop-color="#18202c"/><stop offset="1" stop-color="#283040"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#capSky)"/>
    ${stars(10, 351)}
    <path d="M0 298 Q150 286 300 296 L300 450 L0 450 Z" fill="#181808"/>
    <path d="M0 348 Q150 338 300 346 L300 450 L0 450 Z" fill="#101408"/>
    <path d="M0 398 Q150 390 300 396 L300 450 L0 450 Z" fill="#0c1008"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${28+i*48} ${308+i%2*12} Q${42+i*48} ${296+i%2*10} ${56+i*48} ${308+i%2*12}" stroke="#202808" stroke-width=".7" fill="none" opacity=".6"/>`).join('')}
    <g fill="#d4aa30">
      <rect x="52" y="150" width="64" height="152"/>
      <rect x="184" y="138" width="64" height="164"/>
      ${Array.from({length:4}).map((_,i)=>`<rect x="${56+i*16}" y="${154}" width="10" height="20" fill="#101408" opacity=".7"/>`).join('')}
      ${Array.from({length:4}).map((_,i)=>`<rect x="${188+i*16}" y="${142}" width="10" height="20" fill="#101408" opacity=".7"/>`).join('')}
    </g>
    <g fill="#b88c20">
      <rect x="52" y="298" width="64" height="4"/>
      <rect x="184" y="298" width="64" height="4"/>
    </g>
    ${[[56,184],[72,184],[56,216],[72,216],[188,172],[204,172],[188,204],[204,204]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#f0d070" opacity="${y<200?'.45':'.3'}"/>`).join('')}
    <rect x="86" y="284" width="128" height="18" rx="2" fill="#383020"/>
    <rect x="94" y="290" width="20" height="12" fill="#c8a828"/>
    <rect x="186" y="290" width="20" height="12" fill="#c8a828"/>
    <g fill="#0a0c08">
      <circle cx="150" cy="292" r="5.5"/>
      <rect x="147" y="297" width="5" height="8" rx="1"/>
      <path d="M140 304 L147 300 L153 300 L160 304 L158 316 L142 316 Z"/>
    </g>
    <path d="M0 298 Q150 292 300 296" stroke="#283040" stroke-width=".5" fill="none" opacity=".4"/>
  `),

  /* ── The Trial · Prague — a labyrinth of doors, dark corridors, Kafka's bureaucratic dread ── */
  thetrial: scene(`
    <defs>
      <linearGradient id="trlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c0c10"/><stop offset=".4" stop-color="#181820"/>
        <stop offset=".72" stop-color="#242428"/><stop offset="1" stop-color="#343430"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#trlSky)"/>
    ${stars(7, 355)}
    <g fill="#0e0e14">
      ${Array.from({length:5}).map((_,i)=>`<rect x="${i*60}" y="${80+i%2*20}" width="60" height="${374-i%2*20}"/>`).join('')}
    </g>
    ${Array.from({length:20}).map((_,i)=>{const x=(i*74+8)%300,y=100+(i*53)%300; return `<rect x="${x}" y="${y}" width="22" height="34" rx="2" fill="#181818"/>`;}).join('')}
    ${Array.from({length:20}).map((_,i)=>{const x=(i*74+8)%300,y=100+(i*53)%300; return `<rect x="${x+2}" y="${y+2}" width="18" height="16" fill="#c8a020" opacity="${0.06+(i%4)*0.04}"/>`;}).join('')}
    ${Array.from({length:20}).map((_,i)=>{const x=(i*74+8)%300,y=100+(i*53)%300; return `<rect x="${x+5}" y="${y+6}" width="12" height="7" rx="1" fill="#0a0a10" opacity=".8"/>`;}).join('')}
    <rect x="126" y="140" width="48" height="72" rx="3" fill="#1a1a24"/>
    <rect x="128" y="142" width="44" height="40" fill="#c8a020" opacity=".12"/>
    <rect x="136" y="152" width="28" height="20" rx="1" fill="#080810"/>
    <rect x="148" y="210" width="4" height="8" rx="1" fill="#c8a020" opacity=".4"/>
    <g fill="#0a0a10">
      <circle cx="150" cy="316" r="5.5"/>
      <rect x="147" y="321" width="5" height="18" rx="1"/>
      <path d="M138 330 L147 324 L153 324 L162 330 L160 348 L140 348 Z"/>
    </g>
    <path d="M0 348 Q150 342 300 346" stroke="#343430" stroke-width=".5" fill="none" opacity=".35"/>
  `),

  /* ── The Unbearable Lightness of Being · Prague — a window over rooftops, Soviet dusk, a hat ── */
  unbearablelight: scene(`
    <defs>
      <linearGradient id="ulbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1820"/><stop offset=".38" stop-color="#303040"/>
        <stop offset=".68" stop-color="#504858"/><stop offset="1" stop-color="#706870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ulbSky)"/>
    ${stars(8, 357)}
    <path d="M0 310 Q150 298 300 308 L300 450 L0 450 Z" fill="#2a2430"/>
    <path d="M0 360 Q150 350 300 358 L300 450 L0 450 Z" fill="#1e1828"/>
    <path d="M0 410 Q150 402 300 408 L300 450 L0 450 Z" fill="#181420"/>
    <g fill="#201c28">
      ${[56,108,160,212].map((x,i)=>`
        <rect x="${x}" y="${140+i%2*18}" width="44" height="${174-i%2*18}"/>
        <path d="M${x-6} ${144+i%2*18} L${x+22} ${120+i%2*16} L${x+50} ${144+i%2*18} Z"/>
        <rect x="${x+8}" y="${120+i%2*16}" width="28" height="${24-i%2*8}"/>
      `).join('')}
    </g>
    ${Array.from({length:16}).map((_,i)=>{const col=i%4,row=Math.floor(i/4); const x=60+col*52,y=156+row*34; return `<rect x="${x}" y="${y}" width="10" height="18" fill="#d0a840" opacity="${row===0?'.38':'.22'}"/>`;}).join('')}
    <path d="M0 310 Q150 304 300 308" stroke="#504858" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#161420">
      <circle cx="130" cy="300" r="6"/>
      <rect x="127" y="306" width="5" height="12" rx="1"/>
      <path d="M120 314 L127 308 L133 308 L140 314 L138 326 L122 326 Z"/>
      <circle cx="168" cy="302" r="5.5"/>
      <rect x="165" y="307" width="5" height="10" rx="1"/>
      <path d="M159 313 L165 309 L171 309 L177 313 L175 323 L161 323 Z"/>
    </g>
  `),

};
