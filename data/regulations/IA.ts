import { StateRegulation } from "../types";

export const IA: StateRegulation = {
  stateCode: "IA",
  stateName: "Iowa",
  agency: "Iowa Department of Natural Resources",
  agencyAbbr: "IDNR",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit No. 2 — Stormwater Discharge Associated with Industrial Activity from Construction Activities (Permit IAR100000)",
    threshold: "≥ 1 acre of land disturbance; < 1 acre if part of a larger common plan of development or sale",
    noticePeriod: "NOI must be submitted to IDNR at least 2 business days before commencement of land-disturbing activities; authorization is automatic upon submittal if the NOI is complete",
    applicationMethod: "Online via Iowa DNR's EQ (Electronic Reporting and Permitting) portal at https://programs.iowadnr.gov/npdespermits/; paper NOI also accepted",
    fee: "No permit application fee for NPDES General Permit No. 2 (construction stormwater); fees may apply for individual NPDES permits",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "SWPPP must be developed before land disturbance begins and kept on site. IDNR provides a SWPPP template and guidance document. The SWPPP must be prepared by a person knowledgeable in the principles and practice of erosion and sediment controls. PE certification is not required. The plan must include site map, description of BMPs, inspection schedules, and maintenance procedures.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours after any storm event producing ≥ 0.5 inches of rainfall in a 24-hour period; inspection frequency may be reduced to every 14 days during periods of frozen ground and no construction activity",
    qualificationRequired: "Inspector must be a qualified person who is knowledgeable in the principles and practice of erosion and sediment controls and familiar with the SWPPP; Iowa does not require a specific state-issued inspector certification for construction stormwater",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "No state-specific cert required; CPESC, CISEC accepted; inspector must be 'knowledgeable in the principles and practice of erosion and sediment control'",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements apply to regulated MS4 communities under IDNR's MS4 general permit program. Construction projects discharging to regulated MS4s must meet local post-construction standards. Iowa's Stormwater Management Program requires permanent BMPs to be designed, installed, and maintained. Specific design standards (volume reduction, water quality volume) are established by local MS4 ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in General Permit No. 2; narrative standard applies",
    notes: "Iowa General Permit No. 2 does not establish a numeric turbidity standard. Discharges must comply with Iowa's narrative water quality standards and must not cause or contribute to a violation of state water quality standards (567 IAC Chapter 61). Visual monitoring is required at all discharge points and disturbed areas. Operators must take corrective action if discharges cause visible turbidity or other water quality impacts in the receiving waterbody.",
  },
  officialLinks: {
    agencyUrl: "https://www.iowadnr.gov/",
    permitApplicationUrl: "https://www.iowadnr.gov/Environmental-Protection/Water-Quality/NPDES-Permits/Storm-Water",
    regulationDocUrl: "https://programs.iowadnr.gov/npdespermits/",
  },
  lastVerified: "2025-01",
  notes: "Iowa's construction stormwater program operates under NPDES General Permit No. 2, which IDNR reissues periodically (most recently reissued 2021 with updates). Authorization is automatic 2 business days after a complete NOI is filed — there is no waiting period for permit approval from IDNR, which is a notable feature compared to many other states. A Notice of Discontinuation (NOD) must be filed within 30 days of final stabilization. Iowa City and other MS4 communities may impose additional local stormwater requirements beyond the state general permit.",
};
