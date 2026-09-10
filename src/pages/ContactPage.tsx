import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, travelAgencySchema } from '../data/schemaData';

export default function ContactPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Contact' }];

  return (
    <>
      <SEO
        title="Contact Dubai Dune Tours | Instant WhatsApp Booking (<3 Mins)"
        description="Direct booking and support dispatch for Dubai Dune Tours. WhatsApp: +971 55 601 5834. Inquire about availability, hotel pickup, corporate groups, and private camps."
        canonical="/contact"
        ogImage="/images/dune-bashing.webp"
        schema={[getBreadcrumbSchema(breadcrumbs, '/contact'), travelAgencySchema]}
      />
      <PageHero
        dark={true}
        label="Direct Support & Booking · Dubai Operations"
        title="We Confirm Bookings in"
        titleEm="Under 3 Minutes."
        subtitle="Message us directly on WhatsApp with your travel date, hotel name, and package choice. No waiting, no credit card forms, no hassle."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Instant Chat', href: getWhatsAppLink('Hi! I want to check availability and book a safari.') }}
        secondaryCta={{ label: 'Call Us Directly', href: 'tel:+971556015834' }}
      />

      {/* Contact Channels Grid */}
      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            
            {/* WhatsApp Card (Primary) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-[#EA580C] shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mb-3.5">
                  <MessageCircle size={24} />
                </div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#EA580C] mb-1">Fastest Response</div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2">WhatsApp Booking</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-5">
                  Direct line to our dispatch team in English, Arabic, Russian, and French. Typical reply time is under 3 minutes.
                </p>
              </div>

              <a
                href={getWhatsAppLink('Hi! I want to book a desert safari with Dubai Dune Tours.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] active:scale-98 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/25 transition-all h-[48px]"
              >
                <MessageCircle size={16} /> Open WhatsApp Chat
              </a>
            </div>

            {/* Direct Phone Call */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-sand shadow-md flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-3.5">
                  <Phone size={22} />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">Direct Voice Line</div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2">+971 55 601 5834</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-5">
                  Available daily 07:00 AM – 11:30 PM (GST) for immediate phone reservations and custom group quotes.
                </p>
              </div>

              <a
                href="tel:+971556015834"
                className="w-full bg-[#0F172A] hover:bg-black active:scale-98 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all h-[48px]"
              >
                <Phone size={15} /> Call Now
              </a>
            </div>

            {/* Email / Corporate */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-sand shadow-md flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-3.5">
                  <Mail size={22} />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">Email Inquiry</div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2">info@dubaidunetours.com</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-5">
                  For corporate events, invoices, travel agency partnerships, and large group bookings.
                </p>
              </div>

              <a
                href="mailto:info@dubaidunetours.com"
                className="w-full border border-slate-300 hover:bg-slate-50 active:scale-98 text-[#0F172A] font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all h-[48px]"
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
