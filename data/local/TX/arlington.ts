import { LocalRegulation } from "../../localTypes";

export const arlington: LocalRegulation = {
  localCode: "arlington",
  localName: "City of Arlington",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Grading and Drainage Permit",
    submittalBody: "City of Arlington — Public Works / Development Services Engineering Division",
    leadTime: "10–20 business days; larger projects may require additional review time",
    fee: "Contact agency for current fee schedule; fees based on disturbed area and project valuation",
    applicationMethod: "Submit via City of Arlington Development Services online portal or in person at 101 W. Abram St., Arlington, TX 76010; drainage study and grading plan required",
  },
  waterQuality: {
    imperviousCoverLimit: "No city-wide percentage cap on impervious cover; post-construction stormwater quality controls required for sites disturbing ≥1 acre or adding ≥5,000 sq ft of impervious cover",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak flows must be attenuated to pre-development levels for the 2-, 10-, and 100-year storm events per Arlington Drainage Criteria Manual; on-site detention facilities must be designed by a licensed Texas PE",
    turbidityStandard: "Comply with TCEQ TXR150000 effluent limits during construction; post-construction water quality controls per Arlington's MS4 Phase I NPDES permit requirements",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; Arlington may require supplemental ESC plan",
    peStampRequired: true,
    notes: "Arlington's Phase I MS4 status means the city has enhanced post-construction stormwater quality requirements. A SWPPP must be on site during all construction activity. The city's Engineering Division may require a separate Erosion and Sediment Control (ESC) plan as part of the grading permit submittal. PE stamp required on drainage study and ESC plan.",
  },
  inspections: {
    localRequirements: "City of Arlington inspectors conduct grading, drainage, and erosion control inspections throughout construction. Pre-construction meeting with city inspector may be required for large projects. Final drainage inspection required before certificate of occupancy.",
    qualificationRequired: "TCEQ-qualified inspector required on site per CGP; city may require evidence of inspector credentials",
  },
  specialZones: [
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Any development within the 100-year floodplain",
      restriction: "Floodplain development permit required from City of Arlington Floodplain Administrator; no net fill without compensatory storage; finished floor elevation requirements apply",
    },
    {
      name: "Lake Arlington Watershed",
      trigger: "Development in the Lake Arlington contributing watershed",
      restriction: "Lake Arlington serves as a drinking water supply; projects may face additional water quality review and may require coordination with TRWD",
    },
    {
      name: "Village Creek Watershed",
      trigger: "Development within Village Creek drainage basin",
      restriction: "Enhanced stormwater quality controls may be required; coordinate with Arlington Public Works for basin-specific criteria",
    },
  ],
  designManual: {
    required: true,
    name: "City of Arlington Drainage Criteria Manual",
    url: "https://www.arlington-tx.gov/public-works/engineering/",
  },
  officialLinks: {
    agencyUrl: "https://www.arlington-tx.gov/public-works/engineering/",
    permitUrl: "https://www.arlington-tx.gov/development-services/",
    designManualUrl: "https://www.arlington-tx.gov/public-works/engineering/",
  },
  lastVerified: "2026-03",
  notes: "Arlington is a Phase I MS4 as a large urbanized city. Post-construction BMPs must be documented in a maintenance agreement recorded with the county. Projects in the Dallas/Fort Worth International Airport vicinity should also coordinate with DFW Airport drainage standards.",
};
