export type NpdesStatus = "delegated" | "epa-administered";

export type StateRegulation = {
  stateCode: string; // "TX"
  stateName: string; // "Texas"
  agency: string; // "Texas Commission on Environmental Quality"
  agencyAbbr: string; // "TCEQ"
  npdesStatus: NpdesStatus;
  constructionPermit: {
    name: string; // e.g. "Construction General Permit (CGP)"
    threshold: string; // e.g. "≥ 1 acre of land disturbance"
    noticePeriod: string; // e.g. "7 days before construction start"
    applicationMethod: string; // e.g. "Online via ePermits"
    fee: string; // e.g. "$100 per acre, $500 minimum"
  };
  swppp: {
    required: boolean;
    peCertRequired: boolean;
    templateAvailable: boolean;
    notes: string;
  };
  inspections: {
    frequency: string; // e.g. "Every 14 days and within 24 hours of ≥0.5\" rainfall"
    qualificationRequired: string; // e.g. "Trained Stormwater Inspector"
  };
  postConstruction: {
    required: boolean;
    notes: string;
  };
  dischargeStandards: {
    turbidityLimit: string; // e.g. "280 NTU" or "Not specified"
    notes: string;
  };
  officialLinks: {
    agencyUrl: string;
    permitApplicationUrl: string;
    regulationDocUrl: string;
  };
  lastVerified: string; // "YYYY-MM" or "pending"
  notes: string; // State-specific quirks or additional context
};

// For the comparison table, a flat list of fields with labels
export type ComparisonField = {
  key: string;
  label: string;
  getValue: (s: StateRegulation) => string;
};

export const COMPARISON_FIELDS: ComparisonField[] = [
  { key: "npdesStatus", label: "NPDES Program", getValue: (s) => s.npdesStatus === "delegated" ? "State-Delegated" : "EPA-Administered" },
  { key: "agency", label: "Permitting Agency", getValue: (s) => `${s.agency} (${s.agencyAbbr})` },
  { key: "permitName", label: "Permit Name", getValue: (s) => s.constructionPermit.name },
  { key: "threshold", label: "Construction Threshold", getValue: (s) => s.constructionPermit.threshold },
  { key: "noticePeriod", label: "NOI Lead Time", getValue: (s) => s.constructionPermit.noticePeriod },
  { key: "applicationMethod", label: "Application Method", getValue: (s) => s.constructionPermit.applicationMethod },
  { key: "fee", label: "Permit Fee", getValue: (s) => s.constructionPermit.fee },
  { key: "swpppRequired", label: "SWPPP Required", getValue: (s) => s.swppp.required ? "Yes" : "No" },
  { key: "peCertRequired", label: "PE Certification Required", getValue: (s) => s.swppp.peCertRequired ? "Yes" : "No" },
  { key: "swpppTemplate", label: "SWPPP Template Available", getValue: (s) => s.swppp.templateAvailable ? "Yes" : "No" },
  { key: "inspectionFrequency", label: "Inspection Frequency", getValue: (s) => s.inspections.frequency },
  { key: "inspectorQualification", label: "Inspector Qualification", getValue: (s) => s.inspections.qualificationRequired },
  { key: "postConstruction", label: "Post-Construction Required", getValue: (s) => s.postConstruction.required ? "Yes" : "No" },
  { key: "turbidityLimit", label: "Turbidity Standard", getValue: (s) => s.dischargeStandards.turbidityLimit },
];
