import { StateRegulation } from "../types";

export const WA: StateRegulation = {
  stateCode: "WA",
  stateName: "Washington",
  agency: "Washington State Department of Ecology",
  agencyAbbr: "Ecology",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Construction Stormwater General Permit (CSGP)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan)",
    noticePeriod: "NOI must be submitted and permit coverage confirmed before any land-disturbing activities begin. Ecology targets a 38-day review period.",
    applicationMethod: "Online via Ecology's Permit and Reporting Information System (PARIS)",
    fee: "Annual fee ranging from $800 (< 1 acre) to $4,800 (≥ 100 acres)",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Washington uses a site-specific Stormwater Pollution Prevention Plan (SWPPP). Ecology provides templates and a comprehensive SWPPP manual. A Certified Erosion and Sediment Control Lead (CESCL) must prepare and certify the SWPPP.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period. Turbidity monitoring required at the discharge point.",
    qualificationRequired: "Certified Erosion and Sediment Control Lead (CESCL) — state-mandated certification through Ecology-approved training program. Renewal required every 3 years.",
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
  lastVerified: "2025-01",
  notes: "Washington's CESCL certification is mandatory and one of the more stringent state inspector programs in the country. The state is divided into Western and Eastern Washington stormwater regions, each with separate design manuals and requirements reflecting vastly different precipitation patterns.",
};
