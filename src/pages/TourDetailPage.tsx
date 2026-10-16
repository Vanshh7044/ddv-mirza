import { Link, useParams } from 'react-router-dom';
import { Check, X, Clock, MapPin, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PackageImage from '../components/PackageImage';
import FinalCTA from '../components/sections/FinalCTA';
import { CITY_TOURS, getWhatsAppLink, aed, UNIT_LABEL } from '../data/safariPackages';
import { getBreadcrumbSchema, getTouristTripSchema, BASE_URL } from '../data/schemaData';
import { trackWhatsAppClick } from '../utils/analytics';
import NotFoundPage from './NotFoundPage';

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const tour = CITY_TOURS.find((t) => t.slug === slug);
  if (!tour) return <NotFoundPage />;

  const others = CITY_TOURS.filter((t) => t.id !== tour.id);
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'City Tours', to: '/city-tours' },
    { label: tour.title },
  ];
  const book = () => trackWhatsAppClick('tour_detail', tour.title, tour.price);

  return (
    <>
      <SEO
        title={`${tour.title} (${aed(tour.price)}) | Dubai Dune Tours`}
        description={`${tour.tagline} ${tour.pickupInfo}. Pay on arrival, no deposit.`}
        canonical={tour.detailPath}
        ogImage={tour.image}
        ogType="product"
        schema={[
          getBreadcrumbSchema(breadcrumbs, tour.detailPath),
          getTouristTripSchema(tour, `${BASE_URL}${tour.detailPath}`),
        ]}
      />
      <PageHero
        label={`${tour.location} · ${tour.duration}`}
        title={tour.title}
        subtitle={tour.tagline}
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Book on WhatsApp', href: getWhatsAppLink(tour.whatsAppText) }}
        price={aed(tour.price)}
        priceNote={`${UNIT_LABEL[tour.priceUnit].slice(2)} · pay on arrival`}
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {tour.poster ? (
              <img
                src={tour.poster}
                alt={`${tour.title} — tour poster with included stops`}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl"
                loading="eager"
                decoding="async"
              />
            ) : (
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
              <PackageImage pkg={tour} eager />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] sm:text-sm font-bold">
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <Clock size={14} className="text-[#EA580C]" /> {tour.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <MapPin size={14} className="text-[#EA580C]" /> {tour.location}
                </span>
              </div>
            </div>
            )}

            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-sand shadow-sm">
              <h2 className="text-lg sm:text-2xl font-extrabold mb-4">What’s included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {tour.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm font-semibold text-[#1E293B]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
              {tour.excludes && (
                <ul className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-x-5 gap-y-2">
                  {tour.excludes.map((ex) => (
                    <li key={ex} className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B]">
                      <X size={13} className="text-slate-400" /> Not included: {ex}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {tour.itinerary && (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-sand shadow-sm">
                <h2 className="text-lg sm:text-2xl font-extrabold mb-5">Itinerary</h2>
                <ol className="relative border-l-2 border-[#EA580C]/25 ml-2 space-y-5">
                  {tour.itinerary.map((step) => (
                    <li key={step.title} className="pl-5 relative">
                      <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#EA580C]" />
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#EA580C]">{step.time}</div>
                      <div className="font-extrabold text-[#0F172A]">{step.title}</div>
                      <p className="text-sm text-[#475569] font-medium">{step.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold mb-3">More city experiences</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {others.map((o) => (
                  <Link
                    key={o.id}
                    to={o.detailPath}
                    className="group bg-white border border-sand rounded-2xl p-4 hover:border-[#EA580C]/50 hover:shadow-md transition-all"
                  >
                    <div className="text-sm font-extrabold text-[#0F172A] group-hover:text-[#EA580C] leading-snug">{o.title}</div>
                    <div className="text-xs text-[#64748B] font-semibold mt-1 flex items-center justify-between">
                      {aed(o.price)} {UNIT_LABEL[o.priceUnit]} <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Booking widget */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-[#EA580C] shadow-xl lg:sticky lg:top-28">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/10 px-2.5 py-1 rounded-full">
                Direct Rate
              </span>
              <div className="mt-4 mb-5">
                {tour.originalPrice > tour.price && (
                  <div className="text-xs text-[#94A3B8] line-through font-bold">{aed(tour.originalPrice)}</div>
                )}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">{aed(tour.price)}</span>
                  <span className="text-sm font-semibold text-[#64748B]">{UNIT_LABEL[tour.priceUnit]}</span>
                </div>
                <div className="text-xs text-emerald-600 font-bold mt-1">✓ {tour.pickupInfo}</div>
              </div>
              <ul className="space-y-2.5 mb-5 pt-3.5 border-t border-slate-100 text-xs text-[#475569] font-medium">
                {['Pay cash or card on the day', 'Free cancellation up to 24h prior', tour.priceUnit === 'vehicle' ? 'Price is for the whole car (up to 6)' : 'Private vehicle option on request'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppLink(tour.whatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={book}
                className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-sm rounded-xl shadow-xl shadow-[#EA580C]/30 transition-all h-[48px]"
              >
                <MessageCircle size={18} /> Reserve via WhatsApp
              </a>
              <Link
                to={`/book?package=${tour.id}`}
                className="mt-2.5 w-full h-11 rounded-xl border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-bold text-sm inline-flex items-center justify-center transition-colors"
              >
                Book with online form
              </Link>
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] font-semibold mt-3.5">
                <ShieldCheck size={13} className="text-emerald-600" /> No card required · Reply in minutes
              </p>
            </div>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
