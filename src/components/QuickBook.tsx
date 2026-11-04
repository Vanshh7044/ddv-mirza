import { useEffect, useMemo, useState } from 'react';
import { MessageCircle, Minus, Plus } from 'lucide-react';
import { FREE_PICKUP_AREAS, aed, getWhatsAppLink, UNIT_LABEL, type SafariPackage } from '../data/safariPackages';
import { trackQuickBook } from '../utils/analytics';

type When = 'today' | 'tomorrow' | 'date';

const dubaiDate = (offsetDays: number) => {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return {
    iso: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai' }).format(d),
    label: new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dubai', day: 'numeric', month: 'short' }).format(d),
  };
};

const hasGuests = (p: SafariPackage) => p.priceUnit === 'person' || p.priceUnit === 'vehicle';

/**
 * One-tap booking: date, guests and pickup go into the first WhatsApp message, so the
 * team can confirm straight away instead of asking for them one by one.
 */
export default function QuickBook({
  packages,
  source,
  defaultWhen = 'tomorrow',
  defaultArea = '',
  sticky = false,
}: {
  packages: SafariPackage[];
  source: string;
  defaultWhen?: When;
  defaultArea?: string;
  sticky?: boolean;
}) {
  const [pkgId, setPkgId] = useState(packages[0].id);
  const [when, setWhen] = useState<When>(defaultWhen);
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState(defaultArea);
  // Dates depend on the visitor's clock, so they are only added after hydration
  const [days, setDays] = useState<{ today: string; tomorrow: string; min: string } | null>(null);

  useEffect(() => {
    const t = dubaiDate(0);
    setDays({ today: t.label, tomorrow: dubaiDate(1).label, min: t.iso });
  }, []);

  const pkg = packages.find((p) => p.id === pkgId) ?? packages[0];
  const maxGuests = pkg.priceUnit === 'vehicle' ? 6 : 20;
  const seats = Math.min(guests, maxGuests);
  const total = pkg.priceUnit === 'person' ? pkg.price * seats : pkg.price;

  const whenText =
    when === 'date'
      ? date || 'Flexible'
      : `${when === 'today' ? 'Today' : 'Tomorrow'}${days ? ` (${days[when]})` : ''}`;

  const href = useMemo(() => {
    const lines = [
      `Hi! I want to book: ${pkg.title}`,
      `Date: ${whenText}`,
      hasGuests(pkg) ? `Guests: ${seats}` : '',
      `Pickup: ${area || 'I will share my hotel'}`,
      `Price shown: ${aed(total)}${pkg.priceUnit === 'person' ? ` (${aed(pkg.price)} per person)` : ''}`,
      'Please confirm availability.',
    ];
    return getWhatsAppLink(lines.filter(Boolean).join('\n'));
  }, [pkg, whenText, seats, area, total]);

  const book = () => trackQuickBook(source, pkg.title, total);

  const chip = (active: boolean) =>
    `h-11 rounded-xl border text-xs sm:text-sm font-bold transition-colors ${
      active ? 'bg-[#0F172A] border-[#0F172A] text-white' : 'bg-white border-slate-300 text-[#0F172A] hover:border-[#0F172A]'
    }`;

  return (
    <div id="quick-book" data-no-reveal className="space-y-3.5">
      {packages.length > 1 && (
        <div>
          <label htmlFor={`qb-pkg-${source}`} className="block text-xs font-bold text-[#0F172A] mb-1.5">Package</label>
          <select
            id={`qb-pkg-${source}`}
            value={pkgId}
            onChange={(e) => setPkgId(e.target.value)}
            className="w-full h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-[#0F172A]"
          >
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}: {aed(p.price)} {UNIT_LABEL[p.priceUnit]}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <div className="text-xs font-bold text-[#0F172A] mb-1.5">When?</div>
        <div className="grid grid-cols-3 gap-2">
          <button type="button" onClick={() => setWhen('today')} className={chip(when === 'today')}>Today</button>
          <button type="button" onClick={() => setWhen('tomorrow')} className={chip(when === 'tomorrow')}>Tomorrow</button>
          <button type="button" onClick={() => setWhen('date')} className={chip(when === 'date')}>Pick date</button>
        </div>
        {when === 'date' && (
          <input
            type="date"
            aria-label="Tour date"
            min={days?.min}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 w-full h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-[#0F172A]"
          />
        )}
      </div>

      <div className={hasGuests(pkg) ? 'grid grid-cols-2 gap-3' : ''}>
        {hasGuests(pkg) && (
          <div>
            <div className="text-xs font-bold text-[#0F172A] mb-1.5">Guests</div>
            <div className="h-11 rounded-xl border border-slate-300 bg-white flex items-center justify-between px-1">
              <button type="button" aria-label="Fewer guests" onClick={() => setGuests(Math.max(1, seats - 1))} className="w-9 h-9 flex items-center justify-center text-[#0F172A]">
                <Minus size={15} />
              </button>
              <span className="text-sm font-black text-[#0F172A]">{seats}</span>
              <button type="button" aria-label="More guests" onClick={() => setGuests(Math.min(maxGuests, seats + 1))} className="w-9 h-9 flex items-center justify-center text-[#0F172A]">
                <Plus size={15} />
              </button>
            </div>
          </div>
        )}
        <div>
          <label htmlFor={`qb-area-${source}`} className="block text-xs font-bold text-[#0F172A] mb-1.5">Pickup area</label>
          <select
            id={`qb-area-${source}`}
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full h-11 rounded-xl border border-slate-300 bg-white px-2.5 text-sm font-semibold text-[#0F172A]"
          >
            <option value="">Choose later</option>
            {FREE_PICKUP_AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
            <option value="Other area">Other area</option>
          </select>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={book}
        className="w-full flex items-center justify-center gap-2 bg-[#C2410C] hover:bg-[#9A3412] active:scale-[0.98] text-white font-black text-sm rounded-xl shadow-xl shadow-[#C2410C]/30 transition-all h-[52px]"
      >
        <MessageCircle size={18} /> Book on WhatsApp · {aed(total)}
      </a>
      <p className="text-center text-[11px] text-[#56657A] font-semibold">
        Opens WhatsApp with your details filled in. No payment now.
      </p>

      {sticky && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-slate-200 px-3.5 pt-2.5"
          style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))' }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={book}
            className="w-full flex items-center justify-center gap-2 bg-[#C2410C] active:scale-[0.98] text-white font-black text-sm rounded-xl h-12"
          >
            <MessageCircle size={17} /> Book {when === 'date' ? 'now' : when} · {aed(total)}
          </a>
        </div>
      )}
    </div>
  );
}
