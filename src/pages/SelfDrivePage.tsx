import PageHero from '../components/PageHero';
import { CheckCircle, Star, Users, MessageCircle, ArrowRight } from 'lucide-react';

const sdPackages = [
  {
    badge: 'Save AED 14',
    title: 'Self-Drive Standard',
    price: '35',
    original: '49',
    pax: 12,
    desc: 'Lead-the-convoy format through Lehbab. You drive your own 4×4, our guide leads the convoy and keeps everyone safe. Camp BBQ at the end.',
    includes: [
      'Convoy guide vehicle',
      'Lehbab dune access',
      'Dune bashing (convoy format)',
      'Camp BBQ buffet',
      'Soft drinks & water',
      'Max 12 vehicles per convoy',
    ],
  },
  {
    badge: 'Save AED 19',
    title: 'Self-Drive Premium',
    price: '60',
    original: '79',
    pax: 10,
    desc: 'Same convoy experience with upgraded camp facilities — premium seating, enhanced BBQ menu, and smaller convoy size.',
    includes: [
      'Convoy guide vehicle',
      'Lehbab dune access',
      'Dune bashing (convoy format)',
      'Premium camp & BBQ',
      'Soft drinks & water',
      'Max 10 vehicles per convoy',
    ],
  },
  {
    badge: 'Save AED 24',
    title: 'Self-Drive VIP',
    price: '75',
    original: '99',
    pax: 14,
    desc: 'VIP camp access with falcon encounter, premium BBQ, and upgraded camp facilities. The full self-drive experience.',
    includes: [
      'Convoy guide vehicle',
      'Lehbab dune access',
      'Dune bashing (convoy format)',
      'VIP camp + falcon photo',
      'Premium BBQ & shisha',
      'Max 14 vehicles per convoy',
    ],
  },
];

export default function SelfDrivePage() {
  return (
    <>
      <PageHero
        label="Self-Drive Safari · Lehbab"
        title="You drive."
        titleEm="We guide."
        subtitle="Bring your own 4×4 — we lead the convoy through Lehbab's red dunes. The only way to get the full dune bashing experience in your own vehicle with a licensed guide. From AED 35 per person."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Self-Drive Safari' }]}
        primaryCta={{ label: 'Book on WhatsApp', href: 'https://wa.me/971559445338' }}
        price="AED 35"
        priceNote="/ person (Standard)"
      />

      {/* Vehicle requirements callout */}
      <section className="bg-amber-50/80 border-y border-amber-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 flex flex-wrap gap-x-8 gap-y-2.5">
          <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-amber-700/70 uppercase">Vehicle requirements</div>
          {['Minimum 4WD / AWD vehicle', 'Tyres deflated to 20 PSI on arrival', 'We provide a tyre inflator at exit', 'Petrol or diesel — no EV (sand gets hot)'].map((req, i) => (
            <div key={i} className="flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] text-amber-800/70">
              <span className="w-1 h-1 rounded-full bg-amber-500/60 shrink-0" /> {req}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">How self-drive works</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#1E2316]">Same dunes. Your steering wheel.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {[
              { n: '01', title: 'Meet at the gate', desc: 'Drive to Lehbab — 45 min from Dubai center. Meet our convoy guide at the agreed gate.' },
              { n: '02', title: 'Deflate & brief', desc: 'Our guide deflates your tyres to dune pressure and briefs everyone on technique and safety.' },
              { n: '03', title: 'Convoy into the dunes', desc: 'Our lead vehicle heads in first. You follow. We stop for photos, adjust pace, and keep it safe.' },
              { n: '04', title: 'Camp & re-inflate', desc: 'End at the camp for BBQ and shows. Inflate tyres on the way out — we have the kit.' },
            ].map((s) => (
              <div key={s.n} className="bg-[#FAF9F8] border border-sand rounded-xl p-5 sm:p-6">
                <div className="font-mono text-3xl sm:text-4xl font-light text-[#1E2316]/10 mb-2 sm:mb-3">{s.n}</div>
                <h3 className="font-serif text-lg text-[#1E2316] mb-1.5 sm:mb-2">{s.title}</h3>
                <p className="font-mono text-[11.5px] sm:text-[12px] text-stone leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {sdPackages.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAF9F8] border border-sand rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="bg-[#1E2316] text-[#FAF9F8] font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full">{pkg.badge}</span>
                  <div className="flex items-center gap-1">
                    <Users size={12} className="text-stone" />
                    <span className="font-mono text-[11px] text-stone">Max {pkg.pax}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-[#1E2316] mb-1.5 sm:mb-2">{pkg.title}</h3>
                <p className="font-mono text-[11.5px] sm:text-[12px] text-stone mb-4 sm:mb-5 leading-relaxed">{pkg.desc}</p>
                <div className="flex flex-col gap-1.5 mb-5 sm:mb-6">
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-stone">
                      <CheckCircle size={11} className="text-safari-orange shrink-0" /> {inc}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} className="fill-[#D96B27] text-[#D96B27]" />)}
                  <span className="font-mono text-[11px] text-stone ml-1">4.9 · 401+</span>
                </div>
                <div className="flex items-end justify-between pt-4 sm:pt-5 border-t border-sand">
                  <div>
                    <div className="font-mono text-[11px] text-stone/50 line-through">AED {pkg.original}</div>
                    <div className="font-serif text-2xl text-[#1E2316]">AED {pkg.price} <span className="font-mono text-[11px] text-stone">/ pp</span></div>
                  </div>
                  <a href="https://wa.me/971559445338" className="flex items-center gap-1.5 bg-[#1E2316] text-[#FAF9F8] font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl hover:bg-safari-olive transition-all">
                    Book <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#1E2316]">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif font-light text-3xl text-[#FAF9F8] mb-4">Ready to drive the dunes?</h2>
          <p className="font-mono text-[13px] text-[#FAF9F8]/45 mb-8">Message us with your date, vehicle type, and number of people. We confirm within 5 minutes.</p>
          <a href="https://wa.me/971559445338" className="inline-flex items-center gap-2.5 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[12px] tracking-widest uppercase px-8 py-4 rounded-xl transition-all">
            <MessageCircle size={15} /> Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
