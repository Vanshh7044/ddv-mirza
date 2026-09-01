import { Camera, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/safariPackages';

const GALLERY_ITEMS = [
  {
    title: 'High Red Dune Bashing',
    tag: 'Adrenaline 4×4',
    image: '/images/dune-bashing.jpg',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Sunset Camel Caravan',
    tag: 'Bedouin Heritage',
    image: '/images/camel-sunset.jpg',
    span: 'col-span-1',
  },
  {
    title: 'Extreme Can-Am Dune Buggy',
    tag: 'Off-Road Thrills',
    image: '/images/dune-buggy.jpg',
    span: 'col-span-1',
  },
  {
    title: 'Live Arabian Tanoura & Fire Show',
    tag: 'Night Shows',
    image: '/images/tanoura-dance.jpg',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Royal Falcon Flight Session',
    tag: 'Wildlife & Culture',
    image: '/images/falcon-portrait.jpg',
    span: 'col-span-1',
  },
  {
    title: 'Live 5-Star BBQ Buffet Spread',
    tag: 'Gourmet Dining',
    image: '/images/bbq-buffet.jpg',
    span: 'col-span-1',
  },
  {
    title: 'Bedouin Henna & Shisha Lounge',
    tag: 'Arabian Hospitality',
    image: '/images/henna-shisha.jpg',
    span: 'col-span-1',
  },
  {
    title: 'Illuminated Desert Camp by Night',
    tag: 'Camp Atmosphere',
    image: '/images/desert-camp-night.jpg',
    span: 'col-span-1 md:col-span-2',
  },
];

export default function ExperienceGallery() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-2">
            <Camera size={14} /> Real Safari Moments
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            The Magic of the Dubai Desert
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-medium">
            No stock placeholders. See what your evening with Dubai Desert Adventures actually looks like.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3.5 left-3.5">
                <span className="bg-black/60 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-white/20">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href={getWhatsAppLink('Hi! I saw the safari photos and would like to reserve an evening tour.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-[#EA580C]/25 transition-all"
          >
            <MessageCircle size={18} />
            <span>Book Your Desert Safari (From AED 79)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
