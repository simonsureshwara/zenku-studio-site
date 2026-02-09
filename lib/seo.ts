import type { Metadata } from "next";
import { siteConfig } from "./utils";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zenku Studio | Websites, die Leads liefern",
    template: "%s | Zenku Studio",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: "Zenku Studio",
    description: siteConfig.description,
    siteName: "Zenku Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenku Studio",
    description: siteConfig.description,
  },
};

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zenku Studio",
    url: siteConfig.url,
    email: siteConfig.email,
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zenku Studio",
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/projects?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
};
