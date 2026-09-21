"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AdmissionEnquiryForm } from "./AdmissionEnquiryForm";

type ModalContextValue = {
  open: (presetClass?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

const AUTO_OPEN_KEY = "sks-enquiry-auto-open-shown";
const AUTO_OPEN_THRESHOLD = 0.4; // 40% of the scrollable page height

export function useEnquiryModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  return ctx;
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetClass, setPresetClass] = useState<string | undefined>();

  const open = useCallback((preset?: string) => {
    setPresetClass(preset);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(AUTO_OPEN_KEY) === "1";
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — skip auto-open
      alreadyShown = true;
    }
    if (alreadyShown) return;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (pct < AUTO_OPEN_THRESHOLD) return;

      window.removeEventListener("scroll", onScroll);
      try {
        sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      } catch {
        // ignore — still open once for this page view
      }
      open();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, open]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Admission enquiry form"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-[24px] bg-white p-6 shadow-2xl sm:rounded-[24px] sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A548]">
                  Admission Enquiry
                </p>
                <h3 className="mt-1.5 font-display text-2xl text-[#132A45] sm:text-3xl">
                  Provide Your Details
                </h3>
                <p className="mt-1.5 text-sm text-gray-500">
                  The admissions team will call you back.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close enquiry form"
                className="-mr-1 -mt-1 shrink-0 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-[#132A45]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <AdmissionEnquiryForm presetClass={presetClass} onSuccess={() => {}} />

            <p className="mt-5 text-center text-xs text-gray-500">
              Prefer WhatsApp? Message us on{" "}
              <a
                href="https://wa.me/919319910888?text=Hi%2C%20I%20want%20to%20know%20about%20Class%206-12%20admission%20at%20SKS%20World%20School%2C%20Greater%20Noida%20West."
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#132A45] underline decoration-[#D4A548] underline-offset-2 hover:text-[#D4A548]"
              >
                9319910888
              </a>
            </p>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

/** Any element with data-enquiry attribute opens the modal (progressive, minimal JS). */
export function ApplyNowButton({
  children,
  presetClass,
  className = "btn-primary w-full",
}: {
  children: ReactNode;
  presetClass?: string;
  className?: string;
}) {
  const { open } = useEnquiryModal();
  return (
    <button type="button" className={className} onClick={() => open(presetClass)}>
      {children}
    </button>
  );
}
