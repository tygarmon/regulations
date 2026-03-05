import { LocalRegulation } from "../../localTypes";

export const roundRock: LocalRegulation = {
  localCode: "round-rock",
  localName: "City of Round Rock",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage / Grading Permit",
    submittalBody: "City of Round Rock Development Services Department",
    leadTime: "Typically 3–6 weeks for standard commercial and residential projects; pre-application conference with Development Services encouraged",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Applications submitted through Round Rock Development Services at City Hall. Online permit portal available at roundrocktexas.gov. Contact Development Services at (512) 218-5428.",
  },
  waterQuality: {
    imperviousCoverLimit: "Round Rock does not impose a blanket citywide impervious cover cap; zoning district regulations and overlay districts may limit impervious cover. Edwards Aquifer Contributing Zone portions are subject to TCEQ Chapter 213 requirements.",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required per Round Rock Drainage Criteria Manual. Post-development peak discharge must not exceed pre-development peak discharge for the 2-, 10-, and 100-year storm events. Water quality volume (WQV) must be captured and treated on site, designed to treat the 1.5-inch water quality storm. Acceptable BMPs include wet ponds, bioretention cells, vegetated swales, and sand filters.",
    turbidityStandard: "Comply with TPDES Construction General Permit (TXR150000). Discharge from the construction site must not cause or contribute to violations of Texas Surface Water Quality Standards in the San Gabriel River, Brushy Creek, or other receiving water bodies.",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TPDES TXR150000",
    peStampRequired: false,
    notes: "SWPPP required for all sites ≥1 acre per TPDES CGP. Round Rock Development Services may require SWPPP documentation as part of grading permit submittals. Drainage and grading plans must bear a Texas PE seal. The city's MS4 program conducts independent site inspections to verify SWPPP implementation and BMP effectiveness.",
  },
  inspections: {
    localRequirements: "Round Rock Development Services and Public Works conduct drainage and erosion control inspections. Inspections required at: pre-construction/erosion control installation, rough grading, drainage infrastructure installation, and final grading/stabilization. Projects must achieve 70% vegetative cover or approved equivalent before final acceptance.",
    qualificationRequired: "No city-specific erosion control certification required beyond TPDES standards. TPDES CGP requires qualified site inspectors to conduct inspections at least every 14 calendar days and within 24 hours of any storm event producing ≥0.5 inches of rainfall.",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Development within the TCEQ-designated Edwards Aquifer Contributing Zone within Round Rock city limits or ETJ",
      restriction: "TCEQ Chapter 213 contributing zone requirements apply. Enhanced stormwater controls and pollutant abatement plans may be required. Coordination with TCEQ Edwards Aquifer Protection Program required.",
    },
    {
      name: "Brushy Creek Watershed / FEMA SFHA",
      trigger: "Development within or adjacent to FEMA-mapped floodplains along Brushy Creek and its tributaries",
      restriction: "City of Round Rock Floodplain Administrator review required. No net fill in regulatory floodway. Finished floors must meet or exceed BFE plus 1-foot freeboard per city policy. Floodplain Development Permit required.",
    },
    {
      name: "Creek Buffer / Riparian Setback",
      trigger: "Grading or construction within setback distances of regulated waterways",
      restriction: "Riparian buffer setbacks apply along Brushy Creek, Chandler Creek, and other regulated waterways. Erosion protection measures must remain until permanent stabilization is achieved.",
    },
  ],
  designManual: {
    required: true,
    name: "Round Rock Drainage Criteria Manual",
    url: "https://www.roundrocktexas.gov/departments/development-services/",
  },
  officialLinks: {
    agencyUrl: "https://www.roundrocktexas.gov/departments/development-services/",
    permitUrl: "https://www.roundrocktexas.gov/departments/development-services/building-permits/",
    designManualUrl: "https://www.roundrocktexas.gov/departments/development-services/",
  },
  lastVerified: "2026-03",
  notes: "Round Rock operates an independent NPDES/TPDES MS4 Phase II permit separate from Williamson County. Projects within Round Rock city limits or its ETJ must obtain permits from the city, not Williamson County. Round Rock is experiencing rapid growth driven by major employment centers including Dell Technologies. Pre-application conferences are strongly recommended for larger commercial, mixed-use, and multi-family projects.",
};
