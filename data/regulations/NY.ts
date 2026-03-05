import { StateRegulation } from "../types";

export const NY: StateRegulation = {
  stateCode: "NY",
  stateName: "New York",
  agency: "New York State Department of Environmental Conservation",
  agencyAbbr: "NYSDEC",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "SPDES General Permit for Stormwater Discharges from Construction Activity (GP-0-20-001)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan)",
    noticePeriod: "NOI must be submitted at least 3 business days before construction begins",
    applicationMethod: "Online via NYSDEC's eDEC system or paper submission",
    fee: "$2,250 flat fee for most projects (one of the higher fees nationally)",
  },
  swppp: {
    required: true,
    peCertRequired: true,
    templateAvailable: true,
    notes: "New York requires a licensed Professional Engineer (PE) or Registered Landscape Architect (RLA) to prepare and certify the SWPPP for sites ≥ 5 acres. Sites < 5 acres may use a Qualified Inspector for preparation but must have a PE/RLA certify it if required by the local municipality.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a storm event producing ≥ 0.5 inches of rainfall (or ≥ 0.25 inches if site is near a 303(d) listed water body)",
    qualificationRequired: "Trained Contractor (TC) for routine inspections; Qualified Inspector (QI) for sites ≥ 5 acres or near sensitive water bodies. QI certification required through NYSDEC-approved training.",
  },
  postConstruction: {
    required: true,
    notes: "Projects that create ≥ 1 acre of impervious surface must implement post-construction stormwater management practices per the New York State Stormwater Management Design Manual. A long-term Operation and Maintenance Agreement may be required.",
  },
  dischargeStandards: {
    turbidityLimit: "Not specified as a numeric standard; discharges must not cause or contribute to violations of water quality standards. Turbidity benchmarks apply for sites near 303(d)-listed waters.",
    notes: "Sites near 303(d)-listed water bodies or within a phosphorus-sensitive watershed trigger additional requirements including soil disturbance limits and more stringent BMPs.",
  },
  officialLinks: {
    agencyUrl: "https://dec.ny.gov/",
    permitApplicationUrl: "https://extapps.dec.ny.gov/cfmx/extapps/edmr/fac_detail.cfm",
    regulationDocUrl: "https://dec.ny.gov/permits/50285.html",
  },
  lastVerified: "2025-01",
  notes: "New York's SPDES permit is state-specific (not NPDES) but federally equivalent. The $2,250 flat fee is among the highest in the country. NYC and surrounding counties may have additional local stormwater requirements.",
};
