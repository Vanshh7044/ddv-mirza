import { Clock, MapPin, Info } from 'lucide-react';
import { FREE_PICKUP_AREAS, PICKUP_OTHER_AREAS, TIMING_NOTE, SafariPackage } from '../../data/safariPackages';

/** Clear timings + pickup/drop-off policy for a package (or the pickup policy alone). */
export default function TimingsPickup({
  itinerary,
  pickupInfo,
}: {
  itinerary?: SafariPackage['itinerary'];
  pickupInfo?: string;
}) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-sand shadow-sm space-y-6">
      {itinerary && itinerary.length > 0 && (
        <div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] mb-1 flex items-center gap-2">
            <Clock size={20} className="text-[#EA580C]" /> Timings
          </h3>
          {pickupInfo && <p className="text-xs sm:text-sm font-bold text-[#475569] mb-4">{pickupInfo}</p>}
          <ol className="relative border-l-2 border-[#EA580C]/25 ml-2 space-y-3.5">
            {itinerary.map((step) => (
              <li key={step.time + step.title} className="pl-5 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#EA580C] ring-4 ring-white" />
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-xs sm:text-sm font-black text-[#EA580C] tabular-nums">{step.time}</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{step.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-snug">{step.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[11px] sm:text-xs text-[#64748B] font-medium flex items-start gap-1.5">
            <Info size={13} className="shrink-0 mt-0.5" /> {TIMING_NOTE}
          </p>
        </div>
      )}

      <div className={itinerary && itinerary.length > 0 ? 'pt-5 border-t border-slate-100' : ''}>
        <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] mb-1 flex items-center gap-2">
          <MapPin size={20} className="text-[#EA580C]" /> Pickup & drop-off
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] font-medium mb-3">
          <strong className="text-emerald-700">Free, no extra charge</strong> from any hotel, apartment or address in:
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {FREE_PICKUP_AREAS.map((a) => (
            <span key={a} className="text-[11px] sm:text-xs font-semibold text-[#1E293B] bg-slate-100 px-2.5 py-1 rounded-full">
              {a}
            </span>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-[#475569] font-medium">{PICKUP_OTHER_AREAS}</p>
      </div>
    </div>
  );
}
