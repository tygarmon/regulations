import { notFound } from "next/navigation";
import Link from "next/link";
import { getState, ALL_STATES } from "@/data/regulations";
import { getLocalJurisdictions, getLocalJurisdiction } from "@/data/local";
import { LocalDetailPanel } from "@/components/LocalDetailPanel";

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  for (const s of ALL_STATES) {
    const jurisdictions = getLocalJurisdictions(s.stateCode);
    for (const j of jurisdictions) {
      params.push({ state: s.stateCode.toLowerCase(), city: j.localCode });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state: stateParam, city: cityParam } = await params;
  const local = getLocalJurisdiction(stateParam, cityParam);
  if (!local) return {};
  return {
    title: `${local.localName} Stormwater Regulations | Stormwater Directory`,
    description: `Local stormwater requirements for ${local.localName}, ${local.stateCode}. Permit: ${local.localPermit.name}. Submit to: ${local.localPermit.submittalBody}.`,
  };
}

export default async function LocalDetailPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state: stateParam, city: cityParam } = await params;
  const stateData = getState(stateParam);
  if (!stateData) notFound();

  const local = getLocalJurisdiction(stateParam, cityParam);
  if (!local) notFound();

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
        <Link
          href={`/states/${stateParam}/local`}
          className="hover:text-blue-600 hover:underline"
        >
          Local Jurisdictions
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{local.localName}</span>
      </nav>

      {/* Page header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{local.localName}</h1>
          <p className="mt-1 text-slate-500">{local.localPermit.submittalBody}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/compare?mode=local&places=${local.stateCode.toLowerCase()}-${local.localCode}`}
            className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-100 transition-colors"
          >
            Compare with other cities →
          </Link>
          <Link
            href={`/compare?mode=mixed&states=${local.stateCode}&places=${local.stateCode.toLowerCase()}-${local.localCode}`}
            className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
          >
            Compare with state →
          </Link>
          <Link
            href={`/feedback?state=${local.stateCode}&jurisdiction=${encodeURIComponent(local.localName)}&type=local`}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
          >
            Suggest a correction
          </Link>
        </div>
      </div>

      {/* Detail panel */}
      <LocalDetailPanel local={local} />

      {/* State context note */}
      <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4 text-xs text-blue-700">
        <strong>Remember:</strong> These local requirements are in addition to the{" "}
        <Link
          href={`/states/${stateParam}`}
          className="underline hover:text-blue-900"
        >
          {stateData.agencyAbbr} state construction permit
        </Link>
        . Both must be satisfied before breaking ground.
      </div>

      {/* Disclaimer */}
      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
        <strong>Disclaimer:</strong> This information is provided for general reference only.
        Always verify requirements directly with {local.localPermit.submittalBody} and the{" "}
        <a
          href={local.officialLinks.agencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          agency website
        </a>{" "}
        before beginning construction.
      </div>
    </div>
  );
}
