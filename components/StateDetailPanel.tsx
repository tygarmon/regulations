import { StateRegulation } from "@/data/types";
import { RegulationBadge, VerifiedBadge } from "./RegulationBadge";
import { isPending } from "@/lib/utils";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  sourceUrl?: string;
  sourceLabel?: string;
};

function Section({ title, children, sourceUrl, sourceLabel }: SectionProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-slate-800">{title}</h2>
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-blue-500 hover:text-blue-700 hover:underline"
          >
            {sourceLabel ?? "Source"} ↗
          </a>
        )}
      </div>
      <dl className="space-y-3">{children}</dl>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
};

function Field({ label, value }: FieldProps) {
  const pending = isPending(value);
  return (
    <div className="grid grid-cols-[160px_1fr] gap-2">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className={`text-sm ${pending ? "italic text-amber-600" : "text-slate-800"}`}>
        {pending ? "Pending verification" : value}
      </dd>
    </div>
  );
}

type Props = {
  state: StateRegulation;
};

export function StateDetailPanel({ state }: Props) {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <RegulationBadge status={state.npdesStatus} />
        <VerifiedBadge lastVerified={state.lastVerified} />
      </div>

      {/* Construction Permit */}
      <Section
        title="Construction Permit"
        sourceUrl={state.officialLinks.regulationDocUrl}
        sourceLabel="Permit Document"
      >
        <Field label="Permit Name" value={state.constructionPermit.name} />
        <Field label="Threshold" value={state.constructionPermit.threshold} />
        <Field label="NOI Lead Time" value={state.constructionPermit.noticePeriod} />
        <Field label="Application Method" value={state.constructionPermit.applicationMethod} />
        <Field label="Fee" value={state.constructionPermit.fee} />
        <div className="pt-1">
          <a
            href={state.officialLinks.permitApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:text-blue-700 hover:underline"
          >
            Apply for Permit ↗
          </a>
        </div>
      </Section>

      {/* SWPPP */}
      <Section
        title="SWPPP Requirements"
        sourceUrl={state.officialLinks.regulationDocUrl}
        sourceLabel="Permit Document"
      >
        <Field label="SWPPP Required" value={state.swppp.required ? "Yes" : "No"} />
        <Field label="PE Cert Required" value={state.swppp.peCertRequired ? "Yes" : "No"} />
        <Field label="Template Available" value={state.swppp.templateAvailable ? "Yes" : "No"} />
        {state.swppp.notes && !isPending(state.swppp.notes) && (
          <div className="col-span-2 mt-2 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
            {state.swppp.notes}
          </div>
        )}
      </Section>

      {/* Inspections */}
      <Section
        title="Inspection Requirements"
        sourceUrl={state.officialLinks.regulationDocUrl}
        sourceLabel="Permit Document"
      >
        <Field label="Frequency" value={state.inspections.frequency} />
        <Field label="Inspector Qualification" value={state.inspections.qualificationRequired} />
      </Section>

      {/* Discharge Standards */}
      <Section
        title="Discharge Standards"
        sourceUrl={state.officialLinks.regulationDocUrl}
        sourceLabel="Permit Document"
      >
        <Field label="Turbidity Limit" value={state.dischargeStandards.turbidityLimit} />
        {state.dischargeStandards.notes && !isPending(state.dischargeStandards.notes) && (
          <div className="col-span-2 mt-2 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
            {state.dischargeStandards.notes}
          </div>
        )}
      </Section>

      {/* Post-Construction */}
      <Section
        title="Post-Construction"
        sourceUrl={state.officialLinks.agencyUrl}
        sourceLabel={state.agencyAbbr}
      >
        <Field label="Required" value={state.postConstruction.required ? "Yes" : "No"} />
        {state.postConstruction.notes && !isPending(state.postConstruction.notes) && (
          <div className="col-span-2 mt-2 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
            {state.postConstruction.notes}
          </div>
        )}
      </Section>

      {/* Notes */}
      {state.notes && !isPending(state.notes) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="mb-2 text-base font-semibold text-amber-800">State-Specific Notes</h2>
          <p className="text-sm text-amber-700">{state.notes}</p>
        </div>
      )}
    </div>
  );
}
