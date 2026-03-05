import { LocalRegulation } from "../../localTypes";

export const denton: LocalRegulation = {
  localCode: "denton",
  localName: "City of Denton",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Land Disturbance Permit (LDP)",
    submittalBody: "City of Denton — Development Services Department, Engineering Division",
    leadTime: "10–15 business days for standard review; concurrent review available",
    fee: "Contact agency for current fee schedule; fees based on acreage disturbed",
    applicationMethod: "Submit via Denton's online permitting portal (EnerGov/Tyler Technologies) or in person at 401 N. Elm St., Denton, TX 76201; requires drainage study, grading plan, and ESC plan",
  },
  waterQuality: {
    imperviousCoverLimit: "No city-wide impervious cover percentage cap; post-construction water quality controls required for sites disturbing ≥1 acre per TCEQ CGP; additional local WQ requirements may apply in sensitive watersheds",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development rates for 2-, 10-, and 100-year storm events per Denton Drainage Criteria Manual; volume-based detention may be required in priority watersheds",
    turbidityStandard: "Comply with TCEQ TXR150000 construction effluent limits; post-construction controls per Denton MS4 Phase II permit requirements",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; Denton requires local ESC plan as part of Land Disturbance Permit",
    peStampRequired: true,
    notes: "Denton requires an Erosion and Sediment Control (ESC) plan prepared and stamped by a licensed Texas PE as part of the Land Disturbance Permit application. The SWPPP must be kept on site during construction. Denton's Development Services reviews ESC plans for compliance with local criteria before permit issuance.",
  },
  inspections: {
    localRequirements: "Denton Development Services Engineering conducts erosion control and drainage inspections. Inspections typically required at rough grading, after major storm events, and prior to permit closeout. Permit holder must correct deficiencies within a specified timeframe.",
    qualificationRequired: "TCEQ-qualified inspector required per CGP; Denton may require documentation of inspector qualifications",
  },
  specialZones: [
    {
      name: "Denton Creek Watershed",
      trigger: "Any land disturbance within the Denton Creek contributing drainage area",
      restriction: "Enhanced post-construction stormwater quality controls required; coordinate with City of Denton and potentially USACE for wetland/waterway impacts",
    },
    {
      name: "Pecan Creek Watershed",
      trigger: "Development within the Pecan Creek drainage basin (flows through central Denton)",
      restriction: "Heightened erosion control and water quality BMP requirements; Pecan Creek has a history of flooding and water quality issues",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Development within the mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Denton Floodplain Administrator; compensatory storage required for fill; lowest floor elevation requirements apply",
    },
  ],
  designManual: {
    required: true,
    name: "City of Denton Drainage Criteria Manual",
    url: "https://www.cityofdenton.com/en-us/government/departments/development-services/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofdenton.com/en-us/government/departments/development-services",
    permitUrl: "https://www.cityofdenton.com/en-us/government/departments/development-services/engineering",
    designManualUrl: "https://www.cityofdenton.com/en-us/government/departments/development-services/engineering",
  },
  lastVerified: "2026-03",
  notes: "Denton is a rapidly growing city in the DFW metroplex with a Phase II MS4 permit. The University of North Texas and Texas Woman's University campuses may have separate institutional stormwater plans. Projects in the ETJ should verify applicable jurisdiction — Denton County (unincorporated) standards may apply in the ETJ.",
};
