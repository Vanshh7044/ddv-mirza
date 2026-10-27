import { Link } from 'react-router-dom';
import { MessageCircle, Plus, Check } from 'lucide-react';
import { DESERT_ADDONS } from '../../data/addons';
import { getWhatsAppLink } from '../../data/safariPackages';
import { trackWhatsAppClick } from '../../utils/analytics';

import { srcSet, CARD_SIZES } from '../../utils/img';
/**
 * "Optional activities — additional cost" strip for desert safari pages.
 * Pass the current package id to hide/mark add-ons that are already included.
 */
export default function AddOnsSection({ packageId }: { packageId?: string }) {
  return (
    <section id="add-ons" className="py-10 sm:py-14 bg-white border-t border-sand/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C2410C] mb-1.5">Make it bigger</div>
            <h2 className="text-2xl sm:text-3xl font-black">Optional desert activities</h2>
            <p className="text-sm text-[#475569] font-medium mt-1">
              Add to any desert safari. <strong className="text-[#0F172A]">Available at additional cost</strong> — we confirm the price on WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DESERT_ADDONS.map((a) => {
            const included = packageId && a.includedIn?.includes(packageId);
            const bookHref = `/book?package=${packageId ?? 'evening-standard'}&addons=${a.id}`;
            return (
              <article key={a.id} className="rounded-2xl border border-sand bg-[#F8F6F0] overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#7C2D12] to-[#C2410C]">
                  {a.image ? (
                    <img src={a.image}
                    srcSet={srcSet(a.image)}
                    sizes={CARD_SIZES} alt={a.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <a.icon className="w-14 h-14 text-white/90" strokeWidth={1.4} />
                    </div>
                  )}
                  <span className={`absolute top-2.5 left-2.5 text-[10px] font-black px-2 py-0.5 rounded-md ${included ? 'bg-emerald-700 text-white' : 'bg-white/95 text-[#0F172A]'}`}>
                    {included ? 'INCLUDED IN THIS PACKAGE' : '+ ADDITIONAL COST'}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-extrabold text-[#0F172A] flex items-center gap-2">
                    <a.icon size={17} className="text-[#C2410C]" /> {a.name}
                  </h3>
                  <p className="text-[13px] text-[#475569] font-medium mt-1.5 flex-1">{a.desc}</p>
                  {a.note && !included && <p className="text-[11px] text-[#C2410C] font-bold mt-2">{a.note}</p>}
                  {included ? (
                    <div className="mt-3.5 h-10 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center gap-1.5">
                      <Check size={14} /> Already included
                    </div>
                  ) : (
                    <div className="flex gap-2 mt-3.5">
                      <Link to={bookHref} className="flex-1 h-10 rounded-xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold inline-flex items-center justify-center gap-1.5">
                        <Plus size={14} /> Add to booking
                      </Link>
                      <a
                        href={getWhatsAppLink(`Hi! What is the price for ${a.name} as an add-on to my desert safari?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('addon_card', a.name)}
                        aria-label={`Ask the price of ${a.name} on WhatsApp`}
                        className="h-10 px-3 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <MessageCircle size={14} /> Price
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
