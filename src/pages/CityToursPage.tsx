import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PackageGrid from '../components/sections/PackageGrid';
import WhyDirect from '../components/sections/WhyDirect';
import FinalCTA from '../components/sections/FinalCTA';
import { CITY_TOURS, PRICES, aed, getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema, BASE_URL } from '../data/schemaData';

export default function CityToursPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'City Tours & Cruises' }];

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dubai & Abu Dhabi City Tours',
    itemListElement: CITY_TOURS.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}${t.detailPath}`,
      name: t.title,
    })),
  };

  return (
    <>
      <SEO
        title={`Dubai City Tour, Abu Dhabi City Tour & Dhow Cruise (From ${aed(PRICES.dubaiCityTour)})`}
        description={`Guided Dubai city tour (${aed(PRICES.dubaiCityTour)}), Abu Dhabi city tour with Sheikh Zayed Grand Mosque (${aed(PRICES.abuDhabiCityTour)}), Marina dhow cruise dinner (${aed(PRICES.dhowCruise)}) and city + safari combos. Free hotel pickup, pay on arrival.`}
        canonical="/city-tours"
        schema={[getBreadcrumbSchema(breadcrumbs, '/city-tours'), listSchema]}
      />
      <PageHero
        label="City Tours · Cruises · Combos"
        title="Dubai & Abu Dhabi"
        titleEm="City Tours"
        subtitle="Guided sightseeing with the same direct-operator promise as our safaris: free hotel pickup, licensed guides, no deposit — pay on the day."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: 'Ask About City Tours', href: getWhatsAppLink('Hi! I would like information about your Dubai / Abu Dhabi city tours.') }}
        price={aed(PRICES.dubaiCityTour)}
        priceNote="per person"
      />
      <PackageGrid initialTab="city" />
      <WhyDirect />
      <FinalCTA />
    </>
  );
}
