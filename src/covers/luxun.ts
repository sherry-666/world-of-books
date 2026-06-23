// Lu Xun (鲁迅) — seven covers.
import { scene, stars } from './helpers';

export const LUXUN_COVERS: Record<string, string> = {

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
    <circle cx="188" cy="120" r="80" fill="#d9c388" opacity=".4"/>
    <circle cx="188" cy="120" r="30" fill="#e7d5a0" opacity=".6"/>
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
      <path d="M104 364 V300"/>
      <path d="M104 322 L90 300"/><path d="M104 332 L120 308"/><path d="M104 308 L94 290"/>
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
};
