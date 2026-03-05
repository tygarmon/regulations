import Link from "next/link";
import { LocalRegulation } from "@/data/localTypes";
import { cn } from "@/lib/utils";

const TYPE_LABELS: Record<string, string> = {
  city: "City",
  county: "County",
  district: "District",
  authority: "Regional Authority",
};

const MS4_COLORS: Record<string, string> = {
  I: "bg-purple-100 text-purple-800",
  II: "bg-blue-100 text-blue-800",
  "not-regulated": "bg-slate-100 text-slate-600",
};

type Props = { jurisdiction: LocalRegulation };

export function LocalJurisdictionCard({ jurisdiction: j }: Props) {
  return (
    <Link
      href={`/states/${j.stateCode.toLowerCase()}/local/${j.localCode}`}
      className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-tight">
            {j.localName}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{TYPE_LABELS[j.type]}</p>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium",
            MS4_COLORS[j.ms4Phase]
          )}
        >
          {j.ms4Phase === "not-regulated" ? "No MS4" : `MS4 Phase ${j.ms4Phase}`}
        </span>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-xs text-slate-600 truncate">
          <span className="font-medium">Submit to:</span> {j.localPermit.submittalBody.split(";")[0]}
        </p>
        <p className="text-xs text-slate-600">
          <span className="font-medium">Detention:</span>{" "}
          {j.waterQuality.detentionRequired ? "Required" : "Not required"}
        </p>
        <p className="text-xs text-slate-600">
          <span className="font-medium">Impervious limit:</span>{" "}
          {j.waterQuality.imperviousCoverLimit.length > 50
            ? j.waterQuality.imperviousCoverLimit.slice(0, 50) + "…"
            : j.waterQuality.imperviousCoverLimit}
        </p>
      </div>

      {j.specialZones.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {j.specialZones.slice(0, 2).map((z) => (
            <span
              key={z.name}
              className="inline-block rounded bg-amber-50 border border-amber-200 px-1.5 py-0.5 text-xs text-amber-700"
            >
              {z.name.length > 28 ? z.name.slice(0, 28) + "…" : z.name}
            </span>
          ))}
          {j.specialZones.length > 2 && (
            <span className="text-xs text-slate-400">+{j.specialZones.length - 2} more</span>
          )}
        </div>
      )}
    </Link>
  );
}
