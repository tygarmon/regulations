import { LocalRegulation } from "../../localTypes";

export const killeen: LocalRegulation = {
  localCode: "killeen",
  localName: "City of Killeen",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Killeen Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Killeen Development Services at 101 N. College St., Killeen, TX 76541 or online portal at killeentexas.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Killeen Drainage Design Criteria",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Killeen Drainage Design Criteria; Stillhouse Hollow Reservoir watershed considerations apply; Lampasas River drains through the metro area",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Stillhouse Hollow Reservoir, Lampasas River, or Leon River water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Killeen is adjacent to Fort Cavazos (formerly Fort Hood), one of the largest US Army installations in the world, which drives significant regional construction activity. The military population creates strong housing and commercial development demand. Bell County coordinates regional drainage with Killeen, Temple, and Harker Heights.",
  },
  inspections: {
    localRequirements: "City of Killeen Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Fort Cavazos (Fort Hood) Buffer and Drainage",
      trigger: "Development adjacent to Fort Cavazos installation boundaries",
      restriction: "Coordinate with Fort Cavazos DPW for drainage plans near the installation; military installation stormwater is independently managed; off-post development must not adversely affect on-post drainage infrastructure",
    },
    {
      name: "Stillhouse Hollow Reservoir Watershed",
      trigger: "Development draining to the Lampasas River and Stillhouse Hollow Reservoir watershed (USACE water supply and flood control project)",
      restriction: "Enhanced water quality BMPs advisable; coordinate with USACE Fort Worth District for projects near the lake boundary or with significant watershed impact",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Lampasas River and its tributaries",
      restriction: "Floodplain development permit required from City of Killeen Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Killeen Drainage Design Criteria",
    url: "https://www.killeentexas.gov/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.killeentexas.gov/development-services",
    permitUrl: "https://www.killeentexas.gov/development-services",
    designManualUrl: "https://www.killeentexas.gov/development-services",
  },
  lastVerified: "2026-03",
  notes: "Killeen is the population center of the Killeen-Temple metro, home to Fort Cavazos (the US Army's largest installation, formerly Fort Hood), which is the primary economic driver of the region. The city has experienced significant growth driven by military and defense contractor employment. Texas A&M Central Texas is located in Killeen. The city is at the transition between the Blackland Prairie and the Hill Country, creating varied terrain. Stillhouse Hollow Reservoir provides flood control and water supply. The Killeen-Temple-Fort Hood metro is a significant construction market.",
};
