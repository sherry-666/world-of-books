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
};
