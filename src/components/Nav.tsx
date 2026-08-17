import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, Compass, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const desertSafariMenu = [
  {
    heading: 'Evening Safari',
    items: [
      { label: 'All Evening Packages', sub: 'Compare Standard / Premium / VIP', href: '/evening-desert-safari' },
      { label: 'Standard Package', sub: 'From AED 79 / person', href: '/evening-safari/standard' },
      { label: 'Premium Package', sub: 'From AED 119 / person', href: '/evening-safari/premium' },
      { label: 'VIP Experience', sub: 'From AED 299 / person', href: '/evening-safari/vip' },
    ],
  },
  {
    heading: 'Short & Morning Tours',
    items: [
      { label: 'Sunrise Safari', sub: '4–5 hrs · Private Land Cruiser', href: '/morning-safari' },
      { label: 'Morning Safari', sub: '4–5 hrs · Lehbab Red Dunes', href: '/morning-safari' },
      { label: 'Self-Drive Safari', sub: 'Drive your own 4×4 convoy', href: '/self-drive' },
    ],
  },
  {
    heading: 'Luxury VIP Experiences',
    items: [
      { label: 'VIP Traditional Arabic', sub: 'AED 999 / 2 adults · Falcon & Majlis', href: '/vip-traditional-arabic' },
      { label: 'Private Desert Setup', sub: 'From AED 2,299 · Custom Private Camp', href: '/private-desert-setup' },
    ],
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileSafariAccordion, setMobileSafariAccordion] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (navRef.current) {
      gsap.fromTo(navRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top utility bar — desktop only */}
      <div className={`hidden lg:flex items-center justify-end gap-6 px-10 py-2 font-mono text-[11px] tracking-widest text-[#4F583E] transition-all duration-500 ${scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100'}`}>
        <a href="tel:+971559445338" className="flex items-center gap-1.5 hover:text-safari-orange transition-colors pointer-events-auto">
          <Phone size={11} /> +971 55 944 5338
        </a>
        <span className="text-stone/40">·</span>
        <span className="text-stone/60 uppercase">DET Licensed · Since 2010</span>
      </div>

      {/* Main Navbar */}
      <div className="px-3 sm:px-4 md:px-6 pointer-events-auto">
        <div
          ref={navRef}
          className={`max-w-[1780px] mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? 'bg-[#FAF9F8]/95 backdrop-blur-xl shadow-[0_6px_30px_rgba(0,0,0,0.07)] border border-black/[0.06] rounded-[20px] sm:rounded-[24px] px-4 sm:px-6 py-2.5 sm:py-3 mt-2 sm:mt-3'
              : 'bg-transparent px-2 py-3 sm:py-4'
          }`}
        >
          {/* Brand */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${scrolled ? 'bg-safari-card border border-sand shadow-sm' : 'bg-white/75 border border-white/60 shadow-sm backdrop-blur-md'}`}>
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-safari-orange group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <div className="font-serif text-[16px] sm:text-[19px] md:text-xl font-medium tracking-tight text-[#1E2316] leading-tight">
                Dubai Desert
              </div>
              <div className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] text-safari-muted uppercase leading-none">
                Adventures
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
            <Link to="/" className="px-4 py-2 text-sm font-medium text-[#1E2316] rounded-xl hover:bg-black/[0.04] transition-colors">Home</Link>

            {/* Mega Menu Trigger */}
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-all cursor-pointer ${megaMenuOpen ? 'text-safari-orange bg-safari-orange/8' : 'text-[#4F583E] hover:bg-black/[0.04]'}`}
            >
              Desert Safaris
              <ChevronDown size={14} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <Link to="/about" className="px-4 py-2 text-sm font-medium text-[#4F583E] rounded-xl hover:bg-black/[0.04] transition-colors">About</Link>
            <Link to="/#itinerary" className="px-4 py-2 text-sm font-medium text-[#4F583E] rounded-xl hover:bg-black/[0.04] transition-colors">Itinerary</Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-[#4F583E] rounded-xl hover:bg-black/[0.04] transition-colors">Contact</Link>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-[#FAF9F8] border border-black/[0.08] rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.14)] p-7 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-3 gap-6">
                  {desertSafariMenu.map((group) => (
                    <div key={group.heading}>
                      <div className="font-mono text-[10px] tracking-widest text-stone uppercase mb-3 pb-2 border-b border-sand">{group.heading}</div>
                      <div className="flex flex-col gap-1">
                        {group.items.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => handleNavClick(item.href)}
                            className="text-left group rounded-xl p-2.5 hover:bg-sand/60 transition-colors cursor-pointer w-full"
                          >
                            <div className="text-sm font-medium text-[#1E2316] group-hover:text-safari-orange transition-colors">{item.label}</div>
                            <div className="text-[11px] text-stone mt-0.5 leading-snug">{item.sub}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-sand flex items-center justify-between">
                  <p className="text-[12px] text-stone">Pay on the day · Free 24h cancellation · 0% deposit</p>
                  <button
                    type="button"
                    onClick={() => handleNavClick('/desert-safari')}
                    className="font-mono text-[11px] tracking-wider text-safari-orange hover:text-safari-orange-hover font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    View All 9 Packages <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href="https://wa.me/971559445338"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1E2316] hover:bg-safari-olive text-white text-[11.5px] font-mono tracking-widest uppercase px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <span>WhatsApp Booking</span>
            </a>

            {/* Mobile Menu Button with safe touch area */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                scrolled ? 'bg-safari-card border-sand shadow-sm' : 'bg-white/80 border-white/60 shadow-sm backdrop-blur-md'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#1E2316]" /> : <Menu size={20} className="text-[#1E2316]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-md pointer-events-auto flex flex-col justify-start pt-20 px-3 pb-6 animate-in fade-in duration-200">
          <div className="bg-[#FAF9F8] border border-sand rounded-[28px] shadow-2xl p-5 max-h-[84vh] overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-sand mb-3">
                <div className="font-mono text-[10px] tracking-widest text-stone uppercase">NAVIGATION</div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-sand/60 flex items-center justify-center text-[#1E2316]"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => handleNavClick('/')}
                  className="text-left text-[16px] font-medium text-[#1E2316] hover:text-safari-orange py-3 px-3.5 rounded-xl hover:bg-sand/50 transition-all flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight size={14} className="text-stone" />
                </button>

                {/* Desert Safari Accordion on Mobile */}
                <div className="border border-sand/80 rounded-2xl overflow-hidden bg-sand/20">
                  <button
                    onClick={() => setMobileSafariAccordion(!mobileSafariAccordion)}
                    className="w-full text-left text-[16px] font-medium text-[#1E2316] py-3 px-3.5 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Compass size={16} className="text-safari-orange" />
                      <span>Desert Safaris</span>
                    </span>
                    <ChevronDown size={16} className={`text-stone transition-transform duration-200 ${mobileSafariAccordion ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSafariAccordion && (
                    <div className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-sand/60 bg-white/60">
                      {[
                        { label: 'All Safari Packages', to: '/desert-safari' },
                        { label: 'Evening Desert Safari (Standard, Premium, VIP)', to: '/evening-desert-safari' },
                        { label: 'Morning & Sunrise Tours', to: '/morning-safari' },
                        { label: 'Self-Drive Safari Convoy', to: '/self-drive' },
                        { label: 'VIP Traditional Arabic Safari', to: '/vip-traditional-arabic' },
                        { label: 'Private Desert Setup / Camp', to: '/private-desert-setup' },
                      ].map((sub) => (
                        <button
                          key={sub.to}
                          onClick={() => handleNavClick(sub.to)}
                          className="text-left text-[13.5px] text-[#4F583E] hover:text-safari-orange py-2 px-2.5 rounded-lg hover:bg-sand/60 transition-colors flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          <ArrowRight size={11} className="text-stone/60" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('/about')}
                  className="text-left text-[16px] font-medium text-[#1E2316] hover:text-safari-orange py-3 px-3.5 rounded-xl hover:bg-sand/50 transition-all flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ArrowRight size={14} className="text-stone" />
                </button>

                <button
                  onClick={() => handleNavClick('/contact')}
                  className="text-left text-[16px] font-medium text-[#1E2316] hover:text-safari-orange py-3 px-3.5 rounded-xl hover:bg-sand/50 transition-all flex items-center justify-between"
                >
                  <span>Contact & Location</span>
                  <ArrowRight size={14} className="text-stone" />
                </button>
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="flex flex-col gap-2.5 pt-4 mt-4 border-t border-sand">
              <a
                href="https://wa.me/971559445338"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-safari-orange hover:bg-safari-orange-hover text-white text-center py-3.5 rounded-xl font-mono text-[12px] tracking-widest uppercase flex items-center justify-center gap-2 shadow-md shadow-safari-orange/20"
              >
                <MessageCircle size={15} /> Book on WhatsApp
              </a>
              <a
                href="tel:+971559445338"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full border border-stone/30 text-[#1E2316] text-center py-3 rounded-xl font-mono text-[12px] tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Phone size={14} /> +971 55 944 5338
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
