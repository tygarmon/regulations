import { LocalRegulation } from "../../localTypes";

export const irving: LocalRegulation = {
  localCode: "irving",
  localName: "City of Irving",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Irving Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Irving Building Inspections at 825 W. Irving Blvd., Irving, TX 75060 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Irving Drainage Design Criteria",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Irving Drainage Design Criteria Manual",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade West Fork Trinity River, Elm Fork Trinity River, or Las Colinas canals",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Irving includes the Las Colinas urban center with an extensive canal network — construction near the canals requires additional erosion and sediment control. DFW International Airport straddles the Irving/Grapevine/Euless border; projects near airport-controlled drainage must coordinate with DFW Airport Operations.",
  },
  inspections: {
    localRequirements: "City of Irving Development Services inspects grading permits at rough grading and final stabilization. Las Colinas canal system requires heightened protection during construction phases.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Las Colinas Canal Network",
      trigger: "Construction activity adjacent to or draining into the Las Colinas urban canal system (Lake Carolyn and associated waterways)",
      restriction: "Erosion and sediment control BMPs must prevent turbid discharge into the canal system; canal is a heavily used amenity; coordinate with Las Colinas Association for projects adjacent to canals",
    },
    {
      name: "West Fork Trinity River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the West Fork Trinity River",
      restriction: "Floodplain development permit required from City of Irving Floodplain Administrator; USACE coordination required for work in or near the Trinity River channel",
    },
    {
      name: "DFW Airport Drainage Zone",
      trigger: "Construction on or adjacent to Dallas/Fort Worth International Airport property boundaries",
      restriction: "Coordinate with DFW Airport Operations for drainage connections; airport has its own TPDES MS4 permit and independent drainage infrastructure; runoff quality concerns for deicing fluid management",
    },
  ],
  designManual: {
    required: true,
    name: "City of Irving Drainage Design Criteria Manual",
    url: "https://www.cityofirving.org/1352/Building-Inspections",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofirving.org/1352/Building-Inspections",
    permitUrl: "https://www.cityofirving.org/1352/Building-Inspections",
    designManualUrl: "https://www.cityofirving.org/1352/Building-Inspections",
  },
  lastVerified: "2026-03",
  notes: "Irving is a built-out inner-ring suburb of Dallas with significant corporate office, industrial, and logistics activity centered around the Las Colinas urban center and DFW Airport corridor. The city is experiencing redevelopment of older commercial and industrial properties. The Las Colinas canal system requires special attention during construction. Irving is a Phase I MS4 permittee (larger urban area) with correspondingly more robust stormwater program requirements. The Trinity River floodplain bisects the city and has extensive FEMA mapping.",
};
