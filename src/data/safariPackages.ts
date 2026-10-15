export type PackageCategory = 'evening' | 'combo' | 'short' | 'selfdrive' | 'vip' | 'city';
export type PriceUnit = 'person' | 'vehicle' | 'group' | '2 adults';

export interface SafariPackage {
  id: string;
  slug: string;
  category: PackageCategory;
  tier: string;
  title: string;
  tagline: string;
  price: number;
  originalPrice: number;
  priceUnit: PriceUnit;
  duration: string;
  location: string;
  pickupInfo: string;
  /** 0 = no verified reviews yet; UI and schema hide ratings in that case. */
  rating: number;
  reviewsCount: number;
  badge?: string;
  isPopular?: boolean;
  /** Photo path. City tours without a real photo yet render an illustrated card instead. */
  image?: string;
  /** Full promotional poster, shown uncropped on the detail page. */
  poster?: string;
  includes: string[];
  excludes?: string[];
  itinerary?: { time: string; title: string; desc: string }[];
  whatsAppText: string;
  detailPath: string;
}

export const WHATSAPP_NUMBER = '971556015834';

export const getWhatsAppLink = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Single source of truth for every price on the site.
 * Change a number here and it flows into cards, menus, SEO titles, schema and WhatsApp messages.
 * Last reviewed: Oct 2026 — aligned with the Dubai Desert Ventures package line-up.
 */
export const PRICES = {
  // Evening desert safaris (per person)
  eveningStandard: 99,
  eveningPremium: 139,
  eveningVip: 379,
  // Safari + 30-min quad combos (per person)
  standardQuad: 199,
  premiumQuad: 229,
  // Private short tours (per vehicle, up to 6)
  sunrise: 499,
  morning: 499,
  eveningExpress: 499,
  // Self-drive convoy (per person)
  selfDrive: 35,
  selfDrivePremium: 60,
  selfDriveVip: 75,
  // VIP & private
  vipTraditional: 999, // for 2 adults
  privateCamp: 2299, // per group up to 8
  // City tours & cruises
  dubaiCityTour: 550, // per private car, up to 6
  abuDhabiCityTour: 850, // per private car, up to 6
  dhowCruise: 139,
  cityTourSafariCombo: 189,
} as const;

/** "AED 1,099" — en-US grouping so server and client render identical strings. */
export const aed = (n: number) => `AED ${n.toLocaleString('en-US')}`;

export const UNIT_LABEL: Record<PriceUnit, string> = {
  person: '/ person',
  vehicle: '/ vehicle',
  group: '/ group',
  '2 adults': '/ 2 adults',
};

const wa = (title: string, price: number, unit: PriceUnit, extra = 'Please confirm availability for my date.') =>
  `Hi! I want to book the ${title} (${aed(price)}${UNIT_LABEL[unit].replace(' ', '')}). ${extra}`;

export const SAFARI_PACKAGES: SafariPackage[] = [
  // ─── EVENING PACKAGES (MAIN CONVERSION TIERS) ─────────────────────────────
  {
    id: 'evening-standard',
    slug: 'standard',
    category: 'evening',
    tier: '01',
    title: 'Evening Standard Safari',
    tagline: 'The complete classic desert evening with dune bashing & live BBQ show.',
    price: PRICES.eveningStandard,
    originalPrice: 129,
    priceUnit: 'person',
    duration: '6–7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Free Hotel Pickup & Drop-off (3:00 PM)',
    rating: 4.9,
    reviewsCount: 401,
    image: '/images/dune-bashing.webp',
    detailPath: '/evening-safari/standard',
    includes: [
      '4×4 Land Cruiser red dune bashing (35 mins)',
      'Golden hour sunset photo stop on high dunes',
      'Camel ride & sandboarding experience',
      'Full BBQ buffet dinner (Veg & Non-Veg)',
      'Live Tanoura, Fire dance & Belly dance shows',
      'Arabic coffee (Gahwa), fresh dates & henna tattoo',
      'Unlimited soft drinks, tea & mineral water',
    ],
    whatsAppText: wa('Evening Standard Safari', PRICES.eveningStandard, 'person'),
  },
  {
    id: 'evening-premium',
    slug: 'premium',
    category: 'evening',
    tier: '02',
    title: 'Evening Premium Safari',
    tagline: 'Extended dune bashing, priority majlis seating and a premium live-grill BBQ.',
    price: PRICES.eveningPremium,
    originalPrice: 179,
    priceUnit: 'person',
    duration: '6–7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Free Hotel Pickup & Drop-off (3:00 PM)',
    rating: 4.9,
    reviewsCount: 401,
    badge: 'POPULAR',
    image: '/images/bbq-buffet.webp',
    detailPath: '/evening-safari/premium',
    includes: [
      'All Standard Inclusions + smaller group per 4x4 (max 6)',
      'Extended dune bashing with extra photo stops',
      'Priority majlis seating with table service',
      'Priority queue access for camel rides & activities',
      'Premium BBQ buffet with live grill stations',
      'Free souvenir photo with hunting falcon',
      'VIP lounge access with Arabian hospitality',
    ],
    whatsAppText: wa('Evening Premium Safari', PRICES.eveningPremium, 'person'),
  },
  {
    id: 'evening-vip',
    slug: 'vip',
    category: 'evening',
    tier: '03',
    title: 'Evening VIP Safari',
    tagline: 'Exclusive private Land Cruiser, private Majlis tent, and falconry session.',
    price: PRICES.eveningVip,
    originalPrice: 469,
    priceUnit: 'person',
    duration: '7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Private Chauffeur Pickup & Drop-off (Any Time)',
    rating: 5.0,
    reviewsCount: 401,
    badge: 'VIP LUXURY',
    image: '/images/vip-majlis.webp',
    detailPath: '/evening-safari/vip',
    includes: [
      'Private 4×4 Land Cruiser for your party only',
      'Hands-on falconry training session with master falconer',
      'Dedicated air-conditioned VIP Majlis tent with personal butler',
      '5-Course gourmet table-service dinner with fresh grill',
      'Extended high-adrenaline dune bashing with photo stops',
      'Premium shisha service at your private majlis',
      'Private transfers & customized pickup schedule',
    ],
    whatsAppText: wa('Evening VIP Safari with Private 4x4 & VIP Majlis', PRICES.eveningVip, 'person', 'Please share details for booking.'),
  },

  // ─── SAFARI + QUAD COMBOS ─────────────────────────────────────────────────
  {
    id: 'standard-quad',
    slug: 'standard-quad',
    category: 'combo',
    tier: '04',
    title: 'Standard Safari + 30-min Quad',
    tagline: 'The full Evening Standard safari plus a 30-minute guided quad bike ride on the dunes.',
    price: PRICES.standardQuad,
    originalPrice: 249,
    priceUnit: 'person',
    duration: '6–7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Free Hotel Pickup & Drop-off (3:00 PM)',
    rating: 4.9,
    reviewsCount: 401,
    image: '/images/quad-buggy.webp',
    detailPath: '/evening-safari/standard-quad',
    includes: [
      'Everything in the Evening Standard Safari',
      '30-minute guided quad bike ride',
      'Helmet, goggles & safety briefing',
      '4×4 dune bashing, camel ride & sandboarding',
      'BBQ buffet dinner with live shows',
      'Free hotel pickup & drop-off',
    ],
    whatsAppText: wa('Standard Safari + 30-min Quad', PRICES.standardQuad, 'person'),
  },
  {
    id: 'premium-quad',
    slug: 'premium-quad',
    category: 'combo',
    tier: '05',
    title: 'Premium Safari + 30-min Quad',
    tagline: 'Our most-booked tier: Evening Premium safari with priority seating plus a 30-minute quad ride.',
    price: PRICES.premiumQuad,
    originalPrice: 289,
    priceUnit: 'person',
    duration: '6–7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Free Hotel Pickup & Drop-off (3:00 PM)',
    rating: 4.9,
    reviewsCount: 401,
    badge: 'MOST BOOKED',
    isPopular: true,
    image: '/images/quad-buggy.webp',
    detailPath: '/evening-safari/premium-quad',
    includes: [
      'Everything in the Evening Premium Safari',
      '30-minute guided quad bike ride',
      'Priority majlis seating with table service',
      'Premium BBQ with live grill stations',
      'Helmet, goggles & safety briefing',
      'Free hotel pickup & drop-off',
    ],
    whatsAppText: wa('Premium Safari + 30-min Quad', PRICES.premiumQuad, 'person'),
  },

  // ─── SHORT & SUNRISE TOURS ────────────────────────────────────────────────
  {
    id: 'sunrise-safari',
    slug: 'sunrise',
    category: 'short',
    tier: '06',
    title: 'Sunrise Desert Safari',
    tagline: 'Chase the dawn golden light in a private 4×4 with gourmet desert breakfast.',
    price: PRICES.sunrise,
    originalPrice: 599,
    priceUnit: 'vehicle',
    duration: '4–5 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Private Pickup at 04:30 AM',
    rating: 4.9,
    reviewsCount: 180,
    badge: 'EARLY BIRD',
    image: '/images/camel-sunset.webp',
    detailPath: '/morning-safari',
    includes: [
      'Private Land Cruiser & professional licensed driver',
      'Stunning sunrise view over untouched red dunes',
      'Sunrise dune bashing & sandboarding',
      'Arabic breakfast picnic with hot tea & coffee',
      'Scenic photography stops with zero crowds',
      'Back to hotel by 09:30 AM before Dubai heat',
    ],
    whatsAppText: wa('Sunrise Desert Safari', PRICES.sunrise, 'vehicle'),
  },
  {
    id: 'morning-safari',
    slug: 'morning',
    category: 'short',
    tier: '07',
    title: 'Morning Dune Bash & Sandboard',
    tagline: 'Private 4-hour high-adrenaline morning safari in your own Land Cruiser.',
    price: PRICES.morning,
    originalPrice: 599,
    priceUnit: 'vehicle',
    duration: '4–5 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Pickup 08:00 AM · Return 12:00 PM',
    rating: 4.8,
    reviewsCount: 220,
    image: '/images/sandboarding.webp',
    detailPath: '/morning-safari',
    includes: [
      'Private 4×4 Land Cruiser for up to 6 guests',
      'Red dune bashing in Lehbab & sandboarding',
      'Camel ride photo opportunity',
      'Chilled bottled water & refreshments',
      'Free hotel pickup and drop-off in Dubai',
    ],
    whatsAppText: wa('Private Morning Safari', PRICES.morning, 'vehicle'),
  },

  // ─── SELF-DRIVE & PRIVATE EXPERIENCES ─────────────────────────────────────
  {
    id: 'self-drive-standard',
    slug: 'self-drive',
    category: 'selfdrive',
    tier: '08',
    title: 'Self-Drive Desert Safari',
    tagline: 'Drive your own 4×4 vehicle behind our expert guide convoy.',
    price: PRICES.selfDrive,
    originalPrice: 49,
    priceUnit: 'person',
    duration: '5–6 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Meet at Lehbab Desert Base',
    rating: 4.9,
    reviewsCount: 165,
    badge: 'BEST BUDGET',
    image: '/images/dune-bashing.webp',
    detailPath: '/self-drive',
    includes: [
      'Lead convoy guide with satellite radio connection',
      'Full desert dune navigation track access',
      'Camp entry with live shows & entertainment',
      'Camel ride & sandboarding equipment',
      'BBQ dinner buffet included',
    ],
    whatsAppText: wa('Self-Drive Safari', PRICES.selfDrive, 'person', 'Please send me the meeting point and timing.'),
  },
  {
    id: 'vip-traditional',
    slug: 'vip-traditional',
    category: 'vip',
    tier: '09',
    title: 'VIP Traditional Arabic Safari',
    tagline: 'Hands-on falcon training, private Majlis tent, and 5-course gourmet dinner.',
    price: PRICES.vipTraditional,
    originalPrice: 1199,
    priceUnit: '2 adults',
    duration: '7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Private Land Cruiser Pickup',
    rating: 5.0,
    reviewsCount: 120,
    badge: 'POPULAR VIP',
    image: '/images/falcon-portrait.webp',
    detailPath: '/vip-traditional-arabic',
    includes: [
      'Private Land Cruiser for your party only',
      'Hands-on falcon training session',
      'Private air-conditioned Majlis tent',
      '5-Course Arabic table-service dinner',
      'Tanoura, belly dance & fire shows',
      'Henna art & shisha lounge included',
    ],
    whatsAppText: wa('VIP Traditional Arabic Safari', PRICES.vipTraditional, '2 adults'),
  },
  {
    id: 'private-camp-glamping',
    slug: 'private-camp',
    category: 'vip',
    tier: '10',
    title: 'Private Desert Camp Setup',
    tagline: 'Your private secluded dune with private chef, romantic lights & personal service.',
    price: PRICES.privateCamp,
    originalPrice: 2799,
    priceUnit: 'group',
    duration: '6 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Luxury Chauffeur Service',
    rating: 5.0,
    reviewsCount: 95,
    badge: 'EXCLUSIVE',
    image: '/images/private-camp.webp',
    detailPath: '/private-desert-setup',
    includes: [
      '100% Private camp setup on isolated red dune (No other guests)',
      'Dedicated private chef with custom 5-course menu',
      'Romantic fairy light canopy, Moroccan rugs & boho majlis',
      'Private luxury Land Cruiser with dedicated driver',
      'Telescope for stargazing & private sound system',
      'Ideal for proposals, anniversaries & intimate celebrations',
    ],
    whatsAppText: wa('Private Desert Camp Setup', PRICES.privateCamp, 'group', 'Please provide details.'),
  },

  // ─── CITY TOURS & CRUISES ─────────────────────────────────────────────────
  {
    id: 'dubai-city-tour',
    slug: 'dubai-city-tour',
    category: 'city',
    tier: '11',
    title: 'Dubai City Tour (Private Car)',
    tagline: 'Private car with driver for up to 6: Burj Khalifa, Dubai Marina, Burj Al Arab, Palm Jumeirah, Atlantis, Museum of the Future, Dubai Frame and the old souks.',
    price: PRICES.dubaiCityTour,
    originalPrice: PRICES.dubaiCityTour,
    priceUnit: 'vehicle',
    duration: '4–5 Hours',
    location: 'Old & New Dubai',
    pickupInfo: 'Hotel Pickup & Drop-off (Dubai / Sharjah / Ajman)',
    rating: 0,
    reviewsCount: 0, // new product — no reviews yet; ratings stay hidden until real ones exist
    badge: 'PRIVATE CAR',
    image: '/images/dubai-city-tour-poster.webp',
    poster: '/images/dubai-city-tour-poster.webp',
    detailPath: '/tours/dubai-city-tour',
    includes: [
      'Private car with professional driver (up to 6 people)',
      'Hotel pickup & drop-off in Dubai, Sharjah or Ajman',
      'Burj Khalifa, Dubai Marina & Burj Al Arab photo stops',
      'The Palm Jumeirah & Atlantis The Palm photo stops',
      'Museum of the Future & Dubai Frame photo stops',
      'Al Fahidi Historical District',
      'Gold Souk & Spice Souk shopping',
      'Water on board · flexible itinerary',
    ],
    excludes: ['Attraction entry tickets (e.g. Burj Khalifa, Dubai Frame, Museum of the Future)', 'Meals'],
    whatsAppText: wa('Private Dubai City Tour', PRICES.dubaiCityTour, 'vehicle'),
  },
  {
    id: 'abu-dhabi-city-tour',
    slug: 'abu-dhabi-city-tour',
    category: 'city',
    tier: '12',
    title: 'Abu Dhabi City Tour (Private Car)',
    tagline: 'Private car with driver for up to 6: Sheikh Zayed Grand Mosque, Qasr Al Watan, Emirates Palace, Etihad Towers, Corniche, Heritage Village and Louvre Abu Dhabi.',
    price: PRICES.abuDhabiCityTour,
    originalPrice: PRICES.abuDhabiCityTour,
    priceUnit: 'vehicle',
    duration: 'Full Day',
    location: 'Abu Dhabi',
    pickupInfo: 'Hotel Pickup & Drop-off (Dubai / Sharjah / Ajman)',
    rating: 0,
    reviewsCount: 0, // new product — no reviews yet; ratings stay hidden until real ones exist
    badge: 'PRIVATE CAR',
    image: '/images/abu-dhabi-city-tour-poster.webp',
    poster: '/images/abu-dhabi-city-tour-poster.webp',
    detailPath: '/tours/abu-dhabi-city-tour',
    includes: [
      'Private car with professional driver (up to 6 people)',
      'Pickup & drop-off in Dubai, Sharjah or Ajman',
      'Sheikh Zayed Grand Mosque',
      'Qasr Al Watan visit',
      'Emirates Palace & Etihad Towers photo stops',
      'Abu Dhabi Corniche drive',
      'Heritage Village (culture & history) & Dates Market',
      'Louvre Abu Dhabi photo stop',
      'Water on board · flexible itinerary',
    ],
    excludes: ['Attraction entry tickets (e.g. Qasr Al Watan, Louvre Abu Dhabi) unless stated', 'Meals'],
    whatsAppText: wa('Private Abu Dhabi City Tour', PRICES.abuDhabiCityTour, 'vehicle'),
  },
  {
    id: 'dhow-cruise-marina',
    slug: 'dhow-cruise-dubai-marina',
    category: 'city',
    tier: '13',
    title: 'Dubai Marina Dhow Cruise Dinner',
    tagline: '2-hour cruise past the Marina skyline with international buffet, Tanoura show and hotel transfers.',
    price: PRICES.dhowCruise,
    originalPrice: 179,
    priceUnit: 'person',
    duration: '2 Hours (+ transfers)',
    location: 'Dubai Marina',
    pickupInfo: 'Free Hotel Pickup (07:00 PM)',
    rating: 0,
    reviewsCount: 0, // new product — no reviews yet; ratings stay hidden until real ones exist
    badge: 'NEW',
    detailPath: '/tours/dhow-cruise-dubai-marina',
    includes: [
      'Round-trip hotel transfers',
      '2-hour cruise along Dubai Marina & JBR',
      'International buffet dinner (Veg & Non-Veg)',
      'Live Tanoura dance show & music',
      'Welcome drink, soft drinks, tea & water',
      'Open upper deck for skyline photos',
    ],
    excludes: ['Alcoholic beverages'],
    whatsAppText: wa('Dubai Marina Dhow Cruise Dinner', PRICES.dhowCruise, 'person'),
  },
  {
    id: 'city-tour-safari-combo',
    slug: 'dubai-city-tour-desert-safari-combo',
    category: 'city',
    tier: '14',
    title: 'Dubai City Tour + Evening Safari Combo',
    tagline: 'Morning city sightseeing, a rest at your hotel, then the full Evening Standard desert safari.',
    price: PRICES.cityTourSafariCombo,
    originalPrice: 239,
    priceUnit: 'person',
    duration: 'Full Day',
    location: 'Dubai + Lehbab Dunes',
    pickupInfo: 'Free Hotel Pickup (08:30 AM & 03:00 PM)',
    rating: 0,
    reviewsCount: 0, // new product — no reviews yet; ratings stay hidden until real ones exist
    badge: 'BEST VALUE',
    image: '/images/camel-sunset.webp',
    detailPath: '/tours/dubai-city-tour-desert-safari-combo',
    includes: [
      'Half-day Dubai City Tour with guide & abra ride',
      'Hotel break between tours',
      'Evening desert safari with 4×4 dune bashing',
      'Camel ride, sandboarding & sunset photo stop',
      'BBQ buffet dinner with live shows',
      'All hotel pickups & drop-offs included',
    ],
    whatsAppText: wa('Dubai City Tour + Evening Safari Combo', PRICES.cityTourSafariCombo, 'person'),
  },
];

export const getPackage = (id: string) => SAFARI_PACKAGES.find((p) => p.id === id)!;

export const EVENING_TIERS = SAFARI_PACKAGES.filter((p) => p.category === 'evening' || p.category === 'combo');
export const CITY_TOURS = SAFARI_PACKAGES.filter((p) => p.category === 'city');

/** Lowest per-person desert-safari price with hotel transfer — used in "from AED X" copy. */
export const FROM_PRICE = PRICES.eveningStandard;
