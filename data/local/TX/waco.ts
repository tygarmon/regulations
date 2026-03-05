import { LocalRegulation } from "../../localTypes";

export const waco: LocalRegulation = {
  localCode: "waco",
  localName: "City of Waco",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Waco Public Works / Engineering Department",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Waco Development Services at 300 Austin Ave., Waco, TX 76701 or online via city portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows; Lake Waco watershed areas may have additional water quality requirements",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Waco Drainage Design Criteria Manual",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Brazos River, Lake Waco, or North Bosque River water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage report prepared by a Texas PE required for grading permits. Lake Waco serves as a primary drinking water supply for the region — projects in the contributing watershed should implement enhanced water quality BMPs to minimize nutrients and turbidity reaching the lake.",
  },
  inspections: {
    localRequirements: "City of Waco Public Works inspects grading permits at rough grading, drainage infrastructure installation, and final stabilization. Spring severe weather season requires active BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lake Waco Watershed Protection Area",
      trigger: "Development within the contributing watershed to Lake Waco, a City of Waco drinking water supply reservoir",
      restriction: "Enhanced water quality BMPs required; minimize nutrients, sediment, and hydrocarbon loading; coordinate with Brazos River Authority (BRA) for projects with significant watershed impact",
    },
    {
      name: "Brazos River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Brazos River and tributaries",
      restriction: "Floodplain development permit required from City of Waco Floodplain Administrator; no net fill without compensatory storage; USACE coordination required for work in or near the Brazos River channel",
    },
    {
      name: "North Bosque River Watershed",
      trigger: "Development in portions of the watershed contributing to the North Bosque River and Lake Waco",
      restriction: "The North Bosque is impaired for nutrients (primarily from nonpoint sources); construction stormwater controls must address fertilizer and organic matter runoff in addition to sediment",
    },
  ],
  designManual: {
    required: true,
    name: "City of Waco Drainage Design Criteria Manual",
    url: "https://www.waco-texas.com/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.waco-texas.com/departments/public-works",
    permitUrl: "https://www.waco-texas.com/departments/development-services",
    designManualUrl: "https://www.waco-texas.com/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Waco is experiencing significant growth and reinvestment, partly driven by Baylor University expansion and regional economic development. The city's location on the Brazos River and proximity to Lake Waco means stormwater quality is a priority. The Brazos River Authority (BRA) manages Lake Waco and may require coordination for projects with significant watershed impact. Waco sits in the Texas Tornado Alley — spring severe weather season (March–May) requires robust BMP maintenance programs.",
};
