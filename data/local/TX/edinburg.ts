import { LocalRegulation } from "../../localTypes";

export const edinburg: LocalRegulation = {
  localCode: "edinburg",
  localName: "City of Edinburg",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Edinburg Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Edinburg Engineering at 415 W. University Dr., Edinburg, TX 78539 or online portal at cityofedinburg.com",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Edinburg Drainage Design Criteria; Hidalgo County drainage district requirements apply for county-maintained channels",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Edinburg Drainage Design Criteria; flat RGV topography requires pump stations in some areas",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Hidalgo County drainage system or Rio Grande tributaries",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Edinburg is the seat of Hidalgo County and home to the University of Texas Rio Grande Valley (UTRGV), which generates significant institutional construction. Hidalgo County Drainage Districts manage the canal infrastructure. The city is the government and medical center for the McAllen-Edinburg-Mission metro area.",
  },
  inspections: {
    localRequirements: "City of Edinburg Public Works inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Hidalgo County Drainage Districts",
      trigger: "Development connecting to Hidalgo County Drainage District maintained canals and channels",
      restriction: "Outfall connection approval required from applicable Hidalgo County Drainage District; district criteria apply; irrigation and drainage canals often share infrastructure in the RGV",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Edinburg Floodplain Administrator; no net fill without compensatory storage",
    },
    {
      name: "UTRGV Campus Zone",
      trigger: "Construction on or immediately adjacent to University of Texas Rio Grande Valley (Edinburg campus) property",
      restriction: "Coordinate with UTRGV Facilities Management for drainage plan review; university institutional stormwater program applies on campus",
    },
  ],
  designManual: {
    required: true,
    name: "City of Edinburg Drainage Design Criteria",
    url: "https://www.cityofedinburg.com/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofedinburg.com/departments/public-works",
    permitUrl: "https://www.cityofedinburg.com/departments/public-works",
    designManualUrl: "https://www.cityofedinburg.com/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Edinburg is the seat of Hidalgo County and the largest city in the McAllen metropolitan area by county seat status, though McAllen is larger by population. The city is home to UTRGV, a growing research university. The Rio Grande Valley is one of Texas's fastest-growing regions, with significant commercial and residential development. The flat alluvial plain topography and interconnected irrigation/drainage canal system of the RGV create a unique stormwater management environment. Hidalgo County has multiple drainage districts with independent jurisdiction over canal systems.",
};
