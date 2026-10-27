import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/sections/FinalCTA';
import { GUIDES } from '../data/guides';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, BASE_URL } from '../data/schemaData';

import { srcSet, CARD_SIZES } from '../utils/img';
export default function GuidesPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Guides' }];

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Dubai Desert Safari & Travel Guides',
    url: `${BASE_URL}/guides`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: GUIDES.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}/guides/${g.slug}`,
        name: g.title,
      })),
    },
  };

  return (
    <>
      <SEO
        title="Dubai Desert Safari & Travel Guides | Prices, Tips & Itineraries"
        description="Straight answers from a licensed Dubai safari operator: desert safari prices, best time to go, what to wear, safety, travelling with kids, Abu Dhabi mosque dress code and one-day itineraries."
        canonical="/guides"
        schema={[getBreadcrumbSchema(breadcrumbs, '/guides'), listSchema]}
      />
      <PageHero
        label="Guides & Insights"
        title="Dubai Travel Guides from"
        titleEm="the Operator"
        subtitle="Honest, practical answers to the questions our guests ask most — written by the team that runs the tours every day."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Ask Us a Question', href: getWhatsAppLink('Hi! I have a question about planning my Dubai trip.') }}
      />

      <section className="py-10 sm:py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <h2 className="sr-only">All guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {GUIDES.map((g) => (
                    <Link
                      key={g.slug}
                      to={`/guides/${g.slug}`}
                      className="group bg-white rounded-2xl border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                        <img
                          src={g.image}
                    srcSet={srcSet(g.image)}
                    sizes={CARD_SIZES}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#C2410C] mb-2">
                          {g.category}
                          <span className="text-slate-300">·</span>
                          <span className="flex items-center gap-1 text-[#56657A]">
                            <Clock size={11} /> {g.readMinutes} min read
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold leading-snug text-[#0F172A] group-hover:text-[#C2410C] transition-colors">
                          {g.title}
                        </h3>
                        <p className="text-sm text-[#475569] font-medium mt-2 line-clamp-3 flex-1">{g.description}</p>
                        <span className="mt-4 text-xs font-bold text-[#C2410C] inline-flex items-center gap-1">
                          Read guide <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
