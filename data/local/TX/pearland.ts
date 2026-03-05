import { LocalRegulation } from "../../localTypes";

export const pearland: LocalRegulation = {
  localCode: "pearland",
  localName: "City of Pearland",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Pearland Engineering and Public Works",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Pearland Engineering and Public Works at 3519 Liberty Dr., Pearland, TX 77581 or online portal at pearlandtx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Pearland Drainage Criteria Manual; Pearland's low-lying topography and expansive clay soils create significant drainage challenges",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Pearland Drainage Criteria Manual; low-lying terrain requires conservative detention sizing; Hurricane Harvey significantly affected design assumptions",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Brazos River, Clear Creek, or Chocolate Bayou",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Pearland experienced catastrophic flooding during Hurricane Harvey (2017) and has since updated drainage standards. Many areas of Pearland are low-lying and prone to flooding — detention sizing must account for post-Harvey revised rainfall frequencies. Projects should reference the latest NOAA Atlas 14 Volume 11 data for Southeast Texas.",
  },
  inspections: {
    localRequirements: "City of Pearland Engineering and Public Works inspects grading permits at rough grading, drainage infrastructure installation, and final stabilization. Hurricane season requires heightened BMP maintenance June–November.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Clear Creek Watershed (Harris County Flood Control District)",
      trigger: "Development draining to Clear Creek or its tributaries, which straddle the Harris/Brazoria county line",
      restriction: "Coordinate with Harris County Flood Control District (HCFCD) for projects with significant drainage impact on Clear Creek; HCFCD has design criteria for channel connections; post-Harvey watershed studies revised design flows",
    },
    {
      name: "Brazoria County Drainage District Channels",
      trigger: "Development connecting to or crossing Brazoria County Drainage District maintained channels",
      restriction: "Coordination required with Brazoria County Drainage Districts for outfall connections; district drainage criteria may differ from city criteria",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within extensive FEMA-mapped 100-year floodplain in Pearland (significant portions of the city)",
      restriction: "Floodplain development permit required from City of Pearland Floodplain Administrator; no net fill without compensatory storage; FEMA maps were revised post-Harvey in many areas",
    },
  ],
  designManual: {
    required: true,
    name: "City of Pearland Drainage Criteria Manual",
    url: "https://www.pearlandtx.gov/departments/engineering-public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.pearlandtx.gov/departments/engineering-public-works",
    permitUrl: "https://www.pearlandtx.gov/departments/engineering-public-works",
    designManualUrl: "https://www.pearlandtx.gov/departments/engineering-public-works",
  },
  lastVerified: "2026-03",
  notes: "Pearland is one of the fastest-growing cities in Texas and the Houston metro, located in Brazoria County south of Houston. The city's flat, clay-heavy soils and low-lying topography create significant drainage challenges. Hurricane Harvey (2017) devastated portions of Pearland and revealed inadequacies in the regional drainage system. The city has since invested heavily in drainage infrastructure improvements. Detention pond design in Pearland should use the latest post-Harvey hydrologic guidance. The city spans both Brazoria and Harris counties, with drainage infrastructure coordinated between multiple agencies.",
};
