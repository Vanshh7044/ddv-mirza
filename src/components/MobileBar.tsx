import { MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getWhatsAppLink, SAFARI_PACKAGES } from '../data/safariPackages';

export default function MobileBar() {
  const location = useLocation();

  // Determine current page package context if any
  const currentPath = location.pathname;
  const currentPkg = SAFARI_PACKAGES.find(p => p.detailPath === currentPath || currentPath.includes(p.slug));

  const priceText = currentPkg ? `AED ${currentPkg.price}` : 'AED 79';
  const priceUnit = currentPkg?.tier === 'Sunrise' || currentPkg?.tier === 'Private Camp' ? '/ vehicle' : '/ person';
  const whatsAppText = currentPkg 
    ? currentPkg.whatsAppText 
    : 'Hi! I want to book a Dubai desert safari on WhatsApp. Please share availability.';

  return (
    <aside
      aria-label="Mobile quick booking bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-xl border-t border-slate-700/80 px-3.5 pt-2.5 shadow-[0_-10px_35px_rgba(0,0,0,0.35)] transition-all duration-300"
      style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto w-full">
        {/* Left: Price & Value badge */}
        <div className="shrink-0 flex flex-col justify-center min-w-0">
          <div className="flex items-baseline gap-1">
            <span className="text-lg min-[360px]:text-xl font-black text-white tracking-tight">{priceText}</span>
            <span className="text-[10px] min-[360px]:text-[11px] font-semibold text-slate-400">{priceUnit}</span>
          </div>
          <div className="flex items-center gap-1 text-[8.5px] min-[360px]:text-[9.5px] font-extrabold text-emerald-400 uppercase tracking-wider truncate max-w-[130px] min-[375px]:max-w-none">
            <ShieldCheck size={11} className="shrink-0" />
            <span className="truncate">Pay On Arrival · Free Pickup</span>
          </div>
        </div>

        {/* Right: Actions (Call & WhatsApp) */}
        <div className="flex items-center gap-1.5 shrink-0 justify-end">
          {/* Quick Call Button */}
          <a
            href="tel:+971556015834"
            className="w-10 h-10 min-[360px]:w-11 min-[360px]:h-11 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-white shrink-0 active:scale-95 transition-transform"
            aria-label="Call Dubai Dune Tours dispatch directly"
          >
            <Phone size={16} className="text-[#EA580C]" />
          </a>

          {/* Primary High-Contrast WhatsApp CTA */}
          <a
            href={getWhatsAppLink(whatsAppText)}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 min-[360px]:h-11 bg-[#EA580C] hover:bg-[#C2410C] active:scale-95 text-white font-black text-xs px-3 sm:px-4 rounded-xl shadow-lg shadow-[#EA580C]/30 flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
            aria-label="Book safari instantly via WhatsApp"
          >
            <MessageCircle size={15} className="shrink-0" />
            <span className="tracking-wide">BOOK NOW</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
