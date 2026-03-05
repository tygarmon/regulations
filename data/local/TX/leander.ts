import { LocalRegulation } from "../../localTypes";

export const leander: LocalRegulation = {
  localCode: "leander",
  localName: "City of Leander",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Leander Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Leander Development Services at 201 N. Brushy St., Leander, TX 78641 or online portal at leandertx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "Portions of Leander are within the Edwards Aquifer Contributing Zone — EAA or BSEACD rules may apply, limiting impervious cover and requiring recharge-protection BMPs for qualifying sites",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of Leander and Williamson County Drainage Criteria",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Brushy Creek or tributaries of the San Gabriel River",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Leander is one of the fastest-growing cities in Texas, with large master-planned community development underway. Edwards Aquifer recharge and contributing zones affect portions of the city. Williamson County drainage districts coordinate on regional channel infrastructure. Brushy Creek Regional Utility Authority (BCRUA) may have additional requirements for projects in the Brushy Creek watershed.",
  },
  inspections: {
    localRequirements: "City of Leander Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Development on land identified as Edwards Aquifer Contributing Zone within Leander's jurisdiction",
      restriction: "Barton Springs/Edwards Aquifer Conservation District (BSEACD) rules apply; impervious cover limits and recharge-protection BMPs required; avoid direct discharge to sinkholes, caves, or karst features",
    },
    {
      name: "Brushy Creek Watershed",
      trigger: "Development draining to Brushy Creek and its tributaries",
      restriction: "Brushy Creek Regional Utility Authority (BCRUA) manages regional infrastructure; coordinate with BCRUA and Williamson County for significant drainage impacts; Brushy Creek has experienced historical flooding",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Leander Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Leander Development Standards",
    url: "https://www.leandertx.gov/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.leandertx.gov/development-services",
    permitUrl: "https://www.leandertx.gov/development-services",
    designManualUrl: "https://www.leandertx.gov/development-services",
  },
  lastVerified: "2026-03",
  notes: "Leander is among the fastest-growing cities in Texas and the nation, driven by Austin tech-sector overflow growth and high-capacity transit access (MetroRail). The city is developing large master-planned communities with significant construction activity. Edwards Aquifer recharge and contributing zone regulations add a layer of water quality complexity not found in most Texas cities. Williamson County's rapid growth means regional drainage infrastructure is frequently planned and built. Karst topography requires careful BMP selection to avoid direct aquifer injection.",
};
