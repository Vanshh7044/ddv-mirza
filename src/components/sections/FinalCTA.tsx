import { MessageCircle, Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../../data/safariPackages';
import { trackWhatsAppClick, trackPhoneClick } from '../../utils/analytics';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-2.5">
              <span className="w-6 sm:w-8 h-0.5 bg-[#EA580C]" /> Ready for the Dunes?
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-3 sm:mb-4">
              Book Direct.<br />
              <span className="text-[#EA580C]">Pay on Arrival.</span>
            </h2>
            <p className="text-sm sm:text-lg text-slate-300 font-medium mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Message us on WhatsApp with your date and preferred package. We confirm your pickup time and driver details in under 3 minutes.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink('Hi! I would like to book a Dubai desert safari for [Date]. Please share availability.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-98 text-white font-bold text-xs sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#EA580C]/25 transition-all h-[48px] sm:h-auto"
                onClick={() => trackWhatsAppClick('final_cta', undefined, undefined)}
              >
                <MessageCircle size={18} />
                <span>Instant WhatsApp Booking</span>
              </a>
              <a
                href="tel:+971556015834"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 active:scale-98 text-white font-bold text-xs sm:text-base px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl transition-all h-[48px] sm:h-auto"
                onClick={() => trackPhoneClick('final_cta')}
              >
                <Phone size={16} />
                <span>+971 55 601 5834</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Details */}
          <div className="bg-slate-900/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
              Dubai Dune Tours Operations
            </h3>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-start gap-3">
                <Clock className="text-[#EA580C] shrink-0 mt-0.5" size={17} />
                <div>
                  <div className="text-white font-bold">Operating Hours</div>
                  <div>07:00 AM – 11:30 PM (Gulf Standard Time Daily)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#EA580C] shrink-0 mt-0.5" size={17} />
                <div>
                  <div className="text-white font-bold">Desert Base & Camp</div>
                  <div>Lehbab Red Dunes, Dubai, United Arab Emirates</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#EA580C] shrink-0 mt-0.5" size={17} />
                <div>
                  <div className="text-white font-bold">Tourism License</div>
                  <div>Dubai Economy & Tourism (DET) Approved Operator Since 2010</div>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
              <span>Zero Booking Fees</span>
              <span>•</span>
              <span>Free 24h Cancellation</span>
              <span>•</span>
              <span>Best Price Direct</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
