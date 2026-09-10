import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Mail, Compass, ShieldCheck, Tag } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick, trackKeywordClick } from '../utils/analytics';

const SEO_KEYWORD_GROUPS = [
  {
    category: 'Popular Safari Tours',
    items: [
      { label: 'Evening Desert Safari Dubai', to: '/evening-desert-safari' },
      { label: 'Red Dune Bashing Safari', to: '/evening-safari/red-dune' },
      { label: 'Budget Desert Safari (AED 79)', to: '/evening-safari/standard' },
      { label: 'Morning Dune Bash & Sandboard', to: '/morning-safari' },
      { label: 'Sunrise Desert Safari Dubai', to: '/morning-safari' },
      { label: 'Self-Drive Convoy Safari (AED 35)', to: '/self-drive' },
      { label: 'Private Desert Camp Setup', to: '/private-desert-setup' },
    ],
  },
  {
    category: 'Desert Adventures',
    items: [
      { label: 'Quad Biking Dubai (150cc / 250cc)', to: '/evening-safari/premium' },
      { label: 'Dune Buggy Rental Lehbab', to: '/evening-safari/premium' },
      { label: 'Sandboarding on High Red Dunes', to: '/morning-safari' },
      { label: 'Sunset Camel Ride & Photos', to: '/evening-desert-safari' },
      { label: 'Live BBQ Buffet & Grill', to: '/evening-safari/standard' },
      { label: 'Fire Show & Tanoura Dance', to: '/evening-desert-safari' },
      { label: 'Falconry Photo Session', to: '/vip-traditional-arabic' },
    ],
  },
  {
    category: 'VIP & Luxury Safaris',
    items: [
      { label: 'VIP Desert Safari Dubai', to: '/vip-traditional-arabic' },
      { label: 'Air-Conditioned VIP Majlis', to: '/vip-traditional-arabic' },
      { label: '100% Private Isolated Camp', to: '/private-desert-setup' },
      { label: 'Private 4×4 Land Cruiser', to: '/evening-safari/vip' },
      { label: 'Romantic Stargazing Setup', to: '/private-desert-setup' },
      { label: 'Corporate Group Desert Safaris', to: '/contact' },
      { label: 'Gourmet Table Service Feast', to: '/vip-traditional-arabic' },
    ],
  },
  {
    category: 'Hotel Pickups & Booking',
    items: [
      { label: 'Dubai Marina Desert Safari Pickup', to: '/contact' },
      { label: 'Downtown & Business Bay Pickup', to: '/contact' },
      { label: 'Deira & Bur Dubai Hotel Pickup', to: '/contact' },
      { label: 'JBR & Palm Jumeirah Transfers', to: '/contact' },
      { label: 'Pay on Arrival (Zero Deposit)', to: '/terms' },
      { label: 'Instant WhatsApp Booking (<3 mins)', to: '/contact' },
      { label: 'Free 24-Hour Cancellation', to: '/cancellation-policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-3.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-white text-base sm:text-lg">Dubai Dune Tours</div>
                <div className="text-[10px] font-bold text-[#EA580C] uppercase tracking-wider">DET Licensed · Since 2010</div>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mt-2">
              Dubai's premier direct safari operator. In-house fleet of Land Cruisers, certified desert drivers, and private desert camps in Lehbab.
            </p>
            <div className="mt-3.5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck size={16} />
              <span>Zero Reseller Markup Guaranteed</span>
            </div>
          </div>

          {/* Safari Packages */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-3">
              Safari Packages
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium">
              <Link to="/evening-safari/standard" className="hover:text-[#EA580C] transition-colors py-0.5">Evening Standard (AED 79)</Link>
              <Link to="/evening-safari/premium" className="hover:text-[#EA580C] transition-colors py-0.5">Evening Premium + Quad (AED 119)</Link>
              <Link to="/evening-safari/vip" className="hover:text-[#EA580C] transition-colors py-0.5">Evening VIP + Majlis (AED 299)</Link>
              <Link to="/morning-safari" className="hover:text-[#EA580C] transition-colors py-0.5">Sunrise Desert Safari (AED 349)</Link>
              <Link to="/self-drive" className="hover:text-[#EA580C] transition-colors py-0.5">Self-Drive Convoy (AED 35)</Link>
              <Link to="/vip-traditional-arabic" className="hover:text-[#EA580C] transition-colors py-0.5">VIP Traditional Arabic (AED 999)</Link>
              <Link to="/private-desert-setup" className="hover:text-[#EA580C] transition-colors py-0.5">Private Desert Camp Setup</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-3">
              Quick Navigation
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium">
              <Link to="/" className="hover:text-[#EA580C] transition-colors py-0.5">Home Page</Link>
              <Link to="/desert-safari" className="hover:text-[#EA580C] transition-colors py-0.5">All Safari Packages</Link>
              <Link to="/about" className="hover:text-[#EA580C] transition-colors py-0.5">About Our Fleet & Team</Link>
              <Link to="/#itinerary" className="hover:text-[#EA580C] transition-colors py-0.5">6-Hour Safari Itinerary</Link>
              <Link to="/#faq" className="hover:text-[#EA580C] transition-colors py-0.5">Frequently Asked Questions</Link>
              <Link to="/contact" className="hover:text-[#EA580C] transition-colors py-0.5">Contact & Location</Link>
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-3">
              Direct Contact
            </div>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-medium">
              <a href="tel:+971556015834" onClick={() => trackPhoneClick('footer')} className="flex items-center gap-2 hover:text-[#EA580C] transition-colors py-0.5">
                <Phone size={15} className="text-[#EA580C] shrink-0" /> +971 55 601 5834
              </a>
              <a href="mailto:info@dubaidunetours.com" onClick={() => trackEmailClick('footer')} className="flex items-center gap-2 hover:text-[#EA580C] transition-colors py-0.5">
                <Mail size={15} className="text-[#EA580C] shrink-0" /> info@dubaidunetours.com
              </a>
              <div className="flex items-center gap-2 text-slate-400 py-0.5">
                <MapPin size={15} className="text-[#EA580C] shrink-0" /> Lehbab Rd, Dubai, UAE
              </div>
            </div>

            <a
              href={getWhatsAppLink('Hi! I would like to book a desert safari with Dubai Dune Tours.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs px-4 py-3 rounded-xl transition-all shadow-md shadow-[#EA580C]/20 active:scale-98"
              onClick={() => trackWhatsAppClick('footer', undefined, undefined)}
            >
              <MessageCircle size={15} /> Instant WhatsApp Chat
            </a>
          </div>
        </div>

        {/* SEO Keyword Directory & Popular Searches */}
        <div className="pt-8 pb-10 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#EA580C]/15 text-[#EA580C] flex items-center justify-center">
                <Tag size={12} />
              </div>
              <h3 className="text-xs font-black text-white uppercase tracking-wider">
                Popular Dubai Desert Safari Searches & Destinations
              </h3>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              Direct operator booking across Dubai, Sharjah & Lehbab
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {SEO_KEYWORD_GROUPS.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                  <span>{group.category}</span>
                </div>
                <ul className="space-y-2 text-[11px] sm:text-xs">
                  {group.items.map((kw, kIdx) => (
                    <li key={kIdx}>
                      <Link
                        to={kw.to}
                        onClick={() => trackKeywordClick(kw.label, kw.to)}
                        className="text-slate-400 hover:text-[#EA580C] transition-colors py-0.5 inline-block"
                      >
                        {kw.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 pt-6 border-t border-slate-800/50 text-[11px] text-slate-400 leading-relaxed font-normal">
            <strong className="text-slate-300">Dubai Dune Tours</strong> is a licensed direct desert safari operator registered with the Dubai Department of Economy and Tourism (DET). All tours operate with an in-house fleet of Toyota Land Cruiser 4×4 vehicles, certified desert captains, comprehensive passenger insurance, free hotel pickup across Dubai, and zero advance deposit requirement with 100% pay on arrival.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-xs font-medium text-slate-500 text-center sm:text-left">
          <div>© {new Date().getFullYear()} Dubai Dune Tours. Licensed by Dubai Department of Economy and Tourism (DET).</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors py-1">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors py-1">Terms of Service</Link>
            <Link to="/cancellation-policy" className="hover:text-white transition-colors py-1">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
