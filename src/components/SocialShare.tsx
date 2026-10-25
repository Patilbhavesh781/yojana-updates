"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Send, Share2, Copy, Check, Printer } from "lucide-react";

interface SocialShareProps {
  title: string;
  url?: string;
  summary?: string;
}

export default function SocialShare({ title, url, summary }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>(url || "https://yojanaupdates.com");

  useEffect(() => {
    if (url) {
      setCurrentUrl(url);
    } else if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareText = encodeURIComponent(
    `📢 *${title}*\n\n${summary ? summary + "\n\n" : ""}Check eligibility, documents required and apply online here:\n${currentUrl}`
  );

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 my-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-slate-800 dark:text-slate-200">
          <Share2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-bold">Share this scheme with family & friends:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* WhatsApp Share */}
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
            title="Share on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Telegram Share */}
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
            title="Share on Telegram"
          >
            <Send className="w-4 h-4" />
            <span>Telegram</span>
          </a>

          {/* Copy Link */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center space-x-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {/* Print / Save PDF */}
          <button
            onClick={handlePrint}
            className="hidden md:inline-flex items-center space-x-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>
        </div>
      </div>
    </div>
  );
}
