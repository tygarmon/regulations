import { LocalRegulation } from "../../localTypes";

export const garland: LocalRegulation = {
  localCode: "garland",
  localName: "City of Garland",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Garland Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Garland Development Services at 800 Main St., Garland, TX 75040 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Garland Engineering Standards",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Garland Drainage Design Criteria; Lake Ray Hubbard watershed considerations apply for projects draining eastward",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Lake Ray Hubbard or Duck Creek",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Garland drains largely to Lake Ray Hubbard, a primary drinking water supply for Dallas. Enhanced sediment and nutrient controls are advisable for projects in the contributing watershed. Industrial and manufacturing activity is significant in Garland — SWPPP must address potential contaminant sources.",
  },
  inspections: {
    localRequirements: "City of Garland Development Services inspects grading permits at rough grading and final stabilization. Lake Ray Hubbard watershed sensitivity requires active BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lake Ray Hubbard Watershed Protection Area",
      trigger: "Development draining to Lake Ray Hubbard, a primary water supply reservoir for the Dallas area",
      restriction: "Enhanced water quality BMPs required to protect drinking water supply; coordinate with Dallas Water Utilities and North Texas Municipal Water District (NTMWD) for projects with significant watershed impact",
    },
    {
      name: "Duck Creek Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along Duck Creek and its tributaries",
      restriction: "Floodplain development permit required from City of Garland Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Garland Engineering Standards",
    url: "https://www.garlandtx.gov/1030/Development-Services",
  },
  officialLinks: {
    agencyUrl: "https://www.garlandtx.gov/1030/Development-Services",
    permitUrl: "https://www.garlandtx.gov/1030/Development-Services",
    designManualUrl: "https://www.garlandtx.gov/1030/Development-Services",
  },
  lastVerified: "2026-03",
  notes: "Garland is a large, largely built-out suburb east of Dallas with a significant industrial and manufacturing base. The city drains primarily to Lake Ray Hubbard, one of the Dallas area's main drinking water reservoirs, making water quality protection a priority. Phase I MS4 status reflects Garland's size and urban density. Redevelopment of older industrial sites requires careful assessment of legacy contamination. The city has an active code enforcement program for stormwater violations.",
};
