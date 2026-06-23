// Illustrated book covers in the "Map of Stories" atlas style.
//
// Each scene is a flat, layered SVG of the book's setting in one signature
// palette — gradient sky, silhouetted land, atmospheric particles, a few faint
// gold stars — meant to sit full-bleed behind the cover's fixed gold frame.
// See design/Book Covers Design - Map of Stories.html for the schema and prompt.

function scene(inner: string): string {
  return `<svg class="cover-art" viewBox="0 0 300 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`;
}

// Deterministic faint gold stars, echoing the atlas (mirrors the design file).
function stars(n: number, seed: number): string {
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = (seed * 37 + i * 53) % 300;
    const y = (seed * 19 + i * 29) % 240;
    const r = (((i * seed) % 10) / 10) * 0.9 + 0.4;
    s += `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#ffe6b0" opacity="${(0.3 + ((i * 7) % 6) / 10).toFixed(2)}"/>`;
  }
  return s;
}

export const BOOK_COVER_SCENES: Record<string, string> = {

  /* ── 狂人日记 Diary of a Madman · Shaoxing — cold moonlit water-town, one lit window ── */
  madman: scene(`
    <defs>
      <linearGradient id="madSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0b1430"/><stop offset=".5" stop-color="#1b2a4a"/>
        <stop offset="1" stop-color="#34435f"/></linearGradient>
      <radialGradient id="madMoon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#f4f7ff"/><stop offset=".5" stop-color="#cdd9f0" stop-opacity=".8"/>
        <stop offset="1" stop-color="#cdd9f0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#madSky)"/>
    <circle cx="150" cy="150" r="110" fill="url(#madMoon)"/>
    <circle cx="150" cy="150" r="40" fill="#eef3ff" opacity=".95"/>
    ${stars(16, 11)}
    <path d="M0 314 L0 288 L34 288 L46 274 L58 288 L96 288 L96 300 L150 300 L150 272 L172 258 L194 272 L194 300 L240 300 L252 288 L264 300 L300 300 L300 450 L0 450 Z" fill="#0a1226"/>
    <rect x="158" y="318" width="14" height="18" rx="1" fill="#ffcf78"/>
    <rect x="0" y="430" width="300" height="20" fill="#070d1c"/>
    <rect x="150" y="430" width="26" height="16" fill="#e9f0ff" opacity=".14"/>
  `),

  /* ── 阿Q正传 The True Story of Ah Q · Shaoxing — faded ochre village dusk, a lantern ── */
  ahq: scene(`
    <defs>
      <linearGradient id="ahqSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6b6a5a"/><stop offset=".45" stop-color="#9b8b66"/>
        <stop offset=".8" stop-color="#b89a63"/><stop offset="1" stop-color="#8a6f44"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ahqSky)"/>
    <circle cx="210" cy="120" r="80" fill="#d9c388" opacity=".4"/>
    <circle cx="210" cy="120" r="30" fill="#e7d5a0" opacity=".6"/>
    ${stars(6, 3)}
    <path d="M0 300 q80 -40 160 -10 t140 -6 V450 H0 Z" fill="#5c5238" opacity=".7"/>
    <g fill="#2c2418">
      <rect x="0" y="330" width="300" height="120"/>
      <rect x="22" y="304" width="42" height="26"/>
      <path d="M14 304 L43 286 L72 304 Z"/>
      <rect x="150" y="298" width="64" height="32"/>
      <path d="M142 298 L182 274 L222 298 Z"/>
    </g>
    <circle cx="182" cy="316" r="11" fill="#ffcf78" opacity=".5"/>
    <rect x="179" y="310" width="6" height="11" rx="2" fill="#ffb24d"/>
  `),

  /* ── 呐喊 Call to Arms · Beijing — crimson dawn breaking over the city wall, awakening ── */
  callarms: scene(`
    <defs>
      <linearGradient id="caSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1422"/><stop offset=".4" stop-color="#4a1c24"/>
        <stop offset=".72" stop-color="#9c2f24"/><stop offset="1" stop-color="#d9692e"/></linearGradient>
      <radialGradient id="caSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe3a6"/><stop offset=".5" stop-color="#ff9a44" stop-opacity=".85"/>
        <stop offset="1" stop-color="#ff9a44" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#caSky)"/>
    ${stars(22, 7)}
    <circle cx="150" cy="300" r="150" fill="url(#caSun)"/>
    <circle cx="150" cy="300" r="46" fill="#ffd98a" opacity=".95"/>
    <g fill="#2a0f12">
      <rect x="0" y="334" width="300" height="116"/>
      <rect x="0" y="312" width="300" height="22"/>
      ${Array.from({ length: 15 }).map((_, i) => `<rect x="${i * 20}" y="305" width="12" height="8"/>`).join('')}
      <rect x="110" y="272" width="80" height="42"/>
      <path d="M104 272 L150 248 L196 272 Z"/>
      <rect x="122" y="252" width="56" height="22"/>
      <path d="M116 252 L150 236 L184 252 Z"/>
    </g>
  `),

  /* ── 彷徨 Wandering · Beijing — violet-grey dusk, fog, a lone figure on a long road ── */
  panghuang: scene(`
    <defs>
      <linearGradient id="phSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#39324a"/><stop offset=".5" stop-color="#5b5168"/>
        <stop offset="1" stop-color="#8a7e88"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#phSky)"/>
    <circle cx="150" cy="140" r="60" fill="#c9bfd0" opacity=".35"/>
    ${stars(8, 5)}
    <ellipse cx="150" cy="250" rx="220" ry="26" fill="#d9d2e0" opacity=".12"/>
    <ellipse cx="150" cy="300" rx="220" ry="30" fill="#d9d2e0" opacity=".10"/>
    <path d="M0 330 q150 -20 300 0 V450 H0 Z" fill="#2a2433"/>
    <path d="M150 330 L138 450 L162 450 Z" fill="#4a4352" opacity=".7"/>
    <g stroke="#1c1824" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M60 364 V300"/>
      <path d="M60 322 L46 300"/><path d="M60 332 L76 308"/><path d="M60 308 L50 290"/>
    </g>
    <circle cx="150" cy="346" r="5" fill="#15111c"/>
    <path d="M150 350 L142 390 L158 390 Z" fill="#15111c"/>
  `),

  /* ── 野草 Wild Grass · Beijing — dark earth, ember horizon, wild grass & sparks ── */
  wildgrass: scene(`
    <defs>
      <linearGradient id="wgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0a10"/><stop offset=".6" stop-color="#1a1018"/>
        <stop offset=".85" stop-color="#5a1f1a"/><stop offset="1" stop-color="#9c3b1e"/></linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wgSky)"/>
    ${stars(14, 9)}
    <ellipse cx="150" cy="450" rx="200" ry="70" fill="#d9531e" opacity=".4"/>
    ${Array.from({ length: 10 }).map((_, i) => {
      const x = (i * 53) % 300; const y = 300 + ((i * 29) % 140); const r = (i % 3) * 0.6 + 0.6;
      return `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffb15a" opacity="${(0.3 + (i % 4) / 10).toFixed(2)}"/>`;
    }).join('')}
    <g stroke="#0a0a0e" fill="none" stroke-width="2.4" stroke-linecap="round">
      ${Array.from({ length: 26 }).map((_, i) => {
        const x = i * 12 + (i % 2 ? 4 : 0); const h = 40 + ((i * 37) % 60); const sway = (i % 2 ? 1 : -1) * (8 + (i % 5) * 3);
        return `<path d="M${x} 450 Q${(x + sway / 2).toFixed(0)} ${(450 - h * 0.6).toFixed(0)} ${(x + sway).toFixed(0)} ${(450 - h).toFixed(0)}"/>`;
      }).join('')}
    </g>
  `),

  /* ── 朝花夕拾 Dawn Blossoms Plucked at Dusk · Shaoxing — warm dusk garden, falling petals ── */
  dawnblossoms: scene(`
    <defs>
      <linearGradient id="dbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e8a25c"/><stop offset=".4" stop-color="#dd7d52"/>
        <stop offset=".74" stop-color="#a85240"/><stop offset="1" stop-color="#5e2f2e"/></linearGradient>
      <radialGradient id="dbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff1d4"/><stop offset=".5" stop-color="#ffd595" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffd595" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dbSky)"/>
    <circle cx="150" cy="150" r="120" fill="url(#dbSun)"/>
    <circle cx="150" cy="150" r="34" fill="#fff3da" opacity=".8"/>
    ${stars(8, 5)}
    <path d="M0 350 q40 -12 80 0 t80 0 t80 0 t80 0 V450 H0 Z" fill="#3a211d"/>
    <g stroke="#2a1714" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M0 38 Q60 70 112 58"/>
      <path d="M40 52 Q70 28 92 34"/>
    </g>
    ${[[20, 46], [52, 50], [86, 42], [108, 58], [70, 30]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#ffd9e0" opacity=".92"/>`).join('')}
    ${Array.from({ length: 14 }).map((_, i) => {
      const x = (i * 61) % 300; const y = (i * 43 + 30) % 330;
      return `<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.4" transform="rotate(${i * 40} ${x} ${y})" fill="#ffdbe2" opacity="${(0.4 + (i % 4) / 10).toFixed(2)}"/>`;
    }).join('')}
  `),

  /* ── 故事新编 Old Tales Retold · Shanghai — bronze mythic sky, many suns, the archer ── */
  oldtales: scene(`
    <defs>
      <linearGradient id="otSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1d3b3c"/><stop offset=".5" stop-color="#3e5a4a"/>
        <stop offset=".8" stop-color="#9c7b3e"/><stop offset="1" stop-color="#caa14e"/></linearGradient>
      <radialGradient id="otSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe9a8"/><stop offset=".6" stop-color="#f4b24e" stop-opacity=".8"/>
        <stop offset="1" stop-color="#f4b24e" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#otSky)"/>
    ${[[60, 70, 16], [150, 48, 24], [240, 84, 15], [110, 140, 11], [212, 150, 11], [40, 162, 9]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${(r * 1.8).toFixed(0)}" fill="url(#otSun)"/><circle cx="${x}" cy="${y}" r="${r}" fill="#ffd98a" opacity=".92"/>`).join('')}
    ${stars(8, 13)}
    <line x1="150" y1="396" x2="150" y2="60" stroke="#ffe6a8" stroke-width="1" opacity=".45"/>
    <path d="M0 330 L70 250 L120 310 L180 240 L250 320 L300 270 V450 H0 Z" fill="#243029"/>
    <path d="M0 362 L60 322 L130 362 L200 318 L300 360 V450 H0 Z" fill="#161f1a"/>
    <path d="M118 348 Q104 372 118 396" stroke="#0e1411" stroke-width="2.6" fill="none"/>
    <line x1="118" y1="372" x2="162" y2="372" stroke="#0e1411" stroke-width="1.4"/>
    <g fill="#0e1411">
      <circle cx="150" cy="372" r="7"/>
      <path d="M150 380 L140 422 L160 422 Z"/>
    </g>
  `),

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
};
