import { Link } from 'react-router-dom';
import { Car, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, PRICES, aed } from '../../data/safariPackages';
import { trackWhatsAppClick } from '../../utils/analytics';

// Private-car tours (priced per vehicle, up to 6): desert short tours + city tours.
const TOURS = [
  {
    title: 'Sunrise Desert Safari',
    time: '4:30 AM – 8:30 AM',
    desc: 'Empty red dunes at dawn, sunrise dune bashing, sandboarding and Arabic coffee.',
    price: PRICES.sunrise,
    image: '/images/real/golden-hour-sand.webp',
    link: '/morning-safari',
    span: 'lg:col-span-2',
  },
  {
    title: 'Morning Desert Safari',
    time: '8:00 AM – 12:00 PM',
    desc: 'Red dune bashing, sandboarding and a camel photo stop, back before the afternoon heat.',
    price: PRICES.morning,
    image: '/images/real/dune-jump.webp',
    link: '/morning-safari',
    span: 'lg:col-span-2',
  },
  {
    title: 'Sunset Desert Safari',
    time: '3:30 PM – 7:30 PM',
    desc: 'Sunset dune bashing, sandboarding and photo stops in your own car, without the camp.',
    price: PRICES.eveningExpress,
    image: '/images/real/land-cruiser-sunset.webp',
    link: '/morning-safari',
    span: 'lg:col-span-2',
  },
  {
    title: 'Dubai City Tour',
    time: '4–5 hours',
    desc: 'Burj Khalifa, Dubai Marina, Palm Jumeirah & Atlantis, Dubai Frame, Al Fahidi and the old souks.',
    price: PRICES.dubaiCityTour,
    image: '/images/dubai-city-tour-poster.webp',
    link: '/tours/dubai-city-tour',
    span: 'lg:col-span-3',
  },
  {
    title: 'Abu Dhabi City Tour',
    time: 'Full day',
    desc: 'Sheikh Zayed Grand Mosque, Qasr Al Watan, Emirates Palace, Corniche and Louvre Abu Dhabi.',
    price: PRICES.abuDhabiCityTour,
    image: '/images/abu-dhabi-city-tour-poster.webp',
    link: '/tours/abu-dhabi-city-tour',
    span: 'lg:col-span-3',
  },
];

export default function PrivateToursSection() {
  return (
    <section id="private-tours" className="py-10 sm:py-16 md:py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EA580C]/20 text-[#FB923C] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#EA580C]/30">
            <Car size={13} /> Your own car · up to 6 guests
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2.5">
            Private Short Tours & City Tours
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-medium">
            One price per car, not per person. Private driver, free hotel pickup and pay on the day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {TOURS.map((t) => (
            <div
              key={t.title}
              className={`bg-slate-900/90 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col group hover:border-[#EA580C]/60 transition-colors duration-300 ${t.span}`}
            >
              <Link to={t.link} className="relative aspect-[16/9] overflow-hidden block">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white font-bold text-[10px] sm:text-[11px] px-2 py-0.5 sm:py-1 rounded-md border border-white/20 inline-flex items-center gap-1">
                  <Clock size={11} className="text-[#FB923C]" /> {t.time}
                </span>
                <h3 className="absolute bottom-3 left-3.5 right-3.5 text-lg sm:text-2xl font-extrabold text-white leading-tight">
                  {t.title}
                </h3>
              </Link>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <p className="text-xs sm:text-sm text-slate-300 font-medium flex-1">{t.desc}</p>

                <div className="pt-3.5 mt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">{aed(t.price)}</div>
                    <div className="text-[11px] text-slate-400 font-medium">per car · up to 6</div>
                  </div>
                  <a
                    href={getWhatsAppLink(`Hi! I'd like to book the private ${t.title} (${aed(t.price)} per car). Please confirm my date.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('private_tours', t.title, t.price)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-95 text-white font-bold text-xs sm:text-sm px-4 h-11 rounded-xl transition-all shadow-lg shadow-[#EA580C]/25 whitespace-nowrap"
                  >
                    <MessageCircle size={15} /> Book Now
                  </a>
                </div>
                <Link
                  to={t.link}
                  className="mt-2.5 text-xs font-semibold text-slate-400 hover:text-[#FB923C] transition-colors inline-flex items-center gap-1 self-center py-1"
                >
                  View details <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
