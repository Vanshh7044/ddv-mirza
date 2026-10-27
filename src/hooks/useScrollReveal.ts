import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Text that animates in as it scrolls into view. Nothing is touched until the visitor starts
// scrolling (or navigates to another page), and anything already on screen at that moment is
// left alone, so first paint, LCP and layout are unaffected.
const TARGETS = 'main :is(h2, h3, p, li, blockquote, [data-reveal])';
const SKIP = '[data-no-reveal], form, nav, button, [role="tablist"]';
const STAGGER_MS = 70;
const MAX_STAGGER = 6;

const finish = (el: HTMLElement) => {
  el.classList.remove('sr', 'sr-heading', 'sr-in');
  el.style.removeProperty('--sr-delay');
};

export const useScrollReveal = () => {
  const { pathname } = useLocation();
  const isFirstPage = useRef(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    // The observer's first report for each element tells us whether it starts on screen
    // (leave it) or below the fold (hide it and animate it in later). No layout reads needed.
    const observer = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!seen.has(el)) {
            seen.add(el);
            if (entry.isIntersecting) {
              observer.unobserve(el);
            } else {
              el.classList.add('sr');
              if (/^H[23]$/.test(el.tagName)) el.classList.add('sr-heading');
            }
            continue;
          }
          if (!entry.isIntersecting) continue;
          el.style.setProperty('--sr-delay', `${Math.min(batch++, MAX_STAGGER) * STAGGER_MS}ms`);
          el.classList.add('sr-in');
          // Clean up once the slowest property (transform) has finished
          const done = (e: TransitionEvent) => {
            if (e.target !== el || e.propertyName !== 'transform') return;
            el.removeEventListener('transitionend', done);
            finish(el);
          };
          el.addEventListener('transitionend', done);
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );

    const arm = () => {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (!el.closest(SKIP)) observer.observe(el);
      });
    };

    let timer: number | undefined;
    if (isFirstPage.current) {
      isFirstPage.current = false;
      window.addEventListener('scroll', arm, { once: true, passive: true });
    } else {
      timer = window.setTimeout(arm, 60); // after the new page has painted
    }

    return () => {
      window.removeEventListener('scroll', arm);
      if (timer) clearTimeout(timer);
      observer.disconnect();
      document.querySelectorAll<HTMLElement>('.sr').forEach(finish);
    };
  }, [pathname]);
};
