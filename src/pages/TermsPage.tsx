import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Dubai Dune Tours"
        description="Terms and conditions for booking a desert safari with Dubai Dune Tours in Dubai. Read our policies on reservations, inclusions, and liabilities."
        canonical="/terms"
      />
      <PageHero
        title="Terms & Conditions"
        subtitle="Please review our terms prior to reservation"
        label="Legal"
      />
      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-[#334155] leading-relaxed text-xs sm:text-sm bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-sand shadow-sm space-y-6">
          <p className="text-xs text-[#64748B]">
            <strong>Last updated:</strong> September 2025
          </p>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">1. Booking & Confirmation</h2>
            <p>
              All bookings are confirmed upon verification with our operations team via WhatsApp or email. A confirmation message will be sent with your driver contact, pick-up time, and itinerary.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">2. Inclusions & Exclusions</h2>
            <p className="mb-2">Unless stated otherwise in your package, the following apply:</p>
            <p className="font-bold text-[#0F172A] mb-1">Standard Inclusions:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Door-to-door hotel pickup and drop-off in air-conditioned 4×4 Land Cruisers</li>
              <li>All activities specified in your package description</li>
              <li>Refreshments, BBQ dinner buffet (Evening Safari), and live entertainment shows</li>
              <li>Sandboarding and camel riding photo stops</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">3. Health & Safety</h2>
            <p>
              Guests participate in all safari activities under safety protocols. Guests with severe medical conditions (heart conditions, spine injuries, late-stage pregnancy) are advised to inform dispatch in advance so smooth transport can be arranged. All our safari drivers hold valid DET desert driving permits.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">4. Governing Law</h2>
            <p>
              These terms are governed by the laws and regulations of the Department of Economy and Tourism (DET) in the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
