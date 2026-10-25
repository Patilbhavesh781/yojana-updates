import type { Metadata } from "next";
import { Lock, Eye, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Google AdSense Compliance",
  description:
    "Privacy policy regarding cookies, Google AdSense, third-party advertising, and data handling on Yojana Updates.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-blue-100 dark:bg-blue-950/70 text-blue-900 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
          <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>User Privacy & Trust</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Last updated: February 2025. Please review how we collect, use, and protect your information.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Do Not Collect</h2>
          <p>
            Yojana Updates does not require registration, login, or creation of personal accounts for reading public scheme articles. We do <strong>not</strong> collect personally identifiable government records, biometric credentials, Aadhaar numbers, PAN numbers, or bank account credentials.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Google AdSense & Third-Party Advertising Cookies</h2>
          <p>
            We use third-party advertising vendors, including Google AdSense, to serve advertisements when you visit our website. These companies may use cookies, web beacons, and similar tracking technologies to serve ads based on your prior visits to our website or other websites on the Internet:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Log Files & Analytics</h2>
          <p>
            Like most standard website servers, we utilize standard log files and privacy-focused web analytics (such as Google Analytics). Information recorded in log files includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, platform type, date/time stamp, and number of clicks. This data is purely used to analyze trends, administer the site, and improve user navigation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Children&apos;s Information (COPPA)</h2>
          <p>
            Protecting the privacy of young children is especially important to us. Yojana Updates does not knowingly collect any personally identifiable information from children under the age of 13.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms and conditions.
          </p>
        </section>
      </div>
    </div>
  );
}

