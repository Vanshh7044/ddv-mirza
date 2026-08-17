import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.style.overflow = '';
        setIsRemoved(true);
        if (onComplete) onComplete();
      },
    });

    // ─── 1. INITIAL STATE SETUP ───────────────────────────────────────────────
    gsap.set('.preloader-path-main', { strokeDasharray: 360, strokeDashoffset: 360 });
    gsap.set('.preloader-path-bg', { strokeDasharray: 260, strokeDashoffset: 260 });
    gsap.set('.preloader-path-ridge', { strokeDasharray: 90, strokeDashoffset: 90 });
    gsap.set('.preloader-path-base', { strokeDasharray: 140, strokeDashoffset: 140 });
    gsap.set('.preloader-mountain-fill', { opacity: 0 });
    gsap.set('.preloader-sun', { opacity: 0, scale: 0.5 });
    gsap.set('.preloader-burst', { opacity: 0, scale: 0.5 });
    gsap.set('.preloader-brand-text', { opacity: 0, y: 14 });

    // ─── 2. TRACE THE MOUNTAIN OUTLINE PATHS ──────────────────────────────────
    tl.to(
      '.preloader-path-main',
      {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: 'power2.inOut',
      },
      0.1
    )
    .to(
      '.preloader-path-bg',
      {
        strokeDashoffset: 0,
        duration: 0.95,
        ease: 'power2.inOut',
      },
      0.2
    )
    .to(
      '.preloader-path-ridge',
      {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      },
      0.4
    )
    .to(
      '.preloader-path-base',
      {
        strokeDashoffset: 0,
        duration: 0.85,
        ease: 'power2.inOut',
      },
      0.35
    )

    // ─── 3. LIGHT UP / ILLUMINATE EMBLEM IN GOLDEN GLOW ───────────────────────
    .to(
      '.preloader-mountain-fill',
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.15'
    )
    .to(
      '.preloader-sun',
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(2)',
      },
      '<0.05'
    )
    .to(
      '.preloader-mountain-svg',
      {
        filter: 'drop-shadow(0 0 28px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.95))',
        scale: 1.08,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<'
    )
    .to(
      '.preloader-burst',
      {
        opacity: 0.9,
        scale: 1.7,
        duration: 0.55,
        ease: 'power2.out',
      },
      '<'
    )
    .to(
      '.preloader-brand-text',
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.2'
    )

    // ─── 4. HOLD MOMENT (Admire the glowing mountain) ─────────────────────────
    .to({}, { duration: 0.45 })

    // ─── 5. CURTAIN WIPE UPWARD INTO THE SITE ─────────────────────────────────
    .to(overlayRef.current, {
      yPercent: -100,
      duration: 1.05,
      ease: 'power4.inOut',
    });

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      ref={overlayRef}
      className="preloader-overlay fixed inset-0 z-[999999] bg-[#12151B] text-[#FAF9F8] flex flex-col items-center justify-center select-none will-change-transform"
      style={{ isolation: 'isolate' }}
    >
      <div className="flex flex-col items-center gap-6 text-center px-6">
        {/* Mountain Emblem Box with Glow */}
        <div className="relative flex items-center justify-center">
          {/* Radial amber burst when emblem lights up */}
          <div className="preloader-burst absolute w-32 h-32 rounded-full bg-radial from-amber-400/60 via-safari-orange/25 to-transparent blur-2xl pointer-events-none" />

          <svg
            viewBox="0 0 100 80"
            className="preloader-mountain-svg w-24 h-24 md:w-28 md:h-28 overflow-visible will-change-transform"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Golden gradient fill */}
              <linearGradient id="preloader-gold-fill" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#D96B27" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#D96B27" stopOpacity="0.15" />
              </linearGradient>

              {/* Radiant sun gradient */}
              <linearGradient id="preloader-sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            {/* Sun rising behind mountain (illuminates) */}
            <circle
              cx="50"
              cy="32"
              r="13"
              className="preloader-sun origin-center"
              fill="url(#preloader-sun-grad)"
            />

            {/* Background mountain / dune ridge */}
            <path
              d="M18 64 L42 26 L58 50 L76 32 L92 64"
              stroke="#D96B27"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="preloader-path-bg"
            />

            {/* Main front mountain peak */}
            <path
              d="M8 64 L38 16 L64 56 L78 34 L94 64 Z"
              stroke="#FBBF24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="preloader-path-main"
            />

            {/* Mountain Ridge Accent line */}
            <path
              d="M38 16 L46 64"
              stroke="#FBBF24"
              strokeWidth="2"
              strokeLinecap="round"
              className="preloader-path-ridge"
            />

            {/* Light-up glowing fill layer */}
            <path
              d="M8 64 L38 16 L64 56 L78 34 L94 64 Z"
              fill="url(#preloader-gold-fill)"
              className="preloader-mountain-fill"
            />

            {/* Base Horizon line */}
            <path
              d="M4 64 L96 64"
              stroke="#FBBF24"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="preloader-path-base"
            />
          </svg>
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col items-center">
          <span className="preloader-brand-text font-serif text-2xl md:text-3xl tracking-wide uppercase text-[#FAF9F8]">
            Dubai Desert Adventures
          </span>
          <span className="preloader-brand-text text-[11px] font-mono tracking-[0.28em] text-[#8A8272] uppercase mt-1.5">
            EST. 2010 · LEHBAB RED DUNES
          </span>
        </div>
      </div>
    </div>
  );
}
