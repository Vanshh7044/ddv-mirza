import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Star, Shield, Globe, Zap, Users, ArrowRight } from 'lucide-react';

const team = [
  { name: 'Khalid Al Rashidi', role: 'Founder & Lead Guide', years: '14 yrs in the dunes', desc: 'Born and raised in Ras Al Khaimah, Khalid has guided over 8,000 groups through the Lehbab dunes.' },
  { name: 'Yuri Petrov', role: 'Operations Manager', years: 'Former Emirates GH', desc: 'Yuri runs day-to-day logistics, fleet maintenance, and guest communication in Arabic, Russian, and English.' },
  { name: 'Amina El Tahir', role: 'Head of Guest Experience', years: '9 yrs hospitality', desc: 'Amina leads the camp team, ensures VIP guest needs are met, and trains every new host.' },
];

const stats = [
  { n: '14+', label: 'Years operating', sub: 'Since 2010 · Dubai DET licensed' },
  { n: '25K+', label: 'Guests hosted', sub: 'From 90+ countries' },
  { n: '4.9', label: 'Google rating', sub: '401+ verified reviews' },
  { n: '100%', label: 'Direct operator', sub: 'No middlemen, ever' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        dark={false}
        label="About Dubai Desert Adventures"
        title="Founded on the dunes."
        titleEm="Owned by the guides."
        subtitle="Dubai Desert Adventures was founded in 2010 by our lead guide Khalid, who grew up near the Lehbab dunes and refused to let tour operators take the margin from his guests. Every booking goes direct to the team that runs the safari."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        primaryCta={{ label: 'Book a safari', href: 'https://wa.me/971559445338' }}
        secondaryCta={{ label: 'Read our reviews', href: 'https://wa.me/971559445338' }}
      />

      {/* Stats */}
      <section className="bg-[#1E2316] py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.n}>
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F8] mb-1">{s.n}</div>
              <div className="font-mono text-[11px] sm:text-[12px] text-safari-orange uppercase tracking-wider mb-0.5">{s.label}</div>
              <div className="font-mono text-[10px] sm:text-[11px] text-[#FAF9F8]/35">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our story */}
      <section className="py-12 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-3 sm:mb-5">Our story</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#1E2316] mb-4 sm:mb-6">
              No middlemen. No markup.
            </h2>
            <div className="flex flex-col gap-4 sm:gap-5 font-mono text-[12px] sm:text-[13px] text-stone leading-relaxed">
              <p>When Khalid started guiding tourists through the Lehbab dunes in 2010, he noticed something: guests were paying triple what the safari cost because three resellers had each added their margin. So he set up his own booking system and started taking guests direct.</p>
              <p>Today, every booking goes to the same team that shows up in the Land Cruiser. The guides you meet are the owners. The number you WhatsApp is answered by the people who drive the dunes every evening.</p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2">What we stand for</div>
            {[
              { icon: Shield, title: 'Safety first, always', desc: 'All vehicles pass monthly DET inspections. Every guide is trained in dune recovery and first aid.' },
              { icon: Star, title: 'No surprise charges', desc: 'What you see on our site is what you pay. No service charge at camp, no fuel surcharge, no hidden fees.' },
              { icon: Globe, title: 'Five languages', desc: 'Our team speaks English, Arabic, Russian, French, and Hindi. No translator app required.' },
              { icon: Zap, title: 'Direct to guide', desc: 'When you WhatsApp us, Yuri picks up. Not a call center. Not an offshore team.' },
              { icon: Users, title: 'Smaller groups', desc: 'We cap groups at 12 per standard convoy. Our Premium tier caps at 6. Dunes aren\'t better crowded.' },
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-[#FAF9F8] border border-sand rounded-xl">
                <v.icon size={18} className="text-safari-orange shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[11.5px] sm:text-[12px] text-[#1E2316] font-medium mb-0.5">{v.title}</div>
                  <div className="font-mono text-[11px] sm:text-[12px] text-stone leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-20 bg-[#FAF9F8] border-t border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-stone uppercase mb-2 sm:mb-3">Our team</div>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#1E2316]">The people in the Land Cruiser.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-5 sm:p-6 bg-[#F7F5F0] border border-sand rounded-xl">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-safari-orange/10 border border-safari-orange/20 flex items-center justify-center font-serif text-xl text-safari-orange mb-4 sm:mb-5">
                  {member.name[0]}
                </div>
                <h3 className="font-serif text-lg text-[#1E2316] mb-0.5">{member.name}</h3>
                <div className="font-mono text-[10.5px] sm:text-[11px] text-safari-orange uppercase tracking-wider mb-1">{member.role}</div>
                <div className="font-mono text-[10px] text-stone/60 mb-2 sm:mb-3">{member.years}</div>
                <p className="font-mono text-[11.5px] sm:text-[12px] text-stone leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 bg-[#1E2316]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-serif font-light text-2xl sm:text-4xl text-[#FAF9F8] mb-3 sm:mb-4">Ready to see Lehbab for yourself?</h2>
          <p className="font-mono text-[12px] sm:text-[13px] text-[#FAF9F8]/45 mb-6 sm:mb-8">Evening safaris from AED 79. Pay on the day. Free hotel pickup from anywhere in Dubai.</p>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            <Link to="/desert-safari" className="flex items-center justify-center gap-2 bg-safari-orange hover:bg-safari-orange-hover text-white font-mono text-[11px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all w-full sm:w-auto">
              See all packages <ArrowRight size={13} />
            </Link>
            <a href="https://wa.me/971559445338" className="flex items-center justify-center gap-2 border border-[#FAF9F8]/20 text-[#FAF9F8] hover:bg-[#FAF9F8]/5 font-mono text-[11px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all w-full sm:w-auto">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
