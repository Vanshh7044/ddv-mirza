import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Mail, Compass, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from '../utils/analytics';

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
