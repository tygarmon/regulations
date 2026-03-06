import { StateRegulation } from "../types";

export const VA: StateRegulation = {
  stateCode: "VA",
  stateName: "Virginia",
  agency: "Virginia Department of Environmental Quality",
  agencyAbbr: "VDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "General VPDES Permit for Discharges of Stormwater from Construction Activities (VAR10)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre)",
    noticePeriod: "NOI must be submitted and permit coverage obtained at least 7 days before land disturbance begins; operator must wait for permit coverage confirmation from VDEQ before commencing disturbance",
    applicationMethod: "Online via VDEQ's ePermitting portal (VDEQ Online Services); paper NOI also accepted",
    fee: "$750 base registration statement fee for projects < 1 acre (common plan); $750 for 1–5 acres; $1,000 for 5–10 acres; $2,000 for 10–50 acres; $3,000 for ≥ 50 acres (fees established under 9VAC25-870)",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Virginia calls the SWPPP a Stormwater Pollution Prevention Plan (SWPPP). It must be prepared before land disturbance begins and kept on site. VDEQ provides a sample SWPPP template. The plan must be prepared by or under the supervision of a Responsible Land Disturber (RLD) or a Certified Plan Reviewer. No PE stamp is required by state regulation for the SWPPP itself, though some local programs may require it. The SWPPP must be updated whenever site conditions change.",
  },
  inspections: {
    frequency: "At least once every 14 calendar days and within 48 hours following any runoff-producing storm event; inspections must be conducted during normal business hours unless a rainfall event occurs outside those hours",
    qualificationRequired: "Inspections must be conducted by or under the oversight of a Responsible Land Disturber (RLD) — a state-issued certification from VDEQ. RLD certification requires completion of a VDEQ-approved training course and passing an exam. The RLD is also responsible for SWPPP implementation.",
    rainTrigger: "Within 48 hours of any runoff-producing storm event (no fixed inch threshold — discharge-based trigger; 48-hour window differs from most states)",
    acceptedCertifications: "Qualified Personnel (QP) Certificate from DEQ REQUIRED as of July 1, 2025; Responsible Land Disturber (RLD) is a prerequisite; licensed PE or DEQ Dual Inspector cert also qualifies",
  },
  postConstruction: {
    required: true,
    notes: "Virginia's Stormwater Management Act (9VAC25-870, the VSMP Regulation) requires post-construction stormwater management for projects disturbing ≥ 2,500 sq ft in MS4 jurisdictions or ≥ 1 acre elsewhere. Requirements include channel protection, flood protection, water quality (phosphorus load reduction), and quantity controls. Local Stormwater Management Programs (VSMPs) administer post-construction requirements. Projects must achieve a 20% phosphorus load reduction relative to pre-development conditions unless meeting a waiver or grandfathering provision.",
  },
  dischargeStandards: {
    turbidityLimit: "No specific numeric NTU limit in the construction general permit; discharges must not cause or contribute to violations of Virginia Water Quality Standards (9VAC25-260)",
    notes: "Virginia water quality standards include narrative criteria for turbidity and other parameters. Discharges to waters classified as Exceptional State Waters or waters with a TMDL for sediment/turbidity may be subject to enhanced requirements. Visual monitoring is required during inspections. The permit requires best management practices (BMPs) to minimize pollutant discharges.",
  },
  officialLinks: {
    agencyUrl: "https://www.deq.virginia.gov/",
    permitApplicationUrl: "https://www.deq.virginia.gov/permits-regulations/permits/water/stormwater/construction-stormwater",
    regulationDocUrl: "https://law.lis.virginia.gov/admincode/title9/agency25/chapter880/",
  },
  lastVerified: "2025-01",
  notes: "Virginia operates its own state permit program (VPDES) with authority delegated from EPA. The state has a unique dual-layer system: VDEQ issues the statewide general permit (VAR10), but localities with approved Virginia Stormwater Management Programs (VSMPs) — including most cities and counties — administer erosion and sediment control and post-construction requirements locally. Operators must register with both VDEQ (for VAR10 coverage) and the local VSMP authority. The Responsible Land Disturber (RLD) certification is a notable state-specific requirement. Virginia also has a stringent Erosion and Sediment Control (ESC) program under 9VAC25-840 that runs parallel to VPDES requirements.",
};
