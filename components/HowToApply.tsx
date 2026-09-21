const STEPS = [
  {
    n: 1,
    title: "Registration",
    body: "Submit the enquiry form or visit the school to collect and fill the registration form.",
  },
  {
    n: 2,
    title: "Documentation",
    body: "Provide birth certificate, previous report card / transfer certificate, Aadhaar and photographs.",
  },
  {
    n: 3,
    title: "Test / Interview",
    body: "Sit a written assessment in core subjects, followed by a short interview with the student and a parent.",
  },
  {
    n: 4,
    title: "Fee Deposit",
    body: "On selection, confirm the seat by depositing the admission and term fee within the given date.",
  },
  {
    n: 5,
    title: "Admission Confirmed",
    body: "Receive the admission confirmation, section allotment and transport / uniform details.",
  },
];

export function HowToApply() {
  return (
    <section id="how-to-apply" className="band-dark">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Process</span>
          <h2 className="h2">How to Apply — Admission Process</h2>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n} className="card-dark p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 font-display text-lg text-gold-light">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm text-cream/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
