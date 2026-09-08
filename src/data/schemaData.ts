import { SafariPackage, WHATSAPP_NUMBER } from './safariPackages';

export const BASE_URL = 'https://dubaidunetours.com';

export const travelAgencySchema = {
  '@context': 'https://schema.org',
  '@type': ['TravelAgency', 'LocalBusiness'],
  '@id': `${BASE_URL}/#organization`,
  name: 'Dubai Dune Tours',
  alternateName: 'Dubai Dune Tours Direct Operator',
  url: BASE_URL,
  logo: `${BASE_URL}/images/dune-bashing.webp`,
  image: `${BASE_URL}/images/dune-bashing.webp`,
  description: "Dubai's licensed direct-operator desert safari company since 2010. Offering red dune bashing, VIP Majlis experiences, quad biking, and private glamping camps with zero deposit.",
  telephone: '+971556015834',
  email: 'info@dubaidunetours.com',
  priceRange: 'AED 35 - AED 2299',
  currenciesAccepted: 'AED, USD, EUR, GBP',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '23:30',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lehbab Red Dunes Base, Dubai-Hatta Road',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.9654,
    longitude: 55.5928,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '401',
    reviewCount: '401',
  },
  sameAs: [
    `https://wa.me/${WHATSAPP_NUMBER}`,
  ],
};

export const getTouristTripSchema = (pkg: SafariPackage, canonicalUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristTrip', 'Product'],
    '@id': canonicalUrl,
    name: pkg.title,
    description: pkg.tagline,
    touristType: 'Adventure Tourism',
    image: `${BASE_URL}${pkg.image}`,
    offers: {
      '@type': 'Offer',
      price: pkg.price,
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
      validFrom: '2024-01-01',
      priceValidUntil: '2027-12-31',
      seller: {
        '@type': 'TravelAgency',
        name: 'Dubai Dune Tours',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: pkg.rating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: pkg.reviewsCount.toString(),
      reviewCount: pkg.reviewsCount.toString(),
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Dubai Dune Tours',
      url: BASE_URL,
    },
    itinerary: {
      '@type': 'ItemList',
      itemListElement: pkg.includes.map((inc, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: inc,
      })),
    },
  };
};

export const getFaqSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

export const getBreadcrumbSchema = (crumbs: { label: string; to?: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.to ? `${BASE_URL}${crumb.to}` : undefined,
    })),
  };
};
