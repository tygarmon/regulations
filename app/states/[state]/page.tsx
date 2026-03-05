import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_STATES, getState } from "@/data/regulations";
import { StateDetailPanel } from "@/components/StateDetailPanel";
import { getLocalJurisdictions } from "@/data/local";
import { LocalJurisdictionCard } from "@/components/LocalJurisdictionCard";

export async function generateStaticParams() {
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
    title: `${data.stateName} Stormwater Regulations | Stormwater Directory`,
    description: `Construction stormwater permit requirements for ${data.stateName}. Agency: ${data.agency}. Threshold: ${data.constructionPermit.threshold}.`,
  };
}

export default async function StateDetailPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateParam } = await params;
  const data = getState(stateParam);
  if (!data) notFound();

  const localJurisdictions = getLocalJurisdictions(data.stateCode);
  const hasLocal = localJurisdictions.length > 0;

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600 hover:underline">
          Directory
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{data.stateName}</span>
      </nav>

      {/* Page header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {data.stateName}
          </h1>
          <p className="mt-1 text-slate-500">{data.agency}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {hasLocal && (
            <Link
              href={`/states/${stateParam}/local`}
              className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-100 transition-colors"
            >
              Local jurisdictions ({localJurisdictions.length}) →
            </Link>
          )}
          <Link
            href={`/compare?states=${data.stateCode}`}
            className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
          >
            Compare with other states →
          </Link>
          <Link
            href={`/feedback?state=${data.stateCode}&type=state`}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
          >
            Suggest a correction
          </Link>
        </div>
      </div>

      {/* Detail panel */}
      <StateDetailPanel state={data} />

      {/* Local Jurisdictions section */}
      {hasLocal && (
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Local Jurisdictions</h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Additional city and county requirements beyond the state permit
              </p>
            </div>
            <Link
              href={`/states/${stateParam}/local`}
              className="text-sm text-teal-600 hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localJurisdictions.slice(0, 3).map((j) => (
              <LocalJurisdictionCard key={j.localCode} jurisdiction={j} />
            ))}
          </div>
          {localJurisdictions.length > 3 && (
            <div className="mt-4 text-center">
              <Link
                href={`/states/${stateParam}/local`}
                className="text-sm text-teal-600 hover:underline"
              >
                View all {localJurisdictions.length} jurisdictions →
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
        <strong>Disclaimer:</strong> This information is provided for general reference only and may
        not reflect the most current regulatory requirements. Always consult the{" "}
        <a
          href={data.officialLinks.agencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {data.agencyAbbr} website
        </a>{" "}
        and applicable regulations before beginning any construction activity.
      </div>
    </div>
  );
}
