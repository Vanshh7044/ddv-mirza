import SEO from './components/SEO';
import Hero from './components/Hero';
import TrustStrip from './components/sections/TrustStrip';
import PackageGrid from './components/sections/PackageGrid';
import VisualItinerary from './components/sections/VisualItinerary';
import VIPSection from './components/sections/VIPSection';
import ExperienceGallery from './components/sections/ExperienceGallery';
import WhyDirect from './components/sections/WhyDirect';
import ReviewsSection from './components/sections/ReviewsSection';
import FaqSection, { FAQS } from './components/sections/FaqSection';
import FinalCTA from './components/sections/FinalCTA';
import { travelAgencySchema, getFaqSchema } from './data/schemaData';

export default function App() {
  return (
    <>
      <SEO
        title="Dubai Desert Safari | Direct Operator · Pay on Arrival · AED 79"
        description="Book direct with Dubai's licensed desert safari operator since 2010. Red dune bashing in Lehbab, live BBQ dinner, camel rides, quad biking & VIP Majlis. Zero advance deposit, free hotel pickup."
        canonical="/"
        ogImage="/images/dune-bashing.webp"
        schema={[travelAgencySchema, getFaqSchema(FAQS)]}
      />
      <Hero />
      <TrustStrip />
      <PackageGrid />
      <VisualItinerary />
      <VIPSection />
      <ExperienceGallery />
      <WhyDirect />
      <ReviewsSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
