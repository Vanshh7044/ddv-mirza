import PageHero from '../components/PageHero';
import { CheckCircle, Clock, MapPin, Users, MessageCircle, ArrowRight } from 'lucide-react';

const tours = [
  {
    type: 'Sunrise',
    emoji: '🌅',
    time: '05:30–10:30',
    title: 'Sunrise Desert Safari',
    desc: 'Chase the golden hour before the desert wakes up. The most photographed time of day in Lehbab — your own private 4×4, dunes to yourself, and silence.',
    price: '349',
    vehicle: true,
    includes: ['Private Land Cruiser', 'Sunrise dune bashing', 'Sandboarding', 'Photographer stop', 'Light refreshments', 'Free pickup'],
  },
  {
    type: 'Morning',
    emoji: '☀️',
    time: '08:00–12:00',
    title: 'Morning Short Tour',
    desc: 'A private morning adventure in the Lehbab dunes before the afternoon heat. Flexible stops, at your pace, back in time for lunch.',
    price: '349',
    vehicle: true,
    includes: ['Private Land Cruiser', 'Morning dune bashing', 'Sandboarding', 'Camel photo', 'Water & snacks', 'Free pickup'],
  },
  {
    type: 'Evening Short',
    emoji: '🌇',
    time: '15:30–19:30',
    title: 'Evening Short Tour',
    desc: 'A condensed private evening — sunset over the red dunes, sandboarding, and back in time for your own dinner plans.',
    price: '349',
    vehicle: true,
    includes: ['Private Land Cruiser', 'Sunset dune bashing', 'Sandboarding', 'Photo stops', 'Water & soft drinks', 'Free pickup'],
  },
];

export default function ShortTourPage() {
  return (
    <>
      <PageHero
        label="Short Tours · 4–5 hours · Private"
        title="Your own dunes."
        titleEm="Your own schedule."
        subtitle="Sunrise, morning, and evening short tours — all private. Your vehicle, your stops, your pace. No shared buses, no waiting. From AED 349 per vehicle."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Short Tours' }]}
        primaryCta={{ label: 'Book on WhatsApp', href: 'https://wa.me/971559445338' }}
        price="AED 349"
        priceNote="/ vehicle (flat rate)"
      />

      {/* Quick info bar */}
      <section className="bg-[#FAF9F8] border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 flex flex-wrap gap-3 sm:gap-6 items-center">
          {[
            { icon: Clock, text: '4–5 hours' },
            { icon: MapPin, text: 'Lehbab Red Dunes' },
            { icon: Users, text: 'Private car · 1–6 guests' },
            { icon: CheckCircle, text: 'Hotel pickup included' },
            { icon: CheckCircle, text: 'Flat rate — not per person' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-[12px] text-stone">
              <item.icon size={13} className="text-safari-orange" /> {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* Tour cards */}
      <section className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">Choose your time of day</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#1E2316]">Three private tours.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {tours.map((tour) => (
              <div key={tour.type} className="bg-[#FAF9F8] border border-sand rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#3A2010] to-[#1E2316] p-5 sm:p-6 sm:pt-8 text-[#FAF9F8]">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{tour.emoji}</div>
                  <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/40 uppercase mb-1.5 sm:mb-2">{tour.time}</div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light">{tour.title}</h3>
                </div>
                {/* Body */}
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[11.5px] sm:text-[12px] text-stone leading-relaxed mb-4 sm:mb-5">{tour.desc}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    {tour.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11.5px] sm:text-[12px] text-[#1E2316]">
                        <CheckCircle size={12} className="text-safari-orange shrink-0" /> {inc}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-end justify-between pt-4 sm:pt-5 border-t border-sand">
                    <div>
                      <div className="font-mono text-[10px] text-stone uppercase mb-0.5">Flat rate</div>
                      <div className="font-serif text-2xl text-[#1E2316]">AED {tour.price}<span className="font-mono text-[11px] text-stone ml-1">/ vehicle</span></div>
                    </div>
                    <a href="https://wa.me/971559445338" className="flex items-center gap-1.5 bg-[#1E2316] text-[#FAF9F8] font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl hover:bg-safari-olive transition-all">
                      Book <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why private matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1E2316] text-[#FAF9F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#FAF9F8]/35 uppercase mb-2 sm:mb-3">Why private?</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl">Your vehicle. Your timeline.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { title: 'No waiting', desc: 'No shared bus schedule. Leave when you\'re ready, stop when you want.' },
              { title: 'More stops', desc: 'Your driver goes where you ask — extra dune, extra photo, extra time.' },
              { title: 'Flat rate', desc: 'AED 349 per vehicle, not per person. Better value for groups of 2+.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl text-[#FAF9F8] mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="font-mono text-[11.5px] sm:text-[12px] text-[#FAF9F8]/45 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 bg-[#FAF9F8] border-t border-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#1E2316] mb-3 sm:mb-4">Ready for your private tour?</h2>
          <p className="font-mono text-[12px] sm:text-[13px] text-stone mb-6 sm:mb-8">Message us with your preferred time — sunrise, morning, or evening — and date. We'll confirm in 5 minutes.</p>
          <a href="https://wa.me/971559445338" className="inline-flex items-center justify-center gap-2.5 bg-[#1E2316] hover:bg-safari-olive text-[#FAF9F8] font-mono text-[11.5px] sm:text-[12px] tracking-widest uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all w-full sm:w-auto">
            <MessageCircle size={15} /> Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
