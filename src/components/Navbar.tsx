"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  FileText,
  Search,
  Menu,
  X,
  Calculator,
  ChevronDown,
  Layers,
  MapPin,
  Sparkles,
  Wheat,
  Users,
  GraduationCap,
  Briefcase,
  Zap,
  HeartPulse,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import RealtimeClock from "./RealtimeClock";
import HeaderAnnouncement from "./HeaderAnnouncement";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const stateMenuRef = useRef<HTMLDivElement>(null);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (stateMenuRef.current && !stateMenuRef.current.contains(e.target as Node)) {
        setStateDropdownOpen(false);
      }
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(e.target as Node)) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const popularStates = [
    { name: "Maharashtra", slug: "Maharashtra", count: "Ladki Bahin, Namo Shetkari" },
    { name: "Uttar Pradesh", slug: "Uttar Pradesh", count: "Kanya Sumangala, Pension" },
    { name: "Bihar", slug: "Bihar", count: "Student Credit, Farmer Grants" },
    { name: "Rajasthan", slug: "Rajasthan", count: "Palanhar, Chiranjeevi" },
    { name: "Gujarat", slug: "Gujarat", count: "Vahli Dikri, Kisan Sahay" },
    { name: "Madhya Pradesh", slug: "Madhya Pradesh", count: "Ladli Behna, Sambal" },
  ];

  const categories = [
    { name: "Farmer Subsidies", icon: Wheat, href: "/schemes?category=Farmer" },
    { name: "Women Empowerment", icon: Users, href: "/schemes?category=Women" },
    { name: "Student Scholarships", icon: GraduationCap, href: "/schemes?category=Student" },
    { name: "Business & Mudra Loans", icon: Briefcase, href: "/schemes?category=Business" },
    { name: "Housing & Solar Rooftop", icon: Zap, href: "/schemes?category=Housing" },
    { name: "Health & Ayushman Cards", icon: HeartPulse, href: "/schemes?category=Health" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-150">
      {/* Top Notification & Language Switcher Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Dynamic Changeable Latest Alert Ticker */}
          <HeaderAnnouncement />

          {/* Right: Live Clock, Language Switcher, Dark Mode Toggle & Disclaimer */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <RealtimeClock />
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/disclaimer"
              className="hidden sm:inline-block text-[11px] text-blue-200 hover:text-white transition"
            >
              Non-Gov Notice
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  Yojana<span className="text-blue-600 dark:text-blue-400">Updates</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 -mt-1">
                  Sarkari Schemes & News
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Home
            </Link>

            <Link
              href="/schemes?type=Central"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Central Schemes
            </Link>

            {/* State Schemes Dropdown */}
            <div className="relative" ref={stateMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setStateDropdownOpen(!stateDropdownOpen);
                  setCategoryDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center space-x-1 ${
                  stateDropdownOpen
                    ? "text-blue-600 dark:text-blue-400 bg-slate-50 dark:bg-slate-800"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <span>State Schemes</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${stateDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {stateDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-3 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-4 py-1 border-b border-slate-100 dark:border-slate-800 mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Popular State Portals
                    </span>
                    <Link
                      href="/schemes?type=State"
                      onClick={() => setStateDropdownOpen(false)}
                      className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View All States →
                    </Link>
                  </div>
                  <div className="space-y-1 px-2">
                    {popularStates.map((st) => (
                      <Link
                        key={st.name}
                        href={`/schemes?state=${encodeURIComponent(st.slug)}`}
                        onClick={() => setStateDropdownOpen(false)}
                        className="flex flex-col px-3 py-2 rounded-xl hover:bg-blue-50/70 dark:hover:bg-slate-800/80 transition group"
                      >
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-500" />
                          <span>{st.name}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 pl-5">
                          {st.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <div className="relative" ref={categoryMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                  setStateDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center space-x-1 ${
                  categoryDropdownOpen
                    ? "text-blue-600 dark:text-blue-400 bg-slate-50 dark:bg-slate-800"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <span>Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-3 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-4 py-1 border-b border-slate-100 dark:border-slate-800 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Welfare Beneficiaries
                    </span>
                  </div>
                  <div className="space-y-1 px-2">
                    {categories.map((c) => {
                      const Icon = c.icon;
                      return (
                        <Link
                          key={c.name}
                          href={c.href}
                          onClick={() => setCategoryDropdownOpen(false)}
                          className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-blue-50/70 dark:hover:bg-slate-800/80 transition group text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        >
                          <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span>{c.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/news"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              News & Updates
            </Link>

            <Link
              href="/tools/eligibility"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 flex items-center space-x-1.5 transition"
            >
              <Calculator className="w-4 h-4" />
              <span>Eligibility Tool</span>
            </Link>
          </nav>

          {/* Right Search Action */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/schemes"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Search className="w-3.5 h-3.5 mr-1.5" />
              Search Schemes
            </Link>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Mobile Search Input */}
          <form action="/schemes" method="GET" className="relative mb-2">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="search"
              placeholder="Search government schemes..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </form>

          {/* Theme Switcher Row in Mobile Menu */}
          <div className="pb-1">
            <ThemeToggle showLabel className="w-full" />
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Home
          </Link>

          <Link
            href="/schemes?type=Central"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Central Government Schemes
          </Link>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 block mb-1">
              State Government Portals
            </span>
            <div className="grid grid-cols-2 gap-1 px-1">
              {popularStates.map((st) => (
                <Link
                  key={st.name}
                  href={`/schemes?state=${encodeURIComponent(st.slug)}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 truncate"
                >
                  📍 {st.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 block mb-1">
              Categories
            </span>
            <div className="grid grid-cols-2 gap-1 px-1">
              {categories.map((c) => (
                <Link
                  key={c.name}
                  href={c.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 truncate"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/news"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 border-t border-slate-100 dark:border-slate-800 pt-3"
          >
            Latest News & Circulars
          </Link>

          <Link
            href="/tools/eligibility"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60"
          >
            <div className="flex items-center space-x-2">
              <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Eligibility Calculator</span>
            </div>
            <span>Check Now →</span>
          </Link>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-3">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <span>•</span>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <span>•</span>
            <Link href="/disclaimer" onClick={() => setMobileMenuOpen(false)}>
              Disclaimer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
