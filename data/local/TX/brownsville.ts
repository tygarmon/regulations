import { LocalRegulation } from "../../localTypes";

export const brownsville: LocalRegulation = {
  localCode: "brownsville",
  localName: "City of Brownsville",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Brownsville Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Brownsville Engineering at 1034 E. Levee St., Brownsville, TX 78520 or online portal at brownsvilletx.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows; resaca drainage system and Rio Grande proximity create unique constraints",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Brownsville Drainage Design Standards; flat Gulf Coastal Plain terrain requires pump-assisted drainage in some low areas",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Rio Grande, Brownsville Ship Channel, or Laguna Madre water quality; Rio Grande has international treaty water quality obligations",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Brownsville is located at the southern tip of Texas on the Rio Grande, adjacent to Matamoros, Mexico. The IBWC (International Boundary and Water Commission) has jurisdiction over the Rio Grande and may require coordination for projects near the river. The city's unique resaca (oxbow lake) system from ancient Rio Grande meanders provides both drainage and ecological habitat. Port of Brownsville is an active deepwater port with significant industrial and logistics activity.",
  },
  inspections: {
    localRequirements: "City of Brownsville Public Works inspects grading permits at rough grading and final stabilization. Hurricane season preparedness required June–November.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Rio Grande / IBWC Jurisdiction",
      trigger: "Construction within the IBWC right-of-way or potentially affecting Rio Grande hydraulics or water quality",
      restriction: "IBWC authorization required; no construction that obstructs Rio Grande flow without IBWC approval; federal treaty obligations govern Rio Grande water quality",
    },
    {
      name: "Resaca System",
      trigger: "Development adjacent to or draining to the Brownsville resaca (oxbow lake) network",
      restriction: "Resacas function as drainage canals and ecological habitat; erosion and sediment discharge to resacas must be controlled; South Texas resacas support critical migratory bird habitat; coordinate with City of Brownsville for resaca outfall connections",
    },
    {
      name: "Laguna Madre / Coastal Zone",
      trigger: "Development near the Brownsville Ship Channel, Gulf Intracoastal Waterway, or Laguna Madre (an extremely hypersaline coastal lagoon)",
      restriction: "Texas GLO Coastal Management Program may apply; USACE Section 10/404 permits required for work in or adjacent to tidal waters; Laguna Madre is one of a few hypersaline lagoons in the world with unique ecological sensitivity",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain (coastal and riverine)",
      restriction: "Floodplain development permit required from City of Brownsville Floodplain Administrator; coastal AE and V-zone development requires elevation certificates and special design standards",
    },
  ],
  designManual: {
    required: true,
    name: "City of Brownsville Drainage Design Standards",
    url: "https://www.brownsvilletx.gov/government/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.brownsvilletx.gov/government/departments/public-works",
    permitUrl: "https://www.brownsvilletx.gov/government/departments/public-works",
    designManualUrl: "https://www.brownsvilletx.gov/government/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Brownsville is the southernmost large city in Texas and the United States, located at the mouth of the Rio Grande on the Gulf Coast. It is the twin city of Matamoros, Tamaulipas, Mexico. The Port of Brownsville (accessible via the Brownsville Ship Channel) handles significant international trade. The city's unique resaca system — ancient Rio Grande oxbow lakes — provides drainage and ecological habitat throughout the city. The Rio Grande forms the international border and is subject to IBWC jurisdiction. Laguna Madre, one of the world's most unique coastal ecosystems, lies to the east. SpaceX's Boca Chica launch site is in the Brownsville area, bringing new industrial construction activity.",
};
