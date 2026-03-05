import { LocalRegulation } from "../../localTypes";

export const mckinney: LocalRegulation = {
  localCode: "mckinney",
  localName: "City of McKinney",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading and Erosion Control Permit",
    submittalBody: "City of McKinney — Public Works / Engineering Department",
    leadTime: "10–15 business days; larger or complex projects may require additional time",
    fee: "Contact agency for current fee schedule; fees typically based on disturbed acreage",
    applicationMethod: "Submit via City of McKinney online permitting portal (MyMcKinney / EnerGov) or in person at McKinney Development Center, 221 N. Tennessee St., McKinney, TX 75069; drainage study, grading plan, and ESC plan required",
  },
  waterQuality: {
    imperviousCoverLimit: "No city-wide impervious cover percentage cap; post-construction stormwater quality controls required for sites disturbing ≥1 acre; McKinney's post-construction program requires on-site BMPs for qualifying development",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development rates for the 2-, 10-, and 100-year storm events per McKinney Drainage Design Criteria Manual; water quality volume capture required for sites meeting thresholds; detention/water quality facilities must be maintained under a recorded maintenance agreement",
    turbidityStandard: "Comply with TCEQ TXR150000 construction effluent limits; post-construction WQ BMPs must meet McKinney MS4 Phase II minimum control measure requirements",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; McKinney requires local ESC plan as part of Grading and Erosion Control Permit",
    peStampRequired: true,
    notes: "McKinney requires an ESC plan sealed by a licensed Texas PE as part of the grading permit application. Post-construction BMP design must be included in the permit submittal and documented in a maintenance agreement recorded with Collin County. BMP inspection and maintenance logs must be kept and may be audited by the city.",
  },
  inspections: {
    localRequirements: "McKinney Engineering Department conducts routine and complaint-driven construction site inspections. Inspections required at permit initiation, rough grading, and project closeout. Post-construction BMP inspection required before final permit release. Permittee must respond to inspection deficiencies within a specified cure period or face stop-work orders.",
    qualificationRequired: "TCEQ-qualified inspector required per CGP; McKinney may require documentation of on-site inspector credentials",
  },
  specialZones: [
    {
      name: "East Fork Trinity River / Tributary Corridors",
      trigger: "Development within or adjacent to East Fork Trinity River watershed tributaries",
      restriction: "Potential USACE Section 404/401 jurisdiction; additional state and federal permits may be required; coordinate with USACE Fort Worth District and TCEQ",
    },
    {
      name: "Lake Lavon Contributing Watershed",
      trigger: "Development in drainage basins tributary to Lake Lavon (USACE reservoir, NTMWD water supply)",
      restriction: "Enhanced water quality controls required to protect drinking water supply; coordinate with NTMWD and USACE",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Development within mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of McKinney Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of McKinney Drainage Design Criteria Manual",
    url: "https://www.mckinneytexas.org/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.mckinneytexas.org/engineering",
    permitUrl: "https://www.mckinneytexas.org/engineering",
    designManualUrl: "https://www.mckinneytexas.org/engineering",
  },
  lastVerified: "2026-03",
  notes: "McKinney has been one of the fastest-growing cities in the United States. Early pre-application meetings are strongly recommended for complex or large-scale projects. McKinney coordinates with Collin County, NTMWD, and neighboring cities (Frisco, Allen, Prosper) on regional drainage issues. Post-construction BMP maintenance agreements are strictly enforced.",
};
