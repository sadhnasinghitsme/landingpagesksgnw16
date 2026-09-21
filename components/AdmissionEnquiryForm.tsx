"use client";

import { useId, useState } from "react";

const GOLD = "#D4A548";
const GOLD_DARK = "#B78A34";

const GRADE_OPTIONS = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#132A45] placeholder:text-gray-400 transition focus:border-[#D4A548] focus:outline-none focus:ring-1 focus:ring-[#D4A548]";

type Status = "idle" | "submitting" | "success" | "error";

export function AdmissionEnquiryForm({
  presetClass,
  onSuccess,
}: {
  presetClass?: string;
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
    const phoneDigits = String(data.phone ?? "").replace(/\D/g, "");
    const email = String(data.email ?? "").trim();

    if (!studentName || !parentName || phoneDigits.length !== 10) {
      setStatus("error");
      setMessage(
        "Please enter the student name, parent name and a valid 10-digit phone number.",
      );
      return;
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${studentName} / ${parentName}`,
          studentName,
          parentName,
          phone: `+91${phoneDigits}`,
          email,
          classApplyingFor: String(data.grade ?? ""),
          message: String(data.message ?? "").trim(),
          source: "modal",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage(
        "Thank you! The admissions team will call you back shortly.",
      );
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
      <div className="flex items-start gap-3 rounded-xl border border-[#D4A548]/40 bg-[#D4A548]/10 p-4 text-sm text-[#132A45]">
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: GOLD }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
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
            className={fieldClass}
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
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-phone`} className="sr-only">
          Phone number
        </label>
        <div className="flex overflow-hidden rounded-xl border border-gray-200 transition focus-within:border-[#D4A548] focus-within:ring-1 focus-within:ring-[#D4A548]">
          <span className="flex select-none items-center border-r border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-500">
            +91
          </span>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel-national"
            required
            placeholder="98765 43210"
            className="w-full min-w-0 px-4 py-3 text-sm text-[#132A45] placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-email`} className="sr-only">
          Email
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email (optional)"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${uid}-grade`} className="sr-only">
          Class applying for
        </label>
        <select
          id={`${uid}-grade`}
          name="grade"
          defaultValue={presetClass && GRADE_OPTIONS.includes(presetClass) ? presetClass : ""}
          className={`${fieldClass} appearance-none bg-white bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23132A45' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">Select a class</option>
          {GRADE_OPTIONS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className="sr-only">
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={3}
          placeholder="Message (optional)"
          className={`${fieldClass} resize-none`}
        />
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60"
        style={{ backgroundColor: GOLD }}
        onMouseEnter={(e) => {
          if (status !== "submitting") e.currentTarget.style.backgroundColor = GOLD_DARK;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = GOLD;
        }}
      >
        {status === "submitting" ? "Submitting…" : "Get Fee Structure & Call Back"}
      </button>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
