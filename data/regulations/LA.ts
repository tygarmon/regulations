import { StateRegulation } from "../types";

export const LA: StateRegulation = {
  stateCode: "LA",
  stateName: "Louisiana",
  agency: "Louisiana Department of Environmental Quality",
  agencyAbbr: "LDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "LPDES Construction Stormwater General Permit (Permit LAR100000)",
    threshold: "≥ 1 acre of land disturbance; < 1 acre if part of a larger common plan of development or sale that will disturb ≥ 1 acre in total",
    noticePeriod: "Notice of Intent (NOI) must be submitted to LDEQ at least 2 days before commencement of construction activities; permit coverage is effective 2 days after a complete NOI is received; some sensitive areas may require a longer review period",
    applicationMethod: "Online via LDEQ's Electronic Document Management System (EDMS) portal at https://edms.deq.louisiana.gov/; paper NOI also accepted and submitted to LDEQ's Water Permits Division in Baton Rouge",
    fee: "$100 per NOI submission (flat administrative processing fee); no acreage-scaled fee for the construction general permit",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Louisiana refers to the plan as a 'Stormwater Pollution Prevention Plan (SWPPP)' and requires it to be prepared and implemented before land disturbance begins. LDEQ provides SWPPP guidance and a model template. A licensed PE is not required to prepare the SWPPP under the general permit, though sites near sensitive receiving waters or with complex drainage may benefit from engineering review. The SWPPP must be kept on site and available for LDEQ inspection at all times.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours after a storm event resulting in a discharge from the site; inspection frequency may be reduced to every 14 days for portions of the site that have achieved temporary or final stabilization",
    qualificationRequired: "Inspections must be conducted by a qualified inspector who is knowledgeable in the principles and practice of stormwater pollution prevention; LDEQ does not require a specific state-issued inspector certification for construction stormwater, though Certified Inspector of Sediment and Erosion Control (CISEC) or CESSWI credentials are recognized industry standards",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under the LPDES MS4 General Permit program for regulated MS4 communities. Construction sites discharging to regulated MS4s must comply with the receiving entity's adopted post-construction stormwater ordinance. The Louisiana Coastal Management Program may impose additional post-construction controls for projects in coastal or wetland zones. Permit LAR100000 requires permittees to ensure long-term maintenance of permanent structural BMPs.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in General Permit LAR100000; narrative water quality standards apply",
    notes: "Louisiana's construction general permit does not establish a numeric turbidity standard. Discharges must comply with the Louisiana Surface Water Quality Standards (LAC 33:IX) and must not cause or contribute to violations of narrative criteria, which include standards for turbidity, color, and suspended matter. Visual monitoring at all active discharge points is required. Louisiana's proximity to sensitive coastal and wetland environments means that sediment-laden discharges near wetland areas may be subject to additional LDNR Coastal Use Permit conditions and Clean Water Act Section 404 requirements.",
  },
  officialLinks: {
    agencyUrl: "https://deq.louisiana.gov/",
    permitApplicationUrl: "https://deq.louisiana.gov/page/stormwater",
    regulationDocUrl: "https://deq.louisiana.gov/assets/docs/Water/LAR100000_ConstructionGeneralPermit.pdf",
  },
  lastVerified: "2025-01",
  notes: "Louisiana operates the LPDES (Louisiana Pollutant Discharge Elimination System) program as the state analog to NPDES. The construction general permit is LAR100000. A Notice of Termination (NOT) must be filed when final stabilization is achieved. Louisiana is notably a high-rainfall state with frequent intense storm events, making BMP maintenance and post-storm inspection compliance especially important. Projects in Coastal Zone Management areas require a Louisiana Coastal Use Permit (CUP) from LDNR in addition to the LPDES construction permit. Projects disturbing wetlands may also require a USACE Section 404 permit. LDEQ's Water Permits Division administers the program from Baton Rouge.",
};
