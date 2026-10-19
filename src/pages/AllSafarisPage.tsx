import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PackageGrid from '../components/sections/PackageGrid';
import AddOnsSection from '../components/sections/AddOnsSection';
import VIPSection from '../components/sections/VIPSection';
import WhyDirect from '../components/sections/WhyDirect';
import FinalCTA from '../components/sections/FinalCTA';
import { getWhatsAppLink, PRICES, FROM_PRICE, aed } from '../data/safariPackages';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function AllSafarisPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'All Safaris' }];

  return (
    <>
      <SEO
        title={`Compare All Dubai Desert Safaris & City Tours (${aed(PRICES.selfDrive)}–${aed(PRICES.privateCamp).slice(4)})`}
        description={`Compare all Dubai desert safari tiers: Evening Standard (${aed(PRICES.eveningStandard)}), Premium (${aed(PRICES.eveningPremium)}), VIP (${aed(PRICES.eveningVip)}), Safari + Quad (from ${aed(PRICES.standardQuad)}), private short tours (${aed(PRICES.sunrise)}/car), Self-Drive (${aed(PRICES.selfDrive)}) plus Dubai & Abu Dhabi city tours. Direct operator rates.`}
        canonical="/desert-safari"
        ogImage="/images/real/land-cruiser-sunset.webp"
        schema={getBreadcrumbSchema(breadcrumbs, '/desert-safari')}
      />
      <PageHero
        dark={true}
        label="Dubai Desert Safaris · Direct Operator"
        title="Compare All Desert"
        titleEm="Safari Packages"
        subtitle="From budget-friendly self-drives to luxury VIP Majlis experiences. Pick your package, book directly on WhatsApp, and pay on the day of the tour."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink('Hi! I would like help picking the best safari package.') }}
        price={aed(FROM_PRICE)}
        priceNote="per person"
      />
      <PackageGrid initialTab="all" />
      <AddOnsSection />
      <VIPSection />
      <WhyDirect />
      <FinalCTA />
    </>
  );
}
