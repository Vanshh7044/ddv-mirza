import { useState, FormEvent, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  ChevronDown, 
  CheckCircle2, 
  Sun, 
  ShieldCheck, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const adventureOptions = [
  'Evening Standard Safari (Lehbab Red Dunes)',
  'Sunset VIP Safari (Private 4×4 & Majlis)',
  'Sunrise Hot Air Balloon & Desert Breakfast',
  'Quad Bike & Dune Buggy Adventure',
  'Overnight Bedouin Camp Experience',
  'Private Stargazing & Heritage Safari',
];

export default function Hero() {
  const [fullName, setFullName] = useState('');
  const [adventure, setAdventure] = useState('Evening Standard Safari (Lehbab Red Dunes)');
  const [arrivalDate, setArrivalDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const containerRef = useRef<HTMLElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 2.2 });

      // ─── HERO CONTENT REVEAL (Starts as preloader wipes up) ────────────────
      introTl
        .fromTo(
          '.hero-bg-media',
          { opacity: 0.7, scale: 1.06 },
          { opacity: 1, scale: 1.0, duration: 1.4, ease: 'power2.out' }
        )
        .fromTo(
          '.hero-text-line',
          { yPercent: 125, opacity: 0, rotateZ: 1.5 },
          {
            yPercent: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 1.1,
            stagger: 0.14,
            ease: 'power3.out',
          },
          '-=1.0'
        )
        .fromTo(
          '.hero-badge-pill',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-ui-reveal',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' },
          '-=0.6'
        );

      // SMS Realty Style Direct 1:1 Scroll-Linked Video Zoom
      if (videoRef.current) {
        // Video Zoom: Directly linked to scroll, scaling from 1.0 to 1.48
        gsap.fromTo(
          '.hero-bg-media',
          { scale: 1.0, transformOrigin: 'center 45%' },
          {
            scale: 1.48,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );

        // Typography moves gently upward with fade
        gsap.to('.hero-text-content', {
          yPercent: -28,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.0,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
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
    const formElement = document.getElementById('adventure-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !adventure) {
      alert('Please fill in your name and select an adventure.');
      return;
    }
    setIsSubmitted(true);

    const text = `Hello Dubai Desert Adventures, my name is ${fullName}. I would like to book: "${adventure}" for arrival date: ${arrivalDate || 'Flexible'}. Please share availability and VIP confirmation!`;
    const whatsappUrl = `https://wa.me/971559445338?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section ref={containerRef} className="relative select-none">
      {/* Ultra-Wide Viewport Container */}
      <div className="px-2 sm:px-4 md:px-6 pt-20 md:pt-24 max-w-[1780px] mx-auto w-full">
        {/* Immersive Wide Hero Card with Scroll-Linked Zoom */}
        <div
          ref={heroCardRef}
          className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[44px] overflow-hidden min-h-[80vh] sm:min-h-[86vh] md:min-h-[92vh] flex flex-col justify-between p-4 sm:p-8 md:p-16 text-white shadow-2xl bg-[#14171C] border border-white/[0.08]"
        >
          {/* Background Sand Dunes Video with Direct 1:1 Scroll Zoom */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <video
              ref={videoRef}
              poster="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=85"
              playsInline
              autoPlay
              muted={isMuted}
              loop
              className="hero-bg-media absolute inset-0 w-full h-full object-cover will-change-transform filter saturate-[1.12] brightness-[0.92]"
            >
              <source src="/videos/dunes.mp4" type="video/mp4" />
              <source src="/videos/dunes-golden.mp4" type="video/mp4" />
              <source src="https://assets.mixkit.co/videos/4149/4149-720.mp4" type="video/mp4" />
            </video>

            {/* Warm Golden Hour Ambient Sun Glow */}
            <div className="absolute -top-20 -right-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-radial from-safari-orange/25 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* Subtle Film Grain Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '180px 180px',
              }}
            />

            {/* Luxury Gradient Overlays for Ultimate Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60" />
          </div>

          {/* Top Live Stats & Coordinates Bar */}
          <div className="relative z-20 flex flex-wrap justify-between items-center gap-2.5 pt-1 sm:pt-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="hero-badge-pill inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 text-[#FAF9F8] text-[10px] sm:text-[11px] font-mono tracking-wider uppercase shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
                <span className="ml-1">NEXT FLEET DEPARTING 15:30</span>
              </span>

              <span className="hero-badge-pill hidden md:inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-[#FAF9F8]/85 text-[11px] font-mono tracking-wider uppercase">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>LEHBAB 28°C · SUNSET 18:24</span>
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hero-badge-pill hidden sm:inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[#FAF9F8]/85 text-[10.5px] sm:text-[11px] font-mono tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-safari-orange" />
                <span>DET LICENSED · SINCE 2010</span>
              </span>

              {/* Video Controls */}
              <div className="hero-badge-pill flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-white/15">
                <button
                  onClick={togglePlayPause}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                  title={isPlaying ? 'Pause background video' : 'Play video'}
                  aria-label="Toggle video playback"
                >
                  {isPlaying ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                  title={isMuted ? 'Unmute video' : 'Mute video'}
                  aria-label="Toggle audio"
                >
                  {isMuted ? <VolumeX size={11} /> : <Volume2 size={11} />}
                </button>
              </div>
            </div>
          </div>

          {/* Hero Typography & Scroll Button */}
          <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 pt-12 sm:pt-20 md:pt-32 pb-2 sm:pb-4">
            <div className="hero-text-content max-w-5xl will-change-transform">
              {/* Top Accent Sub-tag */}
              <div className="flex items-center gap-2 mb-2.5 sm:mb-4">
                <span className="w-6 sm:w-8 h-[2px] bg-safari-orange" />
                <span className="font-mono text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.22em] sm:tracking-[0.28em] text-safari-orange uppercase font-semibold">
                  DUBAI DIRECT DESERT SAFARI OPERATOR
                </span>
              </div>

              {/* Masked Typography Lines */}
              <div className="overflow-hidden mb-1 sm:mb-1.5">
                <h1 className="hero-text-line font-serif font-light text-[34px] sm:text-6xl md:text-7xl lg:text-[92px] leading-[1.03] tracking-tight text-[#FAF9F8] drop-shadow-xl origin-bottom-left">
                  Dubai&apos;s wild Heart.
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="hero-text-line font-serif italic text-[26px] sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.08] text-amber-100/95 drop-shadow-xl origin-bottom-left">
                  Custom Safaris, just for You
                </p>
              </div>

              {/* Feature Badges below Title */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-5 mt-4 sm:mt-6 text-[#FAF9F8]/85 font-mono text-[11px] sm:text-[12px] tracking-wide">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-safari-orange" />
                  <span>Free Hotel Pickup</span>
                </span>
                <span className="text-white/25">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-safari-orange" />
                  <span>Pay on the Day</span>
                </span>
                <span className="text-white/25">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-safari-orange" />
                  <span>Free 24h Cancellation</span>
                </span>
              </div>
            </div>

            {/* Circular Scroll Down Button with Pulse Ring */}
            <div className="flex flex-col items-center gap-2 self-end lg:self-auto shrink-0 mt-2 lg:mt-0">
              <button
                onClick={handleScrollDown}
                className="hero-ui-reveal relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-white/40 hover:border-safari-orange text-white flex items-center justify-center hover:scale-105 hover:bg-safari-orange/20 transition-all duration-300 backdrop-blur-md group cursor-pointer shadow-[0_4px_28px_rgba(0,0,0,0.5)]"
                aria-label="Scroll to adventure planner"
              >
                <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-7 sm:h-7 stroke-white fill-none stroke-[1.5] group-hover:translate-y-1 transition-transform"
                >
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-white/50 uppercase hidden sm:block">
                EXPLORE
              </span>
            </div>
          </div>
        </div>

        {/* Start Your Adventure Here - Wide Booking Module */}
        <div
          id="adventure-form"
          className="hero-ui-reveal bg-[#FAF9F8] rounded-[22px] sm:rounded-[32px] md:rounded-[36px] p-4 sm:p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 max-w-[1720px] mx-auto -mt-6 sm:-mt-8 md:-mt-12 relative z-30 transition-all"
        >
          {/* Top Bar with Category Quick Filter Chips */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-black/[0.06]">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-[44px] text-[#1E2316] font-light tracking-tight">
                Start your adventure here
              </h2>
              <p className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#727965] uppercase mt-1">
                INSTANT WHATSAPP CONFIRMATION · ZERO ADVANCE DEPOSIT REQUIRED
              </p>
            </div>

            {/* Quick Filter Selection Chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { label: '🔥 Evening Standard', value: 'Evening Standard Safari (Lehbab Red Dunes)' },
                { label: '👑 VIP Majlis', value: 'Sunset VIP Safari (Private 4×4 & Majlis)' },
                { label: '🏎️ Quad & Buggy', value: 'Quad Bike & Dune Buggy Adventure' },
                { label: '🌅 Sunrise Balloon', value: 'Sunrise Hot Air Balloon & Desert Breakfast' },
              ].map((chip) => (
                <button
                  key={chip.value}
                  type="button"
                  onClick={() => setAdventure(chip.value)}
                  className={`font-mono text-[10px] sm:text-[11px] tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all cursor-pointer ${
                    adventure === chip.value
                      ? 'bg-[#1E2316] text-[#FAF9F8] border-[#1E2316] shadow-sm'
                      : 'bg-[#EDE8E1]/60 text-[#4F583E] border-transparent hover:border-[#4F583E]/30 hover:bg-[#EDE8E1]'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {isSubmitted ? (
            <div className="bg-[#EDE8E1]/70 border border-[#4F583E]/20 rounded-2xl p-5 sm:p-8 flex items-center gap-4 text-[#1E2316] animate-in fade-in zoom-in-95 duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-medium">Opening WhatsApp with your booking details...</h3>
                <p className="text-xs sm:text-sm text-[#727965] mt-1 font-mono">
                  Our Dubai concierge will reply in 5 minutes with car assignment & pickup schedule.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6 items-end"
            >
              {/* Field 1: Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-[#4F583E] uppercase mb-1.5 sm:mb-2 block"
                >
                  Full Name*
                </label>
                <input
                  id="name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  required
                  className="w-full bg-[#EDE8E1]/70 hover:bg-[#EDE8E1] focus:bg-white border border-transparent focus:border-safari-orange/50 rounded-xl px-4 py-3 sm:py-3.5 text-[16px] md:text-sm text-[#1E2316] placeholder:text-[#8A8272] outline-none transition-all shadow-inner"
                />
              </div>

              {/* Field 2: Choose Your Adventure */}
              <div>
                <label
                  htmlFor="adventure"
                  className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-[#4F583E] uppercase mb-1.5 sm:mb-2 block"
                >
                  Selected Safari Package*
                </label>
                <div className="relative">
                  <select
                    id="adventure"
                    value={adventure}
                    onChange={(e) => setAdventure(e.target.value)}
                    required
                    className="w-full bg-[#EDE8E1]/70 hover:bg-[#EDE8E1] focus:bg-white border border-transparent focus:border-safari-orange/50 rounded-xl px-4 py-3 sm:py-3.5 text-[16px] md:text-sm text-[#1E2316] outline-none transition-all appearance-none cursor-pointer pr-10 shadow-inner"
                  >
                    {adventureOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#727965] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Arrival Date */}
              <div>
                <label
                  htmlFor="date"
                  className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-[#4F583E] uppercase mb-1.5 sm:mb-2 block"
                >
                  Preferred Date*
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#727965] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="date"
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full bg-[#EDE8E1]/70 hover:bg-[#EDE8E1] focus:bg-white border border-transparent focus:border-safari-orange/50 rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-[16px] md:text-sm text-[#1E2316] placeholder:text-[#8A8272] outline-none transition-all cursor-pointer shadow-inner"
                  />
                </div>
              </div>

              {/* Field 4: Customize Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-safari-orange hover:bg-safari-orange-hover active:scale-[0.99] text-white font-mono text-[12px] tracking-widest uppercase px-5 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-safari-orange/25 cursor-pointer"
                >
                  <span>Book on WhatsApp</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
