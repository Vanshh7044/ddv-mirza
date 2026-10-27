import { Link } from 'react-router-dom';
import { useState, FormEvent, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  ChevronDown, 
  CheckCircle2, 
  Sun, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { trackBookingFormSubmit } from '../utils/analytics';
import { SAFARI_PACKAGES, PRICES, FROM_PRICE, aed, UNIT_LABEL, getWhatsAppLink } from '../data/safariPackages';

const optionLabel = (p: (typeof SAFARI_PACKAGES)[number]) =>
  `${p.title} (${aed(p.price)}${UNIT_LABEL[p.priceUnit].replace(' ', '')})`;

const adventureOptions = SAFARI_PACKAGES.map(optionLabel);
const quickPicks = [
  { label: `🔥 Evening Standard (${aed(PRICES.eveningStandard)})`, id: 'evening-standard' },
  { label: `⭐ Evening Premium (${aed(PRICES.eveningPremium)})`, id: 'evening-premium' },
  { label: `🏍️ Premium + Quad (${aed(PRICES.premiumQuad)})`, id: 'premium-quad' },
  { label: `👑 VIP Majlis (${aed(PRICES.eveningVip)})`, id: 'evening-vip' },
  { label: `🏙️ Dubai City Tour (${aed(PRICES.dubaiCityTour)})`, id: 'dubai-city-tour' },
].map((q) => ({ label: q.label, value: optionLabel(SAFARI_PACKAGES.find((p) => p.id === q.id)!) }));

export default function Hero() {
  const [fullName, setFullName] = useState('');
  const [adventure, setAdventure] = useState(adventureOptions[0]);
  const [arrivalDate, setArrivalDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  // The poster image is the first paint (and LCP). The background video is only
  // fetched on larger screens, after the page has loaded, and never on Save-Data.
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const saveData = (navigator as any).connection?.saveData;
    if (saveData || !window.matchMedia('(min-width: 768px)').matches) return;
    let idleId: number | undefined;
    const start = () => {
      const idle = (window as any).requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
      idleId = idle(() => setShowVideo(true));
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      if (idleId !== undefined) ((window as any).cancelIdleCallback ?? clearTimeout)(idleId);
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScrollDown = () => {
    const packagesElem = document.getElementById('packages');
    if (packagesElem) {
      packagesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !adventure) {
      alert('Please fill in your name and select a package.');
      return;
    }
    setIsSubmitted(true);

    // Fire conversion tracking
    trackBookingFormSubmit(adventure, arrivalDate || 'Flexible', fullName);

    const text = `Hi Dubai Dune Tours! My name is ${fullName}. I would like to book: "${adventure}" for date: ${arrivalDate || 'Flexible'}. Please confirm available slots!`;
    const whatsappUrl = getWhatsAppLink(text);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <section ref={containerRef} className="relative select-none pt-16 sm:pt-20 md:pt-24 px-2.5 sm:px-4 md:px-6 max-w-[1780px] mx-auto w-full">
      {/* Immersive Wide Hero Card */}
      <div
        ref={heroCardRef}
        className="relative rounded-2xl sm:rounded-[36px] md:rounded-[44px] overflow-hidden min-h-[75vh] sm:min-h-[82vh] flex flex-col justify-between p-4 sm:p-8 md:p-14 text-white shadow-2xl bg-[#0F172A] border border-white/10"
      >
        {/* Background: poster image first (fast LCP), video fades in on desktop once the page has loaded */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/images/real/hero-poster.webp"
            srcSet="/images/real/hero-poster-640.webp 640w, /images/real/hero-poster.webp 1280w"
            sizes="100vw"
            alt=""
            width={1280}
            height={720}
            {...{ fetchpriority: 'high' }}
            className="absolute inset-0 w-full h-full object-cover saturate-[1.15] brightness-[0.85]"
          />
          {showVideo && (
            <video
              ref={videoRef}
              playsInline
              autoPlay
              muted={isMuted}
              loop
              preload="auto"
              onPlaying={() => setVideoReady(true)}
              className={`absolute inset-0 w-full h-full object-cover saturate-[1.15] brightness-[0.85] transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/videos/hero-real.mp4" type="video/mp4" />
            </video>
          )}

          {/* Gradients for contrast & readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/30" />
        </div>

        {/* Top Badges & Controls */}
        <div className="relative z-20 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[11px] sm:text-xs font-bold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DET Licensed Operator</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-amber-400 text-xs font-bold">
              <Sun size={13} />
              <span>Lehbab Red Dunes 28°C</span>
            </span>
          </div>

          {/* Video Playback Toggle Controls */}
          {showVideo && (
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              onClick={togglePlayPause}
              className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer touch-target"
              title={isPlaying ? 'Pause video' : 'Play video'}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer touch-target"
              title={isMuted ? 'Unmute video' : 'Mute video'}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={11} /> : <Volume2 size={11} />}
            </button>
          </div>
          )}
        </div>

        {/* Main Hero Headline */}
        <div className="relative z-20 max-w-4xl pt-6 sm:pt-14 pb-4">
          <div className="inline-flex items-center gap-1.5 bg-[#C2410C] text-white px-3 py-1 rounded-lg text-[10px] sm:text-xs font-black tracking-wider uppercase mb-3 shadow-md">
            <Sparkles size={12} /> Book Operator Direct · Pay on Arrival
          </div>

          <h1 className="text-[28px] min-[360px]:text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black leading-[1.08] tracking-tight text-white drop-shadow-lg">
            Dubai's #1 Rated<br />
            <span className="text-[#F97316]">Desert Safari.</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-100 font-semibold mt-3 sm:mt-4 leading-snug drop-shadow max-w-2xl">
            Red dune bashing, sunset camels, 5★ BBQ dinner & fire shows.
          </p>

          {/* Value Badges Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-white text-[11px] sm:text-xs md:text-sm font-bold">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Zero Advance Deposit</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Free Hotel Pickup</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Free 24h Cancel</span>
            </span>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="relative z-20 flex items-center justify-between pt-2.5 border-t border-white/15">
          <span className="text-[11px] sm:text-xs font-bold text-slate-300">Direct packages from {aed(FROM_PRICE)} / person</span>
          <button
            onClick={handleScrollDown}
            className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-white hover:text-[#FB923C] transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full backdrop-blur-md active:scale-95"
          >
            <span>View Packages</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Quick Booking Reservation Form Bar */}
      <div
        id="adventure-form"
        className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl border border-sand max-w-[1720px] mx-auto -mt-4 sm:-mt-8 relative z-30"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-[#0F172A]">
              Quick WhatsApp Reservation
            </h2>
            <p className="text-xs sm:text-sm text-[#56657A] font-medium">
              Zero advance payment • Fast WhatsApp confirmation • 4.9★ Rated ·{' '}
              <Link to="/book" className="text-[#C2410C] font-bold hover:underline">Full booking form →</Link>
            </p>
          </div>

          {/* Quick Select Buttons - Horizontally scrollable on mobile */}
          <div className="w-full max-w-full flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none touch-pan-x">
            {quickPicks.map((chip) => (
              <button
                key={chip.value}
                type="button"
                onClick={() => setAdventure(chip.value)}
                className={`text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all cursor-pointer ${
                  adventure === chip.value
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'bg-slate-50 text-[#475569] border-slate-200 hover:bg-slate-100'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center gap-3.5 text-[#0F172A]">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold">Opening WhatsApp with your booking details...</h3>
              <p className="text-xs text-[#475569]">
                Our operations team will confirm your driver and pickup time right away!
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="hero-name" className="text-xs font-bold text-[#0F172A] uppercase mb-1 block">
                Your Name*
              </label>
              <input
                id="hero-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Smith"
                required
                className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#C2410C] rounded-xl px-3.5 py-3 text-sm text-[#0F172A] font-medium outline-none transition-all h-[46px]"
              />
            </div>

            {/* Package Select */}
            <div>
              <label htmlFor="hero-adventure" className="text-xs font-bold text-[#0F172A] uppercase mb-1 block">
                Selected Safari*
              </label>
              <div className="relative">
                <select
                  id="hero-adventure"
                  value={adventure}
                  onChange={(e) => setAdventure(e.target.value)}
                  required
                  className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#C2410C] rounded-xl px-3.5 py-3 text-sm text-[#0F172A] font-medium outline-none transition-all appearance-none cursor-pointer pr-9 h-[46px]"
                >
                  {adventureOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="hero-date" className="text-xs font-bold text-[#0F172A] uppercase mb-1 block">
                Preferred Date*
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="hero-date"
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#C2410C] rounded-xl pl-10 pr-3.5 py-3 text-sm text-[#0F172A] font-medium outline-none transition-all cursor-pointer h-[46px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#C2410C] hover:bg-[#9A3412] active:scale-[0.98] text-white font-extrabold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#C2410C]/25 transition-all cursor-pointer h-[46px]"
              >
                <MessageCircle size={17} />
                <span>Reserve on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
