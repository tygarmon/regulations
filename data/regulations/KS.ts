import { StateRegulation } from "../types";

export const KS: StateRegulation = {
  stateCode: "KS",
  stateName: "Kansas",
  agency: "Kansas Department of Health and Environment",
  agencyAbbr: "KDHE",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES Stormwater Runoff from Construction Activities General Permit (Permit KSR100000)",
    threshold: "≥ 1 acre of land disturbance; < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre",
    noticePeriod: "NOI must be submitted to KDHE Bureau of Water at least 2 business days before the commencement of construction activities; permit coverage is effective upon submittal of a complete NOI",
    applicationMethod: "Online via KDHE's Electronic Document Management System (EDMS) or paper NOI submitted to KDHE Bureau of Water, Stormwater Section in Topeka; online submission is preferred",
    fee: "$100 per NOI filing (flat fee); no acreage-based fee structure for the construction general permit",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "SWPPP must be prepared and implemented before land disturbance begins. KDHE provides SWPPP guidance documents and a model SWPPP template on its website. A licensed PE or similar professional is not required to prepare or certify the SWPPP, though local grading or drainage permits may impose additional engineering requirements. The SWPPP must be kept on site and made available during inspections.",
  },
  inspections: {
    frequency: "At least every 14 days and within 24 hours after any storm event resulting in a discharge; sites in high-quality water areas or near impaired waters may require more frequent inspections",
    qualificationRequired: "Inspector must be a qualified person designated by the operator who is knowledgeable in the principles and practice of stormwater pollution prevention; Kansas does not require a state-specific inspector certification for construction stormwater, but CPESC or CESSWI credentials are recognized",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements are implemented through local MS4 permit programs and KDHE's Phase II stormwater regulations. Construction projects that discharge to regulated MS4s must comply with local post-construction ordinances. KDHE does not impose uniform statewide post-construction design standards; local MS4 entities set specific volume and quality requirements.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the general permit; narrative water quality standards apply",
    notes: "Kansas General Permit KSR100000 does not include a numeric turbidity limit. Discharges must not cause or contribute to violations of Kansas Surface Water Quality Standards (K.A.R. 28-16-28e), which include narrative criteria for turbidity and suspended solids. Visual monitoring of discharge points is required. Operators must implement corrective actions if discharges cause visible impacts to receiving waters.",
  },
  officialLinks: {
    agencyUrl: "https://www.kdhe.ks.gov/",
    permitApplicationUrl: "https://www.kdhe.ks.gov/1118/Stormwater",
    regulationDocUrl: "https://www.kdhe.ks.gov/DocumentCenter/View/757/KSR100000",
  },
  lastVerified: "2025-01",
  notes: "Kansas uses a 14-day (rather than 7-day) minimum inspection interval, which is less stringent than many other states and the EPA CGP baseline. KDHE's Bureau of Water, Stormwater Section administers the program. A Notice of Termination (NOT) is required upon achieving final stabilization. Kansas City, KS and other Phase I/II MS4 communities may have additional local stormwater ordinances beyond the state general permit requirements. Kansas is a state-delegated NPDES program and does not use the EPA Construction General Permit.",
};
