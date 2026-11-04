import { useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';
import PackageImage from '../components/PackageImage';
import QuickBook from '../components/QuickBook';
import TimingsPickup from '../components/sections/TimingsPickup';
import { LANDING_PAGES } from '../data/landingPages';
import { SAFARI_PACKAGES, aed, UNIT_LABEL } from '../data/safariPackages';
import NotFoundPage from './NotFoundPage';

export default function AdLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) return <NotFoundPage />;

  const packages = page.packageIds.flatMap((id) => SAFARI_PACKAGES.filter((p) => p.id === id));
  const lead = packages[0];

  return (
    <>
      <SEO
        title={`${page.title} | Dubai Dune Tours`}
        description={page.subhead}
        canonical={lead.detailPath}
        ogImage={lead.image}
        noindex
      />

      <section className="bg-[#0F172A] pt-24 sm:pt-32 pb-8 sm:pb-14">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8 items-start">
          <div className="lg:col-span-3 space-y-4">
            <h1 className="text-[1.7rem] leading-tight sm:text-4xl font-black text-white tracking-tight">{page.headline}</h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">{page.subhead}</p>
            <ul className="space-y-1.5">
              {page.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Check size={15} strokeWidth={3} className="text-emerald-400 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] shadow-xl hidden lg:block">
              <PackageImage pkg={lead} eager />
            </div>
          </div>

          <aside className="lg:col-span-2 bg-white rounded-2xl border-2 border-[#C2410C] shadow-xl p-4 sm:p-6">
            <div className="flex items-baseline gap-1.5 mb-3.5">
              <span className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                {packages.length > 1 ? `From ${aed(Math.min(...packages.map((p) => p.price)))}` : aed(lead.price)}
              </span>
              <span className="text-xs font-semibold text-[#56657A]">{UNIT_LABEL[lead.priceUnit]}</span>
            </div>
            <QuickBook
              packages={packages}
              source={`go_${page.slug}`}
              defaultWhen={page.defaultWhen}
              defaultArea={page.defaultArea}
              sticky
            />
          </aside>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 pb-24 md:pb-12">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2] shadow-xl lg:hidden">
            <PackageImage pkg={lead} />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] mb-3.5">What’s included</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {lead.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-sm font-semibold text-[#1E293B]">
                  <Check size={15} strokeWidth={3} className="text-emerald-700 shrink-0 mt-0.5" /> {inc}
                </li>
              ))}
            </ul>
          </div>
          <TimingsPickup itinerary={lead.itinerary} pickupInfo={lead.pickupInfo} />
        </div>
      </section>
    </>
  );
}
