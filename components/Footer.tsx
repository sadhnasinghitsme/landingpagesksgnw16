import { PhoneIcon } from "./icons";

function Social({ label, d }: { label: string; d: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-white/15 text-cream/80 hover:border-gold hover:text-gold-light"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d={d} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/75">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl text-cream">SKS World School</p>
            <p className="mt-2 text-sm">
              Greater Noida West &middot; CBSE Affiliation No. 2134098
              <br />
              SKS Educational &amp; Social Trust &middot; Chairman Shri S.K. Sharma
            </p>
            <p className="mt-3 text-sm">
              HS-04, Sector-16, Greater Noida West, Uttar Pradesh
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-eyebrow text-gold-light">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919891081270" className="inline-flex items-center gap-2 hover:text-cream">
                  <PhoneIcon width={15} height={15} /> +91-9891081270
                </a>
              </li>
              <li>
                <a href="mailto:contact@skswsgnw.ac.in" className="hover:text-cream">
                  contact@skswsgnw.ac.in
                </a>
              </li>
              <li>
                Child Helpline (India):{" "}
                <a href="tel:1098" className="font-semibold text-cream hover:text-gold-light">
                  1098
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-eyebrow text-gold-light">
              Follow
            </p>
            <div className="flex gap-2">
              <Social
                label="Facebook"
                d="M13 22v-8h3l1-4h-4V7.5C13 6.6 13.3 6 14.7 6H17V2.3C16.6 2.2 15.3 2 13.8 2 10.7 2 9 3.7 9 7v3H6v4h3v8h4z"
              />
              <Social
                label="Instagram"
                d="M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm3.3 15A3.3 3.3 0 0 1 17 20.3H7A3.3 3.3 0 0 1 3.7 17V7A3.3 3.3 0 0 1 7 3.7h10A3.3 3.3 0 0 1 20.3 7v10zm-2.8-9.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
              />
              <Social
                label="YouTube"
                d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zm-13 3V9l5.2 3-5.2 3z"
              />
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-cream/50">
          &copy; {new Date().getFullYear()} SKS World School, Greater Noida West.
          Admission enquiry landing page. For complete information visit
          skswsgnw.ac.in.
        </p>
      </div>
    </footer>
  );
}
