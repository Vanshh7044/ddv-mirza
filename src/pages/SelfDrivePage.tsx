import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Check, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema } from '../data/schemaData';

const SD_PACKAGES = [
  {
    title: 'Self-Drive Standard',
    price: 35,
    originalPrice: 49,
    desc: 'Lead-the-convoy format through Lehbab. Drive your own 4×4 with guide lead and camp BBQ included.',
    image: '/images/dune-bashing.webp',
    includes: ['Lead convoy guide vehicle', 'Satellite radio navigation', 'Camp entry & entertainment', 'BBQ dinner buffet', 'Camel ride & sandboarding'],
  },
  {
    title: 'Self-Drive Premium',
    price: 60,
    originalPrice: 79,
    desc: 'Convoy format with reserved VIP camp seating and upgraded BBQ buffet dinner.',
    image: '/images/quad-buggy.webp',
    includes: ['Lead convoy guide vehicle', 'VIP reserved table seating', 'Upgraded BBQ live grill', 'Camp entry & fire show', 'Camel ride & sandboarding'],
  },
  {
    title: 'Self-Drive VIP',
    price: 75,
    originalPrice: 99,
    desc: 'The complete self-drive package with VIP majlis access and falconry photo opportunity.',
    image: '/images/vip-majlis.webp',
    includes: ['Lead convoy guide vehicle', 'VIP Majlis camp access', 'Falcon photo opportunity', 'Premium BBQ & shisha lounge', 'All shows and entertainment'],
  },
];

export default function SelfDrivePage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Self-Drive' }];

  return (
    <>
      <SEO
        title="Self-Drive Desert Safari Dubai (From AED 35) | Bring Your Own 4x4"
        description="Drive your own 4WD / SUV in the high red dunes of Lehbab behind our expert guide convoy. Includes desert camp entry, shows & BBQ dinner buffet. Pay on arrival."
        canonical="/self-drive"
        ogImage="/images/dune-bashing.webp"
        schema={getBreadcrumbSchema(breadcrumbs, '/self-drive')}
      />
      <PageHero
        dark={true}
        label="Self-Drive Desert Safari · Lehbab Base"
        title="Drive Your Own 4×4"
        titleEm="in the Dunes"
        subtitle="Bring your 4WD or SUV and follow our certified lead convoy guide through the breathtaking dunes of Lehbab. Includes desert camp entry and BBQ."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink('Hi! I want to book the Self-Drive Safari Convoy.') }}
        price="AED 35"
        priceNote="per person"
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {SD_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-sand shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md">
                    Drive Your 4×4
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1.5">{pkg.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-medium mb-3 sm:mb-4 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 py-2.5 sm:py-3 border-y border-slate-100 mb-4 sm:mb-6 flex-1">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#1E293B]">
                        <Check size={12} className="text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2.5 pt-2">
                    <div>
                      <div className="text-[11px] text-[#94A3B8] line-through font-bold">AED {pkg.originalPrice}</div>
                      <div className="text-xl sm:text-2xl font-black text-[#0F172A]">AED {pkg.price} <span className="text-[10px] font-medium text-[#64748B]">/ person</span></div>
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} (AED ${pkg.price}/person). Please send meeting point location.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-95 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-md transition-all h-[44px]"
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
