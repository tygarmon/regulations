import { LocalRegulation } from "../../localTypes";

export const williamsonCounty: LocalRegulation = {
  localCode: "williamson-county",
  localName: "Williamson County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage Permit",
    submittalBody: "Williamson County Road and Bridge Department / Engineering Division",
    leadTime: "Typically 3–6 weeks for standard projects; larger submissions may require 6–10 weeks given high development volume",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit drainage permit application to Williamson County Road and Bridge Engineering. In person at the Georgetown office. Contact (512) 943-3330 for current submittal requirements.",
  },
  waterQuality: {
    imperviousCoverLimit: "No county-wide impervious cover cap for most unincorporated areas. Edwards Aquifer Recharge Zone areas subject to TCEQ Chapter 213 rules with stricter impervious cover limitations.",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development peak discharge for the 2-, 10-, and 100-year design storm events per Williamson County Drainage Criteria. Water quality controls required to capture and treat the first flush (1.5-inch rainfall depth) before discharge.",
    turbidityStandard: "Comply with TPDES Construction General Permit (TXR150000) effluent limits. Discharge must not cause or contribute to violations of Texas Surface Water Quality Standards in receiving streams.",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TPDES TXR150000",
    peStampRequired: false,
    notes: "SWPPP required for all land disturbance ≥1 acre per TPDES CGP. Williamson County may require the SWPPP to be submitted or available for review as part of the drainage permit application for larger projects. Engineered drainage and grading plans submitted to the county must bear a Texas PE seal.",
  },
  inspections: {
    localRequirements: "Williamson County Road and Bridge Engineering conducts drainage inspections for permitted projects in unincorporated areas. Required stages: pre-construction, drainage infrastructure installation, and final acceptance. Schedule inspections well in advance given the volume of active construction. Projects in the Edwards Aquifer Recharge Zone may require TCEQ-level inspections.",
    qualificationRequired: "No county-specific erosion control inspector certification beyond TPDES requirements. TPDES CGP requires qualified personnel to conduct site inspections at minimum every 14 calendar days and within 24 hours of any qualifying storm event (≥0.5 inches).",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone",
      trigger: "Any development within the TCEQ-designated Edwards Aquifer Recharge Zone in Williamson County (portions of southern and southwestern Williamson County)",
      restriction: "TCEQ Chapter 213 rules apply. Impervious cover limitations enforced: generally no more than 15–25% depending on contributing zone category. Pollutant abatement plans (PAPs) may be required. All stormwater must be treated before infiltration to avoid aquifer contamination. Coordinate with TCEQ Edwards Aquifer Protection Program.",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Development within a FEMA-mapped 100-year floodplain",
      restriction: "Williamson County Floodplain Administrator review required. No net fill in regulatory floodway. Structures must meet or exceed BFE plus any applicable freeboard. Floodplain Development Permit required separately from the drainage permit.",
    },
    {
      name: "Regulated Waterway / Creek Corridor Buffer",
      trigger: "Grading or construction within the required buffer of regulated waterways per county drainage criteria",
      restriction: "Erosion protection and vegetation management requirements within creek buffers. Structural setbacks apply. Riparian buffer restoration may be required if disturbed.",
    },
  ],
  designManual: {
    required: true,
    name: "Williamson County Drainage Criteria Manual",
    url: "https://www.wilco.org/Departments/Road-Bridge/Engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.wilco.org/Departments/Road-Bridge",
    permitUrl: "https://www.wilco.org/Departments/Road-Bridge/Engineering",
    designManualUrl: "https://www.wilco.org/Departments/Road-Bridge/Engineering",
  },
  lastVerified: "2026-03",
  notes: "Williamson County is one of the fastest-growing counties in the United States. Incorporated cities within Williamson County (Round Rock, Georgetown, Cedar Park, Leander, Taylor, Hutto) have independent MS4 permits — county drainage permit jurisdiction applies only to unincorporated areas. Applicants should confirm whether their project falls within a city's ETJ before submitting to the county.",
};
