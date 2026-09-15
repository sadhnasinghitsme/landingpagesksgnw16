"use client";

import { useState } from "react";
import Image from "next/image";
import { useEnquiryModal } from "./EnquiryModal";
import { HOUSE_BORDER_L, HOUSE_HOVER_BORDER } from "./HouseAccent";
import prePrimaryImg from "./pre-primary-play-area.png";
import primaryImg from "./primary-library.png";
import middleImg from "./middle-computer-lab.png";
import secondaryImg from "./secondary-science-lab.png";

const TABS = [
  {
    id: "pre-primary",
    label: "Pre-Primary",
    preset: "Pre-Nursery",
    taught:
      "Play-based early learning — language readiness, number sense, motor skills, music, art and structured free play in small groups.",
    highlights: [
      "Class size just 25 in KG",
      "Activity-first, screen-light classrooms",
      "Regular mobile / SMS updates for parents",
    ],
    basis: "Admission by interaction and age eligibility — no written test.",
    img: prePrimaryImg,
    imgAlt: "Indoor play area for tiny tots at SKS World School",
  },
  {
    id: "primary",
    label: "Primary (I-V)",
    preset: "Class I",
    taught:
      "CBSE curriculum with English, Hindi, Mathematics, EVS, Computers, plus art, music, dance and sports. Strong focus on reading fluency and concept clarity.",
    highlights: [
      "Class size 30 in I-II, 35 from III",
      "Smart classrooms & activity labs",
      "Swimming, skating and 150m playground",
    ],
    basis:
      "Admission based on an interaction / basic assessment appropriate to the class and age eligibility.",
    img: primaryImg,
    imgAlt: "The library at SKS World School",
  },
  {
    id: "middle",
    label: "Middle (VI-VIII)",
    preset: "Class VI",
    taught:
      "CBSE curriculum with Science, Mathematics, Social Science, three languages, plus Robotics with LEGO, computer applications and co-curricular clubs.",
    highlights: [
      "Teacher-Student Ratio 1:20",
      "Robotic Lab in association with LEGO",
      "International School Award curriculum links",
    ],
    basis:
      "Admission based on a written assessment in core subjects and an interview.",
    img: middleImg,
    imgAlt: "Students in the computer lab at SKS World School",
  },
  {
    id: "secondary",
    label: "Secondary & Sr. Secondary (IX-XII)",
    preset: "Class IX",
    taught:
      "CBSE board classes for IX-X, and all streams in XI-XII — Science, Commerce and Humanities — with lab-intensive teaching and board-focused mentoring.",
    highlights: [
      "100% CBSE board results",
      "All streams offered in XI-XII",
      "Fully equipped science & computer labs",
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
        <h2 className="h2">Explore Our Classes — Pre-Primary to Sr. Secondary</h2>
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
