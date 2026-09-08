import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Check, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema } from '../data/schemaData';

const TOURS = [
  {
    type: 'Sunrise Desert Safari',
    time: '05:00 AM – 09:30 AM',
    desc: 'Chase the dawn light before the desert awakens. Total solitude on red dunes with hot Arabic breakfast.',
    price: '349',
    unit: '/ private vehicle (Up to 6 guests)',
    image: '/images/camel-sunset.webp',
    includes: ['Private 4×4 Land Cruiser', 'Sunrise dune bashing', 'Sandboarding', 'Hot Arabic coffee & breakfast', 'Free hotel pickup'],
  },
  {
    type: 'Morning Dune Bash & Sandboard',
    time: '08:00 AM – 12:00 PM',
    desc: 'Action-packed morning adventure in Lehbab red dunes before the afternoon heat. Back for lunch.',
    price: '130',
    unit: '/ person',
    image: '/images/sandboarding.webp',
    includes: ['4×4 Land Cruiser dune bashing', 'Dune sandboarding', 'Camel ride photo stop', 'Chilled water & soft drinks', 'Free hotel pickup'],
  },
  {
    type: 'Evening Express Safari',
    time: '03:30 PM – 07:30 PM',
    desc: 'Condensed private evening tour — dune bashing, sunset photo stop, and camel ride without the camp show.',
    price: '349',
    unit: '/ private vehicle (Up to 6 guests)',
    image: '/images/dune-bashing.webp',
    includes: ['Private 4×4 Land Cruiser', 'Sunset dune bashing', 'Sandboarding', 'Scenic photography stops', 'Free hotel pickup'],
  },
];

export default function ShortTourPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Morning & Short Tours' }];

  return (
    <>
      <SEO
        title="Morning & Sunrise Desert Safari Dubai (From AED 130) | Dune Bashing"
        description="Book a morning dune bashing or private sunrise desert safari in Dubai. Beat the heat, enjoy sandboarding & camel riding with free hotel pickup. Pay on arrival."
        canonical="/morning-safari"
        ogImage="/images/sandboarding.webp"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <PageHero
        dark={true}
        label="Express & Morning Safaris · 4–5 Hours"
        title="Sunrise & Morning"
        titleEm="Dune Tours"
        subtitle="Private vehicles, flexible stops, and zero shared buses. Experience the untouched morning dunes with free hotel pickup."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Instant Booking', href: getWhatsAppLink('Hi! I would like to book a Morning / Sunrise Safari.') }}
        price="AED 130"
        priceNote="per person"
      />

      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {TOURS.map((tour, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-sand shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={tour.image}
                    alt={tour.type}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md">
                    {tour.time}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] mb-1.5">{tour.type}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-medium mb-3 sm:mb-4 leading-relaxed">
                    {tour.desc}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 py-2.5 sm:py-3 border-y border-slate-100 mb-4 sm:mb-6 flex-1">
                    {tour.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#1E293B]">
                        <Check size={12} className="text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2.5 pt-2">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#0F172A]">AED {tour.price}</div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">{tour.unit}</div>
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi! I want to book the ${tour.type} (AED ${tour.price}). Please confirm available dates.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-95 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-md transition-all h-[44px]"
                    >
                      <MessageCircle size={15} /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
