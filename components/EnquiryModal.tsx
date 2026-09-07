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
import { EnquiryForm } from "./EnquiryForm";

type ModalContextValue = {
  open: (presetClass?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

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

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/70 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Admission enquiry form"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-md rounded-t-card bg-white p-5 shadow-lift sm:rounded-card sm:p-7">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl text-brand">
                  Admission Enquiry
                </h3>
                <p className="text-sm text-ink/70">
                  Our admission team will call you back shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close enquiry form"
                className="-mr-1 -mt-1 rounded-full p-2 text-ink/60 hover:bg-cream hover:text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <EnquiryForm source="modal" presetClass={presetClass} onSuccess={() => {}} />
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
