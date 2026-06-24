// Additional Americas — classic-era through contemporary US, Canada, and more.
import { scene, stars } from './helpers';

export const AMERICAS_EXTRA_COVERS: Record<string, string> = {

  /* ── Little Women · Concord, Massachusetts — the March sisters, snow, a warm lamplight parlour ── */
  littlewomen: scene(`
    <defs>
      <linearGradient id="lwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a2038"/><stop offset=".4" stop-color="#3a4060"/>
        <stop offset=".7" stop-color="#6a7080"/><stop offset="1" stop-color="#9098a0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lwSky)"/>
    ${stars(10, 173)}
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#e8e8f0" opacity=".88"/>
    <path d="M0 368 Q150 360 300 366 L300 450 L0 450 Z" fill="#d8d8e8" opacity=".95"/>
    <path d="M0 414 Q150 408 300 412 L300 450 L0 450 Z" fill="#c8c8d8"/>
    <g fill="#1e1c2e">
      <rect x="88" y="178" width="124" height="150"/>
      <path d="M80 182 L150 148 L220 182 Z"/>
      <rect x="100" y="148" width="100" height="34"/>
      <path d="M94 152 L150 122 L206 152 Z"/>
      <rect x="118" y="122" width="64" height="30"/>
      <rect x="144" y="110" width="12" height="14"/>
    </g>
    ${[[94,196],[110,196],[158,196],[174,196],[94,228],[110,228],[158,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="11" height="16" fill="#ffd880" opacity="${y===196?'.42':'.35'}"/>`).join('')}
    <rect x="128" y="274" width="44" height="28" fill="#2e2a40" rx="1"/>
    <rect x="136" y="280" width="28" height="22" fill="#ffd880" opacity=".3"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${94+i*24} 320 Q${94+i*24} 308 ${106+i*24} 308 Q${118+i*24} 308 ${118+i*24} 320" fill="#e8e8f0" opacity=".6"/>`).join('')}
    <path d="M0 322 Q150 314 300 320" stroke="#d0d8e8" stroke-width=".6" fill="none" opacity=".4"/>
  `),

  /* ── The Awakening · Grand Isle, Louisiana — a woman wades into the Gulf, egrets, liberation ── */
  awakening: scene(`
    <defs>
      <linearGradient id="awSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3a5a"/><stop offset=".36" stop-color="#4a6a80"/>
        <stop offset=".65" stop-color="#88a8a0"/><stop offset="1" stop-color="#b0cac0"/>
      </linearGradient>
      <radialGradient id="awSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe8b0" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe8b0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#awSky)"/>
    <circle cx="150" cy="178" r="72" fill="url(#awSun)"/>
    <circle cx="150" cy="178" r="20" fill="#ffe8b0" opacity=".82"/>
    ${stars(6, 177)}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#3a7098"/>
    <path d="M0 354 Q75 346 150 352 T300 350 L300 450 L0 450 Z" fill="#2a5878"/>
    <path d="M0 398 Q75 392 150 396 T300 394 L300 450 L0 450 Z" fill="#1e4868"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${40+i*44} ${326+i%2*8} Q${58+i*44} ${318+i%2*6} ${76+i*44} ${326+i%2*8}" stroke="#7ab8c8" stroke-width="1.1" fill="none" opacity=".4"/>`).join('')}
    <g fill="#f0f0e8" opacity=".78">
      <path d="M120 296 Q122 276 130 268 Q138 260 148 282 Q156 268 166 276 Q174 286 176 302"/>
      <path d="M120 296 Q110 298 106 292 L110 288 Q118 296 120 296"/>
      <path d="M176 302 Q186 300 190 294 L186 290 Q178 298 176 302"/>
    </g>
    <g fill="#1e2c38">
      <rect x="144" y="264" width="12" height="30" rx="1"/>
      <circle cx="150" cy="260" r="10"/>
      <path d="M138 286 L144 274 L156 274 L162 286 L158 304 L142 304 Z"/>
      <path d="M138 286 Q128 298 132 312 Q137 299 144 297"/>
      <path d="M162 286 Q172 298 168 312 Q163 299 156 297"/>
    </g>
  `),

  /* ── The House of Mirth · New York — Lily Bart descending, a gilded ballroom, tragic beauty ── */
  housemirth: scene(`
    <defs>
      <linearGradient id="hmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181010"/><stop offset=".5" stop-color="#2e1e10"/>
        <stop offset="1" stop-color="#3e2e18"/>
      </linearGradient>
      <radialGradient id="hmG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#e8c060" stop-opacity=".6"/>
        <stop offset="1" stop-color="#e8c060" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hmSky)"/>
    ${stars(8, 179)}
    <circle cx="150" cy="178" r="88" fill="url(#hmG)"/>
    <rect x="0" y="292" width="300" height="158" fill="#0e0c08"/>
    <g fill="#c8a038" opacity=".6">
      <rect x="0" y="290" width="300" height="6"/>
      <rect x="0" y="342" width="300" height="4"/>
      <rect x="0" y="388" width="300" height="4"/>
    </g>
    ${Array.from({length:6}).map((_,i)=>`<rect x="${90+i*24}" y="${306}" width="18" height="28" rx="1" fill="#181008"/>`).join('')}
    <g fill="#c8a038" opacity=".52">
      <circle cx="150" cy="138" r="6"/>
      <ellipse cx="150" cy="138" rx="36" ry="9" fill="none" stroke="#c8a038" stroke-width="1.5"/>
      ${[-28,-14,0,14,28].map(dx=>`<circle cx="${150+dx}" cy="${160}" r="3.5"/><line x1="${150+dx}" y1="138" x2="${150+dx}" y2="160" stroke="#c8a038" stroke-width="1.2"/>`).join('')}
    </g>
    <g fill="#201610">
      <rect x="140" y="200" width="20" height="54" rx="2"/>
      <circle cx="150" cy="194" r="14"/>
      <path d="M128 238 L140 212 L160 212 L172 238 L165 268 L135 268 Z"/>
    </g>
    <path d="M128 232 Q112 258 118 286 Q126 264 136 260"/>
    <path d="M172 232 Q188 258 182 286 Q174 264 164 260"/>
  `),

  /* ── The Jungle · Chicago — the stockyards, a Lithuanian immigrant's brutal awakening ── */
  thejungle: scene(`
    <defs>
      <linearGradient id="jgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1808"/><stop offset=".4" stop-color="#2e2808"/>
        <stop offset=".7" stop-color="#4a3808"/><stop offset="1" stop-color="#6a5010"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#jgSky)"/>
    ${stars(6, 181)}
    <g fill="#141208">
      <rect x="0" y="186" width="32" height="264"/>
      <rect x="36" y="214" width="24" height="236"/>
      <rect x="64" y="172" width="36" height="278"/>
      <rect x="104" y="208" width="20" height="242"/>
      <rect x="128" y="186" width="28" height="264"/>
      <rect x="160" y="164" width="34" height="286"/>
      <rect x="198" y="196" width="24" height="254"/>
      <rect x="226" y="174" width="32" height="276"/>
      <rect x="262" y="210" width="38" height="240"/>
    </g>
    ${Array.from({length:8}).map((_,i)=>`<rect x="${68+i*22}" y="${152}" width="6" height="${36+i%2*20}" fill="#141208"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<circle cx="${71+i*22}" cy="${148}" r="4" fill="#8a4808" opacity=".5"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<path d="M${69+i*22} ${148} Q${71+i*22} ${128+i%3*14} ${73+i*22} ${148}" stroke="#6a3008" stroke-width="4" fill="none" opacity=".45"/>`).join('')}
    <path d="M0 350 Q150 340 300 348 L300 450 L0 450 Z" fill="#100e06"/>
    <path d="M0 350 Q150 344 300 348" stroke="#8a4808" stroke-width=".5" fill="none" opacity=".3"/>
    ${Array.from({length:10}).map((_,i)=>{const x=(i*53+11)%300, y=186+(i*41)%170; return `<rect x="${x}" y="${y}" width="3" height="5" fill="#e8a030" opacity="${0.12+((i*7)%5)/10}"/>`;}).join('')}
  `),

  /* ── Winesburg, Ohio — a small Midwestern town, grotesques, gas-lit windows at dusk ── */
  winesburgohio: scene(`
    <defs>
      <linearGradient id="woSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3848"/><stop offset=".4" stop-color="#6a6070"/>
        <stop offset=".72" stop-color="#9a8870"/><stop offset="1" stop-color="#c0a868"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#woSky)"/>
    ${stars(8, 183)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#3a3828"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#2a2818"/>
    <g fill="#1e1c18">
      <rect x="0" y="224" width="60" height="96"/>
      <path d="M0 226 Q30 210 60 226 Z"/>
      <rect x="68" y="240" width="48" height="80"/>
      <path d="M68 242 Q92 228 116 242 Z"/>
      <rect x="122" y="218" width="56" height="102"/>
      <path d="M122 220 Q150 202 178 220 Z"/>
      <rect x="184" y="230" width="52" height="90"/>
      <path d="M184 232 Q210 218 236 232 Z"/>
      <rect x="242" y="218" width="58" height="102"/>
      <path d="M242 220 Q271 204 300 220 Z"/>
    </g>
    ${[[4,244],[18,244],[4,274],[18,274],[72,256],[88,256],[126,234],[142,234],[126,262],[142,262],[188,246],[202,246],[248,234],[262,234]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#ffc848" opacity=".42"/>`).join('')}
    <path d="M0 318 Q150 312 300 316" stroke="#c0a868" stroke-width=".5" fill="none" opacity=".25"/>
    <g fill="#141210">
      <circle cx="150" cy="302" r="4.5"/>
      <rect x="148" y="306" width="4" height="12" rx="1"/>
    </g>
  `),

  /* ── East Goes West · New York — a Korean immigrant in 1930s America, cultural displacement ── */
  eastgoeswest: scene(`
    <defs>
      <linearGradient id="egSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".36" stop-color="#1e2038"/>
        <stop offset=".65" stop-color="#3a3858"/><stop offset="1" stop-color="#5a5878"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#egSky)"/>
    ${stars(14, 187)}
    <g fill="#0e1018">
      <rect x="0" y="158" width="26" height="292"/>
      <rect x="30" y="188" width="18" height="262"/>
      <rect x="52" y="146" width="30" height="304"/>
      <rect x="86" y="176" width="22" height="274"/>
      <rect x="112" y="160" width="28" height="290"/>
      <rect x="144" y="136" width="34" height="314"/>
      <rect x="182" y="178" width="22" height="272"/>
      <rect x="208" y="158" width="28" height="292"/>
      <rect x="240" y="188" width="22" height="262"/>
      <rect x="266" y="158" width="34" height="292"/>
    </g>
    ${Array.from({length:20}).map((_,i)=>{const x=(i*41+13)%300, y=150+(i*37)%220; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e8c050" opacity="${0.12+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 366 Q150 356 300 364 L300 450 L0 450 Z" fill="#1a1c28"/>
    <path d="M0 404 Q75 396 150 402 T300 400 L300 450 L0 450 Z" fill="#14162০"/>
    <path d="M0 366 Q150 360 300 364" stroke="#5a5878" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#080a12">
      <circle cx="150" cy="338" r="6"/>
      <rect x="147" y="344" width="6" height="20" rx="1"/>
      <path d="M140 358 L147 346 L153 346 L160 358 L156 372 L144 372 Z"/>
    </g>
  `),

  /* ── The Heart Is a Lonely Hunter · Georgia — a deaf-mute's café, the town's quiet grief ── */
  heartlonelyhunter: scene(`
    <defs>
      <linearGradient id="hlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2e2838"/><stop offset=".4" stop-color="#5a4a58"/>
        <stop offset=".72" stop-color="#9a8878"/><stop offset="1" stop-color="#c0a870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hlSky)"/>
    ${stars(8, 191)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#2a2018"/>
    <path d="M0 366 Q150 356 300 364 L300 450 L0 450 Z" fill="#201808"/>
    <g fill="#181010">
      <rect x="0" y="228" width="60" height="92"/>
      <rect x="68" y="244" width="46" height="76"/>
      <rect x="120" y="214" width="60" height="106"/>
      <rect x="188" y="230" width="52" height="90"/>
      <rect x="248" y="218" width="52" height="102"/>
    </g>
    ${[[6,246],[22,246],[6,274],[22,274],[72,260],[86,260],[124,230],[138,230],[124,258],[138,258],[192,246],[206,246],[252,234],[266,234]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8a048" opacity=".38"/>`).join('')}
    <rect x="108" y="166" width="84" height="58" fill="#141010"/>
    <rect x="112" y="170" width="76" height="50" fill="#201818"/>
    <rect x="116" y="174" width="30" height="42" fill="#e8a048" opacity=".18"/>
    <rect x="154" y="174" width="30" height="42" fill="#e8a048" opacity=".14"/>
    <rect x="0" y="382" width="300" height="68" fill="#0e0c08"/>
    <path d="M0 382 Q150 376 300 380" stroke="#c0a870" stroke-width=".4" fill="none" opacity=".2"/>
  `),

  /* ── Native Son · Chicago — Bigger Thomas, a South Side tenement, winter dread ── */
  nativeson: scene(`
    <defs>
      <linearGradient id="nsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#181818"/><stop offset=".45" stop-color="#282828"/>
        <stop offset=".8" stop-color="#3a3028"/><stop offset="1" stop-color="#4a3820"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nsSky)"/>
    ${stars(7, 193)}
    <path d="M0 312 Q150 300 300 310 L300 450 L0 450 Z" fill="#dde0e8" opacity=".85"/>
    <path d="M0 358 Q150 348 300 356 L300 450 L0 450 Z" fill="#ccd0d8" opacity=".9"/>
    <path d="M0 406 Q150 398 300 404 L300 450 L0 450 Z" fill="#b8bcc8"/>
    <g fill="#181818">
      <rect x="0" y="188" width="30" height="124"/>
      <rect x="34" y="208" width="24" height="104"/>
      <rect x="62" y="178" width="32" height="134"/>
      <rect x="98" y="200" width="24" height="112"/>
      <rect x="126" y="184" width="30" height="128"/>
      <rect x="160" y="168" width="36" height="144"/>
      <rect x="200" y="196" width="26" height="116"/>
      <rect x="230" y="178" width="30" height="134"/>
      <rect x="264" y="204" width="36" height="108"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*41+7)%300, y=180+(i*33)%130; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e8c050" opacity="${0.1+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 312 Q150 306 300 310" stroke="#dde0e8" stroke-width=".6" fill="none" opacity=".35"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${60+i*24} 312 Q${60+i*24} 302 ${72+i*24} 302 Q${84+i*24} 302 ${84+i*24} 312" fill="#dde0e8" opacity=".5"/>`).join('')}
    <g fill="#0e0e10">
      <circle cx="150" cy="296" r="5.5"/>
      <rect x="147" y="301" width="5" height="12" rx="1"/>
    </g>
  `),

  /* ── The Street · Harlem, New York — Lutie Johnson, a tenement block, 1940s winter night ── */
  thestreet: scene(`
    <defs>
      <linearGradient id="strt2Sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0e18"/><stop offset=".4" stop-color="#1e1c2e"/>
        <stop offset=".72" stop-color="#382a38"/><stop offset="1" stop-color="#4a3840"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#strt2Sky)"/>
    ${stars(9, 197)}
    <path d="M0 330 Q150 318 300 328 L300 450 L0 450 Z" fill="#dde0e8" opacity=".82"/>
    <path d="M0 380 Q150 372 300 378 L300 450 L0 450 Z" fill="#ccd0d8" opacity=".88"/>
    <g fill="#141018">
      <rect x="0" y="184" width="28" height="148"/>
      <rect x="32" y="206" width="22" height="126"/>
      <rect x="58" y="170" width="34" height="162"/>
      <rect x="96" y="198" width="22" height="134"/>
      <rect x="122" y="176" width="28" height="156"/>
      <rect x="154" y="156" width="38" height="176"/>
      <rect x="196" y="192" width="26" height="140"/>
      <rect x="226" y="174" width="32" height="158"/>
      <rect x="262" y="198" width="38" height="134"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*43+9)%300, y=178+(i*37)%150; return `<rect x="${x}" y="${y}" width="4" height="7" fill="#ffc040" opacity="${0.18+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 330 Q150 324 300 328" stroke="#dde0e8" stroke-width=".6" fill="none" opacity=".3"/>
    <g fill="#0c0a14">
      <circle cx="150" cy="312" r="6.5"/>
      <rect x="146" y="318" width="6" height="20" rx="1"/>
      <path d="M138 334 L146 322 L154 322 L162 334 L158 348 L142 348 Z"/>
      <path d="M138 334 Q128 344 132 358 Q136 345 144 343"/>
      <path d="M162 334 Q172 344 168 358 Q164 345 156 343"/>
    </g>
  `),
};
