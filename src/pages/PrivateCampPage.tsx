import PageHero from '../components/PageHero';
import { Check, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';

export default function PrivateCampPage() {
  const whatsAppText = 'Hi! I am inquiring about booking the 100% Private Desert Camp Setup (AED 2,299). Please share available dates.';

  return (
    <>
      <PageHero
        dark={true}
        label="Exclusive Glamping · Isolated Private Dune"
        title="100% Private Desert"
        titleEm="Camp Setup"
        subtitle="Your own private desert sanctuary on an isolated red dune with a personal chef, fairy light canopy, and bespoke five-star dining. Zero other tourists."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Private Camp' }]}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink(whatsAppText) }}
        price="AED 2,299"
        priceNote="per group (Up to 8 guests)"
      />

      <section className="py-12 sm:py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src="/images/private-camp.jpg"
                  alt="Private Desert Camp Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#EA580C] text-white font-extrabold text-xs px-3 py-1 rounded-lg shadow-lg flex items-center gap-1">
                  <Sparkles size={14} /> 100% EXCLUSIVE SECLUSION
                </div>
              </div>

              {/* Photo Highlights Strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/desert-camp-night.jpg" alt="Camp by Night" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Starlit Setup</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/bbq-buffet.jpg" alt="Private Chef Feast" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Private Chef</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand">
                  <img src="/images/henna-shisha.jpg" alt="Boho Majlis" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-1.5 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">Boho Majlis</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4">
                  Bespoke Private Desert Glamping
                </h3>
                <p className="text-sm sm:text-base text-[#475569] font-medium leading-relaxed mb-6">
                  Perfect for romantic marriage proposals, VIP family gatherings, anniversaries, and exclusive corporate retreats. We erect a private luxury camp on a secluded dune with dedicated staff catering exclusively to your group.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    '100% Private setup on isolated dune (no other guests)',
                    'Dedicated private chef with custom 5-course menu',
                    'Romantic fairy light canopy, Moroccan rugs & boho decor',
                    'Private luxury Land Cruiser & chauffeur service',
                    'High-powered telescope for desert stargazing',
                    'Bluetooth sound system & ambient candle lighting',
                    'Personal host and butler service throughout',
                    'Up to 6 hours of exclusive private camp access',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-[#1E293B]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Card */}
            <div className="lg:col-span-1">
              <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl sticky top-28">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-3">
                  <Sparkles size={14} />
                  <span>Ultra-Exclusive Experience</span>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-slate-400 uppercase font-bold">Group Package (Up to 8 guests)</div>
                  <div className="text-4xl font-black text-white mt-1">AED 2,299</div>
                  <div className="text-xs text-slate-400 mt-1">Includes private chef, setup & transport</div>
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t border-slate-800 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" /> Complete privacy guaranteed
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" /> Custom menu & decor tailored to you
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" /> Zero advance payment required
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-sm py-4 rounded-2xl shadow-xl shadow-[#EA580C]/25 transition-all"
                >
                  <MessageCircle size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
