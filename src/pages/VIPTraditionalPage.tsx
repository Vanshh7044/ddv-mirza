import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Check, Star, MessageCircle, Crown } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, BASE_URL } from '../data/schemaData';

export default function VIPTraditionalPage() {
  const whatsAppText = 'Hi! I want to book the VIP Traditional Arabic Safari (AED 999 for 2 adults). Please confirm availability.';
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'VIP Traditional' }];

  const vipSchema = {
    '@context': 'https://schema.org',
    '@type': ['TouristTrip', 'Product'],
    '@id': `${BASE_URL}/vip-traditional-arabic`,
    name: 'VIP Traditional Arabic Desert Safari Dubai',
    description: 'Exclusive private Land Cruiser, hands-on master falconry session, private air-conditioned Majlis tent, and 5-course table service Arabic feast under the stars.',
    image: `${BASE_URL}/images/vip-majlis.webp`,
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/vip-traditional-arabic`,
      seller: {
        '@type': 'TravelAgency',
        name: 'Dubai Dune Tours',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '120',
      reviewCount: '120',
    },
  };

  return (
    <>
      <SEO
        title="VIP Traditional Arabic Desert Safari Dubai (AED 999/2 Guests) | Private Majlis"
        description="Luxury VIP desert safari in Dubai: 100% private 4x4, personal falcon trainer session, dedicated AC VIP Majlis tent & 5-course gourmet table service dinner."
        canonical="/vip-traditional-arabic"
        ogImage="/images/vip-majlis.webp"
        ogType="product"
        schema={[getBreadcrumbSchema(breadcrumbs, '/vip-traditional-arabic'), vipSchema]}
      />

      <PageHero
        dark={true}
        label="Luxury Heritage Experience · VIP Majlis"
        title="VIP Traditional Arabic"
        titleEm="Desert Safari"
        subtitle="Exclusive private Land Cruiser, hands-on master falconry session, private Majlis tent, and 5-course table service Arabic feast under the stars."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Reserve on WhatsApp', href: getWhatsAppLink(whatsAppText) }}
        price="AED 999"
        priceNote="for 2 adults (Private 4×4)"
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src="/images/vip-majlis.webp"
                  alt="VIP Traditional Arabic Majlis"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-black font-extrabold text-[11px] sm:text-xs px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1">
                  <Crown size={13} /> VIP ROYAL SERVICE
                </div>
              </div>

              {/* Photo Highlights Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/falcon-portrait.webp" 
                    alt="Hunting Falcon" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async"
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Falconry</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/henna-shisha.webp" 
                    alt="VIP Majlis Lounge" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async"
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">VIP Majlis</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/tanoura-dance.webp" 
                    alt="Tanoura Shows" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async"
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Night Shows</span>
                </div>
              </div>

              {/* Inclusions Detail */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] mb-3 sm:mb-4">
                  Exclusive VIP Inclusions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    '100% Private Toyota Land Cruiser pickup & drop-off',
                    'High red dune bashing in Lehbab by senior master driver',
                    'Interactive master falcon flight training session & photo',
                    'Private air-conditioned carpeted VIP Majlis seating tent',
                    '5-Course Arabic table-service gourmet banquet dinner',
                    'Live Tanoura, belly dance, and fire eater performances',
                    'Camel riding, sandboarding, and traditional henna art',
                    'Complimentary premium shisha pipes served to table',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-[#1E293B]">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
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
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-amber-500 shadow-xl sticky top-28">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full">
                    VIP Heritage Suite
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star size={13} className="fill-amber-500" />
                    <span>5.0 (120+ reviews)</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                      AED 999
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#64748B]">/ 2 adults</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    ✓ Private Land Cruiser + Majlis Tent Included
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-98 text-black font-black text-sm py-3.5 sm:py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all h-[48px]"
                >
                  <MessageCircle size={18} />
                  <span>Reserve VIP on WhatsApp</span>
                </a>

                <div className="text-center mt-3.5">
                  <span className="text-[11px] text-[#64748B] font-semibold">
                    Pay on arrival • Direct operator rate
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
