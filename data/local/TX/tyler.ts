import { LocalRegulation } from "../../localTypes";

export const tyler: LocalRegulation = {
  localCode: "tyler",
  localName: "City of Tyler",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Tyler Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Tyler Development Services at 212 N. Bonner Ave., Tyler, TX 75702 or online portal at cityoftyler.org",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Tyler Drainage Design Criteria; Lake Tyler and Lake Palestine are important water supply concerns",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Tyler Drainage Design Criteria; sandy East Texas soils have high infiltration capacity but can also be highly erodible",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Lake Tyler, Lake Palestine, or Mud Creek water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Tyler is the largest city and economic hub of East Texas, known as the Rose Capital of America. The city's sandy soils are highly erodible and require robust sediment controls during construction. Lake Tyler is a drinking water supply reservoir — projects in the contributing watershed should implement enhanced BMPs.",
  },
  inspections: {
    localRequirements: "City of Tyler Development Services inspects grading permits at rough grading and final stabilization. Sandy East Texas soils require especially attentive BMP maintenance.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lake Tyler Watershed Protection Area",
      trigger: "Development within the contributing watershed to Lake Tyler, a City of Tyler drinking water supply reservoir",
      restriction: "Enhanced water quality BMPs required to protect drinking water supply; coordinate with City of Tyler Water Utilities for projects with significant watershed impact",
    },
    {
      name: "Lake Palestine Watershed",
      trigger: "Development in the broader Lake Palestine watershed (Neches River tributary system)",
      restriction: "Lake Palestine is a TRWD (Tarrant Regional Water District) water supply reservoir; coordinate with TRWD and Sabine River Authority for significant watershed impacts",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along Mud Creek, Prairie Creek, and other Tyler-area waterways",
      restriction: "Floodplain development permit required from City of Tyler Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Tyler Drainage Design Criteria",
    url: "https://www.cityoftyler.org/government/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.cityoftyler.org/government/departments/development-services",
    permitUrl: "https://www.cityoftyler.org/government/departments/development-services",
    designManualUrl: "https://www.cityoftyler.org/government/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Tyler is the largest city in East Texas and the regional economic, medical, and cultural hub for the Piney Woods region. The city has a significant healthcare, manufacturing, and logistics base. East Texas's sandy, acidic soils — the Pineywoods ecology — are highly erodible compared to the clay soils of central Texas, requiring especially attentive sediment controls during construction. Lake Tyler provides drinking water for the city and is sensitive to nutrient and sediment loading. Tyler's growth has been relatively steady and it continues to attract medical, logistics, and manufacturing investment.",
};
