import { StateRegulation } from "../types";

export const TX: StateRegulation = {
  stateCode: "TX",
  stateName: "Texas",
  agency: "Texas Commission on Environmental Quality",
  agencyAbbr: "TCEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Construction General Permit (TXR150000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development)",
    noticePeriod: "Must file NOI and receive authorization before construction begins",
    applicationMethod: "Online via TCEQ Water Quality ePay system",
    fee: "$325 for projects disturbing < 5 acres; $525 for ≥ 5 acres",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "SWPPP must be on-site and available for inspection. TCEQ provides a sample SWPPP template.",
  },
  inspections: {
    frequency: "Every 14 days and within 24 hours of a rainfall event producing ≥ 0.5 inches",
    qualificationRequired: "Stormwater Pollution Prevention Plan (SWPPP) Inspector — no state license required but must be knowledgeable",
    rainTrigger: "Within 24 hours of a rainfall event producing ≥ 0.5 inches",
    acceptedCertifications: "No state-specific cert required; inspector must be 'knowledgeable' in permit requirements and BMP implementation; CPESC, CESSWI accepted but not mandated by TCEQ",
  },
  postConstruction: {
    required: true,
    notes: "Phase II MS4 communities must adopt post-construction stormwater management programs. Requirements vary by municipality.",
  },
  dischargeStandards: {
    turbidityLimit: "Not specified in CGP; discharges must not cause or contribute to violations of water quality standards",
    notes: "Effluent limits apply at the point of discharge. Visual monitoring required.",
  },
  officialLinks: {
    agencyUrl: "https://www.tceq.texas.gov/",
    permitApplicationUrl: "https://www.tceq.texas.gov/permitting/stormwater/construction",
    regulationDocUrl: "https://www.tceq.texas.gov/downloads/permitting/stormwater/general/construction/2023-cgp-txr150000.pdf",
  },
  lastVerified: "2025-01",
  notes: "Texas operates one of the most active stormwater construction permit programs in the country. Projects near impaired water bodies or Edwards Aquifer zones may have additional requirements.",
};
