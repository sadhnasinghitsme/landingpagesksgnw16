import { EnquiryForm } from "./EnquiryForm";

export function FinalCTA() {
  return (
    <section id="apply" className="band-maroon">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Admissions Open 2026-27</span>
          <h2 className="h2">Give Your Child a Head Start</h2>
          <p className="lede text-cream/85">
            Seats are limited and filled on a first-come basis. Share your
            details and our admission team will guide you through every step.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* contact + map */}
          <div>
            <dl className="space-y-2 text-sm text-cream/85">
              <div>
                <dt className="inline font-semibold text-cream">Address: </dt>
                <dd className="inline">HS-04, Sector-16, Greater Noida West, U.P.</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-cream">Helpline: </dt>
                <dd className="inline">
                  <a href="tel:+919891081270" className="underline">
                    +91-9891081270
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-cream">Email: </dt>
                <dd className="inline">
                  <a href="mailto:contact@skswsgnw.ac.in" className="underline">
                    contact@skswsgnw.ac.in
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-cream">Nearby: </dt>
                <dd className="inline">
                  3 km Crossing Republik &middot; 5 km Sector-119 Noida &middot; 9 km
                  Noida City Centre Metro
                </dd>
              </div>
            </dl>

            <div className="mt-5 overflow-hidden rounded-card border border-white/15">
              <iframe
                title="Map to SKS World School, HS-04, Sector-16, Greater Noida West"
                src="https://www.google.com/maps?q=SKS+World+School+HS-04+Sector+16+Greater+Noida+West&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* form */}
          <div className="rounded-card border border-cream-border bg-white p-6 text-ink shadow-lift sm:p-8">
            <p className="mb-1 text-[11.5px] font-semibold uppercase tracking-eyebrow text-gold-dark">
              Enquire &amp; Find Us
            </p>
            <h3 className="font-display text-2xl text-brand">
              Start Your Admission Enquiry
            </h3>
            <p className="mb-4 mt-1 text-sm text-ink/70">
              Takes less than a minute. No obligation.
            </p>
            <EnquiryForm source="final-cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
