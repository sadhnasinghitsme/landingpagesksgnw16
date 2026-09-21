import { EnquiryForm } from "./EnquiryForm";

export function FinalCTA() {
  return (
    <section id="apply" className="band-maroon">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Visit Us in Sector 16, Greater Noida West</span>
          <h2 className="h2">Ready to Apply for Class 6-12?</h2>
          <p className="lede text-cream/85">
            Send an enquiry and our admissions team will guide you through the
            entrance test, documents and fee structure. Or call +91-9891081270.
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
                  3 km Crossing Republik &middot; 5 km Sector 119, Noida &middot;
                  7.5 km Sectors 51/52/71/72, Noida &middot; 9 km Noida City
                  Centre Metro &middot; 12 km Sector 62 &middot; 14 km Indirapuram
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
              Class 6-12 Admission Enquiry: Get Fee Structure &amp; Callback
            </h3>
            <p className="mb-4 mt-1 text-sm text-ink/70">
              Share a few details and our admissions team will call you back
              with the fee structure, seat availability and a campus visit slot.
            </p>
            <EnquiryForm source="final-cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
