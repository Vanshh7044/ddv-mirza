import { Camera, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/safariPackages';

const GALLERY_ITEMS = [
  {
    title: 'High Red Dune Bashing',
    tag: 'Adrenaline 4×4',
    image: '/images/dune-bashing.webp',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Sunset Camel Caravan',
    tag: 'Bedouin Heritage',
    image: '/images/camel-sunset.webp',
    span: 'col-span-1',
  },
  {
    title: 'Extreme Can-Am Dune Buggy',
    tag: 'Off-Road Thrills',
    image: '/images/dune-buggy.webp',
    span: 'col-span-1',
  },
  {
    title: 'Live Arabian Tanoura & Fire Show',
    tag: 'Night Shows',
    image: '/images/tanoura-dance.webp',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Royal Falcon Flight Session',
    tag: 'Wildlife & Culture',
    image: '/images/falcon-portrait.webp',
    span: 'col-span-1',
  },
  {
    title: 'Live 5-Star BBQ Buffet Spread',
    tag: 'Gourmet Dining',
    image: '/images/bbq-buffet.webp',
    span: 'col-span-1',
  },
  {
    title: 'Bedouin Henna & Shisha Lounge',
    tag: 'Arabian Hospitality',
    image: '/images/henna-shisha.webp',
    span: 'col-span-1',
  },
  {
    title: 'Illuminated Desert Camp by Night',
    tag: 'Camp Atmosphere',
    image: '/images/desert-camp-night.webp',
    span: 'col-span-1 md:col-span-2',
  },
];

export default function ExperienceGallery() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-1.5">
            <Camera size={13} /> Real Safari Moments
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-2.5">
            The Magic of the Dubai Desert
          </h2>
          <p className="text-xs sm:text-base text-[#475569] font-medium">
            No stock placeholders. See what your evening with Dubai Dune Tours actually looks like.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-md hover:shadow-xl transition-all duration-300 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-2.5 left-2.5">
                <span className="bg-black/60 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md border border-white/20">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <a
            href={getWhatsAppLink('Hi! I saw the safari photos and would like to reserve an evening tour.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] active:scale-98 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-[#EA580C]/25 transition-all h-[48px]"
          >
            <MessageCircle size={17} />
            <span>Book Your Desert Safari (From AED 79)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
