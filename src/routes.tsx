import type { ComponentType } from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import { SAFARI_PACKAGES, EVENING_TIERS } from './data/safariPackages';
import { GUIDES } from './data/guides';

/**
 * Single route table shared by the browser router (lazy pages), the SSR entry
 * (eager pages) and the prerender script. Adding a page here is all it takes.
 */
export const PAGE_ROUTES: { path: string; page: string }[] = [
  { path: 'desert-safari', page: 'AllSafarisPage' },
  { path: 'evening-desert-safari', page: 'EveningSafariPage' },
  { path: 'evening-safari/:tier', page: 'PackageDetailPage' },
  { path: 'morning-safari', page: 'ShortTourPage' },
  { path: 'self-drive', page: 'SelfDrivePage' },
  { path: 'vip-traditional-arabic', page: 'VIPTraditionalPage' },
  { path: 'private-desert-setup', page: 'PrivateCampPage' },
  { path: 'city-tours', page: 'CityToursPage' },
  { path: 'tours/:slug', page: 'TourDetailPage' },
  { path: 'attraction-tickets', page: 'TicketsPage' },
  { path: 'transport', page: 'TransportPage' },
  { path: 'guides', page: 'GuidesPage' },
  { path: 'guides/:slug', page: 'GuideDetailPage' },
  { path: 'about', page: 'AboutPage' },
  { path: 'contact', page: 'ContactPage' },
  { path: 'privacy-policy', page: 'PrivacyPolicyPage' },
  { path: 'terms', page: 'TermsPage' },
  { path: 'cancellation-policy', page: 'CancellationPolicyPage' },
  { path: '*', page: 'NotFoundPage' },
];

export type PageResolver = (page: string) => ComponentType;

export const buildRoutes = (resolve: PageResolver): RouteObject[] => [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      ...PAGE_ROUTES.map(({ path, page }) => {
        const Page = resolve(page);
        return { path, element: <Page /> };
      }),
    ],
  },
];

/** Concrete URLs to prerender to static HTML. '/404' renders the catch-all page into 404.html. */
export const getPrerenderPaths = () => [
  '/',
  ...PAGE_ROUTES.filter((r) => !r.path.includes(':') && r.path !== '*').map((r) => `/${r.path}`),
  ...EVENING_TIERS.map((p) => `/evening-safari/${p.slug}`),
  ...SAFARI_PACKAGES.filter((p) => p.detailPath.startsWith('/tours/')).map((p) => p.detailPath),
  ...GUIDES.map((g) => `/guides/${g.slug}`),
  '/404',
];
