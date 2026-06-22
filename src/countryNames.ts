// ISO 3166-1 numeric → display name (matches world-atlas topojson feature IDs)
export const COUNTRY_NAMES: Readonly<Record<number, string>> = {
  // Africa
  12: 'Algeria', 24: 'Angola', 204: 'Benin', 72: 'Botswana', 854: 'Burkina Faso',
  120: 'Cameroon', 140: 'Central African Republic', 148: 'Chad', 178: 'Congo',
  180: 'DR Congo', 262: 'Djibouti', 818: 'Egypt', 232: 'Eritrea', 231: 'Ethiopia',
  266: 'Gabon', 288: 'Ghana', 324: 'Guinea', 384: "Côte d'Ivoire", 404: 'Kenya',
  434: 'Libya', 450: 'Madagascar', 454: 'Malawi', 466: 'Mali', 478: 'Mauritania',
  504: 'Morocco', 508: 'Mozambique', 516: 'Namibia', 562: 'Niger', 566: 'Nigeria',
  646: 'Rwanda', 686: 'Senegal', 694: 'Sierra Leone', 706: 'Somalia',
  710: 'South Africa', 728: 'South Sudan', 729: 'Sudan', 834: 'Tanzania',
  768: 'Togo', 788: 'Tunisia', 800: 'Uganda', 894: 'Zambia', 716: 'Zimbabwe',
  // Americas
  32: 'Argentina', 68: 'Bolivia', 76: 'Brazil', 124: 'Canada', 152: 'Chile',
  170: 'Colombia', 188: 'Costa Rica', 192: 'Cuba', 214: 'Dominican Republic',
  218: 'Ecuador', 222: 'El Salvador', 320: 'Guatemala', 332: 'Haiti',
  340: 'Honduras', 388: 'Jamaica', 484: 'Mexico', 558: 'Nicaragua', 591: 'Panama',
  600: 'Paraguay', 604: 'Peru', 840: 'United States', 858: 'Uruguay', 862: 'Venezuela',
  // Asia
  4: 'Afghanistan', 31: 'Azerbaijan', 50: 'Bangladesh', 116: 'Cambodia',
  156: 'China', 268: 'Georgia', 356: 'India', 360: 'Indonesia', 364: 'Iran',
  368: 'Iraq', 376: 'Israel', 392: 'Japan', 400: 'Jordan', 398: 'Kazakhstan',
  414: 'Kuwait', 417: 'Kyrgyzstan', 418: 'Laos', 422: 'Lebanon', 458: 'Malaysia',
  496: 'Mongolia', 104: 'Myanmar', 524: 'Nepal', 408: 'North Korea', 512: 'Oman',
  586: 'Pakistan', 608: 'Philippines', 634: 'Qatar', 682: 'Saudi Arabia',
  410: 'South Korea', 144: 'Sri Lanka', 760: 'Syria',
  762: 'Tajikistan', 764: 'Thailand', 626: 'Timor-Leste', 795: 'Turkmenistan',
  784: 'United Arab Emirates', 860: 'Uzbekistan', 704: 'Vietnam', 887: 'Yemen',
  // Europe
  8: 'Albania', 40: 'Austria', 112: 'Belarus', 56: 'Belgium', 70: 'Bosnia & Herz.',
  100: 'Bulgaria', 191: 'Croatia', 203: 'Czechia', 208: 'Denmark',
  233: 'Estonia', 246: 'Finland', 250: 'France', 276: 'Germany', 300: 'Greece',
  348: 'Hungary', 352: 'Iceland', 372: 'Ireland', 380: 'Italy', 428: 'Latvia',
  440: 'Lithuania', 442: 'Luxembourg', 498: 'Moldova', 499: 'Montenegro',
  528: 'Netherlands', 578: 'Norway', 616: 'Poland', 620: 'Portugal',
  642: 'Romania', 643: 'Russia', 688: 'Serbia', 703: 'Slovakia', 705: 'Slovenia',
  724: 'Spain', 752: 'Sweden', 756: 'Switzerland', 804: 'Ukraine', 826: 'United Kingdom',
  // Oceania
  36: 'Australia', 242: 'Fiji', 554: 'New Zealand', 598: 'Papua New Guinea',
  // Other
  744: 'Svalbard',
};

// Large countries that get a label at 4x zoom (others appear at 10x)
export const BIG_COUNTRY_IDS = new Set([76, 156, 643, 840, 124, 356]);

// ISO alpha-2 codes for the same large countries (used to filter province data)
export const BIG_COUNTRY_ISO2 = new Set(['US', 'CN', 'RU', 'CA', 'BR', 'IN']);
