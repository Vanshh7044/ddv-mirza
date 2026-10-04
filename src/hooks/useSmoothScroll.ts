import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Singleton lenis instance so the ticker is never duplicated
let lenisInstance: Lenis | null = null;

export const useSmoothScroll = () => {
  useEffect(() => {
    // Destroy any previous instance before creating a new one
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
    });

    lenisInstance = lenis;

    // Sync with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};

/**
 * useScrollReset — call once inside Layout.
 * On route change: jumps to top and refreshes ScrollTrigger without killing existing triggers.
 */
export const useScrollReset = () => {
  const location = useLocation();

  // Layout effect: jump before the new page paints, so it never flashes at the old scroll position
  useIsoLayoutEffect(() => {
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (target) {
      if (lenisInstance) lenisInstance.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      lenisInstance?.scrollTo(0, { immediate: true });
    }

    // Refresh ScrollTrigger calculations after DOM paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);
};
