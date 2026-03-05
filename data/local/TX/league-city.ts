import { LocalRegulation } from "../../localTypes";

export const leagueCity: LocalRegulation = {
  localCode: "league-city",
  localName: "City of League City",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of League City Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of League City Development Services at 300 W. Walker St., League City, TX 77573 or online portal at leaguecity.com",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per League City Drainage Design Criteria; proximity to Galveston Bay and Clear Lake creates water quality sensitivity",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per League City standards; coastal proximity and flat terrain require conservative detention design",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Clear Lake, Galveston Bay, or Clear Creek water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. League City is adjacent to Clear Lake and Galveston Bay, both of which are sensitive estuarine habitats. Stormwater discharges that degrade water quality in Galveston Bay can affect commercial fishing and oyster harvesting, triggering enhanced regulatory scrutiny. Hurricane Harvey and Ike affected League City significantly.",
  },
  inspections: {
    localRequirements: "City of League City Public Works inspects grading permits at rough grading, drainage infrastructure installation, and final stabilization. Hurricane season BMP maintenance is critical for coastal storm preparedness.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Clear Lake / Galveston Bay Sensitive Area",
      trigger: "Development draining to Clear Lake, Clear Creek, or Galveston Bay (all sensitive estuarine waterbodies)",
      restriction: "Enhanced turbidity and nutrient controls required; Galveston Bay is a state priority for water quality protection; TCEQ may require enhanced BMP documentation for projects draining to these waters",
    },
    {
      name: "FEMA Coastal High Hazard (V-Zone) and AE Zone",
      trigger: "Development within FEMA-mapped coastal and 100-year floodplain areas",
      restriction: "Floodplain development permit required; V-zone development requires elevation above BFE plus freeboard; USACE Section 10 permits required for work in tidal waters",
    },
    {
      name: "Harris County Flood Control District — Clear Creek",
      trigger: "Projects adjacent to or outfalling to HCFCD-maintained Clear Creek channel",
      restriction: "Coordinate with HCFCD for outfall connections; HCFCD Clear Creek watershed improvement projects are underway — design must accommodate future channel modifications",
    },
  ],
  designManual: {
    required: true,
    name: "City of League City Drainage Design Criteria",
    url: "https://www.leaguecity.com/government/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.leaguecity.com/government/departments/public-works",
    permitUrl: "https://www.leaguecity.com/government/departments/public-works",
    designManualUrl: "https://www.leaguecity.com/government/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "League City is a fast-growing suburban city in Galveston County southeast of Houston, adjacent to Clear Lake and Galveston Bay. The city is home to many NASA/Johnson Space Center-related businesses and a significant boating community. Its coastal location and estuarine adjacency make stormwater quality particularly important. League City is in Galveston County, but portions drain through Harris County Flood Control District channels. Hurricane Ike (2008) and Harvey (2017) caused significant flooding and have influenced updated drainage standards.",
};
