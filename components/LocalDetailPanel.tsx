import { LocalRegulation } from "@/data/localTypes";
import { isPending } from "@/lib/utils";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-slate-800">{title}</h2>
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
    <div className="grid grid-cols-[180px_1fr] gap-2">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className={`text-sm ${pending ? "italic text-amber-600" : "text-slate-800"}`}>
        {pending ? "Pending verification" : value}
      </dd>
    </div>
  );
}

const MS4_LABELS: Record<string, string> = {
  I: "MS4 Phase I",
  II: "MS4 Phase II",
  "not-regulated": "Not MS4 Regulated",
};

const MS4_COLORS: Record<string, string> = {
  I: "bg-purple-100 text-purple-800",
  II: "bg-indigo-100 text-indigo-800",
  "not-regulated": "bg-slate-100 text-slate-600",
};

const TYPE_LABELS: Record<string, string> = {
  city: "City",
  county: "County",
  district: "District",
  authority: "Authority",
};

type Props = {
  local: LocalRegulation;
};

export function LocalDetailPanel({ local }: Props) {
  return (
    <div className="space-y-5">
      {/* Header badges */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
          {TYPE_LABELS[local.type] ?? local.type}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${MS4_COLORS[local.ms4Phase]}`}>
          {MS4_LABELS[local.ms4Phase]}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
          Verified {local.lastVerified}
        </span>
      </div>

      {/* Local Permit */}
      <Section title="Local Permit / Authorization">
        <Field
          label="Permit Required"
          value={local.localPermit.required ? "Yes" : "No local permit required"}
        />
        {local.localPermit.required && (
          <>
            <Field label="Permit Name" value={local.localPermit.name} />
            <Field label="Submit To" value={local.localPermit.submittalBody} />
            <Field label="Lead Time" value={local.localPermit.leadTime} />
            <Field label="Application Method" value={local.localPermit.applicationMethod} />
            <Field label="Fee" value={local.localPermit.fee} />
          </>
        )}
      </Section>

      {/* Water Quality */}
      <Section title="Water Quality Standards">
        <Field label="Impervious Cover Limit" value={local.waterQuality.imperviousCoverLimit} />
        <Field
          label="On-Site Treatment Required"
          value={local.waterQuality.onSiteTreatmentRequired ? "Yes" : "No"}
        />
        <Field
          label="Detention Required"
          value={local.waterQuality.detentionRequired ? "Yes" : "No"}
        />
        {local.waterQuality.detentionRequired && (
          <Field label="Detention Standard" value={local.waterQuality.detentionStandard} />
        )}
        <Field label="Turbidity Standard" value={local.waterQuality.turbidityStandard} />
      </Section>

      {/* SWPPP */}
      <Section title="Local SWPPP / Drainage Plan">
        <Field
          label="Local Plan Required"
          value={local.swppp.localPlanRequired ? "Yes" : "No"}
        />
        {local.swppp.localPlanRequired && (
          <Field label="Plan Name" value={local.swppp.localPlanName} />
        )}
        <Field label="PE Stamp Required" value={local.swppp.peStampRequired ? "Yes" : "No"} />
        {local.swppp.notes && !isPending(local.swppp.notes) && (
          <div className="mt-2 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
            {local.swppp.notes}
          </div>
        )}
      </Section>

      {/* Inspections */}
      <Section title="Local Inspection Requirements">
        <Field label="Requirements" value={local.inspections.localRequirements} />
        <Field label="Inspector Qualification" value={local.inspections.qualificationRequired} />
      </Section>

      {/* Special Zones */}
      {local.specialZones.length > 0 && (
        <Section title="Special Overlay Zones">
          <div className="space-y-4">
            {local.specialZones.map((zone) => (
              <div key={zone.name} className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                <div className="mb-1 font-medium text-amber-900 text-sm">{zone.name}</div>
                <div className="text-xs text-amber-700 space-y-1">
                  <div><span className="font-medium">Trigger:</span> {zone.trigger}</div>
                  <div><span className="font-medium">Restriction:</span> {zone.restriction}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Design Manual */}
      {local.designManual.required && (
        <Section title="Design Manual">
          <Field label="Manual Name" value={local.designManual.name} />
          {local.designManual.url && (
            <div>
              <a
                href={local.designManual.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Download Manual →
              </a>
            </div>
          )}
        </Section>
      )}

      {/* Official Links */}
      <Section title="Official Resources">
        <div className="space-y-2">
          {local.officialLinks.agencyUrl && (
            <a
              href={local.officialLinks.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
            >
              Agency Website →
            </a>
          )}
          {local.officialLinks.permitUrl && (
            <a
              href={local.officialLinks.permitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
            >
              Permit Information →
            </a>
          )}
          {local.officialLinks.designManualUrl && (
            <a
              href={local.officialLinks.designManualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
            >
              Design Manual →
            </a>
          )}
        </div>
      </Section>

      {/* Notes */}
      {local.notes && !isPending(local.notes) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="mb-2 text-base font-semibold text-amber-800">Jurisdiction Notes</h2>
          <p className="text-sm text-amber-700">{local.notes}</p>
        </div>
      )}
    </div>
  );
}
