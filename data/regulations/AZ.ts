import { StateRegulation } from "../types";

export const AZ: StateRegulation = {
  stateCode: "AZ",
  stateName: "Arizona",
  agency: "Arizona Department of Environmental Quality",
  agencyAbbr: "ADEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Arizona Pollutant Discharge Elimination System (AZPDES) Construction General Permit (CGP) — Permit No. AZG2025-001 (effective 2025, expires August 28, 2030)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale",
    noticePeriod: "NOI must be submitted and a permit authorization number received before land disturbance begins; ADEQ typically processes NOIs within 5 business days. Existing permittees under AZG2020-001 must submit a new NOI — coverage does not automatically transfer.",
    applicationMethod: "Online via ADEQ's myDEQ portal (azdeq.gov); paper NOI forms also accepted",
    fee: "$500 for sites disturbing ≥ 1 acre and < 5 acres; $750 for ≥ 5 acres; fee is per project",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be prepared and implemented before earth-disturbing activities begin. ADEQ provides a SWPPP template and the Arizona Construction BMP Manual. The SWPPP must be available on-site and presented to inspectors upon request. No PE stamp is required. The SWPPP must identify all potential pollutant sources and describe BMPs to be implemented.",
  },
  inspections: {
    frequency: "At least every 14 calendar days and within 24 hours of a storm event that produces 0.5 inches or more of rainfall at the site; in arid regions, inspection frequency may be adjusted if site conditions warrant",
    qualificationRequired: "Inspections must be performed by a trained individual with knowledge of construction stormwater requirements. Arizona does not require a state-specific certification for inspectors. The permittee or a designated representative familiar with the SWPPP may conduct inspections.",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements are primarily implemented through local municipal ordinances for regulated MS4 communities (e.g., Phoenix, Tucson, Mesa). The AZPDES CGP requires permittees to establish vegetation or other permanent stabilization before filing a Notice of Termination (NOT). Local jurisdictions may require permanent retention/detention basins and Low Impact Development (LID) features.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit in the CGP; narrative water quality standard applies",
    notes: "Discharges must not cause or contribute to a violation of Arizona's surface water quality standards (A.A.C. R18-11). Because Arizona is an arid state, many construction projects do not generate stormwater runoff frequently, but monsoon season (July–September) creates intense rainfall events that require active BMP deployment. Sites near Arizona's ephemeral, intermittent, or perennial waters must implement enhanced BMPs.",
  },
  officialLinks: {
    agencyUrl: "https://azdeq.gov/",
    permitApplicationUrl: "https://azdeq.gov/node/193",
    regulationDocUrl: "https://azdeq.gov/node/193",
  },
  lastVerified: "2026-03",
  notes: "Arizona's arid climate means construction sites may go weeks without rain, but the intense monsoon season (July–September) demands fully operational BMPs. ADEQ uses the AZPDES permit numbering system (not NPDES). AZG2025-001 replaced AZG2020-001 (which had replaced AZG2016-001); coverage under prior permits does not automatically transfer — a new NOI must be submitted via the myDEQ portal. The permit expires August 28, 2030. Projects on tribal lands may require coverage under EPA's federal CGP rather than the AZPDES permit.",
};
