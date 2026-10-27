import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

let lenis: Lenis | null = null;

/**
 * Lenis smooth scrolling for mouse / trackpad devices only. It is loaded after the page has
 * finished loading, so phones (native touch scrolling) never download it and first paint is
 * unaffected. Skipped when the visitor prefers reduced motion.
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const wanted =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!wanted) return;

    let cancelled = false;
    const start = () =>
      import('lenis').then(({ default: LenisCtor }) => {
        if (cancelled || lenis) return;
        lenis = new LenisCtor({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.95,
          autoRaf: true,
        });
      });

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', start);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
};

/** Smooth-scroll to an element or position, through Lenis when it is running. */
export const smoothScrollTo = (target: HTMLElement | number, offset = -80) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : offset });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * useScrollReset — call once inside Layout.
 * On route change: jump to the top (or to #hash) before the new page paints.
 */
export const useScrollReset = () => {
  const location = useLocation();

  useIsoLayoutEffect(() => {
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (target) {
      smoothScrollTo(target);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      lenis?.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);
};
