import PageHero from '../components/PageHero';
import { CheckCircle, MessageCircle } from 'lucide-react';

export default function VIPTraditionalPage() {
  return (
    <>
      <PageHero
        dark={true}
        label="VIP Traditional Arabic Safari · By Request"
        title="The full Bedouin"
        titleEm="heritage evening."
        subtitle="Private 4WD, hands-on falcon session, traditional majlis seating, and a five-course Arabic dinner under the stars. For guests who want the ceremony, not just the safari."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'VIP Traditional Arabic Safari' }]}
        primaryCta={{ label: 'Reserve on WhatsApp', href: 'https://wa.me/971559445338' }}
        price="AED 999"
        priceNote="/ 2 adults"
      />

      {/* Details grid */}
      <section className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 sm:gap-12">

            <div>
              {/* Highlights */}
              <div className="mb-8 sm:mb-12">
                <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-3 sm:mb-5">The experience</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {[
                    { title: 'Private Land Cruiser', desc: 'Exclusive vehicle — only your group. Your driver is your guide for the entire experience.' },
                    { title: 'Hands-on falcon training', desc: 'A licensed falconer teaches you traditional falconry techniques. 20+ minutes of hands-on time.' },
                    { title: 'VIP majlis seating', desc: 'Your own private majlis tent, styled in traditional Bedouin décor, away from the main camp.' },
                    { title: '5-course Arabic dinner', desc: 'Hummus, mezze, grilled meats, machboos, and knafeh — a full traditional Arabic spread.' },
                    { title: 'Live Tanoura & fire show', desc: 'Private performance from the main stage, viewed from your majlis with full service.' },
                    { title: 'Henna art & shisha lounge', desc: 'Complimentary henna and shisha in your private tent throughout the evening.' },
                  ].map((h, i) => (
                    <div key={i} className="bg-[#FAF9F8] border border-sand rounded-xl p-4 sm:p-5">
                      <div className="font-serif text-[16px] sm:text-[17px] text-[#1E2316] mb-1">{h.title}</div>
                      <div className="font-mono text-[11.5px] sm:text-[12px] text-stone leading-relaxed">{h.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="mb-8 sm:mb-12">
                <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-3 sm:mb-5">What's included</div>
                <div className="bg-[#FAF9F8] border border-sand rounded-xl divide-y divide-sand">
                  {[
                    'Private Land Cruiser & dedicated driver',
                    'Hands-on falcon training session (20+ min)',
                    'VIP majlis tent — private & styled',
                    '5-course traditional Arabic dinner',
                    'Tanura, fire & belly dance show',
                    'Free henna for ladies',
                    'Shisha lounge included',
                    'Free hotel pickup & drop-off',
                    'Dedicated host throughout the evening',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5">
                      <CheckCircle size={14} className="text-safari-orange shrink-0" />
                      <span className="font-mono text-[11.5px] sm:text-[12px] text-[#1E2316]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div>
                <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-3 sm:mb-5">Ideal for</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                  {['Honeymoon couples', 'Anniversary dinners', 'Proposal evenings', 'Family celebrations', 'Corporate hospitality', 'First-time VIP guests'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 bg-[#FAF9F8] border border-sand rounded-xl font-mono text-[11px] text-[#1E2316]">
                      <span className="w-1.5 h-1.5 rounded-full bg-safari-orange shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking card */}
            <div className="md:sticky md:top-28 md:self-start">
              <div className="bg-gradient-to-br from-[#3A2010] to-[#1E2316] text-[#FAF9F8] rounded-2xl p-5 sm:p-7">
                <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/35 uppercase mb-3">VIP Traditional Arabic</div>
                <div className="font-serif text-4xl text-[#FAF9F8] mb-1">AED 999</div>
                <div className="font-mono text-[11px] text-[#FAF9F8]/40 mb-6">per 2 adults · additional guests AED 399 each</div>

                <div className="flex flex-col gap-2.5 mb-6 border-t border-white/10 pt-6">
                  {['6+ hours full evening', 'Up to 6 guests max', 'Lehbab Red Dunes', 'Free hotel pickup', 'Pay on arrival'].map((line, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[#FAF9F8]/55">
                      <CheckCircle size={11} className="text-safari-orange shrink-0" /> {line}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/971559445338?text=Hi%20Dubai%20Desert%20Adventures%20%E2%80%94%20I%27d%20like%20to%20reserve%20the%20VIP%20Traditional%20Arabic%20Safari."
                  className="w-full flex items-center justify-center gap-2.5 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[12px] tracking-widest uppercase py-4 rounded-xl transition-all"
                >
                  <MessageCircle size={14} /> Reserve on WhatsApp
                </a>
                <div className="font-mono text-[10px] text-[#FAF9F8]/25 text-center mt-3">No deposit required · Free cancellation 24h</div>
              </div>

              <div className="mt-4 p-5 bg-[#FAF9F8] border border-sand rounded-xl">
                <div className="font-mono text-[10px] tracking-widest text-stone uppercase mb-3">Availability</div>
                <div className="font-mono text-[12px] text-[#1E2316]">By request. Best booked 3–7 days in advance.</div>
                <div className="font-mono text-[11px] text-stone mt-1.5">Year-round · Subject to availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
