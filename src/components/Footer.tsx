import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Mail, Compass, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-white text-lg">Dubai Desert Adventures</div>
                <div className="text-[10px] font-bold text-[#EA580C] uppercase tracking-wider">DET Licensed · Since 2010</div>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mt-3">
              Dubai's premier direct safari operator. In-house fleet of Land Cruisers, certified desert drivers, and private desert camps in Lehbab.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck size={16} />
              <span>Zero Reseller Markup Guaranteed</span>
            </div>
          </div>

          {/* Safari Packages */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-4">
              Safari Packages
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium">
              <Link to="/evening-safari/standard" className="hover:text-[#EA580C] transition-colors">Evening Standard (AED 79)</Link>
              <Link to="/evening-safari/premium" className="hover:text-[#EA580C] transition-colors">Evening Premium + Quad (AED 119)</Link>
              <Link to="/evening-safari/vip" className="hover:text-[#EA580C] transition-colors">Evening VIP + Majlis (AED 299)</Link>
              <Link to="/morning-safari" className="hover:text-[#EA580C] transition-colors">Sunrise Desert Safari (AED 349)</Link>
              <Link to="/self-drive" className="hover:text-[#EA580C] transition-colors">Self-Drive Convoy (AED 35)</Link>
              <Link to="/vip-traditional-arabic" className="hover:text-[#EA580C] transition-colors">VIP Traditional Arabic (AED 999)</Link>
              <Link to="/private-desert-setup" className="hover:text-[#EA580C] transition-colors">Private Desert Camp Setup</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium">
              <Link to="/" className="hover:text-[#EA580C] transition-colors">Home Page</Link>
              <Link to="/desert-safari" className="hover:text-[#EA580C] transition-colors">All Safari Packages</Link>
              <Link to="/about" className="hover:text-[#EA580C] transition-colors">About Our Fleet & Team</Link>
              <Link to="/#itinerary" className="hover:text-[#EA580C] transition-colors">6-Hour Safari Itinerary</Link>
              <Link to="/#faq" className="hover:text-[#EA580C] transition-colors">Frequently Asked Questions</Link>
              <Link to="/contact" className="hover:text-[#EA580C] transition-colors">Contact & Location</Link>
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-4">
              Direct Contact
            </div>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium">
              <a href="tel:+971556015834" className="flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                <Phone size={15} className="text-[#EA580C]" /> +971 55 601 5834
              </a>
              <a href="mailto:info@dubaidesertadv.com" className="flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                <Mail size={15} className="text-[#EA580C]" /> info@dubaidesertadv.com
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={15} className="text-[#EA580C]" /> Lehbab Rd, Dubai, UAE
              </div>
            </div>

            <a
              href={getWhatsAppLink('Hi! I would like to book a desert safari with Dubai Desert Adventures.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-[#EA580C]/20"
            >
              <MessageCircle size={15} /> Instant WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>© {new Date().getFullYear()} Dubai Desert Adventures. Licensed by Dubai Department of Economy and Tourism (DET).</div>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
