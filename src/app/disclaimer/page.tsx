import type { Metadata } from "next";
import { ShieldAlert, AlertTriangle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Government Non-Affiliation Disclaimer | Yojana Updates",
  description:
    "Important legal disclosure regarding non-affiliation with any central or state government department in India.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 text-xs font-bold px-3 py-1 rounded-full">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Legal & Transparency Disclosure</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Disclaimer & Non-Government Affiliation Notice
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Please read this disclosure carefully before using our informational portal.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-950 dark:text-amber-200 font-medium">
          <strong>Key Statement:</strong> Yojana Updates (yojanaupdates.com) is purely an independent educational and informational website. It does NOT belong to, represent, or claim affiliation with the Government of India, any State Government, or any official department or agency.
        </div>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Nature of Our Services</h2>
          <p>
            The content provided on this portal is published in good faith for general educational and awareness purposes only. We do not provide financial advice, legal counsel, or guaranteed approval for any welfare program. All decisions regarding approval, rejection, or disbursement of funds rest solely with the relevant competent government authorities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. External Links to Official Portals</h2>
          <p>
            Our website contains hyperlinks to external websites operated by government bodies (which end in <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">.gov.in</code> or <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">.nic.in</code>). While we strive to link only to safe and authentic government portals, we have no control over the content, security policies, or downtime of these third-party platforms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. No Fees or Private Data Collection</h2>
          <p>
            Yojana Updates never charges citizens money to view guides, check status methods, or access links. We will never ask for your confidential banking credentials, passwords, CVV numbers, or OTPs. Beware of impostor websites or unsolicited phone calls claiming to approve government benefits in exchange for money.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Limitation of Liability</h2>
          <p>
            Under no circumstances shall the owners, authors, or operators of Yojana Updates be held liable for any loss, damage, delay, or inconvenience arising from the use of information published on this website. Users are encouraged to verify guidelines directly with official departmental notifications.
          </p>
        </section>
      </div>
    </div>
  );
}

