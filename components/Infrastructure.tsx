import Image from "next/image";
import { FlaskIcon, PaletteIcon, BallIcon, ShieldIcon } from "./icons";
import {
  HouseRule,
  HOUSE_CHIP,
  HOUSE_DOT,
  HOUSE_STRIP,
} from "./HouseAccent";

const PHOTOS = [
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/10/16.jpg",
    alt: "The SKS World School campus building in Sector-16, Greater Noida West",
  },
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/10/17.jpg",
    alt: "Indoor swimming pool at SKS World School",
  },
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/10/9.jpg",
    alt: "Students in a smart classroom at SKS World School",
  },
];

// each facility group carries one house colour as its accent
const GROUPS = [
  {
    Icon: FlaskIcon,
    title: "Academic",
    house: 1, // blue
    items: [
      "Science, Maths & Computer labs",
      "Well-stocked library",
      "Smart classrooms",
      "Robotic Lab with LEGO",
    ],
  },
  {
    Icon: PaletteIcon,
    title: "Arts & Culture",
    house: 0, // red
    items: ["AC auditorium", "Music & dance spaces", "Art & craft studios"],
  },
  {
    Icon: BallIcon,
    title: "Sports & Recreation",
    house: 3, // green
    items: [
      "150m playground",
      "Indoor swimming pool",
      "Skating rink",
      "Outdoor & indoor games",
    ],
  },
  {
    Icon: ShieldIcon,
    title: "Safety & Security",
    house: 2, // yellow
    items: [
      "CCTV surveillance across campus",
      "Trained security staff",
      "New buses with custom routes",
      "Controlled entry & exit",
    ],
  },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="band-cream">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Infrastructure</span>
          <h2 className="h2">A Campus Built for Learning by Doing</h2>
          <HouseRule className="mt-4" />
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
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
          {GROUPS.map(({ Icon, title, items, house }) => (
            <div
              key={title}
              className="card relative overflow-hidden p-6"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
