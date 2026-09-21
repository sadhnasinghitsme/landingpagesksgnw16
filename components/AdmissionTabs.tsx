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
    label: "Class VI",
    preset: "Class VI",
    taught:
      "Class VI is the bridge into subject-based learning. Students move to dedicated teachers for English, Hindi, Mathematics, Science and Social Science, pick up a third language and computer skills, and keep art, music and sport in their week.",
    highlights: [
      "Up to 35 students per class",
      "Teacher-Student Ratio 1:20",
      "Regular mobile / SMS updates for parents",
    ],
    basis:
      "Admission based on a written assessment in core subjects and an interview, with age eligibility as per CBSE norms.",
    img: primaryImg,
    imgAlt: "The library at SKS World School",
  },
  {
    id: "class-7-8",
    label: "Classes VII–VIII",
    preset: "Class VII",
    taught:
      "Ideas in Science, Mathematics and Social Science grow deeper, and students learn by doing — building in the Robotic Lab, using computer applications and joining clubs that stretch curiosity beyond the textbook.",
    highlights: [
      "Robotic Lab in association with LEGO",
      "Smart classrooms & activity labs",
      "House system with inter-house events",
    ],
    basis:
      "Admission based on a written assessment in core subjects and an interview, subject to seat availability.",
    img: middleImg,
    imgAlt: "Students in the computer lab at SKS World School",
  },
  {
    id: "class-9-10",
    label: "Classes IX–X",
    preset: "Class IX",
    taught:
      "Board preparation begins in earnest. Regular tests, practical work, revision plans and one-to-one mentoring help students build strong fundamentals before the CBSE Class X examinations and the choice of stream.",
    highlights: [
      "100% CBSE board results",
      "Remedial and revision support",
      "Fully equipped science & computer labs",
    ],
    basis:
      "Admission based on a written test, previous academic record and an interview.",
    img: secondaryImg,
    imgAlt: "Students in the science lab at SKS World School",
  },
  {
    id: "class-11-12",
    label: "Classes XI–XII",
    preset: "Class XI",
    taught:
      "Senior secondary students choose Science, Commerce or Humanities and learn from subject specialists, with lab work, projects and board-focused mentoring that prepare them for college and competitive exams.",
    highlights: [
      "All three streams under one roof",
      "Lab-intensive practicals",
      "Up to 35 students per class",
    ],
    basis:
      "Admission based on a written test, previous academic record and an interview. Class XI admission is stream-wise, subject to Class X performance and seat availability.",
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
        <h2 className="h2">Explore Our Classes — Class VI to Class XII</h2>
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
