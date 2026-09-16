import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Headings — Playfair Display, applied globally via the --font-display
// CSS variable (see globals.css `h1,h2,h3,h4` rule and tailwind.config.ts
// `fontFamily.display`). This is the single source of truth for heading
// fonts — no component or stylesheet should declare its own font-family.
const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

// Body, forms & buttons — Inter, applied globally via the --font-body
// CSS variable (see tailwind.config.ts `fontFamily.sans`, used by the
// `font-sans` class on <body> that every form field and button inherits).
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://skswsgnw.ac.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Admissions Open 2026-27 | SKS World School, Greater Noida West (CBSE)",
  description:
    "Apply for admission to SKS World School, Greater Noida West — CBSE affiliated (No. 2134098), 1:20 teacher-student ratio, 100% board results, International School Award 2018-21, LEGO Robotics Lab. Pre-Nursery onwards. Enquire now: +91-9891081270.",
  keywords: [
    "SKS World School",
    "best school in Greater Noida West",
    "CBSE school Greater Noida West",
    "admission Greater Noida West",
    "Sector 16 Greater Noida West school",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "SKS World School, Greater Noida West",
    title: "Admissions Open | SKS World School, Greater Noida West (CBSE)",
    description:
      "CBSE affiliated, 1:20 ratio, 100% board results, International School Award 2018-21, LEGO Robotics Lab. Pre-Nursery onwards. Enquire: +91-9891081270.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions Open | SKS World School, Greater Noida West",
    description:
      "CBSE affiliated. 1:20 ratio. 100% board results. Enquire: +91-9891081270.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7A1F2B",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "SKS World School, Greater Noida West",
  url: SITE_URL,
  telephone: "+91-9891081270",
  email: "contact@skswsgnw.ac.in",
  description:
    "Co-educational, English-medium CBSE school (Affiliation No. 2134098) in Greater Noida West, run by SKS Educational & Social Trust.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HS-04, Sector-16, Greater Noida West",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
