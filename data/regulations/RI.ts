import { StateRegulation } from "../types";

export const RI: StateRegulation = {
  stateCode: "RI",
  stateName: "Rhode Island",
  agency: "Rhode Island Department of Environmental Management",
  agencyAbbr: "RIDEM",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "RIPDES General Permit for Stormwater Discharges from Construction Activity (RIR100000)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to RIDEM and permit coverage confirmed before construction activities begin; RIDEM typically processes NOIs within 5–10 business days; permit becomes effective upon authorization acknowledgment",
    applicationMethod: "Online via RIDEM's online permitting portal (RI RIPDES Online Reporting System); paper NOI submission is also accepted by mail to RIDEM's Office of Water Resources",
    fee: "$500 for sites disturbing < 5 acres; $1,000 for sites disturbing ≥ 5 acres; fee is a one-time payment at NOI submission",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be prepared and implemented before submitting the NOI. RIDEM provides a SWPPP template and Rhode Island Stormwater Design and Installation Standards Manual. The SWPPP must be signed and certified by the operator. No PE stamp is mandated by RIR100000 for the SWPPP itself, but Rhode Island separately requires an Erosion and Sediment Control Plan prepared by a licensed PE or Registered Landscape Architect for most significant construction projects under state building and development regulations. The SWPPP must be kept on site and made available to RIDEM and local authorities.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a storm event that results in a discharge from the site. During extended dry periods when there is no discharge potential, inspection frequency may be reduced at the operator's discretion with adequate justification documented in the SWPPP.",
    qualificationRequired: "No mandatory state-specific inspector certification under RIR100000; inspections must be performed by a 'qualified person' with appropriate training and knowledge of the SWPPP and BMP implementation. Rhode Island does not administer a state stormwater inspector certification program; CPESC (Certified Professional in Erosion and Sediment Control) or equivalent credentials are commonly used by practitioners. Inspection reports must document the inspector's name and qualifications.",
    rainTrigger: "Within 24 hours of any storm event that results in a discharge from the site (discharge-based trigger)",
    acceptedCertifications: "No state-specific mandatory cert; inspector must be a 'qualified person' with appropriate training; CPESC, CESSWI accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under Rhode Island's Phase II MS4 RIPDES permits for regulated MS4 communities. The RIR100000 general permit requires that permanent post-construction BMPs be installed and certified as functioning before the Notice of Termination (NOT) is filed. Rhode Island's 2010 Stormwater Design and Installation Standards Manual (updated 2022) governs post-construction control design. The state requires long-term operation and maintenance agreements for post-construction BMPs, typically recorded as a deed restriction or easement.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in RIR100000; discharges must not cause or contribute to violations of Rhode Island water quality standards (RI Code R46-12-OWQ)",
    notes: "Rhode Island water quality standards prohibit stormwater discharges that cause turbidity increases sufficient to impair the designated uses of receiving waters. Visual monitoring is required at each inspection event. Rhode Island's relatively small land area includes many sensitive coastal and freshwater resources, including Narragansett Bay watershed — projects in coastal areas or near salt marshes may face heightened scrutiny and additional conditions. RIDEM's Office of Water Resources coordinates with Coastal Resources Management Council (CRMC) for projects in the coastal zone, which may require separate CRMC assent.",
  },
  officialLinks: {
    agencyUrl: "https://dem.ri.gov/",
    permitApplicationUrl: "https://dem.ri.gov/programs/water-resources/water-quality-permits/ripdes-program/ripdes-stormwater-construction",
    regulationDocUrl: "https://dem.ri.gov/sites/g/files/xkgbur861/files/2025-09/cgp-092625.pdf",
  },
  permitExpires: "2026-09-26",
  lastVerified: "2025-01",
  notes: "Rhode Island administers its own NPDES-equivalent program called RIPDES (Rhode Island Pollutant Discharge Elimination System) under state authority. As the smallest U.S. state by area, Rhode Island has a high proportion of land area within sensitive watersheds, particularly the Narragansett Bay watershed, making stormwater management a high-priority environmental issue. Projects requiring both a RIPDES construction permit and a CRMC assent must coordinate the two permit processes, which can add time to project timelines. Rhode Island's 2022 update to the Stormwater Design and Installation Standards Manual incorporated updated Low Impact Development (LID) requirements. The state's small size and dense development patterns mean many projects are in regulated MS4 areas with additional local stormwater ordinance requirements.",
};
