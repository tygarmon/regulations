import { LocalRegulation } from "../../localTypes";

export const grandPrairie: LocalRegulation = {
  localCode: "grand-prairie",
  localName: "City of Grand Prairie",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Grand Prairie Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Grand Prairie Planning & Development at 300 W. Main St., Grand Prairie, TX 75050 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows; Dalton, Johnson, and Mountain Creek watersheds drain to Joe Pool Lake",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Grand Prairie Drainage Design Criteria; city straddles Dallas and Tarrant counties, requiring attention to applicable county standards",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Joe Pool Lake, Mountain Creek Lake, or Trinity River tributaries",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Grand Prairie spans two counties (Dallas and Tarrant) and borders Dallas, Arlington, Irving, and other cities — large developments may require coordination with multiple jurisdictions. The city includes major entertainment and industrial districts (Lone Star Park, Epic Waters, industrial parks along I-30 corridor).",
  },
  inspections: {
    localRequirements: "City of Grand Prairie Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Joe Pool Lake Watershed",
      trigger: "Development draining to Joe Pool Lake and Mountain Creek Lake (USACE-managed reservoirs)",
      restriction: "Enhanced water quality BMPs required; USACE maintains shoreline at Joe Pool Lake; coordinate with USACE Fort Worth District for projects within the USACE project boundary",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along Mountain Creek, Johnson Creek, and Trinity River tributaries",
      restriction: "Floodplain development permit required; no net fill without compensatory storage; multi-county floodplain mapping may have different study dates on each side of county line",
    },
  ],
  designManual: {
    required: true,
    name: "City of Grand Prairie Design Standards",
    url: "https://www.gptx.org/government/departments/planning-development",
  },
  officialLinks: {
    agencyUrl: "https://www.gptx.org/government/departments/planning-development",
    permitUrl: "https://www.gptx.org/government/departments/planning-development",
    designManualUrl: "https://www.gptx.org/government/departments/planning-development",
  },
  lastVerified: "2026-03",
  notes: "Grand Prairie is a major mid-cities municipality spanning the Dallas-Tarrant county line, stretching from I-20 in the south to DFW Airport in the north. The city has a diverse mix of industrial, commercial, entertainment, and residential uses. Its position between Dallas and Fort Worth means many large projects interact with both cities' and both counties' infrastructure. Joe Pool Lake provides recreational opportunities and is managed by USACE, creating a shoreline management zone. Phase I MS4 status reflects the city's large urban footprint.",
};
