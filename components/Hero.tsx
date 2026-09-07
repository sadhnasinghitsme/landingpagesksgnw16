import { EnquiryForm } from "./EnquiryForm";
import { HeroCarousel } from "./HeroCarousel";
import { CheckIcon } from "./icons";

const TRUST_BULLETS = [
  "Affiliated to CBSE, New Delhi (Affiliation No. 2134098)",
  "Teacher–Student Ratio of 1:20",
  "Robotic Lab in association with LEGO",
  "Co-educational, English-medium, Pre-Nursery onwards",
  "International School Award 2018-21",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex items-center overflow-hidden lg:min-h-[calc(100vh-6rem)]"
    >
      <HeroCarousel />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-10 gap-y-6 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* A — headline */}
        <div className="max-w-xl lg:col-start-1 lg:row-start-1">
          <span className="text-[11.5px] font-semibold uppercase tracking-eyebrow text-gold-light">
            Admissions Open 2026-27
          </span>
          <h1 className="mt-3 font-display text-[30px] leading-tight text-white sm:text-5xl">
            One of the Best Schools in Greater Noida West
          </h1>
          <p className="mt-3 max-w-prose text-sm text-white/90 sm:text-base">
            SKS World School is an English-medium, co-educational institution
            under the SKS Educational &amp; Social Trust, led by Chairman Shri
            S.K. Sharma — providing CBSE curriculum-based education in the heart
            of Greater Noida West.
          </p>
        </div>

        {/* B — enquiry form (kept high so it needs no scroll on mobile) */}
        <div className="rounded-card border border-cream-border bg-white p-5 text-ink shadow-lift sm:p-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <p className="mb-1 text-[11.5px] font-semibold uppercase tracking-eyebrow text-gold-dark">
            Quick Enquiry Form
          </p>
          <h2 className="font-display text-xl text-brand">Enquire About Admission</h2>
          <p className="mb-4 mt-1 text-sm text-ink/70">
            No enquiry fee. Your details stay confidential — our admission team
            will call you back.
          </p>
          <EnquiryForm source="hero" />
        </div>

        {/* C — trust bullets + stat callouts */}
        <div className="max-w-xl lg:col-start-1 lg:row-start-2">
          <ul className="space-y-2.5">
            {TRUST_BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <CheckIcon width={13} height={13} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-card border border-cream-border bg-white p-4 text-center shadow-card">
              <div className="font-display text-3xl text-brand">1:20</div>
              <div className="text-xs text-ink/70 sm:text-sm">
                Teacher–Student Ratio
              </div>
            </div>
            <div className="rounded-card border border-cream-border bg-white p-4 text-center shadow-card">
              <div className="font-display text-3xl text-brand">100%</div>
              <div className="text-xs text-ink/70 sm:text-sm">
                CBSE Board Results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
