import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';

interface PageHeroProps {
  label?: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  price?: string;
  priceNote?: string;
  dark?: boolean;
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
      className={`relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden ${
        dark ? 'bg-[#0F172A] text-white' : 'bg-[#F8F6F0] text-[#0F172A]'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold">
                {i > 0 && <ChevronRight size={13} className={dark ? 'text-slate-500' : 'text-slate-400'} />}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className={`hover:text-[#EA580C] transition-colors ${
                      dark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#EA580C] font-bold">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Section label */}
        {label && (
          <div className={`text-xs font-extrabold uppercase tracking-widest mb-3 ${dark ? 'text-[#EA580C]' : 'text-[#EA580C]'}`}>
            {label}
          </div>
        )}

        {/* Main Title */}
        <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] mb-4 max-w-4xl ${dark ? 'text-white' : 'text-[#0F172A]'}`}>
          {title}
          {titleEm && (
            <span className="text-[#EA580C]"> {titleEm}</span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}

        {/* CTAs & Price */}
        <div className="flex flex-wrap items-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#EA580C]/25"
            >
              <MessageCircle size={17} />
              <span>{primaryCta.label}</span>
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-xl transition-all border ${
                dark
                  ? 'border-slate-700 text-white hover:bg-slate-800'
                  : 'border-slate-300 text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              {secondaryCta.label}
            </a>
          )}
          {price && (
            <div className="ml-auto hidden md:block text-right">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Starting From</div>
              <div className={`text-3xl font-black ${dark ? 'text-white' : 'text-[#0F172A]'}`}>
                {price}
              </div>
              {priceNote && <div className="text-xs text-slate-400 font-medium">{priceNote}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
