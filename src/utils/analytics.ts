import { FROM_PRICE, PRICES } from '../data/safariPackages';
/**
 * Dubai Dune Tours — Analytics & Conversion Tracking
 * 
 * Centralized event tracking for GA4 (gtag) and Meta Pixel (fbq).
 * Swap placeholder IDs once you create your analytics accounts:
 *   - GA4 Measurement ID:  G-XXXXXXXXXX  (in index.html)
 *   - Meta Pixel ID:       XXXXXXXXXX    (in index.html)
 */

// ─── Type declarations for global analytics objects ─────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────
const gtag = (...args: unknown[]) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag(...args);
    } else if (window.dataLayer) {
      // Fallback: push directly to dataLayer arguments queue
      (window.dataLayer as unknown[][]).push(args);
    }
  }
};

const fbq = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

// ─── Current page title (set by <SEO> before page_view fires) ───────────────
let pageTitle = '';
export const setPageTitle = (title: string) => {
  pageTitle = title;
};
export const getPageTitle = () => pageTitle;

// ─── Page View (SPA route changes) ─────────────────────────────────────────
export function trackPageView(path: string, title: string) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://www.dubaidunetours.com${path}`;

  // GA4 — send page_view for SPA navigation
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: currentUrl,
  });

  // Meta Pixel — standard PageView
  fbq('track', 'PageView');
}

// ─── Lead conversion for Google Ads ─────────────────────────────────────────
// One clean event per WhatsApp chat / phone call opened from anywhere on the site.
// Import "whatsapp_lead" from GA4 into Google Ads as the primary conversion.
export function trackLead(via: 'whatsapp_link' | 'booking_form' | 'phone') {
  gtag('event', 'whatsapp_lead', {
    lead_via: via,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    value: FROM_PRICE,
    currency: 'AED',
  });
}

/** One-tap booking sent with date and guests filled in: the strongest lead signal, valued at the booking total. */
export function trackQuickBook(source: string, packageName: string, total: number) {
  gtag('event', 'quick_book', {
    source_component: source,
    event_label: packageName,
    value: total,
    currency: 'AED',
  });
  fbq('track', 'Lead', { content_name: packageName, value: total, currency: 'AED', source });
}

// Visitors who arrived from a Google ad get "(Ref: DDT-G)" added to their WhatsApp message,
// so whoever answers the chat can tell Google leads apart from Meta ones (DDT-AD).
const AD_KEY = 'ddt_google_ad';
const fromGoogleAd = () => {
  try {
    return sessionStorage.getItem(AD_KEY) === '1';
  } catch {
    return false;
  }
};

/** Adds the Google ad reference to a wa.me link's message when the visitor came from an ad. */
export function tagAdRef(url: string) {
  if (!fromGoogleAd()) return url;
  try {
    const u = new URL(url);
    const text = u.searchParams.get('text') || '';
    if (text.includes('DDT-G')) return url;
    u.searchParams.set('text', `${text}\n\n(Ref: DDT-G)`.trim());
    return u.toString();
  } catch {
    return url;
  }
}

/** Catches every WhatsApp / phone link click on the site, tracked or not. Call once. */
export function installLeadTracking() {
  try {
    const q = new URLSearchParams(window.location.search);
    if (q.has('gclid') || q.has('gbraid') || q.has('wbraid') || q.get('utm_source') === 'google') {
      sessionStorage.setItem(AD_KEY, '1');
    }
  } catch {
    /* storage blocked */
  }

  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
      a.href = tagAdRef(href);
      trackLead('whatsapp_link');
    } else if (href.startsWith('tel:')) {
      trackLead('phone');
    }
  };
  document.addEventListener('click', onClick, true);
  return () => document.removeEventListener('click', onClick, true);
}

// ─── WhatsApp Click (Primary Conversion) ────────────────────────────────────
export function trackWhatsAppClick(source: string, packageName?: string, price?: number) {
  // GA4 — custom event
  gtag('event', 'whatsapp_click', {
    event_category: 'conversion',
    event_label: packageName || 'general_inquiry',
    source_component: source,
    value: price || 0,
    currency: 'AED',
  });

  // GA4 — also fire as generate_lead (standard event for Google Ads conversion tracking)
  gtag('event', 'generate_lead', {
    value: price || FROM_PRICE,
    currency: 'AED',
    event_label: packageName || 'whatsapp_booking',
  });

  // Meta Pixel — Lead event (used for Meta Ads optimization)
  fbq('track', 'Lead', {
    content_name: packageName || 'General Safari Inquiry',
    content_category: 'Desert Safari',
    value: price || FROM_PRICE,
    currency: 'AED',
    source: source,
  });

  // Meta Pixel — also fire Contact (standard event)
  fbq('track', 'Contact', {
    content_name: 'WhatsApp Chat',
  });
}

// ─── Phone Call Click ───────────────────────────────────────────────────────
export function trackPhoneClick(source: string) {
  gtag('event', 'phone_click', {
    event_category: 'conversion',
    event_label: 'direct_call',
    source_component: source,
  });

  gtag('event', 'generate_lead', {
    value: 100,
    currency: 'AED',
    event_label: 'phone_call',
  });

  fbq('track', 'Contact', {
    content_name: 'Phone Call',
    source: source,
  });
}

// ─── Booking Form Submit (Hero form) ────────────────────────────────────────
export function trackBookingFormSubmit(packageName: string, date: string, customerName: string) {
  trackLead('booking_form'); // the form opens WhatsApp

  gtag('event', 'booking_form_submit', {
    event_category: 'conversion',
    event_label: packageName,
    preferred_date: date,
    customer_name_length: customerName.length, // don't send PII, just engagement signal
  });

  gtag('event', 'generate_lead', {
    value: PRICES.eveningPremium,
    currency: 'AED',
    event_label: 'booking_form',
  });

  fbq('track', 'InitiateCheckout', {
    content_name: packageName,
    content_category: 'Desert Safari Booking',
    num_items: 1,
  });
}

// ─── Package View (user views a specific package detail page) ───────────────
export function trackPackageView(packageName: string, price: number, category: string) {
  gtag('event', 'view_item', {
    currency: 'AED',
    value: price,
    items: [{
      item_name: packageName,
      item_category: category,
      price: price,
    }],
  });

  fbq('track', 'ViewContent', {
    content_name: packageName,
    content_category: category,
    value: price,
    currency: 'AED',
  });
}

// ─── Email Click ────────────────────────────────────────────────────────────
export function trackEmailClick(source: string) {
  gtag('event', 'email_click', {
    event_category: 'engagement',
    event_label: 'email_contact',
    source_component: source,
  });
}

// ─── Scroll Depth (optional — call at 25%, 50%, 75%, 100%) ─────────────────
export function trackScrollDepth(percentage: number, pagePath: string) {
  gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: pagePath,
    value: percentage,
  });
}

// ─── Breadcrumb Click Tracking ──────────────────────────────────────────────
export function trackBreadcrumbClick(label: string, destination: string) {
  gtag('event', 'breadcrumb_click', {
    event_category: 'navigation',
    event_label: label,
    breadcrumb_label: label,
    breadcrumb_destination: destination,
  });
}

// ─── SEO Keyword Cloud Click Tracking ───────────────────────────────────────
export function trackKeywordClick(keyword: string, destination: string) {
  gtag('event', 'seo_keyword_click', {
    event_category: 'seo_discovery',
    keyword_text: keyword,
    keyword_destination: destination,
  });
}

