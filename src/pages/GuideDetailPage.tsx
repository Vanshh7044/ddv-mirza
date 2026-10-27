import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Clock, MessageCircle, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PackageImage from '../components/PackageImage';
import { GUIDES, getGuide } from '../data/guides';
import { SAFARI_PACKAGES, getWhatsAppLink, aed, UNIT_LABEL } from '../data/safariPackages';
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from '../data/schemaData';
import { trackWhatsAppClick } from '../utils/analytics';
import NotFoundPage from './NotFoundPage';

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d} ${months[m - 1]} ${y}`; // fixed format so SSR and client match
};

export default function GuideDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuide(slug) : undefined;
  if (!guide) return <NotFoundPage />;

  const path = `/guides/${guide.slug}`;
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Guides', to: '/guides' },
    { label: guide.title },
  ];
  const related = guide.related
    .map((id) => SAFARI_PACKAGES.find((p) => p.id === id))
    .filter((p): p is (typeof SAFARI_PACKAGES)[number] => Boolean(p));
  const more = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${guide.title} | Dubai Dune Tours`}
        description={guide.description}
        canonical={path}
        ogImage={guide.image}
        ogType="article"
        schema={[
          getBreadcrumbSchema(breadcrumbs, path),
          getArticleSchema(guide, path),
          ...(guide.faqs.length ? [getFaqSchema(guide.faqs)] : []),
        ]}
      />
      <PageHero label={`Guide · ${guide.category}`} title={guide.title} breadcrumbs={breadcrumbs} />

      <article className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-[#56657A] mb-5">
              <span>By the Dubai Dune Tours team</span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {guide.readMinutes} min read</span>
              <span className="text-slate-300">·</span>
              <time dateTime={guide.updated}>Updated {formatDate(guide.updated)}</time>
            </div>

            {/* Direct answer first — the passage search engines and AI assistants quote */}
            <section aria-label="Quick answer" className="bg-white border-l-4 border-[#C2410C] rounded-2xl p-5 sm:p-6 shadow-sm mb-8">
              <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#C2410C] mb-2">
                <Sparkles size={13} /> Quick answer
              </div>
              <p className="text-base sm:text-lg font-semibold text-[#0F172A] leading-relaxed">{guide.answer}</p>
            </section>

            {guide.sections.length > 2 && (
              <nav aria-label="On this page" className="mb-8 text-sm">
                <div className="font-extrabold text-[#0F172A] mb-2">On this page</div>
                <ol className="list-decimal pl-5 space-y-1 text-[#475569] font-medium">
                  {guide.sections.map((s) => (
                    <li key={s.heading}>
                      <a href={`#${anchor(s.heading)}`} className="hover:text-[#C2410C]">{s.heading}</a>
                    </li>
                  ))}
                  {guide.faqs.length > 0 && (
                    <li><a href="#faq" className="hover:text-[#C2410C]">FAQs</a></li>
                  )}
                </ol>
              </nav>
            )}

            <div className="space-y-9">
              {guide.sections.map((s) => (
                <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-black mb-3">{s.heading}</h2>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="text-[15px] sm:text-base text-[#334155] leading-relaxed mb-3">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-relaxed">
                          <Check size={16} className="text-emerald-700 shrink-0 mt-1" strokeWidth={3} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.table && (
                    <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-[#0F172A] text-white">
                          <tr>
                            {s.table.head.map((h, i) => (
                              <th key={i} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row, ri) => (
                            <tr key={ri} className="border-t border-slate-100 even:bg-slate-50/60">
                              {row.map((cell, ci) =>
                                ci === 0 ? (
                                  <th key={ci} scope="row" className="px-4 py-3 font-bold text-[#0F172A]">{cell}</th>
                                ) : (
                                  <td key={ci} className="px-4 py-3 text-[#334155]">{cell}</td>
                                )
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              {guide.faqs.length > 0 && (
                <section id="faq" className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-black mb-3">Frequently asked questions</h2>
                  <div className="space-y-2.5">
                    {guide.faqs.map((f) => (
                      <details key={f.q} className="group bg-white border border-sand rounded-2xl p-4 open:shadow-md">
                        <summary className="cursor-pointer font-bold text-[#0F172A] list-none flex justify-between gap-3">
                          {f.q}
                          <span className="text-[#C2410C] group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="mt-2 text-[15px] text-[#334155] leading-relaxed">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Sidebar: recommended tours */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="text-xs font-black uppercase tracking-widest text-[#C2410C]">Recommended tours</div>
              {related.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm">
                  <Link to={p.detailPath} className="block aspect-[16/8] overflow-hidden">
                    <PackageImage pkg={p} />
                  </Link>
                  <div className="p-4">
                    <Link to={p.detailPath} className="font-extrabold text-[#0F172A] hover:text-[#C2410C] leading-snug block">
                      {p.title}
                    </Link>
                    <div className="flex items-center justify-between mt-3 gap-2">
                      <div>
                        <span className="text-xl font-black">{aed(p.price)}</span>
                        <span className="text-xs text-[#56657A] font-semibold"> {UNIT_LABEL[p.priceUnit]}</span>
                      </div>
                      <a
                        href={getWhatsAppLink(p.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('guide_sidebar', p.title, p.price)}
                        className="inline-flex items-center gap-1.5 bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold px-3 py-2 rounded-lg"
                      >
                        <MessageCircle size={14} /> Book
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* More guides */}
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 mt-14">
          <h2 className="text-xl sm:text-2xl font-black mb-4">More guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {more.map((g) => (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className="group bg-white border border-sand rounded-2xl p-5 hover:border-[#C2410C]/50 hover:shadow-md transition-all"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#C2410C] mb-1">{g.category}</div>
                <div className="font-extrabold text-[#0F172A] group-hover:text-[#C2410C] leading-snug">{g.title}</div>
                <span className="mt-3 text-xs font-bold text-[#56657A] inline-flex items-center gap-1">
                  Read <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
