// Shared building blocks for the illustrated "Map of Stories" book covers.
//
// Each scene is a flat, layered SVG of the book's setting in one signature
// palette — gradient sky, silhouetted land, atmospheric particles, a few faint
// gold stars — meant to sit full-bleed behind the cover's fixed gold frame.
// See design/Book Covers Design - Map of Stories.html for the schema and prompt.

/**
 * Wrap an SVG body in the full-bleed cover artwork element.
 *
 * The rendered cover is a narrow vertical strip (~116px wide × the card's full
 * height, roughly a 0.36 aspect ratio), so a 2:3 canvas would get its sides
 * sliced off. We author on a 300-wide grid for convenience but the viewBox is
 * cropped to the central band that is actually visible: x ∈ [70, 230].
 *
 * SAFE ZONE: keep focal subjects within x ∈ [90, 210] (centred ±60); the
 * [70, 90] and [210, 230] margins may be trimmed on the tallest cards. Content
 * outside [70, 230] is never shown — use it only for full-bleed backgrounds.
 */
export function scene(inner: string): string {
  return `<svg class="cover-art" viewBox="70 0 160 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`;
}

/** Deterministic faint gold stars, echoing the atlas (mirrors the design file). */
export function stars(n: number, seed: number): string {
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = (seed * 37 + i * 53) % 300;
    const y = (seed * 19 + i * 29) % 240;
    const r = (((i * seed) % 10) / 10) * 0.9 + 0.4;
    s += `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#ffe6b0" opacity="${(0.3 + ((i * 7) % 6) / 10).toFixed(2)}"/>`;
  }
  return s;
}

/**
 * Shared Gao-family courtyard-mansion silhouette for Ba Jin's Torrents trilogy
 * (家 · 春 · 秋) — one looming household, rendered across three seasons.
 */
export function mansion(fill: string): string {
  return `<g fill="${fill}">
    <rect x="0" y="334" width="300" height="116"/>
    <rect x="0" y="310" width="300" height="24"/>
    <path d="M18 310 Q30 300 42 310 Z"/><path d="M258 310 Q270 300 282 310 Z"/>
    <rect x="108" y="292" width="84" height="18"/>
    <path d="M82 292 Q98 292 106 282 Q120 266 150 264 Q180 266 194 282 Q202 292 218 292 L218 296 L82 296 Z"/>
    <rect x="130" y="262" width="40" height="14"/>
    <path d="M118 262 Q128 250 150 248 Q172 250 182 262 Z"/>
  </g>`;
}

/** Two red lanterns flanking the mansion gate. */
export function lanterns(opacity = 0.9): string {
  return [126, 174].map(x => `<g opacity="${opacity}"><circle cx="${x}" cy="298" r="10" fill="#ff7a3c" opacity=".4"/><ellipse cx="${x}" cy="298" rx="5" ry="6" fill="#e23b2e"/><rect x="${x - 1}" y="291" width="2" height="3" fill="#7a2a18"/></g>`).join('');
}
