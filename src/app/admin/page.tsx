"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Plus,
  Layers,
  Database,
  ExternalLink,
  LogOut,
  Trash2,
  Newspaper,
  Eye,
  CheckCircle2,
  AlertCircle,
  FileText,
  Calendar,
  Edit3,
  RotateCw,
  TrendingUp,
  Sparkles,
  Clock,
} from "lucide-react";
import { SchemeItem, NewsItem } from "@/lib/data";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"schemes" | "news">("schemes");
  const [schemes, setSchemes] = useState<SchemeItem[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState("");
  const [actionMessage, setActionMessage] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");
  const [announcementText, setAnnouncementText] = useState("");
  const [announcementLink, setAnnouncementLink] = useState("");
  const [announcementSaving, setAnnouncementSaving] = useState(false);
  const [announcementStatus, setAnnouncementStatus] = useState("");

  const fetchData = async () => {
    try {
      const [schemesRes, newsRes, annRes] = await Promise.all([
        fetch("/api/schemes").then((r) => r.json()),
        fetch("/api/news").then((r) => r.json()),
        fetch("/api/announcement").then((r) => r.json()).catch(() => null),
      ]);

      if (schemesRes.schemes) setSchemes(schemesRes.schemes);
      if (newsRes.news) setNewsList(newsRes.news);
      if (annRes?.announcement) {
        setAnnouncementText(annRes.announcement.text || "");
        setAnnouncementLink(annRes.announcement.link || "");
      }
      setLastUpdatedTime(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleManualRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleSaveAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    const key = localStorage.getItem("yojana_admin_key") || "";
    setAnnouncementSaving(true);
    setAnnouncementStatus("");

    try {
      const res = await fetch("/api/announcement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": key,
        },
        body: JSON.stringify({
          text: announcementText,
          link: announcementLink,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAnnouncementStatus("✅ Header announcement updated live!");
        setTimeout(() => setAnnouncementStatus(""), 4000);
      } else {
        setAnnouncementStatus(`❌ ${data.error || "Failed to update"}`);
      }
    } catch (err: any) {
      setAnnouncementStatus(`❌ ${err.message}`);
    } finally {
      setAnnouncementSaving(false);
    }
  };

  useEffect(() => {
    const key = localStorage.getItem("yojana_admin_key");
    if (!key) {
      router.push("/admin/login");
      return;
    }
    fetchData();

    // Auto-refresh stats every 30 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 30000);
    return () => clearInterval(interval);
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/login", { method: "DELETE" });
    } catch (e) {
      // ignore
    }
    localStorage.removeItem("yojana_admin_key");
    router.push("/admin/login");
  };

  const handleSeedDatabase = async () => {
    const key = localStorage.getItem("yojana_admin_key") || "";
    setSeeding(true);
    setSeedMessage("");
    try {
      const res = await fetch("/api/seed", {
        method: "POST",
        headers: { "x-admin-key": key },
      });
      const data = await res.json();
      setSeedMessage(data.message || (data.success ? "Database seeded successfully!" : data.error));
      await fetchData();
    } catch (err: any) {
      setSeedMessage(`Seeding error: ${err.message}`);
    } finally {
      setSeeding(false);
    }
  };

  const handleDeleteScheme = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete scheme: "${title}"?`)) return;
    const key = localStorage.getItem("yojana_admin_key") || "";

    try {
      const res = await fetch(`/api/schemes?id=${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": key },
      });
      const data = await res.json();
      if (data.success) {
        setActionMessage(`Deleted: "${title}"`);
        setSchemes(schemes.filter((s) => s.id !== id));
        setTimeout(() => setActionMessage(""), 3000);
      } else {
        alert(data.error || "Failed to delete");
      }
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  const handleDeleteNews = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete news: "${title}"?`)) return;
    const key = localStorage.getItem("yojana_admin_key") || "";

    try {
      const res = await fetch(`/api/news?id=${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": key },
      });
      const data = await res.json();
      if (data.success) {
        setActionMessage(`Deleted news: "${title}"`);
        setNewsList(newsList.filter((n) => n.id !== id));
        setTimeout(() => setActionMessage(""), 3000);
      } else {
        alert(data.error || "Failed to delete");
      }
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500">
        Loading admin console...
      </div>
    );
  }

  const totalSchemeViews = schemes.reduce((acc, s) => acc + (s.views || 0), 0);
  const totalNewsViews = newsList.reduce((acc, n) => acc + (n.views || 0), 0);
  const totalViews = totalSchemeViews + totalNewsViews;

  const topSchemes = [...schemes]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 4);

  const maxViews = topSchemes.length > 0 ? Math.max(...topSchemes.map((s) => s.views || 0)) : 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-950/70 dark:text-blue-300 px-2.5 py-0.5 rounded">
              Authenticated Admin Console
            </span>
            <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Tracking Live</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Yojana Portal Management & Analytics
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Publish government schemes, announce news alerts, track citizen views & engagement in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleManualRefresh}
            disabled={refreshing}
            className="inline-flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition"
            title="Refresh Real-time Counts"
          >
            <RotateCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-blue-600" : ""}`} />
            <span>{refreshing ? "Updating..." : "Refresh Views"}</span>
          </button>
          <Link
            href="/admin/new"
            className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shadow"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Scheme</span>
          </Link>
          <Link
            href="/admin/news/new"
            className="inline-flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shadow"
          >
            <Newspaper className="w-4 h-4" />
            <span>+ Add News</span>
          </Link>
          <button
            onClick={handleLogout}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
            title="Secure Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {actionMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 font-bold flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{actionMessage}</span>
        </div>
      )}

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Schemes
            </span>
            <Layers className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-2">{schemes.length}</p>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">
            ● Pre-rendered SSG
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              News Updates
            </span>
            <Newspaper className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-2">{newsList.length}</p>
          <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold mt-1 inline-block">
            ● Circular Alerts
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Real-Time Views
            </span>
            <Eye className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-2 font-mono">
            {totalViews.toLocaleString()}
          </p>
          <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-1">
            <span>Schemes: {totalSchemeViews.toLocaleString()}</span>
            <span>•</span>
            <span>News: {totalNewsViews.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              MongoDB Sync
            </span>
            <Database className="w-4 h-4 text-purple-600" />
          </div>
          <div className="mt-2">
            <button
              onClick={handleSeedDatabase}
              disabled={seeding}
              className="w-full text-xs font-bold bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-lg border border-purple-200 dark:border-purple-800 transition"
            >
              {seeding ? "Syncing..." : "Sync / Seed Data to Atlas"}
            </button>
            {seedMessage && (
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1.5 truncate">{seedMessage}</p>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Content Performance Leaderboard */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Real-Time View Tracking Leaderboard
            </h2>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Updated live: {lastUpdatedTime || "Active"}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {topSchemes.map((scheme, idx) => {
            const percentage = Math.min(100, Math.round(((scheme.views || 0) / maxViews) * 100));
            return (
              <div
                key={scheme.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-2 truncate">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-xs truncate">
                      {scheme.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 shrink-0">
                    {(scheme.views || 0).toLocaleString()} views
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span>Category: {scheme.category}</span>
                  <span>Last Updated: {scheme.updatedAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Header Announcement ("Latest" Ticker Editor) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                Header &apos;Latest&apos; Announcement Ticker
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Change the top-bar breaking news alert displayed on the header across the entire site.
              </p>
            </div>
          </div>
          {announcementStatus && (
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              {announcementStatus}
            </span>
          )}
        </div>

        {/* Live Preview Box */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Live Header Preview
          </span>
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs py-2 px-3 rounded-xl flex items-center space-x-2 truncate">
            <span className="bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded text-[10px] uppercase shrink-0 shadow-xs">
              Latest
            </span>
            <span className="truncate text-blue-50">
              {announcementText || "No announcement set..."}
            </span>
          </div>
        </div>

        <form onSubmit={handleSaveAnnouncement} className="space-y-3 pt-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Announcement Text (Headline)
              </label>
              <input
                type="text"
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
                placeholder="e.g. PM-Kisan 19th installment, Namo Shetkari 9th list & Majhi Ladki Bahin DBT updates live."
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Target Link URL (Optional)
              </label>
              <input
                type="text"
                value={announcementLink}
                onChange={(e) => setAnnouncementLink(e.target.value)}
                placeholder="e.g. /news/pm-kisan-19th-installment-release-date"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={announcementSaving}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-sm flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{announcementSaving ? "Saving Live..." : "Save Header Announcement"}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center space-x-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab("schemes")}
          className={`px-5 py-3 text-sm font-bold border-b-2 transition flex items-center space-x-2 ${
            activeTab === "schemes"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Government Schemes ({schemes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("news")}
          className={`px-5 py-3 text-sm font-bold border-b-2 transition flex items-center space-x-2 ${
            activeTab === "news"
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <Newspaper className="w-4 h-4" />
          <span>News & Circular Alerts ({newsList.length})</span>
        </button>
      </div>

      {/* Tab 1: Schemes Table */}
      {activeTab === "schemes" && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-extrabold text-slate-900 text-base">Published Schemes Directory</h2>
            <Link
              href="/admin/new"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Scheme</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4 font-bold">Scheme Title</th>
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Level / State</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold">Views</th>
                  <th className="py-3 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schemes.map((scheme) => (
                  <tr key={scheme.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900 max-w-sm truncate">
                      {scheme.title}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded">
                        {scheme.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {scheme.type} ({scheme.state})
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`font-semibold ${
                          scheme.status === "Active" ? "text-emerald-600" : "text-amber-600"
                        }`}
                      >
                        {scheme.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-mono">
                      {(scheme.views || 0).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-3">
                      <Link
                        href={`/schemes/${scheme.slug}`}
                        target="_blank"
                        className="inline-flex items-center space-x-1 text-slate-600 hover:text-blue-600 font-bold"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <Link
                        href={`/admin/schemes/${scheme.id}/edit`}
                        className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-bold"
                        title="Edit Scheme Details"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </Link>
                      <button
                        onClick={() => handleDeleteScheme(scheme.id, scheme.title)}
                        className="text-rose-500 hover:text-rose-700 font-bold inline-flex items-center space-x-1"
                        title="Delete Scheme"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: News Table */}
      {activeTab === "news" && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-extrabold text-slate-900 text-base">Published News & Circulars</h2>
            <Link
              href="/admin/news/new"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create News Update</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4 font-bold">Headline / Title</th>
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Related Scheme</th>
                  <th className="py-3 px-4 font-bold">Published Date</th>
                  <th className="py-3 px-4 font-bold">Views</th>
                  <th className="py-3 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {newsList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900 max-w-sm truncate">
                      {item.title}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {item.relatedScheme || "General"}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-mono">
                      {item.publishedAt}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-mono">
                      {(item.views || 0).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-3">
                      <Link
                        href={`/news/${item.slug}`}
                        target="_blank"
                        className="inline-flex items-center space-x-1 text-slate-600 hover:text-blue-600 font-bold"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <Link
                        href={`/admin/news/${item.id}/edit`}
                        className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 font-bold"
                        title="Edit News Article"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </Link>
                      <button
                        onClick={() => handleDeleteNews(item.id, item.title)}
                        className="text-rose-500 hover:text-rose-700 font-bold inline-flex items-center space-x-1"
                        title="Delete News"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
