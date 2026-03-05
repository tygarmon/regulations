import { LocalRegulation } from "../../localTypes";

export const comalCounty: LocalRegulation = {
  localCode: "comal-county",
  localName: "Comal County (Unincorporated)",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Floodplain Development Permit / Drainage Review",
    submittalBody: "Comal County Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via Comal County Development Services at 150 N. Seguin Ave., New Braunfels, TX 78130 or contact county engineering",
  },
  waterQuality: {
    imperviousCoverLimit: "Significant portions of unincorporated Comal County are within the Edwards Aquifer Recharge Zone or Contributing Zone — EAA permit required; impervious cover limits and water quality controls apply on regulated land; western portions of the county are over the recharge zone",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels per Comal County Drainage Criteria; applies in unincorporated areas; design must account for Hill Country flash flood risk from Guadalupe and Blanco river watersheds",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Guadalupe River, Comal River, Blanco River, or Edwards Aquifer recharge features",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for county permits",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for development permits in unincorporated Comal County. Edwards Aquifer recharge zone coverage is extensive in western Comal County. The county is experiencing rapid population growth as one of the fastest-growing in the nation. Hill Country terrain creates significant flash flood risk from rapid runoff on limestone slopes. Coordination with Edwards Aquifer Authority is required for recharge zone development.",
  },
  inspections: {
    localRequirements: "Comal County Development Services inspects development in unincorporated areas.",
    qualificationRequired: "No county-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone (Western Comal County)",
      trigger: "Development on land over the Edwards Aquifer Recharge Zone — primarily the hills and ranches west and north of New Braunfels",
      restriction: "EAA permit required; impervious cover limited to 15%; water quality controls and karst protection required; karst geology (caves, sinkholes, solution conduits) is prevalent",
    },
    {
      name: "Guadalupe River Canyon Floodplain",
      trigger: "Development within or adjacent to the Guadalupe River and its Hill Country tributary canyons",
      restriction: "Floodplain development permit required; Hill Country canyons can experience extreme flash flooding (wall of water events); standard FEMA methodology may underestimate peak flows in canyon tributaries; conservative design is required",
    },
    {
      name: "Blanco River Floodplain",
      trigger: "Development within or adjacent to the Blanco River as it flows through southern Comal County toward Wimberley",
      restriction: "Floodplain development permit required; the Blanco is among Texas's most flash-flood-prone rivers; conservative freeboard above BFE is strongly recommended",
    },
  ],
  designManual: {
    required: true,
    name: "Comal County Drainage Criteria",
    url: "https://www.co.comal.tx.us/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.co.comal.tx.us/development-services",
    permitUrl: "https://www.co.comal.tx.us/development-services",
    designManualUrl: "https://www.co.comal.tx.us/development-services",
  },
  lastVerified: "2026-03",
  notes: "Comal County is one of the fastest-growing counties in the United States, driven by the explosive growth of New Braunfels and residential development spreading from both San Antonio and Austin. The county's Hill Country terrain, Edwards Aquifer recharge zone, and flash flood-prone rivers create a challenging stormwater regulatory environment. This entry covers unincorporated Comal County — New Braunfels has its own permit requirements. Canyon Lake (USACE reservoir on the Guadalupe River) is in the western part of the county and provides flood control and recreation, but the Guadalupe below Canyon Lake has experienced major flooding when reservoir flood releases are required.",
};
