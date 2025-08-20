import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Kumar - Software Engineer & CTO",
  description: "Portfolio of Mohit Kumar, CTO at MoroEsports, specializing in AI, Machine Learning, and Scalable Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <html lang="en">
            <body className="bg-gray-50 min-h-screen">
                <header className="border-b bg-white shadow-sm">
                  <nav className="max-w-6xl mx-auto flex items-center justify-between py-6 px-8">
                    <Link href="/" className="font-bold text-2xl tracking-tight hover:text-blue-700 transition">portfolio</Link>
                    <div className="flex gap-10 text-lg">
                      <Link href="/about" className="hover:text-blue-600 font-small">ABOUT ME</Link>
                      <Link href="/projects" className="hover:text-blue-600 font-small">PROJECTS</Link>
                    </div>
                  </nav>
                </header>
              <main className="max-w-6xl mx-auto px-8 py-10">
                {children}
                <SpeedInsights />
              </main>
            </body>
          </html>
  );
}
