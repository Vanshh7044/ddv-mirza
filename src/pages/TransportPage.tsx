import { useState, type FormEvent } from 'react';
import { Users, Luggage, MessageCircle, ShieldCheck, Clock, PlaneLanding, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/sections/FinalCTA';
import { TRANSFER_SERVICES, VEHICLES } from '../data/transport';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, BASE_URL } from '../data/schemaData';
import { trackWhatsAppClick } from '../utils/analytics';

import { smoothScrollTo } from '../hooks/useSmoothScroll';
const field = 'w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#C2410C] focus:bg-white outline-none text-sm text-[#0F172A]';
const label = 'block text-[11px] font-bold uppercase text-[#0F172A] mb-1';

export default function TransportPage() {
  const [form, setForm] = useState({
    service: TRANSFER_SERVICES[0].name,
    vehicle: VEHICLES[0].name,
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: 2,
    flight: '',
    name: '',
  });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: k === 'passengers' ? Math.max(1, Number(e.target.value) || 1) : e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi! I'd like a quote for a private transfer.`,
      `Service: ${form.service}`,
      `Vehicle: ${form.vehicle}`,
      `From: ${form.from}`,
      `To: ${form.to}`,
      `Date & time: ${form.date || 'TBC'} ${form.time}`.trim(),
      `Passengers: ${form.passengers}`,
      form.flight && `Flight no.: ${form.flight}`,
      form.name && `Name: ${form.name}`,
    ].filter(Boolean);
    trackWhatsAppClick('transfer_form', form.service);
    setSent(true);
    window.open(getWhatsAppLink(lines.join('\n')), '_blank', 'noopener');
  };

  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Private Transport' }];
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private airport and city transfers',
    name: 'Dubai Airport Transfers & Private Transportation',
    url: `${BASE_URL}/transport`,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Transfer services',
      itemListElement: TRANSFER_SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.desc } })),
    },
  };

  return (
    <>
      <SEO
        title="Dubai Airport Transfers & Private Car with Driver | Land Cruiser, SUV, Van"
        description="Private Dubai airport pickup and drop-off (DXB, DWC), Sharjah and Abu Dhabi airport transfers, Dubai–Abu Dhabi rides and hourly car with driver. Land Cruiser, SUVs, 7-seaters and 14-seater vans. Quote on WhatsApp."
        canonical="/transport"
        schema={[getBreadcrumbSchema(breadcrumbs, '/transport'), serviceSchema]}
      />
      <PageHero
        label="Private Transportation · Airport Transfers"
        title="Private Transfers &"
        titleEm="Car with Driver"
        subtitle="Airport pickups, intercity rides and private cars for the day — clean vehicles, professional drivers and fixed quotes before you travel."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Get a Transfer Quote', href: getWhatsAppLink('Hi! I would like a quote for a private transfer in Dubai.') }}
      />

      {/* Trust strip */}
      <div className="bg-white border-b border-sand">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-semibold text-[#334155]">
          <div className="flex items-center gap-2"><PlaneLanding size={18} className="text-[#C2410C]" /> Flight tracking on airport pickups</div>
          <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#C2410C]" /> Fixed price agreed before the ride</div>
          <div className="flex items-center gap-2"><Clock size={18} className="text-[#C2410C]" /> Available 24/7 on WhatsApp</div>
        </div>
      </div>

      <section className="py-10 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Services */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-5">Transfer services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TRANSFER_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setForm((f) => ({ ...f, service: s.name }));
                      { const el = document.getElementById('transfer-quote'); if (el) smoothScrollTo(el, -120); }
                    }}
                    className={`text-left bg-white rounded-2xl border p-4 flex gap-3.5 transition-all cursor-pointer hover:shadow-md ${form.service === s.name ? 'border-[#C2410C] ring-2 ring-[#C2410C]/10' : 'border-sand'}`}
                  >
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-[#C2410C]/10 text-[#9A3412] flex items-center justify-center">
                      <s.icon size={21} />
                    </span>
                    <span>
                      <span className="block font-extrabold text-[#0F172A]">{s.name}</span>
                      <span className="block text-[13px] text-[#475569] font-medium mt-0.5">{s.desc}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fleet */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-5">Choose your vehicle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VEHICLES.map((v) => (
                  <div key={v.id} className={`bg-white rounded-2xl border overflow-hidden ${form.vehicle === v.name ? 'border-[#C2410C] ring-2 ring-[#C2410C]/10' : 'border-sand'}`}>
                    <div className="p-5">
                      <h3 className="text-lg font-extrabold text-[#0F172A]">{v.name}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm font-semibold text-[#334155]">
                        <span className="flex items-center gap-1.5"><Users size={15} className="text-[#C2410C]" /> Up to {v.passengers} passengers</span>
                        <span className="flex items-center gap-1.5"><Luggage size={15} className="text-[#C2410C]" /> {v.luggage}</span>
                      </div>
                      <p className="text-[13px] text-[#56657A] font-medium mt-2">Best for: {v.bestFor}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setForm((f) => ({ ...f, vehicle: v.name, passengers: Math.min(f.passengers, v.passengers) }));
                          { const el = document.getElementById('transfer-quote'); if (el) smoothScrollTo(el, -120); }
                        }}
                        className="mt-4 w-full h-10 rounded-xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold cursor-pointer"
                      >
                        {form.vehicle === v.name ? 'Selected' : 'Select this vehicle'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#56657A] font-medium mt-3">Child seats available on request. Exact model depends on availability.</p>
            </div>
          </div>

          {/* Quote form */}
          <aside className="lg:col-span-1">
            <form
              id="transfer-quote"
              onSubmit={submit}
              className="lg:sticky lg:top-28 bg-white rounded-2xl border-2 border-[#C2410C] shadow-xl p-5 space-y-3"
            >
              <div className="font-black text-lg text-[#0F172A]">Get a transfer quote</div>
              <p className="text-xs text-[#56657A] font-medium -mt-1">We reply on WhatsApp with a fixed price — no payment needed to ask.</p>
              <div>
                <label className={label} htmlFor="tr-service">Service</label>
                <select id="tr-service" value={form.service} onChange={set('service')} className={field}>
                  {TRANSFER_SERVICES.map((s) => <option key={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="tr-vehicle">Vehicle</label>
                <select id="tr-vehicle" value={form.vehicle} onChange={set('vehicle')} className={field}>
                  {VEHICLES.map((v) => <option key={v.id}>{v.name}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="tr-from">Pickup location*</label>
                <input id="tr-from" required value={form.from} onChange={set('from')} placeholder="e.g. DXB Terminal 3 / hotel name" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="tr-to">Drop-off location*</label>
                <input id="tr-to" required value={form.to} onChange={set('to')} placeholder="e.g. Hotel in Downtown Dubai" className={field} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={label} htmlFor="tr-date">Date*</label>
                  <input id="tr-date" type="date" required value={form.date} onChange={set('date')} className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="tr-time">Time</label>
                  <input id="tr-time" type="time" value={form.time} onChange={set('time')} className={field} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={label} htmlFor="tr-pax">Passengers</label>
                  <input id="tr-pax" type="number" min={1} max={50} value={form.passengers} onChange={set('passengers')} className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="tr-flight">Flight no.</label>
                  <input id="tr-flight" value={form.flight} onChange={set('flight')} placeholder="Optional" className={field} />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="tr-name">Your name</label>
                <input id="tr-name" value={form.name} onChange={set('name')} placeholder="Optional" className={field} />
              </div>
              <button type="submit" className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-black text-sm shadow-lg shadow-[#C2410C]/25 cursor-pointer">
                <MessageCircle size={17} /> Send quote request
              </button>
              {sent && (
                <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={14} /> WhatsApp opened with your details — just press send.
                </p>
              )}
            </form>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
