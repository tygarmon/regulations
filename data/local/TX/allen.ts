import { LocalRegulation } from "../../localTypes";

export const allen: LocalRegulation = {
  localCode: "allen",
  localName: "City of Allen",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Allen Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Allen Development Services at 305 Century Pkwy., Allen, TX 75013 or online portal at cityofallen.org",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Allen Design and Construction Standards",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Allen Engineering Standards; Collin County overlay applies for county-maintained channels",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade East Fork Trinity River, Cottonwood Creek, or Lake Lavon",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Allen is in Collin County and adjacent to Plano and McKinney — large projects may span city boundaries. The East Fork Trinity drains to Lake Lavon, a regional water supply reservoir managed by the North Texas Municipal Water District (NTMWD).",
  },
  inspections: {
    localRequirements: "City of Allen Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "East Fork Trinity / Lake Lavon Watershed",
      trigger: "Development draining to the East Fork Trinity River and Lake Lavon (North Texas Municipal Water District supply reservoir)",
      restriction: "Enhanced water quality BMPs recommended; coordinate with NTMWD for projects with significant watershed impact on Lake Lavon",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along Cottonwood Creek and East Fork Trinity tributaries",
      restriction: "Floodplain development permit required from City of Allen Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Allen Design and Construction Standards",
    url: "https://www.cityofallen.org/207/Development-Services",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofallen.org/207/Development-Services",
    permitUrl: "https://www.cityofallen.org/207/Development-Services",
    designManualUrl: "https://www.cityofallen.org/207/Development-Services",
  },
  lastVerified: "2026-03",
  notes: "Allen is a high-income suburb in Collin County with an affluent, highly educated population and strong corporate presence along the US-75 (Central Expressway) corridor. The city is largely built out in its central areas but continues to develop in its eastern portions. Allen borders Plano to the south and McKinney to the north — large developments near these borders require coordination. The city has a proactive stormwater program and high community expectations for water quality and erosion prevention.",
};
