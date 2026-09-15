import Image from "next/image";
import cbseImg from "./cbse-affiliation.png";
import busImg from "./transport-bus.png";
import roboticsLabImg from "./why choose (2).webp";
import parentPhoneImg from "./parent-sms-update.png";
import smartClassroomImg from "./smart-classroom.png";
import internationalAwardImg from "./international-school-award.png";

const CARDS = [
  {
    title: "International School Award 2018-21",
    body: "Recognised with the International School Award 2018-21 for a globally connected curriculum.",
    img: internationalAwardImg,
    alt: "British Council International School Award emblem",
    fit: "contain" as const,
  },
  {
    title: "CBSE Affiliation",
    body: "Affiliated to CBSE (Affiliation No. 2134098) under SKS Educational & Social Trust.",
    img: cbseImg,
    alt: "Central Board of Secondary Education (CBSE) affiliation emblem",
    fit: "contain" as const,
  },
  {
    title: "Safe Transport",
    body: "New buses with custom routes, GPS-tracked and staff-escorted across Greater Noida West.",
    img: busImg,
    alt: "A yellow school bus used for safe student transport",
    fit: "cover" as const,
  },
  {
    title: "Robotics Lab",
    body: "A dedicated Robotic Lab in association with LEGO builds hands-on STEM thinking.",
    img: roboticsLabImg,
    alt: "Students working in the LEGO Robotics Lab at SKS World School",
    fit: "cover" as const,
  },
  {
    title: "Parent SMS & App Updates",
    body: "Parents receive regular SMS and mobile app updates on attendance, activities and notices.",
    img: parentPhoneImg,
    alt: "A parent's phone receiving an SMS alert notification",
    fit: "cover" as const,
  },
  {
    title: "Smart Classrooms",
    body: "Digitally-enabled smart classrooms make every lesson interactive and visual.",
    img: smartClassroomImg,
    alt: "A smart classroom lesson in progress at SKS World School",
    fit: "cover" as const,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="band-dark">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Key Factors</span>
          <h2 className="h2">Why Choose SKS World School</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ title, body, img, alt, fit }) => (
            <div key={title} className="card-dark overflow-hidden">
              <div
                className={`relative aspect-[16/10] w-full ${
                  fit === "contain" ? "bg-white" : "bg-charcoal-light"
                }`}
              >
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className={
                    fit === "contain" ? "object-contain p-6" : "object-cover"
                  }
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-1.5 text-sm text-cream/70">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
