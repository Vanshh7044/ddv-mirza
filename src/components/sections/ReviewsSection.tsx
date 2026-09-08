import { Star, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    author: 'James Robertson',
    location: 'London, UK',
    avatar: '🇬🇧',
    rating: 5,
    package: 'Evening Premium Safari',
    text: 'Best desert experience in Dubai! Confirmed in 2 minutes on WhatsApp without paying any deposit. Driver Tariq was on time in an immaculate Land Cruiser. BBQ and fire show were top tier.',
  },
  {
    author: 'Elena Rostova',
    location: 'Dubai Resident (originally RU)',
    avatar: '🇦🇪',
    rating: 5,
    package: 'VIP Traditional Arabic',
    text: 'We booked the VIP Majlis for my husband’s birthday. Having our own private tent, waiter, and the falcon encounter made it unforgettable. Saved over 300 AED compared to hotel concierge quote.',
  },
  {
    author: 'Sarah & Liam Miller',
    location: 'Sydney, Australia',
    avatar: '🇦🇺',
    rating: 5,
    package: 'Evening Standard Safari',
    text: 'Was nervous booking with no upfront payment, but everything was 10/10. Incredible dune bashing, beautiful sunset spot for photos, and paid the driver directly at pickup. Highly recommend!',
  },
  {
    author: 'Marco Benetti',
    location: 'Milan, Italy',
    avatar: '🇮🇹',
    rating: 5,
    package: 'Sunrise Desert Safari',
    text: 'We took the sunrise tour to beat the heat. Total solitude in the red dunes with unbelievable morning lighting for photography. Arabic breakfast in the dunes was delicious.',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-1 text-amber-500 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
              ))}
              <span className="text-xs sm:text-sm font-bold text-[#0F172A] ml-1.5">4.9 / 5.0 Average</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
              Loved by 25,000+ Travelers
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#F8F6F0] px-3.5 py-2 rounded-xl border border-sand self-start md:self-auto">
            <span className="text-xs sm:text-sm font-bold text-[#0F172A]">401+ Verified Google Reviews</span>
            <CheckCircle2 size={15} className="text-emerald-600" />
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-[#F8F6F0] border border-sand/70 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#EA580C] bg-[#EA580C]/10 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed mb-4 sm:mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-sand/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-base shrink-0">
                  {rev.avatar}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0F172A]">{rev.author}</div>
                  <div className="text-[10px] sm:text-[11px] text-[#64748B] font-medium">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
