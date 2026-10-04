import { createElement, type ComponentType } from 'react';
import { createBrowserRouter, matchRoutes } from 'react-router-dom';
import { buildRoutes } from './routes';

type PageModule = { default: ComponentType };
type PreloadablePage = ComponentType & { preload: () => Promise<void> };

const loaders = import.meta.glob<PageModule>('./pages/*.tsx');
const pages = new Map<string, PreloadablePage>();

/**
 * Like React.lazy, but once the chunk is loaded it renders synchronously.
 * That lets main.tsx preload the current page before hydrating, so the
 * prerendered HTML hydrates without ever suspending (no mismatch, no spinner).
 */
function lazyPage(name: string): PreloadablePage {
  const cached = pages.get(name);
  if (cached) return cached;

  const loader = loaders[`./pages/${name}.tsx`];
  let Loaded: ComponentType | null = null;
  let pending: Promise<void> | null = null;
  const preload = () =>
    (pending ??= loader().then((m) => {
      Loaded = m.default;
    }));

  const Page = (() => {
    if (Loaded) return createElement(Loaded);
    throw preload();
  }) as unknown as PreloadablePage;
  Page.preload = preload;
  pages.set(name, Page);
  return Page;
}

const routes = buildRoutes(lazyPage);

export const router = createBrowserRouter(routes);

/** Load the page chunk(s) for a URL. Used before hydration and on link hover. */
export const preloadPath = (pathname: string) => {
  const matches = matchRoutes(routes, pathname) ?? [];
  return Promise.all(
    matches.map((m) => {
      const type = (m.route.element as { type?: Partial<PreloadablePage> } | undefined)?.type;
      return type?.preload?.();
    })
  );
};

/** Warm every page chunk once the browser is idle so navigation is instant. */
export const preloadAllPages = () => {
  pages.forEach((p) => p.preload().catch(() => {}));
};
