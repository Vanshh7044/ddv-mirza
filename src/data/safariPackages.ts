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
  /** One clear line on what the price covers (per person vs per car, shared vs private). */
  priceNote?: string;
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
  eveningVip: 299,
  eveningVipPrivate: 1299, // private Land Cruiser for the group, up to 6
  // Safari + 30-min quad combos (per person)
  standardQuad: 199,
  premiumQuad: 280,
  // Private short tours (per vehicle, up to 6)
  sunrise: 549,
  morning: 549,
  eveningExpress: 549,
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

/** Free pickup & drop-off zones (no extra charge). Anywhere else is quoted on WhatsApp. */
export const FREE_PICKUP_AREAS = [
  'Dubai Marina', 'JBR', 'Downtown', 'Business Bay', 'Bur Dubai', 'Deira', 'Jumeirah',
  'Palm Jumeirah', 'Al Barsha', 'DIFC', 'DIP / Jebel Ali', 'Sharjah (selected areas)',
];
export const PICKUP_OTHER_AREAS = 'Ajman, Abu Dhabi and other areas: ask us on WhatsApp before booking.';
export const TIMING_NOTE = 'Desert times follow sunset, so they move about 30 minutes earlier in winter. Your driver confirms the exact pickup time on WhatsApp the day before.';

const EVENING_ITINERARY = [
  { time: '3:00–3:30 PM', title: 'Hotel pickup', desc: 'Land Cruiser pickup from your hotel or home (time depends on your area).' },
  { time: '4:30 PM', title: 'Dune bashing', desc: '30–40 minutes of red dune bashing in Lehbab.' },
  { time: '5:30 PM', title: 'Sunset & sandboarding', desc: 'Sunset photos on a high dune, sandboarding and camel ride.' },
  { time: '6:30 PM', title: 'Desert camp', desc: 'Arabic coffee & dates, henna, falcon photos and camp activities.' },
  { time: '7:30 PM', title: 'BBQ dinner & live shows', desc: 'BBQ buffet dinner with tanoura, belly dance and fire shows.' },
  { time: '9:30 PM', title: 'Back at your hotel', desc: 'Drop-off at your hotel or home.' },
];

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
    pickupInfo: 'Pickup 3:00–3:30 PM · Back ~9:30 PM',
    itinerary: EVENING_ITINERARY,
    priceNote: 'Price per person, shared Land Cruiser. Kids under 3 free.',
    rating: 4.9,
    reviewsCount: 401,
    image: '/images/real/land-cruiser-sunset.webp',
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
    pickupInfo: 'Pickup 3:00–3:30 PM · Back ~9:30 PM',
    itinerary: EVENING_ITINERARY,
    priceNote: 'Price per person, shared Land Cruiser. Kids under 3 free.',
    rating: 4.9,
    reviewsCount: 401,
    badge: 'POPULAR',
    image: '/images/real/land-cruiser-peace.webp',
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
    tagline: 'VIP seating, falcon & Arabic dress photos, extended dune bashing and every show twice.',
    price: PRICES.eveningVip,
    originalPrice: 379,
    priceUnit: 'person',
    duration: '7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Pickup 2:30–3:30 PM · Back ~9:45 PM',
    priceNote: `AED 299 per person in a shared Land Cruiser. Want the car to yourselves? Private 4×4 for up to 6: ${aed(PRICES.eveningVipPrivate)} per car.`,
    itinerary: [
      { time: '2:30–3:30 PM', title: 'Hotel pickup', desc: 'Land Cruiser pickup (time depends on your area).' },
      { time: '3:45 PM', title: 'Extended dune bashing', desc: 'Longer dune bashing session in the Lehbab red dunes.' },
      { time: '4:30 PM', title: 'Sandboarding & sunset', desc: 'Unlimited sandboarding runs and sunset photos on a high dune.' },
      { time: '5:30 PM', title: 'VIP welcome at camp', desc: 'VIP seating, Arabic coffee, dates and welcome snacks.' },
      { time: '5:45 PM', title: 'Camel, falcon & henna', desc: 'Long camel ride, falcon and Arabic dress photos, henna for ladies.' },
      { time: '6:30 PM', title: 'Dinner with live grill', desc: 'BBQ dinner with a live grill station.' },
      { time: '7:30 PM', title: 'Live shows (twice each)', desc: 'Tanoura, belly dance and fire show, each performed twice.' },
      { time: '9:00 PM', title: 'Drive back', desc: 'Back at your hotel around 9:45 PM.' },
    ],
    rating: 5.0,
    reviewsCount: 401,
    badge: 'VIP LUXURY',
    image: '/images/real/falcon-dunes.webp',
    detailPath: '/evening-safari/vip',
    includes: [
      'Hotel pickup & drop-off in a Land Cruiser (shared)',
      'Extended dune bashing & unlimited sandboarding',
      'Sunset photo stop on a high dune',
      'VIP chair seating at the camp',
      'Falcon photo & Arabic dress for photos',
      'Long camel ride & henna for ladies',
      'Welcome snacks & unlimited soft drinks',
      'BBQ dinner with live grill',
      'Tanoura, belly dance & fire shows (each twice)',
    ],
    whatsAppText: wa('Evening VIP Safari', PRICES.eveningVip, 'person'),
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
    pickupInfo: 'Pickup 3:00–3:30 PM · Back ~9:30 PM',
    itinerary: EVENING_ITINERARY,
    priceNote: 'Price per person, shared Land Cruiser. Kids under 3 free.',
    rating: 4.9,
    reviewsCount: 401,
    image: '/images/real/quad-bike.webp',
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
    originalPrice: PRICES.premiumQuad,
    priceUnit: 'person',
    duration: '6–7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Pickup 3:00–3:30 PM · Back ~9:30 PM',
    itinerary: EVENING_ITINERARY,
    priceNote: 'Price per person, shared Land Cruiser. Kids under 3 free.',
    rating: 4.9,
    reviewsCount: 401,
    badge: 'MOST BOOKED',
    isPopular: true,
    image: '/images/real/quad-bike.webp',
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
    tagline: 'Private 4×4 at dawn: sunrise on empty red dunes, Arabic coffee, camel ride and dune bashing.',
    price: PRICES.sunrise,
    originalPrice: PRICES.sunrise,
    priceUnit: 'vehicle',
    duration: '4–5 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Pickup ~4:30 AM (later in winter) · Back ~8:30 AM',
    priceNote: 'One price for the whole car (up to 6 guests), not per person. Kids under 3 free.',
    itinerary: [
      { time: '4:30 AM', title: 'Hotel pickup', desc: 'Private 4×4 pickup, timed so you reach the dunes before first light.' },
      { time: '5:15 AM', title: 'Sunrise on the dunes', desc: '20–30 minute sunrise photo session.' },
      { time: '5:45 AM', title: 'Coffee, dates & camel ride', desc: 'Arabic coffee and dates, then a short camel ride.' },
      { time: '6:15 AM', title: 'Dune bashing', desc: '45–60 minutes of dune bashing.' },
      { time: '7:15 AM', title: 'Sandboarding & free time', desc: 'Sandboarding, photos and optional quad or buggy (extra).' },
      { time: '8:30 AM', title: 'Back at your hotel', desc: 'Drop-off at your hotel or home.' },
    ],
    rating: 4.9,
    reviewsCount: 180,
    badge: 'EARLY BIRD',
    image: '/images/real/camel-ride.webp',
    detailPath: '/morning-safari',
    includes: [
      'Private Land Cruiser & professional licensed driver',
      'Stunning sunrise view over untouched red dunes',
      'Sunrise dune bashing & sandboarding',
      'Arabic coffee, dates & a short camel ride',
      'Scenic photography stops with zero crowds',
      'Back at your hotel around 8:30 AM, before the heat',
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
    originalPrice: PRICES.morning,
    priceUnit: 'vehicle',
    duration: '4–5 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Pickup 8:00 AM · Back ~12:00 PM',
    priceNote: 'One price for the whole car (up to 6 guests), not per person. Kids under 3 free.',
    itinerary: [
      { time: '8:00 AM', title: 'Hotel pickup', desc: 'Private 4×4 pickup from your hotel or home.' },
      { time: '9:00 AM', title: 'Dune bashing', desc: '45–60 minutes in the Lehbab red dunes.' },
      { time: '10:00 AM', title: 'Sandboarding', desc: 'Sandboarding on the high dunes.' },
      { time: '10:30 AM', title: 'Photo stop & camel ride', desc: 'Arabic coffee, dates, photos and a short camel ride.' },
      { time: '11:10 AM', title: 'Free time', desc: 'Optional quad, buggy or falcon photo (extra).' },
      { time: '12:00 PM', title: 'Back at your hotel', desc: 'Drop-off at your hotel or home.' },
    ],
    rating: 4.8,
    reviewsCount: 220,
    image: '/images/real/dune-jump.webp',
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
    image: '/images/real/land-cruiser-sunset.webp',
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
    image: '/images/real/falcon-sunset.webp',
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
    image: '/images/real/sunset-couple.webp',
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
    image: '/images/real/golden-hour-sand.webp',
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
