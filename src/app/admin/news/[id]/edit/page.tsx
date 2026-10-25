"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, AlertCircle, CheckCircle2, Loader2, Newspaper } from "lucide-react";
import { NewsItem } from "@/lib/data";

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const newsId = params?.id as string;

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Payment Updates");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [relatedScheme, setRelatedScheme] = useState("");
  const [sourceUrl, setSourceUrl] = useState("https://");
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem("yojana_admin_key");
    if (!key) {
      router.push("/admin/login");
      return;
    }

    if (!newsId) return;

    fetch(`/api/news?id=${encodeURIComponent(newsId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.success || !data.news) {
          setError(data.error || "News item not found");
          setInitialLoading(false);
          return;
        }

        const n: NewsItem = data.news;
        setTitle(n.title || "");
        setSlug(n.slug || "");
        setCategory(n.category || "Payment Updates");
        setSummary(n.summary || "");
        setContent(n.content || "");
        setRelatedScheme(n.relatedScheme || "");
        setSourceUrl(n.sourceUrl || "https://");
        setFeatured(Boolean(n.featured));

        setInitialLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch news: " + err.message);
        setInitialLoading(false);
      });
  }, [router, newsId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const key = localStorage.getItem("yojana_admin_key") || "";

    const payload = {
      id: newsId,
      title,
      slug,
      category,
      summary,
      content,
      relatedScheme,
      sourceUrl,
      featured,
    };

    try {
      const res = await fetch("/api/news", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": key,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to update news");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-500 flex items-center justify-center space-x-2">
        <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
        <span>Loading news notification details...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Admin Dashboard</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded">
            News Editor
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Edit News Notification
          </h1>
          <p className="text-xs text-slate-500">
            Update release dates, circular statements, or department links.
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>News updated successfully! Redirecting to dashboard...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Headline / Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">SEO URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">News Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
              >
                <option value="Payment Updates">Payment Updates</option>
                <option value="Installment Dates">Installment Dates</option>
                <option value="State Welfare">State Welfare</option>
                <option value="Finance & Loans">Finance & Loans</option>
                <option value="Deadline Extension">Deadline Extension</option>
                <option value="New Scheme Launch">New Scheme Launch</option>
                <option value="General Notice">General Notice</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Short Summary *</label>
            <textarea
              rows={2}
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Detailed News Content *</label>
            <textarea
              rows={8}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Related Scheme Name</label>
              <input
                type="text"
                value={relatedScheme}
                onChange={(e) => setRelatedScheme(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Source / Press Release URL</label>
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="featuredNewsEdit"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="featuredNewsEdit" className="text-xs font-bold text-slate-700 cursor-pointer">
              Feature on Homepage Top News Ticker
            </label>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition shadow flex items-center justify-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? "Saving Changes..." : "Update News Notification Now"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

