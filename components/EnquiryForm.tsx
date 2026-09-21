"use client";

import { useId, useState } from "react";
import { CheckIcon } from "./icons";

const CLASS_OPTIONS = [
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
];

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({
  source,
  presetClass,
  compact = false,
  onSuccess,
}: {
  source: string;
  presetClass?: string;
  compact?: boolean;
  onSuccess?: () => void;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.company).trim() !== "") return; // honeypot

    const studentName = String(data.studentName ?? "").trim();
    const parentName = String(data.parentName ?? "").trim();
    const phone = String(data.phone).replace(/\D/g, "");
    if (!studentName || !parentName || phone.length < 10) {
      setStatus("error");
      setMessage(
        "Please enter the student name, parent name and a valid 10-digit phone number.",
      );
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name: `${studentName} / ${parentName}`,
          source,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thank you! Our admission team will contact you soon.");
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please call our helpline at +91-9891081270.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-btn border border-cream-border bg-cream p-4 text-sm text-ink">
        <span className="mt-0.5 rounded-full bg-brand p-1 text-cream">
          <CheckIcon width={16} height={16} />
        </span>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-3"} noValidate>
      <div>
        <label htmlFor={`${uid}-student`} className="sr-only">
          Student name
        </label>
        <input
          id={`${uid}-student`}
          name="studentName"
          type="text"
          autoComplete="off"
          required
          placeholder="Student name"
          className="field"
        />
      </div>

      <div>
        <label htmlFor={`${uid}-parent`} className="sr-only">
          Parent name
        </label>
        <input
          id={`${uid}-parent`}
          name="parentName"
          type="text"
          autoComplete="name"
          required
          placeholder="Parent name"
          className="field"
        />
      </div>

      <div>
        <label htmlFor={`${uid}-phone`} className="sr-only">
          Phone number
        </label>
        <input
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          required
          placeholder="Phone number"
          className="field"
        />
      </div>

      <div>
        <label htmlFor={`${uid}-class`} className="sr-only">
          Class applying for
        </label>
        <select
          id={`${uid}-class`}
          name="classApplyingFor"
          required
          defaultValue={presetClass && CLASS_OPTIONS.includes(presetClass) ? presetClass : ""}
          className="field appearance-none bg-white"
        >
          <option value="" disabled>
            Class applying for
          </option>
          {CLASS_OPTIONS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm font-medium text-brand-light" role="alert">
          {message}
        </p>
      )}

      <p className="text-center text-xs text-ink/60">
        Or call the Admission Helpline{" "}
        <a href="tel:+919891081270" className="font-semibold text-brand underline">
          +91-9891081270
        </a>
      </p>
    </form>
  );
}
