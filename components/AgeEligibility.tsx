import { HOUSE_BORDER_L } from "./HouseAccent";

const ROWS = [
  {
    stage: "Pre-Primary",
    classes: "Pre-Nursery, Nursery, KG",
    basis: "Interaction with child and parents; age eligibility as per CBSE / state norms. No written test.",
  },
  {
    stage: "Primary",
    classes: "Classes I to V",
    basis: "Basic interaction / assessment appropriate to the class, plus age eligibility and seat availability.",
  },
  {
    stage: "Middle",
    classes: "Classes VI to VIII",
    basis: "Written assessment in core subjects and an interview.",
  },
  {
    stage: "Secondary",
    classes: "Classes IX and X",
    basis: "Written test, previous academic record and interview.",
  },
  {
    stage: "Senior Secondary",
    classes: "Classes XI and XII (Science / Commerce / Humanities)",
    basis: "Stream allotment based on Class X performance, written test and seat availability.",
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
              <tr key={r.stage} className={i % 2 ? "bg-cream/70" : "bg-white"}>
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
