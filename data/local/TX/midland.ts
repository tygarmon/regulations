import { LocalRegulation } from "../../localTypes";

export const midland: LocalRegulation = {
  localCode: "midland",
  localName: "City of Midland",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Land Disturbance Permit",
    submittalBody: "City of Midland Engineering Department / Development Services",
    leadTime: "Plan review typically 2–3 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Midland Development Services at 300 N. Loraine St., Midland, TX 79701 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Midland Drainage Design Standards; flat arid terrain with ephemeral draws requires careful storm routing",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000; Permian Basin caliche soils produce significant sediment loads when disturbed",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for permits. Permian Basin oil and gas development creates significant construction activity; industrial and commercial sites must address both water and wind erosion. Caliche soils are highly erodible when wet and must be stabilized promptly. Oilfield chemical and produced water spill prevention must be addressed in SWPPP for projects near oil and gas infrastructure.",
  },
  inspections: {
    localRequirements: "City of Midland Engineering Department inspects grading permits at rough grading and final stabilization. Summer thunderstorm season (July–September) can produce intense localized flooding.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Ephemeral Drainage Channels / Permian Basin Draws",
      trigger: "Development crossing or adjacent to ephemeral drainage channels, playas, or natural draws",
      restriction: "Drainage channels and playas must not be filled without compensatory storage; culvert crossings must be sized for 100-year flow; erosion protection of channel banks required",
    },
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Midland Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Midland Drainage Design Standards",
    url: "https://www.midlandtexas.gov/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.midlandtexas.gov/engineering",
    permitUrl: "https://www.midlandtexas.gov/development-services",
    designManualUrl: "https://www.midlandtexas.gov/engineering",
  },
  lastVerified: "2026-03",
  notes: "Midland is the hub of the Permian Basin, one of the world's most productive oil-producing regions. The high volume of oil and gas construction activity creates significant stormwater compliance responsibilities. The arid climate (averaging ~14 in/year rainfall) means storms are infrequent but can be intense. Caliche soils typical of the Permian Basin are easily eroded when disturbed by construction equipment. Many construction sites in the basin involve proximity to pipelines, wellheads, and processing facilities, which requires additional spill prevention planning in the SWPPP.",
};
