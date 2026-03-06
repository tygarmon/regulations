import { StateRegulation } from "../types";

export const ME: StateRegulation = {
  stateCode: "ME",
  stateName: "Maine",
  agency: "Maine Department of Environmental Protection",
  agencyAbbr: "DEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Maine Multi-Sector General Permit for Stormwater Discharges — Construction Activity (Permit No. MER10I000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale)",
    noticePeriod: "NOI must be submitted and acknowledged before land disturbance begins; no fixed statutory lead time specified in permit, but DEP recommends submitting at least 14 days before construction",
    applicationMethod: "Paper NOI submitted to Maine DEP; online submission available through the Maine DEP e-permitting portal (EDEP) for some applications",
    fee: "$200 NOI filing fee for sites disturbing 1–4.99 acres; $500 for sites disturbing ≥ 5 acres; fees payable to Treasurer, State of Maine",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "SWPPP must be prepared prior to submitting the NOI and must be kept on-site and available for inspection. Maine DEP provides a SWPPP template and guidance document. The SWPPP preparer must be knowledgeable in the principles of erosion and sediment control but a PE stamp is not required by the general permit. Certified Erosion and Sediment Control Lead (CESCL) training is strongly encouraged.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours after any storm event producing ≥ 0.5 inches of rainfall in a 24-hour period; inspection frequency may be reduced to every 14 days for stabilized areas",
    qualificationRequired: "Inspections must be conducted by a person knowledgeable in the principles and practice of erosion and sediment control; Maine DEP strongly recommends Certified Erosion and Sediment Control Lead (CESCL) — a nationally recognized credential — but it is not mandated by the permit",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "State-approved CESCL (Certified Erosion and Sediment Control Lead), CESSWI, or CPESC REQUIRED for site inspectors; Maine DEP enforces this requirement",
  },
  postConstruction: {
    required: true,
    notes: "Maine Stormwater Management Law (38 M.R.S. §420-D) requires post-construction stormwater management for projects disturbing ≥ 1 acre in a Tier 2 or higher water or in a shoreland zone. Separate DEP Stormwater Management permits (Tier 1, 2, or 3) govern post-construction runoff and must be obtained in addition to the construction general permit for applicable sites.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit specified in the construction general permit; narrative standard requires discharges not to cause or contribute to violations of Maine's water quality standards (Class A, B, or C waters)",
    notes: "Maine water quality standards prohibit discharges that cause turbidity, color, or other conditions that unreasonably affect existing or designated uses. Sites discharging to Outstanding River Segments or Class AA/GPA waters face additional protective requirements. Visual monitoring of discharge points is required at each inspection.",
  },
  officialLinks: {
    agencyUrl: "https://www.maine.gov/dep/",
    permitApplicationUrl: "https://www.maine.gov/dep/land/stormwater/constructionstormwater.html",
    regulationDocUrl: "https://www.maine.gov/dep/land/stormwater/constructionstormwater.html",
  },
  lastVerified: "2025-01",
  notes: "Maine is a delegated NPDES state. Notably, Maine has a parallel state Stormwater Management permit program under 38 M.R.S. §420-D that applies post-construction and may require a separate Tier 1, 2, or 3 permit depending on project size and receiving water classification — this is distinct from and in addition to the construction general permit NOI. Sites near lakes, rivers, or coastal waters classified as Tier 3 (Outstanding Natural Resources Waters) face the most stringent requirements. Maine's shoreland zoning laws may also impose additional setback and disturbance restrictions.",
};
