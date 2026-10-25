"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Search, Filter, RotateCcw } from "lucide-react";

const CATEGORIES = [
  "All",
  "Farmer",
  "Women",
  "Student",
  "Business",
  "Housing",
  "Health",
  "Pension",
  "General",
];

const STATES = [
  "All",
  "All India",
  "Maharashtra",
  "Uttar Pradesh",
  "Bihar",
  "Rajasthan",
  "Gujarat",
  "Madhya Pradesh",
  "Karnataka",
  "West Bengal",
];

export default function SearchAndFilter({
  initialCategory = "All",
  initialType = "All",
  initialState = "All",
  initialSearch = "",
}: {
  initialCategory?: string;
  initialType?: string;
  initialState?: string;
  initialSearch?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [category, setCategory] = useState(searchParams.get("category") || initialCategory);
  const [type, setType] = useState(searchParams.get("type") || initialType);
  const [state, setState] = useState(searchParams.get("state") || initialState);
  const [search, setSearch] = useState(searchParams.get("search") || initialSearch);

  const applyFilters = (newCat = category, newType = type, newState = state, newSearch = search) => {
    const params = new URLSearchParams();
    if (newCat && newCat !== "All") params.set("category", newCat);
    if (newType && newType !== "All") params.set("type", newType);
    if (newState && newState !== "All") params.set("state", newState);
    if (newSearch.trim()) params.set("search", newSearch.trim());

    startTransition(() => {
      router.push(`/schemes?${params.toString()}`);
    });
  };

  const handleReset = () => {
    setCategory("All");
    setType("All");
    setState("All");
    setSearch("");
    startTransition(() => {
      router.push("/schemes");
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm mb-8">
      {/* Top Search Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          applyFilters();
        }}
        className="flex flex-col sm:flex-row gap-3 mb-5"
      >
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by scheme name, keyword (e.g. Kisan, Ladki Bahin, Solar, Loan)..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-sm"
        >
          {isPending ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Category Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Category:</span>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                applyFilters(e.target.value, type, state, search);
              }}
              className="text-xs font-medium border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Level:</span>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                applyFilters(category, e.target.value, state, search);
              }}
              className="text-xs font-medium border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="All">All Levels</option>
              <option value="Central">Central Govt</option>
              <option value="State">State Govt</option>
            </select>
          </div>

          {/* State Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">State:</span>
            <select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                applyFilters(category, type, e.target.value, search);
              }}
              className="text-xs font-medium border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset button */}
        {(category !== "All" || type !== "All" || state !== "All" || search) && (
          <button
            onClick={handleReset}
            className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-semibold flex items-center space-x-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}

