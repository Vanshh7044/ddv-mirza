export type PackageCategory = 'evening' | 'short' | 'selfdrive' | 'vip' | 'city';
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
 * Last reviewed: Oct 2026 (fuel-cost adjustment, benchmarked against Dubai market rates).
 */
export const PRICES = {
  // Evening desert safaris (per person)
  eveningStandard: 89,
  eveningPremium: 139,
  eveningVip: 349,
  // Morning & short tours
  sunrise: 399, // per private vehicle, up to 6
  morning: 145, // per person
  eveningExpress: 399, // per private vehicle, up to 6
  // Self-drive convoy (per person)
  selfDrive: 39,
  selfDrivePremium: 69,
  selfDriveVip: 85,
  // VIP & private
  vipTraditional: 1099, // for 2 adults
  privateCamp: 2499, // per group up to 8
  // City tours & cruises (per person, shared)
  dubaiCityTour: 119,
  abuDhabiCityTour: 149,
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
    originalPrice: 119,
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
    tagline: 'VIP reserved table, smaller group size, and quad bike included.',
    price: PRICES.eveningPremium,
    originalPrice: 179,
    priceUnit: 'person',
    duration: '6–7 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Free Hotel Pickup & Drop-off (3:00 PM)',
    rating: 4.9,
    reviewsCount: 401,
    badge: 'MOST BOOKED',
    isPopular: true,
    image: '/images/quad-buggy.webp',
    detailPath: '/evening-safari/premium',
    includes: [
      'All Standard Inclusions + smaller group per 4x4 (max 6)',
      '15-Minute guided Quad Bike adventure included',
      'Reserved VIP camp table seating with table service',
      'Priority queue access for camel rides & activities',
      'Premium BBQ buffet with live grill stations',
      'Free souvenir photo with hunting falcon',
      'VIP lounge access with Arabian hospitality',
    ],
    whatsAppText: wa('Evening Premium Safari with Quad Bike & VIP Seating', PRICES.eveningPremium, 'person'),
  },
  {
    id: 'evening-vip',
    slug: 'vip',
    category: 'evening',
    tier: '03',
    title: 'Evening VIP Safari',
    tagline: 'Exclusive private Land Cruiser, private Majlis tent, and falconry session.',
    price: PRICES.eveningVip,
    originalPrice: 429,
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

  // ─── SHORT & SUNRISE TOURS ────────────────────────────────────────────────
  {
    id: 'sunrise-safari',
    slug: 'sunrise',
    category: 'short',
    tier: '04',
    title: 'Sunrise Desert Safari',
    tagline: 'Chase the dawn golden light in a private 4×4 with gourmet desert breakfast.',
    price: PRICES.sunrise,
    originalPrice: 499,
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
    tier: '05',
    title: 'Morning Dune Bash & Sandboard',
    tagline: 'Quick 4-hour high-adrenaline morning desert safari.',
    price: PRICES.morning,
    originalPrice: 179,
    priceUnit: 'person',
    duration: '4 Hours',
    location: 'Lehbab Red Dunes',
    pickupInfo: 'Pickup 08:00 AM · Return 12:00 PM',
    rating: 4.8,
    reviewsCount: 220,
    image: '/images/sandboarding.webp',
    detailPath: '/morning-safari',
    includes: [
      '4×4 Land Cruiser red dune bashing in Lehbab',
      'Dune sandboarding with instructor guidance',
      'Camel ride photo opportunity',
      'Chilled bottled water & refreshments',
      'Free hotel pickup and drop-off in Dubai',
    ],
    whatsAppText: wa('Morning Safari', PRICES.morning, 'person'),
  },

  // ─── SELF-DRIVE & PRIVATE EXPERIENCES ─────────────────────────────────────
  {
    id: 'self-drive-standard',
    slug: 'self-drive',
    category: 'selfdrive',
    tier: '06',
    title: 'Self-Drive Desert Safari',
    tagline: 'Drive your own 4×4 vehicle behind our expert guide convoy.',
    price: PRICES.selfDrive,
    originalPrice: 55,
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
    tier: '07',
    title: 'VIP Traditional Arabic Safari',
    tagline: 'Hands-on falcon training, private Majlis tent, and 5-course gourmet dinner.',
    price: PRICES.vipTraditional,
    originalPrice: 1299,
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
    tier: '08',
    title: 'Private Desert Camp Setup',
    tagline: 'Your private secluded dune with private chef, romantic lights & personal service.',
    price: PRICES.privateCamp,
    originalPrice: 2999,
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
    tier: '09',
    title: 'Dubai City Tour (Half Day)',
    tagline: 'Old Dubai souks, an abra ride across the Creek, Burj Al Arab, Palm Jumeirah & Burj Khalifa photo stops.',
    price: PRICES.dubaiCityTour,
    originalPrice: 155,
    priceUnit: 'person',
    duration: '4–5 Hours',
    location: 'Old & New Dubai',
    pickupInfo: 'Free Hotel Pickup (08:30 AM or 02:00 PM)',
    rating: 0,
    reviewsCount: 0, // new product — no reviews yet; ratings stay hidden until real ones exist
    badge: 'NEW',
    detailPath: '/tours/dubai-city-tour',
    includes: [
      'Air-conditioned vehicle with licensed English-speaking guide',
      'Al Fahidi historical district & Dubai Museum area walk',
      'Traditional abra boat ride across Dubai Creek',
      'Gold Souk & Spice Souk visit',
      'Jumeirah Mosque & Burj Al Arab photo stops',
      'Drive through Palm Jumeirah & Atlantis photo stop',
      'Burj Khalifa & Dubai Mall drop-off option',
    ],
    excludes: ['Attraction entry tickets (Burj Khalifa, Dubai Frame)', 'Lunch'],
    itinerary: [
      { time: 'Start', title: 'Hotel pickup', desc: 'Pickup from your Dubai hotel in an air-conditioned vehicle.' },
      { time: '+30 min', title: 'Al Fahidi & Dubai Creek', desc: 'Walk the old wind-tower lanes, then cross the Creek on a traditional abra.' },
      { time: '+1.5 h', title: 'Gold & Spice Souks', desc: 'Time to browse and shop in Deira’s historic markets.' },
      { time: '+2.5 h', title: 'Jumeirah & Burj Al Arab', desc: 'Photo stops at Jumeirah Mosque and the sail-shaped Burj Al Arab.' },
      { time: '+3.5 h', title: 'Palm Jumeirah & Atlantis', desc: 'Drive the Palm trunk to Atlantis, then back to your hotel or Dubai Mall.' },
    ],
    whatsAppText: wa('Dubai City Tour', PRICES.dubaiCityTour, 'person'),
  },
  {
    id: 'abu-dhabi-city-tour',
    slug: 'abu-dhabi-city-tour',
    category: 'city',
    tier: '10',
    title: 'Abu Dhabi City Tour from Dubai',
    tagline: 'Sheikh Zayed Grand Mosque, Emirates Palace, Corniche, Heritage Village & Ferrari World photo stop.',
    price: PRICES.abuDhabiCityTour,
    originalPrice: 189,
    priceUnit: 'person',
    duration: '8–9 Hours',
    location: 'Abu Dhabi',
    pickupInfo: 'Free Dubai Hotel Pickup (08:00 AM)',
    rating: 0,
    reviewsCount: 0, // new product — no reviews yet; ratings stay hidden until real ones exist
    badge: 'NEW',
    detailPath: '/tours/abu-dhabi-city-tour',
    includes: [
      'Round-trip transfer from Dubai in air-conditioned vehicle',
      'Licensed English-speaking guide',
      'Sheikh Zayed Grand Mosque visit (approx. 1 hour, free entry)',
      'Emirates Palace & Etihad Towers photo stops',
      'Abu Dhabi Corniche & Heritage Village',
      'Qasr Al Watan (outside) & Dates Market',
      'Yas Island drive with Ferrari World photo stop',
    ],
    excludes: ['Qasr Al Watan / Louvre / Ferrari World entry tickets', 'Lunch'],
    itinerary: [
      { time: '08:00', title: 'Pickup in Dubai', desc: 'Collected from your hotel; 90-minute drive along Sheikh Zayed Road.' },
      { time: '10:00', title: 'Sheikh Zayed Grand Mosque', desc: 'Guided visit of one of the world’s largest mosques. Modest dress required.' },
      { time: '11:30', title: 'Presidential Palace & Etihad Towers', desc: 'Photo stops at Abu Dhabi’s landmark buildings.' },
      { time: '12:30', title: 'Emirates Palace & Corniche', desc: 'Stroll the waterfront and the palace frontage.' },
      { time: '14:00', title: 'Heritage Village & Dates Market', desc: 'Traditional crafts and a taste of local dates.' },
      { time: '15:30', title: 'Yas Island', desc: 'Ferrari World photo stop, then return to Dubai by ~17:30.' },
    ],
    whatsAppText: wa('Abu Dhabi City Tour', PRICES.abuDhabiCityTour, 'person'),
  },
  {
    id: 'dhow-cruise-marina',
    slug: 'dhow-cruise-dubai-marina',
    category: 'city',
    tier: '11',
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
    tier: '12',
    title: 'Dubai City Tour + Evening Safari Combo',
    tagline: 'Morning city sightseeing, a rest at your hotel, then the full Evening Standard desert safari.',
    price: PRICES.cityTourSafariCombo,
    originalPrice: PRICES.dubaiCityTour + PRICES.eveningStandard,
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

export const EVENING_TIERS = SAFARI_PACKAGES.filter((p) => p.category === 'evening');
export const CITY_TOURS = SAFARI_PACKAGES.filter((p) => p.category === 'city');

/** Lowest per-person desert-safari price with hotel transfer — used in "from AED X" copy. */
export const FROM_PRICE = PRICES.eveningStandard;
