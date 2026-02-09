export type Project = {
  title: string;
  slug: string;
  shortSummary: string;
  industry: string;
  servicesProvided: string[];
  stack: string[];
  year: string;
  results: { label: string; value: string }[];
  testimonial?: { quote: string; name: string; role: string };
  images: { src: string; alt: string }[];
  sections: {
    challenge: string;
    approach: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    title: "Aurelia Clinics",
    slug: "aurelia-clinics",
    shortSummary:
      "Mehr qualifizierte Beratungstermine durch klaren Funnel und ultraschnelle Landingpages.",
    industry: "Ästhetische Medizin",
    servicesProvided: ["UX Audit", "UI Design", "Next.js Entwicklung", "Tracking"],
    stack: ["Next.js", "TypeScript", "GA4", "Meta Pixel"],
    year: "2025",
    results: [
      { label: "Conversion-Rate", value: "+74 %" },
      { label: "LCP", value: "1.4s" },
      { label: "Terminanfragen", value: "+58 %" },
    ],
    testimonial: {
      quote: "Zenku hat unsere Website in einen echten Vertriebskanal verwandelt.",
      name: "Dr. Lara Neumann",
      role: "Geschäftsführerin",
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1600&q=80",
        alt: "Modernes Klinik Dashboard",
      },
    ],
    sections: {
      challenge:
        "Viele Klicks, aber kaum Terminbuchungen. Das alte Design war überladen und langsam.",
      approach:
        "Wir haben die Informationsarchitektur vereinfacht, starke Trust-Elemente ergänzt und ein datengetriebenes Buchungs-Setup implementiert.",
      outcome:
        "Mehr relevante Leads bei gleichzeitig geringeren Akquisekosten und sauber messbarer Performance.",
    },
  },
  {
    title: "Voltgrid Systems",
    slug: "voltgrid-systems",
    shortSummary:
      "B2B-Website als Vertriebsbeschleuniger mit präziser Positionierung für Enterprise-Kunden.",
    industry: "Energie & Infrastruktur",
    servicesProvided: ["Brand Messaging", "Web Design", "CMS Setup", "SEO Basis"],
    stack: ["Next.js", "Sanity", "Vercel", "Search Console"],
    year: "2024",
    results: [
      { label: "Demo-Anfragen", value: "+63 %" },
      { label: "Sichtbarkeit", value: "+41 %" },
      { label: "Absprungrate", value: "-29 %" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
        alt: "Energieplattform Oberfläche",
      },
    ],
    sections: {
      challenge: "Komplexes Angebot, das online nicht verständlich kommuniziert wurde.",
      approach:
        "Wir haben Angebotsmodule in klare Use-Cases übersetzt und starke Conversion-Elemente auf Entscheider-Ebene gebaut.",
      outcome:
        "Höhere Abschlussqualität im Vertrieb durch bessere Vorqualifizierung auf der Website.",
    },
  },
  {
    title: "Mysa Interiors",
    slug: "mysa-interiors",
    shortSummary:
      "Premium E-Commerce Erlebnis mit Editorial-Look und performanter Produktinszenierung.",
    industry: "Interior & Lifestyle",
    servicesProvided: ["UX/UI", "Frontend Engineering", "Performance Optimierung"],
    stack: ["Next.js", "Shopify", "Framer Motion"],
    year: "2025",
    results: [
      { label: "AOV", value: "+22 %" },
      { label: "Mobile CR", value: "+38 %" },
      { label: "CLS", value: "0.02" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80",
        alt: "Minimalistischer Innenraum",
      },
    ],
    sections: {
      challenge:
        "Gute Produkte, aber ein Shop ohne emotionale Führung und mit schwacher Mobile-Performance.",
      approach:
        "Visuelle Hierarchie, Storytelling-Blöcke und optimierte Produktseiten mit Fokus auf Kaufpsychologie.",
      outcome: "Spürbar höhere Warenkörbe und bessere Conversion auf mobilen Endgeräten.",
    },
  },
  {
    title: "Skalio Consulting",
    slug: "skalio-consulting",
    shortSummary: "Thought-Leadership Website für Beratungsunternehmen mit klarer Lead-Strecke.",
    industry: "Consulting",
    servicesProvided: ["Strategie", "Website Relaunch", "SEO Content Struktur"],
    stack: ["Next.js", "TypeScript", "HubSpot"],
    year: "2024",
    results: [
      { label: "Inbound Leads", value: "+88 %" },
      { label: "Time on Site", value: "+46 %" },
      { label: "Core Keywords", value: "Top 10" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        alt: "Business Meeting Interface",
      },
    ],
    sections: {
      challenge:
        "Unklare Differenzierung gegenüber Wettbewerbern und keine strukturierte Lead-Mechanik.",
      approach:
        "Neue Positionierung, präzise Leistungsseiten und Conversion-orientierte Content-Architektur.",
      outcome: "Planbar mehr qualifizierte Erstgespräche mit C-Level Ansprechpartnern.",
    },
  },
  {
    title: "Nuvia Dental",
    slug: "nuvia-dental",
    shortSummary:
      "Standortübergreifende Praxiswebsite mit lokalem SEO-Fokus und schneller Terminführung.",
    industry: "Healthcare",
    servicesProvided: ["Local SEO", "Website System", "Analytics"],
    stack: ["Next.js", "Google Business", "GA4"],
    year: "2025",
    results: [
      { label: "Lokale Rankings", value: "+57 %" },
      { label: "Anrufe", value: "+44 %" },
      { label: "Terminquote", value: "+36 %" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
        alt: "Zahnarztpraxis modern",
      },
    ],
    sections: {
      challenge:
        "Unterschiedliche Standorte ohne konsistente Nutzerführung und lokale Sichtbarkeit.",
      approach:
        "Wir haben eine skalierbare Seitenstruktur mit lokalen Landingpages und klarer Conversion-Route umgesetzt.",
      outcome: "Mehr organische Anfragen je Standort und deutlich bessere Nutzerzufriedenheit.",
    },
  },
  {
    title: "Peakforge SaaS",
    slug: "peakforge-saas",
    shortSummary:
      "SaaS Launch Site mit klarer Produktstory, Demo-Funnel und eventbasiertem Tracking.",
    industry: "B2B SaaS",
    servicesProvided: ["Go-to-Market Website", "Motion UI", "Tracking Setup"],
    stack: ["Next.js", "Framer Motion", "PostHog"],
    year: "2025",
    results: [
      { label: "Demo-Book Rate", value: "+67 %" },
      { label: "Page Speed", value: "97" },
      { label: "CAC", value: "-18 %" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
        alt: "SaaS Produkt Dashboard",
      },
    ],
    sections: {
      challenge: "Produkt war erklärungsbedürftig und die alte Website konvertierte kaum.",
      approach:
        "Wir entwickelten eine narrative Landingpage mit modularen Screens, Proof-Elementen und klarer CTA-Kadenz.",
      outcome: "Schnelleres Pipeline-Wachstum dank besserer Aktivierung neuer Besucher.",
    },
  },
];
