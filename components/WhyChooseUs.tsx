import Image from "next/image";
import cbseImg from "./cbse-affiliation.png";
import busImg from "./transport-bus.png";
import scienceLabImg from "./science-lab.png";
import skatingRinkImg from "./skating-rink.png";
import smartClassroomImg from "./smart-classroom.png";
import cctvCameraImg from "./cctv-camera.png";

const CARDS = [
  {
    title: "CBSE Affiliated (No. 2134098)",
    body: "A CBSE-affiliated, English-medium, co-educational school up to Class 12.",
    img: cbseImg,
    alt: "Central Board of Secondary Education (CBSE) affiliation emblem",
    fit: "contain" as const,
  },
  {
    title: "Class 11 Admissions, All Streams",
    body: "Admissions are open in Class 11 with all streams available.",
    img: scienceLabImg,
    alt: "Students working in the science lab at SKS World School",
    fit: "cover" as const,
  },
  {
    title: "Safe Transport",
    body: "Routes customised to pick-up points. Every bus is mobile-connected, with GPS and CCTV.",
    img: busImg,
    alt: "A yellow school bus used for safe student transport",
    fit: "cover" as const,
  },
  {
    title: "Large Sports Grounds",
    body: "A 150-metre playground with basketball, lawn tennis, cricket nets, badminton and a skating rink.",
    img: skatingRinkImg,
    alt: "Students at the skating rink at SKS World School",
    fit: "cover" as const,
  },
  {
    title: "Labs and Smart Classrooms",
    body: "Science labs and smart classrooms that make every lesson interactive and visual.",
    img: smartClassroomImg,
    alt: "A smart classroom lesson in progress at SKS World School",
    fit: "cover" as const,
  },
  {
    title: "Secure Campus",
    body: "CCTV surveillance across the campus and buses, plus a medical room.",
    img: cctvCameraImg,
    alt: "CCTV security camera on the SKS World School campus",
    fit: "cover" as const,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="band-dark">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Key Factors</span>
          <h2 className="h2">Why Parents Choose SKS World School, Greater Noida West</h2>
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
