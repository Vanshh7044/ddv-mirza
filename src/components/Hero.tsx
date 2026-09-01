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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const adventureOptions = [
  'Evening Standard Safari (AED 79/person)',
  'Evening Premium Safari + Quad Bike (AED 119/person)',
  'Evening VIP Safari + Private Majlis (AED 299/person)',
  'Sunrise Desert Safari (AED 349/vehicle)',
  'Self-Drive Desert Convoy (AED 35/person)',
  'Private Desert Camp Setup (AED 2,299/group)',
];

export default function Hero() {
  const [fullName, setFullName] = useState('');
  const [adventure, setAdventure] = useState('Evening Standard Safari (AED 79/person)');
  const [arrivalDate, setArrivalDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const containerRef = useRef<HTMLElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 });

      introTl
        .fromTo(
          '.hero-bg-media',
          { opacity: 0.7, scale: 1.05 },
          { opacity: 1, scale: 1.0, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo(
          '.hero-text-line',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-ui-reveal',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
          '-=0.5'
        );

      if (videoRef.current) {
        gsap.fromTo(
          '.hero-bg-media',
          { scale: 1.0, transformOrigin: 'center 45%' },
          {
            scale: 1.35,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.0,
            },
          }
        );
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

    const text = `Hi Dubai Desert Adventures! My name is ${fullName}. I would like to book: "${adventure}" for date: ${arrivalDate || 'Flexible'}. Please confirm available slots!`;
    const whatsappUrl = `https://wa.me/971556015834?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section ref={containerRef} className="relative select-none pt-20 md:pt-24 px-3 sm:px-4 md:px-6 max-w-[1780px] mx-auto w-full">
      {/* Immersive Wide Hero Card */}
      <div
        ref={heroCardRef}
        className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden min-h-[78vh] sm:min-h-[84vh] flex flex-col justify-between p-5 sm:p-8 md:p-14 text-white shadow-2xl bg-[#0F172A] border border-white/10"
      >
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            poster="/images/dune-bashing.jpg"
            playsInline
            autoPlay
            muted={isMuted}
            loop
            className="hero-bg-media absolute inset-0 w-full h-full object-cover will-change-transform filter saturate-[1.15] brightness-[0.88]"
          >
            <source src="/videos/dunes.mp4" type="video/mp4" />
            <source src="/videos/dunes-golden.mp4" type="video/mp4" />
          </video>

          {/* Gradients for high contrast text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
        </div>

        {/* Top Badges & Live Status */}
        <div className="relative z-20 flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DET Licensed Direct Operator · Since 2010</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-amber-400 text-xs font-bold">
              <Sun size={14} />
              <span>Lehbab Red Dunes 28°C · Sunset 18:25</span>
            </span>
          </div>

          {/* Video Control Buttons */}
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              onClick={togglePlayPause}
              className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              title={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              title={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
          </div>
        </div>

        {/* Main Hero Typography */}
        <div className="relative z-20 max-w-4xl pt-10 sm:pt-16 pb-4">
          <div className="inline-flex items-center gap-2 bg-[#EA580C] text-white px-3.5 py-1 rounded-lg text-xs font-extrabold tracking-wider uppercase mb-4 shadow-md">
            <Sparkles size={13} /> Skip Middlemen · Book Operator Direct
          </div>

          <h1 className="hero-text-line text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.05] tracking-tight text-white drop-shadow-lg">
            Dubai's #1 Rated<br />
            <span className="text-[#EA580C]">Desert Safari.</span>
          </h1>

          <p className="hero-text-line text-lg sm:text-2xl text-slate-100 font-semibold mt-4 leading-snug drop-shadow">
            Red dune bashing, sunset camels, BBQ dinner & live fire shows.
          </p>

          {/* Trust Value Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-6 text-white text-xs sm:text-sm font-bold">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Pay on Arrival (No Deposit)</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Free Hotel Pickup Included</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Free 24h Cancellation</span>
            </span>
          </div>
        </div>

        {/* Scroll Action Indicator */}
        <div className="relative z-20 flex items-center justify-between pt-2 border-t border-white/15">
          <span className="text-xs font-bold text-slate-300">Packages from AED 79 / person</span>
          <button
            onClick={handleScrollDown}
            className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#EA580C] transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            <span>View All Packages</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Quick Booking Bar */}
      <div
        id="adventure-form"
        className="hero-ui-reveal bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-sand max-w-[1720px] mx-auto -mt-6 sm:-mt-8 relative z-30"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Quick WhatsApp Reservation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium">
              Zero advance payment • Confirmation in under 3 minutes • 4.9★ Rated
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { label: '🔥 Evening Standard (AED 79)', value: 'Evening Standard Safari (AED 79/person)' },
              { label: '⭐ Evening Premium (AED 119)', value: 'Evening Premium Safari + Quad Bike (AED 119/person)' },
              { label: '👑 VIP Majlis (AED 299)', value: 'Evening VIP Safari + Private Majlis (AED 299/person)' },
            ].map((chip) => (
              <button
                key={chip.value}
                type="button"
                onClick={() => setAdventure(chip.value)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
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
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4 text-[#0F172A]">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Opening WhatsApp with your booking details...</h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                Our operations team will confirm your driver and pickup time right away!
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-xs font-bold text-[#0F172A] uppercase mb-1.5 block">
                Your Name*
              </label>
              <input
                id="name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Smith"
                required
                className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#EA580C] rounded-xl px-4 py-3 text-sm text-[#0F172A] font-medium outline-none transition-all"
              />
            </div>

            {/* Package */}
            <div>
              <label htmlFor="adventure" className="text-xs font-bold text-[#0F172A] uppercase mb-1.5 block">
                Selected Safari*
              </label>
              <div className="relative">
                <select
                  id="adventure"
                  value={adventure}
                  onChange={(e) => setAdventure(e.target.value)}
                  required
                  className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#EA580C] rounded-xl px-4 py-3 text-sm text-[#0F172A] font-medium outline-none transition-all appearance-none cursor-pointer pr-10"
                >
                  {adventureOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="text-xs font-bold text-[#0F172A] uppercase mb-1.5 block">
                Preferred Date*
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="date"
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#EA580C] rounded-xl pl-11 pr-4 py-3 text-sm text-[#0F172A] font-medium outline-none transition-all cursor-pointer"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>Reserve via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
