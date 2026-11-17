import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Header, Footer } from "@/components/Shell";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Principal Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "mailto:Knyokolodi@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressCountry: "ZA",
  },
  sameAs: ["https://www.linkedin.com/in/kagiso-nyokolodi"],
  worksFor: {
    "@type": "Organization",
    name: "Nawiri Group",
  },
  knowsAbout: [
    "Frontend architecture",
    "React",
    "TypeScript",
    "AI application engineering",
    "FastAPI",
    "Ruby on Rails",
    "LLM evaluation",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tshwane University of Technology",
  },
};

const personJsonLd = JSON.stringify(personSchema).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Kagiso Nyokolodi",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  category: "technology",
  keywords: [
    "Kagiso Nyokolodi",
    "Principal Software Engineer",
    "Frontend lead",
    "Frontend architecture",
    "AI application engineering",
    "React",
    "TypeScript",
    "FastAPI",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#06090e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personJsonLd }}
        />
        <ScrollProgress />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
