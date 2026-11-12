import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Check, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, PRICES, aed, SAFARI_PACKAGES } from '../data/safariPackages';
import { getBreadcrumbSchema } from '../data/schemaData';

import { srcSet, CARD_SIZES } from '../utils/img';
const SD_PACKAGES = SAFARI_PACKAGES.filter((p) => p.category === 'selfdrive').map((p) => ({
  title: p.title,
  price: p.price,
  desc: p.tagline,
  image: p.image!,
  includes: p.includes,
}));

export default function SelfDrivePage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Self-Drive' }];

  return (
    <>
      <SEO
        title={`Self-Drive Desert Safari Dubai (From ${aed(PRICES.selfDrive)}) | Drive to Our Camp`}
        description="Drive your own car to our desert camp for camel rides, sandboarding, henna, BBQ buffet dinner and live shows. Standard and Premium options. No hotel pickup."
        canonical="/self-drive"
        ogImage="/images/real/land-cruiser-sunset.webp"
        schema={getBreadcrumbSchema(breadcrumbs, '/self-drive')}
      />
      <PageHero
        dark={true}
        label="Self-Drive Desert Safari · Drive to Our Camp"
        title="Drive Yourself"
        titleEm="to the Desert Camp"
        subtitle="Drive your own vehicle straight to our desert camp for an evening of camel rides, sandboarding, BBQ dinner and live shows. No hotel pickup or drop-off."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink('Hi! I want to book a Self-Drive Desert Safari. Please send the camp location and timing.') }}
        price={aed(PRICES.selfDrive)}
        priceNote="per person"
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
            {SD_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-sand shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    srcSet={srcSet(pkg.image)}
                    sizes={CARD_SIZES}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md">
                    Self-Drive
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1.5">{pkg.title}</h2>
                  <p className="text-xs sm:text-sm text-[#475569] font-medium mb-3 sm:mb-4 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 py-2.5 sm:py-3 border-y border-slate-100 mb-4 sm:mb-6 flex-1">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#1E293B]">
                        <Check size={12} className="text-emerald-700 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2.5 pt-2">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#0F172A]">{aed(pkg.price)} <span className="text-[10px] font-medium text-[#56657A]">/ person</span></div>
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${pkg.title} (${aed(pkg.price)}/person). Please send the camp location and timing.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#C2410C] hover:bg-[#9A3412] active:scale-95 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-md transition-all h-[44px]"
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
