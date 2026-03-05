import { notFound } from "next/navigation";
import Link from "next/link";
import { getState, ALL_STATES } from "@/data/regulations";
import { getLocalJurisdictions } from "@/data/local";
import { LocalJurisdictionCard } from "@/components/LocalJurisdictionCard";

export async function generateStaticParams() {
  // Only generate local pages for states that have local data
  return ALL_STATES.map((s) => ({ state: s.stateCode.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateParam } = await params;
  const data = getState(stateParam);
  if (!data) return {};
  return {
    title: `${data.stateName} Local Stormwater Jurisdictions | Stormwater Directory`,
    description: `City and county stormwater regulations within ${data.stateName}. Compare local permit requirements, impervious cover limits, and detention standards.`,
  };
}

export default async function LocalJurisdictionsPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateParam } = await params;
  const stateData = getState(stateParam);
  if (!stateData) notFound();

  const jurisdictions = getLocalJurisdictions(stateData.stateCode);

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600 hover:underline">
          Directory
        </Link>
        <span>/</span>
        <Link
          href={`/states/${stateParam}`}
          className="hover:text-blue-600 hover:underline"
        >
          {stateData.stateName}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Local Jurisdictions</span>
      </nav>

      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {stateData.stateName} — Local Jurisdictions
          </h1>
          <p className="mt-1 text-slate-500">
            City and county stormwater requirements beyond the state permit
          </p>
        </div>
        {jurisdictions.length >= 2 && (
          <Link
            href={`/compare?mode=local&places=${jurisdictions
              .slice(0, 2)
              .map((j) => `${j.stateCode.toLowerCase()}-${j.localCode}`)
              .join(",")}`}
            className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-100 transition-colors"
          >
            Compare jurisdictions →
          </Link>
        )}
      </div>

      {jurisdictions.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 py-16 text-center">
          <p className="text-slate-500">
            No local jurisdiction data available for {stateData.stateName} yet.
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Texas is currently our proof-of-concept state.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-slate-500">
            {jurisdictions.length} jurisdiction{jurisdictions.length !== 1 ? "s" : ""} available
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jurisdictions.map((j) => (
              <LocalJurisdictionCard key={j.localCode} jurisdiction={j} />
            ))}
          </div>
        </>
      )}

      {/* Note */}
      <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4 text-xs text-blue-700">
        <strong>Note:</strong> Local requirements are layered <em>on top of</em> the{" "}
        <Link
          href={`/states/${stateParam}`}
          className="underline hover:text-blue-900"
        >
          {stateData.agencyAbbr} state permit
        </Link>
        . Both state and local requirements must be satisfied before beginning construction.
      </div>
    </div>
  );
}
