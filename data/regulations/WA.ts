import { StateRegulation } from "../types";

export const WA: StateRegulation = {
  stateCode: "WA",
  stateName: "Washington",
  agency: "Washington State Department of Ecology",
  agencyAbbr: "Ecology",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Construction Stormwater General Permit (CSGP) — effective January 1, 2026 through December 31, 2030",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan)",
    noticePeriod: "NOI must be submitted at least 60 days before any land-disturbing activities begin (increased from prior ~38-day target under the 2021 permit). Permit coverage must be confirmed before breaking ground.",
    applicationMethod: "Online via Ecology's Permit and Reporting Information System (PARIS)",
    fee: "Annual fee ranging from $800 (< 1 acre) to $4,800 (≥ 100 acres)",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Washington uses a site-specific Stormwater Pollution Prevention Plan (SWPPP). Ecology provides templates and a comprehensive SWPPP manual. A Certified Erosion and Sediment Control Lead (CESCL) must prepare and certify the SWPPP for all sites under the 2026 CSGP.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period. Turbidity monitoring required at the discharge point. Under the 2026 CSGP, sites ≤ 1 acre must also conduct weekly turbidity/transparency and pH sampling at the discharge point.",
    qualificationRequired: "Certified Erosion and Sediment Control Lead (CESCL) required for ALL site inspections under the 2026 CSGP — including sites ≤ 1 acre (previously non-certified personnel could inspect smaller sites). CESCL certification through Ecology-approved training; renewal required every 3 years.",
    rainTrigger: "Within 24 hours of any storm event producing ≥ 0.5 inches of rainfall in a 24-hour period; turbidity monitoring required at all discharge points after each event",
    acceptedCertifications: "Certified Erosion and Sediment Control Lead (CESCL) REQUIRED for ALL sites including ≤ 1 acre under the 2026 CSGP; Ecology-approved training provider required; renewal every 3 years",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required for projects creating ≥ 2,000 sq ft of new/replaced impervious surface. Requirements follow the Stormwater Management Manual for Western or Eastern Washington depending on geography.",
  },
  dischargeStandards: {
    turbidityLimit: "Discharges must not cause receiving water turbidity to exceed 5 NTU above background for fresh waters with naturally clear water; 10 NTU above background in other fresh waters. Numeric effluent limits apply: 25 NTU in some cases.",
    notes: "Washington has some of the most stringent turbidity standards in the country. Turbidity monitoring at the discharge point is required and results must be reported. Exceedances can result in Corrective Action requirements.",
  },
  officialLinks: {
    agencyUrl: "https://ecology.wa.gov/",
    permitApplicationUrl: "https://ecology.wa.gov/water-shorelines/water-quality/permits/paris",
    regulationDocUrl: "https://ecology.wa.gov/regulations-permits/permits-certifications/permits-licenses-authorizations/npdes-stormwater-permits/construction-stormwater-general-permit",
  },
  lastVerified: "2026-03",
  permitExpires: "2030-12-31", // 2026 CSGP effective Jan 1 2026 through Dec 31 2030
  notes: "Washington's 2026 CSGP (issued November 19, 2025, effective January 1, 2026) replaced the prior 2021 permit. Key changes: CESCL certification is now required for ALL site inspections regardless of site size; sites ≤ 1 acre must conduct weekly turbidity/transparency and pH sampling; NOI lead time increased to 60 days. Sites in watersheds with low dissolved oxygen impairments may face numeric turbidity effluent limits. Washington's CESCL certification is one of the more stringent state inspector programs in the country. The state is divided into Western and Eastern Washington stormwater regions, each with separate design manuals reflecting vastly different precipitation patterns.",
};
