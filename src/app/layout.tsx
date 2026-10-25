import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Yojana Updates 2025: All Central & State Government Schemes, News, Eligibility & Apply Online",
    template: "%s | Yojana Updates",
  },
  description:
    "Comprehensive guide to all Indian Central & State Government welfare schemes, farmer subsidies, student scholarships, women empowerment schemes, eligibility criteria, required documents, and official direct application links.",
  keywords: [
    "Sarkari Yojana 2025",
    "PM Kisan status",
    "Mukhyamantri Majhi Ladki Bahin Yojana",
    "Government schemes in India",
    "NSP Scholarship apply online",
    "PM Mudra loan eligibility",
    "Ayushman Bharat card",
    "PM Surya Ghar solar subsidy",
  ],
  authors: [{ name: "Yojana Updates Editorial Team" }],
  creator: "Yojana Updates",
  publisher: "Yojana Updates",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yojana Updates: Central & State Government Schemes Portal",
    description: "Check eligibility, required documents, benefits, and direct official application steps for all government schemes.",
    url: "https://yojanaupdates.com",
    siteName: "Yojana Updates",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yojana Updates: Central & State Government Schemes Portal",
    description: "All government schemes, news, deadlines, and eligibility criteria in simple language.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-Flicker Dark Mode Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Google AdSense Script */}
        {adsenseClientId && !adsenseClientId.includes("demo") && (
          <Script
            id="google-adsense"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-150">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

