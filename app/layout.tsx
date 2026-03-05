import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { BannerAd } from "@/components/BannerAd";
import { TOP_ADS, BOTTOM_ADS } from "@/data/ads";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://regs.stormwaterworld.com"),
  title: "Stormwater Regulation Directory",
  description:
    "Cross-reference stormwater construction permit regulations across all 50 U.S. states. Built for contractors, engineers, and project managers working in multiple states.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SW</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 leading-tight">
                  Stormwater Directory
                </p>
                <p className="text-xs text-slate-500 hidden sm:block">
                  U.S. Construction Stormwater Regulations
                </p>
              </div>
            </Link>
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                Directory
              </Link>
              <Link
                href="/compare"
                className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Compare States
              </Link>
            </nav>
          </div>
        </header>

        {/* Top banner ad */}
        <BannerAd ads={TOP_ADS} position="top" />

        {/* Main content — extra bottom padding when sticky bar is active */}
        <main className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 ${BOTTOM_ADS.length > 0 ? "pb-28" : ""}`}>
          {children}
        </main>

        {/* Footer */}
        <footer className={`mt-16 border-t border-slate-200 bg-white ${BOTTOM_ADS.length > 0 ? "mb-28" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:justify-between">
              <p>
                Stormwater Regulation Directory — for informational purposes only.
              </p>
              <p>
                Always verify requirements with the applicable state agency before construction.
              </p>
            </div>
          </div>
        </footer>

        {/* Bottom sticky banner ad */}
        <BannerAd ads={BOTTOM_ADS} position="bottom" />
      </body>
    </html>
  );
}
