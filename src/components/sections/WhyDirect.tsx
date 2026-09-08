import { ShieldCheck, Banknote, Clock, Award } from 'lucide-react';

export default function WhyDirect() {
  const perks = [
    {
      icon: Banknote,
      title: 'No 30% Reseller Markup',
      desc: 'Booking portals like Viator or GetYourGuide take high commissions. Book direct with the actual operator and save AED 30+ per person.',
    },
    {
      icon: Clock,
      title: 'Pay On The Day (Zero Deposit)',
      desc: 'Reserve your date for free with zero advance payment. Pay cash or card to your driver on the day of the safari. Free 24h cancellation.',
    },
    {
      icon: ShieldCheck,
      title: 'DET Licensed Since 2010',
      desc: '14+ years of operating our own Land Cruiser fleet, private desert camps, and professional English/Arabic licensed safari guides.',
    },
    {
      icon: Award,
      title: 'WhatsApp Direct in 4 Languages',
      desc: 'Direct WhatsApp line to our Dubai operations dispatch in English, Arabic, Russian, and French. Response guaranteed in under 3 minutes.',
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white border-y border-sand/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-1.5">
            Direct Operator Guarantee
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-2.5">
            Why Dubai Locals Book Direct
          </h2>
          <p className="text-xs sm:text-base text-[#475569] font-medium">
            Same luxury 4×4 Land Cruisers. Same high Lehbab red dunes. Transparent direct pricing.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {perks.map((p, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-[#F8F6F0] border border-sand/70 hover:border-[#EA580C]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mb-3 sm:mb-4">
                <p.icon size={22} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5">{p.title}</h3>
              <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
