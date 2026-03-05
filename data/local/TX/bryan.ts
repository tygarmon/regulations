import { LocalRegulation } from "../../localTypes";

export const bryan: LocalRegulation = {
  localCode: "bryan",
  localName: "City of Bryan",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Bryan Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Bryan Development Services at 300 S. Texas Ave., Bryan, TX 77803 or online portal at bryantx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Bryan Drainage Design Criteria; Navasota River and Brazos River receive Bryan-area stormwater",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Bryan Drainage Design Criteria; Brazos County drainage district requirements may apply for county channel connections",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Navasota River, Brazos River, or Gibbons Creek water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Bryan is the county seat of Brazos County and the twin city to College Station (home to Texas A&M). Bryan has significant industrial, manufacturing, and logistics development separate from the university activity in College Station. The two cities share much infrastructure and coordinate on regional drainage. Sandy Post Oak Savanna soils require careful erosion control.",
  },
  inspections: {
    localRequirements: "City of Bryan Public Works inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Navasota River Watershed",
      trigger: "Development draining to the Navasota River and its tributaries",
      restriction: "Coordinate with Brazos River Authority (BRA) for projects with significant watershed impact; the Navasota drains to Lake Brazos and the Brazos River",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along Carters Creek, Cottonwood Creek, and other Bryan-area waterways",
      restriction: "Floodplain development permit required from City of Bryan Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Bryan Drainage Design Criteria",
    url: "https://www.bryantx.gov/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.bryantx.gov/departments/public-works",
    permitUrl: "https://www.bryantx.gov/departments/public-works",
    designManualUrl: "https://www.bryantx.gov/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Bryan is the county seat of Brazos County and the commercial twin to College Station, which is home to Texas A&M University. Bryan has industrial, manufacturing, distribution, and healthcare sectors that are distinct from the university-dominated economy of College Station. The Bryan-College Station metro is growing rapidly. The Post Oak Savanna ecoregion's sandy, acidic soils are highly erodible and require robust sediment control. The Brazos River Authority manages regional water resources including Lake Brazos.",
};
