"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export default function ThemeToggle({ showLabel = false, className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-lg bg-blue-900/40 border border-blue-400/20 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center justify-center space-x-1.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
        showLabel
          ? "px-3 py-2 text-xs font-semibold w-full justify-between bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
          : "w-8 h-8 bg-blue-900/60 hover:bg-blue-900/90 text-white border-blue-400/30 shadow-sm"
      } ${className}`}
    >
      <div className="flex items-center space-x-2">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-amber-300 transition-transform hover:-rotate-12" />
        )}
        {showLabel && (
          <span>{isDark ? "Dark Theme Active" : "Light Theme Active"}</span>
        )}
      </div>

      {showLabel && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </span>
      )}
    </button>
  );
}

