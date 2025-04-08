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
      </body>
    </html>
  );
}
