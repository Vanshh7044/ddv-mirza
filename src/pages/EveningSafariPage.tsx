import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ArrowRight, CheckCircle, Star, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

const tiers = [
  {
    id: 'standard',
    badge: null,
    title: 'Evening Standard',
    price: '79',
    originalPrice: '99',
    duration: '6–7 hrs',
    includes: [
      '4×4 Land Cruiser dune bashing (35 min)',
      'Sunset photo stop at peak dunes',
      'Camel ride & sandboarding',
      'BBQ buffet — veg & non-veg',
      'Tanoura, belly dance & fire shows',
      'Free henna for ladies',
      'Arabic coffee & dates on arrival',
    ],
    to: '/evening-safari/standard',
  },
  {
    id: 'premium',
    badge: 'Most Booked',
    title: 'Evening Premium',
    price: '119',
    originalPrice: '149',
    duration: '6–7 hrs',
    includes: [
      'All Standard inclusions',
      'Smaller group — max 6 per vehicle',
      'Premium camp seating, reserved table',
      'Quad bike — 15 min included',
      'VIP welcome Arabic coffee & dates',
      'Priority at every stop, no queuing',
      'Dedicated host throughout',
    ],
    to: '/evening-safari/premium',
  },
  {
    id: 'vip',
    badge: 'VIP',
    title: 'Evening VIP',
    price: '299',
    originalPrice: '379',
    duration: '7 hrs',
    includes: [
      'Exclusive private 4×4 — your group only',
      'Dedicated VIP Majlis at camp',
      'Table-service dinner with custom menu',
      'Personal guide & photographer',
      'Hands-on falcon training session',
      'Premium BBQ & shisha lounge',
      'Private transport throughout',
    ],
    to: '/evening-safari/vip',
  },
];

export default function EveningSafariPage() {
  return (
    <>
      <PageHero
        label="Evening Desert Safari · Dubai"
        title="Dune bashing."
        titleEm="BBQ under the stars."
        subtitle="BBQ dinner under the stars, exhilarating dune bashing in a Land Cruiser, live Tanoura and belly dance shows. Free hotel pickup, free cancellation, no hidden charges."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Evening Desert Safari' }]}
        primaryCta={{ label: 'Book on WhatsApp', href: 'https://wa.me/971559445338' }}
        secondaryCta={{ label: 'Compare all packages', href: '#packages' }}
        price="AED 79"
        priceNote="/ person sharing"
      />

      {/* Quick info bar */}
      <section className="bg-[#FAF9F8] border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 flex flex-wrap gap-3 sm:gap-6 items-center">
          {[
            { icon: Clock, text: '6–7 hours' },
            { icon: MapPin, text: 'Lehbab Red Dunes' },
            { icon: Users, text: 'Groups of 2–12' },
            { icon: CheckCircle, text: 'Free hotel pickup' },
            { icon: CheckCircle, text: 'Pay on the day' },
            { icon: Star, text: '4.9 · 401+ reviews' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-[12px] text-stone">
              <item.icon size={13} className="text-safari-orange shrink-0" />
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* Package cards */}
      <section id="packages" className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">Three tiers · Compare & book</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#1E2316]">
              Choose your experience.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
                  tier.badge === 'Most Booked'
                    ? 'bg-[#1E2316] text-[#FAF9F8] ring-2 ring-safari-orange/40'
                    : 'bg-[#FAF9F8] border border-sand'
                }`}
              >
                <div className={`p-5 sm:p-6 border-b ${tier.badge === 'Most Booked' ? 'border-white/10' : 'border-sand'}`}>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={11} className="fill-[#D96B27] text-[#D96B27]" />
                      ))}
                      <span className={`font-mono text-[10px] ml-1 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/40' : 'text-stone/60'}`}>4.9</span>
                    </div>
                    {tier.badge && (
                      <span className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        tier.badge === 'Most Booked' ? 'bg-safari-orange text-white' : 'bg-[#1E2316] text-[#FAF9F8]'
                      }`}>{tier.badge}</span>
                    )}
                  </div>
                  <h3 className={`font-serif text-xl sm:text-2xl font-light mb-1.5 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>{tier.title}</h3>
                  <div className={`font-mono text-[11px] flex items-center gap-2 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/50' : 'text-stone'}`}>
                    <Clock size={11} />{tier.duration} · Lehbab · Free pickup
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <ul className={`flex flex-col gap-2.5 mb-6 flex-1`}>
                    {tier.includes.map((inc, j) => (
                      <li key={j} className={`flex items-start gap-2.5 font-mono text-[11px] leading-relaxed ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/70' : 'text-stone'}`}>
                        <CheckCircle size={12} className="mt-0.5 shrink-0 text-safari-orange" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-end justify-between pt-5 border-t ${tier.badge === 'Most Booked' ? 'border-white/10' : 'border-sand'}`}>
                    <div>
                      <div className={`font-mono text-[11px] line-through mb-0.5 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/30' : 'text-stone/40'}`}>AED {tier.originalPrice}</div>
                      <div className={`font-serif text-2xl sm:text-3xl ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>
                        AED {tier.price}<span className={`font-mono text-[11px] ml-1 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/40' : 'text-stone'}`}>/ pp</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://wa.me/971559445338"
                        className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all ${
                          tier.badge === 'Most Booked' ? 'bg-safari-orange text-white hover:bg-safari-orange-hover' : 'bg-[#1E2316] text-[#FAF9F8] hover:bg-safari-olive'
                        }`}
                      >
                        Book <ArrowRight size={11} />
                      </a>
                      <Link to={tier.to} className={`flex items-center gap-1 font-mono text-[10px] tracking-wider justify-center transition-colors ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/40 hover:text-[#FAF9F8]/70' : 'text-stone hover:text-safari-orange'}`}>
                        Details <ChevronRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included grid */}
      <section className="py-12 sm:py-20 bg-[#FAF9F8] border-t border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">All packages include</div>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#1E2316]">Always included. No surprises.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              'Free hotel pickup & drop-off',
              'Land Cruiser dune bashing',
              'Camel ride & sandboarding',
              'BBQ buffet (veg + non-veg)',
              'Unlimited soft drinks & water',
              'Tanoura, belly dance & fire shows',
              'Free henna for ladies',
              'Pay on the day — zero deposit',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3.5 sm:p-4 bg-sand/40 rounded-xl border border-sand">
                <CheckCircle size={14} className="text-safari-orange shrink-0 mt-0.5" />
                <span className="font-mono text-[11.5px] sm:text-[12px] text-[#1E2316] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1E2316]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif font-light text-4xl text-[#FAF9F8] mb-4">
            Ready to book your evening safari?
          </h2>
          <p className="text-[#FAF9F8]/50 font-mono text-[13px] mb-8">Free hotel pickup · Pay on the day · Free cancellation up to 24h</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://wa.me/971559445338" className="flex items-center gap-2 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[12px] tracking-widest uppercase px-8 py-4 rounded-xl transition-all">
              Book on WhatsApp
            </a>
            <Link to="/desert-safari" className="flex items-center gap-2 border border-[#FAF9F8]/20 text-[#FAF9F8] hover:bg-[#FAF9F8]/5 font-mono text-[12px] tracking-widest uppercase px-8 py-4 rounded-xl transition-all">
              Compare all packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
