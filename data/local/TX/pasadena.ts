import { LocalRegulation } from "../../localTypes";

export const pasadena: LocalRegulation = {
  localCode: "pasadena",
  localName: "City of Pasadena",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Pasadena Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Pasadena Permitting at 1149 Ellsworth Dr., Pasadena, TX 77506 or contact city engineering department",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Pasadena Drainage Design Criteria; industrial and petrochemical land use creates heightened water quality concerns",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Pasadena Drainage Design Criteria; low-lying terrain adjacent to the Houston Ship Channel requires careful drainage design",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Galveston Bay, Houston Ship Channel, or Armand Bayou",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Pasadena is home to significant petrochemical, refining, and industrial facilities along the Houston Ship Channel. Construction projects in industrial areas must address spill prevention and SPCC coordination. SWPPP must account for potential hydrocarbon, chemical, and industrial waste exposure. Armand Bayou Nature Center is an ecologically sensitive wetland area within the city.",
  },
  inspections: {
    localRequirements: "City of Pasadena Public Works inspects grading permits at rough grading and final stabilization. Industrial corridor construction requires enhanced BMP measures and coordination with facility environmental staff.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Houston Ship Channel Industrial Corridor",
      trigger: "Construction on or adjacent to petrochemical, refining, or chemical facilities along the Houston Ship Channel",
      restriction: "SPCC plan coordination required; potential TCEQ industrial stormwater permit requirements; coordinate with facility environmental compliance staff; USACE Section 10 permits for work in navigable waters",
    },
    {
      name: "Armand Bayou Watershed and Nature Center",
      trigger: "Development draining to Armand Bayou or within the Armand Bayou Nature Center buffer zone",
      restriction: "Armand Bayou is one of the last remaining natural tidal bayous near Houston; enhanced turbidity and hydrocarbon controls required; coordinate with Armand Bayou Nature Center for projects in the immediate vicinity",
    },
    {
      name: "Harris County Flood Control District Bayou Channels",
      trigger: "Development connecting outfalls to HCFCD-maintained bayous and drainage channels",
      restriction: "HCFCD outfall connection permit required; HCFCD design criteria apply for connections; coordinate with HCFCD Galveston-Brazos operations center",
    },
  ],
  designManual: {
    required: true,
    name: "City of Pasadena Drainage Design Criteria",
    url: "https://www.ci.pasadena.tx.us/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.ci.pasadena.tx.us/engineering",
    permitUrl: "https://www.ci.pasadena.tx.us/engineering",
    designManualUrl: "https://www.ci.pasadena.tx.us/engineering",
  },
  lastVerified: "2026-03",
  notes: "Pasadena is an industrial city east of Houston along the Houston Ship Channel, home to one of the largest concentrations of petrochemical facilities in the world. The city's stormwater program must contend with industrial runoff risks, low-lying terrain, and proximity to Galveston Bay. Phase I MS4 status reflects its large urban footprint. Hurricane Harvey (2017) caused severe flooding and highlighted the vulnerabilities of the low-lying bayou drainage system. Armand Bayou provides an important natural drainage and ecological corridor within the city.",
};
