import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles, Sunset, Bike, Sunrise, Building2, LayoutGrid } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SAFARI_PACKAGES, getWhatsAppLink, SafariPackage, PRICES, aed, UNIT_LABEL } from '../../data/safariPackages';
import { trackKeywordClick, trackWhatsAppClick } from '../../utils/analytics';
import PackageImage from '../PackageImage';

const TRENDING_KEYWORDS = [
  { label: 'Red Dune Bashing (Lehbab)', to: '/evening-safari/standard' },
  { label: 'Safari + Quad Combo', to: '/evening-safari/premium-quad' },
  { label: 'VIP AC Majlis', to: '/vip-traditional-arabic' },
  { label: 'Sunrise Desert Tour', to: '/morning-safari' },
  { label: `Self-Drive Convoy (${aed(PRICES.selfDrive)})`, to: '/self-drive' },
  { label: 'Abu Dhabi City Tour', to: '/tours/abu-dhabi-city-tour' },
  { label: 'Marina Dhow Cruise', to: '/tours/dhow-cruise-dubai-marina' },
];

type Tab = 'evening' | 'combo' | 'short' | 'city' | 'all';
const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: 'evening', label: 'Evening Safaris', icon: Sunset },
  { id: 'combo', label: 'Safari + Quad', icon: Bike },
  { id: 'short', label: 'Short Tours', icon: Sunrise },
  { id: 'city', label: 'City Tours', icon: Building2 },
  { id: 'all', label: 'All', icon: LayoutGrid },
];

const inTab = (p: SafariPackage, tab: Tab) => {
  if (tab === 'all') return true;
  // Evening tab: Standard, Premium and Premium + Quad (VIP lives under All)
  if (tab === 'evening') return ['evening-standard', 'evening-premium', 'premium-quad'].includes(p.id);
  if (tab === 'short') return p.category === 'short' || p.category === 'selfdrive';
  return p.category === tab;
};

export default function PackageGrid({ initialTab = 'evening' }: { initialTab?: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const filteredPackages = SAFARI_PACKAGES.filter((p) => inTab(p, activeTab));

  return (
    <section id="packages" className="py-10 sm:py-16 md:py-20 bg-[#F8F6F0] border-t border-sand/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#EA580C]/10 text-[#EA580C] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-2.5">
            <Sparkles size={13} className="text-[#EA580C]" /> Direct Operator Rates · No Hidden Fees
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
            Choose Your Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#475569] font-medium leading-relaxed max-w-2xl mx-auto">
            Every evening safari includes 4×4 dune bashing, camel rides, sandboarding, live shows and a full BBQ dinner. City tours and cruises include free hotel pickup too.
          </p>

          {/* Filter tabs: centred pill switcher; scrolls from the first tab on narrow screens */}
          <div className="-mx-3.5 sm:mx-0 mt-5 sm:mt-7 px-3.5 sm:px-0 overflow-x-auto scrollbar-none touch-pan-x [mask-image:linear-gradient(to_right,black_88%,transparent)] sm:[mask-image:none]">
            <div role="tablist" aria-label="Package categories" className="mx-auto w-max flex items-center gap-1 p-1 bg-white rounded-full border border-sand/80 shadow-sm">
              {TABS.map(({ id, label, icon: Icon }) => {
                const active = activeTab === id;
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(id)}
                    className={`inline-flex items-center gap-1.5 h-9 sm:h-10 px-3.5 sm:px-4 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer ${
                      active ? 'bg-[#0F172A] text-white shadow-sm' : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                    }`}
                  >
                    <Icon size={15} className={active ? 'text-[#FB923C]' : 'text-[#94A3B8]'} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Popular searches: one swipeable row on mobile, wraps centred on larger screens */}
          <div className="-mx-3.5 sm:mx-0 mt-3.5 sm:mt-4 px-3.5 sm:px-0 overflow-x-auto scrollbar-none touch-pan-x [mask-image:linear-gradient(to_right,black_88%,transparent)] sm:[mask-image:none]">
            <div className="flex items-center gap-1.5 w-max sm:w-auto sm:flex-wrap sm:justify-center">
              <span className="text-[#94A3B8] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider mr-1 shrink-0">
                Popular
              </span>
              {TRENDING_KEYWORDS.map((chip) => (
                <Link
                  key={chip.to}
                  to={chip.to}
                  onClick={() => trackKeywordClick(chip.label, chip.to)}
                  className="shrink-0 inline-flex items-center h-7 px-3 rounded-full border border-sand/90 bg-white/70 text-[#475569] text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-colors hover:border-[#EA580C]/40 hover:text-[#EA580C] hover:bg-orange-50"
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {filteredPackages.map((pkg: SafariPackage) => {
            const isHighlighted = pkg.isPopular || pkg.badge === 'VIP LUXURY';
            
            return (
              <div
                key={pkg.id}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#EA580C] shadow-xl shadow-[#EA580C]/10 ring-2 sm:ring-4 ring-[#EA580C]/5 sm:hover:-translate-y-1.5'
                    : 'bg-white border border-sand/90 shadow-md hover:shadow-xl sm:hover:-translate-y-1.5'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <PackageImage pkg={pkg} className="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="bg-black/60 backdrop-blur-md text-white font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:py-1 rounded-md border border-white/20">
                      Tier {pkg.tier}
                    </span>
                    {pkg.badge && (
                      <span className="bg-[#EA580C] text-white font-extrabold text-[10px] sm:text-[11px] tracking-wider px-2.5 py-0.5 sm:py-1 rounded-md shadow-lg">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                      <Clock size={11} className="text-[#EA580C]" /> {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                      <MapPin size={11} className="text-[#EA580C]" /> {pkg.location}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  {/* Title & Reviews */}
                  <div className="mb-3">
                    {pkg.reviewsCount > 0 ? (
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#0F172A] ml-1">{pkg.rating}</span>
                      <span className="text-[11px] text-[#64748B]">({pkg.reviewsCount}+ reviews)</span>
                    </div>
                    ) : (
                      <div className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider mb-1">New for 2026</div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] group-hover:text-[#EA580C] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] font-medium mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-1.5 sm:space-y-2 py-2.5 sm:py-3 my-2 border-y border-slate-100 flex-1">
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#64748B] uppercase tracking-wider">What's Included:</div>
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
                  <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50/90 px-2.5 py-1.5 rounded-lg mb-3 sm:mb-4">
                    <ShieldCheck size={13} className="shrink-0 text-emerald-600" />
                    <span>{pkg.category === 'selfdrive' ? 'Meet at Lehbab Base' : pkg.pickupInfo} · Pay on Arrival</span>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-1 flex items-center justify-between gap-2">
                    <div className="shrink-0 min-w-0">
                      {pkg.originalPrice > pkg.price && (
                        <div className="text-[10px] sm:text-[11px] text-[#94A3B8] line-through font-bold">
                          {aed(pkg.originalPrice)}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#0F172A] tracking-tight">
                          {aed(pkg.price)}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">{UNIT_LABEL[pkg.priceUnit]}</span>
                      </div>
                      {pkg.priceUnit === 'vehicle' && (
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#EA580C]">whole car · up to 6</div>
                      )}
                      {pkg.id === 'evening-vip' && (
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#EA580C]">shared car · private {aed(PRICES.eveningVipPrivate)}</div>
                      )}
                    </div>

                    {/* 1-Click WhatsApp Booking CTA */}
                    <a
                      href={getWhatsAppLink(pkg.whatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('package_card', pkg.title, pkg.price)}
                      className="flex-1 min-w-[100px] max-w-[155px] sm:max-w-[170px] h-11 sm:h-12 flex items-center justify-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs sm:text-sm px-2.5 sm:px-3 rounded-xl shadow-lg shadow-[#EA580C]/25 transition-all active:scale-95 whitespace-nowrap"
                    >
                      <MessageCircle size={15} className="shrink-0" />
                      <span>Book Now</span>
                    </a>
                  </div>

                  {/* Sub-link to detail */}
                  <div className="text-center mt-2.5 pt-2 border-t border-slate-100">
                    <Link
                      to={pkg.detailPath}
                      className="text-xs font-semibold text-[#64748B] hover:text-[#EA580C] transition-colors inline-flex items-center gap-1 py-1"
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
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-white rounded-2xl border border-sand/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">Need help choosing a safari or group booking?</div>
              <div className="text-[11px] sm:text-xs text-[#64748B]">WhatsApp our Dubai operations team directly for a fast reply.</div>
            </div>
          </div>
          <a
            href={getWhatsAppLink('Hi! I need help choosing the best safari package for my family/group.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center shrink-0 bg-[#0F172A] hover:bg-black text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all active:scale-98"
          >
            Chat with Tour Expert →
          </a>
        </div>

      </div>
    </section>
  );
}
