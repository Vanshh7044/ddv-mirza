import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#191C22] text-[#FAF9F8]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-14 sm:pt-16 pb-24 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-safari-orange/10 border border-safari-orange/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-safari-orange" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-[#FAF9F8] text-[15px]">Dubai Desert Adventures</div>
                <div className="font-mono text-[9px] tracking-widest text-[#FAF9F8]/30 uppercase">DET Licensed · Since 2010</div>
              </div>
            </Link>
            <p className="font-mono text-[11px] leading-relaxed text-[#FAF9F8]/35 mt-4">
              Dubai's evening desert safari, direct from the operator. Same dunes, same Land Cruisers, refined over 14+ years. No middlemen, no surprises.
            </p>
          </div>

          {/* Activities */}
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/30 uppercase mb-4">Activities</div>
            {[
              { label: 'All Desert Safaris', to: '/desert-safari' },
              { label: 'Evening Desert Safari', to: '/evening-desert-safari' },
              { label: 'Morning & Short Tours', to: '/morning-safari' },
              { label: 'Self-Drive Safari', to: '/self-drive' },
              { label: 'VIP Traditional Safari', to: '/vip-traditional-arabic' },
              { label: 'Private Desert Setup', to: '/private-desert-setup' },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block font-mono text-[11px] text-[#FAF9F8]/45 hover:text-safari-orange transition-colors py-1">{l.label}</Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/30 uppercase mb-4">Quick Links</div>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Contact', to: '/contact' },
              { label: 'FAQs', to: '/#faq' },
              { label: 'Cancellation Policy', to: '/contact' },
              { label: 'Privacy Policy', to: '/contact' },
              { label: 'Terms & Conditions', to: '/contact' },
            ].map((l) => (
              <Link key={l.label} to={l.to} className="block font-mono text-[11px] text-[#FAF9F8]/45 hover:text-safari-orange transition-colors py-1">{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#FAF9F8]/30 uppercase mb-4">Get in Touch</div>
            <div className="flex flex-col gap-3.5">
              <a href="tel:+971559445338" className="flex items-start gap-2.5 group">
                <Phone size={13} className="text-[#FAF9F8]/30 group-hover:text-safari-orange transition-colors mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[12px] text-[#FAF9F8]/50 group-hover:text-safari-orange transition-colors">+971 55 944 5338</div>
                  <div className="font-mono text-[10px] text-[#FAF9F8]/25">24/7 WhatsApp & Calls</div>
                </div>
              </a>
              <a href="mailto:info@dubaidesertadv.com" className="flex items-start gap-2.5 group">
                <Mail size={13} className="text-[#FAF9F8]/30 group-hover:text-safari-orange transition-colors mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[12px] text-[#FAF9F8]/50 group-hover:text-safari-orange transition-colors">info@dubaidesertadv.com</div>
                  <div className="font-mono text-[10px] text-[#FAF9F8]/25">Reply within 1 hour</div>
                </div>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-[#FAF9F8]/30 mt-0.5 shrink-0" />
                <div className="font-mono text-[12px] text-[#FAF9F8]/45">Business Bay, Dubai, UAE</div>
              </div>
            </div>

            <a
              href="https://wa.me/971559445338"
              className="mt-6 flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl hover:bg-[#25D366]/20 transition-all w-fit"
            >
              <MessageCircle size={13} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#FAF9F8]/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px]">© 2026 Dubai Desert Adventures. Licensed by Dubai DET.</span>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Cancellations', 'Sitemap'].map((l) => (
              <Link key={l} to="/contact" className="font-mono text-[10px] hover:text-safari-orange transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
