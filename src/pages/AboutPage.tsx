import PageHero from '../components/PageHero';
import { getWhatsAppLink } from '../data/safariPackages';
import WhyDirect from '../components/sections/WhyDirect';
import FinalCTA from '../components/sections/FinalCTA';

export default function AboutPage() {
  return (
    <>
      <PageHero
        dark={true}
        label="About Dubai Desert Adventures"
        title="Direct Operators."
        titleEm="14 Years on the Dunes."
        subtitle="Founded in 2010 to give travelers an authentic, direct-from-the-operator desert safari without third-party portal markups or hidden fees."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        primaryCta={{ label: 'Book on WhatsApp', href: getWhatsAppLink('Hi! I want to book a desert safari.') }}
        price="AED 79"
        priceNote="direct rate"
      />

      {/* Story & Image Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Text */}
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-2">
                Our Mission & Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6">
                Why We Never Sell Through Resellers
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  When our lead guide Khalid started driving tourists across the high red dunes of Lehbab in 2010, he noticed guests were paying inflated prices because multiple online booking agencies each added 25–35% markups.
                </p>
                <p>
                  We built Dubai Desert Adventures on a simple promise: <strong className="text-[#0F172A]">Direct Operator Booking</strong>. When you reserve with us, you deal directly with the team that owns the Toyota Land Cruiser fleet and manages the desert camp.
                </p>
                <p>
                  No advance deposits, no credit card holds, and instant WhatsApp support in English, Arabic, Russian, and French.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-sand">
                  <div className="text-2xl font-black text-[#0F172A]">25,000+</div>
                  <div className="text-xs font-bold text-[#64748B]">Happy Guests Hosted</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-sand">
                  <div className="text-2xl font-black text-[#0F172A]">4.9 ★</div>
                  <div className="text-xs font-bold text-[#64748B]">401+ Google Reviews</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-sand">
                  <div className="text-2xl font-black text-[#0F172A]">14+ Yrs</div>
                  <div className="text-xs font-bold text-[#64748B]">DET Licensed Since 2010</div>
                </div>
              </div>
            </div>

            {/* Visual Photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/images/dune-bashing.jpg"
                alt="Dubai Desert Safari Land Cruiser"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-lg font-bold">Certified In-House Fleet & Drivers</div>
                <div className="text-xs text-slate-300">Equipped with full roll cages, GPS satellite tracking & emergency gear</div>
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
