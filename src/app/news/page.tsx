import type { Metadata } from "next";
import Link from "next/link";
import { getAllNews } from "@/lib/schemeService";
import AdBanner from "@/components/AdBanner";
import { Newspaper, Calendar, ArrowRight, Bell, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Latest Government Scheme News, Installment Dates & Notifications 2025",
  description:
    "Stay informed with real-time news on Sarkari Yojana releases, DBT installment status, last date extensions, and budget policy announcements.",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Newspaper className="w-4 h-4" />
            <span>Sarkari News Desk</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Government Scheme News & Notifications
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Stay up to date with official circulars, payment installment releases, eligibility rule modifications, and upcoming registration deadlines.
          </p>
        </div>
      </div>

      <AdBanner slotId="news-top-banner" format="horizontal" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.publishedAt}</span>
                </span>
              </div>

              <Link href={`/news/${item.slug}`}>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition mb-2 leading-snug">
                  {item.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                {item.summary}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
              <span className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                <Eye className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                  {(item.views || 0).toLocaleString()}
                </span>
                <span className="text-[11px]">reads</span>
              </span>
              <Link
                href={`/news/${item.slug}`}
                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
              >
                <span>Read Update</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <AdBanner slotId="news-bottom-banner" format="auto" />
    </div>
  );
}

