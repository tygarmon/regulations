import { StateRegulation } from "./types";

export type LocalType = "city" | "county" | "district" | "authority";
export type Ms4Phase = "I" | "II" | "not-regulated";

export type LocalRegulation = {
  localCode: string;       // "austin"
  localName: string;       // "City of Austin"
  stateCode: string;       // "TX"
  type: LocalType;
  ms4Phase: Ms4Phase;
  localPermit: {
    required: boolean;
    name: string;
    submittalBody: string;
    leadTime: string;
    fee: string;
    applicationMethod: string;
  };
  waterQuality: {
    imperviousCoverLimit: string;
    onSiteTreatmentRequired: boolean;
    detentionRequired: boolean;
    detentionStandard: string;
    turbidityStandard: string;
  };
  swppp: {
    localPlanRequired: boolean;
    localPlanName: string;
    peStampRequired: boolean;
    notes: string;
  };
  inspections: {
    localRequirements: string;
    qualificationRequired: string;
  };
  specialZones: {
    name: string;
    trigger: string;
    restriction: string;
  }[];
  designManual: {
    required: boolean;
    name: string;
    url: string;
  };
  officialLinks: {
    agencyUrl: string;
    permitUrl: string;
    designManualUrl: string;
  };
  lastVerified: string;
  notes: string;
};

// ─── Unified comparison item ────────────────────────────────────────────────
// Normalizes both StateRegulation and LocalRegulation into one shape so
// UnifiedComparisonTable can render a mixed column set.

export type UnifiedComparisonItem = {
  id: string;            // "TX" | "tx-austin"
  displayName: string;   // "Texas" | "City of Austin"
  subtitle: string;      // "TCEQ" | "Watershed Protection Dept."
  type: "state" | "local";
  stateCode: string;
};

export function stateToUnified(s: StateRegulation): UnifiedComparisonItem {
  return {
    id: s.stateCode,
    displayName: s.stateName,
    subtitle: s.agencyAbbr,
    type: "state",
    stateCode: s.stateCode,
  };
}

export function localToUnified(l: LocalRegulation): UnifiedComparisonItem {
  return {
    id: `${l.stateCode.toLowerCase()}-${l.localCode}`,
    displayName: l.localName,
    subtitle: l.localPermit.submittalBody,
    type: "local",
    stateCode: l.stateCode,
  };
}

// ─── Comparison field definitions ───────────────────────────────────────────
// Each field knows how to extract a value from EITHER a StateRegulation or a
// LocalRegulation (returning "N/A" when not applicable).

export type UnifiedComparisonField = {
  key: string;
  label: string;
  group: "permit" | "waterquality" | "swppp" | "inspections" | "zones";
  getValue: (item: StateRegulation | LocalRegulation) => string;
};

function isLocal(item: StateRegulation | LocalRegulation): item is LocalRegulation {
  return "localCode" in item;
}

export const UNIFIED_COMPARISON_FIELDS: UnifiedComparisonField[] = [
  // ── Permit ──────────────────────────────────────────────────────────────
  {
    key: "permitName",
    label: "Permit / Authorization",
    group: "permit",
    getValue: (item) =>
      isLocal(item)
        ? item.localPermit.required
          ? item.localPermit.name
          : "No local permit required"
        : item.constructionPermit.name,
  },
  {
    key: "submittalBody",
    label: "Submit To",
    group: "permit",
    getValue: (item) =>
      isLocal(item) ? item.localPermit.submittalBody : item.agencyAbbr,
  },
  {
    key: "leadTime",
    label: "Lead Time",
    group: "permit",
    getValue: (item) =>
      isLocal(item)
        ? item.localPermit.leadTime
        : item.constructionPermit.noticePeriod,
  },
  {
    key: "applicationMethod",
    label: "Application Method",
    group: "permit",
    getValue: (item) =>
      isLocal(item)
        ? item.localPermit.applicationMethod
        : item.constructionPermit.applicationMethod,
  },
  {
    key: "fee",
    label: "Fee",
    group: "permit",
    getValue: (item) =>
      isLocal(item)
        ? item.localPermit.fee
        : item.constructionPermit.fee,
  },
  // ── Water Quality ────────────────────────────────────────────────────────
  {
    key: "imperviousCoverLimit",
    label: "Impervious Cover Limit",
    group: "waterquality",
    getValue: (item) =>
      isLocal(item) ? item.waterQuality.imperviousCoverLimit : "No statewide limit",
  },
  {
    key: "onSiteTreatment",
    label: "On-Site Treatment Required",
    group: "waterquality",
    getValue: (item) =>
      isLocal(item)
        ? item.waterQuality.onSiteTreatmentRequired
          ? "Yes"
          : "No"
        : "Not specified at state level",
  },
  {
    key: "detention",
    label: "Detention Required",
    group: "waterquality",
    getValue: (item) =>
      isLocal(item)
        ? item.waterQuality.detentionRequired
          ? `Yes — ${item.waterQuality.detentionStandard}`
          : "No"
        : "Not specified at state level",
  },
  {
    key: "turbidity",
    label: "Turbidity / Discharge Standard",
    group: "waterquality",
    getValue: (item) =>
      isLocal(item)
        ? item.waterQuality.turbidityStandard
        : item.dischargeStandards.turbidityLimit,
  },
  // ── SWPPP ────────────────────────────────────────────────────────────────
  {
    key: "swpppRequired",
    label: "SWPPP / Local Plan Required",
    group: "swppp",
    getValue: (item) =>
      isLocal(item)
        ? item.swppp.localPlanRequired
          ? `Yes — ${item.swppp.localPlanName}`
          : "No local plan"
        : item.swppp.required
        ? "Yes"
        : "No",
  },
  {
    key: "peStamp",
    label: "PE Stamp Required",
    group: "swppp",
    getValue: (item) =>
      isLocal(item)
        ? item.swppp.peStampRequired
          ? "Yes"
          : "No"
        : item.swppp.peCertRequired
        ? "Yes"
        : "No",
  },
  // ── Inspections ──────────────────────────────────────────────────────────
  {
    key: "inspectionFreq",
    label: "Inspection Requirements",
    group: "inspections",
    getValue: (item) =>
      isLocal(item)
        ? item.inspections.localRequirements
        : item.inspections.frequency,
  },
  {
    key: "inspectorQual",
    label: "Inspector Qualification",
    group: "inspections",
    getValue: (item) =>
      isLocal(item)
        ? item.inspections.qualificationRequired
        : item.inspections.qualificationRequired,
  },
  // ── Design Manual ────────────────────────────────────────────────────────
  {
    key: "designManual",
    label: "Local Design Manual",
    group: "zones",
    getValue: (item) =>
      isLocal(item)
        ? item.designManual.required
          ? item.designManual.name
          : "Not required"
        : "N/A — state level",
  },
  // ── Special Zones ────────────────────────────────────────────────────────
  {
    key: "specialZones",
    label: "Special Overlay Zones",
    group: "zones",
    getValue: (item) =>
      isLocal(item)
        ? item.specialZones.length > 0
          ? item.specialZones.map((z) => z.name).join(", ")
          : "None"
        : "N/A — see local jurisdictions",
  },
];
