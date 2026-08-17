import PageHero from '../components/PageHero';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const faqItems = [
  { q: 'Do I need to pay anything in advance?', a: 'No. There is no advance payment, no deposit, and no card hold. You pay our guide in cash (or card) at the pickup point or in the dunes.' },
  { q: 'How late can I cancel?', a: 'Free cancellation up to 24 hours before your pickup time. After that, no charge is applied — just let us know via WhatsApp.' },
  { q: 'Where is the pickup location?', a: 'We pick you up from your hotel lobby, apartment entrance, or any other address in Dubai. We cover all of Dubai, including JBR, Marina, Downtown, Deira, and Business Bay.' },
  { q: 'What should I wear?', a: 'Light, comfortable clothing. Closed-toe shoes are recommended for dune bashing. Modest clothing (covering shoulders and knees) is advised out of respect for the cultural setting.' },
  { q: 'Is it suitable for children?', a: 'Yes. Children under 5 ride the camel only (no dune bashing). From age 5, children can join the dune bashing. We recommend Premium or VIP tier for families with young children.' },
  { q: 'Do you serve alcohol?', a: 'No. All drinks are non-alcoholic. This is a traditional Bedouin setting. However, we do not restrict guests from bringing their own in sealed containers for personal consumption in the vehicle.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        dark={false}
        label="Contact · Dubai Desert Adventures"
        title="We reply in"
        titleEm="under 5 minutes."
        subtitle="Send us a WhatsApp message with your date, group size, and preferred package — we'll confirm your booking in minutes. No forms, no emails, no waiting."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        primaryCta={{ label: 'Open WhatsApp', href: 'https://wa.me/971559445338' }}
        secondaryCta={{ label: 'Call us', href: 'tel:+971559445338' }}
      />

      {/* Contact channels */}
      <section className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* Left: channels */}
          <div>
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-6 sm:mb-8">Ways to reach us</div>
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+971 55 944 5338',
                  sub: '24/7 · Fastest response · English, Arabic, Russian, French, Hindi',
                  href: 'https://wa.me/971559445338',
                  cta: 'Open WhatsApp',
                  dark: true,
                },
                {
                  icon: Phone,
                  label: 'Phone call',
                  value: '+971 55 944 5338',
                  sub: '08:00–22:00 GST · Voice call available',
                  href: 'tel:+971559445338',
                  cta: 'Call now',
                  dark: false,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@dubaidesertadv.com',
                  sub: 'For group enquiries, invoices, or corporate bookings. Reply within 2 hours during business hours.',
                  href: 'mailto:info@dubaidesertadv.com',
                  cta: 'Send email',
                  dark: false,
                },
              ].map((ch) => (
                <div key={ch.label} className={`rounded-2xl border p-6 flex flex-col gap-4 ${ch.dark ? 'bg-[#1E2316] border-safari-orange/20' : 'bg-[#FAF9F8] border-sand'}`}>
                  <div className="flex items-center gap-3">
                    <ch.icon size={18} className="text-safari-orange" />
                    <div>
                      <div className={`font-mono text-[10px] tracking-widest uppercase ${ch.dark ? 'text-[#FAF9F8]/30' : 'text-stone/50'}`}>{ch.label}</div>
                      <div className={`font-serif text-lg ${ch.dark ? 'text-[#FAF9F8]' : 'text-[#1E2316]'}`}>{ch.value}</div>
                    </div>
                  </div>
                  <p className={`font-mono text-[12px] leading-relaxed ${ch.dark ? 'text-[#FAF9F8]/40' : 'text-stone'}`}>{ch.sub}</p>
                  <a href={ch.href} className={`self-start flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-xl transition-all ${ch.dark ? 'bg-safari-orange text-white hover:bg-safari-orange-hover' : 'bg-[#1E2316] text-[#FAF9F8] hover:bg-safari-olive'}`}>
                    {ch.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: details + FAQ */}
          <div>
            <div className="mb-10">
              <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-5">Office & operations</div>
              <div className="flex flex-col gap-5 bg-[#FAF9F8] border border-sand rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-safari-orange mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[12px] text-[#1E2316]">Business Bay, Dubai, UAE</div>
                    <div className="font-mono text-[11px] text-stone">Operations in Lehbab Desert (Dubai–Al Ain Rd)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={15} className="text-safari-orange mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[12px] text-[#1E2316]">Daily 08:00–23:00 GST</div>
                    <div className="font-mono text-[11px] text-stone">WhatsApp monitored 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <div className="font-mono text-[11px] tracking-widest text-stone uppercase mb-5">Common questions</div>
              <div className="flex flex-col gap-4">
                {faqItems.map((item, i) => (
                  <details key={i} className="group bg-[#FAF9F8] border border-sand rounded-xl overflow-hidden">
                    <summary className="px-5 py-4 cursor-pointer font-mono text-[12px] text-[#1E2316] list-none flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-stone group-open:rotate-45 transition-transform shrink-0 text-lg">+</span>
                    </summary>
                    <div className="px-5 pb-4 font-mono text-[12px] text-stone leading-relaxed border-t border-sand pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
