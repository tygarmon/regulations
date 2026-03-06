import { StateRegulation } from "../types";

export const NY: StateRegulation = {
  stateCode: "NY",
  stateName: "New York",
  agency: "New York State Department of Environmental Conservation",
  agencyAbbr: "NYSDEC",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "SPDES General Permit for Stormwater Discharges from Construction Activity (GP-0-25-001)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan). NYC East of Hudson watershed: ≥ 5,000 sq ft. City of New York municipal boundaries: ≥ 20,000 sq ft.",
    noticePeriod: "Electronic NOI (eNOI) required; NYSDEC issues a Letter of Authorization (LOA) specifying the authorized construction start date",
    applicationMethod: "Online via NYSDEC's eDEC system — electronic eNOI submission now mandatory (paper no longer accepted)",
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
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall (≥ 0.25 inches if site drains to a 303(d) impaired water body)",
    acceptedCertifications: "NYS DEC-approved erosion and sediment control training REQUIRED; CPESC, CESSWI explicitly listed as qualifying credentials in the SPDES CGP",
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
  lastVerified: "2026-03",
  notes: "New York's SPDES permit is state-specific (not NPDES) but federally equivalent. GP-0-25-001 took effect January 29, 2025, replacing GP-0-20-001. Key changes under the new permit: electronic eNOI submission via eDEC is now mandatory (paper no longer accepted); NYSDEC issues a Letter of Authorization (LOA) specifying the authorized construction start date; lower disturbance thresholds apply within the NYC East of Hudson watershed (≥ 5,000 sq ft) and within NYC municipal boundaries (≥ 20,000 sq ft). The $2,250 flat fee is among the highest in the country. NYC and surrounding counties may have additional local stormwater requirements. Operators who had coverage under GP-0-20-001 must obtain new authorization under GP-0-25-001 — coverage does not automatically transfer.",
};
