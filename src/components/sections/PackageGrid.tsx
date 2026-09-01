import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { SAFARI_PACKAGES, getWhatsAppLink, SafariPackage } from '../../data/safariPackages';

export default function PackageGrid() {
  const [activeTab, setActiveTab] = useState<'evening' | 'short' | 'all'>('evening');

  const filteredPackages = activeTab === 'all' 
    ? SAFARI_PACKAGES 
    : SAFARI_PACKAGES.filter((p) => {
        if (activeTab === 'evening') return p.category === 'evening';
        if (activeTab === 'short') return p.category === 'short' || p.category === 'selfdrive';
        return true;
      });

  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 bg-[#F8F6F0] border-t border-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EA580C]/10 text-[#EA580C] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles size={13} className="text-[#EA580C]" /> Direct Operator Rates · No Hidden Fees
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Select Your Desert Safari
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
            All evening packages include 4×4 dune bashing, camel rides, sandboarding, live entertainment, and full BBQ buffet dinner with free hotel pickup.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 p-1.5 bg-white rounded-2xl border border-sand/80 shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('evening')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                activeTab === 'evening'
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              ⭐ Evening Safaris (Most Popular)
            </button>
            <button
              onClick={() => setActiveTab('short')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                activeTab === 'short'
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              🌅 Morning & Short Tours
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer hidden sm:block ${
                activeTab === 'all'
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              All Packages
            </button>
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredPackages.map((pkg: SafariPackage) => {
            const isHighlighted = pkg.isPopular || pkg.badge === 'VIP LUXURY';
            
            return (
              <div
                key={pkg.id}
                className={`group relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#EA580C] shadow-xl shadow-[#EA580C]/10 ring-4 ring-[#EA580C]/5 hover:-translate-y-1.5'
                    : 'bg-white border border-sand/90 shadow-md hover:shadow-xl hover:-translate-y-1.5'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="bg-black/60 backdrop-blur-md text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20">
                      Tier {pkg.tier}
                    </span>
                    {pkg.badge && (
                      <span className="bg-[#EA580C] text-white font-extrabold text-[11px] tracking-wider px-3 py-1 rounded-lg shadow-lg">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
                      <Clock size={12} className="text-[#EA580C]" /> {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
                      <MapPin size={12} className="text-[#EA580C]" /> Lehbab Red Dunes
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1 text-amber-500 mb-1.5">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#0F172A] ml-1">{pkg.rating}</span>
                      <span className="text-xs text-[#64748B]">({pkg.reviewsCount}+ reviews)</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] group-hover:text-[#EA580C] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] font-medium mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2 py-3 my-2 border-y border-slate-100 flex-1">
                    <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">What's Included:</div>
                    {pkg.includes.slice(0, 5).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#1E293B] font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="leading-tight">{inc}</span>
                      </div>
                    ))}
                    {pkg.includes.length > 5 && (
                      <div className="text-xs font-bold text-[#EA580C] pl-6 pt-0.5">
                        + {pkg.includes.length - 5} more inclusions
                      </div>
                    )}
                  </div>

                  {/* Free Pickup Guarantee */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2.5 py-1.5 rounded-lg mb-4">
                    <ShieldCheck size={14} className="shrink-0 text-emerald-600" />
                    <span>Free Hotel Pickup · Pay on Arrival (No Deposit)</span>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-[#94A3B8] line-through font-bold">
                        AED {pkg.originalPrice}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                          AED {pkg.price}
                        </span>
                        <span className="text-xs font-semibold text-[#64748B]">/ person</span>
                      </div>
                    </div>

                    {/* High-Converting 1-Click WhatsApp Booking CTA */}
                    <a
                      href={getWhatsAppLink(pkg.whatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 max-w-[170px] flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-lg shadow-[#EA580C]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle size={16} className="fill-white/20" />
                      <span>Book Now</span>
                    </a>
                  </div>

                  {/* Sub-link to detail */}
                  <div className="text-center mt-3 pt-2 border-t border-slate-50">
                    <Link
                      to={`/evening-safari/${pkg.slug}`}
                      className="text-xs font-semibold text-[#64748B] hover:text-[#EA580C] transition-colors inline-flex items-center gap-1"
                    >
                      View full details & itinerary <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help & Trust note */}
        <div className="mt-10 p-4 sm:p-5 bg-white rounded-2xl border border-sand/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F172A]">Need help choosing a safari or custom group booking?</div>
              <div className="text-xs text-[#64748B]">WhatsApp our Dubai operations team directly. We reply in under 3 minutes.</div>
            </div>
          </div>
          <a
            href={getWhatsAppLink('Hi! I need help choosing the best safari package for my family/group.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0F172A] hover:bg-black text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
          >
            Chat with Tour Expert →
          </a>
        </div>

      </div>
    </section>
  );
}
