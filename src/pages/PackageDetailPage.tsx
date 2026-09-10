import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Check, Star, Clock, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { SAFARI_PACKAGES, getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, getTouristTripSchema, BASE_URL } from '../data/schemaData';

export default function PackageDetailPage() {
  const { tier } = useParams<{ tier: string }>();

  const selectedPkg = SAFARI_PACKAGES.find((p) => p.slug === tier) || SAFARI_PACKAGES[0];
  const canonicalUrl = `${BASE_URL}/evening-safari/${selectedPkg.slug}`;
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Packages', to: '/desert-safari' },
    { label: selectedPkg.title },
  ];

  return (
    <>
      <SEO
        title={`${selectedPkg.title} Dubai (AED ${selectedPkg.price}) | Direct Operator Safari`}
        description={`${selectedPkg.tagline} Inclusions: ${selectedPkg.includes.slice(0, 4).join(', ')}. Free hotel pickup in Dubai, zero deposit & pay on arrival.`}
        canonical={`/evening-safari/${selectedPkg.slug}`}
        ogImage={selectedPkg.image}
        ogType="product"
        schema={[
          getBreadcrumbSchema(breadcrumbs, `/evening-safari/${selectedPkg.slug}`),
          getTouristTripSchema(selectedPkg, canonicalUrl),
        ]}
      />

      <PageHero
        dark={true}
        label={`Dubai Desert Safari · Tier ${selectedPkg.tier}`}
        title={selectedPkg.title}
        subtitle={selectedPkg.tagline}
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Instant WhatsApp Booking', href: getWhatsAppLink(selectedPkg.whatsAppText) }}
        price={`AED ${selectedPkg.price}`}
        priceNote="per person (No deposit)"
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            
            {/* Left 2 Columns: Image & Inclusions */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              
              {/* Feature Image Banner */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src={selectedPkg.image}
                  alt={selectedPkg.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white text-[11px] sm:text-sm font-bold">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl">
                    <Clock size={14} className="text-[#EA580C]" /> {selectedPkg.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl">
                    <MapPin size={14} className="text-[#EA580C]" /> Lehbab High Red Dunes
                  </span>
                </div>
              </div>

              {/* Photo Highlights Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/bbq-buffet.webp" 
                    alt="Desert BBQ Buffet" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Live BBQ</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/falcon-portrait.webp" 
                    alt="Falcon Experience" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Falconry</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img 
                    src="/images/tanoura-dance.webp" 
                    alt="Live Arabian Shows" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="absolute bottom-1 left-1.5 sm:bottom-1.5 sm:left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">Live Shows</span>
                </div>
              </div>

              {/* What is Included */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] mb-3 sm:mb-4">
                  What's Included in {selectedPkg.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {selectedPkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-[#1E293B]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 text-center sm:text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-emerald-900">Direct Operator Guarantee</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 font-medium">Free Hotel Pickup • Pay on Arrival • Zero Booking Fees</p>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink(selectedPkg.whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center shrink-0 bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md h-[46px] flex items-center justify-center"
                >
                  Confirm on WhatsApp →
                </a>
              </div>

            </div>

            {/* Right Column: Sticky Booking Widget */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-[#EA580C] shadow-xl sticky top-28">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/10 px-2.5 py-1 rounded-full">
                    Direct Rate
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star size={13} className="fill-amber-500" />
                    <span>4.9 (401+ reviews)</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-xs text-[#94A3B8] line-through font-bold">
                    AED {selectedPkg.originalPrice}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                      AED {selectedPkg.price}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#64748B]">/ person</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    ✓ Free Hotel Pickup & Drop-off Included
                  </div>
                </div>

                <div className="space-y-2.5 mb-5 pt-3.5 border-t border-slate-100 text-xs text-[#475569] font-medium">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0" /> Pay cash or card to driver on arrival
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0" /> Free cancellation up to 24h prior
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0" /> Instant confirmation on WhatsApp
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(selectedPkg.whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] active:scale-98 text-white font-black text-sm py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#EA580C]/30 transition-all h-[48px]"
                >
                  <MessageCircle size={18} />
                  <span>Reserve via WhatsApp</span>
                </a>

                <div className="text-center mt-3.5">
                  <span className="text-[11px] text-[#64748B] font-semibold">
                    No card required • Reply in under 3 minutes
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
