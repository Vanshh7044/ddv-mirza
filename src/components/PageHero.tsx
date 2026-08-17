import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  label?: string;            // e.g. "Evening Safari · Dubai"
  title: string;             // main heading
  titleEm?: string;          // italicised colored portion
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  price?: string;
  priceNote?: string;
  dark?: boolean;            // dark bg (default true)
}

export default function PageHero({
  label,
  title,
  titleEm,
  subtitle,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  price,
  priceNote,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden ${
        dark ? 'bg-[#1E2316] text-[#FAF9F8]' : 'bg-[#F7F5F0] text-[#1E2316]'
      }`}
    >
      {/* Decorative grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Subtle dune silhouette at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 pointer-events-none ${dark ? 'opacity-5' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 96'%3E%3Cpath fill='%23${dark ? 'FAF9F8' : '1E2316'}' d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,96L1360,96C1280,96,1120,96,960,96C800,96,640,96,480,96C320,96,160,96,80,96L0,96Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5 sm:gap-2">
                {i > 0 && <ChevronRight size={11} className={dark ? 'text-[#FAF9F8]/30' : 'text-stone/40'} />}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className={`font-mono text-[10px] sm:text-[11px] tracking-wider uppercase hover:text-safari-orange transition-colors ${
                      dark ? 'text-[#FAF9F8]/40' : 'text-stone'
                    }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-safari-orange font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Section label */}
        {label && (
          <div className={`font-mono text-[10px] sm:text-[11px] tracking-widest uppercase mb-3 sm:mb-4 ${dark ? 'text-[#FAF9F8]/40' : 'text-stone'}`}>
            {label}
          </div>
        )}

        {/* Title */}
        <h1 className={`font-serif font-light text-[32px] sm:text-5xl md:text-7xl tracking-tight leading-[1.06] mb-4 sm:mb-6 max-w-3xl ${dark ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>
          {title}
          {titleEm && (
            <>
              {' '}
              <em className="italic text-safari-orange">{titleEm}</em>
            </>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-[14px] sm:text-[16px] leading-relaxed mb-6 sm:mb-10 max-w-xl ${dark ? 'text-[#FAF9F8]/55' : 'text-stone'}`}>
            {subtitle}
          </p>
        )}

        {/* Mobile Price Badge */}
        {price && (
          <div className="md:hidden flex items-center gap-2 mb-6">
            <span className={`font-mono text-[11px] uppercase ${dark ? 'text-[#FAF9F8]/40' : 'text-stone/60'}`}>From</span>
            <span className={`font-serif text-2xl font-medium ${dark ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>{price}</span>
            {priceNote && <span className={`font-mono text-[11px] ${dark ? 'text-[#FAF9F8]/40' : 'text-stone/60'}`}>({priceNote})</span>}
          </div>
        )}

        {/* CTAs + Desktop price */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="flex items-center justify-center gap-2 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[11px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all shadow-lg shadow-safari-orange/20 w-full sm:w-auto"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className={`flex items-center justify-center gap-2 font-mono text-[11px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all border w-full sm:w-auto ${
                dark
                  ? 'border-[#FAF9F8]/20 text-[#FAF9F8] hover:bg-[#FAF9F8]/5'
                  : 'border-stone/30 text-[#1E2316] hover:bg-black/5'
              }`}
            >
              {secondaryCta.label}
            </a>
          )}
          {price && (
            <div className="ml-auto hidden md:block text-right">
              <div className={`font-mono text-[11px] uppercase mb-0.5 ${dark ? 'text-[#FAF9F8]/35' : 'text-stone/60'}`}>From</div>
              <div className={`font-serif text-4xl ${dark ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>
                {price}
              </div>
              {priceNote && <div className={`font-mono text-[11px] ${dark ? 'text-[#FAF9F8]/35' : 'text-stone/60'}`}>{priceNote}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
