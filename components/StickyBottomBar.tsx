"use client";

import { useEnquiryModal } from "./EnquiryModal";
import { PhoneIcon } from "./icons";

export function StickyBottomBar() {
  const { open } = useEnquiryModal();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2.5 border-t border-cream-border bg-cream p-2.5 md:hidden">
      <a
        href="tel:+919891081270"
        className="inline-flex items-center justify-center gap-2 rounded-btn border border-brand py-3 text-base font-medium text-brand"
      >
        <PhoneIcon width={18} height={18} />
        Call Now
      </a>
      <button
        type="button"
        onClick={() => open()}
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand py-3 text-base font-medium text-cream"
      >
        Apply Now
      </button>
    </div>
  );
}
