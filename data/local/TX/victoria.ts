import { LocalRegulation } from "../../localTypes";

export const victoria: LocalRegulation = {
  localCode: "victoria",
  localName: "City of Victoria",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Victoria Engineering / Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Victoria Engineering at 700 Main Center, Suite 101, Victoria, TX 77901 or online portal at victoriatx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Victoria Drainage Design Criteria; Guadalupe River proximity creates water quality sensitivity",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Victoria Drainage Design Criteria; Gulf Coastal Plain terrain with moderate annual rainfall (~35 in/year); hurricane risk during June–November",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Guadalupe River, Coleto Creek, or San Antonio Bay water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Victoria is a regional industrial and service hub in South Texas, home to the Port of Victoria (inland port on the Guadalupe River), significant petrochemical and refining facilities, and a growing logistics sector. Industrial construction requires SPCC coordination and awareness of potential hydrocarbon runoff risks. Hurricane Harvey (2017) severely impacted Victoria, making updated post-Harvey design standards applicable.",
  },
  inspections: {
    localRequirements: "City of Victoria Engineering inspects grading permits at rough grading and final stabilization. Hurricane season preparedness required June–November.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Guadalupe River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Guadalupe River",
      restriction: "Floodplain development permit required from City of Victoria Floodplain Administrator; USACE coordination required for work in or adjacent to the Guadalupe River navigation channel; Port of Victoria uses the Guadalupe River for barge traffic",
    },
    {
      name: "Coleto Creek Reservoir Watershed",
      trigger: "Development draining to Coleto Creek, which feeds Coleto Creek Reservoir (a power plant cooling and water supply reservoir)",
      restriction: "Enhanced water quality BMPs advisable; coordinate with Coleto Creek Reservoir and Power Station operator for projects with significant drainage impact",
    },
    {
      name: "Industrial / Petrochemical Zone",
      trigger: "Construction on or adjacent to petrochemical, refining, or industrial facilities in the Victoria area",
      restriction: "SPCC plan coordination required; SWPPP must address hydrocarbon and chemical spill prevention; coordinate with facility environmental staff",
    },
  ],
  designManual: {
    required: true,
    name: "City of Victoria Drainage Design Criteria",
    url: "https://www.victoriatx.gov/government/departments/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.victoriatx.gov/government/departments/engineering",
    permitUrl: "https://www.victoriatx.gov/government/departments/engineering",
    designManualUrl: "https://www.victoriatx.gov/government/departments/engineering",
  },
  lastVerified: "2026-03",
  notes: "Victoria is a regional industrial and service hub on the Guadalupe River in South Texas, roughly equidistant from Houston, San Antonio, and Corpus Christi. The city has significant petrochemical, refining, and manufacturing activity, as well as a growing healthcare and logistics sector. The Port of Victoria provides inland barge access to the Gulf Intracoastal Waterway. Hurricane Harvey (2017) caused widespread flooding and infrastructure damage in Victoria, prompting infrastructure investment and updated stormwater design practices. The Guadalupe River estuary and San Antonio Bay are ecologically significant coastal habitats downstream.",
};
