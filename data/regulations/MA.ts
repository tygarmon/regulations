import { StateRegulation } from "../types";

export const MA: StateRegulation = {
  stateCode: "MA",
  stateName: "Massachusetts",
  agency: "Massachusetts Department of Environmental Protection",
  agencyAbbr: "MassDEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. MAR10)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); Massachusetts also requires coverage for sites that are within certain Zone II (public water supply) or Interim Wellhead Protection Areas regardless of acreage",
    noticePeriod: "NOI must be submitted and permit coverage must be obtained at least 7 days before land disturbance begins; MassDEP issues a permit PIN upon receipt and the 7-day clock begins at that point; for sites with significant potential impacts, longer lead times are advisable",
    applicationMethod: "Online submission via MassDEP's eDEP system (edep.dep.mass.gov); paper NOI also accepted but online is preferred; the NOI package requires a signed SWPPP certification and site map",
    fee: "$1,000 for sites disturbing 1–5 acres; $2,500 for sites disturbing > 5 acres; fees are submitted with the NOI to MassDEP; no annual renewal fee for the construction phase",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A SWPPP must be prepared and certified by the operator before submitting the NOI; the SWPPP need not be submitted to MassDEP with the NOI but must be on-site and available for inspection within 7 days of permit coverage. MassDEP provides a SWPPP template and guidance. A PE stamp is not required by the general permit, but Massachusetts Wetlands Protection Act (310 CMR 10) and local conservation commission orders may impose additional engineering requirements. SWPPP must be updated if site conditions change significantly.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours after any storm event that produces ≥ 0.5 inches of rainfall in a 24-hour period; if a site has been finally stabilized in part, those areas may be inspected every 14 days; inspections must be documented in writing and retained on-site",
    qualificationRequired: "Inspections must be performed by a person who is knowledgeable in the principles and practice of erosion and sediment control; Massachusetts strongly recommends — but does not mandate in the general permit — certification as a Certified Erosion, Sediment, and Storm Water Inspector (CESSWI) or equivalent; some local conservation commission orders require a certified professional",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "No state-specific cert required; EPA CGP requires 'qualified personnel'; CPESC, CESSWI, CISEC accepted; some local Conservation Commission orders require a certified professional",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management in Massachusetts is governed primarily by MassDEP's Stormwater Management Policy (310 CMR 10.05(6)(k)) and the Massachusetts Stormwater Handbook. Projects requiring a Wetlands Order of Conditions must meet the Stormwater Management Standards, which include recharge, water quality volume, and peak rate attenuation requirements. MS4-regulated municipalities must also enforce post-construction controls through local bylaws. Massachusetts Phase II MS4 General Permit (effective 2018) requires municipalities to adopt stormwater management requirements for private development.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit in the construction general permit; narrative standard applies — discharges must not cause or contribute to violations of Massachusetts Surface Water Quality Standards (314 CMR 4)",
    notes: "Massachusetts Surface Water Quality Standards classify waters into classes A, B, SA, SB, SC (tidal). Class A waters have the most stringent protections. Discharges to Outstanding Resource Waters (ORWs) and Special Resource Waters are subject to no-degradation and no-net-loss policies. Visual monitoring required at each inspection. Benchmark monitoring is required for sites near certain sensitive receptors under some individual permit conditions.",
  },
  officialLinks: {
    agencyUrl: "https://www.mass.gov/orgs/massachusetts-department-of-environmental-protection",
    permitApplicationUrl: "https://www.mass.gov/guides/stormwater-from-construction-activity",
    regulationDocUrl: "https://www.mass.gov/doc/npdes-general-permit-for-stormwater-discharges-from-construction-activities/download",
  },
  lastVerified: "2025-01",
  notes: "Massachusetts is unique in that the Wetlands Protection Act (MGL c. 131 §40) creates a parallel permitting track: many construction projects also require an Order of Conditions from the local Conservation Commission if they are within 100 feet of a wetland resource area (200 feet of a perennial stream). The Order of Conditions often contains stormwater conditions that are more stringent than the NPDES construction general permit. Operators must comply with both. Additionally, the Massachusetts Title 5 septic system regulations and the state's Drinking Water Protection regulations may add further stormwater-related restrictions. The eDEP online system is the standard application portal.",
};
