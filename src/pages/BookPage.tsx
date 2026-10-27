import { useEffect, useMemo, useState, type FormEvent, type ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Mail, ShieldCheck, Clock, CreditCard, Info } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { SAFARI_PACKAGES, getWhatsAppLink, aed, UNIT_LABEL, type SafariPackage } from '../data/safariPackages';
import { DESERT_ADDONS } from '../data/addons';
import { getBreadcrumbSchema } from '../data/schemaData';
import { trackBookingFormSubmit, trackEmailClick } from '../utils/analytics';

import { smoothScrollTo } from '../hooks/useSmoothScroll';
const BOOKING_EMAIL = 'info@dubaidunetours.com';

const GROUPS: { label: string; cats: SafariPackage['category'][] }[] = [
  { label: 'Evening Desert Safari', cats: ['evening'] },
  { label: 'Safari + Quad Combos', cats: ['combo'] },
  { label: 'Private Short Tours', cats: ['short'] },
  { label: 'Self-Drive', cats: ['selfdrive'] },
  { label: 'VIP & Private Setups', cats: ['vip'] },
  { label: 'City Tours & Cruises', cats: ['city'] },
];
const EXTRA_OPTIONS = [
  { id: 'tickets', title: 'Attraction tickets (tell us which below)' },
  { id: 'transfer', title: 'Airport / private transfer' },
  { id: 'custom', title: 'Something else / custom plan' },
];
const DESERT_CATS: SafariPackage['category'][] = ['evening', 'combo', 'short', 'selfdrive', 'vip'];

const field =
  'w-full h-12 px-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#C2410C] focus:bg-white outline-none text-[#0F172A] font-medium';
const lbl = 'block text-xs font-bold uppercase tracking-wide text-[#0F172A] mb-1.5';

const initial = {
  name: '',
  whatsapp: '',
  email: '',
  nationality: '',
  tour: SAFARI_PACKAGES[0].id,
  date: '',
  adults: 2,
  children: 0,
  hotel: '',
  pickup: '',
  pickupTime: '',
  transport: 'Sharing' as 'Sharing' | 'Private',
  addons: [] as string[],
  requests: '',
};

const makeRef = () => {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `DDT-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

/** Rough "from" estimate — final price is always confirmed by the team. */
const estimate = (pkg: SafariPackage | undefined, adults: number, children: number) => {
  if (!pkg) return null;
  const people = adults + children;
  switch (pkg.priceUnit) {
    case 'person':
      return { total: pkg.price * adults, note: children ? 'for adults; child rates confirmed on WhatsApp' : 'for adults' };
    case 'vehicle': {
      const cars = Math.max(1, Math.ceil(people / 6));
      return { total: pkg.price * cars, note: `${cars} private car${cars > 1 ? 's' : ''} (up to 6 each)` };
    }
    case '2 adults':
      return { total: pkg.price * Math.max(1, Math.ceil(adults / 2)), note: 'per 2 adults' };
    default:
      return { total: pkg.price, note: 'per group' };
  }
};

export default function BookPage() {
  const [params] = useSearchParams();
  const [f, setF] = useState(initial);
  const [done, setDone] = useState<{ ref: string; message: string } | null>(null);

  // Prefill from links like /book?package=evening-vip&addons=quad (after hydration, so SSR HTML matches)
  useEffect(() => {
    const pkg = params.get('package');
    const addons = params.get('addons');
    setF((prev) => ({
      ...prev,
      tour: pkg && [...SAFARI_PACKAGES.map((p) => p.id), ...EXTRA_OPTIONS.map((o) => o.id)].includes(pkg) ? pkg : prev.tour,
      addons: addons ? addons.split(',').filter((id) => DESERT_ADDONS.some((a) => a.id === id)) : prev.addons,
    }));
  }, [params]);

  const pkg = SAFARI_PACKAGES.find((p) => p.id === f.tour);
  const extra = EXTRA_OPTIONS.find((o) => o.id === f.tour);
  const tourTitle = pkg?.title ?? extra?.title ?? '';
  const privateOnly = pkg?.priceUnit === 'vehicle' || pkg?.category === 'vip';
  const isDesert = pkg ? DESERT_CATS.includes(pkg.category) : false;
  const est = useMemo(() => estimate(pkg, f.adults, f.children), [pkg, f.adults, f.children]);

  useEffect(() => {
    if (privateOnly && f.transport !== 'Private') setF((p) => ({ ...p, transport: 'Private' }));
  }, [privateOnly, f.transport]);

  const on = (k: keyof typeof initial) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: k === 'adults' ? Math.max(1, Number(v) || 1) : k === 'children' ? Math.max(0, Number(v) || 0) : v }));
  };
  const toggleAddon = (id: string) =>
    setF((p) => ({ ...p, addons: p.addons.includes(id) ? p.addons.filter((x) => x !== id) : [...p.addons, id] }));

  const buildMessage = (ref: string) => {
    const addonNames = DESERT_ADDONS.filter((a) => f.addons.includes(a.id)).map((a) => a.name);
    const block = (lines: (string | false)[]) => lines.filter(Boolean).join('\n');
    return [
      `NEW BOOKING REQUEST — ${ref}`,
      block([
        `Tour: ${tourTitle}${pkg ? ` (${aed(pkg.price)} ${UNIT_LABEL[pkg.priceUnit]})` : ''}`,
        `Date: ${f.date}`,
        `Guests: ${f.adults} adult(s), ${f.children} child(ren)`,
        `Transport: ${f.transport}`,
        addonNames.length > 0 && `Add-ons: ${addonNames.join(', ')}`,
      ]),
      block([
        `Name: ${f.name}`,
        `WhatsApp: ${f.whatsapp}`,
        `Email: ${f.email}`,
        !!f.nationality && `Nationality: ${f.nationality}`,
        `Hotel: ${f.hotel || '—'}`,
        `Pickup location: ${f.pickup || '—'}`,
        !!f.pickupTime && `Preferred pickup time: ${f.pickupTime}`,
        !!f.requests && `Special requests: ${f.requests}`,
      ]),
      est ? `Estimate shown on website: from ${aed(est.total)} (${est.note})` : '',
    ]
      .filter(Boolean)
      .join('\n\n');
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const ref = makeRef();
    const message = buildMessage(ref);
    trackBookingFormSubmit(tourTitle, f.date, f.name);
    window.open(getWhatsAppLink(message), '_blank', 'noopener');
    setDone({ ref, message });
    smoothScrollTo(0);
  };

  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Book Online' }];
  const mailto = done
    ? `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(`Booking request ${done.ref}`)}&body=${encodeURIComponent(done.message)}`
    : '';

  return (
    <>
      <SEO
        title="Book Online | Desert Safari, City Tours, Tickets & Transfers – Dubai Dune Tours"
        description="Book your Dubai desert safari, Dubai or Abu Dhabi city tour, attraction tickets or airport transfer online. No deposit — we confirm on WhatsApp within minutes."
        canonical="/book"
        schema={getBreadcrumbSchema(breadcrumbs, '/book')}
      />
      <PageHero
        label="Online Booking · No Deposit"
        title="Book Your"
        titleEm="Dubai Experience"
        subtitle="Fill in your details once — we confirm availability, pickup time and final price on WhatsApp, usually within minutes."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {done ? (
              <div className="bg-white rounded-2xl border-2 border-emerald-500 p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={32} className="text-emerald-700 shrink-0" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black">Booking request ready</h2>
                    <p className="text-sm text-[#475569] font-medium">
                      Reference <strong className="text-[#0F172A] font-mono">{done.ref}</strong>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#334155] font-medium mb-4">
                  WhatsApp has opened with your booking details — <strong>press send</strong> to submit it. Our team will reply with your confirmation, pickup time and final price. Nothing is charged until we confirm.
                </p>
                <pre className="whitespace-pre-wrap text-[13px] bg-slate-50 border border-slate-200 rounded-xl p-4 text-[#334155] font-mono mb-5">{done.message}</pre>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={getWhatsAppLink(done.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black text-sm inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={17} /> Open WhatsApp again
                  </a>
                  <a
                    href={mailto}
                    onClick={() => trackEmailClick('booking_form')}
                    className="flex-1 h-12 rounded-xl bg-[#0F172A] hover:bg-black text-white font-bold text-sm inline-flex items-center justify-center gap-2"
                  >
                    <Mail size={16} /> Send by email instead
                  </a>
                </div>
                <button type="button" onClick={() => setDone(null)} className="mt-4 text-xs font-bold text-[#56657A] hover:text-[#C2410C] cursor-pointer">
                  ← Edit booking details
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white rounded-2xl border border-sand shadow-sm p-5 sm:p-8 space-y-8">
                {/* 1. Tour */}
                <fieldset className="space-y-4">
                  <legend className="text-lg font-black text-[#0F172A] mb-1">1. Your tour</legend>
                  <div>
                    <label className={lbl} htmlFor="b-tour">Tour or activity*</label>
                    <select id="b-tour" required value={f.tour} onChange={on('tour')} className={field}>
                      {GROUPS.map((g) => (
                        <optgroup key={g.label} label={g.label}>
                          {SAFARI_PACKAGES.filter((p) => g.cats.includes(p.category)).map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.title} — {aed(p.price)} {UNIT_LABEL[p.priceUnit]}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <optgroup label="Other">
                        {EXTRA_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.title}</option>)}
                      </optgroup>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={lbl} htmlFor="b-date">Tour date*</label>
                      <input id="b-date" type="date" required value={f.date} onChange={on('date')} className={field} />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-adults">Adults*</label>
                      <input id="b-adults" type="number" min={1} max={100} required value={f.adults} onChange={on('adults')} className={field} />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-children">Children</label>
                      <input id="b-children" type="number" min={0} max={100} value={f.children} onChange={on('children')} className={field} />
                    </div>
                  </div>
                  <div>
                    <span className={lbl}>Transportation*</span>
                    <div className="grid grid-cols-2 gap-3">
                      {(['Sharing', 'Private'] as const).map((t) => {
                        const disabled = t === 'Sharing' && privateOnly;
                        return (
                          <label
                            key={t}
                            className={`h-12 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${
                              f.transport === t ? 'border-[#C2410C] bg-[#C2410C]/5 text-[#0F172A]' : 'border-slate-200 text-[#475569]'
                            } ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <input
                              type="radio"
                              name="transport"
                              value={t}
                              checked={f.transport === t}
                              disabled={disabled}
                              onChange={() => setF((p) => ({ ...p, transport: t }))}
                              className="accent-[#C2410C]"
                            />
                            {t === 'Sharing' ? 'Sharing' : 'Private vehicle'}
                          </label>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-[#56657A] font-medium mt-1.5">
                      {privateOnly ? 'This tour is private — the price covers your own vehicle.' : 'Private vehicles available on most tours at extra cost.'}
                    </p>
                  </div>

                  {isDesert && (
                    <div>
                      <span className={lbl}>Optional add-ons <span className="normal-case font-semibold text-[#56657A]">(additional cost)</span></span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {DESERT_ADDONS.map((a) => {
                          const included = a.includedIn?.includes(f.tour);
                          return (
                            <label
                              key={a.id}
                              className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-all ${
                                included ? 'border-emerald-200 bg-emerald-50 text-emerald-800 cursor-default' : f.addons.includes(a.id) ? 'border-[#C2410C] bg-[#C2410C]/5 cursor-pointer' : 'border-slate-200 cursor-pointer hover:bg-slate-50'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={included || f.addons.includes(a.id)}
                                disabled={included}
                                onChange={() => toggleAddon(a.id)}
                                className="accent-[#C2410C] w-4 h-4"
                              />
                              <a.icon size={17} className={included ? 'text-emerald-700' : 'text-[#C2410C]'} />
                              <span className="flex-1">{a.name}</span>
                              {included && <span className="text-[10px] font-black uppercase">Included</span>}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </fieldset>

                {/* 2. Guest */}
                <fieldset className="space-y-4">
                  <legend className="text-lg font-black text-[#0F172A] mb-1">2. Your details</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={lbl} htmlFor="b-name">Full name*</label>
                      <input id="b-name" required autoComplete="name" value={f.name} onChange={on('name')} className={field} />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-wa">WhatsApp number*</label>
                      <input
                        id="b-wa"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern={String.raw`[\d\s+\-\(\)]{7,20}`}
                        title="Phone number with country code, e.g. +44 7700 900123"
                        placeholder="+44 7700 900123"
                        value={f.whatsapp}
                        onChange={on('whatsapp')}
                        className={field}
                      />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-email">Email*</label>
                      <input id="b-email" type="email" required autoComplete="email" value={f.email} onChange={on('email')} className={field} />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-nat">Nationality <span className="normal-case font-semibold text-[#56657A]">(optional)</span></label>
                      <input id="b-nat" autoComplete="country-name" value={f.nationality} onChange={on('nationality')} className={field} />
                    </div>
                  </div>
                </fieldset>

                {/* 3. Pickup */}
                <fieldset className="space-y-4">
                  <legend className="text-lg font-black text-[#0F172A] mb-1">3. Pickup</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={lbl} htmlFor="b-hotel">Hotel name</label>
                      <input id="b-hotel" value={f.hotel} onChange={on('hotel')} placeholder="e.g. Rove Downtown" className={field} />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-pickup">Pickup location</label>
                      <input id="b-pickup" value={f.pickup} onChange={on('pickup')} placeholder="Area, building or pin" className={field} />
                    </div>
                    <div>
                      <label className={lbl} htmlFor="b-time">Preferred pickup time</label>
                      <input id="b-time" type="time" value={f.pickupTime} onChange={on('pickupTime')} className={field} />
                    </div>
                  </div>
                  <div>
                    <label className={lbl} htmlFor="b-req">Special requests</label>
                    <textarea
                      id="b-req"
                      rows={3}
                      value={f.requests}
                      onChange={on('requests')}
                      placeholder="Child seats, dietary needs, celebrations, which attraction tickets…"
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#C2410C] focus:bg-white outline-none text-[#0F172A] font-medium"
                    />
                  </div>
                </fieldset>

                <button type="submit" className="w-full h-14 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-black text-base shadow-xl shadow-[#C2410C]/25 inline-flex items-center justify-center gap-2 cursor-pointer">
                  <MessageCircle size={19} /> Send booking request
                </button>
                <p className="text-xs text-[#56657A] font-medium text-center -mt-4">
                  Opens WhatsApp with your details. No payment now. See our{' '}
                  <Link to="/cancellation-policy" className="text-[#C2410C] font-bold hover:underline">cancellation policy</Link>.
                </p>
              </form>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="bg-white rounded-2xl border-2 border-[#C2410C] shadow-xl p-5">
                <div className="text-[11px] font-black uppercase tracking-widest text-[#C2410C] mb-2">Your booking</div>
                <div className="font-extrabold text-[#0F172A] leading-snug">{tourTitle}</div>
                <div className="text-sm text-[#475569] font-medium mt-1">
                  {f.date || 'Date not set'} · {f.adults} adult{f.adults > 1 ? 's' : ''}
                  {f.children ? `, ${f.children} child${f.children > 1 ? 'ren' : ''}` : ''} · {f.transport}
                </div>
                {f.addons.length > 0 && (
                  <div className="text-xs text-[#475569] font-semibold mt-2">
                    + {DESERT_ADDONS.filter((a) => f.addons.includes(a.id)).map((a) => a.name).join(', ')}
                  </div>
                )}
                <div className="border-t border-slate-100 mt-4 pt-4">
                  {est ? (
                    <>
                      <div className="text-xs font-bold text-[#56657A] uppercase">Estimated from</div>
                      <div className="text-3xl font-black text-[#0F172A]">{aed(est.total)}</div>
                      <div className="text-xs text-[#56657A] font-medium">{est.note}{f.addons.length ? ' · add-ons extra' : ''}</div>
                    </>
                  ) : (
                    <div className="text-sm font-semibold text-[#475569]">Price quoted on WhatsApp</div>
                  )}
                </div>
              </div>
              <ul className="bg-white rounded-2xl border border-sand p-5 space-y-3 text-sm font-semibold text-[#334155]">
                <li className="flex gap-2.5"><ShieldCheck size={18} className="text-emerald-700 shrink-0" /> No deposit — pay on the day</li>
                <li className="flex gap-2.5"><CreditCard size={18} className="text-emerald-700 shrink-0" /> Cash or card accepted</li>
                <li className="flex gap-2.5"><Clock size={18} className="text-emerald-700 shrink-0" /> Free cancellation up to 24h before</li>
                <li className="flex gap-2.5"><Info size={18} className="text-emerald-700 shrink-0" /> Attraction entry tickets extra unless included</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
