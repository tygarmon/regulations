import { Suspense } from "react";
import Link from "next/link";
import { CompareClient } from "./CompareClient";
import { CompareLocalClient } from "./CompareLocalClient";

export const metadata = {
  title: "Compare Regulations | Stormwater Directory",
  description:
    "Compare stormwater construction permit requirements side-by-side across U.S. states and local jurisdictions.",
};

type Mode = "states" | "local" | "mixed";

const MODES: { key: Mode; label: string; description: string }[] = [
  {
    key: "states",
    label: "Compare States",
    description: "Compare state-level permit requirements side-by-side (up to 4 states)",
  },
  {
    key: "local",
    label: "Compare Local Jurisdictions",
    description: "Compare city/county requirements side-by-side (up to 4 jurisdictions)",
  },
  {
    key: "mixed",
    label: "State + Local",
    description: "Compare state baseline against local requirements in a single view",
  },
];

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; states?: string; places?: string }>;
}) {
  const params = await searchParams;
  const rawMode = params.mode ?? "states";
  const mode: Mode = ["states", "local", "mixed"].includes(rawMode)
    ? (rawMode as Mode)
    : "states";

  const activeMode = MODES.find((m) => m.key === mode)!;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Compare Regulations</h1>
        <p className="mt-2 text-slate-600">{activeMode.description}</p>
      </div>

      {/* Mode tabs */}
      <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-200 pb-0">
        {MODES.map((m) => (
          <Link
            key={m.key}
            href={`/compare?mode=${m.key}`}
            className={`rounded-t-lg border border-b-0 px-4 py-2 text-sm font-medium transition-colors ${
              mode === m.key
                ? "border-slate-200 bg-white text-blue-700 -mb-px pb-[calc(0.5rem+1px)]"
                : "border-transparent bg-slate-50 text-slate-500 hover:text-slate-700"
            }`}
          >
            {m.label}
          </Link>
        ))}
      </div>

      {/* Client component based on mode */}
      <Suspense fallback={<div className="text-slate-400">Loading...</div>}>
        {mode === "states" && <CompareClient />}
        {mode === "local" && <CompareLocalClient mode="local" />}
        {mode === "mixed" && <CompareLocalClient mode="mixed" />}
      </Suspense>
    </div>
  );
}
