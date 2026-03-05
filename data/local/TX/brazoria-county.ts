import { LocalRegulation } from "../../localTypes";

export const brazoriaCounty: LocalRegulation = {
  localCode: "brazoria-county",
  localName: "Brazoria County (Unincorporated)",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage Permit / Floodplain Development Permit",
    submittalBody: "Brazoria County Engineering Department",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via Brazoria County Engineering at 111 E. Locust St., Angleton, TX 77515 or online portal; Brazoria County Drainage District permits required separately",
  },
  waterQuality: {
    imperviousCoverLimit: "No countywide impervious cover cap; drainage systems must accommodate design storm flows per Brazoria County Drainage Criteria; multiple drainage districts operate within the county",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per Brazoria County and applicable Drainage District criteria; post-Harvey design standards updated; flat coastal plain terrain requires conservative detention sizing",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Brazos River, San Bernard River, Chocolate Bayou, or Galveston Bay tributaries",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for county permits",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for development permits. Brazoria County has over 20 drainage districts, each with independent permit authority over their maintained channels. A project may need permits from both Brazoria County Engineering and the applicable drainage district. Post-Harvey drainage improvements are ongoing throughout the county. The Brazos River diversion project (completed near Freeport) has altered some regional drainage patterns.",
  },
  inspections: {
    localRequirements: "Brazoria County Engineering inspects county-permitted development; drainage districts inspect work adjacent to or connecting to their channels. Hurricane season requires active BMP maintenance.",
    qualificationRequired: "No county-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Brazos River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Brazos River (Texas's longest river), which drains to the Gulf through Brazoria County",
      restriction: "Floodplain development permit required; USACE Section 404/10 permits required for work in or adjacent to the Brazos; major flooding events have reshaped floodplain mapping",
    },
    {
      name: "Brazoria County Drainage Districts",
      trigger: "Development in areas served by Brazoria County Drainage Districts (BCDD1–BCDD3 and others)",
      restriction: "Each drainage district has independent permit authority; outfall connections to district channels require district approval; district design criteria may exceed county minimums",
    },
    {
      name: "Galveston Bay TMDL Watershed",
      trigger: "Development draining to tributaries of Galveston Bay, which has established TMDLs for bacteria and nutrients",
      restriction: "Enhanced water quality controls required; Galveston Bay Foundation and TCEQ monitor bay water quality; sediment, nutrients, and bacteria controls are priority pollutants",
    },
    {
      name: "Coastal Zone / Gulf Coast Proximity",
      trigger: "Development in Brazoria County's coastal areas near the Gulf of Mexico or Freeport area",
      restriction: "Texas General Land Office (GLO) Coastal Management Program may apply; dune protection areas require GLO permit; USACE wetland permits likely required in coastal lowlands",
    },
  ],
  designManual: {
    required: true,
    name: "Brazoria County Drainage Criteria",
    url: "https://www.brazoriacounty.org/departments/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.brazoriacounty.org/departments/engineering",
    permitUrl: "https://www.brazoriacounty.org/departments/engineering",
    designManualUrl: "https://www.brazoriacounty.org/departments/engineering",
  },
  lastVerified: "2026-03",
  notes: "Brazoria County occupies the coastal plain southwest of Houston, encompassing Pearland (northern), Angleton (county seat), and the Gulf Coast at Freeport/Surfside. The county is intensely agricultural and industrial, with significant petrochemical facilities at Freeport. Hurricane Harvey caused catastrophic flooding throughout the county. The Brazoria County Drainage District system is extensive, with multiple independent districts each having their own permit authority. The county is experiencing strong growth pressure from Houston's southward expansion. The Brazos River mouth at Freeport is a key hydrologic feature.",
};
