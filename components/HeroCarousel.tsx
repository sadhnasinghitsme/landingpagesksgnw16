"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Full-bleed auto-rotating hero background. Real photos from skswsgnw.ac.in.
 * The active image renders at full opacity with no overlay and no filters —
 * only the non-active slides are display:none (no opacity fade). Auto-advance
 * pauses for prefers-reduced-motion.
 */
const SLIDES = [
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/09/3.jpg",
    alt: "Students of SKS World School taking part in a school celebration",
  },
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/09/4.jpg",
    alt: "SKS World School students performing on stage at a cultural event",
  },
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/09/7.jpg",
    alt: "SKS World School students during an outdoor activity day",
  },
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/05/247A3327.jpg",
    alt: "SKS World School campus and students in Greater Noida West",
  },
  {
    src: "https://skswsgnw.ac.in/wp-content/uploads/2025/05/247A3307.jpg",
    alt: "A classroom session in progress at SKS World School",
  },
];

const INTERVAL = 4500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex(() => (next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-cream">
      {SLIDES.map((s, i) => (
        <div key={s.src} className="absolute inset-0" hidden={i !== index}>
          <Image
            src={s.src}
            alt={i === index ? s.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
        </div>
      ))}

      {/* dark gradient behind the hero copy — left-to-right, dark to transparent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      {/* extra knock-back for mobile, where the copy spans the full width */}
      <div className="pointer-events-none absolute inset-0 bg-black/35 sm:hidden" />

      {/* dots */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand" : "w-2 bg-white shadow ring-1 ring-brand/30 hover:bg-cream"
            }`}
          />
        ))}
      </div>

      {/* arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-cream p-2 text-brand shadow hover:bg-white md:block"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-cream p-2 text-brand shadow hover:bg-white md:block"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
