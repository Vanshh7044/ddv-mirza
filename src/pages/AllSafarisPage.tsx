import PageHero from '../components/PageHero';
import PackageGrid from '../components/sections/PackageGrid';
import VIPSection from '../components/sections/VIPSection';
import WhyDirect from '../components/sections/WhyDirect';
import FinalCTA from '../components/sections/FinalCTA';
import { getWhatsAppLink } from '../data/safariPackages';

export default function AllSafarisPage() {
  return (
    <>
      <PageHero
        dark={true}
        label="Dubai Desert Safaris · Direct Operator"
        title="Compare All Desert"
        titleEm="Safari Packages"
        subtitle="From budget-friendly self-drives to luxury VIP Majlis experiences. Pick your package, book directly on WhatsApp, and pay on the day of the tour."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'All Safaris' }]}
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
