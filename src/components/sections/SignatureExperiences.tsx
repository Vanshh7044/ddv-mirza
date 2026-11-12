import { Link } from 'react-router-dom';
import { Crown, MessageCircle, ArrowRight, Moon } from 'lucide-react';
import { SAFARI_PACKAGES, getWhatsAppLink, aed } from '../../data/safariPackages';
import { trackWhatsAppClick } from '../../utils/analytics';
import PackageImage from '../PackageImage';

// Featured private packages on the homepage. The default is the signature trio; the
// overnight variant gives the overnight packages a section of their own.
const VARIANTS = {
  signature: {
    id: 'signature',
    ids: ['lama-private-setup', 'premier-private-buggy', 'can-am-buggy'],
    Icon: Crown,
    eyebrow: 'Signature private experiences',
    title: 'Make It Entirely Yours',
    subtitle: 'Our most special evenings in the desert. One price for your group, not per person.',
    bg: 'bg-[#0F172A]',
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  },
  overnight: {
    id: 'overnight',
    ids: ['private-overnight-safari', 'private-overnight-camp'],
    Icon: Moon,
    eyebrow: 'Private overnight desert safari',
    title: 'Spend a Night in the Desert',
    subtitle: 'Sunset, dinner, a night under the stars and sunrise with breakfast, in your own private car.',
    bg: 'bg-[#1E293B]',
    grid: 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto',
  },
};

export default function SignatureExperiences({ variant = 'signature' }: { variant?: keyof typeof VARIANTS }) {
  const v = VARIANTS[variant];
  const featured = v.ids.flatMap((id) => SAFARI_PACKAGES.filter((p) => p.id === id));
  return (
    <section id={v.id} className={`py-10 sm:py-16 md:py-20 ${v.bg} text-white`}>
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#C2410C]/20 text-[#FB923C] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#C2410C]/30">
            <v.Icon size={13} /> {v.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2.5">
            {v.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-medium">
            {v.subtitle}
          </p>
        </div>

        <div className={`grid ${v.grid} gap-4 sm:gap-5`}>
          {featured.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-900/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col hover:border-[#C2410C]/60 transition-colors duration-300"
            >
              <Link to={pkg.detailPath} className="relative aspect-[4/3] overflow-hidden block" aria-label={pkg.title}>
                <PackageImage pkg={pkg} />
                {pkg.badge && (
                  <span className="absolute top-3 right-3 bg-[#C2410C] text-white font-black text-[10px] sm:text-[11px] tracking-wide px-2.5 py-1 rounded-md">
                    {pkg.badge}
                  </span>
                )}
              </Link>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight mb-1.5">
                  <Link to={pkg.detailPath} className="hover:text-[#FB923C] transition-colors">{pkg.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium flex-1">{pkg.tagline}</p>

                <div className="pt-3.5 mt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xl lg:text-lg xl:text-xl font-black text-white whitespace-nowrap">{aed(pkg.price)}</div>
                    <div className="text-[11px] text-slate-400 font-medium">one price · private</div>
                  </div>
                  <a
                    href={getWhatsAppLink(pkg.whatsAppText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('signature', pkg.title, pkg.price)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#C2410C] hover:bg-[#9A3412] active:scale-95 text-white font-bold text-xs sm:text-sm px-3.5 h-11 rounded-xl transition-all shadow-lg shadow-[#C2410C]/25 whitespace-nowrap"
                  >
                    <MessageCircle size={15} /> Book Now
                  </a>
                </div>
                <Link
                  to={pkg.detailPath}
                  className="mt-2.5 text-xs font-semibold text-slate-400 hover:text-[#FB923C] transition-colors inline-flex items-center gap-1 self-center py-1"
                >
                  View details <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
