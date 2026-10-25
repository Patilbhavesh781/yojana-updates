import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getNewsBySlug, getAllNews } from "@/lib/schemeService";
import AdBanner from "@/components/AdBanner";
import SocialShare from "@/components/SocialShare";
import RealtimeViewCounter from "@/components/RealtimeViewCounter";
import { Calendar, ChevronRight, Newspaper, ArrowLeft, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsItem = await getNewsBySlug(slug);

  if (!newsItem) {
    return { title: "News Not Found | Yojana Updates" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com";
  return {
    title: `${newsItem.title} - Yojana Updates`,
    description: newsItem.summary,
    alternates: { canonical: `${siteUrl}/news/${newsItem.slug}` },
    openGraph: {
      title: newsItem.title,
      description: newsItem.summary,
      url: `${siteUrl}/news/${newsItem.slug}`,
      type: "article",
      publishedTime: newsItem.publishedAt,
    },
  };
}

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com";
  const pageUrl = `${siteUrl}/news/${item.slug}`;

  // Schema markup for NewsArticle
  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.publishedAt,
    dateModified: item.publishedAt,
    author: {
      "@type": "Organization",
      name: "Yojana Updates Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Yojana Updates",
      logo: {
        "@type": "ImageObject",
        url: "https://yojanaupdates.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/news" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            News
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-[200px]">
            {item.title}
          </span>
        </nav>

        <AdBanner slotId="news-article-top" format="horizontal" />

        <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
              {item.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {item.title}
            </h1>
            <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published: {item.publishedAt}</span>
              </span>
              <span>•</span>
              <span>Source: Official Press Release</span>
            </div>
          </div>

          {/* Real-time View Tracking & Live Reader Count */}
          <RealtimeViewCounter
            type="news"
            slug={item.slug}
            initialViews={item.views}
            updatedAt={item.publishedAt}
          />

          <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-blue-600 p-4 rounded-r-xl text-sm font-medium text-slate-800 dark:text-slate-200">
            {item.summary}
          </div>

          <SocialShare title={item.title} summary={item.summary} url={pageUrl} />

          <AdBanner slotId="news-mid-article" format="rectangle" label="SPONSORED" />

          <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
            {item.content}
          </div>

          {item.sourceUrl && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>Read Official Press Release Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link
              href="/news"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all news</span>
            </Link>
            <Link
              href="/schemes"
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Browse related schemes →
            </Link>
          </div>
        </article>

        <AdBanner slotId="news-article-bottom" format="auto" />
      </div>
    </>
  );
}

