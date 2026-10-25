"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

interface LanguageOption {
  code: string;
  label: string;
  nativeName: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "mr", label: "Marathi", nativeName: "मराठी" },
  { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
  { code: "gu", label: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "bn", label: "Bengali", nativeName: "বাংলা" },
  { code: "te", label: "Telugu", nativeName: "తెలుగు" },
  { code: "ta", label: "Tamil", nativeName: "தமிழ்" },
  { code: "kn", label: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "pa", label: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "ml", label: "Malayalam", nativeName: "മലയാളം" },
];

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect existing language cookie
    if (typeof document !== "undefined") {
      const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
      if (match && match[1]) {
        setCurrentLang(match[1]);
      }
    }

    // Initialize Google Translate Script if not present
    if (typeof window !== "undefined" && !document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,mr,hi,gu,bn,te,ta,kn,pa,ml",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Close dropdown on outside click
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const changeLanguage = (langCode: string) => {
    if (langCode === "en") {
      // Clear cookie for English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; domain=${window.location.hostname}; path=/;`;
    }

    setCurrentLang(langCode);
    setIsOpen(false);
    window.location.reload();
  };

  const selectedOption = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden container required by Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom Sleek Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-1.5 bg-blue-900/60 hover:bg-blue-900/90 text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-blue-400/30 transition shadow-sm"
        title="Change Language / भाषा बदला"
      >
        <Globe className="w-3.5 h-3.5 text-amber-300" />
        <span className="font-bold">{selectedOption.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-blue-200 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1 border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Select Language / भाषा
          </div>
          <div className="max-h-64 overflow-y-auto divide-y divide-slate-50 dark:divide-slate-800/60">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-blue-50 dark:hover:bg-slate-800 transition ${
                    isSelected
                      ? "bg-blue-50/80 dark:bg-blue-950/60 font-bold text-blue-700 dark:text-blue-300"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-slate-900 dark:text-slate-100">{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">({lang.label})</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

