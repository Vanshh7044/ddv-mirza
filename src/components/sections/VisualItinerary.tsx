import { Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/safariPackages';

const ITINERARY_STEPS = [
  {
    time: '03:00 PM',
    title: 'Free Hotel Pickup',
    desc: 'Clean, air-conditioned 4×4 Land Cruiser picks you up directly from any Dubai hotel or residence.',
    image: '/images/dune-bashing.jpg',
  },
  {
    time: '04:15 PM',
    title: 'High Red Dune Bashing & Sandboarding',
    desc: '35–45 minutes of thrilling off-road dune bashing in Lehbab red dunes followed by sandboarding.',
    image: '/images/sandboarding.jpg',
  },
  {
    time: '05:30 PM',
    title: 'Sunset Camel Ride & Golden Hour Photos',
    desc: 'Capture breathtaking golden-hour sunset photos on the high dunes and enjoy an authentic camel ride.',
    image: '/images/camel-sunset.jpg',
  },
  {
    time: '06:15 PM',
    title: 'Bedouin Camp Welcome, Falconry & Henna',
    desc: 'Arrive at the illuminated desert camp for Arabic Gahwa coffee, hunting falcon photos, and henna art.',
    image: '/images/falcon-portrait.jpg',
  },
  {
    time: '07:15 PM',
    title: 'Live 5-Star BBQ Buffet Feast',
    desc: 'Feast on live outdoor BBQ grill with smoking lamb kebabs, chicken tikka, mezze, and vegetarian delicacies.',
    image: '/images/bbq-buffet.jpg',
  },
  {
    time: '08:15 PM',
    title: 'Tanoura Show & Fire Stunt Performance',
    desc: 'Spectacular spinning Tanoura dancer and daring fire eater performances under the starry desert sky.',
    image: '/images/tanoura-dance.jpg',
  },
];

export default function VisualItinerary() {
  return (
    <section id="itinerary" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-2">
              Evening Tour Timeline
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              What Your 6 Hours Look Like
            </h2>
          </div>
          <p className="text-[#475569] font-medium text-sm sm:text-base max-w-md">
            Seamlessly organized from pickup to drop-off. 14 years of operating safaris means zero waiting and maximum adventure.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITINERARY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8F6F0] rounded-2xl overflow-hidden border border-sand/70 flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              {/* Step Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-mono font-bold">
                  Step 0{idx + 1}
                </div>
                <div className="absolute bottom-3 left-3 bg-[#EA580C] text-white px-2.5 py-0.5 rounded-md text-xs font-bold flex items-center gap-1 shadow">
                  <Clock size={11} /> {step.time}
                </div>
              </div>

              {/* Step Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#0F172A] mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct CTA */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppLink('Hi! I want to book the Evening Safari. Please confirm available slots.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#EA580C]/20 transition-all hover:scale-105"
          >
            <MessageCircle size={17} />
            <span>Book This Itinerary on WhatsApp (AED 79)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
