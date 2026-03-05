import { LocalRegulation } from "../../localTypes";

export const sugarLand: LocalRegulation = {
  localCode: "sugar-land",
  localName: "City of Sugar Land",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Sugar Land Public Works",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Sugar Land Development Services at 2700 Town Center Blvd. N., Sugar Land, TX 77479 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Sugar Land Drainage Design Criteria; Fort Bend County drainage district requirements apply for county-maintained channels",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Sugar Land and Fort Bend County Drainage Criteria; Brazos River proximity requires careful floodplain analysis",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Brazos River, Oyster Creek, or Buffalo Run",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Sugar Land is in Fort Bend County, and development must coordinate with applicable Fort Bend County Drainage Districts for outfall connections to county-maintained channels. The Brazos River flood risk zone affects western portions of the city.",
  },
  inspections: {
    localRequirements: "City of Sugar Land Public Works inspects grading permits at rough grading, drainage infrastructure installation, and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Brazos River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Brazos River on the city's western boundary",
      restriction: "Floodplain development permit required from City of Sugar Land Floodplain Administrator; USACE coordination required for work in or near the Brazos River; major Brazos River flood events have affected Sugar Land in 2016 and 2017",
    },
    {
      name: "Fort Bend County Drainage Districts",
      trigger: "Development connecting outfalls to Fort Bend County Drainage District maintained channels",
      restriction: "Outfall connection permit required from applicable Fort Bend County Drainage District; district drainage criteria apply for channel connections; coordinate with Fort Bend County Engineering",
    },
    {
      name: "Oyster Creek Floodplain",
      trigger: "Development within or adjacent to Oyster Creek floodplain",
      restriction: "Floodplain permit required; Oyster Creek improvements are underway through regional flood control projects; design must account for future channel modifications",
    },
  ],
  designManual: {
    required: true,
    name: "City of Sugar Land Drainage Design Criteria",
    url: "https://www.sugarlandtx.gov/government/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.sugarlandtx.gov/government/departments/public-works",
    permitUrl: "https://www.sugarlandtx.gov/government/departments/public-works",
    designManualUrl: "https://www.sugarlandtx.gov/government/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Sugar Land is a prosperous Fort Bend County suburb southwest of Houston, developed around the historic Imperial Sugar refinery site. The city has a substantial commercial, retail, and corporate presence (Schlumberger, for example). The Brazos River and Oyster Creek create significant floodplain considerations. Fort Bend County has invested heavily in regional drainage infrastructure post-Harvey (2017). The city's development review is integrated with Fort Bend County drainage district coordination.",
};
