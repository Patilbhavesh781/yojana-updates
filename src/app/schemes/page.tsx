import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllSchemes } from "@/lib/schemeService";
import SchemeCard from "@/components/SchemeCard";
import SearchAndFilter from "@/components/SearchAndFilter";
import AdBanner from "@/components/AdBanner";
import { Layers, FileQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "All Government Schemes 2025: Central & State Welfare Programs",
  description:
    "Explore complete database of Central and State Government schemes across Farmer, Women, Education, Loan, Solar, and Health categories.",
};

export default async function SchemesPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    type?: string;
    state?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;
  const schemes = await getAllSchemes({
    category: params.category,
    type: params.type,
    state: params.state,
    search: params.search,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>Government Welfare Directory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Central & State Government Schemes Directory
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Search and filter through all verified public schemes. Find eligibility, benefit details, required documentation, and direct links to official government application portals.
          </p>
        </div>
      </div>

      {/* AdSense Unit */}
      <AdBanner slotId="schemes-top-banner" format="horizontal" />

      {/* Search & Filter Component with Suspense */}
      <Suspense fallback={<div className="h-28 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse" />}>
        <SearchAndFilter
          initialCategory={params.category || "All"}
          initialType={params.type || "All"}
          initialState={params.state || "All"}
          initialSearch={params.search || ""}
        />
      </Suspense>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
          Showing <span className="text-blue-600 dark:text-blue-400">{schemes.length}</span> scheme(s)
          {params.category && params.category !== "All" && ` in ${params.category}`}
          {params.state && params.state !== "All" && ` for ${params.state}`}
          {params.search && ` matching "${params.search}"`}
        </p>
      </div>

      {/* Schemes Grid */}
      {schemes.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center max-w-lg mx-auto">
          <FileQuestion className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">No Schemes Found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Try adjusting your search keywords or resetting the category/state filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, idx) => (
            <div key={scheme.id}>
              <SchemeCard scheme={scheme} />
              {/* Insert in-feed ad after every 4 items for optimal AdSense monetization */}
              {(idx + 1) % 4 === 0 && (
                <div className="col-span-full my-4">
                  <AdBanner slotId={`in-feed-grid-${idx}`} format="auto" label="SPONSORED" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bottom Ad Unit */}
      <AdBanner slotId="schemes-bottom-banner" format="auto" />
    </div>
  );
}

