import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router, preloadPath, preloadAllPages } from './router.tsx'
import './index.css'

const rootElement = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

// Prefetch the other pages' code once the page has fully loaded and gone idle,
// so it never competes with the first render on slow mobile connections.
const warmRemainingPages = () => {
  const idle = (window as any).requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1500));
  const go = () => setTimeout(() => idle(preloadAllPages), 3000);
  if (document.readyState === 'complete') go();
  else window.addEventListener('load', go, { once: true });
};

// Prerendered page: load its chunk first so hydration matches the static HTML exactly.
if (rootElement.hasChildNodes()) {
  preloadPath(window.location.pathname)
    .catch(() => {})
    .then(() => {
      ReactDOM.hydrateRoot(rootElement, app);
      warmRemainingPages();
    });
} else {
  ReactDOM.createRoot(rootElement).render(app);
  warmRemainingPages();
}
