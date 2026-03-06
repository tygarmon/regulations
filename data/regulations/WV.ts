import { StateRegulation } from "../types";

export const WV: StateRegulation = {
  stateCode: "WV",
  stateName: "West Virginia",
  agency: "West Virginia Department of Environmental Protection",
  agencyAbbr: "WVDEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "General NPDES Permit for Stormwater Discharges from Construction Activities (WV0115924 / General Permit WVG310000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre)",
    noticePeriod: "NOI (Notice of Intent) must be submitted to WVDEP at least 3 business days before land disturbance commences; permit coverage is effective upon WVDEP's issuance of a coverage letter",
    applicationMethod: "Paper NOI submitted to WVDEP Office of Water Resources, Land Protection Section; online submission via WV DEP ePlanning portal available for some permit types — verify current availability for construction general permit",
    fee: "$500 for projects disturbing < 5 acres; $1,000 for projects disturbing 5–25 acres; $2,000 for projects disturbing > 25 acres; fees payable to WVDEP at time of NOI submission",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required and must be developed prior to commencement of land disturbance. WVDEP provides a SWPPP template and guidance document. The SWPPP must be kept on site and made available to WVDEP inspectors upon request. No professional engineer stamp is required by the general permit for the SWPPP, but a Qualified Inspector must review and certify inspections. The SWPPP must be amended when site conditions or BMPs change.",
  },
  inspections: {
    frequency: "At least once every 7 calendar days and within 24 hours of any rainfall event that results in runoff from the construction site; inspection records must be retained for 3 years",
    qualificationRequired: "Inspections must be conducted by a Qualified Inspector — defined in WVG310000 as an individual who has completed a WVDEP-approved erosion and sediment control or stormwater training course. West Virginia does not have a separate state certification program equivalent to some other states, but WVDEP-approved training (such as the WV Land Development Stormwater Training Program) is required.",
    rainTrigger: "Within 24 hours of any rainfall event that results in runoff from the construction site (discharge-based trigger)",
    acceptedCertifications: "WVDEP-approved training REQUIRED (e.g., WV Land Development Stormwater Training Program); no separate state certification credential equivalent, but training completion is mandatory",
  },
  postConstruction: {
    required: true,
    notes: "West Virginia Phase II MS4 permit holders (municipalities and counties) must implement post-construction stormwater management programs. State-level post-construction requirements for non-MS4 areas are addressed through conditions in individual permits and the general permit. Projects affecting Waters of the State designated as exceptional use waters (Tier III) or waters with TMDLs are subject to enhanced controls. The general permit requires final stabilization of all disturbed areas before permit termination.",
  },
  dischargeStandards: {
    turbidityLimit: "No specific numeric NTU limit in the construction general permit; discharges must comply with West Virginia water quality standards (47 CSR 2)",
    notes: "West Virginia water quality standards contain narrative turbidity criteria: discharges must not cause turbidity that substantially impairs the designated uses of the receiving water. Projects discharging to cold water fishery streams (Trout Waters) or outstanding national resource waters have additional narrative requirements. Visual monitoring is required during all site inspections. WVDEP may establish numeric turbidity limits through individual permit conditions for sensitive receiving waters.",
  },
  officialLinks: {
    agencyUrl: "https://dep.wv.gov/",
    permitApplicationUrl: "https://dep.wv.gov/WWE/Programs/stormwater/CSW/Pages/default.aspx",
    regulationDocUrl: "https://dep.wv.gov/WWE/Programs/stormwater/CSW/Pages/default.aspx",
  },
  lastVerified: "2025-01",
  notes: "West Virginia has NPDES authority delegated from EPA and administers its program through the Office of Water Resources. A notable state-specific feature is the overlap with the Surface Mining Control and Reclamation Act (SMCRA) program — construction sites near or on former coal mining lands may have additional requirements administered by WVDEP's Office of Mining and Reclamation. The state's extensive network of trout streams and cold water fisheries triggers additional scrutiny for projects near those waters. Operators should also be aware of the WV Erosion and Sediment Control program (47 CSR 5), which runs concurrently with NPDES requirements.",
};
