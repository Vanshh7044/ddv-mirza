import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';

const AllSafarisPage = lazy(() => import('./pages/AllSafarisPage'));
const EveningSafariPage = lazy(() => import('./pages/EveningSafariPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));
const ShortTourPage = lazy(() => import('./pages/ShortTourPage'));
const SelfDrivePage = lazy(() => import('./pages/SelfDrivePage'));
const VIPTraditionalPage = lazy(() => import('./pages/VIPTraditionalPage'));
const PrivateCampPage = lazy(() => import('./pages/PrivateCampPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CancellationPolicyPage = lazy(() => import('./pages/CancellationPolicyPage'));

// Fallback loader for smooth route transition
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-10 h-10 border-3 border-safari-orange/20 border-t-safari-orange rounded-full animate-spin" />
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'desert-safari', element: withSuspense(AllSafarisPage) },
      { path: 'evening-desert-safari', element: withSuspense(EveningSafariPage) },
      { path: 'evening-safari/:tier', element: withSuspense(PackageDetailPage) },
      { path: 'morning-safari', element: withSuspense(ShortTourPage) },
      { path: 'self-drive', element: withSuspense(SelfDrivePage) },
      { path: 'vip-traditional-arabic', element: withSuspense(VIPTraditionalPage) },
      { path: 'private-desert-setup', element: withSuspense(PrivateCampPage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: 'privacy-policy', element: withSuspense(PrivacyPolicyPage) },
      { path: 'terms', element: withSuspense(TermsPage) },
      { path: 'cancellation-policy', element: withSuspense(CancellationPolicyPage) },
    ],
  },
]);
