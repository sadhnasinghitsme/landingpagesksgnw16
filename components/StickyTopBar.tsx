import Image from "next/image";
import { PhoneIcon } from "./icons";
import { HouseBar } from "./HouseAccent";
import { ApplyNowButton } from "./EnquiryModal";

export function StickyTopBar() {
  return (
    <header id="top" className="sticky top-0 z-50">
      {/* utility strip — house-colour dots as a quiet accent */}
      <div className="bg-charcoal text-cream/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-[11px] tracking-wide sm:px-6 sm:text-xs">
          <span className="flex items-center gap-2 truncate">
            <span aria-hidden="true" className="hidden shrink-0 gap-1 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-house-red" />
              <span className="h-1.5 w-1.5 rounded-full bg-house-blue" />
              <span className="h-1.5 w-1.5 rounded-full bg-house-yellow" />
              <span className="h-1.5 w-1.5 rounded-full bg-house-green" />
            </span>
            CBSE Affiliated &middot; Affiliation No. 2134098
          </span>
          <a href="tel:+919891081270" className="shrink-0 font-semibold text-cream hover:text-house-yellow">
            Admission Helpline: +91-9891081270
          </a>
        </div>
      </div>

      {/* logo bar */}
      <div className="bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="SKS World School home">
            <Image
              src="https://skswsgnw.ac.in/wp-content/uploads/2026/01/Logo-1-259x76.webp"
              alt="SKS World School, Greater Noida West logo"
              width={259}
              height={76}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919891081270"
              className="inline-flex items-center gap-2 rounded-btn bg-brand px-4 py-2 text-sm font-medium text-cream ring-1 ring-transparent transition hover:bg-brand-dark hover:ring-house-yellow sm:text-base"
            >
              <PhoneIcon width={18} height={18} />
              <span>+91-9891081270</span>
            </a>
            {/* desktop-only trigger — mobile already has the sticky bottom bar */}
            <ApplyNowButton
              className="hidden items-center gap-2 rounded-btn px-4 py-2 text-sm font-medium text-[#132A45] ring-1 ring-[#D4A548] transition hover:bg-[#D4A548] hover:text-white md:inline-flex sm:text-base"
            >
              Enquire Now
            </ApplyNowButton>
          </div>
        </div>
      </div>

      {/* house-colour hairline under the header */}
      <HouseBar />
    </header>
  );
}
