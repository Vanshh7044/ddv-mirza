import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
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
  const [mobileSafariAccordion, setMobileSafariAccordion] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (navRef.current) {
      gsap.fromTo(navRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll on mobile when menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Close mega menu on outside click or ESC
  useEffect(() => {
    const handleDown = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('keydown', handleKey);
    };
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

      {/* Main Navbar Bar */}
      <div className="px-2.5 sm:px-4 md:px-6 pointer-events-auto" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div
          ref={navRef}
          className={`max-w-[1780px] mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-200/80 rounded-2xl px-3.5 sm:px-6 py-2 sm:py-2.5 mt-1 sm:mt-2'
              : 'bg-transparent px-2 py-2.5 sm:py-3'
          }`}
        >
          {/* Brand */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${scrolled ? 'bg-[#EA580C] text-white shadow-md' : 'bg-white/95 text-[#EA580C] border border-white/60 shadow-md backdrop-blur-md'}`}>
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="min-w-0">
              <div className="text-xs min-[360px]:text-sm sm:text-lg md:text-xl font-black tracking-tight text-[#0F172A] leading-tight truncate max-w-[140px] min-[360px]:max-w-[185px] sm:max-w-none">
                Dubai Dune Tours
              </div>
              <div className="text-[9px] sm:text-[10px] font-extrabold tracking-wider text-[#EA580C] uppercase leading-none truncate">
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
              aria-expanded={megaMenuOpen}
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
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Desktop WhatsApp Button */}
            <a
              href={getWhatsAppLink('Hi! I want to book a desert safari with Dubai Dune Tours.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all shadow-md shadow-[#EA580C]/20 hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Booking</span>
            </a>

            {/* Mobile Direct Call Shortcut button */}
            <a
              href="tel:+971556015834"
              className="sm:hidden w-10 h-10 rounded-xl bg-slate-100/90 text-[#0F172A] border border-slate-200/80 flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Call Dubai Dune Tours"
            >
              <Phone size={17} className="text-[#EA580C]" />
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} className="text-[#0F172A]" /> : <Menu size={20} className="text-[#0F172A]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-md pointer-events-auto flex flex-col justify-end sm:justify-center p-2.5 sm:p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div 
            ref={drawerRef}
            className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-4 sm:p-5 max-h-[90vh] overflow-y-auto flex flex-col justify-between w-full max-w-lg mx-auto"
            style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
          >
            <div>
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#EA580C] text-white flex items-center justify-center">
                    <Compass size={15} />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0F172A]">Dubai Dune Tours</span>
                    <div className="text-[9px] font-bold text-emerald-600">Pay On Arrival · No Deposit</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#0F172A] active:scale-95 transition-transform"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => handleNavClick('/')}
                  className="text-left text-sm font-bold text-[#0F172A] hover:text-[#EA580C] py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>Home Page</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </button>

                {/* Desert Safari Accordion */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/70 my-1">
                  <button
                    onClick={() => setMobileSafariAccordion(!mobileSafariAccordion)}
                    className="w-full text-left text-sm font-bold text-[#0F172A] py-3 px-3.5 flex items-center justify-between"
                    aria-expanded={mobileSafariAccordion}
                  >
                    <span className="flex items-center gap-2">
                      <Compass size={16} className="text-[#EA580C]" />
                      <span>Safari Packages & Tiers</span>
                    </span>
                    <ChevronDown size={16} className={`text-slate-500 transition-transform duration-200 ${mobileSafariAccordion ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSafariAccordion && (
                    <div className="px-2.5 pb-2.5 pt-1 flex flex-col gap-1 border-t border-slate-200 bg-white">
                      {[
                        { label: '⭐ Evening Standard (AED 79)', sub: 'Dune Bashing, BBQ & Shows', to: '/evening-safari/standard' },
                        { label: '🔥 Evening Premium + Quad (AED 119)', sub: 'Quad Bike + VIP Seating', to: '/evening-safari/premium' },
                        { label: '👑 Evening VIP Majlis (AED 299)', sub: 'Private 4×4 & VIP Lounge', to: '/evening-safari/vip' },
                        { label: '🌅 Sunrise Desert Safari (AED 349)', sub: 'Private dawn tour', to: '/morning-safari' },
                        { label: '🏎️ Self-Drive Convoy (AED 35)', sub: 'Drive your own 4×4', to: '/self-drive' },
                        { label: '🎪 Private Desert Camp Setup', sub: 'Exclusive isolated camp', to: '/private-desert-setup' },
                        { label: '📋 View All Packages', sub: 'Compare complete catalogue', to: '/desert-safari' },
                      ].map((sub) => (
                        <button
                          key={sub.to}
                          onClick={() => handleNavClick(sub.to)}
                          className="text-left p-2 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#1E293B] group-hover:text-[#EA580C] transition-colors">{sub.label}</div>
                            <div className="text-[10px] text-[#64748B] font-medium">{sub.sub}</div>
                          </div>
                          <ArrowRight size={12} className="text-slate-400 group-hover:text-[#EA580C] shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('/about')}
                  className="text-left text-sm font-bold text-[#0F172A] hover:text-[#EA580C] py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>About Our Fleet & Drivers</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </button>

                <button
                  onClick={() => handleNavClick('/contact')}
                  className="text-left text-sm font-bold text-[#0F172A] hover:text-[#EA580C] py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
                >
                  <span>Contact & Dispatch Location</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </button>
              </nav>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="flex flex-col gap-2 pt-3 mt-3 border-t border-slate-100">
              <a
                href={getWhatsAppLink('Hi! I want to book a desert safari package with Dubai Dune Tours.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-center py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/25 active:scale-98"
              >
                <MessageCircle size={17} /> Instant WhatsApp Booking
              </a>
              <a
                href="tel:+971556015834"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0F172A] text-center py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-[#EA580C]" /> Call Direct: +971 55 601 5834
              </a>
              <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400 text-center pt-1">
                <ShieldCheck size={12} className="text-emerald-500" />
                <span>DET Licensed Operator Since 2010</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
