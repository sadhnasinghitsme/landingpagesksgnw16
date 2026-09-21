"use client";

import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.88L0 24l6.45-1.69a11.86 11.86 0 0 0 5.59 1.42h.01c6.54 0 11.85-5.3 11.85-11.85 0-3.17-1.24-6.14-3.38-8.4ZM12.05 21.4h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.63.95.97-3.54-.23-.36a9.58 9.58 0 0 1-1.47-5.06c0-5.31 4.32-9.63 9.64-9.63 2.57 0 4.99 1 6.81 2.82a9.56 9.56 0 0 1 2.82 6.81c0 5.31-4.33 9.63-9.65 9.63Zm5.29-7.22c-.29-.14-1.7-.84-1.96-.94-.26-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.02c.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z" />
    </svg>
  );
}

/** Stacked floating action buttons — bottom-right, above the mobile sticky bar. */
export function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end md:bottom-8 md:right-6">
      <a
        href="https://wa.me/919319910888?text=Hi%2C%20I%20want%20to%20know%20about%20Class%206-12%20admission%20at%20SKS%20World%20School%2C%20Greater%20Noida%20West."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1EBE5A] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <WhatsAppIcon width={22} height={22} className="shrink-0" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
