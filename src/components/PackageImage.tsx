import { Landmark, Ship, Building2, MapPin } from 'lucide-react';
import type { SafariPackage } from '../data/safariPackages';

/**
 * Package photo, or — for tours that don't have a real photo yet — an
 * illustrated gradient panel so the card still looks finished.
 * TODO: drop real photos into /public/images and set `image` in safariPackages.ts.
 */
const ART: Record<string, { from: string; to: string; Icon: typeof Landmark }> = {
  'dubai-city-tour': { from: '#0F172A', to: '#1D4ED8', Icon: Building2 },
  'abu-dhabi-city-tour': { from: '#134E4A', to: '#0EA5E9', Icon: Landmark },
  'dhow-cruise-marina': { from: '#1E1B4B', to: '#7C3AED', Icon: Ship },
};

export default function PackageImage({
  pkg,
  className = '',
  eager = false,
}: {
  pkg: SafariPackage;
  className?: string;
  eager?: boolean;
}) {
  if (pkg.image) {
    return (
      <img
        src={pkg.image}
        alt={pkg.title}
        className={`w-full h-full object-cover object-center ${className}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }

  const art = ART[pkg.id] ?? { from: '#0F172A', to: '#EA580C', Icon: MapPin };
  return (
    <div
      role="img"
      aria-label={pkg.title}
      className={`w-full h-full relative flex items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, ${art.from}, ${art.to})` }}
    >
      {/* soft skyline glow */}
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, #fff 0, transparent 45%)' }} />
      <art.Icon className="relative w-16 h-16 sm:w-20 sm:h-20 text-white/90" strokeWidth={1.25} />
      <span className="absolute top-1/2 mt-12 sm:mt-14 text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]">
        {pkg.location}
      </span>
    </div>
  );
}
