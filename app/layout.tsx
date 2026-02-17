import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";
import { JsonLd } from "@/components/seo/json-ld";
import { loadMessages } from "@/lib/i18n/load-messages";
import { defaultMetadata, jsonLd } from "@/lib/seo";

const inter = localFont({
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/playfair-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await loadMessages("de");

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <NextIntlClientProvider locale="de" messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="px-4 pb-24 pt-24 md:px-6 lg:px-8">
              <PageTransition>{children}</PageTransition>
            </main>
            <JsonLd data={jsonLd.organization} />
            <JsonLd data={jsonLd.website} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
