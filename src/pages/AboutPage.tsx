import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { getWhatsAppLink } from '../data/safariPackages';
import WhyDirect from '../components/sections/WhyDirect';
import FinalCTA from '../components/sections/FinalCTA';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function AboutPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'About Us' }];

  return (
    <>
      <SEO
        title="About Dubai Dune Tours | Licensed Direct Operator Since 2010"
        description="Learn why thousands of Dubai travelers choose Dubai Dune Tours. In-house fleet of Toyota Land Cruisers, certified drivers, and zero reseller markups."
        canonical="/about"
        ogImage="/images/dune-bashing.webp"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <PageHero
        dark={true}
        label="About Dubai Dune Tours"
        title="Direct Operators."
        titleEm="14 Years on the Dunes."
        subtitle="Founded in 2010 to give travelers an authentic, direct-from-the-operator desert safari without third-party portal markups or hidden fees."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Book on WhatsApp', href: getWhatsAppLink('Hi! I want to book a desert safari.') }}
        price="AED 79"
        priceNote="direct rate"
      />

      {/* Story & Image Section */}
      <section className="py-8 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Story Text */}
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-1.5">
                Our Mission & Story
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-4 sm:mb-6">
                Why We Never Sell Through Resellers
              </h2>
              
              <div className="space-y-3.5 text-xs sm:text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  When our lead guide Khalid started driving tourists across the high red dunes of Lehbab in 2010, he noticed guests were paying inflated prices because multiple online booking agencies each added 25–35% markups.
                </p>
                <p>
                  We built Dubai Dune Tours on a simple promise: <strong className="text-[#0F172A]">Direct Operator Booking</strong>. When you reserve with us, you deal directly with the team that owns the Toyota Land Cruiser fleet and manages the desert camp.
                </p>
                <p>
                  No advance deposits, no credit card holds, and instant WhatsApp support in English, Arabic, Russian, and French.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-sand text-center sm:text-left">
                  <div className="text-lg sm:text-2xl font-black text-[#0F172A]">25,000+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#64748B]">Happy Guests</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-sand text-center sm:text-left">
                  <div className="text-lg sm:text-2xl font-black text-[#0F172A]">4.9 ★</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#64748B]">Google Reviews</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-sand text-center sm:text-left">
                  <div className="text-lg sm:text-2xl font-black text-[#0F172A]">14+ Yrs</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#64748B]">DET Licensed</div>
                </div>
              </div>
            </div>

            {/* Visual Photo */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/images/dune-bashing.webp"
                alt="Dubai Desert Safari Land Cruiser"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div className="text-base sm:text-lg font-bold">Certified In-House Fleet & Drivers</div>
                <div className="text-[11px] sm:text-xs text-slate-300">Equipped with full roll cages, GPS satellite tracking & emergency gear</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhyDirect />
      <FinalCTA />
    </>
  );
}
