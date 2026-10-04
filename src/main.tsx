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

const warmRemainingPages = () => {
  const idle = (window as any).requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1500));
  idle(preloadAllPages);
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
