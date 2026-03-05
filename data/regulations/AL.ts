import { StateRegulation } from "../types";

export const AL: StateRegulation = {
  stateCode: "AL",
  stateName: "Alabama",
  agency: "Alabama Department of Environmental Management",
  agencyAbbr: "ADEM",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit ALR100000 (Construction General Permit)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale",
    noticePeriod: "NOI must be submitted and permit coverage obtained at least 2 days before construction activity begins",
    applicationMethod: "Paper NOI submission to ADEM Water Division; online submission available through ADEM e-Portal for some permit types",
    fee: "$0 — Alabama does not charge a permit fee for the construction general permit NOI",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be prepared prior to submitting the NOI and must be kept on-site. ADEM provides a SWPPP template/guidance document. The SWPPP must be signed by a responsible corporate officer or authorized representative. No PE stamp is required, but the plan must be developed by a qualified person.",
  },
  inspections: {
    frequency: "At least every 14 calendar days and within 24 hours of a storm event that produces 0.5 inches or more of rainfall at the site",
    qualificationRequired: "Inspections must be performed by a qualified person with construction stormwater knowledge; Alabama does not have a state-specific inspector certification program, but the inspector must be familiar with BMPs and the SWPPP",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required for regulated MS4 communities under Phase I and Phase II rules. Individual construction permit coverage ends upon site stabilization and Notice of Termination (NOT) filing. Long-term stormwater management BMPs are typically addressed through local MS4 ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit in the construction general permit; narrative water quality standard applies",
    notes: "Discharges must not cause or contribute to a violation of Alabama water quality standards. The permit requires BMPs to minimize sediment and turbidity. Discharges to impaired water bodies (303(d) listed) may trigger additional effluent limitations or require an individual permit.",
  },
  officialLinks: {
    agencyUrl: "https://adem.alabama.gov/",
    permitApplicationUrl: "https://adem.alabama.gov/programs/water/constructionstormwater.cnt",
    regulationDocUrl: "https://adem.alabama.gov/programs/water/wPDFs/ALR100000Permit.pdf",
  },
  lastVerified: "2025-01",
  notes: "Alabama has a $0 permit fee for construction stormwater, which is notable among southeastern states. The NOI must include a signed certification and the SWPPP must reference ADEM-approved BMPs. Sites within sensitive watersheds or near Outstanding Alabama Waters may face enhanced review. ADEM issues permit coverage typically within a few business days of a complete NOI submission.",
};
