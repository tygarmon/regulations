import { LocalRegulation } from "../../localTypes";

export const cedarPark: LocalRegulation = {
  localCode: "cedar-park",
  localName: "City of Cedar Park",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage Permit / Grading Permit",
    submittalBody: "City of Cedar Park Public Works Department",
    leadTime: "Typically 3–6 weeks for standard projects; larger commercial and subdivision projects may require 6–10 weeks. Pre-application meetings with Public Works are available.",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Applications submitted to City of Cedar Park Public Works. Online and in-person submittal options available through the city's permit portal. Contact Cedar Park Public Works at (512) 401-5600.",
  },
  waterQuality: {
    imperviousCoverLimit: "No single citywide impervious cover cap; zoning and overlay district regulations govern maximum impervious cover by land use category. Edwards Aquifer Contributing Zone areas subject to TCEQ Chapter 213 impervious cover restrictions.",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required per Cedar Park Engineering Design Criteria Manual. Post-development peak discharge must not exceed pre-development peak discharge for the 2-, 10-, and 100-year design storm events. Water quality volume (WQV) capture for the 1.5-inch water quality storm is required. Acceptable BMPs include bioretention, wet ponds, extended dry detention basins with water quality outlets, and vegetated filter strips.",
    turbidityStandard: "Comply with TPDES Construction General Permit (TXR150000) effluent requirements. Construction site discharges must not cause or contribute to violations of Texas Surface Water Quality Standards in Brushy Creek, Lake Travis tributaries, or other receiving waters.",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TPDES TXR150000",
    peStampRequired: false,
    notes: "SWPPP required for all land disturbance ≥1 acre per TPDES CGP. Cedar Park Public Works may require the SWPPP to be submitted or available for review as part of the drainage/grading permit. Drainage and grading engineering plans must bear a Texas PE seal. Cedar Park's MS4 program conducts independent stormwater inspections.",
  },
  inspections: {
    localRequirements: "City of Cedar Park Public Works conducts drainage and erosion control inspections at required construction milestones: pre-construction (erosion controls in place), rough grading completion, drainage infrastructure installation, and final stabilization/grading acceptance. Final acceptance requires that disturbed areas be stabilized with 70% vegetative cover or an approved equivalent.",
    qualificationRequired: "No city-specific erosion control inspector license required beyond TPDES program qualifications. Per TPDES CGP, a qualified person must inspect the construction site at minimum every 14 calendar days and within 24 hours following any storm event producing ≥0.5 inches of precipitation.",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Any development or land disturbance within the TCEQ-designated Edwards Aquifer Contributing Zone within Cedar Park city limits or ETJ (portions of southwestern and western Cedar Park)",
      restriction: "TCEQ Chapter 213 contributing zone rules apply. Pollutant abatement plans may be required. Stormwater discharges must meet contributing zone water quality standards to protect the Barton Springs and Austin segments of the Edwards Aquifer. Coordinate with TCEQ Edwards Aquifer Protection Program before and during design.",
    },
    {
      name: "Brushy Creek Watershed / FEMA SFHA",
      trigger: "Development within or adjacent to FEMA-mapped floodplains along Brushy Creek and its tributaries within Cedar Park",
      restriction: "Cedar Park Floodplain Administrator review required. No net fill permitted in the regulatory floodway. Finished floor elevations must meet or exceed the BFE plus any city-imposed freeboard requirement. Floodplain Development Permit required in addition to the standard drainage permit.",
    },
    {
      name: "Lake Travis / Colorado River Tributary Protection Area",
      trigger: "Development draining to tributaries of Lake Travis in the western portions of Cedar Park",
      restriction: "Enhanced water quality controls may apply for projects draining toward Lake Travis, a primary drinking water reservoir. LCRA coordination may be required for projects with potential significant impacts on Lake Travis water quality.",
    },
  ],
  designManual: {
    required: true,
    name: "Cedar Park Engineering Design Criteria Manual",
    url: "https://www.cedarparktexas.gov/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.cedarparktexas.gov/departments/public-works",
    permitUrl: "https://www.cedarparktexas.gov/departments/public-works/permits",
    designManualUrl: "https://www.cedarparktexas.gov/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Cedar Park is one of the fastest-growing cities in the Austin metropolitan area with significant development activity along US-183, SH-45, and Parmer Lane corridors. Cedar Park operates an independent TPDES MS4 Phase II permit within its city limits and ETJ. The city straddles both Williamson and Travis County boundaries in some areas — confirm the applicable county. TPDES CGP (TXR150000) applies statewide to all sites with ≥1 acre of land disturbance.",
};
