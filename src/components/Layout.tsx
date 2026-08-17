import { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import MobileBar from './MobileBar';
import Preloader from './Preloader';
import { useSmoothScroll, useScrollReset } from '../hooks/useSmoothScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';
import gsap from 'gsap';

export default function Layout() {
  const location = useLocation();
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  // Lenis smooth scroll — init once for the lifetime of the app
  useSmoothScroll();
  // Reset scroll position + re-init ScrollTrigger on every route change
  useScrollReset();
  // Global reveal animations
  useScrollReveal();

  // Smooth Blurry Page Transition on route changes (skip on initial mount to allow preloader)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // 1. Top navigation progress bar
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0, opacity: 1, transformOrigin: '0% 50%' },
        {
          scaleX: 1,
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(progressBarRef.current, { opacity: 0, duration: 0.25 });
          },
        }
      );
    }

    // 2. Main page blur & fade dissolve
    if (pageContainerRef.current) {
      gsap.fromTo(
        pageContainerRef.current,
        {
          opacity: 0,
          filter: 'blur(16px)',
          y: 12,
          scale: 0.995,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: 'power3.out',
          clearProps: 'filter,transform',
        }
      );
    }
  }, [location.pathname]);

  return (
    <div className="bg-[#F7F5F0] min-h-screen relative selection:bg-safari-orange selection:text-white">
      {/* 1. Global Mountain Line-Tracing Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* 2. Top Route Progress Bar */}
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-safari-orange via-amber-400 to-safari-orange z-[9999] pointer-events-none opacity-0 shadow-[0_0_12px_#D96B27]"
      />

      <Nav />
      <main ref={pageContainerRef} data-preloader-done={preloaderFinished}>
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
