import Link from "next/link";
import { StateRegulation } from "@/data/types";
import { RegulationBadge, VerifiedBadge } from "./RegulationBadge";

type Props = {
  state: StateRegulation;
};

export function StateCard({ state }: Props) {
  const isPending = state.lastVerified === "pending";
  return (
    <Link
      href={`/states/${state.stateCode.toLowerCase()}`}
      className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-lg font-bold text-slate-900 group-hover:text-blue-700">
            {state.stateCode}
          </p>
          <p className="text-sm text-slate-500">{state.stateName}</p>
        </div>
        <RegulationBadge status={state.npdesStatus} />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-xs text-slate-600 truncate">
          <span className="font-medium">Agency:</span> {state.agencyAbbr}
        </p>
        <p className="text-xs text-slate-600 truncate">
          <span className="font-medium">Threshold:</span>{" "}
          {state.constructionPermit.threshold.replace("Pending verification", "—")}
        </p>
      </div>
      <div className="mt-3">
        <VerifiedBadge lastVerified={state.lastVerified} />
      </div>
      {isPending && (
        <p className="mt-2 text-xs text-amber-600 italic">
          Data not yet verified — contribute or check official source
        </p>
      )}
    </Link>
  );
}
