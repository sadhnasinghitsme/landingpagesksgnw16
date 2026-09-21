const STEPS = [
  {
    n: 1,
    title: "Enquire / Register",
    body: "Enquire or register online, or collect the form at the school office.",
  },
  {
    n: 2,
    title: "Entrance Test",
    body: "Appear for the entrance test in English, Mathematics, Science and Hindi.",
  },
  {
    n: 3,
    title: "Interaction",
    body: "Meet the Principal or school counsellor for a short interaction.",
  },
  {
    n: 4,
    title: "Documents",
    body: "Submit the application form, self-attested birth certificate copy, Transfer Certificate (Class 2 onwards), medical fitness certificate, parents' address and ID proof, and photographs.",
  },
  {
    n: 5,
    title: "Admission Confirmed",
    body: "Admission is confirmed on payment of the fee.",
  },
];

export function HowToApply() {
  return (
    <section id="how-to-apply" className="band-dark">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Process</span>
          <h2 className="h2">Class 6 to 12 Admission Process</h2>
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
