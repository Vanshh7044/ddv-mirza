import { useRef, useEffect, useLayoutEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import MobileBar from './MobileBar';
import { useSmoothScroll, useScrollReset } from '../hooks/useSmoothScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackPageView, getPageTitle } from '../utils/analytics';

// Runs before paint in the browser; harmless no-op during SSR.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-10 h-10 border-[3px] border-safari-orange/20 border-t-safari-orange rounded-full animate-spin" />
  </div>
);

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

  // Reset scroll position + re-init ScrollTrigger on every route change
  // Lenis on desktop only (lazy-loaded after page load)
  useSmoothScroll();
  useScrollReset();
  // Global reveal animations
  useScrollReveal();

  // Page transition. The first load is prerendered HTML, so it is shown as-is
  // (animating it in would only delay the first paint). Later navigations get a
  // short fade-up, applied before paint so the new page never flashes.
  useIsoLayoutEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Native Web Animations: no animation library on the main bundle
    progressBarRef.current?.animate(
      [
        { transform: 'scaleX(0)', opacity: 1 },
        { transform: 'scaleX(1)', opacity: 1, offset: 0.6 },
        { transform: 'scaleX(1)', opacity: 0 },
      ],
      { duration: 600, easing: 'ease-out' }
    );
    pageContainerRef.current?.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 350, easing: 'ease-out' }
    );
  }, [location.pathname]);

  // Track SPA page views for GA4 + Meta Pixel
  useEffect(() => {
    // Helmet writes <title> to the DOM asynchronously, so read the title the page's
    // <SEO> component registered during this commit instead of document.title.
    trackPageView(location.pathname, getPageTitle() || document.title);
  }, [location.pathname]);

  return (
    <div className="bg-[#F7F5F0] min-h-screen relative selection:bg-safari-orange selection:text-white w-full max-w-full overflow-x-clip">
      {/* Top Accent / Route Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 origin-left h-[2.5px] bg-gradient-to-r from-safari-orange via-amber-400 to-safari-orange z-[9999] pointer-events-none opacity-0 shadow-[0_0_12px_#D96B27]"
      />

      <Nav />
      <main ref={pageContainerRef} className="w-full max-w-full">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <div className="cv-auto"><Footer /></div>
      <MobileBar />
    </div>
  );
}
