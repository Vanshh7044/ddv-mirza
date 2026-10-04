import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PackageGrid from '../components/sections/PackageGrid';
import VisualItinerary from '../components/sections/VisualItinerary';
import WhyDirect from '../components/sections/WhyDirect';
import ReviewsSection from '../components/sections/ReviewsSection';
import FaqSection, { FAQS } from '../components/sections/FaqSection';
import FinalCTA from '../components/sections/FinalCTA';
import { getWhatsAppLink, PRICES, aed } from '../data/safariPackages';
import { getBreadcrumbSchema, getFaqSchema } from '../data/schemaData';

export default function EveningSafariPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Evening Safari' }];

  return (
    <>
      <SEO
        title={`Evening Desert Safari Dubai (From ${aed(PRICES.eveningStandard)}) | Red Dune Bashing & BBQ`}
        description="Experience Dubai's #1 evening desert safari in Lehbab high red dunes. 4x4 dune bashing, camel ride, sandboarding, 5-star live BBQ buffet & fire shows. Zero deposit."
        canonical="/evening-desert-safari"
        ogImage="/images/dune-bashing.webp"
        schema={[getBreadcrumbSchema(breadcrumbs, '/evening-desert-safari'), getFaqSchema(FAQS)]}
      />
      <PageHero
        dark={true}
        label="Dubai Evening Desert Safari · Direct Operator"
        title="Dubai's Premier Evening"
        titleEm="Desert Safari"
        subtitle={`Choose from Standard (${aed(PRICES.eveningStandard)}), Premium with Quad Biking (${aed(PRICES.eveningPremium)}), or Private VIP Majlis (${aed(PRICES.eveningVip)}). Free hotel pickup and pay on arrival included in all packages.`}
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Instant Booking', href: getWhatsAppLink('Hi! I would like to book the Evening Safari.') }}
        price={aed(PRICES.eveningStandard)}
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
