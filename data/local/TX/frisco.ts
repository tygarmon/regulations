import { LocalRegulation } from "../../localTypes";

export const frisco: LocalRegulation = {
  localCode: "frisco",
  localName: "City of Frisco",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Frisco Development Services",
    leadTime: "Plan review typically 2–4 weeks; express review available for fee",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via Frisco Development Services at 6891 Main St., Frisco, TX 75034 or online portal at friscotexas.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Frisco Design Standards; development phasing plans required for large projects",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Frisco Drainage Design Criteria; rapid growth requires updated hydrology for downstream impact analysis",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Bois d'Arc Creek, Panther Creek, or downstream reservoirs",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Frisco is one of the fastest-growing cities in the United States — construction activity is near-constant across the city. Large master-planned community developments are common and require phased drainage analyses. Collin County drainage regulations also apply outside city limits.",
  },
  inspections: {
    localRequirements: "City of Frisco Development Services inspects grading permits at rough grading, infrastructure installation, and final stabilization. Active construction throughout the city requires diligent BMP maintenance to protect downstream properties.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Bois d'Arc Creek Watershed",
      trigger: "Development in the Bois d'Arc Creek drainage basin, which feeds Lake Lavon (a North Texas water supply reservoir)",
      restriction: "Enhanced water quality BMPs required to protect drinking water supply; coordinate with Upper Trinity Regional Water District for projects with significant watershed impact",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Frisco Floodplain Administrator; no net fill without compensatory storage; many creek corridors in Frisco have been restudied due to development-driven hydrology changes",
    },
    {
      name: "Collin County MUD / PID Districts",
      trigger: "Development within Municipal Utility Districts (MUDs) or Public Improvement Districts (PIDs) in the Frisco area",
      restriction: "Coordinate with MUD/PID engineer for district drainage standards; some districts have additional detention or water quality requirements beyond city minimums",
    },
  ],
  designManual: {
    required: true,
    name: "City of Frisco Design Standards and Construction Details",
    url: "https://www.friscotexas.gov/298/Development-Services",
  },
  officialLinks: {
    agencyUrl: "https://www.friscotexas.gov/298/Development-Services",
    permitUrl: "https://www.friscotexas.gov/298/Development-Services",
    designManualUrl: "https://www.friscotexas.gov/298/Development-Services",
  },
  lastVerified: "2026-03",
  notes: "Frisco has been one of the fastest-growing cities in the US for over a decade, with construction activity spanning residential subdivisions, master-planned communities, corporate campuses (Toyota North America HQ, PGA of America HQ), and retail/mixed-use centers. The city is located at the boundary of Collin and Denton counties, and many developments span county lines or adjacent city jurisdictions. The rapid buildout means downstream drainage systems are frequently recalculated — contractors should verify current hydrology studies with city staff. North Texas clay soils (blackland prairie) create significant shrink-swell challenges and concentrated runoff during rain events.",
};
