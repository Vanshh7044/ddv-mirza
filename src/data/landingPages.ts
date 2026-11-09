/**
 * Google Ads landing pages (/go/:slug). Each one mirrors the wording of one ad group, so the
 * headline matches what the visitor searched for. Not indexed and not linked from the site.
 */
export interface LandingPage {
  slug: string;
  title: string;
  headline: string;
  subhead: string;
  bullets: string[];
  packageIds: string[];
  defaultWhen?: 'today' | 'tomorrow';
  defaultArea?: string;
}

const SAFARI_IDS = ['evening-standard', 'evening-premium', 'premium-quad'];

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'desert-safari',
    title: 'Dubai Desert Safari from AED 99',
    headline: 'Dubai Desert Safari from AED 99',
    subhead: 'Dune bashing, camel ride, BBQ dinner and live shows. Pick your date and we confirm on WhatsApp.',
    bullets: ['Free hotel pickup & drop-off', 'Pay on the day, no deposit', 'Free cancellation up to 24h'],
    packageIds: SAFARI_IDS,
  },
  {
    slug: 'desert-safari-today',
    title: 'Desert Safari Today in Dubai',
    headline: 'Desert Safari Today or Tomorrow',
    subhead: 'Pick your day and tell us your hotel. We check tonight’s seats and reply on WhatsApp.',
    bullets: ['Same-day seats subject to availability', 'Free hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: SAFARI_IDS,
    defaultWhen: 'today',
  },
  {
    slug: 'desert-safari-sharjah',
    title: 'Desert Safari from Sharjah',
    headline: 'Desert Safari from Sharjah',
    subhead: 'Picked up from Sharjah, dune bashing, BBQ dinner and shows, then dropped back after dinner.',
    bullets: ['Free pickup in selected Sharjah areas', 'Pay on the day, no deposit', 'Free cancellation up to 24h'],
    packageIds: SAFARI_IDS,
    defaultArea: 'Sharjah (selected areas)',
  },
  {
    slug: 'private-safari',
    title: 'Private Desert Safari Dubai, AED 549 per Car',
    headline: 'Private Desert Safari, AED 549 per Car',
    subhead: 'Your own Land Cruiser and driver, morning or evening. One price for the whole car, not per person.',
    bullets: ['No strangers in your car', 'Free hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: ['sunrise-safari', 'morning-safari', 'premium-private-car'],
  },
  {
    slug: 'family-safari',
    title: 'Family Desert Safari Dubai',
    headline: 'Family Desert Safari in Dubai',
    subhead: 'An easy evening for the whole family, or your own private car in the morning.',
    bullets: ['Kids under 3 free', 'Free hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: ['evening-standard', 'evening-premium', 'morning-safari'],
  },
  {
    slug: 'quad-safari',
    title: 'Desert Safari with Quad Bike Dubai',
    headline: 'Desert Safari with Quad Bike',
    subhead: 'A 30-minute guided quad ride, dune bashing, BBQ dinner and shows in one evening.',
    bullets: ['30-minute quad included', 'Free hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: ['premium-quad', 'standard-quad'],
  },
  {
    slug: 'grand-mosque-tour',
    title: 'Sheikh Zayed Grand Mosque Tour from Dubai',
    headline: 'Grand Mosque Tour from Dubai',
    subhead: 'Private car from your hotel to the Sheikh Zayed Grand Mosque and back. AED 850 per car.',
    bullets: ['Private car with driver', 'Hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: ['grand-mosque-tour'],
  },
  {
    slug: 'abu-dhabi-tour',
    title: 'Abu Dhabi Private Tour from Dubai',
    headline: 'Abu Dhabi Private Tour from Dubai',
    subhead: 'A full day with your own car and driver: Grand Mosque, Qasr Al Watan, Emirates Palace and the Corniche.',
    bullets: ['AED 950 for the whole car', 'Hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: ['abu-dhabi-city-tour'],
  },
  {
    slug: 'dubai-city-tour',
    title: 'Private Dubai City Tour',
    headline: 'Private Dubai City Tour, AED 650',
    subhead: 'Your own car and driver for Burj Khalifa, the Palm, Dubai Frame and the old souks.',
    bullets: ['AED 650 for the whole car', 'Hotel pickup & drop-off', 'Pay on the day, no deposit'],
    packageIds: ['dubai-city-tour'],
  },
];
