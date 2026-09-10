import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Check, Sparkles, MessageCircle, Star } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, BASE_URL } from '../data/schemaData';

export default function PrivateCampPage() {
  const whatsAppText = 'Hi! I am inquiring about booking the 100% Private Desert Camp Setup (AED 2,299). Please share available dates.';
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Private Camp' }];

  const privateCampSchema = {
    '@context': 'https://schema.org',
    '@type': ['TouristTrip', 'Product'],
    '@id': `${BASE_URL}/private-desert-setup`,
    name: '100% Private Desert Camp Setup Dubai',
    description: 'Exclusive private desert sanctuary on an isolated red dune with personal chef, fairy light canopy, telescope for stargazing, and bespoke five-star dining.',
    image: `${BASE_URL}/images/private-camp.webp`,
    offers: {
      '@type': 'Offer',
      price: '2299',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/private-desert-setup`,
      seller: {
        '@type': 'TravelAgency',
        name: 'Dubai Dune Tours',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '95',
      reviewCount: '95',
    },
  };

  return (
    <>
      <SEO
        title="Private Desert Camp Setup Dubai (AED 2,299) | Luxury Glamping & Chef"
        description="Exclusive secluded desert camp on an isolated red dune in Dubai. Dedicated private chef, romantic fairy light canopy, stargazing telescope & bespoke dining. Zero other guests."
        canonical="/private-desert-setup"
        ogImage="/images/private-camp.webp"
        ogType="product"
        schema={[getBreadcrumbSchema(breadcrumbs, '/private-desert-setup'), privateCampSchema]}
      />

      <PageHero
        dark={true}
        label="Exclusive Glamping · Isolated Private Dune"
        title="100% Private Desert"
        titleEm="Camp Setup"
        subtitle="Your own private desert sanctuary on an isolated red dune with a personal chef, fairy light canopy, and bespoke five-star dining. Zero other tourists."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink(whatsAppText) }}
        price="AED 2,299"
        priceNote="per group (Up to 8 guests)"
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src="/images/private-camp.webp"
                  alt="Private Desert Camp Setup"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#EA580C] text-white font-extrabold text-[11px] sm:text-xs px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1">
                  <Sparkles size={13} /> 100% EXCLUSIVE SECLUSION
                </div>
              </div>

              {/* Photo Highlights Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/desert-camp-night.webp" 
                    alt="Camp by Night" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Starlit Setup</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/bbq-buffet.webp" 
                    alt="Private Chef Feast" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Private Chef</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/camel-sunset.webp" 
                    alt="Sunset Camel Ride" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Private Sunset</span>
                </div>
              </div>

              {/* Inclusions Detail */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] mb-3 sm:mb-4">
                  What's Included in Your Private Sanctuary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    'Entire private desert campsite on an isolated high dune',
                    'Dedicated private live chef preparing customized multi-course BBQ',
                    'Romantic fairy light canopy, candle lanterns & luxury floor seating',
                    'Chauffeur-driven private luxury 4×4 Land Cruiser transfer',
                    'High-powered astronomical telescope for desert stargazing',
                    'Private campfire, marshmallows, hot Arabic tea and shisha',
                    'High-fidelity Bluetooth sound system for your own playlist',
                    'Zero other tourists or groups — absolute peace and seclusion',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-[#1E293B]">
                      <div className="w-5 h-5 rounded-full bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking Widget */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-[#EA580C] shadow-xl sticky top-28">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/10 px-2.5 py-1 rounded-full">
                    100% Private Setup
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star size={13} className="fill-amber-500" />
                    <span>5.0 (95+ reviews)</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                      AED 2,299
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#64748B]">/ group (up to 8)</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    ✓ Private Chef + Isolated Dune Camp Included
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] active:scale-98 text-white font-black text-sm py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#EA580C]/30 transition-all h-[48px]"
                >
                  <MessageCircle size={18} />
                  <span>Reserve on WhatsApp</span>
                </a>

                <div className="text-center mt-3.5">
                  <span className="text-[11px] text-[#64748B] font-semibold">
                    Custom arrangements available • Direct operator
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
