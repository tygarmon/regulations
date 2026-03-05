import { LocalRegulation } from "../../localTypes";

export const tarrantCounty: LocalRegulation = {
  localCode: "tarrant-county",
  localName: "Tarrant County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Stormwater Management / Land Disturbance Permit",
    submittalBody: "Tarrant County Transportation and Public Works Department",
    leadTime: "10–15 business days typical; varies by project complexity",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit application and drainage study to Tarrant County Transportation and Public Works; online portal or in-person at 100 E. Weatherford St., Fort Worth, TX 76196",
  },
  waterQuality: {
    imperviousCoverLimit: "No county-wide impervious cover cap for unincorporated areas; individual site controls required",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development rates for the 2-, 10-, and 100-year storm events per the Tarrant County Stormwater Management Design Manual",
    turbidityStandard: "Comply with TCEQ TXR150000 general permit effluent limits; no separate county turbidity numeric standard for construction",
  },
  swppp: {
    localPlanRequired: false,
    localPlanName: "N/A — TCEQ TXR150000 SWPPP satisfies county requirements",
    peStampRequired: false,
    notes: "A TCEQ Construction General Permit (TXR150000) SWPPP is required for all sites disturbing ≥1 acre. Tarrant County does not impose an additional local ESC plan beyond TCEQ requirements, but the county may inspect sites for compliance. Drainage studies submitted with the land disturbance permit must be prepared by a licensed Texas PE.",
  },
  inspections: {
    localRequirements: "Tarrant County Transportation and Public Works may conduct site inspections during construction to verify compliance with the approved drainage plan and stormwater controls. Final inspection and approval required before permit closeout.",
    qualificationRequired: "No county-specific inspector certification required beyond TCEQ CGP qualified inspector standards",
  },
  specialZones: [
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Any development within a mapped 100-year floodplain",
      restriction: "Floodplain development permit required from Tarrant County; must comply with Tarrant County Floodplain Management Regulations; no net fill without compensatory storage",
    },
    {
      name: "Trinity River Corridor",
      trigger: "Development within the Trinity River basin that triggers USACE or TCEQ jurisdiction",
      restriction: "May require USACE Section 404/401 permits in addition to county drainage permit; coordinate with Tarrant Regional Water District",
    },
  ],
  designManual: {
    required: true,
    name: "Tarrant County Stormwater Management Design Manual",
    url: "https://www.tarrantcountytx.gov/en/transportation-public-works/stormwater.html",
  },
  officialLinks: {
    agencyUrl: "https://www.tarrantcountytx.gov/en/transportation-public-works/stormwater.html",
    permitUrl: "https://www.tarrantcountytx.gov/en/transportation-public-works/stormwater.html",
    designManualUrl: "https://www.tarrantcountytx.gov/en/transportation-public-works/stormwater.html",
  },
  lastVerified: "2026-03",
  notes: "Tarrant County MS4 Phase II permit holder under TCEQ TPW GP. Unincorporated Tarrant County regulations apply; incorporated cities within the county (Arlington, Fort Worth, etc.) have their own stormwater programs. Projects within city ETJs should verify jurisdiction. The Tarrant Regional Water District (TRWD) manages regional water supply and some flood control infrastructure but does not issue construction stormwater permits.",
};
