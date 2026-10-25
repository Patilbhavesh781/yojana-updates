"use client";

import React, { useEffect } from "react";

interface AdBannerProps {
  slotId?: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  responsive?: boolean;
  className?: string;
  label?: string;
}

export default function AdBanner({
  slotId = "1234567890",
  format = "auto",
  responsive = true,
  className = "",
  label = "ADVERTISEMENT",
}: AdBannerProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isProduction = process.env.NODE_ENV === "production" && clientId && !clientId.includes("demo");

  useEffect(() => {
    if (isProduction) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }
  }, [isProduction]);

  if (isProduction && clientId) {
    return (
      <div className={`my-4 text-center overflow-hidden ${className}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
          {label}
        </span>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    );
  }

  // Developer / Preview Mode Ad placeholder (so the layout & dimensions are visible)
  return (
    <div
      className={`my-4 border border-dashed border-amber-300 bg-amber-50/60 rounded-lg p-3 text-center transition-all ${className}`}
    >
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-1 mb-2">
        <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">
          {label}
        </span>
        <span className="text-[10px] bg-amber-200 text-amber-800 font-medium px-2 py-0.5 rounded">
          AdSense Slot #{slotId}
        </span>
      </div>
      <div className="py-2 text-xs text-amber-900/80">
        <p className="font-semibold text-amber-950">Google AdSense Unit ({format})</p>
        <p className="text-[11px] text-amber-700 mt-0.5">
          Will render live ads once your Google AdSense Publisher ID is verified.
        </p>
      </div>
    </div>
  );
}

