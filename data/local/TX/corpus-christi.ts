import { LocalRegulation } from "../../localTypes";

export const corpusChristi: LocalRegulation = {
  localCode: "corpus-christi",
  localName: "City of Corpus Christi",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Stormwater Construction Permit / Grading and Drainage Permit",
    submittalBody: "City of Corpus Christi Development Services",
    leadTime: "Plan review 2–6 weeks; drainage study required for projects ≥ 1 acre",
    fee: "Based on project area; contact Development Services for current schedule",
    applicationMethod: "Online via Corpus Christi permitting portal or in-person at Development Services, 2406 Leopard St",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; coastal and bay watershed overlay controls apply in sensitive areas",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required to maintain pre-development peak flows for 2-, 10-, 25-, and 100-year storms per Corpus Christi Drainage Design Manual; low-lying coastal topography requires careful routing analysis",
    turbidityStandard: "No numeric local NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Corpus Christi Bay, Nueces Bay, or receiving water quality standards",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TCEQ TXR150000; Drainage Report required for local permit",
    peStampRequired: true,
    notes: "Drainage Report prepared by a Texas PE required for all projects ≥ 1 acre. Coastal proximity means discharges can directly affect bay water quality and seagrass beds — silt fence and inlet protection are minimum requirements. Temporary construction access across FEMA floodways requires separate coordination.",
  },
  inspections: {
    localRequirements: "City of Corpus Christi inspects grading permits at rough grading, drainage installation, and final stabilization stages. Hurricane season (June–November) requires heightened BMP maintenance and pre-storm inspections.",
    qualificationRequired: "No city-specific inspector certification beyond TCEQ requirements; PE-of-record responsible for drainage design compliance",
  },
  specialZones: [
    {
      name: "FEMA Coastal High Hazard Area (V-Zone)",
      trigger: "Development seaward of the Coastal Construction Line or within FEMA V-Zone on Padre Island and barrier islands",
      restriction: "Structural elevation required; wave action design loads apply; no fill in V-zones; development strictly limited",
    },
    {
      name: "FEMA AE Floodplain — Nueces River / Corpus Christi Bay",
      trigger: "Development within 100-year floodplain of Nueces River, Oso Bay, and Corpus Christi Bay coastal floodplain",
      restriction: "Lowest finished floor ≥ 1 ft above BFE; floodplain development permit required from City; FEMA LOMA/LOMR for fill projects",
    },
    {
      name: "Coastal Bend Bays & Pass Critical Area",
      trigger: "Projects within 1,000 ft of Corpus Christi Bay, Nueces Bay, Oso Bay, or Laguna Madre",
      restriction: "Enhanced water quality BMPs required; no direct discharge of turbid stormwater to bay; Texas GLO Coastal Management Program coordination may be required",
    },
  ],
  designManual: {
    required: true,
    name: "City of Corpus Christi Drainage Design Manual",
    url: "https://www.cctexas.com/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.cctexas.com/departments/development-services",
    permitUrl: "https://www.cctexas.com/departments/development-services/permits",
    designManualUrl: "https://www.cctexas.com/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Corpus Christi's coastal location and flat topography create unique stormwater challenges. The city is in a hurricane-prone area — construction timing relative to hurricane season is an important planning consideration. Padre Island and other barrier island projects have the strictest requirements due to FEMA V-Zone mapping and proximity to the Gulf of Mexico.",
};
