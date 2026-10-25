import Link from "next/link";
import { getAllSchemes, getAllNews } from "@/lib/schemeService";
import SchemeCard from "@/components/SchemeCard";
import AdBanner from "@/components/AdBanner";
import EligibilityChecker from "@/components/EligibilityChecker";
import {
  Search,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Building,
  GraduationCap,
  Sparkles,
  Wheat,
  Zap,
  Briefcase,
  HeartPulse,
  Eye,
} from "lucide-react";

export const revalidate = 60; // ISR revalidation every 60 seconds

export default async function HomePage() {
  const schemes = await getAllSchemes();
  const news = await getAllNews();

  const featuredSchemes = schemes.filter((s) => s.featured).slice(0, 6);
  const recentNews = news.slice(0, 3);

  // Calculate real-time category counts dynamically from database records
  const categoryCountMap: Record<string, number> = {};
  for (const s of schemes) {
    categoryCountMap[s.category] = (categoryCountMap[s.category] || 0) + 1;
  }

  const getCountLabel = (cat: string) => {
    const num = categoryCountMap[cat] || 0;
    return `${num} ${num === 1 ? "Scheme" : "Schemes"}`;
  };

  const categories = [
    {
      name: "Farmer Subsidies",
      count: getCountLabel("Farmer"),
      icon: Wheat,
      href: "/schemes?category=Farmer",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-300",
    },
    {
      name: "Women Empowerment",
      count: getCountLabel("Women"),
      icon: Users,
      href: "/schemes?category=Women",
      color: "text-pink-600 bg-pink-50 border-pink-200 dark:bg-pink-950/60 dark:border-pink-800 dark:text-pink-300",
    },
    {
      name: "Student Scholarships",
      count: getCountLabel("Student"),
      icon: GraduationCap,
      href: "/schemes?category=Student",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300",
    },
    {
      name: "Business & MSME Loans",
      count: getCountLabel("Business"),
      icon: Briefcase,
      href: "/schemes?category=Business",
      color: "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/60 dark:border-amber-800 dark:text-amber-300",
    },
    {
      name: "Housing & Solar Energy",
      count: getCountLabel("Housing"),
      icon: Zap,
      href: "/schemes?category=Housing",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200 dark:bg-cyan-950/60 dark:border-cyan-800 dark:text-cyan-300",
    },
    {
      name: "Health & Senior Citizens",
      count: getCountLabel("Health"),
      icon: HeartPulse,
      href: "/schemes?category=Health",
      color: "text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-950/60 dark:border-rose-800 dark:text-rose-300",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs text-blue-200 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Updated with Union & State Budget 2025 Welfare Releases</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Find All Government Schemes, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-amber-300 to-amber-400">
              Subsidies & Direct Benefits
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Simplified step-by-step guides, eligibility checklists, required documents, and direct official application links without middlemen.
          </p>

          {/* Quick Search Action Bar */}
          <div className="max-w-2xl mx-auto">
            <form action="/schemes" method="GET" className="relative flex items-center shadow-2xl">
              <input
                type="text"
                name="search"
                placeholder="Search by scheme name (e.g., PM Kisan, Ladki Bahin, Mudra, Solar)..."
                className="w-full pl-5 pr-28 sm:pr-36 py-4 rounded-2xl bg-white text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-blue-400/30 placeholder-slate-400 font-medium"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 sm:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center space-x-1.5 shadow"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>
          </div>

          {/* Trending Scheme Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-300">
            <span className="text-slate-400 font-semibold">Trending Now:</span>
            <Link
              href="/schemes/pm-kisan-samman-nidhi-status-ekyc"
              className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 px-3 py-1 rounded-full text-blue-300 transition"
            >
              PM Kisan 19th Installment
            </Link>
            <Link
              href="/schemes/mukhyamantri-majhi-ladki-bahin-yojana-maharashtra"
              className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 px-3 py-1 rounded-full text-pink-300 transition"
            >
              Majhi Ladki Bahin
            </Link>
            <Link
              href="/schemes/pm-surya-ghar-muft-bijli-yojana-rooftop-solar"
              className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 px-3 py-1 rounded-full text-amber-300 transition"
            >
              PM Surya Ghar Solar
            </Link>
            <Link
              href="/schemes/pm-mudra-yojana-business-loan"
              className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 px-3 py-1 rounded-full text-emerald-300 transition"
            >
              Mudra Loan ₹20L
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* AdSense Unit #1: Top Leaderboard Placement */}
        <AdBanner slotId="homepage-top-leaderboard" format="horizontal" label="ADVERTISEMENT" />

        {/* Category Grid Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Explore Schemes by Category
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Browse government welfare programs tailored to your profile
              </p>
            </div>
            <Link
              href="/schemes"
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all rounded-2xl p-4 text-center flex flex-col items-center justify-between group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 border ${cat.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{cat.count}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Schemes Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  High Demand & Popular Schemes
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Schemes with active enrollment deadlines and direct financial grants
              </p>
            </div>
            <Link
              href="/schemes"
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
            >
              <span>Explore All Schemes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </section>

        {/* Interactive Eligibility Tool (Boosts Dwell Time & Ad Impressions) */}
        <section>
          <EligibilityChecker />
        </section>

        {/* AdSense Unit #2: Mid-Content Responsive Rectangle */}
        <AdBanner slotId="homepage-mid-banner" format="auto" label="SPONSORED LINKS" />

        {/* Latest News & Application Deadlines */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Latest Yojana News & Status Alerts
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Official circulars, installment dates, and deadline extensions
              </p>
            </div>
            <Link
              href="/news"
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNews.map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span>{item.publishedAt}</span>
                  </div>
                  <Link href={`/news/${item.slug}`}>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base leading-snug mb-2 transition">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
                  <span className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                    <Eye className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                      {(item.views || 0).toLocaleString()}
                    </span>
                    <span className="text-[11px]">reads</span>
                  </span>
                  <Link
                    href={`/news/${item.slug}`}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
                  >
                    <span>Read Full Update</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* E-E-A-T AdSense Trust Factor Section */}
        <section className="bg-slate-100/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Why Rely on Yojana Updates?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We translate convoluted official government notifications into simple, actionable steps so every eligible citizen can access public benefits without paying corrupt agents or intermediaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Verified Official Sources</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Every scheme guide cites direct links to authentic government portals (.gov.in/.nic.in).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Clear Eligibility Criteria</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Detailed checklists of required documents, income limits, and age guidelines before you apply.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">100% Free Public Resource</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We never charge citizens or ask for private banking credentials or passwords.
              </p>
            </div>
          </div>
        </section>

        {/* AdSense Unit #3: Bottom Unit */}
        <AdBanner slotId="homepage-bottom-unit" format="auto" label="ADVERTISEMENT" />
      </div>
    </div>
  );
}

