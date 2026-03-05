import { LocalRegulation } from "../../localTypes";

export const fortBendCounty: LocalRegulation = {
  localCode: "fort-bend-county",
  localName: "Fort Bend County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Fort Bend County Drainage Permit",
    submittalBody: "Fort Bend County Engineering Department, 301 Jackson St., Richmond, TX 77469",
    leadTime: "4–6 weeks for standard residential or commercial projects; larger or complex projects may require 8–12 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit application package to the Fort Bend County Engineering Department including drainage plan, hydrologic/hydraulic study, and erosion control plan, all signed and sealed by a licensed Texas PE. Pre-application meeting may be required for projects exceeding 10 acres of disturbance.",
  },
  waterQuality: {
    imperviousCoverLimit: "No blanket countywide impervious cover cap; detention requirements triggered by any increase in impervious cover or alteration of drainage patterns for sites disturbing more than 1 acre. Incorporated cities within Fort Bend County may impose stricter local limits.",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development peak discharge for the 2-, 10-, 25-, and 100-year 24-hour storm events per the Fort Bend County Drainage Criteria Manual. Detention facilities must include emergency spillway and minimum 1 ft freeboard above the 100-year water surface elevation. Wet pond designs require additional water quality review.",
    turbidityStandard: "No separate county turbidity numeric standard. Compliance with TPDES Construction General Permit (TXR150000) required. SWPPP BMPs must be installed and maintained; weekly inspections and post-storm event inspections required per state CGP.",
  },
  swppp: {
    localPlanRequired: false,
    localPlanName: "N/A — State TPDES SWPPP satisfies local requirement",
    peStampRequired: false,
    notes: "Fort Bend County does not require a locally separate SWPPP beyond the TPDES Construction General Permit SWPPP. The drainage permit application must include an erosion and sediment control plan. Drainage and grading plans submitted for the county permit must bear the seal of a licensed Texas PE.",
  },
  inspections: {
    localRequirements: "Fort Bend County Engineering inspects detention facilities and drainage infrastructure during construction and performs a final acceptance inspection before the drainage permit is closed. For detention basins, an as-built certification confirming final detention volume must be submitted. Projects within Harris-Galveston Coastal Subsidence District boundaries require subsidence-related certification as well.",
    qualificationRequired: "County inspections conducted by county engineering staff. As-built certifications must be sealed by a licensed Texas PE or RPLS. Third-party geotechnical reports may be required for detention embankments exceeding 6 feet in height.",
  },
  specialZones: [
    {
      name: "Brazos River Floodplain and Floodway",
      trigger: "Any development within the FEMA-mapped 100-year floodplain or floodway of the Brazos River or its tributaries.",
      restriction: "Floodplain development permit required from the Fort Bend County Floodplain Administrator. No development permitted in a designated regulatory floodway that raises the BFE. Compensatory storage required for any fill placed in the 100-year floodplain.",
    },
    {
      name: "Buffalo Bayou / Barker Reservoir Watershed",
      trigger: "Development in the upper Buffalo Bayou watershed portions of Fort Bend County, including areas draining to Barker Reservoir (USACE).",
      restriction: "Coordination with USACE Galveston District required. Post-Harvey floodpool easement acquisitions by USACE may affect project areas near the reservoir. Detention sizing must account for revised hydrology guidance issued post-Harvey.",
    },
    {
      name: "Harris-Galveston Coastal Subsidence District (HGCSD) Regulated Area",
      trigger: "Groundwater withdrawal for construction dewatering or permanent use within the HGCSD jurisdictional area.",
      restriction: "HGCSD groundwater reduction plan (GRP) compliance required. Significant land subsidence in Fort Bend County affects flood elevation benchmarks — use current NAVD 88 datums and confirm benchmark stability before design.",
    },
  ],
  designManual: {
    required: true,
    name: "Fort Bend County Drainage Criteria Manual",
    url: "https://www.fortbendcountytx.gov/government/departments/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.fortbendcountytx.gov/government/departments/engineering",
    permitUrl: "https://www.fortbendcountytx.gov/government/departments/engineering/drainage-permits",
    designManualUrl: "https://www.fortbendcountytx.gov/government/departments/engineering",
  },
  lastVerified: "2026-03",
  notes: "Fort Bend County is one of the fastest-growing counties in the United States. Hurricane Harvey (2017) and subsequent storm events have prompted ongoing updates to the county Drainage Criteria Manual. Developers are strongly advised to verify the current manual version before commencing hydraulic design. Incorporated cities within the county (Sugar Land, Missouri City, Rosenberg, Richmond, Stafford) maintain their own drainage permit processes. Land subsidence is a significant engineering concern in western Fort Bend County.",
};
