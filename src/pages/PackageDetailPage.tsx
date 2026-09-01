import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Check, Star, Clock, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { SAFARI_PACKAGES, getWhatsAppLink } from '../data/safariPackages';

export default function PackageDetailPage() {
  const { tier } = useParams<{ tier: string }>();

  const selectedPkg = SAFARI_PACKAGES.find((p) => p.slug === tier) || SAFARI_PACKAGES[0];

  return (
    <>
      <PageHero
        dark={true}
        label={`Dubai Desert Safari · Tier ${selectedPkg.tier}`}
        title={selectedPkg.title}
        subtitle={selectedPkg.tagline}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Packages', to: '/desert-safari' }, { label: selectedPkg.title }]}
        primaryCta={{ label: 'Instant WhatsApp Booking', href: getWhatsAppLink(selectedPkg.whatsAppText) }}
        price={`AED ${selectedPkg.price}`}
        priceNote="per person (No advance deposit)"
      />

      <section className="py-12 sm:py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Left 2 Columns: Image & Inclusions */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Feature Image Banner */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src={selectedPkg.image}
                  alt={selectedPkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-bold">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
                    <Clock size={15} className="text-[#EA580C]" /> {selectedPkg.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
                    <MapPin size={15} className="text-[#EA580C]" /> Lehbab High Red Dunes
                  </span>
                </div>
              </div>

              {/* Photo Highlights Strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/bbq-buffet.jpg" alt="Desert BBQ Buffet" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Live BBQ Feast</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/falcon-portrait.jpg" alt="Falcon Experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Falconry</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/tanoura-dance.jpg" alt="Live Arabian Shows" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Live Shows</span>
                </div>
              </div>

              {/* What is Included */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-4">
                  What's Included in {selectedPkg.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-[#1E293B]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-emerald-900">Direct Operator Guarantee</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 font-medium">Free Hotel Pickup • Pay on the Day • Zero Booking Fees</p>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink(selectedPkg.whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md"
                >
                  Confirm on WhatsApp →
                </a>
              </div>

            </div>

            {/* Right Column: Sticky Booking Widget */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#EA580C] shadow-xl sticky top-28">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/10 px-3 py-1 rounded-full">
                    Direct Rate
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star size={14} className="fill-amber-500" />
                    <span>4.9 (401+ reviews)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-[#94A3B8] line-through font-bold">
                    AED {selectedPkg.originalPrice}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-[#0F172A]">
                      AED {selectedPkg.price}
                    </span>
                    <span className="text-sm font-semibold text-[#64748B]">/ person</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    ✓ Free Hotel Pickup & Drop-off Included
                  </div>
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t border-slate-100 text-xs text-[#475569] font-medium">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" /> Pay cash or card to driver on arrival
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" /> Free cancellation up to 24h prior
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" /> Instant confirmation on WhatsApp
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(selectedPkg.whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-sm py-4 rounded-2xl shadow-xl shadow-[#EA580C]/30 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  <span>Reserve via WhatsApp</span>
                </a>

                <div className="text-center mt-4">
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
