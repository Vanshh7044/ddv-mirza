import PageHero from '../components/PageHero';
import { Check, Star, MessageCircle, Crown } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';

export default function VIPTraditionalPage() {
  const whatsAppText = 'Hi! I want to book the VIP Traditional Arabic Safari (AED 999 for 2 adults). Please confirm availability.';

  return (
    <>
      <PageHero
        dark={true}
        label="Luxury Heritage Experience · VIP Majlis"
        title="VIP Traditional Arabic"
        titleEm="Desert Safari"
        subtitle="Exclusive private Land Cruiser, hands-on master falconry session, private Majlis tent, and 5-course table service Arabic feast under the stars."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'VIP Traditional' }]}
        primaryCta={{ label: 'Reserve on WhatsApp', href: getWhatsAppLink(whatsAppText) }}
        price="AED 999"
        priceNote="for 2 adults (Private 4×4)"
      />

      <section className="py-12 sm:py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src="/images/vip-majlis.jpg"
                  alt="VIP Traditional Arabic Majlis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-black font-extrabold text-xs px-3 py-1 rounded-lg shadow-lg flex items-center gap-1">
                  <Crown size={14} /> VIP ROYAL SERVICE
                </div>
              </div>

              {/* Photo Highlights Strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/falcon-portrait.jpg" alt="Hunting Falcon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Falconry Session</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/henna-shisha.jpg" alt="VIP Majlis Lounge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Private Majlis</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/bbq-buffet.jpg" alt="Gourmet Dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Gourmet Dinner</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4">
                  The Complete Royal Bedouin Experience
                </h3>
                <p className="text-sm sm:text-base text-[#475569] font-medium leading-relaxed mb-6">
                  Immerse yourself in authentic Arabian luxury. From private hotel chauffeur pickup to customized five-star table service, your party will enjoy dedicated VIP Majlis seating without crowds.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    'Private 4×4 Land Cruiser for your party only',
                    'Interactive falconry session with Master Falconer',
                    'Dedicated air-conditioned VIP Majlis tent',
                    '5-Course Arabic table-service dinner with fresh grill',
                    'Tanoura, fire dancer & belly dance performances',
                    'Premium shisha & Arabic Gahwa coffee service',
                    'Henna art, camel ride & sandboarding',
                    'Chauffeur pickup from any Dubai location',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-[#1E293B]">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl sticky top-28">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-3">
                  <Star size={14} className="fill-amber-400" />
                  <span>5.0 Star Rated Luxury Tour</span>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-slate-400 uppercase font-bold">Total Price for 2 Guests</div>
                  <div className="text-4xl font-black text-amber-400 mt-1">AED 999</div>
                  <div className="text-xs text-slate-400 mt-1">Extra guests: AED 250 / adult</div>
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t border-slate-800 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400" /> 100% Private Land Cruiser & Driver
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400" /> Hands-on Falcon Flight Session
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400" /> Zero Advance Deposit • Pay on Arrival
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all"
                >
                  <MessageCircle size={18} />
                  <span>Reserve VIP on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
