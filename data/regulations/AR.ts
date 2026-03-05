import { StateRegulation } from "../types";

export const AR: StateRegulation = {
  stateCode: "AR",
  stateName: "Arkansas",
  agency: "Arkansas Department of Energy and Environment, Division of Environmental Quality",
  agencyAbbr: "DEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit ARR150000 (Construction Stormwater General Permit)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre",
    noticePeriod: "NOI must be submitted and permit coverage obtained at least 7 days before construction activity begins",
    applicationMethod: "Online via Arkansas DEQ eDMR/eNOI web portal; paper NOI (Form SW-NOI) may also be submitted by mail to DEQ's Water Division",
    fee: "$0 — Arkansas does not charge a fee for the construction general permit NOI",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required and must be prepared and implemented before construction begins. Arkansas DEQ provides SWPPP guidance and template documents on its website. The SWPPP must be maintained on-site and made available to DEQ inspectors upon request. No PE or professional stamp is required. The SWPPP must be certified by a responsible official of the permittee.",
  },
  inspections: {
    frequency: "At least every 14 calendar days and within 24 hours of a precipitation event that produces 0.5 inches or more of rain at the site",
    qualificationRequired: "A knowledgeable employee or agent of the permittee must conduct inspections; Arkansas does not currently require a state-specific inspector certification. The inspector must be familiar with the SWPPP and the BMPs implemented at the site.",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements are addressed through local MS4 permit programs for regulated municipalities. The construction general permit requires final stabilization before a Notice of Termination (NOT) can be filed. Permanent stormwater management structures (detention ponds, bioretention, etc.) required by local ordinance must be established prior to permit termination.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit in the construction general permit; narrative water quality standard applies",
    notes: "Discharges must not cause or contribute to a violation of Arkansas Water Quality Standards (Regulation 2). Sites discharging to Extraordinary Resource Waters (ERW) or Ecologically Sensitive Waterbodies (ESW) may require enhanced BMPs or an individual NPDES permit. The permit prohibits non-stormwater discharges except for specific allowable non-stormwater discharges listed in the permit.",
  },
  officialLinks: {
    agencyUrl: "https://www.adeq.state.ar.us/",
    permitApplicationUrl: "https://www.adeq.state.ar.us/water/branch_permits/stormwater/construction.aspx",
    regulationDocUrl: "https://www.adeq.state.ar.us/water/branch_permits/stormwater/pdfs/ARR150000permit.pdf",
  },
  lastVerified: "2025-01",
  notes: "Arkansas's 7-day NOI lead time is shorter than many states. The agency was reorganized in 2019 under the Arkansas Department of Energy and Environment, but DEQ continues to administer water quality programs. The agency's website may still reflect the legacy ADEQ (Arkansas Department of Environmental Quality) branding. Sites within the Arkansas River Valley or Ozark/Ouachita mountain regions with high erosion potential should pay special attention to SWPPP BMP selection. The $0 fee is a significant advantage for small operators.",
};
