import { ChevronDownIcon } from "./icons";
import { HOUSE_OPEN_BORDER, HOUSE_OPEN_TEXT } from "./HouseAccent";

/* Native <details> accordion — zero JavaScript. */

const FAQS = [
  {
    q: "What is the admission process at SKS World School?",
    a: "Submit an enquiry or registration form, complete documentation, appear for an age-appropriate interaction or written test with interview, deposit the fee on selection, and receive your admission confirmation.",
  },
  {
    q: "Which board is the school affiliated to?",
    a: "SKS World School is affiliated to the Central Board of Secondary Education (CBSE), Affiliation No. 2134098, under SKS Educational & Social Trust.",
  },
  {
    q: "Is there an entrance exam for admission?",
    a: "Pre-primary admissions are through a friendly interaction, not a written test. From the middle classes upwards, there is a written assessment in core subjects along with an interview.",
  },
  {
    q: "Is SKS World School co-educational?",
    a: "Yes. It is a co-educational, English-medium school admitting children from Pre-Nursery onwards, with all streams offered in Classes XI and XII.",
  },
  {
    q: "What is the class strength / section size?",
    a: "Class sizes are kept small — 25 in KG, 30 in Classes I-II, and 35 in Classes III to XII.",
  },
  {
    q: "What is the teacher-student ratio?",
    a: "The teacher-student ratio is 1:20, so every child gets individual attention.",
  },
  {
    q: "Does the school provide transport?",
    a: "Yes. The school runs new buses with custom routes across Greater Noida West and nearby areas, with CCTV and trained staff on board.",
  },
  {
    q: "Are meals provided at school?",
    a: "Children bring a healthy home packed lunch. Please contact the school office for the current meal and snack policy for your child's class.",
  },
  {
    q: "How safe is the campus?",
    a: "The campus has CCTV surveillance, trained security staff, controlled entry and exit, and supervised transport. The child helpline 1098 is also displayed for awareness.",
  },
  {
    q: "What is the teaching approach?",
    a: "Learning is activity-based and concept-led, supported by smart classrooms, well-equipped science, maths and computer labs, and a Robotic Lab in association with LEGO. The school holds the International School Award 2018-21.",
  },
  {
    q: "How does Class XI admission work?",
    a: "Class XI admission is stream-wise — Science, Commerce or Humanities — and depends on the student's Class X performance, the entrance assessment and seat availability.",
  },
  {
    q: "What are the school's board results?",
    a: "SKS World School has a record of 100% results in the CBSE board examinations.",
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
