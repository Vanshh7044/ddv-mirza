import { PAGE_ROUTES } from './routes';
import { SAFARI_PACKAGES, EVENING_TIERS } from './data/safariPackages';
import { GUIDES } from './data/guides';

// Server-only: kept out of routes.tsx so the browser bundle doesn't ship every guide's text.
/** Concrete URLs to prerender to static HTML. '/404' renders the catch-all page into 404.html. */
export const getPrerenderPaths = () => [
  '/',
  ...PAGE_ROUTES.filter((r) => !r.path.includes(':') && r.path !== '*').map((r) => `/${r.path}`),
  ...EVENING_TIERS.map((p) => `/evening-safari/${p.slug}`),
  ...SAFARI_PACKAGES.filter((p) => p.detailPath.startsWith('/tours/')).map((p) => p.detailPath),
  ...GUIDES.map((g) => `/guides/${g.slug}`),
  '/404',
];
