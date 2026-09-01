import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, Compass, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { getWhatsAppLink } from '../data/safariPackages';

const desertSafariMenu = [
  {
    heading: 'Evening Safari (Most Popular)',
    items: [
      { label: 'All Evening Packages', sub: 'Compare Standard / Premium / VIP', href: '/evening-desert-safari' },
      { label: 'Standard Package (AED 79)', sub: 'Dune Bashing, BBQ & Shows', href: '/evening-safari/standard' },
      { label: 'Premium Package (AED 119)', sub: 'Quad Bike + VIP Seating', href: '/evening-safari/premium' },
      { label: 'VIP Experience (AED 299)', sub: 'Private 4×4 & Majlis Tent', href: '/evening-safari/vip' },
    ],
  },
  {
    heading: 'Morning & Self-Drive',
    items: [
      { label: 'Sunrise Safari (AED 349)', sub: 'Private Land Cruiser at dawn', href: '/morning-safari' },
      { label: 'Morning Safari (AED 130)', sub: 'Dune Bashing & Sandboarding', href: '/morning-safari' },
      { label: 'Self-Drive Convoy (AED 35)', sub: 'Drive your own 4×4 in dunes', href: '/self-drive' },
    ],
  },
  {
    heading: 'VIP & Private Setups',
    items: [
      { label: 'VIP Traditional Arabic', sub: 'AED 999 / 2 adults · Falcon & Majlis', href: '/vip-traditional-arabic' },
      { label: 'Private Desert Camp Setup', sub: 'From AED 2,299 · Custom Private Camp', href: '/private-desert-setup' },
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
      gsap.fromTo(navRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
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
      <div className={`hidden lg:flex items-center justify-end gap-6 px-10 py-1.5 text-xs font-bold text-slate-700 transition-all duration-300 ${scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100'}`}>
        <a href="tel:+971556015834" className="flex items-center gap-1.5 hover:text-[#EA580C] transition-colors pointer-events-auto">
          <Phone size={13} className="text-[#EA580C]" /> +971 55 601 5834
        </a>
        <span className="text-slate-300">·</span>
        <span className="text-slate-600 uppercase tracking-wider">DET Licensed Operator · Since 2010</span>
      </div>

      {/* Main Navbar */}
      <div className="px-3 sm:px-4 md:px-6 pointer-events-auto">
        <div
          ref={navRef}
          className={`max-w-[1780px] mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-slate-200/80 rounded-2xl px-4 sm:px-6 py-2.5 mt-2'
              : 'bg-transparent px-2 py-3'
          }`}
        >
          {/* Brand */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${scrolled ? 'bg-[#EA580C] text-white shadow-md' : 'bg-white/90 text-[#EA580C] border border-white/60 shadow-md backdrop-blur-md'}`}>
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <div className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Dubai Desert Adventures
              </div>
              <div className="text-[10px] font-bold tracking-wider text-[#EA580C] uppercase leading-none">
                Direct Operator · 4.9★
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 relative" ref={megaRef}>
            <Link to="/" className="px-4 py-2 text-sm font-bold text-[#0F172A] rounded-xl hover:bg-slate-100 transition-colors">
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                megaMenuOpen ? 'text-[#EA580C] bg-[#EA580C]/10' : 'text-[#334155] hover:bg-slate-100'
              }`}
            >
              Desert Safaris
              <ChevronDown size={15} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#EA580C]' : ''}`} />
            </button>

            <Link to="/about" className="px-4 py-2 text-sm font-bold text-[#334155] rounded-xl hover:bg-slate-100 transition-colors">
              About Us
            </Link>
            <Link to="/#itinerary" className="px-4 py-2 text-sm font-bold text-[#334155] rounded-xl hover:bg-slate-100 transition-colors">
              Itinerary
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-bold text-[#334155] rounded-xl hover:bg-slate-100 transition-colors">
              Contact
            </Link>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[740px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-3 gap-6">
                  {desertSafariMenu.map((group) => (
                    <div key={group.heading}>
                      <div className="text-xs font-black text-[#EA580C] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
                        {group.heading}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {group.items.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => handleNavClick(item.href)}
                            className="text-left group rounded-xl p-2 hover:bg-[#F8F6F0] transition-colors cursor-pointer w-full"
                          >
                            <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#EA580C] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-[#64748B] mt-0.5 leading-snug font-medium">
                              {item.sub}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-xs text-[#64748B] font-semibold">
                    Pay on the day · Zero deposit · Free 24h cancellation
                  </p>
                  <button
                    type="button"
                    onClick={() => handleNavClick('/desert-safari')}
                    className="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] flex items-center gap-1 cursor-pointer"
                  >
                    View All Packages <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWhatsAppLink('Hi! I want to book a desert safari with Dubai Desert Adventures.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#EA580C]/20 hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Booking</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#0F172A]" /> : <Menu size={20} className="text-[#0F172A]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-md pointer-events-auto flex flex-col justify-start pt-16 px-3 pb-6 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 max-h-[86vh] overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="text-xs font-black text-[#EA580C] tracking-wider uppercase">Menu</div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0F172A]"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1.5">
                <button
                  onClick={() => handleNavClick('/')}
                  className="text-left text-base font-bold text-[#0F172A] hover:text-[#EA580C] py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight size={15} className="text-slate-400" />
                </button>

                {/* Desert Safari Accordion */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => setMobileSafariAccordion(!mobileSafariAccordion)}
                    className="w-full text-left text-base font-bold text-[#0F172A] py-3 px-3.5 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Compass size={17} className="text-[#EA580C]" />
                      <span>Desert Safari Packages</span>
                    </span>
                    <ChevronDown size={16} className={`text-slate-500 transition-transform duration-200 ${mobileSafariAccordion ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSafariAccordion && (
                    <div className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-slate-200 bg-white">
                      {[
                        { label: '⭐ Evening Standard Safari (AED 79)', to: '/evening-safari/standard' },
                        { label: '🔥 Evening Premium + Quad Bike (AED 119)', to: '/evening-safari/premium' },
                        { label: '👑 Evening VIP + Private Majlis (AED 299)', to: '/evening-safari/vip' },
                        { label: '🌅 Sunrise Desert Safari (AED 349)', to: '/morning-safari' },
                        { label: '🏎️ Self-Drive Convoy (AED 35)', to: '/self-drive' },
                        { label: '🎪 Private Desert Camp Setup', to: '/private-desert-setup' },
                      ].map((sub) => (
                        <button
                          key={sub.to}
                          onClick={() => handleNavClick(sub.to)}
                          className="text-left text-xs font-bold text-[#334155] hover:text-[#EA580C] py-2 px-2.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          <ArrowRight size={12} className="text-slate-400" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('/about')}
                  className="text-left text-base font-bold text-[#0F172A] hover:text-[#EA580C] py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ArrowRight size={15} className="text-slate-400" />
                </button>

                <button
                  onClick={() => handleNavClick('/contact')}
                  className="text-left text-base font-bold text-[#0F172A] hover:text-[#EA580C] py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>Contact & Location</span>
                  <ArrowRight size={15} className="text-slate-400" />
                </button>
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-slate-100">
              <a
                href={getWhatsAppLink('Hi! I want to book a desert safari package.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#EA580C] text-white text-center py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/25"
              >
                <MessageCircle size={17} /> Instant WhatsApp Booking
              </a>
              <a
                href="tel:+971556015834"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full border border-slate-200 text-[#0F172A] text-center py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone size={15} /> +971 55 601 5834
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
