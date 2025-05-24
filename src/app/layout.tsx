import type { Metadata } from "next";
import { Rubik, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rimrachai Marma",
    template: "%s - Rimrachai Marma",
  },

  description: "My online place for thoughts and musings",
  keywords: "Rimrachai, Marma, Developer, Software, Devops, Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="container max-w-4xl mx-auto px-4 tablet_portrait:px-14 py-12">
          {children}
        </main>
        <Footer />

        {/* temporary */}
        <div className="fixed top-0 right-0 z-50 pointer-events-none">
          <div className="absolute top-4 right-[-45px] bg-orange-700/70 text-white tracking-wider text-xs text-center px-10 py-1 rotate-45 shadow-md">
            Under Construction
          </div>
        </div>
      </body>
    </html>
  );
}
