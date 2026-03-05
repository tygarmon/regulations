import { LocalRegulation } from "../../localTypes";

export const laredo: LocalRegulation = {
  localCode: "laredo",
  localName: "City of Laredo",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Laredo Public Works / Engineering Department",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Laredo Development Services at 1110 Houston St., Laredo, TX 78040 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows; Rio Grande and Zacate Creek floodplains impose fill and elevation restrictions",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Laredo Drainage Design Criteria; arid climate with intense summer thunderstorms requires conservative storm routing",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Rio Grande water quality; Rio Grande is a critical water supply and international waterway",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Laredo's location on the Rio Grande means stormwater management has international implications — discharge quality affects the Rio Grande and downstream users in Mexico. IBWC (International Boundary and Water Commission) exercises jurisdiction over the Rio Grande and coordination may be required for projects near the river.",
  },
  inspections: {
    localRequirements: "City of Laredo Engineering Department inspects grading permits at rough grading and final stabilization. Summer monsoon season (July–September) can produce intense thunderstorms requiring active BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Rio Grande Floodplain (FEMA AE/AO Zones)",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Rio Grande",
      restriction: "Floodplain development permit required from City of Laredo Floodplain Administrator; no net fill without compensatory storage; elevation certificate required; IBWC coordination required for work that may affect Rio Grande flow or international flood risk",
    },
    {
      name: "Zacate Creek Floodplain",
      trigger: "Development within FEMA-mapped floodplain along Zacate Creek, which flows through central Laredo to the Rio Grande",
      restriction: "Floodplain development permit required; Zacate Creek has experienced severe flash flooding; detention and erosion protection required; creek corridor is subject to rapid flow velocities during storm events",
    },
    {
      name: "International Boundary Zone (IBWC Jurisdiction)",
      trigger: "Projects within the International Boundary and Water Commission (IBWC) right-of-way or potentially affecting Rio Grande hydraulics",
      restriction: "IBWC authorization required; no construction that obstructs or alters Rio Grande flow without IBWC approval; federal and international treaty obligations apply",
    },
    {
      name: "Port of Laredo / International Trade Zone",
      trigger: "Construction at or near port of entry facilities, international bridges, or customs inspection areas",
      restriction: "Coordinate with CBP, GSA, and City of Laredo for projects affecting port infrastructure drainage; industrial and commercial truck traffic creates significant sediment tracking concerns",
    },
  ],
  designManual: {
    required: true,
    name: "City of Laredo Drainage Design Criteria",
    url: "https://www.laredo.gov/cms/one.aspx?portalId=15195251&pageId=15246437",
  },
  officialLinks: {
    agencyUrl: "https://www.laredo.gov/cms/one.aspx?portalId=15195251&pageId=15246437",
    permitUrl: "https://www.laredo.gov/cms/one.aspx?portalId=15195251&pageId=15246437",
    designManualUrl: "https://www.laredo.gov/cms/one.aspx?portalId=15195251&pageId=15246437",
  },
  lastVerified: "2026-03",
  notes: "Laredo is the largest inland port in the United States by trade volume, with thousands of commercial trucks crossing the border daily. The city's arid climate (averaging ~20 in/year rainfall) means storms are infrequent but can produce intense flash flooding in low-lying areas and along creek channels. The Rio Grande has complex international regulatory implications for any stormwater discharge that reaches the river. The International Boundary and Water Commission (IBWC) has treaty obligations governing Rio Grande water quality that extend to construction activities in the floodplain. Stormwater management in Laredo must account for both water quantity (flash flood protection) and water quality (international treaty compliance).",
};
