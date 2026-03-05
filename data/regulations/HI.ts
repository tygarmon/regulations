import { StateRegulation } from "../types";

export const HI: StateRegulation = {
  stateCode: "HI",
  stateName: "Hawaii",
  agency: "Hawaii Department of Health, Clean Water Branch",
  agencyAbbr: "DOH-CWB",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activity (Permit No. HIG960001 / HIR100001)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); some activities < 1 acre may require an individual NPDES permit depending on proximity to sensitive waters",
    noticePeriod: "NOI must be submitted to DOH Clean Water Branch at least 10 days prior to the commencement of construction activity; permit coverage is not effective until the NOI is acknowledged",
    applicationMethod: "Paper NOI submitted to DOH Clean Water Branch, Environmental Management Division; Hawaii does not currently have a statewide online NOI portal for construction stormwater — check DOH CWB for updated submission options",
    fee: "$200 NOI filing fee; additional annual permit compliance fees apply based on acreage (verify current schedule with DOH Clean Water Branch)",
  },
  swppp: {
    required: true,
    peCertRequired: true,
    templateAvailable: false,
    notes: "Hawaii requires a SWPPP to be prepared and certified by a licensed Professional Engineer (PE) registered in Hawaii, or a Certified Professional in Erosion and Sediment Control (CPESC). The SWPPP must be site-specific and available on-site during all construction activity. Hawaii DOH does not provide a standard SWPPP template but does issue guidance. The SWPPP must be updated when site conditions or BMP effectiveness changes.",
  },
  inspections: {
    frequency: "At least every 14 calendar days during active construction and within 24 hours after a rainfall event producing ≥ 0.5 inches; some site classifications may require more frequent inspections",
    qualificationRequired: "Inspections must be conducted by a qualified individual — defined as someone knowledgeable about the SWPPP and BMP implementation; Hawaii does not currently have a state-specific inspector certification program, but CPESC or equivalent professional credential is accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements are addressed through county-level ordinances, particularly in Honolulu (City and County of Honolulu Municipal Separate Storm Sewer System MS4 permit). Hawaii's unique island geography and sensitive coral reef ecosystems make post-construction runoff management critically important. The state requires permanent stormwater management measures to be incorporated into project designs that meet long-term water quality goals.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit specified in the general permit; narrative standards apply — discharges must not cause or contribute to violations of Hawaii's water quality standards",
    notes: "Hawaii water quality standards (Haw. Admin. Rules § 11-54) are among the most protective in the nation due to the ecological sensitivity of coastal and reef waters. Hawaii has Class AA and Class A coastal waters where enhanced protections apply. Turbidity, sedimentation, and altered water clarity are specifically prohibited where they would harm aquatic life or coral reefs. Some sites may require individual permits with numeric effluent limits.",
  },
  officialLinks: {
    agencyUrl: "https://health.hawaii.gov/cwb/",
    permitApplicationUrl: "https://health.hawaii.gov/cwb/site-program/national-pollutant-discharge-elimination-system-npdes/construction-stormwater/",
    regulationDocUrl: "https://health.hawaii.gov/cwb/site-program/national-pollutant-discharge-elimination-system-npdes/",
  },
  lastVerified: "2025-01",
  notes: "Hawaii is notable for its stringent environmental standards driven by the fragility of its coral reef ecosystems and groundwater-dependent ecosystems. The state's 'Anti-degradation' policy is strictly enforced. Hawaii requires PE or CPESC sign-off on the SWPPP, which is unusual among states. County ordinances (especially Honolulu, Maui, Hawaii County, and Kauai) layer additional stormwater controls on top of state NPDES requirements. Projects near streams classified as 'waters of the State' require extra care due to cultural and environmental significance. Hawaii also has separate grading permit requirements through county building departments that interact with the NPDES program.",
};
