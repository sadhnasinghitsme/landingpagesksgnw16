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
  title: "Class 6-12 Admission in Greater Noida West | CBSE School",
  description:
    "SKS World School, Sector 16, Greater Noida West (Noida Extension). CBSE co-ed school for Class 6 to 12. Enquire for admission and fee structure.",
  keywords: [
    "SKS World School",
    "Class 6 to 12 admission Greater Noida West",
    "class 11 admission Noida Extension",
    "CBSE school Greater Noida West",
    "school admission in Greater Noida West",
    "Sector 16 Greater Noida West school",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "SKS World School, Greater Noida West",
    title: "Class 6-12 Admission in Greater Noida West | CBSE School",
    description:
      "SKS World School, Sector 16, Greater Noida West. CBSE co-ed school for Class 6 to 12. Enquire for admission and fee structure: +91-9891081270.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Class 6-12 Admission in Greater Noida West | CBSE School",
    description:
      "CBSE co-ed school for Class 6 to 12, Sector 16, Greater Noida West. Enquire: +91-9891081270.",
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
