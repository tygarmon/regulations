import { LocalRegulation } from "../../localTypes";

export const sanMarcos: LocalRegulation = {
  localCode: "san-marcos",
  localName: "City of San Marcos",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of San Marcos Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of San Marcos Development Services at 630 E. Hopkins St., San Marcos, TX 78666 or online portal at sanmarcostx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "Portions of San Marcos are within the Edwards Aquifer Recharge Zone or Contributing Zone — EAA permit required; impervious cover caps (15% recharge zone / up to 65% contributing zone with controls) apply; downtown and older areas over recharge zone face development constraints",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of San Marcos and Hays County Drainage Criteria; San Marcos River and Blanco River flash flood risk requires conservative design",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade San Marcos River, Blanco River, or Barton Springs Pool water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. San Marcos is the location of San Marcos Springs, the second-largest springs in Texas and the headwaters of the San Marcos River — one of the most ecologically sensitive and legally protected waterways in Texas. The San Marcos salamander and fountain darter (endangered species) are found only at San Marcos Springs. EAA and USFWS coordination may be required for projects with potential aquifer or river impact. Texas State University generates significant construction activity in the city.",
  },
  inspections: {
    localRequirements: "City of San Marcos Development Services inspects grading permits at rough grading and final stabilization. Edwards Aquifer protection sites require active BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone — San Marcos Springs",
      trigger: "Development on land over or draining to the Edwards Aquifer Recharge Zone in the San Marcos area",
      restriction: "EAA permit required; extremely stringent water quality controls apply due to proximity to San Marcos Springs; impervious cover limits enforced; USFWS coordination may be required for projects near the springs (endangered species habitat)",
    },
    {
      name: "San Marcos River (Federally Protected Habitat)",
      trigger: "Any construction activity that could affect water quality or flow of the San Marcos River, which originates at San Marcos Springs",
      restriction: "USACE Section 404/10 permits required; USFWS Section 7 consultation required for potential effects on San Marcos salamander and fountain darter (both federally endangered); extreme care required to avoid turbidity discharge to the spring-fed river",
    },
    {
      name: "Blanco River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Blanco River (flows through San Marcos area and joins the San Marcos River)",
      restriction: "Floodplain development permit required; the Blanco River experienced a catastrophic flood in May 2015 (Memorial Day flood) that exceeded 100-year levels; current FEMA maps may not reflect updated hazard data",
    },
    {
      name: "Texas State University Campus Zone",
      trigger: "Construction on or immediately adjacent to Texas State University property",
      restriction: "Coordinate with Texas State University Facilities for drainage plan review; university has its own institutional stormwater program; TSU campus drains to Sessom Creek which flows to San Marcos River",
    },
  ],
  designManual: {
    required: true,
    name: "City of San Marcos Drainage Criteria / Hays County Drainage Design Standards",
    url: "https://www.sanmarcostx.gov/government/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.sanmarcostx.gov/government/departments/development-services",
    permitUrl: "https://www.sanmarcostx.gov/government/departments/development-services",
    designManualUrl: "https://www.sanmarcostx.gov/government/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "San Marcos is the seat of Hays County and home to Texas State University (large enrollment). The city is uniquely positioned over the Edwards Aquifer and at the source of San Marcos Springs, one of the most ecologically significant spring systems in North America. Endangered species at San Marcos Springs have resulted in extensive federal oversight (USFWS, USACE) of any projects that could affect the springs or the San Marcos River. The May 2015 Memorial Day flood on the Blanco River caused catastrophic damage in nearby Wimberley and affected San Marcos. San Marcos is growing rapidly as an Austin-San Antonio corridor city.",
};
