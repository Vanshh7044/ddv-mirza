import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * useScrollReset — call once inside Layout.
 * On route change: jump to the top (or to #hash) before the new page paints.
 */
export const useScrollReset = () => {
  const location = useLocation();

  useIsoLayoutEffect(() => {
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname, location.hash]);
};
