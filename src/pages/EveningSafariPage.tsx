import PageHero from '../components/PageHero';
import PackageGrid from '../components/sections/PackageGrid';
import VisualItinerary from '../components/sections/VisualItinerary';
import WhyDirect from '../components/sections/WhyDirect';
import ReviewsSection from '../components/sections/ReviewsSection';
import FaqSection from '../components/sections/FaqSection';
import FinalCTA from '../components/sections/FinalCTA';
import { getWhatsAppLink } from '../data/safariPackages';

export default function EveningSafariPage() {
  return (
    <>
      <PageHero
        dark={true}
        label="Dubai Evening Desert Safari · Direct Operator"
        title="Dubai's Premier Evening"
        titleEm="Desert Safari"
        subtitle="Choose from Standard (AED 79), Premium with Quad Biking (AED 119), or Private VIP Majlis (AED 299). Free hotel pickup and pay on arrival included in all packages."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Evening Safari' }]}
        primaryCta={{ label: 'WhatsApp Instant Booking', href: getWhatsAppLink('Hi! I would like to book the Evening Safari.') }}
        price="AED 79"
        priceNote="per person"
      />
      <PackageGrid />
      <VisualItinerary />
      <WhyDirect />
      <ReviewsSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
