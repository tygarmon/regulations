import { LocalRegulation } from "../../localTypes";

export const abilene: LocalRegulation = {
  localCode: "abilene",
  localName: "City of Abilene",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Abilene Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Abilene Development Services at 555 Walnut St., Abilene, TX 79601 or online portal at abilenetx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Abilene Drainage Design Criteria; water supply lake watersheds are a primary concern given semi-arid conditions",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Abilene Drainage Design Criteria; semi-arid climate with intense thunderstorm events (20–26 in/year) creates flash flood risk",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Hubbard Creek Reservoir, Lake Fort Phantom Hill, or Kirby Lake water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Abilene is a regional service center for West-Central Texas with military (Dyess AFB), healthcare, and educational institutions (Abilene Christian University, Hardin-Simmons, McMurry). Water supply is a chronic concern in this semi-arid region — enhanced BMPs to protect water supply lakes are advisable for projects in contributing watersheds.",
  },
  inspections: {
    localRequirements: "City of Abilene Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Water Supply Lake Watersheds",
      trigger: "Development in the contributing watersheds to Lake Fort Phantom Hill, Kirby Lake, or Hubbard Creek Reservoir (water supply sources for Abilene)",
      restriction: "Enhanced water quality BMPs required to protect drinking water supply; coordinate with City of Abilene Water Utilities for significant watershed impacts",
    },
    {
      name: "Dyess Air Force Base Buffer Zone",
      trigger: "Development near Dyess AFB compatible use zone",
      restriction: "Coordinate with Dyess AFB for projects in the accident potential zones; base stormwater systems are independent and may affect drainage patterns near the base",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along Cedar Creek and other Abilene waterways",
      restriction: "Floodplain development permit required from City of Abilene Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Abilene Drainage Design Criteria",
    url: "https://www.abilenetx.gov/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.abilenetx.gov/departments/development-services",
    permitUrl: "https://www.abilenetx.gov/departments/development-services",
    designManualUrl: "https://www.abilenetx.gov/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Abilene is the largest city in West-Central Texas, serving as a regional hub for healthcare, education, retail, and military (Dyess AFB). The city's semi-arid climate (~22 in/year rainfall) means water supply is always a concern — the city has historically faced drought and water supply challenges. Three major universities generate modest but consistent construction activity. The area is in tornado alley — spring severe weather season can bring both tornadoes and intense rainfall within hours. Wind erosion during site disturbance is a concern in this open terrain environment.",
};
