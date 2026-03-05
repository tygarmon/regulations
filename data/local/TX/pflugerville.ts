import { LocalRegulation } from "../../localTypes";

export const pflugerville: LocalRegulation = {
  localCode: "pflugerville",
  localName: "City of Pflugerville",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Pflugerville Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Pflugerville Development Services at 100 E. Main St., Pflugerville, TX 78660 or online portal at pflugervilletx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Pflugerville Drainage Design Criteria; Travis County and Williamson County drainage requirements apply depending on project location",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of Pflugerville Engineering Standards",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Gilleland Creek, Lake Pflugerville, or Colorado River tributaries",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Pflugerville spans the Travis-Williamson county line — project location determines which county's drainage infrastructure is applicable. The city has grown rapidly as an eastern Austin suburb. Gilleland Creek has experienced repeated flooding and has been subject to watershed studies.",
  },
  inspections: {
    localRequirements: "City of Pflugerville Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Gilleland Creek Floodplain",
      trigger: "Development within or adjacent to Gilleland Creek floodplain",
      restriction: "Floodplain development permit required; Gilleland Creek watershed has experienced repeated flooding; updated hydrology studies required for projects affecting the floodplain",
    },
    {
      name: "Travis/Williamson County Line",
      trigger: "Development spanning or near the Travis-Williamson county boundary within Pflugerville",
      restriction: "Verify which county's drainage infrastructure criteria apply; confirm drainage outfall county for appropriate drainage district coordination",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Pflugerville Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Pflugerville Engineering Standards",
    url: "https://www.pflugervilletx.gov/city-government/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.pflugervilletx.gov/city-government/departments/development-services",
    permitUrl: "https://www.pflugervilletx.gov/city-government/departments/development-services",
    designManualUrl: "https://www.pflugervilletx.gov/city-government/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Pflugerville is a fast-growing Austin suburb in northern Travis County/southern Williamson County, experiencing significant residential and commercial development. Major employers including Apple and Samsung have facilities nearby, spurring growth. The city straddles two counties, which adds permitting complexity for projects near the county line. Gilleland Creek has been a persistent flooding concern and has received significant engineering study and improvement investment.",
};
