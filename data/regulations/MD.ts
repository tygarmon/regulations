import { StateRegulation } from "../types";

export const MD: StateRegulation = {
  stateCode: "MD",
  stateName: "Maryland",
  agency: "Maryland Department of the Environment",
  agencyAbbr: "MDE",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Associated with Construction Activity (Permit No. 12-SW)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); sites disturbing < 5,000 sq ft in certain Priority Protection Areas may also require coverage",
    noticePeriod: "NOI must be submitted and MDE must issue permit coverage before land disturbance begins; MDE typically processes NOIs within 7–14 days, but applicants should plan for up to 30 days; no grading may begin until written authorization is received",
    applicationMethod: "Online submission through MDE's Electronic Document Management System (EDMS) / MDE Online Permitting portal; paper NOI also accepted; local Approving Authority (county or municipality) approval of grading and sediment control plan is a prerequisite",
    fee: "$1,600 base fee for sites disturbing ≥ 1 acre but < 5 acres; $2,900 for 5–9.99 acres; $5,100 for 10–19.99 acres; $7,000 for 20–49.99 acres; $9,600 for ≥ 50 acres; fees are paid to MDE at time of NOI submission",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Maryland requires a Stormwater Pollution Prevention Plan (SWPPP) as part of the permit. In Maryland, the SWPPP is often integrated with the state-required Erosion and Sediment Control (ESC) Plan, which must be approved by the local Approving Authority before a grading permit is issued. MDE provides guidance documents and template language. A PE stamp is not required on the SWPPP itself, but the ESC Plan often must be prepared by a licensed engineer or landscape architect per local requirements. The SWPPP must be kept on-site.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours after any storm event producing ≥ 0.5 inches of rainfall; stabilized areas may be inspected every 14 days; local erosion and sediment control inspectors from the county or municipality also conduct compliance inspections throughout the project",
    qualificationRequired: "Maryland requires that SWPPP inspections be conducted by a person with Erosion and Sediment Control certification; Maryland's state certification program is the Erosion and Sediment Control Inspector certification administered by MDE in coordination with local jurisdictions; all inspectors on covered sites are required to be trained",
    rainTrigger: "Within 24 hours of any storm event producing ≥ 0.5 inches of rainfall",
    acceptedCertifications: "Maryland MDE Erosion and Sediment Control Inspector certification REQUIRED (state-specific); licensed PE or CPESC may be accepted in lieu; MDE-approved training is the baseline",
  },
  postConstruction: {
    required: true,
    notes: "Maryland has one of the most comprehensive post-construction stormwater management programs in the country, codified under the Maryland Stormwater Management Act of 2007 and implemented via COMAR 26.17.04. Projects must meet Environmental Site Design (ESD) performance standards, which aim to replicate pre-development hydrology using the smallest, most cost-effective BMP. A separate State Stormwater Management Permit is required for applicable new development and redevelopment projects. The 2009 Design Manual governs post-construction requirements.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the construction general permit; narrative standard requires discharges to meet Maryland's water quality standards; discharges must not cause or contribute to a violation of the antidegradation policy",
    notes: "Maryland applies antidegradation policies under COMAR 26.08.02. Sites discharging to Use IV (Recreational Trout Waters), Use IIIp (Natural Trout Waters), or nontidal wetlands face heightened protection requirements. Visual monitoring and benchmarks apply. Maryland's TMDL-impaired waters list may impose additional permit conditions or require individual permit coverage rather than general permit coverage.",
  },
  officialLinks: {
    agencyUrl: "https://mde.maryland.gov/",
    permitApplicationUrl: "https://mde.maryland.gov/programs/water/wwp/pages/gp_construction.aspx",
    regulationDocUrl: "https://mde.maryland.gov/programs/water/wwp/pages/gp_construction.aspx",
  },
  lastVerified: "2025-01",
  notes: "Maryland is unique in that construction stormwater permitting is a dual-layer system: the state issues the NPDES General Permit (No. 12-SW), but local Approving Authorities (counties and municipalities) handle day-to-day Erosion and Sediment Control plan review and inspections under state delegation. Contractors must obtain local ESC plan approval before MDE will issue NPDES coverage. Maryland's ESD-to-the-maximum-extent-practicable post-construction standard is among the most stringent nationally. The Chesapeake Bay watershed context drives particularly rigorous nutrient and sediment controls.",
};
