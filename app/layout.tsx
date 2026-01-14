import type { Metadata } from "next";
import { Rubik, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ThemeProvider, {
  ThemePreference,
} from "@/components/providers/ThemeProvider";

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
  keywords: [
    "Rimrachai",
    "Marma",
    "Developer",
    "Engineer",
    "Software",
    "Devops",
  ],
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
        className={`${rubik.className} ${jetBrainsMono.variable} antialiased`}
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
          <Header />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
          >
            Skip to main content
          </a>
          <main
            id="main-content"
            className="container max-w-5xl mx-auto px-4 tablet_portrait:px-14 py-12"
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

{
  /* <div className="fixed top-0 right-0 z-50 pointer-events-none">
  <div className="absolute top-4 right-[-45px] bg-orange-700/70 text-white tracking-wider text-xs text-center px-10 py-1 rotate-45 shadow-md">
    Under Construction
  </div>
</div>; */
}
