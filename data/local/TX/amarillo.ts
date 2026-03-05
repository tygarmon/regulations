import { LocalRegulation } from "../../localTypes";

export const amarillo: LocalRegulation = {
  localCode: "amarillo",
  localName: "City of Amarillo",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Site Development Permit",
    submittalBody: "City of Amarillo Engineering Department / Development Services",
    leadTime: "Plan review typically 2–4 weeks for standard projects",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Amarillo Development Services online portal or in person at City Hall, 601 S. Buchanan St., Amarillo, TX 79101",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Amarillo Drainage Design Criteria",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Amarillo Drainage Design Criteria Manual",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000; wind erosion controls are equally important given Panhandle wind conditions",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage report prepared by a Texas PE required for projects disturbing ≥1 acre. Panhandle location produces high winds that can transport disturbed soil off-site; wind erosion BMPs (silt fences perpendicular to prevailing winds, temporary seeding) are essential. Occasional high-intensity flash floods from severe thunderstorms require robust inlet protection.",
  },
  inspections: {
    localRequirements: "City of Amarillo Engineering Department inspects grading permits at rough grading and final stabilization. Spring thunderstorm season (April–June) requires active BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Canadian River Watershed",
      trigger: "Development contributing runoff to tributaries of the Canadian River",
      restriction: "Enhanced water quality controls required; Canadian River is a regional water resource; coordinate with Amarillo Public Works for basin-specific criteria",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Development within FEMA-mapped 100-year floodplain along Amarillo Creek and tributaries",
      restriction: "Floodplain development permit required from City of Amarillo Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Amarillo Drainage Design Criteria Manual",
    url: "https://www.amarillo.gov/departments/development-services/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.amarillo.gov/departments/development-services",
    permitUrl: "https://www.amarillo.gov/departments/development-services/permits",
    designManualUrl: "https://www.amarillo.gov/departments/development-services/engineering",
  },
  lastVerified: "2026-03",
  notes: "Amarillo's location on the Southern High Plains produces a semi-arid climate with intense but infrequent thunderstorms. Wind erosion from disturbed sites is a significant challenge — the city sits in one of the windiest areas of the United States. Both water and wind erosion BMPs must be addressed in SWPPP documentation. The flat Llano Estacado terrain means drainage must travel long distances to natural channels.",
};
