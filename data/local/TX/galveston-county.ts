import { LocalRegulation } from "../../localTypes";

export const galvestonCounty: LocalRegulation = {
  localCode: "galveston-county",
  localName: "Galveston County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Galveston County Drainage / Infrastructure Permit",
    submittalBody: "Galveston County Public Works Department, 722 Moody Ave., Galveston, TX 77550 (Engineering Division)",
    leadTime: "4–8 weeks for standard projects; coastal zone or floodplain projects may require additional TCEQ, GLO, or USACE review time of 60–120 days",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit application to Galveston County Public Works / Engineering. Applications must include drainage plan, hydrologic/hydraulic study, and erosion control plan signed and sealed by a licensed Texas PE. Projects in the coastal zone also require review under the Texas Coastal Management Program (CMP) administered by the Texas General Land Office (GLO).",
  },
  waterQuality: {
    imperviousCoverLimit: "No countywide blanket impervious cover cap for unincorporated areas. TCEQ and GLO Coastal Management Program may impose additional limits in the Critical Dune Area and Coastal Hazard Area. Incorporated cities enforce their own standards.",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development peak discharge for the 2-, 10-, 25-, and 100-year storm events per the Galveston County Drainage Criteria Manual. Post-Hurricane Ike (2008) updates introduced elevated design standards including higher freeboard requirements and storm surge overlay considerations. In low-lying coastal areas, pump stations may be required and must be designed for the 100-year storm event.",
    turbidityStandard: "No separate county numeric turbidity standard. TPDES Construction General Permit (TXR150000) effluent limits apply. Projects near Galveston Bay must also comply with TCEQ water quality standards for receiving water bodies (Galveston Bay is a nutrient-sensitive water body).",
  },
  swppp: {
    localPlanRequired: false,
    localPlanName: "N/A — State TPDES SWPPP satisfies local requirement",
    peStampRequired: false,
    notes: "Galveston County does not require a locally separate SWPPP beyond the state TPDES CGP SWPPP. Drainage and grading plans submitted for the county permit must be signed and sealed by a licensed Texas PE. Given the proximity to Galveston Bay and coastal wetlands, sediment and erosion control BMPs should be selected with sensitivity to saltwater and tidal environments.",
  },
  inspections: {
    localRequirements: "Galveston County Public Works / Engineering performs construction-phase inspections and a final acceptance inspection for permitted drainage facilities. Projects involving tidal outfalls or work in Galveston Bay are subject to concurrent inspection by USACE and TCEQ. Texas GLO may inspect projects in the coastal zone. Contractor must provide advance notice (minimum 48 hours) for county inspections.",
    qualificationRequired: "County inspections performed by county engineering staff. As-built surveys must be sealed by a licensed Texas RPLS. A licensed coastal engineer (PE with coastal specialty) is recommended for projects in FEMA V-Zones or within 1,000 ft of mean high tide.",
  },
  specialZones: [
    {
      name: "FEMA Coastal High Hazard Area — V-Zone (VE)",
      trigger: "Any development on Galveston Island, Bolivar Peninsula, or other coastal barrier areas mapped as FEMA V-Zone (VE).",
      restriction: "Structures in V-Zones must be elevated on open foundations (piers, columns) above the BFE with freeboard. No solid fill below BFE in V-Zones. Breakaway walls required below BFE. Texas GLO Coastal Management Program review required. Additional structural engineering for wave action and storm surge loading required.",
    },
    {
      name: "Texas Critical Dune Area and Coastal Hazard Area",
      trigger: "Any development within the Texas GLO-designated Critical Dune Area (generally within 1,000 ft landward of mean high tide on the Gulf of Mexico).",
      restriction: "Texas GLO Dune Protection Permit required. No development may damage or destroy protected coastal dunes. Beachfront Construction Certificate required from GLO for structures seaward of the Coastal Construction Line.",
    },
    {
      name: "Galveston Bay Estuarine System / Wetlands Buffer",
      trigger: "Development within 300 ft of the shoreline of Galveston Bay, West Bay, East Bay, Trinity Bay, or associated tidal wetlands.",
      restriction: "USACE Section 404 / Section 10 permit required for work in or affecting wetlands or navigable waters. TCEQ Section 401 Water Quality Certification required. Mitigation for wetland impacts may be required through the Galveston Bay Mitigation Bank.",
    },
    {
      name: "Harris-Galveston Coastal Subsidence District (HGCSD)",
      trigger: "Groundwater withdrawal for construction dewatering or permanent use within the HGCSD jurisdictional area covering Galveston County.",
      restriction: "HGCSD GRP compliance required. Galveston County has experienced significant land subsidence; elevation certificates must use current NAVD 88 datums verified against stable benchmarks.",
    },
  ],
  designManual: {
    required: true,
    name: "Galveston County Drainage Criteria Manual (Post-Ike Edition)",
    url: "https://www.galvestoncountytx.gov/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.galvestoncountytx.gov/departments/public-works",
    permitUrl: "https://www.galvestoncountytx.gov/departments/public-works",
    designManualUrl: "https://www.galvestoncountytx.gov/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Galveston County presents one of the most complex regulatory environments on the Texas Gulf Coast. Developers must navigate overlapping jurisdictions: Galveston County, TCEQ, USACE Galveston District, Texas GLO Coastal Management Program, FEMA NFIP, and the Harris-Galveston Coastal Subsidence District. Land subsidence is a critical long-term concern — Galveston Island has subsided 2–3 feet in some areas over the past century. The Ike Dike / Coastal Spine project (a USACE storm surge barrier system) is in construction phases as of 2026; developers should monitor how this project may affect future flood risk classifications.",
};
