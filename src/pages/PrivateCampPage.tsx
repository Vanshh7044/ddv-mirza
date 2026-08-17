import PageHero from '../components/PageHero';
import { CheckCircle, MessageCircle } from 'lucide-react';

const setups = [
  {
    title: 'Intimate Desert Dinner',
    desc: 'A candlelit dinner for two in the dunes — styled table, flower arrangement, custom menu, sunset positioning.',
    price: '2,299',
    pax: '2 adults',
    includes: ['Private 4×4 access', 'Styled dinner table', 'Flowers & candles', 'Custom 4-course menu', 'Dedicated server', 'Sunset positioning'],
  },
  {
    title: 'Desert Celebration',
    desc: 'Birthdays, anniversaries, small group gatherings — a private camp setup decorated for your occasion.',
    price: '3,500',
    pax: 'Up to 8 guests',
    includes: ['Private tent setup', 'Custom decoration', 'Themed BBQ spread', 'Balloon & banners', 'Dedicated host', 'Photo backdrop'],
  },
  {
    title: 'Corporate Desert Hospitality',
    desc: 'Client dinners, team retreats, and incentive events in an exclusive desert setting.',
    price: 'Upon request',
    pax: 'Up to 20 guests',
    includes: ['Exclusive camp zone', 'Custom branding options', 'Premium catering', 'Live entertainment', 'AV on request', 'Transport for group'],
  },
];

export default function PrivateCampPage() {
  return (
    <>
      <PageHero
        dark={true}
        label="Private Desert Setup · Fully Custom"
        title="Your occasion."
        titleEm="Your desert."
        subtitle="A fully private camp setup designed around your event — intimate dinners for two, birthday celebrations, anniversary surprises, and corporate hospitality. From AED 2,299."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Private Desert Setup' }]}
        primaryCta={{ label: 'Enquire on WhatsApp', href: 'https://wa.me/971559445338?text=Hi%20—%20I%27d%20like%20to%20enquire%20about%20a%20private%20desert%20setup.' }}
        price="From AED 2,299"
        priceNote="fully configured"
      />

      {/* How it works */}
      <section className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">How it works</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#1E2316]">We set it up. You show up.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {[
              { n: '01', title: 'Tell us your vision', desc: 'Message us the date, occasion, and guest count. We suggest a setup and menu that fits.' },
              { n: '02', title: 'We build it', desc: 'Our team arrives 2 hours early to set up the camp, styling, décor, and table before you arrive.' },
              { n: '03', title: 'You arrive to the surprise', desc: 'Your group is greeted at the gate and driven directly to your private setup — all ready.' },
            ].map((s) => (
              <div key={s.n} className="bg-[#FAF9F8] border border-sand rounded-xl p-5 sm:p-6">
                <div className="font-mono text-3xl sm:text-4xl font-light text-[#1E2316]/8 mb-2 sm:mb-3">{s.n}</div>
                <h3 className="font-serif text-lg text-[#1E2316] mb-1.5 sm:mb-2">{s.title}</h3>
                <p className="font-mono text-[11.5px] sm:text-[12px] text-stone leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Setup cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {setups.map((setup) => (
              <div key={setup.title} className="bg-[#FAF9F8] border border-sand rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[#3A2010] to-[#1E2316] p-5 sm:p-6 sm:pt-7">
                  <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/35 uppercase mb-1.5 sm:mb-2">{setup.pax}</div>
                  <h3 className="font-serif text-xl text-[#FAF9F8] font-light">{setup.title}</h3>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[11.5px] sm:text-[12px] text-stone mb-4 sm:mb-5 leading-relaxed">{setup.desc}</p>
                  <div className="flex flex-col gap-1.5 mb-5 sm:mb-6">
                    {setup.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11.5px] sm:text-[12px] text-[#1E2316]">
                        <CheckCircle size={12} className="text-safari-orange shrink-0" /> {inc}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 sm:pt-5 border-t border-sand flex items-end justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-stone uppercase mb-0.5">From</div>
                      <div className="font-serif text-2xl text-[#1E2316]">
                        {setup.price.startsWith('AED') ? setup.price : setup.price === 'Upon request' ? 'Custom' : `AED ${setup.price}`}
                      </div>
                      {setup.price === 'Upon request' && <div className="font-mono text-[11px] text-stone">Quoted on request</div>}
                    </div>
                    <a href="https://wa.me/971559445338" className="flex items-center gap-1.5 bg-[#1E2316] text-[#FAF9F8] font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl hover:bg-safari-olive transition-all">
                      <MessageCircle size={12} /> Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-12 sm:py-14 bg-[#FAF9F8] border-t border-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#1E2316] mb-4 sm:mb-8">Plan your private setup</h2>
          <p className="font-mono text-[12px] sm:text-[13px] text-stone mb-6 leading-relaxed">
            Private setups require 5–7 days advance booking. Message us the date, occasion, and any special requirements and we'll send you a full proposal within 2 hours.
          </p>
          <a href="https://wa.me/971559445338?text=Hi%20—%20I%27d%20like%20to%20enquire%20about%20a%20private%20desert%20setup." className="inline-flex items-center justify-center gap-2.5 bg-[#1E2316] hover:bg-safari-olive text-[#FAF9F8] font-mono text-[11.5px] sm:text-[12px] tracking-widest uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all w-full sm:w-auto">
            <MessageCircle size={15} /> Enquire on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
