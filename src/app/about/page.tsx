import type { Metadata } from "next";
import { ShieldCheck, Target, Users, BookOpen, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Yojana Updates Portal",
  description:
    "Learn about Yojana Updates, our mission to simplify government welfare schemes for Indian citizens, and our editorial standards.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          About Yojana Updates
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Empowering Indian citizens with transparent, accessible, and verified information on public schemes and welfare grants.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Our Mission</span>
          </h2>
          <p>
            Every year, the Central and State Governments in India allocate hundreds of thousands of crores toward welfare programs covering farmers, women, students, entrepreneurs, and senior citizens. However, a vast majority of eligible citizens miss out simply due to lack of awareness or convoluted administrative jargon.
          </p>
          <p>
            <strong>Yojana Updates</strong> was established to bridge this information gap. Our dedicated editorial team analyzes official government gazettes, circulars, and departmental portals to distill complex policies into simple, step-by-step guides that anyone can follow.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Editorial Standards & E-E-A-T Commitment</span>
          </h2>
          <p>
            In accordance with Google Search Quality Rater Guidelines and the highest journalistic standards:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Official Verification:</strong> We cross-check every eligibility rule, income threshold, and document requirement against published government gazettes.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Plagiarism or Automated Scraping:</strong> All guides are crafted with original summaries, checklists, and easy-to-understand FAQs.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Direct Outbound Links:</strong> We always direct citizens to authentic government portals (<code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded">.gov.in</code> / <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded">.nic.in</code>) to complete their application.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-slate-100 pt-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <span>Explicit Non-Affiliation Declaration</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Yojana Updates is a privately owned and operated informational resource. We are <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of India or any State Government</strong>. We do not charge fees, provide guaranteed approvals, or accept government subsidy applications directly.
          </p>
        </section>
      </div>
    </div>
  );
}

