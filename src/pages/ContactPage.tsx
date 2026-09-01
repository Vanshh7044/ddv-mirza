import PageHero from '../components/PageHero';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';

export default function ContactPage() {
  return (
    <>
      <PageHero
        dark={true}
        label="Direct Support & Booking · Dubai Operations"
        title="We Confirm Bookings in"
        titleEm="Under 3 Minutes."
        subtitle="Message us directly on WhatsApp with your travel date, hotel name, and package choice. No waiting, no credit card forms, no hassle."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        primaryCta={{ label: 'WhatsApp Instant Chat', href: getWhatsAppLink('Hi! I want to check availability and book a safari.') }}
        secondaryCta={{ label: 'Call Us Directly', href: 'tel:+971556015834' }}
      />

      {/* Contact Channels Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* WhatsApp Card (Primary) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#EA580C] shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mb-4">
                  <MessageCircle size={26} />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-[#EA580C] mb-1">Fastest Response</div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">WhatsApp Booking</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-6">
                  Direct line to our dispatch team in English, Arabic, Russian, and French. Typical reply time is under 3 minutes.
                </p>
              </div>

              <a
                href={getWhatsAppLink('Hi! I want to book a desert safari with Dubai Desert Adventures.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/25 transition-all"
              >
                <MessageCircle size={16} /> Open WhatsApp Chat
              </a>
            </div>

            {/* Direct Phone Call */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">Direct Voice Line</div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">+971 55 601 5834</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-6">
                  Available daily 07:00 AM – 11:30 PM (GST) for immediate phone reservations and custom group quotes.
                </p>
              </div>

              <a
                href="tel:+971556015834"
                className="w-full bg-[#0F172A] hover:bg-black text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={15} /> Call Now
              </a>
            </div>

            {/* Email / Corporate */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">Email Inquiry</div>
                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">info@dubaidesertadv.com</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-6">
                  For corporate events, invoices, travel agency partnerships, and large group bookings.
                </p>
              </div>

              <a
                href="mailto:info@dubaidesertadv.com"
                className="w-full border border-slate-300 hover:bg-slate-50 text-[#0F172A] font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Mail size={15} /> Send Email
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
