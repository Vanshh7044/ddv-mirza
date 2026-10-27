import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import { getWhatsAppLink } from '../data/safariPackages';

const POPULAR = [
  { label: 'Evening Desert Safari', to: '/evening-desert-safari' },
  { label: 'All Safari Packages', to: '/desert-safari' },
  { label: 'City Tours & Dhow Cruise', to: '/city-tours' },
  { label: 'Contact Us', to: '/contact' },
];

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Dubai Dune Tours"
        description="This page has moved or no longer exists. Browse our desert safaris and city tours."
        canonical="/404"
        noindex
      />
      <section className="bg-[#0F172A] text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#C2410C]/15 text-[#C2410C] flex items-center justify-center">
            <Compass size={28} />
          </div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#C2410C] mb-2">404 · Off the track</p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            This dune doesn’t exist.
          </h1>
          <p className="text-slate-300 font-medium mb-8">
            The page you’re looking for has moved. Try one of these instead, or message us and we’ll help you plan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto mb-8">
            {POPULAR.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold transition-colors"
              >
                {p.label} <ArrowRight size={14} className="text-[#C2410C]" />
              </Link>
            ))}
          </div>
          <a
            href={getWhatsAppLink('Hi! I was looking for a page on your site — can you help me pick a tour?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-sm px-6 py-3.5 rounded-xl"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
