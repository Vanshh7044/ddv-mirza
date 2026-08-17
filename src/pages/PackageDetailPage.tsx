import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { CheckCircle, Star, Clock, MapPin, Users, MessageCircle } from 'lucide-react';

const packages = {
  standard: {
    tier: '01',
    name: 'Evening Standard',
    tagline: 'The classic evening — dune bashing, BBQ, and live shows.',
    price: '79',
    originalPrice: '99',
    duration: '6–7 hrs',
    groupSize: '2–12',
    label: 'Evening Standard · Dubai Desert Safari',
    subtitle: 'The most popular way to experience the Arabian desert. Land Cruiser dune bashing through Lehbab, golden-hour sunset stop, BBQ buffet dinner, and live Tanoura and belly dance shows — all with free hotel pickup.',
    heroTitle: 'The classic.',
    heroTitleEm: 'Dunes, BBQ, shows.',
    includes: [
      '4×4 Land Cruiser dune bashing (35 min)',
      'Sunset photo stop at peak dunes',
      'Camel ride & sandboarding (30 min)',
      'BBQ buffet — grilled meats & vegetarian',
      'Tanoura, belly dance & fire shows',
      'Free henna for ladies',
      'Arabic coffee, dates & welcome drinks',
      'Unlimited soft drinks & water',
    ],
    excludes: [
      'Quad bike (available as add-on)',
      'Alcoholic beverages',
      'Gratuities (optional)',
    ],
    highlights: [
      { title: 'Lehbab Red Dunes', desc: 'Dubai\'s premier safari zone — 90 mins from JBR.' },
      { title: 'Free hotel pickup', desc: 'Any Dubai hotel, apartment, or designated area.' },
      { title: 'Pay on the day', desc: 'No advance payment, no deposit, no card hold.' },
      { title: 'Free cancellation', desc: 'Cancel up to 24 hours before pickup at no cost.' },
    ],
    reviews: [
      { text: 'Best dune bash in Dubai. Confirmed in 3 mins on WhatsApp. Driver was on time, BBQ was amazing.', name: 'James R.', origin: 'UK' },
      { text: 'Booked without paying upfront and was nervous — but DDV delivered. Kids loved it, dunes were thrilling.', name: 'Sarah M.', origin: 'Australia' },
    ],
  },
  premium: {
    tier: '02',
    name: 'Evening Premium',
    tagline: 'More private, more included — the sweet spot.',
    price: '119',
    originalPrice: '149',
    duration: '6–7 hrs',
    groupSize: 'Max 6',
    label: 'Evening Premium · Dubai Desert Safari',
    subtitle: 'Everything in Standard, plus a quad bike session, smaller group size, premium camp seating, and priority at every stop. The most popular upgrade for guests who want more without going fully private.',
    heroTitle: 'More private.',
    heroTitleEm: 'More included.',
    includes: [
      'All Evening Standard inclusions',
      'Quad bike — 15 min included',
      'Smaller group — max 6 per vehicle',
      'Premium camp seating with reserved table',
      'Welcome Arabic coffee & dates',
      'Priority at every stop — no queuing',
      'Dedicated host throughout',
      'Enhanced BBQ with premium options',
    ],
    excludes: [
      'Extended quad bike (available as add-on)',
      'Alcoholic beverages',
    ],
    highlights: [
      { title: 'Max 6 per vehicle', desc: 'More space, more control, more stops.' },
      { title: 'Quad bike included', desc: '15 minutes on a guided quad — no extra charge.' },
      { title: 'Priority queuing', desc: 'Skip the crowds at camel rides and falcon photos.' },
      { title: 'Reserved camp table', desc: 'Your table is set and waiting when you arrive.' },
    ],
    reviews: [
      { text: 'Worth every extra dirham. The smaller group made the dune bashing feel private. Quad bike was a bonus highlight.', name: 'Marco L.', origin: 'Italy' },
      { text: 'Premium seating at camp made a real difference — we were seated immediately, table had our name on it.', name: 'Pavel K.', origin: 'Russia' },
    ],
  },
  vip: {
    tier: '03',
    name: 'Evening VIP',
    tagline: 'Fully private. Dedicated guide. Custom dinner.',
    price: '299',
    originalPrice: '379',
    duration: '7 hrs',
    groupSize: 'Up to 6',
    label: 'Evening VIP · Dubai Desert Safari',
    subtitle: 'A fully private desert evening — your group, your vehicle, your schedule. Hands-on falcon training, dedicated VIP Majlis seating, custom table-service dinner, and a personal guide from start to finish.',
    heroTitle: 'Fully private.',
    heroTitleEm: 'No compromises.',
    includes: [
      'Exclusive private 4×4 — your group only',
      'Dedicated VIP Majlis tent at camp',
      'Table-service dinner with custom menu',
      'Personal guide & in-car photographer',
      'Hands-on falcon training session',
      'Premium BBQ & shisha lounge access',
      'Private transport to all stops',
      'Priority sunrise / sunset positioning',
    ],
    excludes: [
      'Alcoholic beverages',
    ],
    highlights: [
      { title: 'Private vehicle', desc: 'No shared vehicles — only your group.' },
      { title: 'Falcon training', desc: 'Hands-on, 20-min session with a trained falcon.' },
      { title: 'Custom menu', desc: 'We tailor the BBQ spread to your preferences.' },
      { title: 'Personal guide', desc: 'Your dedicated host from pickup to drop-off.' },
    ],
    reviews: [
      { text: 'Proposed at the dunes — they knew the plan and parked us at the perfect spot. The VIP treatment was real.', name: 'David & Priya', origin: 'Singapore' },
      { text: 'Did this for a team outing. The private vehicle and custom dinner made it feel exclusive without being stuffy.', name: 'Aisha T.', origin: 'UAE' },
    ],
  },
};

type PackageKey = keyof typeof packages;

export default function PackageDetailPage() {
  const { tier } = useParams<{ tier: string }>();
  const pkg = packages[(tier as PackageKey) ?? 'standard'] ?? packages.standard;

  return (
    <>
      <PageHero
        label={pkg.label}
        title={pkg.heroTitle}
        titleEm={pkg.heroTitleEm}
        subtitle={pkg.subtitle}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Evening Safari', to: '/evening-desert-safari' },
          { label: pkg.name },
        ]}
        primaryCta={{ label: 'Book on WhatsApp', href: 'https://wa.me/971559445338' }}
        price={`AED ${pkg.price}`}
        priceNote={`/ pp sharing (was AED ${pkg.originalPrice})`}
      />

      {/* Quick meta */}
      <div className="bg-[#FAF9F8] border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-5 flex flex-wrap gap-6">
          {[
            { icon: Clock, text: pkg.duration },
            { icon: MapPin, text: 'Lehbab Red Dunes, Dubai' },
            { icon: Users, text: `Group size: ${pkg.groupSize}` },
            { icon: Star, text: '4.9 · 401+ reviews' },
            { icon: CheckCircle, text: 'Free hotel pickup' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-mono text-[12px] text-stone">
              <item.icon size={13} className="text-safari-orange" />
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="py-20 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12">

            {/* Left: inclusions + highlights + reviews */}
            <div>
              {/* Highlights */}
              <div className="mb-12">
                <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-5">Why choose this package</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="bg-[#FAF9F8] border border-sand rounded-xl p-5">
                      <div className="font-serif text-[17px] text-[#1E2316] mb-1">{h.title}</div>
                      <div className="font-mono text-[12px] text-stone leading-relaxed">{h.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="mb-12">
                <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-5">What's included</div>
                <div className="bg-[#FAF9F8] border border-sand rounded-xl divide-y divide-sand">
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                      <CheckCircle size={14} className="text-safari-orange shrink-0" />
                      <span className="font-mono text-[12px] text-[#1E2316]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not included */}
              {pkg.excludes.length > 0 && (
                <div className="mb-12">
                  <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-4">Not included</div>
                  <div className="flex flex-col gap-2">
                    {pkg.excludes.map((exc, i) => (
                      <div key={i} className="flex items-center gap-3 font-mono text-[12px] text-stone">
                        <span className="w-3 h-px bg-stone/40 shrink-0" />
                        {exc}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              <div>
                <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-5">What guests say</div>
                <div className="flex flex-col gap-4">
                  {pkg.reviews.map((r, i) => (
                    <div key={i} className="bg-[#FAF9F8] border border-sand rounded-xl p-5">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={12} className="fill-[#D96B27] text-[#D96B27]" />)}
                      </div>
                      <p className="font-mono text-[12px] text-[#1E2316] leading-relaxed mb-3">"{r.text}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-safari-orange/10 flex items-center justify-center font-mono text-[11px] text-safari-orange">{r.name[0]}</div>
                        <span className="font-mono text-[11px] text-stone">{r.name} · {r.origin}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sticky booking card */}
            <div className="md:sticky md:top-28 md:self-start">
              <div className="bg-[#1E2316] text-[#FAF9F8] rounded-2xl p-7">
                <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/35 uppercase mb-3">{pkg.name}</div>
                <div className="font-mono text-[12px] text-[#FAF9F8]/40 line-through mb-0.5">AED {pkg.originalPrice}</div>
                <div className="font-serif text-4xl text-[#FAF9F8] mb-0.5">AED {pkg.price}</div>
                <div className="font-mono text-[11px] text-[#FAF9F8]/40 mb-6">per person sharing · pay on day</div>

                <div className="flex flex-col gap-3 mb-6 border-t border-white/10 pt-6">
                  {[
                    'Duration: ' + pkg.duration,
                    'Location: Lehbab, Dubai',
                    'Free hotel pickup & drop-off',
                    'Free cancellation up to 24h',
                    'Pay on the day — no deposit',
                  ].map((line, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[#FAF9F8]/55">
                      <CheckCircle size={11} className="text-safari-orange shrink-0" />
                      {line}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/971559445338"
                  className="w-full flex items-center justify-center gap-2.5 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[12px] tracking-widest uppercase py-4 rounded-xl transition-all mb-3"
                >
                  <MessageCircle size={14} /> Book on WhatsApp
                </a>
                <div className="font-mono text-[10px] text-[#FAF9F8]/30 text-center">Usually replies within 5 minutes</div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-mono text-[10px] text-[#FAF9F8]/30 uppercase mb-3">Compare packages</div>
                  <div className="flex flex-col gap-2">
                    {Object.entries(packages).map(([key, p]) => (
                      <Link
                        key={key}
                        to={`/evening-safari/${key}`}
                        className={`flex items-center justify-between font-mono text-[12px] px-3.5 py-2.5 rounded-lg transition-all ${key === tier ? 'bg-safari-orange/15 text-safari-orange border border-safari-orange/20' : 'text-[#FAF9F8]/40 hover:text-[#FAF9F8]/70 hover:bg-white/5'}`}
                      >
                        <span>{p.name}</span>
                        <span>AED {p.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
