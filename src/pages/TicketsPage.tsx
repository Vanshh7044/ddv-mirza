import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, MessageCircle, Plus, Ticket, X, ArrowRight, CalendarDays } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/sections/FinalCTA';
import { ATTRACTIONS, CATEGORIES, type City, type AttractionCategory, type Attraction } from '../data/attractions';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, BASE_URL } from '../data/schemaData';
import { trackWhatsAppClick } from '../utils/analytics';

const TILE: Record<AttractionCategory, [string, string]> = {
  Landmarks: ['#0F172A', '#EA580C'],
  'Theme Parks': ['#7C2D12', '#F59E0B'],
  'Water & Marine': ['#0C4A6E', '#06B6D4'],
  'Gardens & Seasonal': ['#14532D', '#84CC16'],
  'Cruises & Adventures': ['#1E1B4B', '#6366F1'],
};

const quoteText = (names: string[], date: string, adults: number, kids: number) =>
  `Hi! I'd like a price for these attraction tickets:\n${names.map((n) => `• ${n}`).join('\n')}\nDate: ${date || 'Flexible'}\nAdults: ${adults} · Children: ${kids}\nPlease send the best price and availability.`;

function AttractionTile({ a }: { a: Attraction }) {
  if (a.image) {
    return <img src={a.image} alt={a.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />;
  }
  const [from, to] = TILE[a.category];
  return (
    <div
      role="img"
      aria-label={a.name}
      className="w-full h-full flex items-center justify-center relative"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(circle at 75% 25%, #fff 0, transparent 50%)' }} />
      <a.icon className="relative w-12 h-12 text-white/90" strokeWidth={1.4} />
    </div>
  );
}

export default function TicketsPage() {
  const [city, setCity] = useState<City | 'All'>('All');
  const [category, setCategory] = useState<AttractionCategory | 'All'>('All');
  const [picked, setPicked] = useState<string[]>([]);
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);

  const shown = useMemo(
    () => ATTRACTIONS.filter((a) => (city === 'All' || a.city === city) && (category === 'All' || a.category === category)),
    [city, category]
  );
  const pickedNames = ATTRACTIONS.filter((a) => picked.includes(a.id)).map((a) => `${a.name} (${a.city})`);
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Attraction Tickets' }];
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dubai & Abu Dhabi Attraction Tickets',
    url: `${BASE_URL}/attraction-tickets`,
    itemListElement: ATTRACTIONS.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'TouristAttraction', name: a.name, description: a.desc, address: { '@type': 'PostalAddress', addressLocality: a.city, addressCountry: 'AE' } },
    })),
  };

  const chip = (active: boolean) =>
    `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
      active ? 'bg-[#0F172A] text-white shadow-md' : 'bg-white text-[#475569] border border-sand hover:bg-slate-50'
    }`;

  return (
    <>
      <SEO
        title="Dubai & Abu Dhabi Attraction Tickets | Burj Khalifa, Ferrari World & More"
        description="Book Dubai and Abu Dhabi attraction tickets direct: Burj Khalifa, Museum of the Future, Dubai Frame, Aquaventure, Global Village, Ferrari World, Louvre Abu Dhabi, yacht and helicopter tours. Best price on WhatsApp."
        canonical="/attraction-tickets"
        schema={[getBreadcrumbSchema(breadcrumbs, '/attraction-tickets'), listSchema]}
      />
      <PageHero
        label="Attraction Tickets · Dubai & Abu Dhabi"
        title="Dubai & Abu Dhabi"
        titleEm="Attraction Tickets"
        subtitle="Theme parks, landmarks, aquariums, cruises and adventures. Pick what you want, send one message, and we’ll reply with the best available price — add hotel transfers if you need them."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Ask for Ticket Prices', href: getWhatsAppLink('Hi! I would like prices for Dubai / Abu Dhabi attraction tickets.') }}
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col gap-2.5 mb-6">
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1" role="group" aria-label="Filter by city">
              {(['All', 'Dubai', 'Abu Dhabi'] as const).map((c) => (
                <button key={c} type="button" aria-pressed={city === c} onClick={() => setCity(c)} className={chip(city === c)}>
                  {c === 'All' ? 'All cities' : c}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1" role="group" aria-label="Filter by category">
              {(['All', ...CATEGORIES] as const).map((c) => (
                <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)} className={chip(category === c)}>
                  {c === 'All' ? 'All categories' : c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {shown.map((a) => {
                const on = picked.includes(a.id);
                return (
                  <article
                    key={a.id}
                    id={a.id}
                    className={`bg-white rounded-2xl border overflow-hidden flex flex-col transition-all ${on ? 'border-[#EA580C] ring-2 ring-[#EA580C]/15 shadow-lg' : 'border-sand shadow-sm hover:shadow-md'}`}
                  >
                    <div className="relative aspect-[16/8]">
                      <AttractionTile a={a} />
                      <span className="absolute top-2.5 left-2.5 bg-black/55 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded-md">{a.city}</span>
                      {a.seasonal && (
                        <span className="absolute top-2.5 right-2.5 bg-amber-400 text-[#0F172A] text-[10px] font-black px-2 py-0.5 rounded-md">SEASONAL</span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#EA580C]">{a.category}</div>
                      <h2 className="text-base font-extrabold text-[#0F172A] leading-snug mt-0.5">{a.name}</h2>
                      <p className="text-[13px] text-[#475569] font-medium mt-1.5 flex-1">{a.desc}</p>
                      <div className="flex items-center gap-2 mt-3.5">
                        {a.packagePath ? (
                          <Link to={a.packagePath} className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 rounded-xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold">
                            View package <ArrowRight size={13} />
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => toggle(a.id)}
                            aria-pressed={on}
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 h-10 rounded-xl text-xs font-bold transition-colors cursor-pointer ${on ? 'bg-emerald-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-[#0F172A]'}`}
                          >
                            {on ? <><Check size={14} /> Added</> : <><Plus size={14} /> Add to enquiry</>}
                          </button>
                        )}
                        <a
                          href={getWhatsAppLink(quoteText([`${a.name} (${a.city})`], '', 2, 0))}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('ticket_card', a.name)}
                          className="inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold"
                          aria-label={`Get a price for ${a.name} on WhatsApp`}
                        >
                          <MessageCircle size={14} /> Price
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
              {shown.length === 0 && <p className="text-sm text-[#64748B]">No attractions match these filters.</p>}
            </div>

            {/* Enquiry builder */}
            <aside className="lg:col-span-1">
              <div id="ticket-enquiry" className="lg:sticky lg:top-28 scroll-mt-24 bg-white rounded-2xl border-2 border-[#EA580C] shadow-xl p-5">
                <div className="flex items-center gap-2 text-[#0F172A] font-black text-lg mb-1">
                  <Ticket size={20} className="text-[#EA580C]" /> Your ticket enquiry
                </div>
                <p className="text-xs text-[#64748B] font-medium mb-4">Ticket prices change by date and season — we confirm the best rate on WhatsApp before you pay.</p>

                {pickedNames.length ? (
                  <ul className="space-y-1.5 mb-4">
                    {ATTRACTIONS.filter((a) => picked.includes(a.id)).map((a) => (
                      <li key={a.id} className="flex items-center justify-between gap-2 text-sm font-semibold bg-slate-50 rounded-lg px-3 py-2">
                        <span className="truncate">{a.name}</span>
                        <button type="button" onClick={() => toggle(a.id)} aria-label={`Remove ${a.name}`} className="text-slate-400 hover:text-red-500 cursor-pointer">
                          <X size={15} />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#94A3B8] font-medium mb-4 border border-dashed border-slate-200 rounded-lg p-3 text-center">
                    Tap “Add to enquiry” on any attraction.
                  </p>
                )}

                <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1" htmlFor="t-date">Visit date</label>
                <div className="relative mb-3">
                  <CalendarDays size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input id="t-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full h-11 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EA580C] outline-none text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {([['Adults', adults, setAdults, 1], ['Children', kids, setKids, 0]] as const).map(([label, val, set, min]) => (
                    <div key={label}>
                      <label className="block text-[11px] font-bold uppercase text-[#0F172A] mb-1" htmlFor={`t-${label}`}>{label}</label>
                      <input
                        id={`t-${label}`}
                        type="number"
                        min={min}
                        max={50}
                        value={val}
                        onChange={(e) => set(Math.max(min, Number(e.target.value) || 0))}
                        className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EA580C] outline-none text-sm"
                      />
                    </div>
                  ))}
                </div>

                <a
                  href={pickedNames.length ? getWhatsAppLink(quoteText(pickedNames, date, adults, kids)) : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!pickedNames.length}
                  onClick={(e) => {
                    if (!pickedNames.length) e.preventDefault();
                    else trackWhatsAppClick('ticket_enquiry', `${pickedNames.length} tickets`);
                  }}
                  className={`w-full h-12 flex items-center justify-center gap-2 rounded-xl font-black text-sm transition-all ${
                    pickedNames.length ? 'bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-lg shadow-[#EA580C]/25' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle size={17} /> Get prices on WhatsApp{pickedNames.length ? ` (${pickedNames.length})` : ''}
                </a>
                <p className="text-[11px] text-[#64748B] font-medium mt-3 text-center">
                  Need a ride? Add a <Link to="/transport" className="text-[#EA580C] font-bold hover:underline">private transfer</Link> to any attraction.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Mobile: the enquiry box sits below the list, so surface it once something is picked */}
      {picked.length > 0 && (
        <button
          type="button"
          onClick={() => document.getElementById('ticket-enquiry')?.scrollIntoView({ behavior: 'smooth' })}
          className="lg:hidden fixed left-4 right-4 z-40 h-12 rounded-xl bg-[#0F172A] text-white font-black text-sm shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
          style={{ bottom: 'calc(84px + env(safe-area-inset-bottom, 0px))' }}
        >
          <Ticket size={17} className="text-[#EA580C]" /> Review enquiry ({picked.length})
        </button>
      )}
      <FinalCTA />
    </>
  );
}
