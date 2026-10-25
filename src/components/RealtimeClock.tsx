"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function RealtimeClock() {
  const [mounted, setMounted] = useState(false);
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Format: Sunday, 25 October 2026
      const formatted = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      setDateStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !dateStr) {
    return (
      <div className="hidden md:flex items-center space-x-1.5 text-[11px] text-blue-200 opacity-70">
        <Clock className="w-3 h-3 text-amber-300" />
        <span>Today | Live Status</span>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-1.5 text-[11px] text-blue-100 bg-blue-900/40 border border-blue-400/20 px-2 py-0.5 rounded-md">
      <Clock className="w-3 h-3 text-amber-300 animate-pulse" />
      <span>{dateStr}</span>
      <span className="text-amber-300 font-bold">• Live</span>
    </div>
  );
}

