import Hero from './components/Hero';
import TrustStrip from './components/sections/TrustStrip';
import PackageGrid from './components/sections/PackageGrid';
import VisualItinerary from './components/sections/VisualItinerary';
import VIPSection from './components/sections/VIPSection';
import ExperienceGallery from './components/sections/ExperienceGallery';
import WhyDirect from './components/sections/WhyDirect';
import ReviewsSection from './components/sections/ReviewsSection';
import FaqSection from './components/sections/FaqSection';
import FinalCTA from './components/sections/FinalCTA';

export default function App() {
  return (
    <>
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
