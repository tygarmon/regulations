import { StateRegulation } from "../types";

export const MI: StateRegulation = {
  stateCode: "MI",
  stateName: "Michigan",
  agency: "Michigan Department of Environment, Great Lakes, and Energy",
  agencyAbbr: "EGLE",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. MIG010000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); Michigan also requires permit coverage for any activity that discharges to a water of the state with potential to cause or contribute to a water quality violation",
    noticePeriod: "Notice of Intent (NOI) must be submitted to EGLE and authorization must be received before any land disturbance begins; EGLE provides authorization automatically upon receipt of a complete, valid NOI (the general permit is self-implementing after NOI submittal); applicants are advised to submit at least 14 days before construction start",
    applicationMethod: "Online via Michigan EGLE's MiWaters online permitting system (miwaters.deq.michigan.gov); this is EGLE's primary electronic permitting platform for all NPDES permits; paper NOI forms are available as an alternative",
    fee: "$400 for projects disturbing 1–4.99 acres; $600 for 5–9.99 acres; $800 for 10–24.99 acres; $1,000 for ≥ 25 acres; fees are paid electronically through MiWaters at time of NOI submission",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be developed prior to submitting the NOI and must be on-site and available for review by EGLE or any local authority. EGLE provides a SWPPP template and a detailed SWPPP guidance manual. A PE stamp is not required by the general permit for the SWPPP itself, but a PE may be required under separate state law for certain grading or engineering aspects of the project. The SWPPP must be signed by a responsible corporate officer or authorized representative.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours after any storm event that produces ≥ 0.5 inches of rainfall in a 24-hour period; reduced to every 14 days for areas that have achieved temporary or permanent stabilization; post-storm inspections must document discharge points and BMPs",
    qualificationRequired: "Michigan requires that construction site inspections be performed by a Qualified Operator — defined as a person who has operational responsibility for stormwater discharges at the site and who has completed EGLE's construction stormwater training or equivalent; EGLE offers online training modules; no state professional license is required, but the Michigan SESC Act (Part 91) requires local Soil Erosion and Sedimentation Control (SESC) permits, and local inspectors (often county drain commissioners) enforce SESC separately",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "EGLE-approved training REQUIRED ('Qualified Operator'); CESSWI, CPESC accepted; Michigan Part 91 SESC permit may require separate county-level inspector qualification",
  },
  postConstruction: {
    required: true,
    notes: "Michigan's post-construction stormwater requirements are established under Part 31 of the Natural Resources and Environmental Protection Act (NREPA) and implemented through MS4 permits. MS4-regulated communities must adopt ordinances requiring post-construction stormwater management for new development and redevelopment. Michigan has a statewide Stormwater, Erosion, and Sedimentation Control (SESC) program (Part 91, NREPA) that governs construction-phase erosion control but post-construction BMPs are locally driven. Wetland impacts require separate permits under Part 303 (Wetlands Protection).",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit specified in the construction general permit MIG010000; narrative standard requires discharges not to cause or contribute to violations of Michigan's Water Quality Standards (Part 4, Act 451)",
    notes: "Michigan Water Quality Standards prohibit any discharge that causes measurable changes in turbidity, color, or other water quality parameters from baseline in waters classified as outstanding state resource waters (OSRWs) or outstanding national resource waters (ONRWs). Visual monitoring at discharge points is required at every inspection. Sites discharging to impaired water bodies listed on Michigan's 303(d) list may be ineligible for general permit coverage and may require an individual NPDES permit.",
  },
  officialLinks: {
    agencyUrl: "https://www.michigan.gov/egle/",
    permitApplicationUrl: "https://miwaters.deq.michigan.gov/",
    regulationDocUrl: "https://www.michigan.gov/egle/permits-and-resources/permits/npdes/stormwater/construction",
  },
  lastVerified: "2025-01",
  notes: "Michigan has a dual-track construction stormwater system: the NPDES General Permit (MIG010000) issued by EGLE covers federal water quality requirements, while the state Soil Erosion and Sedimentation Control (SESC) permit under Part 91 of NREPA is administered by local county drain commissioners or road commissions and covers state erosion control requirements. Both permits are required for most land-disturbing activities ≥ 1 acre. Michigan's MiWaters system is well-developed for online permit management. The Great Lakes shoreline and numerous inland lakes create additional sensitive receptor considerations — sites within 500 feet of the Great Lakes or their connecting waters may face enhanced requirements.",
};
