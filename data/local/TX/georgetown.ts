import { LocalRegulation } from "../../localTypes";

export const georgetown: LocalRegulation = {
  localCode: "georgetown",
  localName: "City of Georgetown",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Georgetown Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Georgetown Development Services at 300 Industrial Ave., Georgetown, TX 78626 or online portal at georgetown.org",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; however, portions of Georgetown may be within the Edwards Aquifer Contributing Zone (EACZ) requiring compliance with Edwards Aquifer Authority (EAA) or Barton Springs/Edwards Aquifer Conservation District (BSEACD) rules limiting impervious cover",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of Georgetown Drainage Criteria; Williamson County drainage districts apply for county-maintained channels",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade San Gabriel River, North Fork San Gabriel, or Lake Georgetown",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Georgetown is in Williamson County, one of the fastest-growing counties in Texas. The San Gabriel River and Lake Georgetown (USACE water supply reservoir) are significant water quality concerns. Northern portions of Georgetown may be on or near the Edwards Plateau, creating karst drainage concerns that require Barton Springs/Edwards Aquifer Conservation District (BSEACD) or EAA coordination.",
  },
  inspections: {
    localRequirements: "City of Georgetown Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lake Georgetown USACE Project",
      trigger: "Development within the USACE Lake Georgetown project boundary or draining to the North Fork San Gabriel River above the lake",
      restriction: "USACE Section 404/10 permits required for work in or adjacent to the lake; USACE Fort Worth District manages the lake; shoreline management plan governs adjacent development; water quality protection for drinking water supply",
    },
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Development on land identified as Edwards Aquifer Contributing Zone (EACZ) within Georgetown's jurisdiction",
      restriction: "Barton Springs/Edwards Aquifer Conservation District (BSEACD) rules may apply; impervious cover limits and recharge protection BMPs required; coordinate with BSEACD for projects on or near recharge features",
    },
    {
      name: "San Gabriel River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the San Gabriel River and its tributaries",
      restriction: "Floodplain development permit required from City of Georgetown Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Georgetown Drainage Criteria",
    url: "https://www.georgetown.org/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.georgetown.org/development-services",
    permitUrl: "https://www.georgetown.org/development-services",
    designManualUrl: "https://www.georgetown.org/development-services",
  },
  lastVerified: "2026-03",
  notes: "Georgetown is the seat of Williamson County and one of the fastest-growing cities in the United States, driven by Austin metro overflow growth. The city's location at the interface of the Edwards Plateau and coastal plain creates a geologically complex drainage environment. Lake Georgetown provides flood control and recreation but also creates significant USACE jurisdiction along the San Gabriel River. Portions of Georgetown's ETJ overlap with the Edwards Aquifer recharge and contributing zones, creating additional regulatory requirements. The city's rapid growth means drainage infrastructure is frequently being planned, designed, and constructed.",
};
