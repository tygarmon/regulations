import { LocalRegulation } from "../../localTypes";

export const buda: LocalRegulation = {
  localCode: "buda",
  localName: "City of Buda",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Buda Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Buda Development Services at 405 E. Loop St., Buda, TX 78610 or online portal at cityofbuda.com",
  },
  waterQuality: {
    imperviousCoverLimit: "Portions of Buda are within the Edwards Aquifer Recharge Zone or Contributing Zone — EAA permit required; impervious cover caps (15% recharge zone / 30–65% contributing zone) apply on regulated sites",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of Buda and Hays County Drainage Criteria",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Onion Creek, Garlic Creek, or Edwards Aquifer recharge features",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Buda is adjacent to Kyle and shares similar Edwards Aquifer regulatory exposure. The city is in Hays County and experiencing rapid growth along the I-35 corridor. EAA coordination is required for projects on recharge or contributing zone land.",
  },
  inspections: {
    localRequirements: "City of Buda Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge and Contributing Zones",
      trigger: "Development on land over the Edwards Aquifer Recharge or Contributing Zone",
      restriction: "EAA permit required; impervious cover limits apply; water quality controls and karst feature protection required; coordinate with Edwards Aquifer Authority",
    },
    {
      name: "Onion Creek / Garlic Creek Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along Onion Creek, Garlic Creek, or their tributaries",
      restriction: "Floodplain development permit required from City of Buda Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Buda Development Standards / Hays County Drainage Criteria",
    url: "https://www.cityofbuda.com/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofbuda.com/departments/development-services",
    permitUrl: "https://www.cityofbuda.com/departments/development-services",
    designManualUrl: "https://www.cityofbuda.com/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Buda is a fast-growing Hays County city on I-35 immediately south of Kyle and north of San Marcos. The city has transitioned from a small farming community to a significant Austin suburban growth node with major industrial, commercial, and residential development. Like Kyle, portions of Buda overlie the Edwards Aquifer, creating EAA regulatory requirements. The city is investing in development services capacity to manage its rapid growth.",
};
