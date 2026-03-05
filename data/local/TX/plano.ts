import { LocalRegulation } from "../../localTypes";

export const plano: LocalRegulation = {
  localCode: "plano",
  localName: "City of Plano",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Drainage and Grading Permit",
    submittalBody: "City of Plano — Engineering Department, Stormwater Management Division",
    leadTime: "10–15 business days for standard review; expedited review may be available",
    fee: "Contact agency for current fee schedule; fees based on project size and disturbed area",
    applicationMethod: "Submit via City of Plano's online permitting portal or in person at Plano Municipal Center, 1520 Ave. K, Plano, TX 75074; drainage study, grading plan, and ESC plan required",
  },
  waterQuality: {
    imperviousCoverLimit: "No city-wide percentage cap on impervious cover; post-construction stormwater quality controls required for all sites disturbing ≥1 acre or adding ≥5,000 sq ft of impervious cover per Plano's Phase I MS4 permit",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak flows must not exceed pre-development peak flows for the 2-, 10-, and 100-year storm events per the Plano Drainage Design Manual; volume-based water quality capture required for Phase I WQ compliance; detention/retention facilities must be maintained under a recorded private maintenance agreement",
    turbidityStandard: "Comply with TCEQ TXR150000 limits during construction; post-construction treatment BMPs must meet Plano Phase I MS4 minimum control measures for water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; Plano requires supplemental ESC plan as part of Drainage and Grading Permit",
    peStampRequired: true,
    notes: "Plano's Phase I MS4 status requires enhanced post-construction stormwater quality controls. An ESC plan prepared and sealed by a licensed Texas PE is required as part of the permit application. Post-construction BMPs must be identified, designed, and included in a recorded maintenance agreement.",
  },
  inspections: {
    localRequirements: "Plano Engineering Department conducts regular construction site inspections including erosion control, drainage, and post-construction BMP verification. Final grading and drainage inspection required before certificate of occupancy. Post-construction BMP inspection may be required after project completion.",
    qualificationRequired: "TCEQ-qualified inspector required per CGP; Plano may require documentation of inspector qualifications submitted with permit application",
  },
  specialZones: [
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Any development within the mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Plano Floodplain Administrator; no net fill without compensatory storage; finished floor elevations must meet or exceed BFE requirements",
    },
    {
      name: "Rowlett Creek Watershed",
      trigger: "Development within the Rowlett Creek drainage basin",
      restriction: "Coordinate with Collin County and neighboring jurisdictions for regional drainage impacts; enhanced erosion controls may be required",
    },
    {
      name: "Spring Creek Watershed",
      trigger: "Development within the Spring Creek basin (north Plano)",
      restriction: "Additional coordination with downstream jurisdictions (Richardson, Garland) may be required for large projects",
    },
  ],
  designManual: {
    required: true,
    name: "City of Plano Drainage Design Manual",
    url: "https://www.plano.gov/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.plano.gov/engineering",
    permitUrl: "https://www.plano.gov/engineering",
    designManualUrl: "https://www.plano.gov/engineering",
  },
  lastVerified: "2026-03",
  notes: "Plano is a largely built-out city with a robust Phase I MS4 stormwater program focused heavily on water quality and post-construction controls. Redevelopment projects must comply with current stormwater quality standards. The city coordinates with NTMWD on regional water quality initiatives.",
};
