import Image from "next/image";
import { FlaskIcon, PaletteIcon, BallIcon, ShieldIcon } from "./icons";
import {
  HouseRule,
  HOUSE_CHIP,
  HOUSE_DOT,
  HOUSE_STRIP,
} from "./HouseAccent";
import yogaImg from "./yoga-session.png";
import labExperimentImg from "./C0367T01.jpg";
import taekwondoImg from "./C0391T01.jpg";
import skatingRinkImg from "./skating-rink.png";
import scienceLabImg from "./science-lab.png";
import danceClassImg from "./dance-class.png";
import cctvCameraImg from "./cctv-camera.png";

const PHOTOS = [
  {
    src: yogaImg,
    alt: "Students doing yoga on the SKS World School campus grounds",
  },
  {
    src: labExperimentImg,
    alt: "Students carrying out a physics experiment in the lab at SKS World School",
  },
  {
    src: taekwondoImg,
    alt: "Students practising taekwondo at SKS World School",
  },
];

// each facility group carries one house colour as its accent, plus a banner photo
const GROUPS = [
  {
    Icon: FlaskIcon,
    title: "Academic",
    house: 1, // blue
    img: scienceLabImg,
    imgAlt: "The science lab at SKS World School",
    items: [
      "Science labs",
      "Smart classrooms",
      "Counsellor available by appointment",
    ],
  },
  {
    Icon: PaletteIcon,
    title: "Arts & Culture",
    house: 0, // red
    img: danceClassImg,
    imgAlt: "Students in a dance class at SKS World School",
    items: ["AC indoor auditorium", "Movie/documentary-based education"],
  },
  {
    Icon: BallIcon,
    title: "Sports & Recreation",
    house: 3, // green
    img: skatingRinkImg,
    imgAlt: "Students at the skating rink at SKS World School",
    items: [
      "150 m playground",
      "Basketball, lawn tennis & badminton",
      "Cricket nets & skating rink",
      "Yoga (Sadhana) & self-defence",
    ],
  },
  {
    Icon: ShieldIcon,
    title: "Safety & Security",
    house: 2, // yellow
    img: cctvCameraImg,
    imgAlt: "CCTV security camera on the SKS World School campus",
    items: [
      "CCTV-enabled campus",
      "GPS and CCTV on every school bus",
      "Customised bus routes",
      "Medical room",
    ],
  },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="band-cream">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Infrastructure</span>
          <h2 className="h2">Campus Life at SKS World School, Sector 16</h2>
          <HouseRule className="mt-4" />
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <div
              key={p.alt}
              className="relative aspect-[4/3] overflow-hidden rounded-card border border-cream-border bg-cream-dark"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 z-10 h-1 ${HOUSE_STRIP[i % 4]}`}
              />
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {GROUPS.map(({ Icon, title, items, house, img, imgAlt }) => (
            <div key={title} className="card overflow-hidden">
              <div className="relative aspect-[16/9] w-full bg-cream-dark">
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative p-6">
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1 ${HOUSE_DOT[house]}`}
                />
                <div className="flex items-center gap-2.5">
                  <span className={`inline-flex rounded-btn p-2 ${HOUSE_CHIP[house]}`}>
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="font-display text-lg text-brand">{title}</h3>
                </div>
                <ul className="mt-3 grid gap-1.5">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-ink/80">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${HOUSE_DOT[house]}`}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
