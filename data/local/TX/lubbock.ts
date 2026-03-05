import { LocalRegulation } from "../../localTypes";

export const lubbock: LocalRegulation = {
  localCode: "lubbock",
  localName: "City of Lubbock",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Site Development Permit",
    submittalBody: "City of Lubbock Planning & Zoning / Public Works Department",
    leadTime: "Plan review typically 2–3 weeks for standard projects",
    fee: "Based on disturbance area; contact Lubbock Public Works for current schedule",
    applicationMethod: "In-person or online via City of Lubbock permitting portal (mylubbock.us)",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required for development increasing runoff; Lubbock's playa lake system serves as regional detention — playa lakes must be preserved and not filled; on-site detention required where regional playas are not available",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000; wind erosion as significant as water erosion on the South Plains",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TCEQ TXR150000; Drainage Report required for local grading permit",
    peStampRequired: true,
    notes: "Lubbock sits on the flat Llano Estacado — runoff concentrates in playa lakes, which are critical to the regional water cycle and recharge the Ogallala Aquifer. Filling or encroaching on playa lakes is strictly regulated. Wind erosion BMPs (sandbag berms, wind breaks, hydroseeding) are equally important as water erosion controls.",
  },
  inspections: {
    localRequirements: "City of Lubbock Public Works conducts grading permit inspections. Spring thunderstorm season (April–June) and fall weather require active BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Playa Lake Watershed Protection Zone",
      trigger: "Development within the drainage basin contributing to any of Lubbock's 80+ mapped playa lakes",
      restriction: "Playa lakes may not be filled, drained, or significantly reduced in storage volume; drainage patterns to playas must be maintained; regional detention credit available for playas",
    },
    {
      name: "Buffalo Springs Lake / Double Mountain Fork Watershed",
      trigger: "Development contributing runoff to Buffalo Springs Lake or Double Mountain Fork of the Brazos",
      restriction: "Enhanced water quality controls required; no discharge that degrades lake water quality",
    },
  ],
  designManual: {
    required: true,
    name: "City of Lubbock Drainage Criteria Manual",
    url: "https://ci.lubbock.tx.us/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://ci.lubbock.tx.us/departments/planning-zoning",
    permitUrl: "https://ci.lubbock.tx.us/departments/planning-zoning/permits",
    designManualUrl: "https://ci.lubbock.tx.us/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Lubbock's unique playa lake system is protected under local ordinance. The flat terrain means runoff must travel long distances to natural drainage channels — playa lakes provide the primary stormwater management function. The Ogallala Aquifer recharge significance of playa lakes makes their protection a critical regulatory priority. Wind erosion from disturbed sites is a major concern given Panhandle/South Plains wind conditions.",
};
