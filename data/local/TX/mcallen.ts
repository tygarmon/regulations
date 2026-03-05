import { LocalRegulation } from "../../localTypes";

export const mcallen: LocalRegulation = {
  localCode: "mcallen",
  localName: "City of McAllen",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage / Grading Permit",
    submittalBody: "City of McAllen Public Works / Engineering Department",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of McAllen permitting portal or in person at 1300 Houston Ave., McAllen, TX 78501",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage infrastructure must accommodate design storm flows; FEMA floodplain areas impose elevation and fill restrictions",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to attenuate post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per McAllen Drainage Criteria Manual; flat Rio Grande Valley topography requires careful hydraulic routing",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Rio Grande or Arroyo Colorado water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for sites ≥1 acre. The Rio Grande Valley's subtropical climate produces intense rainfall events, particularly during hurricane season (June–November) and spring convective storms. BMPs must be designed for high-volume, high-velocity runoff events.",
  },
  inspections: {
    localRequirements: "City of McAllen Engineering Department inspects grading permits at key milestones. Hurricane season requires heightened BMP maintenance. Final stabilization inspection required before permit closeout.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "FEMA Special Flood Hazard Area — Rio Grande and Arroyo Colorado Floodplains",
      trigger: "Development within FEMA-mapped 100-year floodplain along Rio Grande, Arroyo Colorado, and tributary drains",
      restriction: "Floodplain development permit required; no net fill without compensatory storage; elevation certificate required; IBWC coordination may be required for projects near Rio Grande",
    },
    {
      name: "International Boundary Zone (Rio Grande)",
      trigger: "Projects within the International Boundary and Water Commission (IBWC) jurisdiction near the Rio Grande",
      restriction: "IBWC coordination required for projects potentially affecting Rio Grande flow or flood risk; no discharge that increases flood risk to Mexico",
    },
    {
      name: "Arroyo Colorado / South Texas Water Supply Zone",
      trigger: "Development draining to the Arroyo Colorado, a primary irrigation water supply for the Lower Rio Grande Valley",
      restriction: "Enhanced water quality controls required; Arroyo Colorado is impaired for bacteria and nutrients; projects must demonstrate no net increase in pollutant loading",
    },
  ],
  designManual: {
    required: true,
    name: "City of McAllen Drainage Criteria Manual",
    url: "https://www.mcallen.net/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.mcallen.net/departments/public-works",
    permitUrl: "https://www.mcallen.net/departments/public-works/permits",
    designManualUrl: "https://www.mcallen.net/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "McAllen and the broader Rio Grande Valley (RGV) represent one of the fastest-growing regions in Texas, driven by cross-border trade and population growth. The flat terrain, subtropical climate, and proximity to the Rio Grande create unique stormwater challenges. Drainage infrastructure capacity is frequently stressed during major rain events. The International Boundary and Water Commission (IBWC) exercises jurisdiction over the Rio Grande and associated infrastructure.",
};
