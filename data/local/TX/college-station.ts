import { LocalRegulation } from "../../localTypes";

export const collegeStation: LocalRegulation = {
  localCode: "college-station",
  localName: "City of College Station",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of College Station Public Works / Development Services",
    leadTime: "Plan review typically 2–4 weeks; concurrent review available",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of College Station online permitting portal (COCSOnline) or in person at 1101 Texas Ave., College Station, TX 77840",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per College Station Drainage Policy and Design Standards",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per College Station Drainage Policy and Design Standards; post-construction water quality controls required for sites disturbing ≥1 acre",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Navasota River or downstream water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. College Station is a university town with ongoing major construction from Texas A&M University, which has its own institutional stormwater program. Contractors must coordinate with both city and university requirements for projects on or near the A&M campus.",
  },
  inspections: {
    localRequirements: "City of College Station Public Works inspects grading permits at rough grading, drainage infrastructure installation, and final stabilization. Texas A&M University maintains its own inspection program for on-campus projects.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Navasota River Watershed",
      trigger: "Development contributing runoff to the Navasota River and its tributaries",
      restriction: "Water quality controls required; coordinate with Brazos River Authority for projects with significant watershed impact",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of College Station Floodplain Administrator; no net fill without compensatory storage",
    },
    {
      name: "Texas A&M University Campus Zone",
      trigger: "Construction on or immediately adjacent to Texas A&M University property",
      restriction: "Coordinate with Texas A&M University Facilities Planning & Construction for drainage plan review and stormwater compliance; A&M may impose additional institutional requirements",
    },
  ],
  designManual: {
    required: true,
    name: "City of College Station Drainage Policy and Design Standards",
    url: "https://www.cstx.gov/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.cstx.gov/departments/public-works",
    permitUrl: "https://www.cstx.gov/departments/development-services",
    designManualUrl: "https://www.cstx.gov/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "College Station is home to Texas A&M University, one of the largest universities in the United States, which generates significant ongoing construction activity with its own institutional TPDES permit. The Bryan-College Station metro is growing rapidly. The city is located in the Post Oak Savanna ecoregion where sandy soils can create rapid infiltration or significant erosion depending on saturation. Spring severe weather season requires active stormwater BMP maintenance.",
};
