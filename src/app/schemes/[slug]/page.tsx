import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getSchemeBySlug, getAllSchemes } from "@/lib/schemeService";
import AdBanner from "@/components/AdBanner";
import SocialShare from "@/components/SocialShare";
import RealtimeViewCounter from "@/components/RealtimeViewCounter";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
  ExternalLink,
  PhoneCall,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  CheckSquare,
  ListOrdered,
  Clock,
  Layers,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const scheme = await getSchemeBySlug(slug);

  if (!scheme) {
    return {
      title: "Scheme Not Found | Yojana Updates",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com";
  const pageUrl = `${siteUrl}/schemes/${scheme.slug}`;

  return {
    title: `${scheme.title} - Eligibility, Documents & Apply Online`,
    description: scheme.summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: scheme.title,
      description: scheme.summary,
      url: pageUrl,
      type: "article",
      modifiedTime: scheme.updatedAt,
    },
  };
}

export async function generateStaticParams() {
  const schemes = await getAllSchemes();
  return schemes.map((s) => ({ slug: s.slug }));
}

export default async function SchemeDetailPage({ params }: Props) {
  const { slug } = await params;
  const scheme = await getSchemeBySlug(slug);

  if (!scheme) {
    notFound();
  }

  const allSchemes = await getAllSchemes();
  const relatedSchemes = allSchemes
    .filter((s) => s.slug !== scheme.slug && (s.category === scheme.category || s.type === scheme.type))
    .slice(0, 4);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com";
  const pageUrl = `${siteUrl}/schemes/${scheme.slug}`;

  // JSON-LD Structured Data for Google Rich Snippets (FAQPage + GovernmentService)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: scheme.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: scheme.title,
    serviceType: scheme.category,
    provider: {
      "@type": "GovernmentOrganization",
      name: scheme.state === "All India" ? "Government of India" : `Government of ${scheme.state}`,
    },
    serviceOperator: {
      "@type": "GovernmentOrganization",
      name: scheme.state === "All India" ? "Central Government" : `State Government of ${scheme.state}`,
    },
    description: scheme.summary,
    url: scheme.officialPortalUrl,
  };

  return (
    <>
      {/* Inject JSON-LD Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/schemes" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Schemes
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/schemes?category=${scheme.category}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {scheme.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-[250px]">
            {scheme.title}
          </span>
        </nav>

        {/* AdSense Unit: Top of Article */}
        <AdBanner slotId="article-top-header" format="horizontal" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          {/* Main Article Content (8 cols) */}
          <article className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
                  {scheme.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{scheme.state === "All India" ? "Central Scheme" : scheme.state}</span>
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded ${
                    scheme.status === "Active"
                      ? "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300"
                      : "bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300"
                  }`}
                >
                  ● {scheme.status}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                {scheme.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Last Updated: {scheme.updatedAt}</span>
                </span>
                <span>•</span>
                <span>Verified by Yojana Updates Editorial Team</span>
              </div>
            </div>

            {/* Real-time View Counter & Engagement Badge */}
            <RealtimeViewCounter
              type="scheme"
              slug={scheme.slug}
              initialViews={scheme.views}
              updatedAt={scheme.updatedAt}
            />

            {/* Quick Summary Callout */}
            <div className="bg-blue-50/70 dark:bg-blue-950/40 border-l-4 border-blue-600 rounded-r-xl p-4 sm:p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-1">
                Quick Scheme Overview
              </h3>
              <p className="text-sm text-blue-950 dark:text-blue-200 leading-relaxed font-medium">
                {scheme.summary}
              </p>
            </div>

            {/* Quick Highlights Table (YojanaBot style table) */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-slate-800 dark:bg-slate-950 text-white px-4 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Key Details & Summary Overview</span>
                <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded font-mono">
                  {scheme.status}
                </span>
              </div>
              <table className="w-full text-xs text-left">
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 w-1/3 bg-slate-50/50 dark:bg-slate-800/40">Scheme Name</td>
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{scheme.title}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">State / Level</td>
                    <td className="px-4 py-3 text-slate-800 dark:text-slate-200">{scheme.type} Scheme ({scheme.state})</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">Target Beneficiary</td>
                    <td className="px-4 py-3 text-slate-800 dark:text-slate-200">{scheme.beneficiary}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">Real-Time Views</td>
                    <td className="px-4 py-3 font-semibold text-blue-600 dark:text-blue-400 font-mono">
                      {(scheme.views || 0).toLocaleString()} Verified Citizen Visits
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">Application / Status</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700 dark:text-emerald-400">{scheme.applicationDeadline}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">Official Website</td>
                    <td className="px-4 py-3">
                      <a
                        href={scheme.officialPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center space-x-1"
                      >
                        <span>{new URL(scheme.officialPortalUrl).hostname}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </td>
                  </tr>
                  {scheme.helplineNumber && (
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="px-4 py-3 font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">Toll-Free Helpline</td>
                      <td className="px-4 py-3 font-mono font-bold text-slate-800 dark:text-slate-200">{scheme.helplineNumber}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table of Contents (Jump to Section) */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block mb-2">
                Table of Contents (Jump to Section):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
                <a href="#about" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                  <span>👉 1. About Scheme & Objectives</span>
                </a>
                <a href="#benefits" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                  <span>👉 2. Key Benefits & Installments</span>
                </a>
                <a href="#eligibility" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                  <span>👉 3. Eligibility Criteria</span>
                </a>
                <a href="#documents" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                  <span>👉 4. Required Documents</span>
                </a>
                <a href="#how-to-apply" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                  <span>👉 5. Step-by-Step Status Check / Apply</span>
                </a>
                <a href="#faqs" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                  <span>👉 6. Frequently Asked Questions</span>
                </a>
              </div>
            </div>

            {/* Social Share Bar */}
            <SocialShare title={scheme.title} summary={scheme.summary} url={pageUrl} />

            {/* In-Article Description */}
            <div id="about" className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>About the Scheme & Objectives</span>
              </h2>
              <div className="prose prose-slate dark:prose-invert text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {scheme.description}
              </div>
            </div>

            {/* In-Article AdSense Slot (High CTR position) */}
            <AdBanner slotId="article-incontent-1" format="rectangle" label="SPONSORED" />

            {/* Key Benefits */}
            <div id="benefits" className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Key Benefits & Financial Assistance</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 flex items-start space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div id="eligibility" className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Eligibility Criteria Checklist</span>
              </h2>
              <ul className="space-y-2.5">
                {scheme.eligibility.map((crit, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start space-x-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {i + 1}
                    </div>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div id="documents" className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
                <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Documents Required to Apply</span>
              </h2>
              <div className="bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/60 rounded-2xl p-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scheme.documentsRequired.map((doc, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* In-Article AdSense Slot 2 */}
            <AdBanner slotId="article-incontent-2" format="auto" label="ADVERTISEMENT" />

            {/* Step-by-Step How to Apply */}
            <div id="how-to-apply" className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
                <ListOrdered className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Step-by-Step Online Application Process</span>
              </h2>
              <div className="space-y-4">
                {scheme.howToApply.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 relative hover:border-blue-400 dark:hover:border-blue-500 transition"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                        {step.stepNumber}
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-10 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Portal Callout & Non-Affiliation Warning */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Official Government Website
                </span>
                <h3 className="text-lg font-bold">Apply on the Official Department Portal</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Never pay any individual or unofficial intermediary. Government application forms are free or have nominal official processing fees.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={scheme.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition shadow-lg"
                >
                  <span>Go to Official Portal ({new URL(scheme.officialPortalUrl).hostname})</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>
              </div>

              <p className="text-[11px] text-slate-400 border-t border-slate-700/80 pt-3">
                * Note: You will be redirected to an external official government portal. Yojana Updates does not collect your biometric or banking data.
              </p>
            </div>

            {/* Helpline Section */}
            {scheme.helplineNumber && (
              <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <PhoneCall className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">Official Toll-Free Helpline: </span>
                  <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">{scheme.helplineNumber}</span>
                </div>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {scheme.faqs && scheme.faqs.length > 0 && (
              <div id="faqs" className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>Frequently Asked Questions (FAQs)</span>
                </h2>

                <div className="space-y-3">
                  {scheme.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5"
                    >
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                        Q{i + 1}: {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Social Share */}
            <SocialShare title={scheme.title} summary={scheme.summary} url={pageUrl} />
          </article>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Summary Sticky Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                Scheme Highlights
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-medium">Target Beneficiary</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{scheme.beneficiary}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-medium">Scheme Type</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {scheme.type} ({scheme.state})
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-medium">Application Deadline</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{scheme.applicationDeadline}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-medium">Application Mode</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">Online & Common Service Centers (CSC)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={scheme.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl transition shadow"
                >
                  <span>Apply on Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sidebar AdSense Placement */}
            <AdBanner slotId="scheme-sidebar-slot-1" format="rectangle" label="SPONSORED AD" />

            {/* Related Schemes */}
            {relatedSchemes.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                  Similar Government Schemes
                </h3>
                <div className="space-y-3">
                  {relatedSchemes.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/schemes/${rel.slug}`}
                      className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                    >
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-1 line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {rel.beneficiary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Sidebar AdSense Placement 2 */}
            <AdBanner slotId="scheme-sidebar-slot-2" format="rectangle" label="ADVERTISEMENT" />
          </aside>
        </div>
      </div>
    </>
  );
}

