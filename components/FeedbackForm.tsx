"use client";

import { useState } from "react";
import Link from "next/link";
import { ALL_STATES } from "@/data/regulations";

const STATE_OPTIONS = ALL_STATES.map((s) => ({
  code: s.stateCode,
  name: s.stateName,
})).sort((a, b) => a.name.localeCompare(b.name));

const STATE_SECTIONS = [
  "Construction Permit",
  "SWPPP Requirements",
  "Inspection Requirements",
  "Discharge Standards",
  "Post-Construction",
  "Other",
];

const LOCAL_SECTIONS = [
  "Local Permit / Authorization",
  "Water Quality Standards",
  "Local SWPPP / Drainage Plan",
  "Local Inspection Requirements",
  "Special Overlay Zones",
  "Design Manual",
  "Other",
];

type Props = {
  defaultState?: string;
  defaultJurisdiction?: string;
  defaultType?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function FeedbackForm({ defaultState, defaultJurisdiction, defaultType }: Props) {
  const [type, setType] = useState<"state" | "local">(
    defaultType === "local" ? "local" : "state"
  );
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const formData = new FormData(e.currentTarget);

    if (!formspreeId) {
      // Fallback: open mailto with pre-populated body
      const subject = encodeURIComponent(
        `Stormwater Directory correction — ${formData.get("state") ?? "Unknown state"}`
      );
      const body = encodeURIComponent(
        [
          `Type: ${formData.get("type")}`,
          `State: ${formData.get("state")}`,
          formData.get("jurisdiction") ? `Jurisdiction: ${formData.get("jurisdiction")}` : "",
          `Section: ${formData.get("section")}`,
          ``,
          `Current value:`,
          formData.get("currentValue") || "(not provided)",
          ``,
          `Suggested correction:`,
          formData.get("correction"),
          ``,
          `Source/Citation:`,
          formData.get("source") || "(not provided)",
          ``,
          `Additional notes:`,
          formData.get("notes") || "(none)",
          ``,
          `— Submitted by ${formData.get("name") || "Anonymous"} (${formData.get("email") || "no email"})`,
        ]
          .filter((l) => l !== undefined)
          .join("\n")
      );
      const feedbackEmail = process.env.NEXT_PUBLIC_FEEDBACK_EMAIL ?? "";
      if (feedbackEmail) {
        window.location.href = `mailto:${feedbackEmail}?subject=${subject}&body=${body}`;
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(
          "Submission is not yet configured. Please set NEXT_PUBLIC_FORMSPREE_ID or NEXT_PUBLIC_FEEDBACK_EMAIL in your environment variables."
        );
      }
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-3 text-3xl">✓</div>
        <h2 className="mb-2 text-lg font-semibold text-green-800">Thank you!</h2>
        <p className="text-sm text-green-700">
          Your correction has been submitted. We review all submissions before updating the
          directory. If you included your email, we may follow up if we need more detail.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setStatus("idle")}
            className="rounded-lg border border-green-300 px-4 py-2 text-sm text-green-700 hover:bg-green-100"
          >
            Submit another
          </button>
          <Link
            href="/"
            className="rounded-lg bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800"
          >
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const sections = type === "local" ? LOCAL_SECTIONS : STATE_SECTIONS;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Type toggle */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Correction type
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setType("state")}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              type === "state"
                ? "border-blue-300 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            State regulation
          </button>
          <button
            type="button"
            onClick={() => setType("local")}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              type === "local"
                ? "border-teal-300 bg-teal-50 text-teal-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            Local jurisdiction
          </button>
        </div>
        <input type="hidden" name="type" value={type} />
      </div>

      {/* State selector */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-slate-700">
            State <span className="text-red-500">*</span>
          </label>
          <select
            id="state"
            name="state"
            required
            defaultValue={defaultState?.toUpperCase() ?? ""}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="" disabled>
              Select a state
            </option>
            {STATE_OPTIONS.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {type === "local" && (
          <div>
            <label htmlFor="jurisdiction" className="mb-1.5 block text-sm font-medium text-slate-700">
              Jurisdiction name <span className="text-red-500">*</span>
            </label>
            <input
              id="jurisdiction"
              name="jurisdiction"
              type="text"
              required={type === "local"}
              defaultValue={defaultJurisdiction ?? ""}
              placeholder="e.g. City of Houston"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        )}
      </div>

      {/* Section */}
      <div>
        <label htmlFor="section" className="mb-1.5 block text-sm font-medium text-slate-700">
          Section with the error <span className="text-red-500">*</span>
        </label>
        <select
          id="section"
          name="section"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="" disabled selected>
            Select a section
          </option>
          {sections.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Current value */}
      <div>
        <label htmlFor="currentValue" className="mb-1.5 block text-sm font-medium text-slate-700">
          What does the site currently show?{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          id="currentValue"
          name="currentValue"
          rows={2}
          placeholder="Copy the text from the site that you believe is incorrect"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Suggested correction */}
      <div>
        <label htmlFor="correction" className="mb-1.5 block text-sm font-medium text-slate-700">
          Suggested correction <span className="text-red-500">*</span>
        </label>
        <textarea
          id="correction"
          name="correction"
          rows={3}
          required
          placeholder="What should it say instead?"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Source */}
      <div>
        <label htmlFor="source" className="mb-1.5 block text-sm font-medium text-slate-700">
          Source / citation{" "}
          <span className="font-normal text-slate-400">(strongly encouraged)</span>
        </label>
        <input
          id="source"
          name="source"
          type="text"
          placeholder="URL or document name (e.g. TCEQ TXR150000, https://..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <p className="mt-1 text-xs text-slate-400">
          Submissions with a verifiable source are prioritized for review.
        </p>
      </div>

      {/* Additional notes */}
      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-slate-700">
          Additional context{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={2}
          placeholder="Anything else that would help us verify this correction"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Contact info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Your name <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Anonymous is fine"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Your email <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="If you'd like a follow-up"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      {/* Submit */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          All submissions are reviewed before any changes are made to the directory.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? "Submitting…" : "Submit correction"}
        </button>
      </div>
    </form>
  );
}
