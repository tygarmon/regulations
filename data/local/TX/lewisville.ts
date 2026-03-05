import { LocalRegulation } from "../../localTypes";

export const lewisville: LocalRegulation = {
  localCode: "lewisville",
  localName: "City of Lewisville",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Lewisville Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Lewisville Development Services at 151 W. Church St., Lewisville, TX 75057 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Lewisville Drainage Design Criteria; Lewisville Lake watershed is a primary concern",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Lewisville Drainage Design Criteria",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Lewisville Lake, Elm Fork Trinity River, or downstream water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Lewisville sits immediately downstream of Lewisville Lake (USACE), one of the largest lakes in the DFW Metroplex and a major water supply and recreation reservoir. Projects in the contributing watershed should implement enhanced BMPs to protect lake water quality.",
  },
  inspections: {
    localRequirements: "City of Lewisville Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lewisville Lake USACE Project Boundary",
      trigger: "Construction within the USACE Lewisville Lake project boundary or potentially affecting lake shoreline or inflows",
      restriction: "USACE Section 404/10 permits required for work in or adjacent to Lewisville Lake; USACE Fort Worth District manages the lake; shoreline management plan governs development adjacent to the lake",
    },
    {
      name: "Elm Fork Trinity River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Elm Fork Trinity River",
      restriction: "Floodplain development permit required from City of Lewisville Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Lewisville Drainage Design Criteria",
    url: "https://www.cityoflewisville.com/business/permits-development",
  },
  officialLinks: {
    agencyUrl: "https://www.cityoflewisville.com/business/permits-development",
    permitUrl: "https://www.cityoflewisville.com/business/permits-development",
    designManualUrl: "https://www.cityoflewisville.com/business/permits-development",
  },
  lastVerified: "2026-03",
  notes: "Lewisville is a rapidly growing suburb in Denton County, located immediately south of Lewisville Lake — one of the DFW area's largest USACE reservoirs. The city has seen significant commercial and residential development pressure along the I-35E corridor. Denton County drainage regulations apply outside city limits. The proximity to Lewisville Lake means water quality protection is a key consideration for construction runoff.",
};
