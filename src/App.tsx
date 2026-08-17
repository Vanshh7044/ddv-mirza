import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Plus, Phone, MessageCircle, Star, CheckCircle, Clock, MapPin, Users, ChevronRight, Flame, Shield, Zap, Globe } from 'lucide-react';
import Hero from './components/Hero';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── TRUST STRIP ────────────────────────────────────────────────────────────

const TrustStrip = () => (
  <section className="bg-[#1E2316] text-[#FAF9F8] overflow-hidden">
    <div className="flex items-center py-3.5 sm:py-4">
      {/* Marquee strip */}
      <div className="flex gap-0 animate-none">
        <div className="flex items-center gap-6 sm:gap-10 px-4 sm:px-8 whitespace-nowrap font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#FAF9F8]/70 shrink-0 marquee-track">
          {[
            '★ 4.9 Google Rating',
            'DET Licensed Since 2010',
            '25,000+ Guests Hosted',
            'Free Hotel Pickup',
            'Pay On The Day',
            'No Advance Deposit',
            'Free Cancellation 24h',
            'WhatsApp In 4 Languages',
            '★ 4.9 Google Rating',
            'DET Licensed Since 2010',
            '25,000+ Guests Hosted',
            'Free Hotel Pickup',
            'Pay On The Day',
            'No Advance Deposit',
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-10">
              <span>{item}</span>
              <span className="text-[#D96B27]/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── STAT BANNER ────────────────────────────────────────────────────────────

const StatBanner = () => {
  const stats = [
    { value: '14', suffix: '', label: 'Years Operating' },
    { value: '25,000', suffix: '+', label: 'Guests Hosted' },
    { value: '4.9', suffix: '★', label: '401+ Google Reviews' },
    { value: 'AED 79', suffix: '', label: 'Packages From' },
  ];
  return (
    <section className="bg-[#FAF9F8] border-b border-sand">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-6 sm:py-10 px-4 sm:px-8 flex flex-col gap-1 reveal border-sand ${
              i % 2 === 0 ? 'border-r' : ''
            } ${i < 2 ? 'border-b md:border-b-0' : ''} ${i < 3 ? 'md:border-r' : 'md:border-r-0'}`}
          >
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1E2316]">
              {s.value}<span className="text-safari-orange text-2xl sm:text-3xl">{s.suffix}</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-stone uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── PACKAGES ────────────────────────────────────────────────────────────────

const Packages = () => {
  const [activeTab, setActiveTab] = useState<'evening' | 'short' | 'selfdrive'>('evening');

  const eveningTiers = [
    {
      badge: null,
      num: '01',
      title: 'Evening Standard',
      price: '79',
      originalPrice: '99',
      duration: '6–7 hrs',
      rating: '4.9',
      reviews: '401+',
      includes: [
        '4×4 Land Cruiser dune bashing',
        'Sunset photo stop at peak dunes',
        'Camel ride & sandboarding',
        'BBQ buffet — veg & non-veg',
        'Tanoura, belly dance & fire shows',
        'Free henna for ladies',
        'Arabic coffee & dates',
      ],
    },
    {
      badge: 'Most Booked',
      num: '02',
      title: 'Evening Premium',
      price: '119',
      originalPrice: '149',
      duration: '6–7 hrs',
      rating: '4.9',
      reviews: '401+',
      includes: [
        'All Standard inclusions',
        'Max 6 per Land Cruiser (smaller group)',
        'Premium camp seating, reserved table',
        'Quad bike 15 min included',
        'VIP welcome Arabic coffee & dates',
        'Priority at every stop, no queuing',
        'Dedicated host throughout',
      ],
    },
    {
      badge: 'VIP',
      num: '03',
      title: 'Evening VIP',
      price: '299',
      originalPrice: '379',
      duration: '7 hrs',
      rating: '5.0',
      reviews: '401+',
      includes: [
        'Exclusive private 4×4 — your group only',
        'Dedicated VIP Majlis at camp',
        'Table-service dinner with custom menu',
        'Personal guide & photographer',
        'Hands-on falcon training session',
        'Premium BBQ & shisha lounge',
        'Private transport throughout',
      ],
    },
  ];

  const shortTours = [
    { label: 'Sunrise', time: '05:00–09:30', price: '419', unit: '/ car', type: 'Private 4×4' },
    { label: 'Morning', time: '08:30–12:30', price: '419', unit: '/ car', type: 'Private 4×4' },
    { label: 'Evening Short', time: '15:30–19:30', price: '419', unit: '/ car', type: 'Private 4×4' },
  ];

  const selfDrive = [
    { badge: 'Save AED 14', title: 'Self-Drive Standard', desc: 'You drive · we guide · Lehbab dunes', price: '35', original: '49', pax: 12 },
    { badge: 'Save AED 19', title: 'Self-Drive Premium', desc: 'Premium camp · BBQ included · Lehbab', price: '60', original: '79', pax: 10 },
    { badge: 'Save AED 24', title: 'Self-Drive VIP', desc: 'VIP camp + falcon · Premium BBQ · Lehbab', price: '75', original: '99', pax: 14 },
  ];

  const tabs = [
    { key: 'evening', label: 'Evening Safari' },
    { key: 'short', label: 'Short Tours' },
    { key: 'selfdrive', label: 'Self-Drive' },
  ] as const;

  return (
    <section id="packages" className="py-14 sm:py-20 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 reveal">
          <div>
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">Desert Safari Packages · Dubai</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1E2316] leading-tight">
              Nine packages.<br />One operator.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone max-w-sm">Compare packages across three categories. Evening safaris from AED 79, short tours from AED 349, self-drive from AED 35.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8 bg-sand/60 rounded-2xl p-1 sm:p-1.5 w-full sm:w-fit overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-mono text-[11px] sm:text-[12px] tracking-wider uppercase transition-all duration-200 text-center whitespace-nowrap cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#1E2316] text-[#FAF9F8] shadow-sm'
                  : 'text-stone hover:text-[#1E2316]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Evening Packages */}
        {activeTab === 'evening' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {eveningTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  tier.badge === 'Most Booked'
                    ? 'bg-[#1E2316] text-[#FAF9F8] ring-2 ring-safari-orange/40'
                    : 'bg-[#FAF9F8] border border-sand'
                }`}
              >
                <div className={`p-5 sm:p-6 border-b ${tier.badge === 'Most Booked' ? 'border-white/10' : 'border-sand'}`}>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`font-mono text-[10px] tracking-widest uppercase ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/50' : 'text-stone'}`}>
                      {tier.num} / 03
                    </span>
                    {tier.badge && (
                      <span className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        tier.badge === 'Most Booked' ? 'bg-safari-orange text-white' : 'bg-[#1E2316] text-[#FAF9F8]'
                      }`}>{tier.badge}</span>
                    )}
                  </div>
                  <h3 className={`font-serif text-xl sm:text-2xl font-light mb-1 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>{tier.title}</h3>
                  <div className={`flex items-center gap-2 sm:gap-3 font-mono text-[10.5px] sm:text-[11px] ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/60' : 'text-stone'}`}>
                    <span>{tier.duration}</span>
                    <span>·</span>
                    <span>Lehbab</span>
                    <span>·</span>
                    <span>Free pickup</span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
                    <Star size={12} className="fill-[#D96B27] text-[#D96B27]" />
                    <span className={`font-mono text-[11px] ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/70' : 'text-stone'}`}>{tier.rating} · {tier.reviews} reviews</span>
                  </div>
                  <ul className={`flex flex-col gap-2.5 mb-5 sm:mb-6 flex-1 border-t pt-4 sm:pt-5 ${tier.badge === 'Most Booked' ? 'border-white/10' : 'border-sand'}`}>
                    {tier.includes.map((inc, j) => (
                      <li key={j} className={`flex items-start gap-2.5 font-mono text-[11px] leading-relaxed ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/75' : 'text-stone'}`}>
                        <CheckCircle size={12} className="mt-0.5 shrink-0 text-safari-orange" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-end justify-between pt-4 sm:pt-5 border-t ${tier.badge === 'Most Booked' ? 'border-white/10' : 'border-sand'}`}>
                    <div>
                      <div className={`font-mono text-[10.5px] sm:text-[11px] mb-0.5 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/40 line-through' : 'text-stone/50 line-through'}`}>AED {tier.originalPrice}</div>
                      <div className={`font-serif text-2xl sm:text-3xl ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>
                        AED {tier.price}
                        <span className={`font-mono text-[11px] sm:text-[12px] font-normal ml-1 ${tier.badge === 'Most Booked' ? 'text-[#FAF9F8]/50' : 'text-stone'}`}>/ pp</span>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/971559445338"
                      className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all ${
                        tier.badge === 'Most Booked'
                          ? 'bg-safari-orange text-white hover:bg-safari-orange-hover'
                          : 'bg-[#1E2316] text-[#FAF9F8] hover:bg-safari-olive'
                      }`}
                    >
                      Book <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Short Tours */}
        {activeTab === 'short' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {shortTours.map((tour, i) => (
              <div key={i} className="bg-[#FAF9F8] border border-sand rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="h-36 sm:h-48 bg-gradient-to-br from-[#D96B27]/20 to-[#4F583E]/20 flex items-center justify-center">
                  <div className="font-serif text-5xl sm:text-6xl text-[#1E2316]/10">{tour.label[0]}</div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10.5px] sm:text-[11px] text-stone mb-2 sm:mb-3">
                    <span className="flex items-center gap-1"><Clock size={11} /> {tour.time}</span>
                    <span>·</span>
                    <span>{tour.type}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> Lehbab</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1E2316] mb-3 sm:mb-4">{tour.label} Desert Safari</h3>
                  <div className="flex items-end justify-between pt-3 border-t border-sand">
                    <div>
                      <div className="font-mono text-[10px] text-stone">Flat rate</div>
                      <div className="font-serif text-2xl sm:text-3xl text-[#1E2316]">AED {tour.price}<span className="font-mono text-[11px] sm:text-[12px] text-stone ml-1">{tour.unit}</span></div>
                    </div>
                    <a href="https://wa.me/971559445338" className="flex items-center gap-1.5 bg-[#1E2316] text-[#FAF9F8] font-mono text-[11px] tracking-wider uppercase px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-safari-olive transition-all">
                      Book <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Self-Drive */}
        {activeTab === 'selfdrive' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {selfDrive.map((pkg, i) => (
              <div key={i} className="bg-[#FAF9F8] border border-sand rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="bg-[#1E2316] text-[#FAF9F8] font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full">{pkg.badge}</span>
                  <div className="flex items-center gap-1">
                    <Users size={12} className="text-stone" />
                    <span className="font-mono text-[11px] text-stone">Max {pkg.pax}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1E2316] mb-1">{pkg.title}</h3>
                <p className="font-mono text-[11px] text-stone mb-5 sm:mb-6 flex-1">{pkg.desc}</p>
                <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
                  <Star size={12} className="fill-[#D96B27] text-[#D96B27]" />
                  <span className="font-mono text-[11px] text-stone">4.9 · 401+ reviews</span>
                </div>
                <div className="flex items-end justify-between pt-4 sm:pt-5 border-t border-sand">
                  <div>
                    <div className="font-mono text-[10.5px] sm:text-[11px] text-stone/50 line-through">AED {pkg.original}</div>
                    <div className="font-serif text-2xl sm:text-3xl text-[#1E2316]">AED {pkg.price}<span className="font-mono text-[11px] sm:text-[12px] text-stone ml-1">/ pp</span></div>
                  </div>
                  <a href="https://wa.me/971559445338" className="flex items-center gap-1.5 bg-[#1E2316] text-[#FAF9F8] font-mono text-[11px] tracking-wider uppercase px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-safari-olive transition-all">
                    Book <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// ─── WHY DDV ────────────────────────────────────────────────────────────────

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Operator-direct since 2010',
      desc: 'In-house fleet, drivers, and DET-licensed guides — for 14 years. Same team behind every safari, every time.',
    },
    {
      icon: Zap,
      title: 'No reseller markup',
      desc: 'Same Land Cruisers, same camps, same guides. Book direct and save AED 30+ vs OTAs on every package.',
    },
    {
      icon: CheckCircle,
      title: 'Pay on the day',
      desc: 'Reserve free, decide at the gate. No advance payment, free cancellation up to 24 hours before pickup.',
    },
    {
      icon: Globe,
      title: 'WhatsApp in 4 languages',
      desc: 'Direct line to our ops team in English, Arabic, Russian, and French. Typical reply in under 5 minutes.',
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      '.why-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="why" className="py-14 sm:py-20 md:py-28 bg-[#1E2316] text-[#FAF9F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#FAF9F8]/40 uppercase mb-2 sm:mb-4">What makes it different</div>
            <h2 className="font-serif font-light text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
              Same Land Cruisers.<br />
              <em className="italic text-safari-orange">Same dunes.</em><br />
              Direct operator.
            </h2>
          </div>
          <p className="text-[#FAF9F8]/55 max-w-sm text-sm sm:text-base leading-relaxed">
            Same Land Cruisers, same camps, same DET-licensed guides — for 14 years. Four reasons that adds up to the safari Dubai locals actually recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="why-card opacity-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-7 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group">
              <r.icon size={22} className="text-safari-orange mb-4 sm:mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg sm:text-xl text-[#FAF9F8] mb-2 sm:mb-3 leading-tight">{r.title}</h3>
              <p className="font-mono text-[11.5px] sm:text-[12px] text-[#FAF9F8]/50 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── VIP EXPERIENCES ────────────────────────────────────────────────────────

const VIPExperiences = () => {
  const experiences = [
    {
      label: 'VIP Traditional Arabic Safari.',
      meta: '6+ hours · Lehbab dunes · Up to 6 guests',
      desc: 'The full Bedouin heritage evening. Private 4WD, hands-on falcon session, traditional majlis seating, and a five-course Arabic dinner under the stars.',
      price: 'AED 999',
      unit: '/ 2 adults',
      includes: [
        'Private Land Cruiser & driver',
        'Hands-on falcon training',
        'VIP majlis seating',
        '5-course Arabic dinner',
        'Tanura, fire, belly dance',
        'Henna art & shisha lounge',
      ],
      bg: 'from-[#3A2010] to-[#1E2316]',
    },
    {
      label: 'Private Camp Setup.',
      meta: 'Up to 6 hours · Private dune · 2 to 8 guests',
      desc: 'Your own private camp on a remote dune. Custom decor, personal chef, dedicated staff. No other guests. Built for couples, family events, and corporate retreats.',
      price: 'AED 2,299',
      unit: '/ group',
      includes: [
        'Exclusive private camp',
        'Personal chef & menu',
        'Dedicated 4WD & chauffeur',
        'Custom decor & lighting',
        'Curated entertainment',
        'Up to 6 hours private use',
      ],
      bg: 'from-[#0F1A10] to-[#1E2316]',
    },
  ];

  return (
    <section id="vip" className="py-14 sm:py-20 md:py-28 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-14 reveal">
          <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-4">Premium · By Request</div>
          <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#1E2316] tracking-tight leading-tight">
            Two curated experiences<br />for guests who want more.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className={`bg-gradient-to-br ${exp.bg} rounded-2xl p-6 sm:p-8 md:p-10 text-[#FAF9F8] reveal flex flex-col justify-between min-h-[auto] md:min-h-[480px]`}>
              <div>
                <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#FAF9F8]/40 uppercase mb-3 sm:mb-6">{exp.meta}</div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#FAF9F8] mb-3 sm:mb-4 leading-tight">{exp.label}</h3>
                <p className="text-[#FAF9F8]/60 text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8 max-w-sm">{exp.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {exp.includes.map((inc, j) => (
                    <li key={j} className="flex items-center gap-2 font-mono text-[11px] text-[#FAF9F8]/55">
                      <span className="w-1 h-1 rounded-full bg-safari-orange shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-between pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#FAF9F8]">{exp.price}</div>
                  <div className="font-mono text-[10.5px] sm:text-[11px] text-[#FAF9F8]/40">{exp.unit}</div>
                </div>
                <a
                  href="https://wa.me/971559445338"
                  className="flex items-center gap-2 bg-[#FAF9F8]/10 hover:bg-safari-orange border border-white/20 hover:border-safari-orange text-[#FAF9F8] font-mono text-[10.5px] sm:text-[11px] tracking-widest uppercase px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all duration-300"
                >
                  Reserve <ChevronRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ITINERARY ───────────────────────────────────────────────────────────────

const Itinerary = () => {
  const steps = [
    { time: '15:00', title: 'Hotel Pickup', desc: 'Your driver arrives in a clean, AC\'d Land Cruiser. Free pickup from any Dubai hotel, apartment, or area. WhatsApp confirmation 1 hour before.' },
    { time: '16:00', title: 'Dune Bashing · Lehbab', desc: '30–40 minutes of exhilarating off-road driving across the red dunes of Lehbab — Dubai\'s premier safari zone. Driver stops for photo breaks at peak dunes.' },
    { time: '17:30', title: 'Sunset, Camel & Sandboarding', desc: 'Golden hour at the highest dune — bring your camera. Short camel rides and sandboarding before heading to camp. Roughly 30 minutes here.' },
    { time: '18:15', title: 'Camp Welcome', desc: 'Arabic coffee, dates, and welcome drinks at the traditional Bedouin camp. Henna for ladies, falcon photo opportunities, and shisha lounge.' },
    { time: '19:00', title: 'BBQ Buffet + Live Shows', desc: 'Open buffet — grilled meats, vegetarian options, salads, Arabic mezze, and dessert. Tanura, belly dance, and fire shows perform during dinner.' },
    { time: '21:30', title: 'Drop-Off at Your Hotel', desc: 'Same driver, same Land Cruiser, straight back to your hotel or pickup point. Most guests are home by 10:00 PM.' },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      '.itinerary-step',
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="itinerary" className="py-14 sm:py-20 md:py-28 bg-[#FAF9F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
          {/* Left: header */}
          <div className="md:w-1/3 md:sticky md:top-32 md:self-start">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-4">Itinerary · What to expect</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#1E2316] leading-tight mb-4 sm:mb-6">
              Your safari,<br />minute by minute.
            </h2>
            <p className="text-stone text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8">
              Six stops, six hours, mapped from 14 years of running evening safaris in Lehbab.
            </p>

            <div className="bg-sand/60 rounded-2xl p-5 sm:p-6 border border-sand">
              <h4 className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-3 sm:mb-4">What's included</h4>
              {[
                'Free hotel pickup & drop-off',
                'Land Cruiser dune bashing',
                'Camel ride + sandboarding',
                'BBQ buffet (veg + non-veg)',
                'Unlimited soft drinks & water',
                'Tanura, belly dance, fire shows',
                'Free henna for ladies',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[#1E2316] py-1.5 border-b border-sand last:border-0">
                  <CheckCircle size={11} className="text-safari-orange shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:w-2/3">
            {steps.map((step, i) => (
              <div key={i} className="itinerary-step opacity-0 flex gap-4 sm:gap-6 mb-6 sm:mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E2316] flex items-center justify-center shrink-0">
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#FAF9F8]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-sand mt-2" />}
                </div>
                <div className="pb-6 sm:pb-8 flex-1">
                  <div className="font-mono text-[10.5px] sm:text-[11px] tracking-wider text-safari-orange mb-1">{step.time}</div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1E2316] mb-1.5 sm:mb-2">{step.title}</h3>
                  <p className="text-stone text-[13px] sm:text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────

const HowItWorks = () => {
  const steps = [
    { n: '01', title: 'Pick your package', desc: 'Compare evening safaris, short tours, or self-drive. Nine packages from AED 35 to AED 349.' },
    { n: '02', title: 'Message us direct', desc: 'Tell us the date, package, and number of guests. WhatsApp or online form — no account needed.' },
    { n: '03', title: 'Get confirmation in 5 mins', desc: 'We confirm pickup time, driver name, and contact — all on WhatsApp. Zero deposit, free cancellation up to 24h.' },
    { n: '04', title: 'Pickup at your hotel', desc: 'Free pickup from any Dubai hotel or area. Pay the driver on the day. Dunes by sunset.' },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-sand/50 border-y border-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-12 reveal">
          <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-4">How it works · 4 steps</div>
          <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#1E2316] leading-tight">
            How to book a<br />Dubai desert safari.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="reveal">
              <div className="font-mono text-4xl sm:text-5xl font-light text-[#1E2316]/10 mb-2 sm:mb-4">{s.n}</div>
              <h3 className="font-serif text-lg sm:text-xl text-[#1E2316] mb-1.5 sm:mb-2">{s.title}</h3>
              <p className="font-mono text-[11.5px] sm:text-[12px] text-stone leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 flex justify-center">
          <a href="https://wa.me/971559445338" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1E2316] text-[#FAF9F8] font-mono text-[11.5px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-safari-olive transition-all">
            <MessageCircle size={15} /> WhatsApp us now
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── REVIEWS ─────────────────────────────────────────────────────────────────

const Reviews = () => {
  const reviews = [
    {
      text: 'Best dune bash in Dubai. Booked direct via WhatsApp, confirmed in 3 minutes. Driver was on time, BBQ was great, falcon photo was a highlight. Saved AED 30 vs Klook quote.',
      name: 'James R.',
      origin: 'UK',
      stars: 5,
    },
    {
      text: 'Honestly nervous booking without paying upfront, but DDV delivered. Driver Khalid was patient with my kids, dune bashing was thrilling but safe. The traditional camp was beautiful at sunset.',
      name: 'Sarah M.',
      origin: 'Australia',
      stars: 5,
    },
    {
      text: 'We did the self-drive option. Best decision. They lead the convoy, you drive your own 4×4 in the dunes — incredible feeling. Camp at the end was worth every dirham.',
      name: 'Pavel K.',
      origin: 'Russia',
      stars: 5,
    },
    {
      text: 'Did the sunrise short tour with my fiancée — proposed at the dunes. They knew about the plan and parked us at the perfect spot. Photos came out unreal. Worth every dirham.',
      name: 'Marco L.',
      origin: 'Italy',
      stars: 5,
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#1E2316] text-[#FAF9F8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div>
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#FAF9F8]/40 uppercase mb-2 sm:mb-4">What guests say · 4.9 stars</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Real reviews,<br /><em className="text-safari-orange italic">verified guests.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[#D96B27] text-[#D96B27]" />
              ))}
            </div>
            <div className="font-mono text-[10.5px] sm:text-[11px] text-[#FAF9F8]/40">401+ verified Google reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="reveal bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-8 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex gap-0.5 mb-4 sm:mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={12} className="fill-[#D96B27] text-[#D96B27]" />
                ))}
              </div>
              <p className="text-[#FAF9F8]/75 text-[13.5px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-safari-orange/20 flex items-center justify-center font-mono text-[11px] sm:text-[12px] text-safari-orange font-medium">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-mono text-[11.5px] sm:text-[12px] text-[#FAF9F8]/80">{r.name}</div>
                  <div className="font-mono text-[9.5px] sm:text-[10px] text-[#FAF9F8]/40">{r.origin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <a href="https://g.page/r/dubaidesertventures/review" className="font-mono text-[11.5px] sm:text-[12px] tracking-wider text-[#FAF9F8]/50 hover:text-safari-orange transition-colors border-b border-[#FAF9F8]/20 hover:border-safari-orange pb-0.5">
            Read all 401 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: 'Why are you cheaper than Viator or GetYourGuide?', a: "Because there's no reseller between you and us. OTA platforms take 20–30% commission, which operators either absorb or fold into the price. We pass that difference to you directly." },
    { q: 'Is dune bashing safe for children or elderly passengers?', a: "Children under 3 aren't permitted in the dune-bashing segment. For passengers with back or neck issues, pregnancy, or mobility concerns, we offer a 'soft drive' option on request." },
    { q: "What's the cancellation policy?", a: "There isn't one, because there's no advance payment. If your plans change, message us. We don't take card holds or deposits, so there's nothing to refund." },
    { q: 'What should I wear to a desert safari?', a: "Comfortable, breathable clothes work well. Bring a scarf for dust, sunglasses, and sunscreen. A light jacket for November–February evenings. Sandals or closed shoes." },
    { q: 'Do you offer hotel pickup from all Dubai areas?', a: "Yes — free pickup from any Dubai hotel, apartment, or area. We cover JBR, Downtown, Business Bay, Deira, and all Dubai tourist zones at no extra cost." },
    { q: 'Is the BBQ suitable for vegetarians?', a: "Absolutely. Our BBQ buffet includes a full vegetarian spread alongside grilled meats — salads, Arabic mezze, bread, and dessert. Just let us know when booking." },
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-[#FAF9F8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-14 reveal">
          <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-4">Common questions</div>
          <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#1E2316] tracking-tight">
            Questions worth<br />answering up front.
          </h2>
        </div>
        <div className="border-t border-sand">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-sand">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-3 sm:gap-6 py-5 sm:py-7 text-left group cursor-pointer"
              >
                <span className="font-mono text-[10.5px] sm:text-[11px] text-stone w-5 sm:w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-base sm:text-xl md:text-2xl flex-1 text-[#1E2316] group-hover:text-safari-orange transition-colors">{faq.q}</span>
                <Plus size={16} className={`text-stone transition-all duration-300 shrink-0 ${open === i ? 'rotate-45 text-safari-orange' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] pb-5 sm:pb-7' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="pl-8 sm:pl-12 pr-4 sm:pr-10">
                    <p className="text-[13.5px] sm:text-[15px] text-stone leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-sand/50 rounded-2xl border border-sand">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-safari-orange shrink-0" />
            <p className="text-[13px] sm:text-[14px] text-stone">Got a question not listed here? Message us on WhatsApp.</p>
          </div>
          <a href="https://wa.me/971559445338" className="shrink-0 font-mono text-[11px] tracking-wider text-safari-orange hover:text-safari-orange-hover transition-colors border-b border-safari-orange/30">
            WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── FINAL CTA ───────────────────────────────────────────────────────────────

const FinalCTA = () => (
  <section id="contact" className="bg-[#1E2316] text-[#FAF9F8] py-14 sm:py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-start md:items-center">
      <div>
        <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-safari-orange uppercase mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
          Ready to book <span className="w-8 sm:w-12 h-px bg-safari-orange inline-block" />
        </div>
        <h2 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl tracking-tight mb-4 sm:mb-6 leading-tight">
          Skip the<br />markup.<br /><em className="italic text-safari-orange">Book direct.</em>
        </h2>
        <p className="text-[#FAF9F8]/55 text-[14px] sm:text-[15px] leading-relaxed mb-6 sm:mb-10 max-w-sm">
          Message us on WhatsApp with your date and package. We'll confirm availability, pickup time, and driver details within five minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="https://wa.me/971559445338" className="flex items-center justify-center gap-2.5 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[11.5px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-safari-orange/20">
            <MessageCircle size={15} /> WhatsApp Us
          </a>
          <a href="tel:+971559445338" className="flex items-center justify-center gap-2.5 border border-[#FAF9F8]/20 text-[#FAF9F8] hover:bg-[#FAF9F8]/5 font-mono text-[11.5px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all">
            <Phone size={15} /> +971 55 944 5338
          </a>
        </div>
      </div>

      <div className="border-t md:border-t-0 md:border-l border-[#FAF9F8]/10 pt-8 md:pt-0 pl-0 md:pl-12 w-full">
        <h4 className="font-mono text-[10px] sm:text-[11px] tracking-widest text-safari-orange uppercase mb-4 sm:mb-6">Operations</h4>
        <ul className="flex flex-col gap-4 sm:gap-5">
          {[
            { label: 'Hours', value: '08:00 – 23:00 GST Daily' },
            { label: 'WhatsApp', value: '+971 55 944 5338' },
            { label: 'Email', value: 'info@dubaidesertadv.com' },
            { label: 'Base', value: 'Lehbab Rd, Dubai, UAE' },
          ].map((row, i) => (
            <li key={i} className="flex items-start gap-3 sm:gap-4">
              <span className="font-mono text-[9.5px] sm:text-[10px] tracking-wider text-[#FAF9F8]/30 uppercase pt-0.5 w-18 sm:w-20 shrink-0">{row.label}</span>
              <span className="font-mono text-[12px] sm:text-[13px] text-[#FAF9F8]/70">{row.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-[#FAF9F8]/[0.04] rounded-xl border border-[#FAF9F8]/[0.08]">
          <div className="font-mono text-[9.5px] sm:text-[10px] tracking-widest text-[#FAF9F8]/30 uppercase mb-1 sm:mb-2">Certified & Licensed</div>
          <div className="font-mono text-[11.5px] sm:text-[12px] text-[#FAF9F8]/60">DET Licensed Operator · Since 2010</div>
          <div className="font-mono text-[11.5px] sm:text-[12px] text-[#FAF9F8]/60">Insured · Dubai Tourism Approved</div>
        </div>
      </div>
    </div>
  </section>
);

// ─── HOME PAGE CONTENT ───────────────────────────────────────────────────────
// Nav, Footer, MobileBar, and scroll hooks are provided by Layout.tsx via React Router.
// This component renders only the home-page sections.

export default function App() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatBanner />
      <Packages />
      <WhyUs />
      <VIPExperiences />
      <Itinerary />
      <HowItWorks />
      <Reviews />
      <Faq />
      <FinalCTA />
    </>
  );
}
