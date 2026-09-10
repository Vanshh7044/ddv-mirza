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

// ─── Page View (SPA route changes) ─────────────────────────────────────────
export function trackPageView(path: string, title: string) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://dubaidunetours.com${path}`;

  // GA4 — send page_view for SPA navigation
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: currentUrl,
  });

  // Meta Pixel — standard PageView
  fbq('track', 'PageView');
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
    value: price || 79,
    currency: 'AED',
    event_label: packageName || 'whatsapp_booking',
  });

  // Meta Pixel — Lead event (used for Meta Ads optimization)
  fbq('track', 'Lead', {
    content_name: packageName || 'General Safari Inquiry',
    content_category: 'Desert Safari',
    value: price || 79,
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
  gtag('event', 'booking_form_submit', {
    event_category: 'conversion',
    event_label: packageName,
    preferred_date: date,
    customer_name_length: customerName.length, // don't send PII, just engagement signal
  });

  gtag('event', 'generate_lead', {
    value: 119,
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
