import { LocalRegulation } from "../../localTypes";

export const dallas: LocalRegulation = {
  localCode: "dallas",
  localName: "City of Dallas",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "City of Dallas Grading Permit + Drainage Plan Approval",
    submittalBody: "City of Dallas Department of Sustainable Development and Construction (SDC), Engineering Division",
    leadTime: "Plan review: 2–4 weeks for standard projects; larger projects or those near Trinity River Corridor may require additional review time",
    fee: "Grading permit fee based on disturbed area and project value; drainage plan review fee separate; fee schedule at DallasBuildingInspection.com",
    applicationMethod: "Online via Dallas Development Portal (dallaspermits.com); paper submittals accepted at SDC offices",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; water quality controls required for projects disturbing ≥ 1 acre or creating ≥ 10,000 sq ft of impervious cover",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required for developments that increase peak runoff; must attenuate to pre-development 100-year storm rates per Dallas Floodplain Management Criteria; Trinity River Corridor projects have additional detention requirements",
    turbidityStandard: "No local numeric NTU limit; TCEQ TXR150000 narrative standard applies; City requires ESC controls on all grading plans",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ + Erosion Control Plan required as part of grading permit",
    peStampRequired: true,
    notes: "Drainage and grading plans must be prepared and sealed by a Texas-licensed PE or registered landscape architect (RLA) where applicable. City reviews ESC plans as part of grading permit package. Trinity Watershed Management reviews projects in the Trinity River floodplain.",
  },
  inspections: {
    localRequirements: "City of Dallas building inspectors conduct grading and drainage inspections. Trinity Watershed Management may inspect projects in or near the Trinity River Corridor. Final grading inspection required before Certificate of Occupancy.",
    qualificationRequired: "No additional local certification beyond TCEQ requirements; PE-of-record is responsible",
  },
  specialZones: [
    {
      name: "Trinity River Corridor (TRC)",
      trigger: "Within the Trinity River floodplain, levee protection zones, or Trinity Parkway planning area",
      restriction: "Enhanced review by Trinity Watershed Management; USACE Section 404/Section 10 permits may apply; levee setbacks enforced; no fill in floodway; Trinity River Vision Authority coordinates major development",
    },
    {
      name: "FEMA Floodplain / Floodway",
      trigger: "Within FEMA-mapped 100-year floodplain (Zone AE) or floodway",
      restriction: "No fill in floodway; compensatory storage required; City floodplain development permit required; Letter of Map Revision (LOMR) process applies for fill in flood zone",
    },
    {
      name: "Elm Fork Floodplain",
      trigger: "Along Elm Fork of the Trinity River in northwest Dallas",
      restriction: "Additional City of Dallas floodplain management standards; coordination with US Army Corps of Engineers may be required",
    },
  ],
  designManual: {
    required: true,
    name: "City of Dallas Stormwater Management Design Manual + Trinity Watershed Management Criteria",
    url: "https://dallascityhall.com/departments/sustainabledevelopment/Pages/engineering.aspx",
  },
  officialLinks: {
    agencyUrl: "https://dallascityhall.com/departments/sustainabledevelopment/Pages/default.aspx",
    permitUrl: "https://dallaspermits.com/",
    designManualUrl: "https://dallascityhall.com/departments/sustainabledevelopment/Pages/engineering.aspx",
  },
  lastVerified: "2025-01",
  notes: "Dallas stormwater requirements are primarily driven by the Trinity River watershed. The Trinity River Corridor is a major planning and regulatory overlay affecting a large portion of the city. Unlike Austin or San Antonio, Dallas does not have zone-based impervious cover limits, but water quality controls are required for larger projects. The USACE has significant jurisdiction over Trinity River and Elm Fork projects due to federal levee and floodway involvement.",
};
