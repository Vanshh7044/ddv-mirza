import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, Home } from 'lucide-react';
import { trackBreadcrumbClick } from '../utils/analytics';

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
      className={`relative pt-20 pb-8 sm:pt-28 sm:pb-12 md:pt-36 md:pb-16 overflow-hidden ${
        dark ? 'bg-[#0F172A] text-white' : 'bg-[#F8F6F0] text-[#0F172A]'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="w-full max-w-full pb-1 mb-3">
            <ol className="flex items-center gap-1.5 overflow-x-auto scrollbar-none touch-pan-x text-[11px] sm:text-xs font-semibold">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                  {i > 0 && <ChevronRight size={12} className={dark ? 'text-slate-500 shrink-0' : 'text-slate-400 shrink-0'} />}
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      onClick={() => trackBreadcrumbClick(crumb.label, crumb.to || '/')}
                      className={`inline-flex items-center gap-1 hover:text-[#EA580C] transition-colors py-0.5 ${
                        dark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#EA580C]'
                      }`}
                    >
                      {i === 0 && <Home size={11} className="shrink-0 -mt-0.5 opacity-80" />}
                      <span>{crumb.label}</span>
                    </Link>
                  ) : (
                    <span 
                      aria-current="page"
                      className="text-[#EA580C] font-bold py-0.5"
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Section Label */}
        {label && (
          <div className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C] mb-2.5">
            <span>◆</span>
            <span>{label}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-3 sm:mb-4 max-w-4xl ${dark ? 'text-white' : 'text-[#0F172A]'}`}>
          {title}
          {titleEm && (
            <span className="text-[#EA580C]"> {titleEm}</span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-5 sm:mb-7 max-w-2xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}

        {/* Mobile Price Highlight Pill */}
        {price && (
          <div className="md:hidden inline-flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-3 py-1.5 mb-5">
            <span className="text-xs text-slate-300 font-medium">Starting at</span>
            <span className="text-lg font-black text-amber-400">{price}</span>
            {priceNote && <span className="text-[10px] text-slate-400">{priceNote}</span>}
          </div>
        )}

        {/* CTAs & Desktop Price Box */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] active:scale-98 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#EA580C]/25 h-[48px]"
            >
              <MessageCircle size={17} />
              <span>{primaryCta.label}</span>
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all border h-[48px] ${
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
