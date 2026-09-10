import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Privacy Policy' },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Dubai Dune Tours"
        description="Learn how Dubai Dune Tours collects, uses, and protects your personal data when you book a desert safari experience in Dubai."
        canonical="/privacy-policy"
        schema={getBreadcrumbSchema(breadcrumbs, '/privacy-policy')}
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle and protect your personal information"
        label="Legal"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-[#334155] leading-relaxed text-xs sm:text-sm bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-sand shadow-sm space-y-6">
          <p className="text-xs text-[#64748B]">
            <strong>Last updated:</strong> September 2025
          </p>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">1. Information We Collect</h2>
            <p className="mb-2">When you book a safari or contact us via WhatsApp, email, or our website, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name and contact details (phone number, email address)</li>
              <li>Number of guests and preferred safari package</li>
              <li>Hotel name or pick-up location in Dubai</li>
              <li>Payment confirmation reference (we do not store card details)</li>
              <li>Browser and device information collected automatically via cookies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">Your data is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirm and manage your safari booking</li>
              <li>Send pick-up details and pre-safari instructions</li>
              <li>Respond to enquiries and after-safari support</li>
              <li>Improve our website experience (analytics, aggregated only)</li>
            </ul>
            <p className="mt-2 font-medium">We <strong>never</strong> sell, rent, or share your personal information with third-party marketing companies.</p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">3. WhatsApp Communication</h2>
            <p>
              By contacting us on WhatsApp, you consent to receiving booking confirmations, itinerary updates, and support messages via WhatsApp. You can opt out at any time by messaging "STOP."
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">4. Cookies & Analytics</h2>
            <p>
              Our website uses essential cookies for navigation and anonymized performance analytics. You can disable cookies in your browser settings if desired.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">5. Data Retention & Rights</h2>
            <p className="mb-2">
              Booking records are retained for operational and tax compliance. Under applicable UAE data privacy laws, you have the right to access, rectify, or request deletion of your personal data at any time.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-1.5">6. Contact Us</h2>
            <p>
              Dubai Dune Tours Operations &nbsp;|&nbsp; Lehbab, Dubai, UAE<br />
              WhatsApp: <a href="https://wa.me/971556015834" className="text-[#EA580C] font-bold">+971 55 601 5834</a><br />
              Email: <a href="mailto:info@dubaidunetours.com" className="text-[#EA580C] font-bold">info@dubaidunetours.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
