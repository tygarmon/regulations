import Link from "next/link";
import { ALL_STATES } from "@/data/regulations";
import { StateGrid } from "@/components/StateGrid";

export default function HomePage() {
  const verifiedCount = ALL_STATES.filter((s) => s.lastVerified !== "pending").length;

  return (
    <div>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          U.S. Stormwater Regulation Directory
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Cross-reference construction stormwater permit requirements across all 50 states.
          Built for contractors, engineers, and project managers working across state lines.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href="/compare"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Compare States Side-by-Side →
          </Link>
          <div className="text-sm text-slate-500">
            <span className="font-medium text-slate-800">{verifiedCount}</span> of{" "}
            {ALL_STATES.length} states fully verified
          </div>
        </div>
      </div>

      {/* Key topics callout */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Permit Thresholds", desc: "When a permit is required" },
          { label: "SWPPP Requirements", desc: "PE stamp, templates, notes" },
          { label: "Inspection Frequency", desc: "Schedule & qualifications" },
          { label: "Discharge Standards", desc: "Turbidity limits & BMPs" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* State Grid with search */}
      <StateGrid states={ALL_STATES} />
    </div>
  );
}
