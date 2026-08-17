import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import AllSafarisPage from './pages/AllSafarisPage';
import EveningSafariPage from './pages/EveningSafariPage';
import PackageDetailPage from './pages/PackageDetailPage';
import ShortTourPage from './pages/ShortTourPage';
import SelfDrivePage from './pages/SelfDrivePage';
import VIPTraditionalPage from './pages/VIPTraditionalPage';
import PrivateCampPage from './pages/PrivateCampPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'desert-safari', element: <AllSafarisPage /> },
      { path: 'evening-desert-safari', element: <EveningSafariPage /> },
      { path: 'evening-safari/:tier', element: <PackageDetailPage /> },
      { path: 'morning-safari', element: <ShortTourPage /> },
      { path: 'self-drive', element: <SelfDrivePage /> },
      { path: 'vip-traditional-arabic', element: <VIPTraditionalPage /> },
      { path: 'private-desert-setup', element: <PrivateCampPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);
