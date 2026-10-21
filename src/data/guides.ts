import { PRICES, aed } from './safariPackages';

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: 'Planning' | 'Desert Safari' | 'City Tours' | 'Prices';
  readMinutes: number;
  published: string;
  updated: string;
  image: string;
  /** 2–3 sentence direct answer shown first — this is what AI search engines quote. */
  answer: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Package ids from safariPackages.ts to recommend at the end. */
  related: string[];
}

/**
 * Guides / insights articles. Written to answer the questions travellers ask
 * search engines and AI assistants, then link to the matching package.
 * Prices are pulled from PRICES so articles never go stale.
 */
export const GUIDES: Guide[] = [
  {
    slug: 'desert-safari-dubai-price',
    title: 'How Much Does a Desert Safari in Dubai Cost? (2026 Price Guide)',
    description: `Dubai desert safari prices in 2026: shared evening safaris from ${aed(PRICES.eveningStandard)}, safari + quad bike combos from ${aed(PRICES.standardQuad)}, VIP from ${aed(PRICES.eveningVip)}. What is included at each price and how to avoid hidden fees.`,
    category: 'Prices',
    readMinutes: 5,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/land-cruiser-sunset.webp',
    answer: `A shared evening desert safari in Dubai costs roughly AED 99–150 per person in 2026, including hotel pickup, dune bashing, camel ride, BBQ dinner and live shows. Adding a 30-minute quad bike ride brings it to about AED 199–260, VIP evening safaris cost around AED 379 per person, and a private short tour in your own car is about AED 499 per vehicle. Booking directly with an operator is usually cheaper than booking through a resale platform.`,
    sections: [
      {
        heading: 'Typical desert safari prices in Dubai (2026)',
        paragraphs: [
          'Prices vary by operator, group size and what is included. These are the ranges you will see across the market, alongside our own direct rates:',
        ],
        table: {
          head: ['Safari type', 'Typical market price', 'Our direct rate'],
          rows: [
            ['Shared evening safari (BBQ + shows)', 'AED 99–150 / person', `${aed(PRICES.eveningStandard)} / person`],
            ['Premium evening safari', 'AED 139–249 / person', `${aed(PRICES.eveningPremium)} / person`],
            ['Evening safari + 30-min quad', 'AED 199–260 / person', `from ${aed(PRICES.standardQuad)} / person`],
            ['VIP evening safari', 'AED 349–450 / person', `${aed(PRICES.eveningVip)} / person`],
            ['Private morning safari (4–5 hrs)', 'AED 499–600 / vehicle', `${aed(PRICES.morning)} / vehicle`],
            ['Private sunrise safari', 'AED 600 / vehicle', `${aed(PRICES.sunrise)} / vehicle`],
            ['Self-drive convoy', 'AED 35+ / person', `${aed(PRICES.selfDrive)} / person`],
          ],
        },
      },
      {
        heading: 'What should be included in the price',
        bullets: [
          'Hotel pickup and drop-off in an air-conditioned 4×4',
          '30–45 minutes of dune bashing with a licensed driver',
          'Sunset photo stop, camel ride and sandboarding',
          'BBQ buffet dinner with vegetarian options',
          'Live Tanoura, belly dance and fire shows',
          'Soft drinks, water, Arabic coffee and dates',
        ],
      },
      {
        heading: 'Common extra charges to watch for',
        bullets: [
          'Quad bike or dune buggy rides (often AED 150–350 extra)',
          'Hotel pickup outside central Dubai, or a private-vehicle surcharge',
          'Peak-season surcharges around Christmas and New Year (commonly AED 25–50 per person across the market)',
          'Alcoholic drinks and shisha at shared camps',
          'Booking-platform service fees added at checkout',
        ],
      },
      {
        heading: 'How to get the best price',
        paragraphs: [
          'Book directly with the operator that owns the vehicles and camp. Resale platforms typically add a 25–35% commission. Ask what is included in writing, confirm the pickup time, and check whether you have to pay a deposit — with us you pay on the day, in cash or by card.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the cheapest desert safari in Dubai?',
        a: `A self-drive convoy, where you drive your own 4×4 behind a guide, is the cheapest option at around AED 35–40 per person. The cheapest option with hotel pickup is a shared evening safari, from ${aed(PRICES.eveningStandard)} per person.`,
      },
      {
        q: 'Do children pay full price for a desert safari?',
        a: 'Most operators charge reduced rates for children aged roughly 3–11, and infants are usually free. Message us with your children’s ages for an exact family quote.',
      },
      {
        q: 'Do I need to pay a deposit?',
        a: 'Not with us. You reserve on WhatsApp and pay the driver on the day of the tour. Cancellation is free up to 24 hours before pickup.',
      },
    ],
    related: ['evening-standard', 'evening-premium', 'evening-vip'],
  },
  {
    slug: 'best-time-for-desert-safari-dubai',
    title: 'Best Time for a Desert Safari in Dubai: Month, Day & Time of Day',
    description: 'The best months, days and time of day for a Dubai desert safari — weather by season, sunset times, and when to choose morning vs evening.',
    category: 'Planning',
    readMinutes: 4,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/camel-ride.webp',
    answer: 'The best time for a desert safari in Dubai is from October to April, when daytime temperatures are pleasant and desert evenings are cool. The evening safari, which starts mid-afternoon and runs through sunset into dinner, is the most popular choice all year. In the hot summer months (June–September), a sunrise or evening safari avoids the worst of the heat.',
    sections: [
      {
        heading: 'Best months',
        table: {
          head: ['Season', 'Months', 'What to expect'],
          rows: [
            ['Peak season', 'November – March', 'Warm days, cool evenings (bring a light jacket). Busiest and best weather.'],
            ['Shoulder season', 'October, April – May', 'Hot afternoons, comfortable evenings. Fewer crowds.'],
            ['Summer', 'June – September', 'Very hot (40°C+). Choose sunrise or evening tours only.'],
          ],
        },
      },
      {
        heading: 'Best time of day',
        bullets: [
          'Evening (pickup around 3 PM): dune bashing in the afternoon light, sunset photos, then BBQ dinner and shows at camp. Best all-round experience.',
          'Sunrise (pickup around 4:30 AM): cool air, empty dunes and soft light for photography. Back at your hotel by mid-morning.',
          'Morning (8 AM – 12 PM): pure adrenaline — dune bashing and sandboarding without the camp dinner. Good if your evenings are already planned.',
        ],
      },
      {
        heading: 'Best day of the week',
        paragraphs: [
          'Weekdays are slightly quieter at the camps than Friday and Saturday evenings. During public holidays and the Christmas–New Year period, book a few days ahead.',
        ],
      },
      {
        heading: 'Ramadan',
        paragraphs: [
          'Safaris run during Ramadan, but the evening programme can change — for example, some entertainment may be paused and dinner is served after sunset. Message us before booking during Ramadan and we will confirm exactly what is running on your date.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is it too hot for a desert safari in summer?',
        a: 'Afternoons in June–September are very hot, so choose an evening safari (most of the activity happens near and after sunset) or a sunrise safari. Vehicles are air-conditioned and water is provided.',
      },
      {
        q: 'How long does an evening desert safari take?',
        a: 'About 6–7 hours door to door: pickup around 3 PM and drop-off around 9:30 PM.',
      },
    ],
    related: ['evening-standard', 'sunrise-safari', 'morning-safari'],
  },
  {
    slug: 'what-to-wear-desert-safari',
    title: 'What to Wear on a Desert Safari in Dubai (Packing Checklist)',
    description: 'What to wear on a Dubai desert safari for men, women and kids — clothing, shoes, what to pack, and what to leave at the hotel.',
    category: 'Planning',
    readMinutes: 3,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/dune-jump.webp',
    answer: 'Wear light, comfortable and breathable clothing that covers your shoulders, with sandals or trainers you don’t mind getting sandy, plus sunglasses. From November to March, bring a light jacket or sweater because desert evenings get cool. Leave valuables and anything delicate at the hotel.',
    sections: [
      {
        heading: 'What to wear',
        bullets: [
          'Loose cotton or linen clothes — T-shirt and light trousers, or a modest dress',
          'Closed trainers or sturdy sandals (sand gets everywhere; flip-flops are fine for camp)',
          'Sunglasses and a cap or scarf for sun and blowing sand',
          'A light jacket or hoodie in winter (Nov–Mar) for the evening at camp',
        ],
      },
      {
        heading: 'What to bring',
        bullets: [
          'Phone or camera (a zip bag keeps sand out)',
          'Sunscreen and lip balm',
          'Some cash for extras such as photos or souvenirs',
          'Any personal medication, especially for motion sickness if you are sensitive to dune bashing',
        ],
      },
      {
        heading: 'What to avoid',
        bullets: [
          'White or very light clothing if you plan to sandboard',
          'Heels, expensive jewellery or anything you would hate to lose in the sand',
          'Very revealing outfits — the camp is a family environment and modest clothing is respectful',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I wear shorts on a desert safari?',
        a: 'Yes, knee-length shorts are fine. Light trousers are more comfortable for sandboarding and camel riding.',
      },
      {
        q: 'Do I need to cover my head?',
        a: 'No. A cap or scarf is useful for sun and sand, but there is no dress-code requirement at the desert camp.',
      },
    ],
    related: ['evening-standard', 'evening-premium'],
  },
  {
    slug: 'evening-vs-morning-desert-safari',
    title: 'Evening vs Morning Desert Safari in Dubai: Which Should You Book?',
    description: 'Evening vs morning vs sunrise desert safari in Dubai compared — timings, activities, dinner, price and who each one suits.',
    category: 'Desert Safari',
    readMinutes: 4,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/tanoura.webp',
    answer: 'Book an evening desert safari if you want the full experience: dune bashing, sunset, camel ride, BBQ dinner and live shows. Choose a morning safari for a shorter, adrenaline-focused trip without dinner, or a sunrise safari for quiet dunes, cooler air and the best photography light.',
    sections: [
      {
        heading: 'Side-by-side comparison',
        table: {
          head: ['', 'Evening', 'Morning', 'Sunrise'],
          rows: [
            ['Timing', '3 PM – 9:30 PM', '8 AM – 12 PM', '4:30 AM – 9:30 AM'],
            ['Dune bashing', 'Yes', 'Yes', 'Yes'],
            ['Sunset / sunrise', 'Sunset', '—', 'Sunrise'],
            ['Dinner & shows', 'BBQ + Tanoura, belly dance, fire show', 'No', 'Breakfast picnic'],
            ['Crowds', 'Busiest', 'Quiet', 'Quietest'],
            ['Our price', `from ${aed(PRICES.eveningStandard)} / person`, `${aed(PRICES.morning)} / private vehicle`, `${aed(PRICES.sunrise)} / private vehicle`],
          ],
        },
      },
      {
        heading: 'Who each safari suits',
        bullets: [
          'Evening — first-time visitors, families, couples, groups who want the full Arabian night',
          'Morning — travellers with evening plans, thrill-seekers, anyone short on time',
          'Sunrise — photographers, early risers, honeymooners and anyone visiting in summer',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I do a desert safari and a city tour on the same day?',
        a: `Yes. Take a morning city tour, rest at your hotel, then join the evening safari. Our City Tour + Evening Safari combo is ${aed(PRICES.cityTourSafariCombo)} per person.`,
      },
    ],
    related: ['evening-standard', 'morning-safari', 'sunrise-safari'],
  },
  {
    slug: 'desert-safari-with-kids',
    title: 'Desert Safari in Dubai with Kids: Is It Safe and Family-Friendly?',
    description: 'Planning a Dubai desert safari with children or toddlers? Safety, age guidance, gentler dune bashing, and the best family-friendly options.',
    category: 'Desert Safari',
    readMinutes: 4,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/camel-ride.webp',
    answer: 'Yes — a desert safari is one of the most family-friendly things to do in Dubai. Children love the camel ride, sandboarding and fire show. For babies, toddlers or anyone prone to motion sickness, ask for a gentle drive: the driver can skip the intense dune bashing and take a scenic route straight to camp.',
    sections: [
      {
        heading: 'What kids enjoy most',
        bullets: [
          'Camel rides and photos with a falcon',
          'Sandboarding down the dunes',
          'Henna, traditional costumes and the fire show',
          'A buffet with plenty of mild, child-friendly food',
        ],
      },
      {
        heading: 'Safety tips for families',
        bullets: [
          'Tell us your children’s ages when you book so the driver can plan the route',
          'Ask for gentle dune bashing — or none at all — for infants, toddlers and pregnant guests',
          'The evening safari timing (back around 9:30 PM) suits most kids better than a 4:30 AM sunrise pickup',
          'Bring a light jacket for children in winter; the desert cools quickly after sunset',
          'Quad bikes have minimum age and size rules — ask us before promising a ride',
        ],
      },
      {
        heading: 'Best options for families',
        paragraphs: [
          `The Evening Standard safari (${aed(PRICES.eveningStandard)} per person) covers everything most families want. For more space and a private vehicle that works around nap times, the private VIP option lets you set the pace.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Is dune bashing safe for toddlers?',
        a: 'We do not recommend intense dune bashing for babies and toddlers. Ask for a gentle scenic drive to camp instead — the rest of the safari is just as enjoyable.',
      },
      {
        q: 'Is there food for picky eaters?',
        a: 'Yes. The buffet includes rice, grilled chicken, bread, salads, fruit and vegetarian dishes alongside the BBQ.',
      },
    ],
    related: ['evening-standard', 'evening-vip'],
  },
  {
    slug: 'is-dune-bashing-safe',
    title: 'Is Dune Bashing Safe? What to Expect in a Dubai Desert Safari',
    description: 'Is dune bashing in Dubai safe? What it feels like, who should avoid it, how licensed drivers keep it safe, and gentler alternatives.',
    category: 'Desert Safari',
    readMinutes: 3,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/land-cruiser-sunset.webp',
    answer: 'Dune bashing is safe for most healthy adults and older children when it is done by a licensed operator with trained drivers and well-maintained 4×4s. It feels like a rollercoaster on sand. People who are pregnant, have back or neck problems, heart conditions or strong motion sickness should ask for a gentle scenic drive instead.',
    sections: [
      {
        heading: 'What dune bashing feels like',
        paragraphs: [
          'Your driver takes a 4×4 Land Cruiser up, along and down the high red dunes — sliding sideways, climbing ridges and dropping down steep faces. It typically lasts 30–45 minutes, with photo stops in between.',
        ],
      },
      {
        heading: 'How a licensed operator keeps it safe',
        bullets: [
          'Licensed operators and trained desert drivers',
          'Vehicles with roll cages, seatbelts for every passenger and regular servicing',
          'Driving in convoy so help is always nearby',
          'The driver adjusts intensity to the passengers — just ask to go gentler',
        ],
      },
      {
        heading: 'Who should skip it',
        bullets: [
          'Pregnant guests',
          'Anyone with back, neck or heart conditions, or recent surgery',
          'Babies and toddlers',
          'People with strong motion sickness (sit in the front and avoid a heavy meal before)',
        ],
        paragraphs: ['Everyone can still enjoy the camp, camel ride, dinner and shows — the driver simply takes a smooth route.'],
      },
    ],
    faqs: [
      {
        q: 'Will I get motion sickness during dune bashing?',
        a: 'Some people do. Sit in the front seat, look at the horizon, avoid a heavy lunch, and tell the driver if you want to slow down — they can stop at any time.',
      },
    ],
    related: ['evening-standard', 'evening-premium'],
  },
  {
    slug: 'sheikh-zayed-grand-mosque-dress-code',
    title: 'Sheikh Zayed Grand Mosque Dress Code & Visiting Tips (Abu Dhabi)',
    description: 'What to wear to the Sheikh Zayed Grand Mosque in Abu Dhabi, entry rules, timings tips and how to visit on a day tour from Dubai.',
    category: 'City Tours',
    readMinutes: 4,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/falcon-dunes.webp',
    answer: 'Visitors to the Sheikh Zayed Grand Mosque must wear loose, long clothing that covers the arms and legs to the ankles. Women must also cover their hair with a headscarf. Clothing must not be tight or see-through. Entry is free; check the official mosque website for current visiting hours and booking requirements before you go.',
    sections: [
      {
        heading: 'Dress code',
        bullets: [
          'Women: long, loose, non-transparent clothing covering arms and legs to the ankles, plus a headscarf covering the hair',
          'Men: long trousers and a shirt with sleeves; no shorts or sleeveless tops',
          'Shoes are removed before entering the prayer halls',
          'If in doubt, bring a long scarf or wrap — it solves most dress-code issues',
        ],
      },
      {
        heading: 'Visiting tips',
        bullets: [
          'Entry is free; visiting hours change on Fridays and during Ramadan, so check the official website for your date',
          'Late afternoon gives beautiful light on the white marble and reflecting pools',
          'Photography is welcome in most areas, but be respectful of worshippers',
          'Allow at least an hour inside',
        ],
      },
      {
        heading: 'Visiting from Dubai',
        paragraphs: [
          `The mosque is about a 90-minute drive from Dubai. Our private Abu Dhabi City Tour (${aed(PRICES.abuDhabiCityTour)} per car, up to 6 people) includes pickup from Dubai, Sharjah or Ajman, the Grand Mosque, Qasr Al Watan, Emirates Palace, the Corniche, Heritage Village and a Louvre Abu Dhabi photo stop.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there an entry fee for the Sheikh Zayed Grand Mosque?',
        a: 'No, entry is free for all visitors.',
      },
      {
        q: 'Can non-Muslims visit the Sheikh Zayed Grand Mosque?',
        a: 'Yes. The mosque welcomes visitors of all faiths outside prayer times, as long as they follow the dress code.',
      },
    ],
    related: ['abu-dhabi-city-tour', 'dubai-city-tour'],
  },
  {
    slug: 'one-day-in-dubai-itinerary',
    title: 'One Day in Dubai: City Tour + Desert Safari Itinerary',
    description: 'How to see Dubai in one day: old Dubai souks and abra ride in the morning, landmarks at midday, and a desert safari with BBQ dinner in the evening.',
    category: 'City Tours',
    readMinutes: 4,
    published: '2026-10-05',
    updated: '2026-10-05',
    image: '/images/real/sunset-dunes.webp',
    answer: 'With one day in Dubai, spend the morning in old Dubai (Al Fahidi, an abra ride across the Creek, the Gold and Spice Souks), see Jumeirah, Burj Al Arab and Palm Jumeirah around midday, rest at your hotel, then take an evening desert safari with sunset dune bashing, BBQ dinner and live shows.',
    sections: [
      {
        heading: 'Sample itinerary',
        table: {
          head: ['Time', 'What to do'],
          rows: [
            ['08:30', 'Hotel pickup for the city tour'],
            ['09:00', 'Al Fahidi historical district and abra ride across Dubai Creek'],
            ['10:00', 'Gold Souk and Spice Souk'],
            ['11:00', 'Jumeirah Mosque and Burj Al Arab photo stops'],
            ['12:00', 'Palm Jumeirah and Atlantis, then back to the hotel'],
            ['15:00', 'Desert safari pickup'],
            ['16:15', 'Dune bashing, sandboarding and sunset photos'],
            ['18:15', 'Camp: camel ride, henna, BBQ dinner and shows'],
            ['21:30', 'Drop-off at your hotel'],
          ],
        },
      },
      {
        heading: 'Tips',
        bullets: [
          'Burj Khalifa and Dubai Frame entry tickets are separate — book a timed slot if you want to go up',
          'Wear modest clothing for the souks and Jumeirah Mosque area',
          'Keep the afternoon free to rest; the safari is a long evening',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is one day enough to see Dubai?',
        a: 'One day covers the highlights — old Dubai, the main landmarks and the desert. With 3–4 days you can add Abu Dhabi, a dhow cruise and theme parks.',
      },
      {
        q: 'How much does a city tour and desert safari combo cost?',
        a: `Our City Tour + Evening Safari combo is ${aed(PRICES.cityTourSafariCombo)} per person including all hotel pickups. Groups of up to 6 can also book a private Dubai city tour at ${aed(PRICES.dubaiCityTour)} per car.`,
      },
    ],
    related: ['city-tour-safari-combo', 'dubai-city-tour', 'dhow-cruise-marina'],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
