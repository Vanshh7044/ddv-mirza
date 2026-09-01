export default function TrustStrip() {
  const items = [
    '★ 4.9 Google Rating (401+ Reviews)',
    'DET Licensed Operator Since 2010',
    'Free Hotel Pickup & Drop-Off',
    'Pay On The Day (Zero Advance Deposit)',
    '100% Free Cancellation Up to 24h',
    'Direct Operator (No OTA Markup)',
    'Instant WhatsApp Confirmation',
  ];

  return (
    <section className="bg-[#0F172A] text-white py-3.5 border-y border-slate-800 overflow-hidden">
      <div className="flex items-center gap-0">
        <div className="flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-bold tracking-wide uppercase text-slate-200 shrink-0 marquee-track">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-[#EA580C]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
