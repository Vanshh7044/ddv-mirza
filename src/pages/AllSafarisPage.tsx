import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PackageGrid from '../components/sections/PackageGrid';
import VIPSection from '../components/sections/VIPSection';
import WhyDirect from '../components/sections/WhyDirect';
import FinalCTA from '../components/sections/FinalCTA';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function AllSafarisPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'All Safaris' }];

  return (
    <>
      <SEO
        title="Compare All Dubai Desert Safari Packages & Rates (AED 35–2,299)"
        description="Compare all Dubai desert safari tiers: Evening Standard (AED 79), Premium Quad (AED 119), VIP Majlis (AED 299), Sunrise (AED 349), and Self-Drive (AED 35). Direct operator rates."
        canonical="/desert-safari"
        ogImage="/images/dune-bashing.webp"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <PageHero
        dark={true}
        label="Dubai Desert Safaris · Direct Operator"
        title="Compare All Desert"
        titleEm="Safari Packages"
        subtitle="From budget-friendly self-drives to luxury VIP Majlis experiences. Pick your package, book directly on WhatsApp, and pay on the day of the tour."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'WhatsApp Inquiry', href: getWhatsAppLink('Hi! I would like help picking the best safari package.') }}
        price="AED 79"
        priceNote="per person"
      />
      <PackageGrid />
      <VIPSection />
      <WhyDirect />
      <FinalCTA />
    </>
  );
}
