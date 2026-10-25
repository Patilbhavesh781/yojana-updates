import type { Metadata } from "next";
import EligibilityChecker from "@/components/EligibilityChecker";
import AdBanner from "@/components/AdBanner";
import { Calculator, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Government Scheme Eligibility Checker Tool 2025: Free Online Calculator",
  description:
    "Check which central or state government schemes you qualify for. Instant eligibility calculator based on income, occupation, and state.",
};

export default function EligibilityToolPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Citizen Tool</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Government Welfare Eligibility Calculator
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Millions of eligible citizens miss out on government subsidies simply because they don't know they qualify. Use our quick tool to find your entitlements in seconds.
        </p>
      </div>

      <AdBanner slotId="tool-top-banner" format="horizontal" />

      <EligibilityChecker />

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">How Does This Tool Work?</h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Our tool compares your demographic inputs (such as category, residential state, and household income bracket) against official government guidelines formulated under various ministries (Ministry of Agriculture, Ministry of Women and Child Development, Ministry of Rural Development, Ministry of MSME, and State Welfare Boards).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">100% Free & Anonymous</span>
            We do not store your private financial figures or ask for Aadhaar / phone numbers here.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Direct Official Redirection</span>
            Once you see your matching schemes, you get direct step-by-step guidance on official portals.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Regularly Updated</span>
            Database refreshed weekly according to Gazette notices and state government notifications.
          </div>
        </div>
      </div>

      <AdBanner slotId="tool-bottom-banner" format="auto" />
    </div>
  );
}

