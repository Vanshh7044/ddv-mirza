import PageHero from '../components/PageHero';
import { Check, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';

const SD_PACKAGES = [
  {
    title: 'Self-Drive Standard',
    price: 35,
    originalPrice: 49,
    desc: 'Lead-the-convoy format through Lehbab. Drive your own 4×4 with guide lead and camp BBQ included.',
    image: '/images/dune-bashing.jpg',
    includes: ['Lead convoy guide vehicle', 'Satellite radio navigation', 'Camp entry & entertainment', 'BBQ dinner buffet', 'Camel ride & sandboarding'],
  },
  {
    title: 'Self-Drive Premium',
    price: 60,
    originalPrice: 79,
    desc: 'Convoy format with reserved VIP camp seating and upgraded BBQ buffet dinner.',
    image: '/images/quad-buggy.jpg',
    includes: ['Lead convoy guide vehicle', 'VIP reserved table seating', 'Upgraded BBQ live grill', 'Camp entry & fire show', 'Camel ride & sandboarding'],
  },
  {
    title: 'Self-Drive VIP',
    price: 75,
    originalPrice: 99,
    desc: 'The complete self-drive package with VIP majlis access and falconry photo opportunity.',
    image: '/images/vip-majlis.jpg',
    includes: ['Lead convoy guide vehicle', 'VIP Majlis camp access', 'Falcon photo opportunity', 'Premium BBQ & shisha lounge', 'All shows and entertainment'],
  },
];

export default function SelfDrivePage() {
  return (
    <>
      <PageHero
        dark={true}
        label="Self-Drive Desert Safari · Lehbab Base"
        title="Drive Your Own 4×4"
        titleEm="in the Dunes"
        subtitle="Bring your 4WD or SUV and follow our certified lead convoy guide through the breathtaking dunes of Lehbab. Includes desert camp entry and BBQ."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Self-Drive' }]}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink('Hi! I want to book the Self-Drive Safari Convoy.') }}
        price="AED 35"
        priceNote="per person"
      />

      <section className="py-12 sm:py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SD_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-sand shadow-md hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-lg">
                    Drive Your 4×4
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">{pkg.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-medium mb-4 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-2 py-3 border-y border-slate-100 mb-6 flex-1">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#1E293B]">
                        <Check size={13} className="text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div>
                      <div className="text-xs text-[#94A3B8] line-through font-bold">AED {pkg.originalPrice}</div>
                      <div className="text-2xl font-black text-[#0F172A]">AED {pkg.price} <span className="text-xs font-medium text-[#64748B]">/ person</span></div>
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} (AED ${pkg.price}/person). Please send meeting point location.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs px-4 py-3 rounded-xl shadow-md transition-all"
                    >
                      <MessageCircle size={15} /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
