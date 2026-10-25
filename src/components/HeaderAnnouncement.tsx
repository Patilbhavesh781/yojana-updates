"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface AnnouncementData {
  text: string;
  link?: string;
  enabled: boolean;
}

const DEFAULT_ANNOUNCEMENT: AnnouncementData = {
  text: "PM-Kisan 19th installment, Namo Shetkari 9th list & Majhi Ladki Bahin DBT updates live.",
  link: "",
  enabled: true,
};

export default function HeaderAnnouncement() {
  const [data, setData] = useState<AnnouncementData>(DEFAULT_ANNOUNCEMENT);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch("/api/announcement");
        if (res.ok) {
          const json = await res.json();
          if (json.announcement && json.announcement.text) {
            setData(json.announcement);
          }
        }
      } catch (e) {
        // Fallback to default
      }
    };

    fetchAnnouncement();
  }, []);

  if (!data.enabled) return null;

  return (
    <div className="flex items-center space-x-2 truncate">
      <span className="bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded text-[10px] uppercase shrink-0 shadow-xs">
        Latest
      </span>
      {data.link ? (
        <Link
          href={data.link}
          className="truncate text-xs text-blue-50 hover:text-amber-200 hover:underline transition inline-flex items-center space-x-1"
        >
          <span className="truncate">{data.text}</span>
          <ArrowRight className="w-3 h-3 shrink-0 ml-0.5" />
        </Link>
      ) : (
        <span className="truncate text-xs text-blue-50">{data.text}</span>
      )}
    </div>
  );
}

