import { LocalRegulation } from "../../localTypes";

export const travisCounty: LocalRegulation = {
  localCode: "travis-county",
  localName: "Travis County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage Permit / Site Development Permit",
    submittalBody: "Travis County Transportation and Natural Resources (TNR) Department",
    leadTime: "Typically 4–8 weeks for standard review; complex projects or those in sensitive zones may require additional time",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit application package to Travis County TNR; online portal and in-person submission accepted. Contact TNR Engineering at (512) 854-9400.",
  },
  waterQuality: {
    imperviousCoverLimit: "No single county-wide cap; watershed-specific limits apply. Barton Creek Watershed limits apply per TCEQ and city regulations for contributing zones. Unincorporated areas outside regulated watersheds follow state TPDES thresholds.",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required per Travis County Drainage Criteria Manual. Post-development peak flow must not exceed pre-development peak flow for the 2-, 10-, and 100-year storm events. Water quality volume (WQV) capture required for the 1.5-inch water quality storm.",
    turbidityStandard: "Comply with TPDES Construction General Permit (TXR150000) effluent limits; discharge must not cause or contribute to a violation of water quality standards in receiving waters.",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TPDES TXR150000",
    peStampRequired: false,
    notes: "SWPPP required for all land disturbance ≥1 acre per TPDES CGP. Travis County may require submission of the SWPPP as part of the site development permit package for unincorporated area projects. PE stamp not mandated at the county level for the SWPPP itself, but engineered drainage plans must bear a Texas PE seal. Operator must maintain SWPPP on site and make it available for inspection.",
  },
  inspections: {
    localRequirements: "Travis County TNR conducts drainage and erosion control inspections for permitted projects in unincorporated areas. Inspections are required at key construction milestones (pre-construction, during grading/infrastructure installation, and final). Projects in the Barton Springs Contributing Zone may be subject to additional inspections.",
    qualificationRequired: "No county-specific inspector certification beyond standard TPDES requirements. TPDES CGP requires a qualified person to conduct site inspections at least once every 14 calendar days and within 24 hours of a storm event of 0.5 inches or greater.",
  },
  specialZones: [
    {
      name: "Barton Springs Edwards Aquifer Contributing Zone",
      trigger: "Any land disturbance or impervious cover addition within the designated Barton Springs Contributing Zone in unincorporated Travis County",
      restriction: "Heightened water quality protection requirements. Impervious cover restrictions and water quality controls per TCEQ SOS Ordinance standards. Pollutant-specific controls for hydrocarbons, pesticides, and nutrients required. Coordination with TCEQ and potentially the City of Austin may be required even for unincorporated parcels near ETJ boundaries.",
    },
    {
      name: "Critical Water Quality Zone (CWQZ)",
      trigger: "Development within creek corridor buffer distances per watershed-specific criteria",
      restriction: "Strict limitations on impervious cover, grading, and vegetation removal within the CWQZ buffer. Structural setbacks from creek banks required. Erosion controls must remain until 70% vegetative cover is established.",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Any development within a FEMA-mapped 100-year floodplain",
      restriction: "Travis County Floodplain Administrator review required. No net fill permitted in the regulatory floodway. Finished floor elevations must meet or exceed BFE plus applicable freeboard. Floodplain Development Permit required in addition to the drainage permit.",
    },
  ],
  designManual: {
    required: true,
    name: "Travis County Drainage Criteria Manual",
    url: "https://www.traviscountytx.gov/tnr/drainage",
  },
  officialLinks: {
    agencyUrl: "https://www.traviscountytx.gov/tnr",
    permitUrl: "https://www.traviscountytx.gov/tnr/drainage",
    designManualUrl: "https://www.traviscountytx.gov/tnr/drainage",
  },
  lastVerified: "2026-03",
  notes: "Travis County exercises jurisdiction over unincorporated areas outside Austin city limits and outside other municipalities' ETJs. Projects near Austin's ETJ boundary should confirm jurisdictional authority with both Travis County TNR and the City of Austin Watershed Protection Department. The Barton Springs SOS Ordinance may still apply to some unincorporated areas within contributing zones. TPDES CGP (TXR150000) applies to all sites ≥1 acre statewide regardless of county permit status.",
};
