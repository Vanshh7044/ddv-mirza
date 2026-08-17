import { MessageCircle } from 'lucide-react';

export default function MobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF9F8] border-t border-sand px-4 py-3.5 flex items-center justify-between gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'calc(14px + env(safe-area-inset-bottom))' }}
    >
      <div>
        <div className="font-serif text-lg font-light text-[#1E2316]">
          AED 79<span className="font-mono text-[11px] text-stone font-normal ml-1">/ pp</span>
        </div>
        <div className="font-mono text-[9px] text-stone tracking-wider uppercase">Evening Standard · Pay On Day</div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://wa.me/971559445338"
          className="w-10 h-10 border border-sand rounded-xl flex items-center justify-center text-[#1E2316] hover:bg-sand transition-colors"
        >
          <MessageCircle size={16} />
        </a>
        <a
          href="https://wa.me/971559445338"
          className="bg-[#1E2316] text-[#FAF9F8] font-mono text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-xl"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  );
}
