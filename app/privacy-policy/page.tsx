import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryModalProvider } from "@/components/EnquiryModal";
import { StickyTopBar } from "@/components/StickyTopBar";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SKS World School, Greater Noida West (CBSE)",
  description:
    "How SKS World School, Greater Noida West collects, uses and protects the personal information submitted through our admission enquiry form and website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

/**
 * Content is adapted from the school's own published Privacy Policy at
 * https://skswsgnw.ac.in/privacy-policy/ (information collected, how it's
 * used, cookies, data protection, no sale/rental of data), extended with the
 * standard consent / rights / children's-data / policy-changes sections
 * appropriate to this admission-enquiry landing page.
 */
const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Introduction",
    body: (
      <p>
        SKS World School, Greater Noida West (&ldquo;SKS World School&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is an English-medium,
        co-educational school run under the SKS Educational &amp; Social Trust. This
        page explains what personal information we collect through this admission
        enquiry website, why we collect it, how we use and protect it, and the
        choices you have regarding your information. By submitting the enquiry form
        or otherwise using this website, you agree to the practices described in
        this Privacy Policy.
      </p>
    ),
  },
  {
    title: "Information We Collect",
    body: (
      <>
        <p>When you submit our Admission Enquiry form, we collect:</p>
        <ul className="mt-3 grid gap-1.5">
          {[
            "Student name",
            "Parent / guardian name",
            "Phone number",
            "Email address (optional)",
            "Grade / class applying for",
            "Any message or additional details you choose to share",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          We may also collect standard technical information when you browse this
          site — such as your IP address, browser type and pages visited — through
          cookies and analytics tools, to help us understand how the site is used
          and to improve it.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <p>
        We use the information you provide to respond to your admission enquiry,
        contact parents and guardians regarding that enquiry, and share relevant
        school and admissions updates. To reach you, we may use the contact details
        you provide via phone calls, SMS, WhatsApp and email. We do not use your
        information for any purpose unrelated to your admission enquiry without
        your consent.
      </p>
    ),
  },
  {
    title: "Consent",
    body: (
      <p>
        By filling out and submitting the Admission Enquiry form on this website,
        you voluntarily provide your information and consent to us collecting,
        using and storing it as described in this Privacy Policy, for the purpose
        of responding to your admission enquiry. If you do not agree with this
        policy, please do not submit the enquiry form.
      </p>
    ),
  },
  {
    title: "Data Sharing",
    body: (
      <p>
        We do not sell, trade or rent your personal information to any third
        party. Your details are used internally by our admissions team. We may
        share information with trusted service providers who help us operate this
        website and respond to enquiries (for example, hosting, messaging or
        analytics providers), and only to the extent necessary for them to perform
        those services. We may also disclose information where required to do so
        by law or by a competent authority.
      </p>
    ),
  },
  {
    title: "Data Storage & Security",
    body: (
      <p>
        We take reasonable technical and organisational measures to protect the
        personal information you share with us from unauthorised access, misuse,
        alteration or disclosure. While we work to protect your information, no
        method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        This website may use cookies and similar technologies to improve your
        browsing experience, remember your preferences, and understand how
        visitors use our site — for example, through analytics tools. You can
        control or disable cookies through your browser settings; please note that
        some parts of the website may not function as intended if cookies are
        disabled.
      </p>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <>
        <p>In relation to the personal information we hold about you, you may:</p>
        <ul className="mt-3 grid gap-1.5">
          {[
            "Ask us what information we hold about you",
            "Ask us to correct any inaccurate or incomplete information",
            "Ask us to delete your information from our records",
            "Withdraw your consent for us to contact you regarding your enquiry",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us using the details
          below and we will respond within a reasonable time.
        </p>
      </>
    ),
  },
  {
    title: "Children's Data",
    body: (
      <p>
        This website is intended for use by parents and guardians on behalf of
        prospective students. Information about a child — such as the student&apos;s
        name and the class applied for — is submitted to us by a parent or
        guardian, not directly by the child, and is used solely to process the
        admission enquiry.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in
        our practices or for legal or operational reasons. Any changes will be
        posted on this page. We encourage you to review this policy periodically.
      </p>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <p>
        If you have any questions or concerns about this Privacy Policy or how
        your information is handled, please contact us:
        <br />
        <span className="mt-2 block">
          <span className="font-semibold text-ink">Address: </span>
          HS-04, Sector-16, Greater Noida West, U.P.
        </span>
        <span className="block">
          <span className="font-semibold text-ink">Phone: </span>
          <a href="tel:+919891081270" className="text-brand underline">
            +91-9891081270
          </a>
        </span>
        <span className="block">
          <span className="font-semibold text-ink">Email: </span>
          <a href="mailto:contact@skswsgnw.ac.in" className="text-brand underline">
            contact@skswsgnw.ac.in
          </a>
        </span>
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <EnquiryModalProvider>
      <StickyTopBar />
      <main>
        <section className="band-maroon">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cream/80 hover:text-gold-light"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </Link>

            <span className="mt-6 block text-[11.5px] font-semibold uppercase tracking-eyebrow text-gold-light">
              Legal
            </span>
            <h1 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-cream/80 sm:text-base">
              Last updated: September 2026 &middot; SKS World School, Greater
              Noida West
            </p>
          </div>
        </section>

        <section className="band-cream">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="rounded-card border border-cream-border bg-white p-6 shadow-card sm:p-10">
              <p className="text-sm text-ink/70 sm:text-base">
                This Privacy Policy applies to this admission enquiry website for
                SKS World School, Greater Noida West, and covers the information we
                collect when you use it — most importantly, when you submit our
                Admission Enquiry form.
              </p>

              <div className="mt-10 space-y-10">
                {SECTIONS.map((s, i) => (
                  <div key={s.title} id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                    <h2 className="font-display text-xl text-brand sm:text-2xl">
                      {i + 1}. {s.title}
                    </h2>
                    <div className="mt-2.5 text-sm leading-relaxed text-ink/80 sm:text-base">
                      {s.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBottomBar />
      <FloatingActions />
    </EnquiryModalProvider>
  );
}
