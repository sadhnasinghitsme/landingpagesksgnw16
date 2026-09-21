"use client";

import { useState } from "react";
import Image from "next/image";
import { useEnquiryModal } from "./EnquiryModal";
import { HOUSE_BORDER_L, HOUSE_HOVER_BORDER } from "./HouseAccent";
import primaryImg from "./primary-library.png";
import middleImg from "./middle-computer-lab.png";
import secondaryImg from "./secondary-science-lab.png";

const TABS = [
  {
    id: "class-6",
    label: "Class 6",
    preset: "Class 6",
    taught:
      "CBSE curriculum with activity-based learning, labs and co-curricular clubs, as students step up into the middle school (Classes 6 to 8).",
    highlights: [
      "Up to 35 students per class",
      "Student-Teacher Ratio 1:20",
      "Science labs and smart classrooms",
    ],
    basis:
      "Admission follows an entrance test in English, Mathematics, Science and Hindi.",
    img: primaryImg,
    imgAlt: "The library at SKS World School",
  },
  {
    id: "class-7-8",
    label: "Classes 7–8",
    preset: "Class 7",
    taught:
      "CBSE curriculum with activity-based learning, labs and co-curricular clubs that keep middle school students curious and engaged.",
    highlights: [
      "Up to 35 students per class",
      "Science labs and smart classrooms",
      "Yoga (Sadhana), self-defence and sports",
    ],
    basis:
      "Admission follows an entrance test in English, Mathematics, Science and Hindi.",
    img: middleImg,
    imgAlt: "Students in the computer lab at SKS World School",
  },
  {
    id: "class-9-10",
    label: "Classes 9–10",
    preset: "Class 9",
    taught:
      "CBSE board preparation for Class 10, supported by science labs, smart classrooms and a school counsellor parents can meet by appointment.",
    highlights: [
      "Up to 35 students per class",
      "Student-Teacher Ratio 1:20",
      "Science labs and smart classrooms",
    ],
    basis:
      "Admission follows an entrance test in English, Mathematics, Science and Hindi.",
    img: secondaryImg,
    imgAlt: "Students in the science lab at SKS World School",
  },
  {
    id: "class-11-12",
    label: "Classes 11–12",
    preset: "Class 11",
    taught:
      "Admissions are open in Class 11 with all streams available. Admission forms can be filled online or at school, followed by a written test.",
    highlights: [
      "All streams available in Class 11",
      "Up to 35 students per class",
      "Counsellor available by appointment",
    ],
    basis:
      "Admission follows an entrance test in English, Mathematics, Science and Hindi.",
    img: secondaryImg,
    imgAlt: "Students in the science lab at SKS World School",
  },
];

export function AdmissionTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const { open } = useEnquiryModal();
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section id="admissions" className="band-maroon">
      <div className="section">
      <div className="mb-10">
        <span className="eyebrow">Classes</span>
        <h2 className="h2">Class 6 to 12 at SKS World School, Greater Noida West</h2>
      </div>

      <div className="-mx-4 mb-5 overflow-x-auto px-4">
        <div role="tablist" aria-label="Admission by class" className="flex w-max gap-2">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`whitespace-nowrap rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                active === t.id
                  ? `border-b-[3px] bg-cream text-brand ${HOUSE_BORDER_L[i % 4]}`
                  : `border border-white/25 text-cream/85 ${HOUSE_HOVER_BORDER[i % 4]}`
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        className="rounded-card border border-cream-border bg-white p-6 text-ink shadow-lift sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-cream-border bg-cream-dark lg:aspect-[3/4]">
            <Image
              key={tab.id}
              src={tab.img}
              alt={tab.imgAlt}
              fill
              sizes="(min-width: 1024px) 280px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-display text-2xl !text-brand">{tab.label}</h3>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-gold-dark">
                  What&apos;s taught
                </p>
                <p className="mt-1.5 text-sm text-ink/80">{tab.taught}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-gold-dark">
                  Highlights
                </p>
                <ul className="mt-1.5 grid gap-1.5">
                  {tab.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-btn bg-cream p-4 text-sm text-ink/80">
              <span className="font-semibold text-ink">Admission basis: </span>
              {tab.basis}
            </div>

            <button
              type="button"
              onClick={() => open(tab.preset)}
              className="btn-primary mt-5 w-full sm:w-auto"
            >
              Enquire for {tab.label}
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
