import { StateRegulation } from "../types";

export const CA: StateRegulation = {
  stateCode: "CA",
  stateName: "California",
  agency: "State Water Resources Control Board",
  agencyAbbr: "SWRCB",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Construction General Permit (Order 2009-0009-DWQ, as amended)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan)",
    noticePeriod: "NOI must be filed and permit coverage obtained before grading/construction begins",
    applicationMethod: "Online via Stormwater Multiple Application and Report Tracking System (SMARTS)",
    fee: "Annual fee based on acreage: < 5 acres = $900; 5–49 acres = $1,200; ≥ 50 acres = $2,200",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "California uses a Risk Level system (Risk Level 1, 2, or 3) that determines SWPPP complexity and monitoring requirements. Higher risk levels require more rigorous controls.",
  },
  inspections: {
    frequency: "Risk Level 1: Visual inspections every 24 hours during active rain. Risk Level 2–3: Rain Event Action Plans required; inspections during and after qualifying storms",
    qualificationRequired: "Qualified SWPPP Practitioner (QSP) for Risk Level 2 and 3 sites; Qualified SWPPP Developer (QSD) must prepare the SWPPP",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction requirements depend on local jurisdiction and whether the site is in an MS4 area. Many municipalities require Low Impact Development (LID) features and permanent BMPs.",
  },
  dischargeStandards: {
    turbidityLimit: "Risk Level 3 sites: effluent must meet 10 NTU turbidity limit at discharge point; Risk Level 2: 250 NTU; Risk Level 1: narrative standard",
    notes: "California has some of the most stringent discharge standards in the country, particularly for high-risk sites near sensitive receiving waters.",
  },
  officialLinks: {
    agencyUrl: "https://www.waterboards.ca.gov/",
    permitApplicationUrl: "https://smarts.waterboards.ca.gov/",
    regulationDocUrl: "https://www.waterboards.ca.gov/water_issues/programs/stormwater/constpermits.html",
  },
  lastVerified: "2025-01",
  notes: "California's three-tier Risk Level system is unique among states and drives significantly different requirements for BMPs, monitoring, and reporting. Risk Level is determined by a rainfall erosivity factor and proximity to water bodies.",
};
