import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';

export default function MobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}
    >
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black text-[#0F172A]">AED 79</span>
          <span className="text-xs font-semibold text-[#64748B]">/ person</span>
        </div>
        <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
          Pay On Arrival · Free Pickup
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href={getWhatsAppLink('Hi! I want to book the Evening Safari on WhatsApp.')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-[#EA580C]/25 flex items-center gap-1.5 transition-all"
        >
          <MessageCircle size={15} />
          <span>BOOK NOW</span>
        </a>
      </div>
    </div>
  );
}
