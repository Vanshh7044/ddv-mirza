import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '../data/schemaData';
import { setPageTitle } from '../utils/analytics';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: Record<string, any> | Record<string, any>[];
  keywords?: string;
  noindex?: boolean;
}

/** Google shows ~60 characters of a title: drop trailing " | …" parts until it fits. */
const fitTitle = (t: string) => {
  const parts = t.split(' | ');
  while (parts.length > 1 && parts.join(' | ').length > 62) parts.pop();
  let t2 = parts.join(' | ');
  // Still too long: drop a trailing "(…)", then keep the part before a ": " or up to a "?"
  if (t2.length > 62) t2 = t2.replace(/\s*\([^)]*\)$/, '');
  if (t2.length > 62) t2 = t2.split(': ')[0].replace(/\?.*$/, '?');
  return t2;
};

/** Google shows ~155 characters of a description: cut at a word boundary. */
const fitDescription = (d: string) => {
  if (d.length <= 158) return d;
  const cut = d.slice(0, 155);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:·&\s]+$/, '') + '…';
};

export default function SEO({
  title: rawTitle,
  description: rawDescription,
  canonical = '/',
  ogImage = '/images/real/land-cruiser-sunset.webp',
  ogType = 'website',
  schema,
  keywords,
  noindex = false,
}: SEOProps) {
  const title = fitTitle(rawTitle);
  const description = fitDescription(rawDescription);
  const fullCanonical = canonical.startsWith('http') 
    ? canonical 
    : `${BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
  
  const fullImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  // Register the title for analytics: Helmet only writes <title> to the DOM later, asynchronously.
  setPageTitle(title);

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Dubai Dune Tours" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
