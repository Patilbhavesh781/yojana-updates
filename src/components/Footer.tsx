import Link from "next/link";
import { ShieldCheck, ExternalLink, Heart, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AdSense Mandatory Disclaimer Alert Box */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 sm:p-5 mb-10 text-xs text-slate-300 flex items-start space-x-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-white block text-sm mb-1">
              Important Disclaimer & Public Notice
            </span>
            <strong>Yojana Updates (yojanaupdates.com)</strong> is an independent educational and informational portal. This website is <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of India, any State Government, or any of their agencies or ministries</strong>. Official government websites end in <code className="text-amber-300 bg-slate-900 px-1 py-0.5 rounded">.gov.in</code> or <code className="text-amber-300 bg-slate-900 px-1 py-0.5 rounded">.nic.in</code>. All information provided here is gathered from public gazettes, press releases, and official portals for user awareness. Users are strictly advised to verify all scheme terms directly on the respective official government portals before applying.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                Y
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Yojana<span className="text-blue-400">Updates</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted guide to Central and State Government schemes, welfare programs, scholarship alerts, and direct benefit transfer (DBT) updates simplified in plain language.
            </p>
            {/* Community Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Updates</span>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
              >
                <Send className="w-4 h-4" />
                <span>Telegram Alerts</span>
              </a>
            </div>
          </div>

          {/* Scheme Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/schemes?category=Farmer" className="hover:text-blue-400 transition">
                  Farmer Subsidies & PM Kisan
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=Women" className="hover:text-blue-400 transition">
                  Women Welfare & Ladki Bahin
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=Student" className="hover:text-blue-400 transition">
                  Student Scholarships (NSP)
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=Business" className="hover:text-blue-400 transition">
                  Mudra & MSME Business Loans
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=Housing" className="hover:text-blue-400 transition">
                  Solar Rooftop & PM Awas
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=Health" className="hover:text-blue-400 transition">
                  Ayushman Bharat Health Card
                </Link>
              </li>
            </ul>
          </div>

          {/* State Specific Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              State Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/schemes?state=Maharashtra" className="hover:text-blue-400 transition">
                  Maharashtra Schemes
                </Link>
              </li>
              <li>
                <Link href="/schemes?state=Uttar Pradesh" className="hover:text-blue-400 transition">
                  Uttar Pradesh Schemes
                </Link>
              </li>
              <li>
                <Link href="/schemes?state=Bihar" className="hover:text-blue-400 transition">
                  Bihar Welfare Schemes
                </Link>
              </li>
              <li>
                <Link href="/schemes?state=Rajasthan" className="hover:text-blue-400 transition">
                  Rajasthan Schemes
                </Link>
              </li>
              <li>
                <Link href="/schemes?state=Gujarat" className="hover:text-blue-400 transition">
                  Gujarat Yojana Updates
                </Link>
              </li>
              <li>
                <Link href="/schemes?state=All India" className="hover:text-blue-400 transition font-semibold text-amber-300">
                  All Central Government
                </Link>
              </li>
            </ul>
          </div>

          {/* Essential AdSense Compliance Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us & Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact Us / Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                  Privacy Policy (GDPR / CCPA)
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-400 transition">
                  Non-Government Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-blue-400 transition">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Yojana Updates Portal. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Built with Next.js, Tailwind & MongoDB for Google AdSense monetization.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

