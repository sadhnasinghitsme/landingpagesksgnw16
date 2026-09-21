import { ChevronDownIcon } from "./icons";
import { HOUSE_OPEN_BORDER, HOUSE_OPEN_TEXT } from "./HouseAccent";

/* Native <details> accordion — zero JavaScript. */

const FAQS = [
  {
    q: "Which classes and streams are open for admission?",
    a: "SKS World School admits students in Class 6 to 12. Class 11 has all streams available.",
  },
  {
    q: "Are admissions open in Class 11?",
    a: "Yes. Fill the admission form online or at school, then appear for a written test.",
  },
  {
    q: "What is the admission process?",
    a: "Register online or at the school office, appear for the entrance test in English, Mathematics, Science and Hindi, complete the interaction and submit documents. Admission is confirmed on payment of the fee.",
  },
  {
    q: "Which documents are required?",
    a: "Application form, self-attested birth certificate copy, Transfer Certificate, medical fitness certificate, parents' address and ID proof, and photographs.",
  },
  {
    q: "Is SKS World School CBSE affiliated, and where is it?",
    a: "Yes, CBSE Affiliation No. 2134098. The school is at HS-04, Sector-16, Greater Noida West (Noida Extension).",
  },
  {
    q: "What is the fee structure?",
    a: "The 2026-27 Composite Fee Structure is on the school website. Submit the form or message us on WhatsApp and we will share the fees for your child's class.",
  },
  {
    q: "Is school transport available?",
    a: "Yes. Bus routes are customised to pick-up points, and every bus is mobile-connected with GPS and CCTV.",
  },
  {
    q: "What is the class size and student-teacher ratio?",
    a: "Classes 6 to 12 have up to 35 students per class. The student-teacher ratio is 1:20.",
  },
  {
    q: "Are meals provided?",
    a: "Meals are available at the school canteen on a pay-and-buy basis.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="band-cream">
      <div className="section">
      <div className="mb-10">
        <span className="eyebrow">Questions</span>
        <h2 className="h2">Frequently Asked Questions</h2>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-cream-border overflow-hidden rounded-card border border-cream-border bg-white shadow-card">
        {FAQS.map((f, i) => (
          <details
            key={f.q}
            className={`group border-l-4 border-transparent transition-colors hover:bg-cream/40 ${HOUSE_OPEN_BORDER[i % 4]}`}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-base text-brand marker:hidden">
              {f.q}
              <ChevronDownIcon
                width={20}
                height={20}
                className={`shrink-0 text-gold-dark transition-transform group-open:rotate-180 ${HOUSE_OPEN_TEXT[i % 4]}`}
              />
            </summary>
            <p className="px-5 pb-5 text-sm text-ink/75">{f.a}</p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
