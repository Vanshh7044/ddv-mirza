import { Check, MessageCircle, Crown, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../data/safariPackages';

export default function VIPSection() {
  const vipExperiences = [
    {
      title: 'VIP Traditional Arabic Safari',
      subtitle: 'Hands-on falcon training, private Majlis tent, and 5-course gourmet dinner.',
      price: 'AED 999',
      unit: '/ 2 adults (Private)',
      image: '/images/vip-majlis.webp',
      badge: 'POPULAR VIP',
      link: '/vip-traditional-arabic',
      whatsAppText: 'Hi! I want to book the VIP Traditional Arabic Safari (AED 999 for 2 adults). Please confirm date.',
      highlights: [
        'Private Land Cruiser for your party only',
        'Hands-on falcon training session',
        'Private air-conditioned Majlis tent',
        '5-Course Arabic table-service dinner',
        'Tanoura, belly dance & fire shows',
        'Henna art & shisha lounge included',
      ],
    },
    {
      title: 'Private Desert Camp Setup',
      subtitle: 'Secluded private dune, personal chef, romantic lighting. Zero other tourists.',
      price: 'AED 2,299',
      unit: '/ group (Up to 8 guests)',
      image: '/images/private-camp.webp',
      badge: '100% EXCLUSIVE',
      link: '/private-desert-setup',
      whatsAppText: 'Hi! I am inquiring about booking the 100% Private Desert Camp Setup (AED 2,299).',
      highlights: [
        'Entire private camp on an isolated dune',
        'Dedicated private chef & customized menu',
        'Romantic fairy light canopy & candle decor',
        'Luxury Land Cruiser & private chauffeur',
        'Telescope for stargazing & private sound',
        'Perfect for proposals, VIPs & celebrations',
      ],
    },
  ];

  return (
    <section id="vip" className="py-10 sm:py-16 md:py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-500/30">
            <Crown size={13} /> Ultra-Luxury & Bespoke
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2.5">
            VIP & Private Desert Experiences
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-medium">
            For guests who prefer absolute privacy, dedicated butlers, hands-on falconry, and customized five-star dining.
          </p>
        </div>

        {/* 2 VIP Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {vipExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col group hover:border-amber-500/50 transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />
                <span className="absolute top-3 left-3 bg-amber-500 text-black font-extrabold text-[11px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-lg shadow-lg flex items-center gap-1">
                  <Sparkles size={11} /> {exp.badge}
                </span>
                <div className="absolute bottom-3 left-3.5 right-3.5">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-7 flex flex-col flex-1">
                <p className="text-xs sm:text-sm text-slate-300 font-medium mb-4 sm:mb-6">
                  {exp.subtitle}
                </p>

                {/* Inclusions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-5 sm:mb-6 flex-1">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Booking Button */}
                <div className="pt-3.5 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">
                      {exp.price}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {exp.unit}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(exp.whatsAppText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-98 text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 h-[48px]"
                  >
                    <MessageCircle size={16} />
                    <span>Reserve on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
