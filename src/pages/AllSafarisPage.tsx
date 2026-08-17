import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ArrowRight, CheckCircle, MapPin, Star, Zap } from 'lucide-react';

interface Package {
  badge?: string;
  tier: string;
  title: string;
  meta: string;
  price: string;
  unit: string;
  originalPrice?: string;
  desc: string;
  to: string;
  includes: string[];
  dark?: boolean;
}

const eveningPackages: Package[] = [
  { tier: 'Standard', title: 'Evening Standard', meta: '6–7 hrs · Lehbab · Free pickup', price: 'AED 79', unit: '/ pp sharing', originalPrice: 'AED 99', desc: 'The classic evening safari — dune bashing, sunset, BBQ dinner, and live shows.', to: '/evening-safari/standard', includes: ['4×4 dune bashing', 'BBQ dinner', 'Live shows', 'Camel ride'] },
  { badge: 'Most Booked', tier: 'Premium', title: 'Evening Premium', meta: '6–7 hrs · Lehbab · Free pickup', price: 'AED 119', unit: '/ pp sharing', originalPrice: 'AED 149', desc: 'Premium seating, smaller group, quad bike included — the sweet spot.', to: '/evening-safari/premium', includes: ['All Standard +', 'Quad bike 15 min', 'Premium seating', 'Smaller group'], dark: true },
  { tier: 'VIP', title: 'Evening VIP', meta: '7 hrs · Falcon · Double shows', price: 'AED 299', unit: '/ pp sharing', originalPrice: 'AED 379', desc: 'Exclusive private vehicle, dedicated Majlis, custom dinner, falcon session.', to: '/evening-safari/vip', includes: ['Private 4×4', 'Dedicated Majlis', 'Falcon training', 'Personal guide'] },
];

const shortTours: Package[] = [
  { tier: 'Sunrise', title: 'Sunrise Desert Safari', meta: '4–5 hrs · Private · Lehbab', price: 'AED 349', unit: '/ vehicle', desc: 'Chase the golden sunrise over Lehbab in your own private 4×4.', to: '/morning-safari', includes: ['Private vehicle', 'Sunrise dunes', 'Sandboarding', 'Photographer stop'] },
  { tier: 'Morning', title: 'Morning Short Tour', meta: '4–5 hrs · Private · Lehbab', price: 'AED 349', unit: '/ vehicle', desc: 'A private morning adventure — dune bashing and desert exploration.', to: '/morning-safari', includes: ['Private vehicle', 'Morning dunes', 'Dune bashing', 'Flexible stops'] },
  { tier: 'Evening Short', title: 'Evening Short Tour', meta: '4–5 hrs · Private · Lehbab', price: 'AED 349', unit: '/ vehicle', desc: 'A condensed private evening — sunset, dunes, and back in time for dinner.', to: '/morning-safari', includes: ['Private vehicle', 'Sunset dunes', 'Sandboarding', 'Photo stops'] },
];

const selfDrivePackages: Package[] = [
  { badge: 'Save AED 14', tier: 'Standard', title: 'Self-Drive Standard', meta: 'You drive · We guide · Lehbab', price: 'AED 35', unit: '/ pp', originalPrice: 'AED 49', desc: 'Lead-the-convoy format — you drive your own 4×4 through Lehbab.', to: '/self-drive', includes: ['Convoy guide', 'Dune access', 'Camp BBQ', '12 max'] },
  { badge: 'Save AED 19', tier: 'Premium', title: 'Self-Drive Premium', meta: 'Premium camp · BBQ included', price: 'AED 60', unit: '/ pp', originalPrice: 'AED 79', desc: 'Premium camp access after the self-drive with upgraded facilities.', to: '/self-drive', includes: ['Convoy guide', 'Premium camp', 'BBQ included', '10 max'] },
  { badge: 'Save AED 24', tier: 'VIP', title: 'Self-Drive VIP', meta: 'VIP camp + falcon · Premium BBQ', price: 'AED 75', unit: '/ pp', originalPrice: 'AED 99', desc: 'The full self-drive experience with VIP camp access and falcon encounter.', to: '/self-drive', includes: ['Convoy guide', 'VIP camp', 'Falcon photo', '14 max'] },
];

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className={`rounded-2xl border flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${pkg.dark ? 'bg-[#1E2316] border-safari-orange/30 ring-2 ring-safari-orange/20' : 'bg-[#FAF9F8] border-sand'}`}>
      <div className={`px-5 pt-5 pb-4 border-b ${pkg.dark ? 'border-white/10' : 'border-sand'}`}>
        <div className="flex items-center justify-between mb-2.5">
          <span className={`font-mono text-[10px] tracking-widest uppercase ${pkg.dark ? 'text-[#FAF9F8]/40' : 'text-stone'}`}>{pkg.tier}</span>
          {pkg.badge && <span className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${pkg.dark ? 'bg-safari-orange text-white' : 'bg-[#1E2316] text-[#FAF9F8]'}`}>{pkg.badge}</span>}
        </div>
        <h3 className={`font-serif text-xl font-light mb-1 ${pkg.dark ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>{pkg.title}</h3>
        <div className={`font-mono text-[11px] ${pkg.dark ? 'text-[#FAF9F8]/45' : 'text-stone'}`}>{pkg.meta}</div>
      </div>
      <div className="px-5 py-4 flex flex-col flex-1">
        <p className={`font-mono text-[12px] leading-relaxed mb-4 ${pkg.dark ? 'text-[#FAF9F8]/55' : 'text-stone'}`}>{pkg.desc}</p>
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {pkg.includes.map((inc, i) => (
            <div key={i} className={`flex items-center gap-1.5 font-mono text-[11px] ${pkg.dark ? 'text-[#FAF9F8]/55' : 'text-stone'}`}>
              <CheckCircle size={11} className="text-safari-orange shrink-0" /> {inc}
            </div>
          ))}
        </div>
        <div className={`flex items-end justify-between pt-4 border-t mt-auto ${pkg.dark ? 'border-white/10' : 'border-sand'}`}>
          <div>
            {pkg.originalPrice && <div className={`font-mono text-[10px] line-through ${pkg.dark ? 'text-[#FAF9F8]/25' : 'text-stone/40'}`}>{pkg.originalPrice}</div>}
            <div className={`font-serif text-2xl ${pkg.dark ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>{pkg.price} <span className={`font-mono text-[11px] ${pkg.dark ? 'text-[#FAF9F8]/35' : 'text-stone'}`}>{pkg.unit}</span></div>
          </div>
          <Link to={pkg.to} className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all ${pkg.dark ? 'bg-safari-orange text-white hover:bg-safari-orange-hover' : 'bg-[#1E2316] text-[#FAF9F8] hover:bg-safari-olive'}`}>
            View <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function PackageGroup({ id, label, title, packages, viewAllTo }: { id: string; label: string; title: string; packages: Package[]; viewAllTo: string }) {
  return (
    <div id={id} className="mb-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-2">{label}</div>
          <h2 className="font-serif font-light text-3xl text-[#1E2316]">{title}</h2>
        </div>
        <Link to={viewAllTo} className="hidden md:flex items-center gap-1 font-mono text-[12px] text-stone hover:text-safari-orange transition-colors">
          View all <ArrowRight size={13} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {packages.map((pkg) => <PackageCard key={pkg.tier} pkg={pkg} />)}
      </div>
    </div>
  );
}

export default function AllSafarisPage() {
  return (
    <>
      <PageHero
        label="Desert Safari Packages · Dubai"
        title="Nine packages."
        titleEm="One direct operator."
        subtitle="Evening safaris from AED 79, short tours from AED 349, self-drive from AED 35. All direct — no reseller markup."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'All Desert Safaris' }]}
        primaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/971559445338' }}
        secondaryCta={{ label: 'Not sure? Ask us', href: 'https://wa.me/971559445338' }}
      />

      {/* Tab bar */}
      <div className="sticky top-14 sm:top-16 z-40 bg-[#FAF9F8]/95 backdrop-blur-md border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex gap-1.5 py-2.5 sm:py-3 overflow-x-auto scrollbar-none">
          {[
            { label: 'Evening Safaris', href: '#evening' },
            { label: 'Short Tours', href: '#short' },
            { label: 'Self-Drive', href: '#selfdrive' },
          ].map((tab) => (
            <a key={tab.href} href={tab.href} className="shrink-0 px-4 sm:px-5 py-1.5 sm:py-2 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase text-stone hover:text-safari-orange hover:bg-sand/60 rounded-xl transition-all">
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      <div className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <PackageGroup id="evening" label="Evening Safari" title="Evening packages, from shared to private." packages={eveningPackages} viewAllTo="/evening-desert-safari" />
          <PackageGroup id="short" label="Short Tours · 4–5 hrs" title="Short tours, privately yours." packages={shortTours} viewAllTo="/morning-safari" />
          <PackageGroup id="selfdrive" label="Self-Drive · You drive" title="Self-drive convoy packages." packages={selfDrivePackages} viewAllTo="/self-drive" />
        </div>
      </div>

      {/* Bottom trust signals */}
      <section className="bg-[#1E2316] text-[#FAF9F8] py-12 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: Star, label: '4.9 Google Rating', sub: '401+ verified reviews' },
            { icon: CheckCircle, label: 'Pay on the day', sub: 'Zero advance deposit' },
            { icon: Zap, label: 'WhatsApp in 5 mins', sub: 'English, Arabic, Russian, French' },
            { icon: MapPin, label: 'Lehbab Red Dunes', sub: 'Dubai\'s premier safari zone' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <item.icon size={18} className="text-safari-orange shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-[12px] text-[#FAF9F8]/80">{item.label}</div>
                <div className="font-mono text-[11px] text-[#FAF9F8]/35">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
