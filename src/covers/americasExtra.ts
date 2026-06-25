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

  /* ── A Little Life · New York — four friends, winter evening, a lit apartment high above the city ── */
  littlelife: scene(`
    <defs>
      <linearGradient id="llfSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080c14"/><stop offset=".38" stop-color="#141c28"/>
        <stop offset=".68" stop-color="#1e2836"/><stop offset="1" stop-color="#2a3448"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#llfSky)"/>
    ${stars(12, 253)}
    <g fill="#101420">
      <rect x="0" y="166" width="52" height="284"/>
      <rect x="248" y="150" width="52" height="300"/>
      <rect x="58" y="190" width="40" height="260"/>
      <rect x="202" y="178" width="42" height="272"/>
      <rect x="104" y="158" width="90" height="292"/>
    </g>
    ${Array.from({length:20}).map((_,i)=>{const x=4+(i%5)*60+(i%2)*14, y=178+Math.floor(i/5)*32; return `<rect x="${x}" y="${y}" width="8" height="12" fill="#e0c080" opacity="${0.14+((i*7)%5)/12}"/>`;}).join('')}
    <rect x="118" y="182" width="64" height="72" fill="#2a3040"/>
    ${[[124,188],[140,188],[156,188],[172,188],[124,212],[140,212],[156,212],[172,212]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#f0d080" opacity="${y===188?'.55':'.42'}"/>`).join('')}
    <path d="M0 404 Q150 394 300 402 L300 450 L0 450 Z" fill="#080c14"/>
    <path d="M0 404 Q150 398 300 402" stroke="#2a3448" stroke-width=".5" fill="none" opacity=".4"/>
    <g fill="#0c1018">
      <circle cx="150" cy="368" r="5.5"/>
      <rect x="147" y="373" width="5" height="28" rx="1"/>
    </g>
  `),

  /* ── Lonesome Dove · Texas to Montana — a vast sunset sky, a cattle drive, two captains ── */
  lonesomedove: scene(`
    <defs>
      <linearGradient id="ldvSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".25" stop-color="#3a2838"/>
        <stop offset=".5" stop-color="#8a4820"/><stop offset=".72" stop-color="#c07028"/>
        <stop offset="1" stop-color="#e0a040"/>
      </linearGradient>
      <radialGradient id="ldvSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe080" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe080" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ldvSky)"/>
    ${stars(7, 255)}
    <circle cx="150" cy="262" r="80" fill="url(#ldvSun)"/>
    <circle cx="150" cy="262" r="22" fill="#ffe080" opacity=".75"/>
    <path d="M0 302 Q150 290 300 300 L300 450 L0 450 Z" fill="#7a6028"/>
    <path d="M0 356 Q150 344 300 354 L300 450 L0 450 Z" fill="#6a5020"/>
    <path d="M0 408 Q150 398 300 406 L300 450 L0 450 Z" fill="#5a4018"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${50+i*26} ${308} Q${50+i*26} ${300} ${60+i*26} ${298} Q${70+i*26} ${300} ${70+i*26} ${308}" fill="#5a4018" opacity=".6"/>`).join('')}
    <path d="M0 302 Q150 298 300 300" stroke="#a07838" stroke-width=".5" fill="none" opacity=".35"/>
    <g fill="#180e04">
      <circle cx="112" cy="292" r="7"/>
      <rect x="108" y="299" width="6" height="6" rx="1"/>
      <path d="M100 312 Q112 304 124 312 L126 322 L98 322 Z"/>
      <circle cx="186" cy="288" r="6.5"/>
      <rect x="183" y="294" width="6" height="6" rx="1"/>
      <path d="M176 308 Q186 300 196 308 L198 318 L174 318 Z"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>`<circle cx="${54+i*14}" cy="${304+i%2*6}" r="3" fill="#2a1808" opacity="${0.35+i%2*0.15}"/>`).join('')}
  `),

  /* ── Alias Grace · Ontario — a quilted pattern, a stone prison, cold Victorian light ── */
  aliasgrace: scene(`
    <defs>
      <linearGradient id="agSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#8a9898"/><stop offset=".44" stop-color="#a8b8b8"/>
        <stop offset=".74" stop-color="#c0c8c0"/><stop offset="1" stop-color="#d8e0d8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#agSky)"/>
    ${stars(5, 259)}
    <g fill="#c0b090" opacity=".78">
      ${Array.from({length:9}).map((_,i)=>`<polygon points="${104+i*8},${220} ${108+i*8},${212} ${116+i*8},${212} ${120+i*8},${220} ${116+i*8},${228} ${108+i*8},${228}"/>`).join('')}
    </g>
    <g fill="#98a898" opacity=".58">
      ${Array.from({length:5}).map((_,i)=>`<polygon points="${108+i*16},${204} ${116+i*16},${196} ${124+i*16},${204} ${116+i*16},${212}"/>`).join('')}
      ${Array.from({length:5}).map((_,i)=>`<polygon points="${108+i*16},${244} ${116+i*16},${252} ${124+i*16},${244} ${116+i*16},${236}"/>`).join('')}
    </g>
    <rect x="96" y="148" width="108" height="78" fill="#1e2018" opacity=".85"/>
    ${[[100,152],[116,152],[100,174],[116,174],[158,152],[174,152],[158,174],[174,174]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#d0c090" opacity="${y===152?'.35':'.22'}"/>`).join('')}
    <rect x="0" y="306" width="300" height="144" fill="#d8e0d8"/>
    <rect x="0" y="302" width="300" height="8" fill="#a8b8b8"/>
    <g fill="#1e1a12">
      <circle cx="150" cy="276" r="6.5"/>
      <rect x="147" y="282" width="6" height="22" rx="1"/>
      <path d="M136 296 L147 286 L153 286 L164 296 L160 316 L140 316 Z"/>
    </g>
    ${[[104,318],[120,318],[136,318],[152,318],[168,318],[184,318]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="10" fill="${y===152?'#c09060':'#98a898'}" opacity=".5"/>`).join('')}
    <path d="M0 306 Q150 300 300 304" stroke="#a8b8b8" stroke-width=".6" fill="none" opacity=".35"/>
  `),

  /* ── The Help · Jackson, Mississippi — a white clapboard house, summer magnolias, a maid ── */
  thehelp: scene(`
    <defs>
      <linearGradient id="thelpSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a6080"/><stop offset=".4" stop-color="#6a9aaa"/>
        <stop offset=".7" stop-color="#9ac0b8"/><stop offset="1" stop-color="#c8e0d8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#thelpSky)"/>
    ${stars(5, 269)}
    <path d="M0 308 Q80 290 150 298 T300 304 L300 450 L0 450 Z" fill="#4a7028"/>
    <path d="M0 360 Q80 344 150 352 T300 352 L300 450 L0 450 Z" fill="#3a6020"/>
    <path d="M0 408 Q80 396 150 402 T300 400 L300 450 L0 450 Z" fill="#2a5018"/>
    <g fill="#f0ead8">
      <rect x="94" y="206" width="112" height="108"/>
      <path d="M86 210 L150 174 L214 210 Z"/>
      <rect x="108" y="174" width="84" height="36"/>
      <path d="M102 178 L150 148 L198 178 Z"/>
      <rect x="126" y="148" width="48" height="30"/>
    </g>
    ${[[98,222],[114,222],[98,252],[114,252],[170,222],[186,222],[170,252],[186,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#6a9898" opacity="${y===222?'.45':'.35'}"/>`).join('')}
    <g fill="#2a5018">
      <path d="M62 310 Q78 284 94 310 Q86 294 78 290 Q70 294 62 310 Z"/>
      <path d="M192 308 Q208 282 224 308 Q216 292 208 288 Q200 292 192 308 Z"/>
    </g>
    <g fill="#1e1208">
      <circle cx="134" cy="298" r="6"/>
      <rect x="131" y="304" width="5" height="14" rx="1"/>
      <circle cx="168" cy="296" r="5.5"/>
      <rect x="165" y="301" width="5" height="12" rx="1"/>
    </g>
  `),

  /* ── Where the Crawdads Sing · North Carolina marsh — a tidal creek, a lone shack, wild grasses ── */
  crawdads: scene(`
    <defs>
      <linearGradient id="crwSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a3848"/><stop offset=".38" stop-color="#4a6878"/>
        <stop offset=".68" stop-color="#7a9898"/><stop offset="1" stop-color="#a0bab8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#crwSky)"/>
    ${stars(8, 271)}
    <path d="M0 298 Q60 278 110 288 Q140 296 150 282 Q160 268 180 278 Q240 296 300 278 L300 450 L0 450 Z" fill="#5a7848"/>
    <path d="M0 346 Q150 332 300 344 L300 450 L0 450 Z" fill="#4a6838"/>
    <path d="M0 394 Q150 382 300 392 L300 450 L0 450 Z" fill="#3a5828"/>
    ${Array.from({length:10}).map((_,i)=>`<path d="M${72+i*16} ${300+i%2*14} Q${76+i*16} ${288+i%2*10} ${80+i*16} ${300+i%2*14}" stroke="#8aaa58" stroke-width="2.5" fill="none" opacity=".55"/>`).join('')}
    <path d="M0 332 Q60 324 80 328 Q100 332 100 342 L80 352 Q60 354 0 346 Z" fill="#5a8898" opacity=".6"/>
    <path d="M200 316 Q260 308 300 312 L300 340 Q260 340 220 332 Z" fill="#5a8898" opacity=".55"/>
    <g fill="#1e1808">
      <rect x="126" y="240" width="48" height="58"/>
      <path d="M118 244 L150 220 L182 244 Z"/>
      <rect x="138" y="220" width="24" height="24"/>
      <rect x="141" y="218" width="18" height="4"/>
    </g>
    ${[[130,254],[146,254],[130,278],[146,278]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e8c060" opacity="${y===254?'.4':'.28'}"/>`).join('')}
    <g fill="#160e04">
      <circle cx="150" cy="296" r="5.5"/>
      <rect x="147" y="301" width="5" height="14" rx="1"/>
    </g>
  `),

  /* ── A Tree Grows in Brooklyn · Brooklyn 1900s — fire escapes, a tenement, a lone tree ── */
  treegrows: scene(`
    <defs>
      <linearGradient id="tgbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".4" stop-color="#2e2c40"/>
        <stop offset=".7" stop-color="#5a5060"/><stop offset="1" stop-color="#8a8090"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tgbSky)"/>
    ${stars(9, 273)}
    <g fill="#181420">
      <rect x="0" y="192" width="70" height="258"/>
      <rect x="230" y="180" width="70" height="270"/>
      <rect x="78" y="214" width="56" height="236"/>
      <rect x="168" y="202" width="58" height="248"/>
    </g>
    ${Array.from({length:8}).map((_,i)=>`<rect x="${4+(i%4)*76}" y="${204+Math.floor(i/4)*40}" width="24" height="4" fill="#181420" opacity=".85"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<rect x="${4+(i%4)*76}" y="${204+Math.floor(i/4)*40}" width="4" height="16" fill="#181420" opacity=".85"/>`).join('')}
    ${Array.from({length:14}).map((_,i)=>{const x=(i*57+7)%300, y=200+(i*43)%220; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e8b848" opacity="${0.12+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 380 Q150 370 300 378 L300 450 L0 450 Z" fill="#141018"/>
    <rect x="146" y="170" width="8" height="210" fill="#2a4018"/>
    <path d="M150 170 Q116 196 104 238 Q130 214 150 210 Q170 214 196 238 Q184 196 150 170 Z" fill="#2a4018"/>
    <path d="M150 208 Q120 228 110 264 Q134 244 150 240 Q166 244 190 264 Q180 228 150 208 Z" fill="#3a5020"/>
    <path d="M150 240 Q124 256 118 288 Q140 268 150 266 Q160 268 182 288 Q176 256 150 240 Z" fill="#4a6028"/>
    <g fill="#141018">
      <circle cx="150" cy="358" r="6"/>
      <rect x="147" y="364" width="5" height="16" rx="1"/>
    </g>
  `),

  /* ── Are You There God? It's Me, Margaret · NJ — suburban America, a girl's window, faith ── */
  margaret: scene(`
    <defs>
      <linearGradient id="margSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a4878"/><stop offset=".44" stop-color="#6878a8"/>
        <stop offset=".72" stop-color="#9898c0"/><stop offset="1" stop-color="#c8c8e0"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#margSky)"/>
    ${stars(10, 275)}
    <path d="M0 328 Q80 312 150 320 T300 324 L300 450 L0 450 Z" fill="#4a7040"/>
    <path d="M0 378 Q80 362 150 370 T300 368 L300 450 L0 450 Z" fill="#3a6030"/>
    <g fill="#2a2820">
      <rect x="88" y="202" width="124" height="132"/>
      <path d="M80 206 L150 170 L220 206 Z"/>
      <rect x="104" y="170" width="92" height="36"/>
      <path d="M98 174 L150 142 L202 174 Z"/>
      <rect x="122" y="142" width="56" height="32"/>
    </g>
    ${[[94,218],[110,218],[94,252],[110,252],[174,218],[190,218],[174,252],[190,252]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#e8e8f8" opacity="${y===218?'.42':'.32'}"/>`).join('')}
    <rect x="130" y="224" width="40" height="48" fill="#4878a8" opacity=".35"/>
    <rect x="132" y="226" width="36" height="44" fill="#e8f0f8" opacity=".28"/>
    <g fill="#1a1a28">
      <circle cx="150" cy="316" r="5.5"/>
      <rect x="147" y="321" width="5" height="14" rx="1"/>
      <path d="M142 330 L147 324 L153 324 L158 330 L156 340 L144 340 Z"/>
    </g>
    <path d="M144 224 L144 272" stroke="#8898c8" stroke-width=".4" fill="none" opacity=".3"/>
    <path d="M158 224 L158 272" stroke="#8898c8" stroke-width=".4" fill="none" opacity=".3"/>
    <path d="M130 248 L170 248" stroke="#8898c8" stroke-width=".4" fill="none" opacity=".3"/>
  `),

  /* ── The New York Trilogy · New York — a city of locked doors, absent persons, labyrinthine streets ── */
  newyorktrilogy: scene(`
    <defs>
      <linearGradient id="nytSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0c0c12"/><stop offset=".5" stop-color="#181820"/>
        <stop offset="1" stop-color="#282830"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nytSky)"/>
    ${stars(10, 277)}
    <g fill="#12121c">
      <rect x="0" y="172" width="58" height="278"/>
      <rect x="242" y="158" width="58" height="292"/>
      <rect x="66" y="196" width="46" height="254"/>
      <rect x="190" y="184" width="46" height="266"/>
      <rect x="118" y="168" width="62" height="282"/>
    </g>
    ${Array.from({length:16}).map((_,i)=>{const x=(i*53+5)%300, y=180+(i*41)%240; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#9898b8" opacity="${0.1+((i*7)%5)/14}"/>`;}).join('')}
    <path d="M0 376 Q150 366 300 374 L300 450 L0 450 Z" fill="#0c0c12"/>
    <path d="M0 376 Q150 372 300 374" stroke="#4848a0" stroke-width=".4" fill="none" opacity=".3"/>
    ${Array.from({length:3}).map((_,i)=>`<rect x="${128+i*16}" y="${208}" width="8" height="112" fill="#0c0c12" opacity=".7"/>`).join('')}
    <g fill="#0e0e18">
      <circle cx="150" cy="320" r="5.5"/>
      <rect x="147" y="325" width="5" height="22" rx="1"/>
    </g>
    <path d="M100 150 L100 380 M200 150 L200 380 M150 100 L150 420" stroke="#4848a0" stroke-width=".3" fill="none" opacity=".18"/>
  `),

  /* ── Great World Spin · New York 2001 — a tightrope walker above the Twin Towers, stories crossing ── */
  greatworldspin: scene(`
    <defs>
      <linearGradient id="gwsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1420"/><stop offset=".38" stop-color="#1c2a3c"/>
        <stop offset=".72" stop-color="#2e4058"/><stop offset="1" stop-color="#405070"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gwsSky)"/>
    ${stars(12, 279)}
    <g fill="#101824">
      <rect x="66" y="84" width="68" height="340"/>
      <rect x="166" y="84" width="68" height="340"/>
    </g>
    ${Array.from({length:16}).map((_,i)=>{const col=i%2; return `<rect x="${col===0?70:170}" y="${94+Math.floor(i/2)*36}" width="12" height="20" fill="#e0c870" opacity="${0.15+((i*7)%5)/12}"/>`;}).join('')}
    ${Array.from({length:8}).map((_,i)=>`<rect x="${78+i*10}" y="${94+i*18}" width="12" height="20" fill="#e0c870" opacity="${0.1+i%2*0.08}"/>`).join('')}
    <path d="M0 84 L66 84" stroke="#d0c060" stroke-width=".6" fill="none" opacity=".35"/>
    <path d="M234 84 L300 84" stroke="#d0c060" stroke-width=".6" fill="none" opacity=".35"/>
    <circle cx="150" cy="84" r="4" fill="#f0e0a0" opacity=".75"/>
    <path d="M66 84 L234 84" stroke="#d0c060" stroke-width=".8" fill="none" opacity=".55"/>
    <g fill="#0e1420">
      <circle cx="150" cy="79" r="3.5"/>
      <rect x="148" y="82" width="3" height="8" rx="1"/>
      <path d="M140 80 L148 84 L152 84 L160 80" stroke="#d0c060" stroke-width=".5" fill="none"/>
    </g>
    <path d="M0 394 Q150 384 300 392 L300 450 L0 450 Z" fill="#0a0e16"/>
    <path d="M0 394 Q150 388 300 392" stroke="#405070" stroke-width=".5" fill="none" opacity=".3"/>
  `),

  /* ── Salvage the Bones · Mississippi — a ramshackle house, summer kudzu, hurricane coming ── */
  salvagebones: scene(`
    <defs>
      <linearGradient id="svbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2828"/><stop offset=".38" stop-color="#504848"/>
        <stop offset=".68" stop-color="#786858"/><stop offset="1" stop-color="#9a8860"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#svbSky)"/>
    ${stars(6, 281)}
    <path d="M0 296 Q80 272 150 282 T300 288 L300 450 L0 450 Z" fill="#4a6030"/>
    <path d="M0 348 Q80 328 150 338 T300 336 L300 450 L0 450 Z" fill="#3a5028"/>
    <path d="M0 400 Q80 384 150 392 T300 388 L300 450 L0 450 Z" fill="#2a4020"/>
    <path d="M40 296 Q30 268 18 244 Q26 260 28 280 Q32 288 40 296 Z" fill="#4a7038"/>
    <path d="M262 292 Q274 264 284 242 Q276 258 274 278 Q270 288 262 292 Z" fill="#4a7038"/>
    <g fill="#1e1808">
      <rect x="104" y="218" width="92" height="82"/>
      <path d="M96 222 L150 190 L204 222 Z"/>
      <rect x="122" y="190" width="56" height="32"/>
      <path d="M116 194 L150 168 L184 194 Z"/>
      <rect x="134" y="168" width="32" height="26"/>
    </g>
    ${[[108,230],[124,230],[108,258],[124,258],[162,230],[178,230]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#c8a040" opacity="${y===230?'.38':'.25'}"/>`).join('')}
    <g fill="#160e04">
      <circle cx="150" cy="288" r="5.5"/>
      <rect x="147" y="293" width="5" height="10" rx="1"/>
    </g>
    <path d="M60 276 Q80 248 100 264 Q84 252 76 248 Q68 252 60 276 Z" fill="#5a7840" opacity=".55"/>
    <path d="M200 272 Q220 244 240 260 Q224 248 216 244 Q208 248 200 272 Z" fill="#5a7840" opacity=".5"/>
  `),

  /* ── The Sellout · Dickens, LA — a satirist's absurd suburb, a slave owner on a Metro car ── */
  thesellout: scene(`
    <defs>
      <linearGradient id="tsoSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1018"/><stop offset=".4" stop-color="#2c1c28"/>
        <stop offset=".7" stop-color="#483040"/><stop offset="1" stop-color="#6a4858"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#tsoSky)"/>
    ${stars(9, 283)}
    <g fill="#141018">
      <rect x="0" y="202" width="58" height="248"/>
      <rect x="242" y="188" width="58" height="262"/>
      <rect x="66" y="222" width="46" height="228"/>
      <rect x="192" y="210" width="46" height="240"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*47+7)%300, y=214+(i*43)%210; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e0a858" opacity="${0.12+((i*7)%5)/12}"/>`;}).join('')}
    <rect x="96" y="294" width="108" height="56" rx="2" fill="#181424"/>
    <rect x="100" y="298" width="100" height="48" fill="#201a2c"/>
    ${Array.from({length:4}).map((_,i)=>`<rect x="${104+i*24}" y="${304}" width="16" height="32" rx="1" fill="#0e0c14"/>`).join('')}
    ${Array.from({length:4}).map((_,i)=>`<rect x="${104+i*24}" y="${308}" width="16" height="24" fill="#d0c080" opacity="${0.1+(i%2)*0.07}"/>`).join('')}
    <rect x="88" y="348" width="124" height="6" rx="1" fill="#2a2838"/>
    <path d="M0 380 Q150 370 300 378 L300 450 L0 450 Z" fill="#0e0c14"/>
    <path d="M0 380 Q150 374 300 378" stroke="#6a4858" stroke-width=".5" fill="none" opacity=".25"/>
    <g fill="#0e0c14">
      <circle cx="150" cy="352" r="5.5"/>
      <rect x="147" y="357" width="5" height="20" rx="1"/>
    </g>
  `),

  /* ── Bluebird, Bluebird · East Texas — a highway diner, a small-town deputy, racial violence ── */
  bluebirdbluebird: scene(`
    <defs>
      <linearGradient id="bbbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#282830"/><stop offset=".4" stop-color="#484858"/>
        <stop offset=".72" stop-color="#7a7870"/><stop offset="1" stop-color="#b0a880"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#bbbSky)"/>
    ${stars(8, 285)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#5a5838"/>
    <path d="M0 368 Q150 356 300 366 L300 450 L0 450 Z" fill="#484828"/>
    <path d="M0 414 Q150 406 300 412 L300 450 L0 450 Z" fill="#3a3820"/>
    <path d="M0 316 L300 316" stroke="#c8c8a0" stroke-width=".8" opacity=".3"/>
    <path d="M0 328 L300 328" stroke="#c8c8a0" stroke-width=".4" opacity=".18"/>
    <g fill="#1e1808">
      <rect x="88" y="218" width="124" height="102"/>
      <path d="M80 222 L150 186 L220 222 Z"/>
      <rect x="100" y="186" width="100" height="36"/>
    </g>
    ${[[92,234],[108,234],[92,264],[108,264],[168,234],[184,234],[168,264],[184,264]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="16" fill="#ffd870" opacity="${y===234?'.42':'.32'}"/>`).join('')}
    <rect x="126" y="280" width="48" height="24" rx="1" fill="#1e1808"/>
    <rect x="132" y="284" width="36" height="16" fill="#ffd870" opacity=".28"/>
    <path d="M0 310 L88 310 L88 320 L212 320 L212 310 L300 310" stroke="#c8c880" stroke-width=".5" fill="none" opacity=".22"/>
    <g fill="#141008">
      <circle cx="150" cy="306" r="5.5"/>
      <rect x="147" y="311" width="5" height="14" rx="1"/>
    </g>
    <circle cx="102" cy="196" r="6" fill="#4878c0" opacity=".6"/>
    <circle cx="198" cy="196" r="6" fill="#4878c0" opacity=".6"/>
  `),

  /* ── Lincoln in the Bardo · Washington D.C. 1862 — Oak Hill Cemetery, a ghost-world, a grieving president ── */
  lincolnbardo: scene(`
    <defs>
      <linearGradient id="libSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0e16"/><stop offset=".44" stop-color="#1c1c2c"/>
        <stop offset=".74" stop-color="#2e2c40"/><stop offset="1" stop-color="#423e58"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#libSky)"/>
    ${stars(14, 287)}
    <path d="M0 320 Q150 308 300 318 L300 450 L0 450 Z" fill="#1e2a18"/>
    <path d="M0 372 Q150 360 300 370 L300 450 L0 450 Z" fill="#182412"/>
    <g fill="#181c10">
      ${Array.from({length:6}).map((_,i)=>`<rect x="${78+i*24}" y="${228+i%2*16}" width="10" height="${84+i%2*20}" rx="2"/>`).join('')}
      ${Array.from({length:6}).map((_,i)=>`<path d="M${78+i*24} ${228+i%2*16} Q${83+i*24} ${216+i%2*14} ${88+i*24} ${228+i%2*16} Z"/>`).join('')}
    </g>
    ${Array.from({length:6}).map((_,i)=>`<circle cx="${83+i*24}" cy="${212+i%2*14}" r="4" fill="#e8f0e0" opacity="${0.15+((i*7)%5)/14}"/>`).join('')}
    <g fill="#e8ece0" opacity=".12">
      ${Array.from({length:4}).map((_,i)=>`<circle cx="${96+i*36}" cy="${288+i%2*16}" r="${14+i%2*6}"/>`).join('')}
    </g>
    <g fill="#1a1c14">
      <rect x="136" y="168" width="28" height="154" rx="2"/>
      <path d="M130 168 Q150 144 170 168 Z"/>
    </g>
    <g fill="#161614">
      <circle cx="150" cy="312" r="6.5"/>
      <rect x="146" y="318" width="6" height="8" rx="1"/>
      <path d="M138 322 L146 320 L154 320 L162 322 L160 344 L140 344 Z"/>
    </g>
  `),

  /* ── The Great Believers · Chicago 1980s — Wicker Park, the AIDS crisis, art and loss ── */
  greatbelievers: scene(`
    <defs>
      <linearGradient id="gbcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1020"/><stop offset=".4" stop-color="#2e2038"/>
        <stop offset=".7" stop-color="#4a3858"/><stop offset="1" stop-color="#6a5070"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gbcSky)"/>
    ${stars(10, 289)}
    <g fill="#141018">
      <rect x="0" y="196" width="60" height="254"/>
      <rect x="238" y="182" width="62" height="268"/>
      <rect x="68" y="218" width="48" height="232"/>
      <rect x="186" y="206" width="48" height="244"/>
      <rect x="122" y="186" width="60" height="264"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*51+6)%300, y=208+(i*43)%220; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#e090b0" opacity="${0.1+((i*7)%5)/12}"/>`;}).join('')}
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#0e0c14"/>
    <path d="M0 368 Q150 362 300 366" stroke="#6a5070" stroke-width=".5" fill="none" opacity=".25"/>
    ${Array.from({length:5}).map((_,i)=>`<path d="M${90+i*24} ${368} Q${98+i*24} ${356} ${106+i*24} ${368}" stroke="#c060a0" stroke-width=".7" fill="none" opacity=".2"/>`).join('')}
    <g fill="#0e0c14">
      <circle cx="138" cy="330" r="5.5"/>
      <rect x="135" y="335" width="5" height="30" rx="1"/>
      <circle cx="162" cy="326" r="5"/>
      <rect x="159" y="331" width="5" height="34" rx="1"/>
    </g>
  `),

  /* ── The Night Watchman · North Dakota 1953 — Thomas Wazhashk, the Turtle Mountain Band, Congress ── */
  nightwatchman: scene(`
    <defs>
      <linearGradient id="nwmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e1018"/><stop offset=".38" stop-color="#1e2030"/>
        <stop offset=".68" stop-color="#3a3848"/><stop offset="1" stop-color="#586078"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#nwmSky)"/>
    ${stars(14, 291)}
    <path d="M0 294 Q80 272 150 282 T300 280 L300 450 L0 450 Z" fill="#3a4a38"/>
    <path d="M0 344 Q80 324 150 334 T300 328 L300 450 L0 450 Z" fill="#2e3c28"/>
    <path d="M0 394 Q80 378 150 386 T300 378 L300 450 L0 450 Z" fill="#202e1c"/>
    <rect x="96" y="232" width="108" height="66" fill="#1a1c20"/>
    <rect x="100" y="236" width="100" height="58" fill="#24262c"/>
    ${Array.from({length:3}).map((_,i)=>`<rect x="${106+i*32}" y="${242}" width="18" height="28" fill="#ffd860" opacity="${0.18+i%2*0.1}"/>`).join('')}
    <rect x="146" y="158" width="8" height="74" fill="#1a1c20"/>
    <path d="M150 158 Q130 176 124 204 Q138 188 150 184 Q162 188 176 204 Q170 176 150 158 Z" fill="#1a1c20"/>
    <path d="M150 182 Q132 198 128 224 Q142 210 150 208 Q158 210 172 224 Q168 198 150 182 Z" fill="#242820"/>
    <path d="M150 208 Q134 222 130 246 Q144 232 150 230 Q156 232 170 246 Q166 222 150 208 Z" fill="#2e3428"/>
    <g fill="#181c14">
      <circle cx="150" cy="284" r="5.5"/>
      <rect x="147" y="289" width="5" height="12" rx="1"/>
    </g>
    <path d="M0 294 Q150 288 300 292" stroke="#586078" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Deacon King Kong · Brooklyn 1969 — the Cause Houses, a drunken deacon, a shot, a miracle ── */
  deaconkingkong: scene(`
    <defs>
      <linearGradient id="dkkSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1420"/><stop offset=".38" stop-color="#2e2438"/>
        <stop offset=".68" stop-color="#5a4848"/><stop offset="1" stop-color="#8a7058"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#dkkSky)"/>
    ${stars(9, 293)}
    <path d="M0 328 Q150 316 300 326 L300 450 L0 450 Z" fill="#2a4018"/>
    <path d="M0 378 Q150 366 300 376 L300 450 L0 450 Z" fill="#1e3010"/>
    <g fill="#181018">
      <rect x="0" y="178" width="68" height="272"/>
      <rect x="232" y="162" width="68" height="288"/>
      <rect x="76" y="202" width="56" height="248"/>
      <rect x="170" y="188" width="58" height="262"/>
    </g>
    ${Array.from({length:14}).map((_,i)=>{const x=(i*55+8)%300, y=194+(i*39)%200; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#d0a050" opacity="${0.12+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 328 Q150 322 300 326" stroke="#8a7058" stroke-width=".5" fill="none" opacity=".28"/>
    <g fill="#141018">
      <circle cx="140" cy="310" r="7"/>
      <rect x="136" y="317" width="6" height="14" rx="1"/>
      <path d="M128 326 L136 320 L144 320 L152 326 L150 340 L130 340 Z"/>
    </g>
    <rect x="104" y="188" width="92" height="4" rx="1" fill="#4a3838"/>
    <path d="M142 206 Q128 220 124 244" stroke="#8a3010" stroke-width="1.5" fill="none" opacity=".55"/>
  `),

  /* ── The George Miles Cycle · Los Angeles — 5-book spiral of obsession, a boy, beautiful dissolution ── */
  georgemiles: scene(`
    <defs>
      <linearGradient id="gmlSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#100810"/><stop offset=".44" stop-color="#201428"/>
        <stop offset=".74" stop-color="#382038"/><stop offset="1" stop-color="#503048"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gmlSky)"/>
    ${stars(11, 295)}
    <path d="M0 352 Q150 340 300 350 L300 450 L0 450 Z" fill="#1a1018"/>
    <path d="M0 396 Q150 386 300 394 L300 450 L0 450 Z" fill="#120c10"/>
    <g fill="#0e0c14">
      <rect x="0" y="198" width="56" height="254"/>
      <rect x="244" y="184" width="56" height="268"/>
      <rect x="64" y="218" width="44" height="234"/>
      <rect x="196" y="208" width="44" height="244"/>
    </g>
    ${Array.from({length:10}).map((_,i)=>{const x=(i*59+8)%300, y=210+(i*47)%200; return `<rect x="${x}" y="${y}" width="3" height="5" fill="#c060a8" opacity="${0.1+((i*7)%5)/14}"/>`;}).join('')}
    <circle cx="150" cy="220" r="90" fill="#c060a8" opacity=".05"/>
    <circle cx="150" cy="220" r="60" fill="#c060a8" opacity=".05"/>
    <circle cx="150" cy="220" r="36" fill="#c060a8" opacity=".06"/>
    <circle cx="150" cy="220" r="18" fill="#c060a8" opacity=".08"/>
    <circle cx="150" cy="220" r="7" fill="#e080c0" opacity=".35"/>
    <path d="M150 220 Q140 236 130 246 Q138 232 148 228" stroke="#c060a8" stroke-width=".7" fill="none" opacity=".22"/>
    <path d="M150 220 Q162 232 174 240 Q162 228 152 226" stroke="#c060a8" stroke-width=".7" fill="none" opacity=".22"/>
    <g fill="#0e0c14">
      <circle cx="150" cy="332" r="5.5"/>
      <rect x="147" y="337" width="5" height="18" rx="1"/>
    </g>
    <path d="M0 352 Q150 346 300 350" stroke="#503048" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── The Scarlet Letter · Boston — a Puritan meetinghouse, the scaffold, a crimson letter in snow ── */
  scarletletter: scene(`
    <defs>
      <linearGradient id="sltrSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#282c38"/><stop offset=".44" stop-color="#3c4048"/>
        <stop offset=".72" stop-color="#585858"/><stop offset="1" stop-color="#787068"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#sltrSky)"/>
    ${stars(8, 345)}
    <path d="M0 324 Q150 312 300 322 L300 450 L0 450 Z" fill="#e8eae8" opacity=".88"/>
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#d8dcd8" opacity=".9"/>
    <path d="M0 420 Q150 412 300 418 L300 450 L0 450 Z" fill="#c8ccc8"/>
    ${Array.from({length:8}).map((_,i)=>`<path d="M${30+i*36} ${334+i%2*12} Q${38+i*36} ${322+i%2*10} ${46+i*36} ${334+i%2*12}" stroke="#d0d4d0" stroke-width=".6" fill="none" opacity=".55"/>`).join('')}
    <g fill="#1c1c1c">
      <rect x="84" y="186" width="132" height="142"/>
      <path d="M76 190 L150 154 L224 190 Z"/>
      <rect x="104" y="154" width="92" height="38"/>
      <rect x="130" y="146" width="40" height="12"/>
      <rect x="143" y="136" width="14" height="12"/>
      ${Array.from({length:5}).map((_,i)=>`<rect x="${90+i*26}" y="${194}" width="12" height="${134}" fill="#242424" opacity=".3"/>`).join('')}
    </g>
    ${[[88,206],[104,206],[88,244],[104,244],[172,206],[188,206],[172,244],[188,244]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="22" fill="#f0e890" opacity="${y===206?'.35':'.25'}"/>`).join('')}
    <rect x="120" y="318" width="60" height="12" fill="#d8dcd8" opacity=".7"/>
    ${Array.from({length:4}).map((_,i)=>`<rect x="${122+i*16}" y="${318}" width="8" height="12" fill="#c8ccc8" opacity=".6"/>`).join('')}
    <g fill="#b01010">
      <path d="M148 296 L144 310 L150 306 L156 310 L152 296 Z"/>
      <path d="M144 296 L138 302 L144 302 L148 296 Z"/>
      <path d="M156 296 L162 302 L156 302 L152 296 Z"/>
    </g>
    <g fill="#1a1818">
      <circle cx="150" cy="316" r="5.5"/>
      <rect x="147" y="321" width="5" height="6" rx="1"/>
    </g>
  `),

  /* ── The Color Purple · rural Georgia — red clay fields, a humble church, wisteria and light ── */
  colorpurple: scene(`
    <defs>
      <linearGradient id="cpurSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5060a0"/><stop offset=".38" stop-color="#8080b0"/>
        <stop offset=".68" stop-color="#b0a0b8"/><stop offset="1" stop-color="#d8b8c8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cpurSky)"/>
    ${stars(5, 347)}
    <path d="M0 304 Q150 292 300 302 L300 450 L0 450 Z" fill="#803018"/>
    <path d="M0 356 Q150 344 300 354 L300 450 L0 450 Z" fill="#6a2814"/>
    <path d="M0 408 Q150 398 300 406 L300 450 L0 450 Z" fill="#501c0c"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${36+i*44} ${312+i%2*12} Q${48+i*44} ${300+i%2*10} ${60+i*44} ${312+i%2*12}" stroke="#a04820" stroke-width=".7" fill="none" opacity=".5"/>`).join('')}
    <g fill="#281c10">
      <rect x="108" y="208" width="84" height="100"/>
      <path d="M100 212 L150 178 L200 212 Z"/>
      <rect x="130" y="178" width="40" height="34"/>
      <rect x="143" y="168" width="14" height="12"/>
    </g>
    ${[[112,228],[126,228],[154,228],[168,228],[112,260],[126,260],[154,260],[168,260]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="18" fill="#f0d090" opacity="${y===228?'.38':'.28'}"/>`).join('')}
    ${Array.from({length:6}).map((_,i)=>`<path d="M${56+i*34} ${280} Q${62+i*34} ${258} ${68+i*34} ${244} Q${72+i*34} ${228} ${78+i*34} ${224}" stroke="#6a3868" stroke-width="2.5" fill="none" opacity=".6"/>`).join('')}
    ${Array.from({length:8}).map((_,i)=>`<circle cx="${54+(i%4)*34+(Math.floor(i/4))*16}" cy="${238+(i%3)*14}" r="${4+i%2*2}" fill="#9060a8" opacity="${0.35+i%3*0.08}"/>`).join('')}
    <g fill="#1a1010">
      <circle cx="150" cy="296" r="5.5"/>
      <rect x="147" y="301" width="5" height="10" rx="1"/>
      <path d="M140 308 L147 304 L153 304 L160 308 L158 318 L142 318 Z"/>
    </g>
    <path d="M0 304 Q150 298 300 302" stroke="#d8b8c8" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── Invisible Man · Harlem — a jazz club below street level, golden light from underground, a lone figure ── */
  invisibleman: scene(`
    <defs>
      <linearGradient id="ivmSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080808"/><stop offset=".38" stop-color="#101018"/>
        <stop offset=".68" stop-color="#181820"/><stop offset="1" stop-color="#242428"/>
      </linearGradient>
      <radialGradient id="ivmGlow" cx="50%" cy="100%" r="60%">
        <stop offset="0" stop-color="#c08020" stop-opacity=".6"/>
        <stop offset="1" stop-color="#c08020" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ivmSky)"/>
    ${stars(6, 349)}
    <rect x="0" y="0" width="300" height="450" fill="url(#ivmGlow)"/>
    <path d="M0 296 Q150 284 300 294 L300 450 L0 450 Z" fill="#181008"/>
    <path d="M0 348 Q150 338 300 346 L300 450 L0 450 Z" fill="#141008"/>
    <path d="M0 400 Q150 392 300 398 L300 450 L0 450 Z" fill="#100c08"/>
    <g fill="#0c0c10">
      ${[0,62,122,178,238].map(x=>`<rect x="${x}" y="${0}" width="54" height="298"/>`).join('')}
      ${Array.from({length:18}).map((_,i)=>{const x=(i*56+2)%300,y=30+(i*44)%260; return `<rect x="${x}" y="${y}" width="8" height="14" fill="#c08020" opacity="${0.06+((i*7)%6)/14}"/>`;}).join('')}
    </g>
    <rect x="0" y="290" width="300" height="12" fill="#1c1408"/>
    <rect x="0" y="298" width="300" height="154" fill="#120e08"/>
    ${Array.from({length:5}).map((_,i)=>`<rect x="${58+i*40}" y="${316}" width="20" height="28" rx="1" fill="#c08020" opacity="${0.2+i%3*0.06}"/>`).join('')}
    ${Array.from({length:5}).map((_,i)=>`<path d="M${62+i*40} ${316} Q${68+i*40} ${302} ${74+i*40} ${316}" stroke="#c08020" stroke-width="1.5" fill="none" opacity=".25"/>`).join('')}
    <rect x="0" y="386" width="300" height="8" fill="#c08020" opacity=".08"/>
    <g fill="#060608">
      <circle cx="150" cy="348" r="6"/>
      <rect x="147" y="354" width="5" height="22" rx="1"/>
      <path d="M136 366 L147 358 L153 358 L164 366 L160 390 L140 390 Z"/>
    </g>
    <path d="M0 348 Q150 342 300 346" stroke="#302818" stroke-width=".5" fill="none" opacity=".35"/>
  `),
};
