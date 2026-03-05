import { LocalRegulation } from "../../localTypes";

export const kyle: LocalRegulation = {
  localCode: "kyle",
  localName: "City of Kyle",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Kyle Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Kyle Development Services at 100 W. Center St., Kyle, TX 78640 or online portal at cityofkyle.com",
  },
  waterQuality: {
    imperviousCoverLimit: "Portions of Kyle are within the Edwards Aquifer Recharge Zone or Contributing Zone — EAA rules may limit impervious cover to 15–30% on qualifying sites; areas over the Recharge Zone have strict impervious cover caps and water quality requirements",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of Kyle and Hays County Drainage Criteria; Onion Creek watershed considerations apply",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Onion Creek, Plum Creek, or Edwards Aquifer recharge features",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Kyle's location over the Edwards Aquifer Recharge Zone means many projects must comply with EAA water quality protection rules, which are among the most stringent in Texas. Impervious cover caps (15% over recharge zone, 35% over contributing zone with water quality controls) apply to EAA-regulated sites. Onion Creek has experienced repeated flooding and has FEMA flood maps that have been revised multiple times.",
  },
  inspections: {
    localRequirements: "City of Kyle Development Services inspects grading permits at rough grading and final stabilization. Edwards Aquifer protection sites may require additional water quality inspections.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone",
      trigger: "Development on land over the Edwards Aquifer Recharge Zone",
      restriction: "EAA permit required for >1 acre disturbance; impervious cover limited to 15% (no waiver available); water quality controls required; discharges to sinkholes, caves, or karst features prohibited; coordinate with Edwards Aquifer Authority",
    },
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Development on land over or draining to the Edwards Aquifer Contributing Zone",
      restriction: "EAA permit required; impervious cover limited to 30% without water quality controls or 65% with approved water quality controls; coordinate with Edwards Aquifer Authority for applicable requirements",
    },
    {
      name: "Onion Creek Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along Onion Creek",
      restriction: "Floodplain development permit required from City of Kyle Floodplain Administrator; Onion Creek has experienced devastating flooding (Halloween floods of 2013 and 2015) and FEMA maps have been revised; use current effective FIRM panels",
    },
    {
      name: "Plum Creek Watershed",
      trigger: "Development in the Plum Creek drainage area in southern Kyle",
      restriction: "Coordinate with Hays County for Plum Creek outfall connections; Plum Creek is a Hays County drainage district concern",
    },
  ],
  designManual: {
    required: true,
    name: "City of Kyle Development Standards / Hays County Drainage Criteria",
    url: "https://www.cityofkyle.com/government/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofkyle.com/government/departments/development-services",
    permitUrl: "https://www.cityofkyle.com/government/departments/development-services",
    designManualUrl: "https://www.cityofkyle.com/government/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Kyle is one of the fastest-growing cities in Texas and the nation, located on I-35 in Hays County between Austin and San Marcos. The city's explosive growth is driven by Austin metro expansion. Kyle's location over the Edwards Aquifer Recharge Zone creates significant regulatory complexity — EAA permit requirements are among the most stringent stormwater regulations in Texas. Onion Creek has been devastated by flash floods multiple times, prompting significant floodplain remapping and buyout programs. The combination of karst geology, flash flood risk, and rapid urbanization makes stormwater management especially challenging in Kyle.",
};
