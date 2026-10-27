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
    answer: `A shared evening desert safari in Dubai costs roughly AED 99–150 per person in 2026, including hotel pickup, dune bashing, camel ride, BBQ dinner and live shows. Adding a 30-minute quad bike ride brings it to about AED 199–260, VIP evening safaris cost around AED 299 per person, and a private short tour in your own car is about AED 549 per vehicle. Booking directly with an operator is usually cheaper than booking through a resale platform.`,
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
            ['Private morning safari (4–5 hrs)', 'AED 549–650 / vehicle', `${aed(PRICES.morning)} / vehicle`],
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
  {
    slug: 'desert-safari-season-dubai',
    title: 'Desert Safari Season in Dubai: Month-by-Month Guide (2026–27)',
    description: 'When is desert safari season in Dubai? Month-by-month weather, crowds and which tour to book, plus whether desert safaris run in summer.',
    category: 'Planning',
    readMinutes: 4,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/sunset-dunes.webp',
    answer: 'Desert safaris in Dubai run all year, but the main season is October to April, with the peak from November to March when days are warm and desert evenings are cool. In summer (June to September) safaris still operate, but the afternoon heat makes sunrise and evening tours the best choice. December, especially Christmas and New Year, is the busiest time, so book a few days ahead.',
    sections: [
      {
        heading: 'Month-by-month: weather and crowds',
        table: {
          head: ['Month', 'Typical daytime high', 'Crowds', 'Best tour'],
          rows: [
            ['January', 'about 24°C', 'Busy', 'Evening safari (bring a jacket for camp)'],
            ['February', 'about 25°C', 'Busy', 'Evening or sunrise'],
            ['March', 'about 28°C', 'Busy', 'Any tour'],
            ['April', 'about 33°C', 'Moderate', 'Evening or sunrise'],
            ['May', 'about 37°C', 'Quieter', 'Evening or sunrise'],
            ['June – September', '39–41°C', 'Quiet', 'Sunrise or evening only'],
            ['October', 'about 35°C', 'Picking up', 'Evening safari'],
            ['November', 'about 30°C', 'Busy', 'Any tour'],
            ['December', 'about 26°C', 'Busiest', 'Evening safari (book ahead)'],
          ],
        },
      },
      {
        heading: 'Peak season (November to March)',
        paragraphs: [
          'This is the best weather of the year: pleasant afternoons for dune bashing and sandboarding, golden sunsets, and cool evenings at the camp. It is also when most tourists visit Dubai, so camps are lively and weekend evenings fill up.',
          'From mid-December to early January demand is at its highest. Reserve 4–7 days ahead for weekends and holiday dates.',
        ],
      },
      {
        heading: 'Do desert safaris run in summer?',
        paragraphs: [
          'Yes. Safaris operate through June to September, and prices are often at their lowest. The evening safari spends most of its time near and after sunset, and the vehicles are air-conditioned, so it is very manageable. A sunrise safari is the coolest option of all.',
          'Avoid midday desert activities in summer and drink plenty of water. Our drivers carry chilled water on every tour.',
        ],
      },
      {
        heading: 'Weather that can change your plans',
        bullets: [
          'Sandstorms and rare rain happen a few times a year. If conditions are unsafe, we reschedule for free or cancel at no cost.',
          'Desert evenings from December to February can feel cold (around 12–16°C at the camp), so bring a light jacket.',
          'Sunset is around 5:35–5:50 PM in winter and around 7:10 PM in mid-summer, so pickup times move with the season.',
        ],
      },
    ],
    faqs: [
      {
        q: 'When is desert safari season in Dubai?',
        a: 'The main season is October to April, peaking from November to March. Safaris still run in summer, when sunrise and evening tours are the best choice.',
      },
      {
        q: 'Is December a good time for a desert safari?',
        a: 'Yes. December has some of the best weather of the year, but it is also the busiest month, especially around Christmas and New Year. Book a few days ahead.',
      },
      {
        q: 'Are desert safaris cheaper in summer?',
        a: `Often, yes. Demand drops from June to September. Our shared evening safari is ${aed(PRICES.eveningStandard)} per person with free hotel pickup, and there are no hidden fees in any season.`,
      },
    ],
    related: ['evening-standard', 'sunrise-safari', 'evening-premium'],
  },
  {
    slug: 'how-long-is-desert-safari-dubai',
    title: 'How Long Is a Desert Safari in Dubai? Timings for Every Tour',
    description: 'How long a Dubai desert safari takes: evening safari 6–7 hours, sunrise and morning tours 4 hours. Pickup and drop-off times for every tour.',
    category: 'Desert Safari',
    readMinutes: 3,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/land-cruiser-sunset.webp',
    answer: 'An evening desert safari in Dubai takes about 6–7 hours door to door: hotel pickup around 3:00–3:30 PM and drop-off around 9:30 PM. Private sunrise, morning and evening short tours take about 4 hours. The dunes themselves are about 45 minutes from central Dubai, and that drive is included in the total time.',
    sections: [
      {
        heading: 'Duration of each tour',
        table: {
          head: ['Tour', 'Pickup', 'Back at hotel', 'Total time'],
          rows: [
            ['Evening safari (Standard / Premium)', '3:00–3:30 PM', 'about 9:30 PM', '6–7 hours'],
            ['Evening VIP safari', '2:30–3:30 PM', 'about 9:45 PM', 'about 7 hours'],
            ['Private sunrise safari', 'about 4:30 AM', 'about 8:30 AM', 'about 4 hours'],
            ['Private morning safari', '8:00 AM', 'about 12:00 PM', 'about 4 hours'],
            ['Private evening short safari', '3:30 PM', 'about 7:30 PM', 'about 4 hours'],
          ],
        },
      },
      {
        heading: 'How the evening safari time is split',
        bullets: [
          'About 45 minutes driving from your hotel to the Lehbab red dunes',
          '30–40 minutes of dune bashing',
          'Sunset photos, sandboarding and a camel ride',
          'About 3 hours at the desert camp: coffee and dates, henna, BBQ dinner and live shows',
          'About 45 minutes back to your hotel',
        ],
      },
      {
        heading: 'Short on time?',
        paragraphs: [
          'If your evening is already booked, a private morning or sunrise tour gives you the dunes, dune bashing and sandboarding in about 4 hours, without the camp dinner. Times move about 30 minutes earlier in winter, and your driver confirms the exact pickup time on WhatsApp the day before.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How many hours is a desert safari in Dubai?',
        a: 'An evening safari with dinner is about 6–7 hours including hotel transfers. Sunrise and morning tours are about 4 hours.',
      },
      {
        q: 'What time does a desert safari finish?',
        a: 'Evening safaris drop you back at your hotel at around 9:30 PM. Sunrise tours finish around 8:30 AM and morning tours around 12:00 PM.',
      },
      {
        q: 'How long is the dune bashing part?',
        a: 'About 30–40 minutes on a standard evening safari, and longer on the Evening VIP and private morning tours.',
      },
    ],
    related: ['evening-standard', 'morning-safari', 'sunrise-safari'],
  },
  {
    slug: 'what-is-included-desert-safari-dubai',
    title: "What's Included in a Dubai Desert Safari? (And What Costs Extra)",
    description: 'Everything included in a Dubai evening desert safari: hotel pickup, dune bashing, camel ride, sandboarding, BBQ dinner and shows, plus what costs extra.',
    category: 'Desert Safari',
    readMinutes: 4,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/buffet.webp',
    answer: `A standard Dubai evening desert safari includes hotel pickup and drop-off in a 4×4 Land Cruiser, dune bashing in the red dunes, a sunset photo stop, sandboarding, a short camel ride, a BBQ buffet dinner, soft drinks, and live tanoura, belly dance and fire shows at a desert camp. Ours starts from ${aed(PRICES.eveningStandard)} per person. Quad biking, dune buggies and private vehicles usually cost extra.`,
    sections: [
      {
        heading: 'Included in every evening safari',
        bullets: [
          'Hotel pickup and drop-off in a shared 4×4 Land Cruiser',
          '30–40 minutes of dune bashing in the Lehbab red dunes',
          'Sunset photo stop on a high dune',
          'Sandboarding and a short camel ride',
          'Arabic coffee, dates and henna at the camp',
          'BBQ buffet dinner (vegetarian and non-vegetarian)',
          'Unlimited soft drinks, tea and water',
          'Live tanoura, belly dance and fire shows',
        ],
      },
      {
        heading: 'What each upgrade adds',
        table: {
          head: ['Package', 'Price', 'What it adds'],
          rows: [
            ['Evening Standard', `${aed(PRICES.eveningStandard)} / person`, 'Everything above'],
            ['Evening Premium', `${aed(PRICES.eveningPremium)} / person`, 'Smaller groups, extended dune bashing, priority seating, live-grill BBQ'],
            ['Premium + 30-min Quad', `${aed(PRICES.premiumQuad)} / person`, 'Evening Premium plus a 30-minute guided quad ride'],
            ['Evening VIP', `${aed(PRICES.eveningVip)} / person`, 'VIP seating, falcon & Arabic dress photos, longer dune bashing, every show twice'],
          ],
        },
      },
      {
        heading: 'What usually costs extra',
        bullets: [
          'Quad bike or dune buggy rides (unless you book a Safari + Quad combo)',
          'A private Land Cruiser for your group',
          'Alcoholic drinks, where available at the camp',
          'Souvenir photos taken by camp photographers',
          'Hotel pickup outside the main Dubai and Sharjah areas (ask us first)',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is dinner included in a desert safari?',
        a: 'Yes. Evening safaris include a BBQ buffet dinner with vegetarian and non-vegetarian dishes, plus unlimited soft drinks, tea and water.',
      },
      {
        q: 'Is hotel pickup included?',
        a: 'Yes. Pickup and drop-off are free from hotels and homes across the main Dubai areas and selected areas of Sharjah. For other areas, ask us on WhatsApp.',
      },
      {
        q: 'Is quad biking included in a desert safari?',
        a: `Not in the standard safari. You can add it, or book a Safari + 30-min Quad combo from ${aed(PRICES.standardQuad)} per person.`,
      },
    ],
    related: ['evening-standard', 'evening-premium', 'premium-quad'],
  },
  {
    slug: 'quad-biking-dubai-desert',
    title: 'Quad Biking in the Dubai Desert: Price, Age Limit & Safety',
    description: 'Quad biking in Dubai’s red dunes: what it costs, minimum age, whether you need a licence, what to wear and how to combine it with an evening safari.',
    category: 'Desert Safari',
    readMinutes: 4,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/quad-bike.webp',
    answer: `Quad biking in the Dubai desert is a guided ride on a marked track in the red dunes, usually for 30 minutes. The easiest way to do it is a Safari + 30-min Quad combo, which includes the full evening safari with dinner, from ${aed(PRICES.standardQuad)} per person. You do not need a driving licence; solo riders are usually 16 or older, and helmets and goggles are provided.`,
    sections: [
      {
        heading: 'Quad biking prices',
        table: {
          head: ['Option', 'Price', 'Includes'],
          rows: [
            ['Standard Safari + 30-min Quad', `${aed(PRICES.standardQuad)} / person`, 'Evening safari, dinner, shows and a 30-minute quad ride'],
            ['Premium Safari + 30-min Quad', `${aed(PRICES.premiumQuad)} / person`, 'Evening Premium safari plus a 30-minute quad ride'],
            ['Quad as an add-on', 'Quoted on WhatsApp', 'Add a ride to any desert safari'],
          ],
        },
      },
      {
        heading: 'Age, licence and safety',
        bullets: [
          'No driving licence is needed for a guided desert quad ride',
          'Solo riders are usually 16+; younger children may ride with an adult on some bikes, so ask us first',
          'A helmet, goggles and a safety briefing are included',
          'Rides follow a guide on a marked track, so you set a comfortable pace',
          'Not recommended during pregnancy or with back or neck problems',
        ],
      },
      {
        heading: 'What to wear',
        bullets: [
          'Closed shoes (trainers), not sandals',
          'Light long trousers to protect your legs from sand',
          'Sunglasses and a scarf or buff for dust',
        ],
      },
      {
        heading: 'Quad bike or dune buggy?',
        paragraphs: [
          'A quad bike is a single-rider bike you steer with handlebars; it feels more hands-on. A dune buggy is a small 2- or 4-seat car with a steering wheel and seat belts, so it suits couples and anyone who prefers a car-like feel. Both are available as add-ons.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is quad biking in Dubai?',
        a: `A Safari + 30-minute quad combo starts from ${aed(PRICES.standardQuad)} per person and includes the full evening safari with BBQ dinner and shows. A quad ride on its own is quoted on WhatsApp.`,
      },
      {
        q: 'Do I need a licence for quad biking in Dubai?',
        a: 'No. Guided desert quad rides do not need a driving licence.',
      },
      {
        q: 'Is quad biking in the desert safe?',
        a: 'Yes, when you follow the guide on the marked track and wear the helmet provided. Beginners get a briefing and can ride at their own pace.',
      },
    ],
    related: ['standard-quad', 'premium-quad', 'evening-standard'],
  },
  {
    slug: 'where-is-desert-safari-dubai',
    title: 'Where Is the Desert Safari in Dubai? Lehbab Red Dunes, Distance & Pickup',
    description: 'Where Dubai desert safaris take place, how far the Lehbab red dunes are from the city, and which hotel areas get free pickup.',
    category: 'Planning',
    readMinutes: 3,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/camp-night.webp',
    answer: 'Most Dubai desert safaris take place in the desert south-east of the city. Ours go to the Lehbab red dunes, about 45 minutes’ drive from central Dubai, where the sand is a deep orange-red and the dunes are high enough for proper dune bashing. You do not need to get there yourself: hotel pickup and drop-off are included from the main Dubai areas and selected parts of Sharjah.',
    sections: [
      {
        heading: 'Travel time from popular areas',
        table: {
          head: ['Pickup area', 'Approximate drive to the dunes'],
          rows: [
            ['Downtown / Business Bay', 'about 45 minutes'],
            ['Deira / Bur Dubai', 'about 45–50 minutes'],
            ['Dubai Marina / JBR', 'about 45–55 minutes'],
            ['Al Barsha', 'about 45 minutes'],
            ['Sharjah (selected areas)', 'about 50–60 minutes'],
          ],
        },
      },
      {
        heading: 'Free pickup areas',
        paragraphs: [
          'Pickup and drop-off are free, with no extra charge, from any hotel, apartment or address in Dubai Marina, JBR, Downtown, Business Bay, Bur Dubai, Deira, Jumeirah, Palm Jumeirah, Al Barsha, DIFC, DIP / Jebel Ali and selected areas of Sharjah. Staying in Ajman, Abu Dhabi or somewhere else? Message us on WhatsApp before booking.',
        ],
      },
      {
        heading: 'Why Lehbab',
        bullets: [
          'Tall red dunes that are ideal for dune bashing and sandboarding',
          'Wide open views for sunset photos',
          'Close enough to the city for an easy evening trip',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is the desert from Dubai?',
        a: 'The Lehbab red dunes are about 45 minutes’ drive from central Dubai. The drive is included in your safari with hotel pickup.',
      },
      {
        q: 'Can I drive myself to the desert safari?',
        a: `Yes, with our self-drive convoy from ${aed(PRICES.selfDrive)} per person, where you meet us at the Lehbab desert base. Otherwise hotel pickup is included.`,
      },
      {
        q: 'Do you pick up from Sharjah?',
        a: 'Yes, from selected areas of Sharjah at no extra charge. Send us your location on WhatsApp to confirm.',
      },
    ],
    related: ['evening-standard', 'self-drive-standard', 'evening-premium'],
  },
  {
    slug: 'desert-safari-dubai-ramadan',
    title: 'Desert Safari in Dubai During Ramadan (2027): What Changes?',
    description: 'Can you do a desert safari during Ramadan in Dubai? What changes at the camp, dinner timing, shows, and tips for booking in Ramadan 2027.',
    category: 'Planning',
    readMinutes: 3,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/camp-dining.webp',
    answer: 'Yes, desert safaris run during Ramadan in Dubai. Dune bashing, sandboarding, camel rides and dinner at the camp continue, but dinner is served after sunset, music and entertainment are usually toned down, and belly dance is typically not performed. Ramadan 2027 is expected to begin around 8 February 2027, depending on the moon sighting.',
    sections: [
      {
        heading: 'What usually changes during Ramadan',
        bullets: [
          'Dinner is served after sunset (iftar time), and some camps offer an iftar-style buffet',
          'Belly dance is typically not performed; other entertainment may be reduced or quieter',
          'Alcohol is usually not served at the camp',
          'Eating and drinking in public during daylight should be discreet, so have water in the car',
        ],
      },
      {
        heading: 'What stays the same',
        bullets: [
          'Hotel pickup and drop-off',
          'Dune bashing, sunset photos and sandboarding',
          'Camel rides, Arabic coffee and the desert camp',
        ],
      },
      {
        heading: 'Booking tips',
        paragraphs: [
          'Message us before booking during Ramadan and we will confirm exactly what is running on your date. The days around Eid at the end of Ramadan are busy, so book ahead if you are visiting then.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is desert safari open during Ramadan?',
        a: 'Yes. Safaris run throughout Ramadan, with dinner after sunset and a quieter evening programme.',
      },
      {
        q: 'Is belly dance performed during Ramadan?',
        a: 'Usually not. Tanoura and some other shows may continue, depending on the camp and date.',
      },
      {
        q: 'When is Ramadan 2027?',
        a: 'Ramadan 2027 is expected to begin around 8 February 2027 and last about 30 days, depending on the moon sighting.',
      },
    ],
    related: ['evening-standard', 'evening-premium', 'morning-safari'],
  },
  {
    slug: 'is-desert-safari-dubai-worth-it',
    title: 'Is a Desert Safari in Dubai Worth It? Honest Pros, Cons & Who It Suits',
    description: 'Is a Dubai desert safari worth the money? An honest look at what you get, who will love it, who should skip it, and how to pick the right tour.',
    category: 'Desert Safari',
    readMinutes: 4,
    published: '2026-10-27',
    updated: '2026-10-27',
    image: '/images/real/fire-show.webp',
    answer: `For most first-time visitors, yes. An evening desert safari packs dune bashing, sunset over the red dunes, a camel ride, sandboarding, a BBQ dinner and live shows into one evening, with hotel pickup included, from ${aed(PRICES.eveningStandard)} per person. It is less suited to people with back problems, pregnant travellers or anyone who dislikes crowds; they may prefer a private sunrise tour.`,
    sections: [
      {
        heading: 'Why most people love it',
        bullets: [
          'It is the easiest way to see the real Arabian desert from Dubai',
          'Dune bashing is a genuine thrill, and the sunset views are spectacular',
          'Dinner and entertainment are included, so it fills a whole evening',
          'Good value: one price covers transport, activities, food and shows',
        ],
      },
      {
        heading: 'Who should think twice',
        bullets: [
          'Pregnant travellers and anyone with back or neck problems should skip dune bashing (you can ask for a gentler drive)',
          'People who get car sick: sit in the front and take medication beforehand',
          'If you dislike busy camps, choose a private sunrise or morning tour instead',
        ],
      },
      {
        heading: 'How to make sure it is worth it',
        bullets: [
          'Book directly with an operator to avoid reseller mark-ups',
          'Check exactly what is included: dinner, shows, camel ride and sandboarding should all be in the price',
          'Avoid tours with surprise extras or deposits; with us you pay on the day',
          'Go in the evening for the full experience, or at sunrise for photos and quiet dunes',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a desert safari in Dubai a tourist trap?',
        a: 'Not if you book a reputable operator with clear inclusions. The experience itself, dune bashing, sunset and a desert camp evening, is one of the highlights of a Dubai trip.',
      },
      {
        q: 'Which desert safari is best for first-timers?',
        a: `The evening safari. It includes everything: dune bashing, sunset, camel ride, sandboarding, BBQ dinner and shows. Ours starts from ${aed(PRICES.eveningStandard)} per person, or ${aed(PRICES.eveningPremium)} for smaller groups and priority seating.`,
      },
      {
        q: 'Is the VIP desert safari worth the extra?',
        a: `If you want more comfort and photos, yes. The Evening VIP at ${aed(PRICES.eveningVip)} per person adds VIP seating, falcon and Arabic dress photos, longer dune bashing and every show twice.`,
      },
    ],
    related: ['evening-standard', 'evening-premium', 'evening-vip'],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
