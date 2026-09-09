import { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import MobileBar from './MobileBar';
import { useSmoothScroll, useScrollReset } from '../hooks/useSmoothScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackPageView } from '../utils/analytics';
import gsap from 'gsap';

export default function Layout() {
  const location = useLocation();
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  // Ensure body scroll is never locked
  useEffect(() => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }, []);

  // Lenis smooth scroll — init once for the lifetime of the app
  useSmoothScroll();
  // Reset scroll position + re-init ScrollTrigger on every route change
  useScrollReset();
  // Global reveal animations
  useScrollReveal();

  // Smooth loading and page transition
  useEffect(() => {
    // 1. Sleek top progress indicator
    if (progressBarRef.current) {
      gsap.killTweensOf(progressBarRef.current);
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0, opacity: 1, transformOrigin: '0% 50%' },
        {
          scaleX: 1,
          duration: isFirstMount.current ? 0.65 : 0.35,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(progressBarRef.current, { opacity: 0, duration: 0.25 });
          },
        }
      );
    }

    // 2. Smooth page dissolve entrance
    if (pageContainerRef.current) {
      gsap.killTweensOf(pageContainerRef.current);

      if (isFirstMount.current) {
        // Initial website load smooth transition for the client
        gsap.fromTo(
          pageContainerRef.current,
          {
            opacity: 0,
            filter: 'blur(8px)',
            y: 8,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            clearProps: 'filter,transform',
          }
        );
        isFirstMount.current = false;
      } else {
        // Subsequent route change smooth transition
        gsap.fromTo(
          pageContainerRef.current,
          {
            opacity: 0,
            filter: 'blur(10px)',
            y: 8,
            scale: 0.998,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
            clearProps: 'filter,transform',
          }
        );
      }
    }
  }, [location.pathname]);

  // Track SPA page views for GA4 + Meta Pixel
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return (
    <div className="bg-[#F7F5F0] min-h-screen relative selection:bg-safari-orange selection:text-white w-full max-w-full overflow-x-clip">
      {/* Top Accent / Route Progress Bar */}
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-safari-orange via-amber-400 to-safari-orange z-[9999] pointer-events-none opacity-0 shadow-[0_0_12px_#D96B27]"
      />

      <Nav />
      <main ref={pageContainerRef} className="w-full max-w-full page-smooth-entrance">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
