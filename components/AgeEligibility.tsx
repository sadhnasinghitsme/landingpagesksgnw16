import { HOUSE_BORDER_L } from "./HouseAccent";

const ROWS = [
  {
    stage: "Middle",
    classes: "Class 6",
    basis: "Entrance test in English, Mathematics, Science and Hindi.",
  },
  {
    stage: "Middle",
    classes: "Classes 7 and 8",
    basis: "Entrance test in English, Mathematics, Science and Hindi.",
  },
  {
    stage: "Secondary",
    classes: "Class 9",
    basis: "Entrance test in English, Mathematics, Science and Hindi.",
  },
  {
    stage: "Secondary",
    classes: "Class 10",
    basis: "Entrance test in English, Mathematics, Science and Hindi.",
  },
  {
    stage: "Senior Secondary",
    classes: "Classes 11 and 12",
    basis: "Admissions open in Class 11 with all streams. Fill the form online or at school, then appear for a written test.",
  },
];

export function AgeEligibility() {
  return (
    <section id="eligibility" className="band-cream">
      <div className="section">
      <div className="mb-10">
        <span className="eyebrow">At a Glance</span>
        <h2 className="h2">Age Eligibility by Class</h2>
      </div>

      <div className="-mx-4 overflow-x-auto px-4">
        <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-card border border-cream-border bg-white text-left text-sm shadow-card">
          <thead>
            <tr className="bg-brand text-cream">
              <th className="px-4 py-3 font-display text-base font-normal">Stage</th>
              <th className="px-4 py-3 font-display text-base font-normal">Classes</th>
              <th className="px-4 py-3 font-display text-base font-normal">Admission Basis</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={r.classes} className={i % 2 ? "bg-cream/70" : "bg-white"}>
                <td
                  className={`border-l-4 px-4 py-3 font-semibold text-brand ${HOUSE_BORDER_L[i % 4]}`}
                >
                  {r.stage}
                </td>
                <td className="px-4 py-3 text-ink/80">{r.classes}</td>
                <td className="px-4 py-3 text-ink/80">{r.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-xs text-ink/60">
        For exact age cut-off dates for the applying class, please call the
        Admission Helpline at +91-9891081270.
      </p>
      </div>
    </section>
  );
}
