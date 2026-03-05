import Link from "next/link";
import type { Metadata } from "next";
import { FeedbackFormWrapper } from "@/components/FeedbackFormWrapper";

export const metadata: Metadata = {
  title: "Suggest a Correction | Stormwater Directory",
  description:
    "Help us keep the Stormwater Directory accurate. Submit a data correction or update for any state or local jurisdiction.",
};

export default async function FeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string; jurisdiction?: string; type?: string }>;
}) {
  const { state, jurisdiction, type } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600 hover:underline">
          Directory
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Suggest a Correction</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Suggest a Correction</h1>
        <p className="mt-2 text-slate-500">
          Found outdated or incorrect information? Help us keep the directory accurate.
          All submissions are reviewed before any changes are published.
        </p>
      </div>

      {/* Info callout */}
      <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
        <strong>What makes a good submission?</strong> The most useful corrections include a
        direct link to the official regulation, permit document, or agency webpage that
        confirms the correct information. Corrections with a verifiable source are reviewed
        first.
      </div>

      {/* Form */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <FeedbackFormWrapper
          defaultState={state}
          defaultJurisdiction={jurisdiction}
          defaultType={type}
        />
      </div>

      {/* Setup note — visible only in dev when Formspree is not configured */}
      {!process.env.NEXT_PUBLIC_FORMSPREE_ID && !process.env.NEXT_PUBLIC_FEEDBACK_EMAIL && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-amber-700">
          <strong>Setup required:</strong> To receive submissions, add one of these to your
          Vercel environment variables:
          <ul className="mt-2 list-disc pl-4 space-y-1">
            <li>
              <code className="font-mono">NEXT_PUBLIC_FORMSPREE_ID</code> — your 8-character
              Formspree form ID (create a free form at{" "}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
                formspree.io
              </a>
              )
            </li>
            <li>
              <code className="font-mono">NEXT_PUBLIC_FEEDBACK_EMAIL</code> — your email
              address (falls back to mailto:)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
