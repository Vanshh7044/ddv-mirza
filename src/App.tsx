import SEO from './components/SEO';
import { FROM_PRICE, aed } from './data/safariPackages';
import Hero from './components/Hero';
import TrustStrip from './components/sections/TrustStrip';
import PackageGrid from './components/sections/PackageGrid';
import VisualItinerary from './components/sections/VisualItinerary';
import PrivateToursSection from './components/sections/PrivateToursSection';
import ExperienceGallery from './components/sections/ExperienceGallery';
import WhyDirect from './components/sections/WhyDirect';
import ReviewsSection from './components/sections/ReviewsSection';
import FaqSection, { FAQS } from './components/sections/FaqSection';
import FinalCTA from './components/sections/FinalCTA';
import { travelAgencySchema, getFaqSchema, getBreadcrumbSchema } from './data/schemaData';

export default function App() {
  return (
    <>
      <SEO
        title={`Dubai Desert Safari | Direct Operator · Pay on Arrival · ${aed(FROM_PRICE)}`}
        description="Book direct with Dubai's licensed desert safari operator since 2010. Red dune bashing in Lehbab, live BBQ dinner, camel rides, quad biking & VIP Majlis. Zero advance deposit, free hotel pickup."
        canonical="/"
        ogImage="/images/real/land-cruiser-sunset.webp"
        schema={[
          travelAgencySchema, 
          getFaqSchema(FAQS),
          getBreadcrumbSchema([{ label: 'Home', to: '/' }], '/')
        ]}
      />
      <Hero />
      <TrustStrip />
      <PackageGrid />
      <VisualItinerary />
      <PrivateToursSection />
      <ExperienceGallery />
      <WhyDirect />
      <ReviewsSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
