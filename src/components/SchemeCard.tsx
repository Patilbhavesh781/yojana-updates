import Link from "next/link";
import { SchemeItem } from "@/lib/data";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Eye,
} from "lucide-react";

interface SchemeCardProps {
  scheme: SchemeItem;
}

export default function SchemeCard({ scheme }: SchemeCardProps) {
  const categoryColors: Record<string, string> = {
    Farmer: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    Women: "bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    Student: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    Business: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    Housing: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    Health: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    Pension: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    General: "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  };

  const badgeClass =
    categoryColors[scheme.category] || "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div className="p-5 sm:p-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeClass}`}
            >
              {scheme.category}
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center space-x-1">
              <MapPin className="w-3 h-3 inline mr-0.5" />
              <span>{scheme.state === "All India" ? "Central Scheme" : scheme.state}</span>
            </span>
          </div>

          {scheme.featured && (
            <span className="text-[10px] uppercase font-extrabold tracking-wide text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 text-amber-700 dark:text-amber-400" />
              <span>Popular</span>
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={`/schemes/${scheme.slug}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2 leading-snug">
            {scheme.title}
          </h3>
        </Link>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
          {scheme.summary}
        </p>

        {/* Highlight Benefit */}
        {scheme.benefits && scheme.benefits.length > 0 && (
          <div className="bg-blue-50/60 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 rounded-lg p-2.5 mb-4 text-xs text-blue-900 dark:text-blue-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <span className="line-clamp-2 font-medium">{scheme.benefits[0]}</span>
          </div>
        )}

        {/* Beneficiary Info */}
        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2 truncate">
          <strong className="text-slate-700 dark:text-slate-300">Eligible:</strong> {scheme.beneficiary}
        </div>

        {/* View Count & Date Tracking */}
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
          <span className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400">
            <Eye className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
              {(scheme.views || 0).toLocaleString()}
            </span>
            <span className="text-[11px]">views</span>
          </span>
          <span className="flex items-center space-x-1 text-slate-400 dark:text-slate-500 text-[11px]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{scheme.updatedAt}</span>
          </span>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <span
          className={`font-semibold ${
            scheme.status === "Active"
              ? "text-emerald-600 dark:text-emerald-400"
              : scheme.status === "Upcoming"
              ? "text-blue-600 dark:text-blue-400"
              : "text-slate-400 dark:text-slate-500"
          }`}
        >
          ● {scheme.status}
        </span>

        <Link
          href={`/schemes/${scheme.slug}`}
          className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition"
        >
          <span>Complete Guide & Apply</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

