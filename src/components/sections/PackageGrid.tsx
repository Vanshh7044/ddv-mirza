import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight, Sparkles, Sunset, Bike, Sunrise, Building2, LayoutGrid } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SAFARI_PACKAGES, getWhatsAppLink, SafariPackage, PRICES, aed, UNIT_LABEL } from '../../data/safariPackages';
import { trackKeywordClick } from '../../utils/analytics';
import PackageImage from '../PackageImage';

const TRENDING_KEYWORDS = [
  { label: 'Red Dune Bashing (Lehbab)', to: '/evening-safari/standard' },
  { label: 'Safari + Quad Combo', to: '/evening-safari/premium-quad' },
  { label: 'VIP AC Majlis', to: '/vip-traditional-arabic' },
  { label: 'Sunrise Desert Tour', to: '/morning-safari' },
  { label: `Self-Drive Safari (${aed(PRICES.selfDrive)})`, to: '/self-drive' },
  { label: 'Abu Dhabi City Tour', to: '/tours/abu-dhabi-city-tour' },
  { label: 'Marina Dinner Cruise', to: '/tours/dinner-cruise-dubai-marina' },
];

type Tab = 'evening' | 'combo' | 'short' | 'city' | 'all';
const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: 'evening', label: 'Evening Safaris', icon: Sunset },
  { id: 'combo', label: 'Safari + Quad', icon: Bike },
  { id: 'short', label: 'Short Tours', icon: Sunrise },
  { id: 'city', label: 'City Tours', icon: Building2 },
  { id: 'all', label: 'All', icon: LayoutGrid },
];

// The operator's package order (13 Nov list): sharing, then private, then self-drive at the very bottom.
const LADDER = ['evening-standard', 'evening-premium', 'standard-quad', 'premium-quad', 'private-short-safari', 'morning-safari', 'sunrise-safari', 'private-evening-safari', 'standard-private-car', 'premium-private-car', 'standard-private-buggy', 'premier-private-buggy', 'lama-private-setup', 'can-am-buggy', 'private-overnight-safari', 'self-drive-standard', 'self-drive-premium'];
// Section headings shown above the first package of each group in the main tab
const GROUP_START: Record<string, string> = {
  'evening-standard': 'Sharing desert safaris · price per person',
  'private-short-safari': 'Private safaris · one price for your whole car',
  'self-drive-standard': 'Self-drive · drive your own car to our camp',
};
const CRUISES = ['dhow-cruise-marina', 'marina-yacht'];
// Not shown in the package grid for now; its page still works
const HIDDEN = ['marina-yacht'];
const rank = (p: SafariPackage) => {
  if (CRUISES.includes(p.id)) return 100;
  const step = LADDER.indexOf(p.id);
  return step === -1 ? 50 : step;
};

// Card labels: a short tag (badge or type) and the kind of tour for the detail line
const cardKind = (p: SafariPackage) =>
  p.category === 'selfdrive' ? 'Self-drive' : p.priceUnit === 'person' ? 'Sharing' : 'Private';
const cardTag = (p: SafariPackage) =>
  p.id === 'sunrise-safari' ? 'Sunrise'
    : p.id === 'morning-safari' ? 'Morning'
    : p.id === 'private-evening-safari' ? 'Evening'
    : p.badge ?? (p.category === 'city' ? 'City tour' : cardKind(p));

const inTab = (p: SafariPackage, tab: Tab) => {
  if (HIDDEN.includes(p.id)) return false;
  if (tab === 'all') return true;
  // Evening tab: the ladder (VIP lives under All)
  if (tab === 'evening') return LADDER.includes(p.id);
  if (tab === 'short') return p.category === 'short' || p.category === 'selfdrive';
  return p.category === tab;
};

export default function PackageGrid({ initialTab = 'evening' }: { initialTab?: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const filteredPackages = SAFARI_PACKAGES.filter((p) => inTab(p, activeTab)).sort((a, b) => rank(a) - rank(b));

  return (
    <section id="packages" className="py-10 sm:py-16 md:py-20 bg-[#F8F6F0] border-t border-sand/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#C2410C]/10 text-[#9A3412] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-2.5">
            <Sparkles size={13} className="text-[#C2410C]" /> Direct Operator Rates · No Hidden Fees
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
              <span className="text-[#56657A] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider mr-1 shrink-0">
                Popular
              </span>
              {TRENDING_KEYWORDS.map((chip) => (
                <Link
                  key={chip.to}
                  to={chip.to}
                  onClick={() => trackKeywordClick(chip.label, chip.to)}
                  className="shrink-0 inline-flex items-center h-7 px-3 rounded-full border border-sand/90 bg-white/70 text-[#475569] text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-colors hover:border-[#C2410C]/40 hover:text-[#C2410C] hover:bg-orange-50"
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPackages.map((pkg: SafariPackage) => {
            const isHighlighted = pkg.isPopular || pkg.badge === 'VIP LUXURY';
            
            return (
              <Fragment key={pkg.id}>
              {activeTab === 'evening' && GROUP_START[pkg.id] && (
                <h3 className="col-span-full text-base sm:text-lg font-extrabold text-[#0F172A] border-b border-sand pb-2 mt-2 first:mt-0">
                  {GROUP_START[pkg.id]}
                </h3>
              )}
              <Link
                to={pkg.detailPath}
                aria-label={`${pkg.title}, ${aed(pkg.price)} ${UNIT_LABEL[pkg.priceUnit]}`}
                className={`group relative block aspect-[4/5] rounded-3xl overflow-hidden bg-[#0F172A] shadow-md hover:shadow-2xl transition-all duration-300 sm:hover:-translate-y-1 ${
                  isHighlighted ? 'ring-2 ring-[#C2410C]' : ''
                }`}
              >
                <PackageImage pkg={pkg} className="group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

                {/* Tag and arrow */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className="bg-white/95 text-[#0F172A] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] px-3.5 py-2 rounded-full shadow-sm">
                    {cardTag(pkg)}
                  </span>
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#0F172A] flex items-center justify-center shadow-sm group-hover:bg-[#C2410C] group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </span>
                </div>

                {/* Details */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 truncate">
                    {pkg.duration}
                    <span className="text-[#FB923C] mx-1.5">•</span>
                    {cardKind(pkg)}
                    <span className="text-[#FB923C] mx-1.5">•</span>
                    {pkg.location}
                  </div>
                  <h3 className="text-[22px] sm:text-2xl font-extrabold leading-tight mt-1.5">{pkg.title}</h3>
                  <div className="border-t border-white/25 mt-3.5 pt-3.5 flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight">{aed(pkg.price)}</span>
                    <span className="text-xs sm:text-sm font-medium text-white/75">{UNIT_LABEL[pkg.priceUnit]}</span>
                  </div>
                </div>
              </Link>
              </Fragment>
            );
          })}
        </div>

        {/* Quick Help & Trust note */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-white rounded-2xl border border-sand/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#C2410C]/10 text-[#9A3412] flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">Need help choosing a safari or group booking?</div>
              <div className="text-[11px] sm:text-xs text-[#56657A]">WhatsApp our Dubai operations team directly for a fast reply.</div>
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
