import { StateRegulation } from "../types";

export const WY: StateRegulation = {
  stateCode: "WY",
  stateName: "Wyoming",
  agency: "Wyoming Department of Environmental Quality",
  agencyAbbr: "WDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Wyoming NPDES General Permit for Stormwater Discharges Associated with Construction Activity (WYR10-0000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre)",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to WDEQ at least 10 days before land disturbance begins; permit coverage is not automatic and operators must receive a permit coverage acknowledgment letter before commencing disturbance",
    applicationMethod: "Paper NOI submitted to WDEQ Water Quality Division, Construction Program; online submission is available through the WDEQ Online Permit System (WDEQ ePermit); the NOI must be accompanied by the SWPPP certification statement",
    fee: "$500 for projects disturbing < 5 acres; $1,000 for projects disturbing 5–25 acres; $2,000 for projects disturbing > 25 acres; fee payable to WDEQ; no annual renewal fee for projects completing disturbance and stabilization within one permit term",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required and must be completed before land disturbance begins. WDEQ provides a SWPPP template and guidance document. The SWPPP does not require a professional engineer stamp under the general permit, though individual project contracts or local requirements may call for one. The SWPPP must be kept on-site and made available to WDEQ and EPA inspectors. It must be amended whenever construction plans, BMPs, or site conditions change materially.",
  },
  inspections: {
    frequency: "At least once every 14 calendar days and within 24 hours of a precipitation or snowmelt event that causes stormwater runoff; during periods of frozen conditions where runoff is not likely, inspection frequency may be reduced to once per month; inspection records must be retained for at least 3 years",
    qualificationRequired: "Inspections must be conducted by a qualified person as defined in the permit — someone knowledgeable in the principles and practice of erosion and sediment control. Wyoming does not have a separate mandatory state inspector certification program; however, WDEQ recommends training through nationally recognized programs such as CPESC (Certified Professional in Erosion and Sediment Control) or equivalent courses. Some local jurisdictions may require specific credentials.",
    rainTrigger: "Within 24 hours of any precipitation or snowmelt event that causes stormwater runoff from the site (discharge-based trigger)",
    acceptedCertifications: "No state-specific cert required; inspector must be a 'qualified person' knowledgeable in E&SC; CPESC, CESSWI accepted; WDEQ recommends nationally recognized training programs",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements in Wyoming are primarily driven by the MS4 general permit for regulated municipalities and by conditions in individual NPDES permits for larger dischargers. The construction general permit requires final stabilization (70% vegetative cover on all disturbed areas, or equivalent non-vegetative stabilization) before permit coverage can be terminated. Wyoming has relatively few highly urbanized MS4 communities compared to eastern states, so post-construction programs are less extensive statewide; however, Cheyenne, Casper, and other cities have adopted local post-construction ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No specific numeric NTU limit in the construction general permit; discharges must comply with Wyoming water quality standards (Chapter 1, Wyoming Surface Water Quality Standards)",
    notes: "Wyoming water quality standards include narrative turbidity and suspended solids criteria: discharges must not cause substantial visual contrast with receiving waters. Wyoming has many high-quality cold water fishery streams, and discharges to Class 1 (Outstanding Resource Waters) or Class 2A (Fishable/Swimmable) waters are subject to nondegradation review. Projects near blue-ribbon trout fisheries (e.g., North Platte, Snake, Green River) face heightened regulatory attention. Wyoming's semi-arid climate means that construction BMP design must account for low average rainfall but high-intensity convective storms.",
  },
  officialLinks: {
    agencyUrl: "https://deq.wyoming.gov/",
    permitApplicationUrl: "https://www.epa.gov/npdes/2022-construction-general-permit-cgp",
    regulationDocUrl: "https://www.epa.gov/npdes/2022-construction-general-permit-cgp",
  },
  lastVerified: "2025-01",
  permitExpires: "2027-02-17", // EPA CGP 2022 — expires Feb 17 2027
  notes: "Wyoming has NPDES authority delegated from EPA. A notable state-specific consideration is Wyoming's significant oil, gas, and mining sector — construction activities associated with energy extraction may be subject to additional WDEQ permits (e.g., Wyoming Pollutant Discharge Elimination System permits for process water) or federal Bureau of Land Management (BLM) requirements when occurring on federal lands, which cover a large portion of the state. Wyoming also has cold-weather and arid conditions that affect BMP selection: frozen ground limits infiltration-based controls, and high-altitude UV exposure can degrade erosion control fabrics more rapidly. The state has relatively few MS4 permittees, so post-construction stormwater requirements are less uniformly applied than in more urbanized states.",
};
