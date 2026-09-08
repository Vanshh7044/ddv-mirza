import { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/safariPackages';

export const FAQS = [
  {
    q: 'How does payment work? Do I need to pay upfront?',
    a: 'No advance payment is required! You can reserve your booking via WhatsApp with zero deposit and pay the driver in cash (AED, USD, EUR, GBP) or by credit/debit card on the day of the safari.',
  },
  {
    q: 'What is included in the free hotel pickup?',
    a: 'We provide free door-to-door pickup and drop-off from any hotel, residence, Airbnb, or location across Dubai, Sharjah, and Ajman in our air-conditioned 4×4 Land Cruisers.',
  },
  {
    q: 'What is the difference between Standard, Premium, and VIP?',
    a: 'Standard (AED 79) includes all core safari activities, dune bashing, BBQ buffet, and live shows. Premium (AED 119) adds a smaller group size, quad biking, and reserved VIP table seating. VIP (AED 299) gives you a 100% private 4x4, private majlis tent, waiter table service, and falconry session.',
  },
  {
    q: 'What is your cancellation policy?',
    a: '100% free cancellation up to 24 hours prior to your scheduled pickup time. Since there is no advance deposit, simply message us on WhatsApp if your travel plans change.',
  },
  {
    q: 'What should I wear to the desert safari?',
    a: 'Wear comfortable, casual clothing with sunglasses and sandals or sneakers. In winter months (November–March), we recommend bringing a light sweater or jacket for the cooler desert evenings.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 sm:py-16 md:py-20 bg-[#F8F6F0] border-t border-sand/70">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] mb-1.5">
            <HelpCircle size={13} /> Clear & Honest Answers
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#EA580C]/40 shadow-md'
                    : 'bg-white/80 border-sand hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 cursor-pointer min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg font-bold text-[#0F172A]">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#EA580C] text-white' : 'bg-slate-100 text-[#64748B]'
                  }`}>
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 text-xs sm:text-base text-[#475569] font-medium leading-relaxed border-t border-slate-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-7 sm:mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-sand flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="text-xs sm:text-sm font-bold text-[#0F172A] text-center sm:text-left">
            Have a different question or special dietary requirement?
          </div>
          <a
            href={getWhatsAppLink('Hi! I have a question about booking a desert safari.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#C2410C] bg-[#EA580C]/10 px-4 py-2.5 rounded-xl transition-colors h-[42px]"
          >
            <MessageCircle size={15} /> Ask on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
