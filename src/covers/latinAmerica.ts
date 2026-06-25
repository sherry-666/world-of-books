// Latin American literature.
import { scene, stars } from './helpers';

export const LATIN_AMERICA_COVERS: Record<string, string> = {

  /* ── City of God · Rio de Janeiro — the favela, dusk city, a boy's story of violence and hope ── */
  cityofgod: scene(`
    <defs>
      <linearGradient id="cgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".36" stop-color="#3a3450"/>
        <stop offset=".65" stop-color="#7a6050"/><stop offset="1" stop-color="#c09050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#cgSky)"/>
    ${stars(10, 151)}
    <g fill="#1a1428">
      <rect x="0" y="186" width="30" height="264"/>
      <rect x="34" y="212" width="22" height="238"/>
      <rect x="60" y="172" width="28" height="278"/>
      <rect x="92" y="204" width="18" height="246"/>
      <rect x="114" y="186" width="24" height="264"/>
      <rect x="142" y="160" width="32" height="290"/>
      <rect x="178" y="192" width="22" height="258"/>
      <rect x="204" y="170" width="28" height="280"/>
      <rect x="236" y="206" width="20" height="244"/>
      <rect x="260" y="178" width="40" height="272"/>
    </g>
    ${Array.from({length:22}).map((_,i)=>{const x=(i*47+13)%300, y=172+(i*31)%200; return `<rect x="${x}" y="${y}" width="4" height="6" fill="#ffc848" opacity="${0.2+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 372 Q150 360 300 370 L300 450 L0 450 Z" fill="#1e2030"/>
    <path d="M0 408 Q75 400 150 406 T300 404 L300 450 L0 450 Z" fill="#141828"/>
    <path d="M0 372 Q150 366 300 370" stroke="#c09050" stroke-width=".6" fill="none" opacity=".25"/>
    <g fill="#0e0c18">
      <circle cx="150" cy="348" r="5.5"/>
      <rect x="147" y="353" width="5" height="18" rx="1"/>
    </g>
  `),

  /* ── In the Time of the Butterflies · Dominican Republic — the Mirabal sisters, tropical flowers, a regime ── */
  butterflies: scene(`
    <defs>
      <linearGradient id="btSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1020"/><stop offset=".4" stop-color="#3a2030"/>
        <stop offset=".7" stop-color="#7a4040"/><stop offset="1" stop-color="#c07050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#btSky)"/>
    ${stars(8, 153)}
    <path d="M0 318 Q150 306 300 316 L300 450 L0 450 Z" fill="#2a3818"/>
    <path d="M0 364 Q150 354 300 362 L300 450 L0 450 Z" fill="#1e2e10"/>
    <g fill="#1a2808">
      ${[-50,-25,0,25,50].map(dx=>`<rect x="${150+dx}" y="${200}" width="5" height="118"/><path d="M${152+dx} 200 Q${164+dx} 218 ${152+dx} 236 Q${140+dx} 254 ${152+dx} 272 Q${164+dx} 290 ${152+dx} 318" stroke="#1a2808" stroke-width="14" fill="none"/>`).join('')}
    </g>
    ${Array.from({length:8}).map((_,i)=>{const cx=104+i*14, cy=200+i%4*18; return `<ellipse cx="${cx}" cy="${cy}" rx="9" ry="6" fill="#c84060" opacity="${0.55+i%2*0.15}" transform="rotate(${i*22} ${cx} ${cy})"/><ellipse cx="${cx+3}" cy="${cy-4}" rx="6" ry="4" fill="#e06080" opacity="${0.45+i%2*0.1}" transform="rotate(${-i*18} ${cx} ${cy})"/>`;}).join('')}
    <path d="M0 318 Q150 310 300 316" stroke="#4a6028" stroke-width=".6" fill="none" opacity=".35"/>
  `),

  /* ── Aunt Julia and the Scriptwriter · Lima — a radio studio, Lima streets, comic romance ── */
  auntjulia: scene(`
    <defs>
      <linearGradient id="ajSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2840"/><stop offset=".44" stop-color="#4a4868"/>
        <stop offset=".74" stop-color="#8a7058"/><stop offset="1" stop-color="#c0a060"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ajSky)"/>
    ${stars(9, 157)}
    <g fill="#1a1828">
      <rect x="0" y="224" width="66" height="226"/>
      <rect x="234" y="210" width="66" height="240"/>
      <rect x="74" y="248" width="50" height="202"/>
      <rect x="178" y="238" width="50" height="212"/>
    </g>
    ${[[6,242],[20,242],[6,272],[20,272],[240,228],[254,228],[240,258]].map(([x,y])=>`<rect x="${x}" y="${y}" width="10" height="14" fill="#e0a038" opacity=".38"/>`).join('')}
    <rect x="108" y="172" width="84" height="60" fill="#1e1a28"/>
    <rect x="113" y="177" width="74" height="50" fill="#282440"/>
    <circle cx="150" cy="200" r="36" fill="#e0a038" opacity=".14"/>
    <rect x="120" y="182" width="26" height="40" fill="#e0a038" opacity=".16"/>
    <rect x="155" y="182" width="26" height="40" fill="#e0a038" opacity=".12"/>
    <g fill="#141028">
      <rect x="138" y="248" width="24" height="30" rx="2"/>
      <rect x="142" y="240" width="16" height="10" rx="1"/>
      <circle cx="150" cy="253" r="6" fill="#e0a038" opacity=".4"/>
    </g>
    <rect x="0" y="368" width="300" height="82" fill="#100e18"/>
    <path d="M0 368 Q150 362 300 366" stroke="#c0a060" stroke-width=".5" fill="none" opacity=".22"/>
  `),

  /* ── Gabriela, Clove and Cinnamon · Ilhéus, Bahia — a cacao town, golden skin, flowering jacaranda ── */
  gabriela: scene(`
    <defs>
      <linearGradient id="gbSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2a3a"/><stop offset=".36" stop-color="#5a4838"/>
        <stop offset=".65" stop-color="#a08040"/><stop offset="1" stop-color="#d0b040"/>
      </linearGradient>
      <radialGradient id="gbSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe890" stop-opacity=".72"/>
        <stop offset="1" stop-color="#ffe890" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#gbSky)"/>
    <circle cx="76" cy="152" r="58" fill="url(#gbSun)"/>
    <circle cx="76" cy="152" r="16" fill="#ffe890" opacity=".85"/>
    ${stars(6, 159)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#5a7828"/>
    <path d="M0 364 Q150 354 300 362 L300 450 L0 450 Z" fill="#486020"/>
    <path d="M0 414 Q150 406 300 412 L300 450 L0 450 Z" fill="#385018"/>
    <g fill="#1e2e10">
      <rect x="180" y="168" width="8" height="150"/>
      <path d="M184 168 Q212 184 220 214 Q196 202 184 186 Q172 202 148 214 Q156 184 184 168 Z"/>
      <path d="M184 196 Q208 210 214 236 Q192 224 184 210 Q176 224 154 236 Q160 210 184 196 Z"/>
      <path d="M184 222 Q204 234 210 256 Q190 244 184 232 Q178 244 158 256 Q164 234 184 222 Z"/>
    </g>
    ${[-14,-4,6,16,-20,10].map((dx,i)=>`<circle cx="${126+dx}" cy="${264+i%3*16}" r="${5+i%2}" fill="#7a68a0" opacity=".65"/>`).join('')}
    <path d="M0 316 Q150 308 300 314" stroke="#d0b040" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#1a1008">
      <circle cx="110" cy="302" r="6.5"/>
      <rect x="107" y="308" width="6" height="8" rx="1"/>
    </g>
  `),

  /* ── Pedro Páramo · Comala, Mexico — a ghost town, the dead speak, volcanic lava and memory ── */
  pedroparamo: scene(`
    <defs>
      <linearGradient id="ppSky2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0c14"/><stop offset=".4" stop-color="#1e1820"/>
        <stop offset=".7" stop-color="#3a2c28"/><stop offset="1" stop-color="#5a4030"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ppSky2)"/>
    ${stars(14, 163)}
    <path d="M0 288 Q60 262 110 272 Q140 278 150 268 Q160 258 190 264 Q240 274 300 252 L300 450 L0 450 Z" fill="#3a2818"/>
    <path d="M0 340 Q150 326 300 336 L300 450 L0 450 Z" fill="#2a1e10"/>
    <path d="M0 392 Q150 380 300 388 L300 450 L0 450 Z" fill="#1e1608"/>
    <g fill="#241a0e" opacity=".9">
      <rect x="100" y="196" width="36" height="96"/>
      <rect x="164" y="208" width="30" height="84"/>
      <rect x="78" y="220" width="18" height="72"/>
      <rect x="210" y="216" width="18" height="76"/>
    </g>
    <g fill="#1a1208">
      <path d="M88 196 Q100 180 112 196 Z"/>
      <path d="M152 208 Q164 194 176 208 Z"/>
    </g>
    ${[[104,218],[118,218],[104,246],[168,228],[180,228]].map(([x,y])=>`<rect x="${x}" y="${y}" width="8" height="12" fill="#5a4030" opacity=".6"/>`).join('')}
    <path d="M0 288 Q60 266 110 274 Q150 270 190 266 Q240 262 300 254" stroke="#5a4030" stroke-width=".7" fill="none" opacity=".4"/>
    <circle cx="150" cy="104" r="40" fill="#3a2818" opacity=".5"/>
    <path d="M128 108 Q150 80 172 108 Q164 98 150 96 Q136 98 128 108 Z" fill="#4a3020" opacity=".7"/>
  `),

  /* ── Cartucho · Chihuahua, Mexico — the Revolution, a child's eye, cactus and desert dust ── */
  cartucho: scene(`
    <defs>
      <linearGradient id="ctSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a3828"/><stop offset=".38" stop-color="#7a5830"/>
        <stop offset=".68" stop-color="#b08840"/><stop offset="1" stop-color="#d4a840"/>
      </linearGradient>
      <radialGradient id="ctSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe890" stop-opacity=".7"/>
        <stop offset="1" stop-color="#ffe890" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#ctSky)"/>
    <circle cx="216" cy="142" r="52" fill="url(#ctSun)"/>
    <circle cx="216" cy="142" r="14" fill="#ffe890" opacity=".82"/>
    ${stars(5, 167)}
    <path d="M0 316 Q150 304 300 314 L300 450 L0 450 Z" fill="#8a6830"/>
    <path d="M0 368 Q150 358 300 366 L300 450 L0 450 Z" fill="#6a5020"/>
    <path d="M0 420 Q150 412 300 418 L300 450 L0 450 Z" fill="#4e3c14"/>
    <g fill="#2a2010">
      <rect x="98" y="216" width="14" height="102"/>
      <rect x="91" y="182" width="8" height="36"/><rect x="109" y="188" width="8" height="28"/>
      <rect x="87" y="176" width="6" height="18"/><rect x="113" y="180" width="6" height="16"/>
      <rect x="152" y="228" width="12" height="90"/>
      <rect x="146" y="196" width="7" height="32"/><rect x="163" y="202" width="7" height="26"/>
      <rect x="143" y="190" width="5" height="16"/><rect x="168" y="194" width="5" height="14"/>
      <rect x="186" y="234" width="10" height="84"/>
      <rect x="181" y="206" width="6" height="28"/><rect x="195" y="210" width="6" height="24"/>
    </g>
    <path d="M0 316 Q150 308 300 314" stroke="#d4a840" stroke-width=".5" fill="none" opacity=".28"/>
  `),

  /* ── The Passion According to G.H. · Rio de Janeiro — an apartment, a cockroach, existential abyss ── */
  passiongh: scene(`
    <defs>
      <linearGradient id="pgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e8e4d8"/><stop offset=".4" stop-color="#d8d0c0"/>
        <stop offset=".7" stop-color="#c0b0a0"/><stop offset="1" stop-color="#a89080"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#pgSky)"/>
    <rect x="0" y="0" width="300" height="450" fill="#0e0c10" opacity=".52"/>
    <rect x="108" y="78" width="84" height="284" fill="#181410"/>
    <rect x="114" y="84" width="72" height="272" fill="#241e18"/>
    <rect x="116" y="88" width="30" height="58" fill="#e8c080" opacity=".18"/>
    <rect x="154" y="88" width="30" height="58" fill="#e8c080" opacity=".13"/>
    <rect x="116" y="158" width="30" height="58" fill="#e8c080" opacity=".10"/>
    <rect x="154" y="158" width="30" height="58" fill="#e8c080" opacity=".09"/>
    <rect x="116" y="228" width="30" height="54" fill="#e8c080" opacity=".08"/>
    <rect x="154" y="228" width="30" height="54" fill="#e8c080" opacity=".07"/>
    <rect x="0" y="358" width="300" height="92" fill="#0c0a0e"/>
    <path d="M0 358 Q150 352 300 356" stroke="#6a5840" stroke-width=".7" fill="none" opacity=".3"/>
    <g fill="#0e0c10">
      <ellipse cx="150" cy="326" rx="18" ry="7"/>
      <path d="M132 326 L110 318 L116 326"/>
      <path d="M168 326 L190 318 L184 326"/>
      <path d="M140 322 L128 310 L134 322"/>
      <path d="M160 322 L172 310 L166 322"/>
      <circle cx="136" cy="320" r="3"/>
      <circle cx="164" cy="320" r="3"/>
    </g>
    <rect x="118" y="86" width="64" height="2" fill="#e8c080" opacity=".4"/>
    <rect x="118" y="156" width="64" height="2" fill="#e8c080" opacity=".3"/>
    <rect x="118" y="226" width="64" height="2" fill="#e8c080" opacity=".22"/>
  `),

  /* ── The Hour of the Star · Rio de Janeiro — a typist from the northeast, the city's indifference ── */
  hourstar: scene(`
    <defs>
      <linearGradient id="hsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1828"/><stop offset=".4" stop-color="#3a3458"/>
        <stop offset=".7" stop-color="#6a5848"/><stop offset="1" stop-color="#9a8050"/>
      </linearGradient>
    </defs>
    <rect width="300" height="450" fill="url(#hsSky)"/>
    ${stars(16, 171)}
    <g fill="#141220">
      <rect x="0" y="196" width="52" height="254"/>
      <rect x="248" y="180" width="52" height="270"/>
      <rect x="60" y="218" width="40" height="232"/>
      <rect x="202" y="208" width="40" height="242"/>
      <rect x="108" y="174" width="86" height="276"/>
    </g>
    ${Array.from({length:16}).map((_,i)=>{const x=(i*43+9)%300, y=180+(i*37)%220; return `<rect x="${x}" y="${y}" width="5" height="7" fill="#ffc848" opacity="${0.12+((i*7)%5)/10}"/>`;}).join('')}
    <path d="M0 374 Q150 364 300 372 L300 450 L0 450 Z" fill="#1a1830"/>
    <path d="M0 374 Q150 368 300 372" stroke="#9a8050" stroke-width=".5" fill="none" opacity=".22"/>
    <g fill="#0c0a14">
      <circle cx="150" cy="330" r="7"/>
      <rect x="146" y="337" width="7" height="24" rx="1"/>
      <path d="M138 352 L146 340 L154 340 L162 352 L158 368 L142 368 Z"/>
      <path d="M138 352 Q128 364 132 376 Q136 364 144 362"/>
      <path d="M162 352 Q172 364 168 376 Q164 364 156 362"/>
    </g>
    <circle cx="150" cy="148" r="12" fill="#e8c060" opacity=".55"/>
    <circle cx="150" cy="148" r="5" fill="#e8c060" opacity=".72"/>
    <path d="M150 136 L150 126 M140 141 L133 134 M160 141 L167 134" stroke="#e8c060" stroke-width="1.2" opacity=".4"/>
  `),

  /* ── The Old Man and the Sea · Cojímar — a skiff on the Gulf Stream, a great marlin, Cuban sunrise ── */
  oldmansea: scene(`
    <defs>
      <linearGradient id="omsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1020"/><stop offset=".3" stop-color="#1a2840"/>
        <stop offset=".58" stop-color="#2060a0"/><stop offset=".82" stop-color="#40a0c0"/>
        <stop offset="1" stop-color="#70c8d8"/>
      </linearGradient>
      <radialGradient id="omsSun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#ffe880" stop-opacity=".8"/>
        <stop offset="1" stop-color="#ffe880" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="450" fill="url(#omsSky)"/>
    ${stars(6, 319)}
    <circle cx="150" cy="218" r="90" fill="url(#omsSun)"/>
    <circle cx="150" cy="218" r="20" fill="#ffe880" opacity=".85"/>
    <path d="M0 310 Q150 298 300 308 L300 450 L0 450 Z" fill="#2878a8" opacity=".85"/>
    <path d="M0 350 Q75 342 150 348 T300 346 L300 450 L0 450 Z" fill="#1c5c88"/>
    <path d="M0 394 Q75 386 150 392 T300 390 L300 450 L0 450 Z" fill="#144868"/>
    ${Array.from({length:6}).map((_,i)=>`<path d="M${30+i*40} ${318+i%2*10} Q${46+i*40} ${310+i%2*8} ${62+i*40} ${318+i%2*10}" stroke="#5098b8" stroke-width=".8" fill="none" opacity=".5"/>`).join('')}
    <g fill="#1a1808">
      <path d="M130 286 L152 262 L172 288 L162 310 L138 310 Z"/>
      <rect x="148" y="232" width="4" height="54"/>
      <path d="M150 232 L130 258 L148 252 Z"/>
      <ellipse cx="150" cy="296" rx="26" ry="8"/>
    </g>
    <path d="M0 310 Q150 304 300 308" stroke="#5098b8" stroke-width=".5" fill="none" opacity=".3"/>
    <g fill="#100e08">
      <circle cx="150" cy="306" r="5"/>
      <rect x="147" y="311" width="5" height="8" rx="1"/>
    </g>
    ${Array.from({length:3}).map((_,i)=>`<path d="M${148+i*18} ${300} Q${152+i*18} ${280} ${148+i*18} ${270}" stroke="#1a6080" stroke-width="1.5" fill="none" opacity=".35"/>`).join('')}
  `),
};
