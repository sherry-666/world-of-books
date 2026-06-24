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

  /* ── Maud Martha · Chicago — a Black woman's interior life, beauty in ordinary days ── */
  maudmartha: scene(`
    <defs>
      <linearGradient id="mmaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3850"/><stop offset=".44" stop-color="#6a6070"/>
        <stop offset=".74" stop-color="#a08870"/><stop offset="1" stop-color="#c8a870"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mmaSky)"/>
    ${stars(8, 199)}
    <path d="M0 322 Q150 310 300 320 L300 450 L0 450 Z" fill="#2a2018"/>
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#201808"/>
    <g fill="#181210">
      <rect x="0" y="232" width="58" height="92"/>
      <rect x="66" y="248" width="46" height="76"/>
      <rect x="120" y="218" width="60" height="106"/>
      <rect x="188" y="234" width="52" height="90"/>
      <rect x="248" y="222" width="52" height="102"/>
    </g>
    ${[[6,250],[22,250],[6,278],[22,278],[70,264],[84,264],[124,234],[140,234],[124,262],[140,262],[192,250],[206,250],[252,238],[266,238]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8a848" opacity=".4"/>`).join('')}
    <rect x="106" y="170" width="88" height="60" fill="#141010"/>
    <rect x="112" y="176" width="76" height="48" fill="#201818"/>
    <rect x="116" y="180" width="30" height="40" fill="#e8a848" opacity=".2"/>
    <rect x="154" y="180" width="30" height="40" fill="#e8a848" opacity=".15"/>
    <g fill="#100c08">
      <circle cx="150" cy="256" r="7.5"/>
      <rect x="146" y="264" width="7" height="28" rx="1"/>
      <path d="M138 280 L146 268 L154 268 L162 280 L158 296 L142 296 Z"/>
    </g>
    ${[-12,0,12].map(dx=>`<circle cx="${150+dx}" cy="${204}" r="5" fill="#e8a848" opacity=".35"/>`).join('')}
  `),

  /* ── The Haunting of Hill House · New England — a tilted gothic house, a woman at the gate ── */
  hillhouse: scene(`
    <defs>
      <linearGradient id="hhSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0c10"/><stop offset=".4" stop-color="#1e1c22"/>
        <stop offset=".7" stop-color="#3a3030"/><stop offset="1" stop-color="#4e3e38"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hhSky)"/>
    ${stars(10, 203)}
    <path d="M0 324 Q150 312 300 322 L300 450 L0 450 Z" fill="#1a1808"/>
    <path d="M0 376 Q150 368 300 374 L300 450 L0 450 Z" fill="#141208"/>
    <g fill="#1e1a14">
      <path d="M0 266 Q150 252 300 264 L300 290 Q150 278 0 290 Z"/>
    </g>
    <g fill="#14100c" transform="rotate(-3 150 200)">
      <rect x="88" y="182" width="124" height="130"/>
      <path d="M80 186 L150 154 L220 186 Z"/>
      <rect x="100" y="154" width="100" height="32"/>
      <path d="M94 158 L150 128 L206 158 Z"/>
      <rect x="118" y="128" width="64" height="30"/>
      <rect x="130" y="114" width="40" height="16"/>
      <rect x="144" y="102" width="12" height="14"/>
    </g>
    ${[[94,200],[110,200],[94,232],[110,232],[168,200],[184,200],[168,232]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" rx="1" fill="#ffd060" opacity="${y===200?'.22':'.16'}"/>`).join('')}
    <g fill="#0e0c08">
      <circle cx="150" cy="310" r="5"/>
      <rect x="147" y="315" width="5" height="12" rx="1"/>
    </g>
    <circle cx="150" cy="100" r="16" fill="#c8d0d8" opacity=".55"/>
    <circle cx="150" cy="100" r="8" fill="#d8e0e8" opacity=".65"/>
  `),

  /* ── Play It As It Lays · Los Angeles — Maria Wyeth, the freeway, desert emptiness ── */
  playitlays: scene(`
    <defs>
      <linearGradient id="piSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2838"/><stop offset=".36" stop-color="#5a5058"/>
        <stop offset=".65" stop-color="#9a8868"/><stop offset="1" stop-color="#c0a860"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#piSky)"/>
    ${stars(9, 207)}
    <path d="M0 288 L300 288 L300 450 L0 450 Z" fill="#4a3a28"/>
    <path d="M0 320 L300 320 L300 450 L0 450 Z" fill="#3a2c18"/>
    <path d="M0 360 L300 360 L300 450 L0 450 Z" fill="#2a1e10"/>
    <path d="M0 408 L300 408 L300 450 L0 450 Z" fill="#1e160c"/>
    <path d="M150 288 L62 450 M150 288 L238 450" stroke="#c0a860" stroke-width="1.4" opacity=".4"/>
    <path d="M150 288 L100 450 M150 288 L200 450" stroke="#c0a860" stroke-width=".8" opacity=".25"/>
    <path d="M0 310 L300 310" stroke="#c0a860" stroke-width=".7" fill="none" opacity=".35"/>
    <path d="M0 338 L300 338" stroke="#c0a860" stroke-width=".5" fill="none" opacity=".25"/>
    <path d="M0 370 L300 370" stroke="#c0a860" stroke-width=".4" fill="none" opacity=".18"/>
    <circle cx="150" cy="258" r="38" fill="#9a8868" opacity=".2"/>
    <g fill="#201a10">
      <circle cx="150" cy="266" r="6.5"/>
      <rect x="146" y="272" width="6" height="18" rx="1"/>
      <path d="M138 286 L146 274 L154 274 L162 286 L158 298 L142 298 Z"/>
    </g>
    ${[-40,-20,20,40].map(dx=>`<path d="M${150+dx} 190 Q${154+dx} 180 ${158+dx} 190" stroke="#9a8868" stroke-width="1" fill="none" opacity=".35"/>`).join('')}
  `),

  /* ── The Bluest Eye · Lorain, Ohio — Pecola Breedlove, autumn grief, a marigold that won't grow ── */
  bluesteye: scene(`
    <defs>
      <linearGradient id="beSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2e2818"/><stop offset=".38" stop-color="#5a4828"/>
        <stop offset=".68" stop-color="#9a7838"/><stop offset="1" stop-color="#c0a040"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#beSky)"/>
    ${stars(7, 211)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#3a3018"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#2a2210"/>
    <g fill="#1e1808">
      <rect x="0" y="228" width="58" height="92"/>
      <rect x="66" y="244" width="44" height="76"/>
      <rect x="118" y="218" width="58" height="102"/>
      <rect x="184" y="230" width="52" height="90"/>
      <rect x="244" y="220" width="56" height="100"/>
    </g>
    ${[[6,246],[20,246],[6,274],[20,274],[70,260],[84,260],[122,234],[136,234],[122,262],[136,262],[188,246],[202,246],[248,236],[262,236]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8a040" opacity=".4"/>`).join('')}
    <path d="M0 318 Q150 312 300 316" stroke="#c0a040" stroke-width=".5" fill="none" opacity=".25"/>
    <g fill="#8a4818" opacity=".7">
      ${[-20,-8,4,16].map(dx=>`<circle cx="${150+dx}" cy="${260}" r="12"/><path d="M${150+dx} 248 L${150+dx} 240 M${140+dx} 254 L${134+dx} 248 M${160+dx} 254 L${166+dx} 248 M${140+dx} 264 L${134+dx} 270 M${160+dx} 264 L${166+dx} 270" stroke="#8a4818" stroke-width="1.2" fill="none" opacity=".55"/>`).join('')}
    </g>
    <g fill="#1a1008">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="15" rx="1"/>
    </g>
  `),

  /* ── The Book of Daniel · New York — the Rosenbergs' children, Cold War, electric grief ── */
  bookdaniel: scene(`
    <defs>
      <linearGradient id="bdanSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".4" stop-color="#1c1e2e"/>
        <stop offset=".72" stop-color="#3a3448"/><stop offset="1" stop-color="#5a4a58"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bdanSky)"/>
    ${stars(10, 213)}
    <g fill="#141020">
      <rect x="0" y="208" width="54" height="242"/>
      <rect x="246" y="194" width="54" height="256"/>
      <rect x="62" y="230" width="42" height="220"/>
      <rect x="198" y="220" width="42" height="230"/>
      <rect x="112" y="200" width="78" height="250"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*43+11)%300, y=212+(i*37)%200; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e8b050" opacity="${0.15+((i*7)%5)/10}"/>`;}).join('')}
    <rect x="130" y="152" width="40" height="8" fill="#141020"/>
    <rect x="126" y="148" width="48" height="6" fill="#141020"/>
    ${[-3,-1,1,3].map(dx=>`<rect x="${148+dx}" y="${118}" width="4" height="36" fill="#141020"/>`).join('')}
    <path d="M130 152 Q150 162 170 152" stroke="#141020" stroke-width="2" fill="none"/>
    <circle cx="150" cy="116" r="5" fill="#e84020" opacity=".55"/>
    <path d="M0 378 Q150 368 300 376 L300 450 L0 450 Z" fill="#0e0c18"/>
    <path d="M0 378 Q150 372 300 376" stroke="#e84020" stroke-width=".5" fill="none" opacity=".25"/>
  `),

  /* ── Mumbo Jumbo · Harlem, New York — 1920s Jes Grew plague, voodoo, jazz fever ── */
  mumbojumbo: scene(`
    <defs>
      <linearGradient id="mjSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0c18"/><stop offset=".4" stop-color="#1e1828"/>
        <stop offset=".7" stop-color="#3a2830"/><stop offset="1" stop-color="#5a3838"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#mjSky)"/>
    ${stars(12, 217)}
    <g fill="#141020">
      <rect x="0" y="196" width="56" height="254"/>
      <rect x="244" y="180" width="56" height="270"/>
      <rect x="64" y="216" width="44" height="234"/>
      <rect x="194" y="206" width="44" height="244"/>
    </g>
    ${[[4,214],[18,214],[4,244],[18,244],[250,198],[264,198],[250,228],[250,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#c04040" opacity=".45"/>`).join('')}
    <rect x="108" y="160" width="84" height="50" fill="#1a1428"/>
    <rect x="114" y="166" width="72" height="38" fill="#241e30"/>
    ${[-20,-8,4,16].map(dx=>`<circle cx="${150+dx}" cy="${184}" r="5" fill="#c04040" opacity=".35"/>`).join('')}
    <path d="M0 372 Q150 362 300 370 L300 450 L0 450 Z" fill="#0c0a14"/>
    <path d="M0 372 Q150 366 300 370" stroke="#c04040" stroke-width=".5" fill="none" opacity=".28"/>
    <g fill="#0e0c18">
      <circle cx="150" cy="280" r="7.5"/>
      <rect x="146" y="288" width="7" height="26" rx="1"/>
      <path d="M136 306 L146 292 L154 292 L164 306 L158 324 L142 324 Z"/>
    </g>
    ${Array.from({length:5}).map((_,i)=>`<circle cx="${120+i*14}" cy="${348}" r="3.5" fill="#e84020" opacity="${0.3+i%2*0.2}"/>`).join('')}
  `),

  /* ── Sula · Medallion, Ohio — two Black women, girlhood to middle age, the Bottom community ── */
  sula: scene(`
    <defs>
      <linearGradient id="sulaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2030"/><stop offset=".38" stop-color="#4a3848"/>
        <stop offset=".68" stop-color="#8a6858"/><stop offset="1" stop-color="#b08850"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sulaSky)"/>
    ${stars(8, 219)}
    <path d="M0 314 Q150 302 300 312 L300 450 L0 450 Z" fill="#4a6028"/>
    <path d="M0 362 Q150 352 300 360 L300 450 L0 450 Z" fill="#3a5020"/>
    <path d="M0 412 Q150 404 300 410 L300 450 L0 450 Z" fill="#2a4018"/>
    <g fill="#1e1808">
      ${[-50,-25,0,25,50].map(dx=>`<rect x="${150+dx}" y="${196}" width="5" height="118"/><path d="M${152+dx} 196 Q${168+dx} 214 ${152+dx} 232 Q${136+dx} 250 ${152+dx} 268 Q${168+dx} 286 ${152+dx} 314" stroke="#1e1808" stroke-width="16" fill="none"/>`).join('')}
    </g>
    <g fill="#100c06">
      <circle cx="136" cy="294" r="6.5"/>
      <rect x="132" y="300" width="6" height="18" rx="1"/>
      <circle cx="164" cy="290" r="6"/>
      <rect x="160" y="296" width="6" height="16" rx="1"/>
    </g>
    <path d="M0 314 Q150 308 300 312" stroke="#b08850" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Ceremony · Laguna Pueblo, New Mexico — Tayo's healing, desert canyon, Pueblo sacred ceremony ── */
  ceremony: scene(`
    <defs>
      <linearGradient id="cerSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1020"/><stop offset=".32" stop-color="#3a2818"/>
        <stop offset=".62" stop-color="#8a5828"/><stop offset=".85" stop-color="#c08840"/>
        <stop offset="1" stop-color="#d0a850"/>
      </linearGradient>
      <radialGradient id="cerSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe090" stop-opacity=".68"/>
        <stop offset="1" stop-color="#ffe090" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cerSky)"/>
    <circle cx="150" cy="172" r="64" fill="url(#cerSun)"/>
    <circle cx="150" cy="172" r="18" fill="#ffe090" opacity=".8"/>
    ${stars(7, 221)}
    <path d="M0 298 Q60 272 100 282 Q130 290 150 278 Q170 266 200 274 Q240 284 300 262 L300 450 L0 450 Z" fill="#9a6830"/>
    <path d="M0 348 Q150 334 300 344 L300 450 L0 450 Z" fill="#7a5020"/>
    <path d="M0 400 Q150 388 300 396 L300 450 L0 450 Z" fill="#5e3e14"/>
    <g fill="#5a3810">
      <path d="M90 298 L100 240 L110 242 L106 298 Z"/>
      <path d="M188 296 L200 234 L210 236 L206 296 Z"/>
      <rect x="88" y="234" width="24" height="8" rx="2"/>
      <rect x="198" y="228" width="24" height="8" rx="2"/>
      <path d="M88 234 Q100 218 112 234 Z"/>
      <path d="M198 228 Q210 212 222 228 Z"/>
    </g>
    <g fill="#2a1808">
      <circle cx="150" cy="282" r="5.5"/>
      <rect x="147" y="287" width="5" height="12" rx="1"/>
    </g>
  `),

  /* ── Housekeeping · Fingerbone, Idaho — two sisters, a transient aunt, a glacial lake ── */
  housekeeping: scene(`
    <defs>
      <linearGradient id="hkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3848"/><stop offset=".38" stop-color="#4a6070"/>
        <stop offset=".65" stop-color="#6a8888"/><stop offset="1" stop-color="#8aaab0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hkSky)"/>
    ${stars(9, 223)}
    <path d="M0 308 Q150 294 300 306 L300 450 L0 450 Z" fill="#4a6880"/>
    <path d="M0 350 Q75 342 150 348 T300 346 L300 450 L0 450 Z" fill="#3a5870"/>
    <path d="M0 396 Q75 390 150 394 T300 392 L300 450 L0 450 Z" fill="#2a4860"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${38+i*46} ${320+i%2*10} Q${56+i*46} ${312+i%2*8} ${74+i*46} ${320+i%2*10}" stroke="#8ac0c8" stroke-width="1" fill="none" opacity=".4"/>`).join('')}
    <g fill="#1e2c18">
      <path d="M0 306 Q0 272 24 258 Q36 252 48 264 Q64 280 64 306 Z"/>
      <path d="M228 308 Q228 272 252 258 Q264 252 278 264 Q294 280 300 308 Z"/>
    </g>
    <g fill="#2a3a20" opacity=".8">
      <rect x="116" y="252" width="5" height="56"/>
      <ellipse cx="118" cy="246" rx="16" ry="20"/>
      <rect x="172" y="264" width="4" height="44"/>
      <ellipse cx="174" cy="258" rx="12" ry="16"/>
    </g>
    <path d="M104" fill="none"/>
    <g fill="#141c18">
      <rect x="116" y="278" width="22" height="6" rx="1"/>
      <rect x="148" y="278" width="22" height="6" rx="1"/>
    </g>
    <path d="M0 308 Q150 300 300 306" stroke="#8aaab0" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── The Women of Brewster Place · Chicago — seven women, a dead-end wall, endurance ── */
  womenbrewster: scene(`
    <defs>
      <linearGradient id="wbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".4" stop-color="#3a3448"/>
        <stop offset=".72" stop-color="#7a6050"/><stop offset="1" stop-color="#a08050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#wbSky)"/>
    ${stars(8, 227)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#2a1e18"/>
    <path d="M0 372 Q150 362 300 370 L300 450 L0 450 Z" fill="#1e1610"/>
    <rect x="0" y="182" width="300" height="140" fill="#2a2430"/>
    <g fill="#1e1828">
      <rect x="0" y="182" width="60" height="140"/>
      <rect x="68" y="182" width="48" height="140"/>
      <rect x="124" y="182" width="56" height="140"/>
      <rect x="188" y="182" width="52" height="140"/>
      <rect x="248" y="182" width="52" height="140"/>
    </g>
    ${Array.from({length:20}).map((_,i)=>{const x=4+(i%5)*62+(i%2)*16, y=194+Math.floor(i/5)*28; return `<rect x="${x}" y="${y}" width="14" height="18" fill="#e0a048" opacity="${0.28+((i*7)%5)/10}"/>`;}).join('')}
    <rect x="0" y="318" width="300" height="8" fill="#4a4038"/>
    ${Array.from({length:12}).map((_,i)=>`<rect x="${10+i*24}" y="${322}" width="18" height="4" rx="1" fill="#5a5048"/>`).join('')}
    <g fill="#141018">
      ${[-30,-12,6,24].map(dx=>`<circle cx="${150+dx}" cy="${300}" r="4.5"/><rect x="${147+dx}" y="${304}" width="4" height="12" rx="1"/>`).join('')}
    </g>
  `),

  /* ── The House on Mango Street · Chicago — Esperanza Cordero's world, a cramped house, dreams ── */
  housemangostreet: scene(`
    <defs>
      <linearGradient id="hmsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3040"/><stop offset=".38" stop-color="#4a5060"/>
        <stop offset=".68" stop-color="#8a7858"/><stop offset="1" stop-color="#c0a050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hmsSky)"/>
    ${stars(8, 229)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#4a6020"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#3a5018"/>
    <g fill="#1e1808">
      <rect x="88" y="202" width="124" height="122"/>
      <path d="M80 206 L150 172 L220 206 Z"/>
      <rect x="102" y="172" width="96" height="34"/>
      <path d="M96 176 L150 146 L204 176 Z"/>
      <rect x="124" y="146" width="52" height="30"/>
    </g>
    ${[[94,218],[110,218],[94,248],[110,248],[164,218],[180,218],[164,248],[180,248]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8b040" opacity="${y===218?'.4':'.32'}"/>`).join('')}
    <rect x="134" y="272" width="32" height="44" rx="1" fill="#2e2010"/>
    <rect x="142" y="278" width="16" height="38" fill="#e8b040" opacity=".22"/>
    <rect x="86" y="320" width="128" height="6" rx="1" fill="#c0a050" opacity=".3"/>
    <path d="M86 320 L86 322 Q88 324 150 322 Q212 320 214 322 L214 320" stroke="#c0a050" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#100e08">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="14" rx="1"/>
    </g>
    ${[-18,-6,6,18].map(dx=>`<circle cx="${150+dx}" cy="${146}" r="${3+Math.abs(dx)/12}" fill="#c04820" opacity=".6"/>`).join('')}
  `),

  /* ── Love Medicine · North Dakota — Chippewa families, a reservation, tangled love and loss ── */
  lovemedicine: scene(`
    <defs>
      <linearGradient id="lmMSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3040"/><stop offset=".38" stop-color="#4a5868"/>
        <stop offset=".68" stop-color="#8aa0a0"/><stop offset="1" stop-color="#b0c0b0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lmMSky)"/>
    ${stars(9, 233)}
    <path d="M0 296 Q60 274 110 284 Q140 292 150 280 Q160 268 190 276 Q240 288 300 268 L300 450 L0 450 Z" fill="#9a8050"/>
    <path d="M0 342 Q150 328 300 338 L300 450 L0 450 Z" fill="#7a6238"/>
    <path d="M0 392 Q150 380 300 388 L300 450 L0 450 Z" fill="#5e4a24"/>
    <path d="M0 436 Q150 428 300 434 L300 450 L0 450 Z" fill="#462e10"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${64+i*26} ${300+i%2*12} Q${76+i*26} ${288+i%2*10} ${88+i*26} ${300+i%2*12}" stroke="#c0a060" stroke-width="1.2" fill="none" opacity=".38"/>`).join('')}
    <g fill="#1e2818">
      <rect x="148" y="166" width="4" height="114"/>
      <path d="M150 166 Q128 184 120 212 Q136 196 150 188 Q164 196 180 212 Q172 184 150 166 Z"/>
      <path d="M150 196 Q130 212 124 238 Q140 224 150 218 Q160 224 176 238 Q170 212 150 196 Z"/>
      <path d="M150 224 Q132 238 128 262 Q142 250 150 246 Q158 250 172 262 Q168 238 150 224 Z"/>
    </g>
    <g fill="#180e06">
      <circle cx="120" cy="278" r="5.5"/>
      <rect x="117" y="283" width="5" height="14" rx="1"/>
      <circle cx="180" cy="274" r="5"/>
      <rect x="177" y="279" width="5" height="12" rx="1"/>
    </g>
  `),

  /* ── Bad Behavior · New York — nine tart stories, desire, cruelty, the 1980s downtown scene ── */
  badbehavior: scene(`
    <defs>
      <linearGradient id="bbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0c18"/><stop offset=".5" stop-color="#1c1828"/>
        <stop offset="1" stop-color="#2e2838"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bbSky)"/>
    ${stars(10, 237)}
    <g fill="#141020">
      <rect x="0" y="206" width="54" height="244"/>
      <rect x="246" y="192" width="54" height="258"/>
      <rect x="62" y="228" width="42" height="222"/>
      <rect x="198" y="218" width="42" height="232"/>
    </g>
    ${[[4,224],[18,224],[4,254],[18,254],[252,210],[266,210],[252,240],[252,270]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e04080" opacity=".42"/>`).join('')}
    <rect x="108" y="164" width="84" height="56" fill="#1a1428"/>
    <rect x="114" y="170" width="72" height="44" fill="#241e30"/>
    ${[-16,-4,8,20].map(dx=>`<circle cx="${150+dx}" cy="${190}" r="5" fill="#e04080" opacity=".32"/>`).join('')}
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#0c0a14"/>
    <path d="M0 374 Q150 368 300 372" stroke="#e04080" stroke-width=".4" fill="none" opacity=".25"/>
    <g fill="#0e0c18">
      <circle cx="138" cy="292" r="5.5"/>
      <rect x="135" y="297" width="5" height="18" rx="1"/>
      <circle cx="162" cy="288" r="5"/>
      <rect x="159" y="293" width="5" height="16" rx="1"/>
    </g>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${104+i*18} ${374} L${104+i*18} ${388}" stroke="#e04080" stroke-width="1" opacity="${0.15+i%2*0.1}"/>`).join('')}
  `),

  /* ── Bastard Out of Carolina · South Carolina — Bone Boatwright, the Appalachian poor, survivance ── */
  bastardcarolina: scene(`
    <defs>
      <linearGradient id="bcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2828"/><stop offset=".4" stop-color="#4a4038"/>
        <stop offset=".72" stop-color="#8a7050"/><stop offset="1" stop-color="#b09050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bcSky)"/>
    ${stars(7, 239)}
    <path d="M0 298 Q80 274 150 284 T300 290 L300 450 L0 450 Z" fill="#4a6828"/>
    <path d="M0 348 Q80 328 150 338 T300 338 L300 450 L0 450 Z" fill="#3a5820"/>
    <path d="M0 402 Q80 386 150 394 T300 390 L300 450 L0 450 Z" fill="#2a4818"/>
    <g fill="#1e1808">
      <path d="M0 296 Q0 248 24 236 Q34 230 44 242 Q58 260 58 296 Z"/>
      <path d="M220 298 Q220 248 244 236 Q254 230 266 242 Q282 260 300 298 Z"/>
      <rect x="116" y="238" width="68" height="64"/>
      <path d="M108 242 L150 216 L192 242 Z"/>
      <rect x="126" y="216" width="48" height="26"/>
    </g>
    ${[[120,252],[136,252],[120,278],[136,278],[156,252],[172,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8a040" opacity=".4"/>`).join('')}
    <g fill="#160e04">
      <circle cx="150" cy="298" r="5.5"/>
      <rect x="147" y="303" width="5" height="12" rx="1"/>
    </g>
  `),

  /* ── A Lesson Before Dying · Louisiana — a teacher in a death-row cell, dignity, the Quarters ── */
  lessonbefore: scene(`
    <defs>
      <linearGradient id="lbdSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1808"/><stop offset=".4" stop-color="#2e2610"/>
        <stop offset=".72" stop-color="#5a4820"/><stop offset="1" stop-color="#8a7030"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#lbdSky)"/>
    ${stars(7, 241)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#5a6828"/>
    <path d="M0 366 Q150 356 300 364 L300 450 L0 450 Z" fill="#486020"/>
    <rect x="96" y="158" width="108" height="162" fill="#1e1a0e"/>
    <rect x="102" y="164" width="96" height="150" fill="#2e2810"/>
    ${[[108,178],[124,178],[108,208],[124,208],[154,178],[170,178],[154,208],[170,208],[108,238],[124,238]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#e8a848" opacity="${y===238?'.25':'.35'}"/>`).join('')}
    <g fill="#141008">
      <rect x="138" y="252" width="24" height="62" rx="1"/>
      <rect x="138" y="248" width="24" height="6" rx="1"/>
      <rect x="126" y="258" width="14" height="48" rx="1"/>
      <rect x="160" y="258" width="14" height="48" rx="1"/>
    </g>
    <path d="M0 316 Q150 310 300 314" stroke="#8a7030" stroke-width=".5" fill="none" opacity=".28"/>
    <g fill="#100e08">
      <rect x="144" y="226" width="12" height="26" rx="1"/>
      <circle cx="150" cy="222" r="8"/>
    </g>
  `),

  /* ── Stone Butch Blues · New York — Jess, the factories, queer working-class 1960s-80s ── */
  stonebutch: scene(`
    <defs>
      <linearGradient id="sblueSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".4" stop-color="#1c1c28"/>
        <stop offset=".72" stop-color="#3a3038"/><stop offset="1" stop-color="#5a4848"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sblueSky)"/>
    ${stars(9, 243)}
    <g fill="#141018">
      <rect x="0" y="198" width="40" height="252"/>
      <rect x="44" y="220" width="30" height="230"/>
      <rect x="78" y="190" width="46" height="260"/>
      <rect x="128" y="208" width="30" height="242"/>
      <rect x="162" y="188" width="46" height="262"/>
      <rect x="212" y="210" width="32" height="240"/>
      <rect x="248" y="196" width="52" height="254"/>
    </g>
    ${Array.from({length:8}).map((_,i)=>`<rect x="${50+i*24}" y="${152}" width="6" height="${28+i%2*18}" fill="#141018"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<circle cx="${53+i*24}" cy="${148}" r="4" fill="#6a3010" opacity=".45"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<path d="M${51+i*24} ${148} Q${53+i*24} ${130+i%3*12} ${55+i*24} ${148}" stroke="#4a2208" stroke-width="4" fill="none" opacity=".4"/>`).join('')}
    ${Array.from({length:12}).map((_,i)=>{const x=(i*43+11)%300, y=208+(i*37)%200; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#c08040" opacity="${0.12+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 372 Q150 362 300 370 L300 450 L0 450 Z" fill="#0c0a14"/>
    <path d="M0 372 Q150 366 300 370" stroke="#6a3010" stroke-width=".5" fill="none" opacity=".28"/>
    <g fill="#0e0c14">
      <circle cx="150" cy="340" r="7"/>
      <rect x="146" y="347" width="7" height="22" rx="1"/>
    </g>
  `),

  /* ── The Shipping News · Newfoundland — a rocky cove, an old house, storm-grey Atlantic ── */
  shippingnews: scene(`
    <defs>
      <linearGradient id="snSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#283040"/><stop offset=".38" stop-color="#4a5868"/>
        <stop offset=".65" stop-color="#7a9098"/><stop offset="1" stop-color="#9ab0b8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#snSky)"/>
    ${stars(8, 247)}
    <path d="M0 316 Q150 302 300 314 L300 450 L0 450 Z" fill="#3a5868"/>
    <path d="M0 356 Q75 348 150 354 T300 352 L300 450 L0 450 Z" fill="#2a4858"/>
    <path d="M0 400 Q75 394 150 398 T300 396 L300 450 L0 450 Z" fill="#1e3848"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${40+i*46} ${330+i%2*10} Q${58+i*46} ${322+i%2*8} ${76+i*46} ${330+i%2*10}" stroke="#7ab0b8" stroke-width="1" fill="none" opacity=".4"/>`).join('')}
    <path d="M0 292 Q40 268 70 274 Q90 280 110 272 Q120 268 130 274 L130 316 L0 316 Z" fill="#3a3028"/>
    <path d="M170 274 Q180 268 200 274 Q230 280 260 272 Q278 266 300 274 L300 316 L170 316 Z" fill="#2e2820"/>
    <g fill="#1e1810">
      <rect x="112" y="216" width="76" height="102"/>
      <path d="M104 220 L150 188 L196 220 Z"/>
      <rect x="122" y="188" width="56" height="32"/>
      <path d="M116 192 L150 166 L184 192 Z"/>
      <rect x="138" y="166" width="24" height="26"/>
      <rect x="144" y="154" width="12" height="14"/>
    </g>
    ${[[118,228],[134,228],[118,256],[134,256],[154,228],[168,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd060" opacity="${y===228?'.38':'.30'}"/>`).join('')}
    <path d="M0 316 Q150 308 300 314" stroke="#9ab0b8" stroke-width=".6" fill="none" opacity=".3"/>
  `),

  /* ── The Plot Against America · Newark — an alternate history, Lindbergh fascism, a Jewish family ── */
  plotagainst: scene(`
    <defs>
      <linearGradient id="paSky2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1820"/><stop offset=".38" stop-color="#3a3448"/>
        <stop offset=".68" stop-color="#6a5a50"/><stop offset="1" stop-color="#9a8050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#paSky2)"/>
    ${stars(10, 251)}
    <g fill="#141020">
      <rect x="0" y="202" width="54" height="248"/>
      <rect x="246" y="186" width="54" height="264"/>
      <rect x="62" y="222" width="44" height="228"/>
      <rect x="198" y="212" width="44" height="238"/>
      <rect x="112" y="196" width="78" height="254"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*41+9)%300, y=210+(i*37)%200; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e8b048" opacity="${0.15+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#0e0c18"/>
    <g fill="#8a3010" opacity=".5">
      <path d="M142 148 L150 134 L158 148 Z"/>
      <path d="M150 134 L134 140 L150 148 Z"/>
      <path d="M150 134 L166 140 L150 148 Z"/>
      <path d="M142 148 L134 140 L134 158 Z"/>
      <path d="M158 148 L166 140 L166 158 Z"/>
      <path d="M142 148 L150 162 L158 148 Z"/>
    </g>
    <rect x="0" y="374" width="300" height="4" fill="#8a3010" opacity=".25"/>
    <g fill="#0e0c14">
      <circle cx="150" cy="344" r="5.5"/>
      <rect x="147" y="349" width="5" height="22" rx="1"/>
    </g>
  `),
};
