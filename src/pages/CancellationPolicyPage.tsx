import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/safariPackages';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function CancellationPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Cancellation Policy' },
  ];

  return (
    <>
      <SEO
        title="Cancellation & Refund Policy | Dubai Dune Tours"
        description="Dubai Dune Tours flexible cancellation and refund policy. Cancel up to 24 hours before your desert safari for a full refund."
        canonical="/cancellation-policy"
        schema={getBreadcrumbSchema(breadcrumbs, '/cancellation-policy')}
      />
      <PageHero
        title="Cancellation Policy"
        subtitle="Flexible booking — cancel anytime up to 24 hours before"
        label="Legal"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-8 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-[#334155] leading-relaxed text-xs sm:text-sm bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-sand shadow-sm space-y-6">
          <p className="text-xs text-[#64748B]">
            <strong>Last updated:</strong> September 2025
          </p>

          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3 text-[#0F172A]">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-[#EA580C] flex items-center justify-center shrink-0">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <p className="font-extrabold text-sm sm:text-base text-[#0F172A] m-0">
                100% Free Cancellation up to 24 Hours Before Pickup
              </p>
              <p className="text-xs text-[#64748B] m-0 mt-0.5">
                Since we require zero advance deposit, you can modify or cancel your booking with zero penalties.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-3">Cancellation & Notice Tiers</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[280px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[#0F172A]">
                    <th className="p-3 font-bold">Notice Given</th>
                    <th className="p-3 font-bold">Policy & Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-medium">More than 24 hours before</td>
                    <td className="p-3 font-bold text-emerald-600">Free / 0% Penalty</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">12–24 hours before</td>
                    <td className="p-3 font-semibold text-amber-600">Free Reschedule</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Less than 12 hours before</td>
                    <td className="p-3 font-semibold text-slate-600">Late notice</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">No-show at pickup point</td>
                    <td className="p-3 font-semibold text-rose-600">Non-refundable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">Weather & Force Majeure Cancellations</h2>
            <p>
              In the rare event that extreme desert weather (severe sandstorm, heavy rain) makes driving unsafe, Dubai Dune Tours will cancel the tour and provide a <strong>full refund or complimentary reschedule</strong> — your choice.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2">How to Cancel or Reschedule</h2>
            <p className="mb-4">
              To modify or cancel your booking, simply message our Dubai operations team on WhatsApp with your name and date:
            </p>
            <a
              href={getWhatsAppLink('Hi! I need to reschedule/cancel my safari booking.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all"
            >
              <MessageCircle size={15} /> Message Dispatch on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
