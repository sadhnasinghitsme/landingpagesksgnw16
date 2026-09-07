import type { Metadata, Viewport } from "next";
import { Marcellus, Karla } from "next/font/google";
import "./globals.css";

// Headings — elegant serif, matches the reference theme.
const display = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

// Body — humanist sans, matches the reference theme.
const body = Karla({
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
