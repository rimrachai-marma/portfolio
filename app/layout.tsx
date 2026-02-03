import type { Metadata } from "next";

import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
  JetBrains_Mono,
} from "next/font/google";

import { cookies } from "next/headers";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ThemeProvider, {
  ThemePreference,
} from "@/components/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rimrachai Marma",
    template: "%s - Rimrachai Marma",
  },

  description: "My online place for thoughts and musings",
  keywords: [
    "Rimrachai",
    "Marma",
    "Developer",
    "Engineer",
    "Software",
    "Devops",
  ],

  openGraph: {
    title: "Rimrachai Marma - Software Developer",
    description: "My online place for thoughts and musings",
    url: "https://rimrachai.com",
    siteName: "Rimrachai Marma",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/60957299?v=4",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rimrachai Marma - Software Developer",
    description: "My online place for thoughts and musings",
    images: ["https://avatars.githubusercontent.com/u/60957299?v=4"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get("theme")?.value ?? null) as ThemePreference;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rimrachai Marma",
    jobTitle: "Software Developer",
    url: "https://rimra.vercel.app",
    image: "https://avatars.githubusercontent.com/u/60957299?v=4",
    email: "mailto:rimrachai02@gmail.com",
    sameAs: [
      "https://github.com/rimrachai-marma",
      "https://www.linkedin.com/in/rimrachai-marma",
    ],
  };

  return (
    <html
      lang="en"
      className={theme === "dark" ? "dark" : ""}
      data-theme={theme ?? undefined}
    >
      <body
        className={`${plusJakartaSans.className} ${spaceGrotesk.variable} ${bricolage.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <ThemeProvider initialTheme={theme}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
            >
              Skip to main content
            </a>
            <main
              id="main-content"
              className="container max-w-5xl mx-auto px-4 tablet_portrait:px-14 py-12 flex-1"
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
