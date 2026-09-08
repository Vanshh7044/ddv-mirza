export interface SafariPackage {
  id: string;
  slug: string;
  category: 'evening' | 'short' | 'selfdrive' | 'vip';
  tier: string;
  title: string;
  tagline: string;
  price: number;
  originalPrice: number;
  duration: string;
  pickupInfo: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isPopular?: boolean;
  image: string;
  includes: string[];
  excludes?: string[];
  whatsAppText: string;
  detailPath: string;
}

export const WHATSAPP_NUMBER = '971556015834';

export const getWhatsAppLink = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const SAFARI_PACKAGES: SafariPackage[] = [
  // ─── EVENING PACKAGES (MAIN CONVERSION TIERS) ─────────────────────────────
  {
    id: 'evening-standard',
    slug: 'standard',
    category: 'evening',
    tier: '01',
    title: 'Evening Standard Safari',
    tagline: 'The complete classic desert evening with dune bashing & live BBQ show.',
    price: 79,
    originalPrice: 99,
    duration: '6–7 Hours',
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
    whatsAppText: 'Hi! I want to book the Evening Standard Safari (AED 79/person). Please confirm availability for my date.',
  },
  {
    id: 'evening-premium',
    slug: 'premium',
    category: 'evening',
    tier: '02',
    title: 'Evening Premium Safari',
    tagline: 'VIP reserved table, smaller group size, and quad bike included.',
    price: 119,
    originalPrice: 149,
    duration: '6–7 Hours',
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
    whatsAppText: 'Hi! I want to book the Evening Premium Safari (AED 119/person with Quad Bike & VIP Seating). Please confirm availability.',
  },
  {
    id: 'evening-vip',
    slug: 'vip',
    category: 'evening',
    tier: '03',
    title: 'Evening VIP Safari',
    tagline: 'Exclusive private Land Cruiser, private Majlis tent, and falconry session.',
    price: 299,
    originalPrice: 379,
    duration: '7 Hours',
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
    whatsAppText: 'Hi! I want to book the Evening VIP Safari (AED 299/person - Private 4x4 & VIP Majlis). Please share details for booking.',
  },

  // ─── SHORT & SUNRISE TOURS ────────────────────────────────────────────────
  {
    id: 'sunrise-safari',
    slug: 'sunrise',
    category: 'short',
    tier: '04',
    title: 'Sunrise Desert Safari',
    tagline: 'Chase the dawn golden light in a private 4×4 with gourmet desert breakfast.',
    price: 349,
    originalPrice: 420,
    duration: '4–5 Hours',
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
    whatsAppText: 'Hi! I would like to book the Sunrise Desert Safari (AED 349/vehicle). Please check availability for my date.',
  },
  {
    id: 'morning-safari',
    slug: 'morning',
    category: 'short',
    tier: '05',
    title: 'Morning Dune Bash & Sandboard',
    tagline: 'Quick 4-hour high-adrenaline morning desert safari.',
    price: 130,
    originalPrice: 160,
    duration: '4 Hours',
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
    whatsAppText: 'Hi! I want to book the Morning Safari (AED 130/person). Please confirm availability.',
  },

  // ─── SELF-DRIVE & PRIVATE EXPERIENCES ─────────────────────────────────────
  {
    id: 'self-drive-standard',
    slug: 'self-drive',
    category: 'selfdrive',
    tier: '06',
    title: 'Self-Drive Desert Safari',
    tagline: 'Drive your own 4×4 vehicle behind our expert guide convoy.',
    price: 35,
    originalPrice: 49,
    duration: '5–6 Hours',
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
    whatsAppText: 'Hi! I want to book the Self-Drive Safari (AED 35/person). Please send me the meeting point and timing.',
  },
  {
    id: 'private-camp-glamping',
    slug: 'private-camp',
    category: 'vip',
    tier: '07',
    title: 'Private Desert Camp Setup',
    tagline: 'Your private secluded dune with private chef, romantic lights & personal service.',
    price: 2299,
    originalPrice: 2800,
    duration: '6 Hours',
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
    whatsAppText: 'Hi! I am inquiring about the Private Desert Camp Setup (AED 2,299/group). Please provide details.',
  },
];
