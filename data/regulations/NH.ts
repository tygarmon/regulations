import { StateRegulation } from "../types";

export const NH: StateRegulation = {
  stateCode: "NH",
  stateName: "New Hampshire",
  agency: "New Hampshire Department of Environmental Services",
  agencyAbbr: "NHDES",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Alteration of Terrain (AOT) General Permit / NPDES Stormwater General Permit for Construction Activity (NHR10)",
    threshold: "≥ 1 acre of land disturbance; also applies to sites < 1 acre that are part of a larger common plan of development. Separately, NH RSA 485-A:17 (Alteration of Terrain) requires permit for disturbing ≥ 50,000 sq ft (≈1.15 acres) or within 250 ft of a surface water.",
    noticePeriod: "NOI must be submitted and NHDES authorization received before any land disturbance begins. NHDES targets a 30-day review window, but no fixed statutory lead time is specified for the general permit; authorization is typically granted within 10–30 days of a complete NOI.",
    applicationMethod: "Online via NHDES OneStop portal (nhdes.maps.arcgis.com/apps/webappviewer) or paper NOI submitted to NHDES Water Division, Concord, NH. The Alteration of Terrain permit application (Application for Permit to Operate) is filed through the same NHDES OneStop system.",
    fee: "AOT/construction stormwater: $200 base fee for sites 1–5 acres; $400 for sites > 5 acres. Fees are set under RSA 21-O:14. Additional annual fees may apply for multi-year projects.",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required for all permitted construction sites. NH does not require a licensed PE to prepare or certify the SWPPP, but the responsible party (operator) must sign a certification. NHDES provides a SWPPP template and guidance document ('Stormwater Management and Erosion and Sediment Control Handbook for Urban and Developing Areas in New Hampshire'). The SWPPP must be kept on-site and made available to NHDES upon request.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours of a precipitation event of ≥ 0.5 inches. Inspections must be documented on inspection report forms. Frequency may be reduced to every 14 days during periods of drought or frozen, stable ground cover.",
    qualificationRequired: "No state-specific certification is required by the general permit, but inspectors must be knowledgeable in the principles and practice of erosion and sediment controls. NHDES recommends familiarity with the NH Stormwater Management Handbook. Certified Professional in Erosion and Sediment Control (CPESC) or similar credentials are recognized but not mandated.",
    rainTrigger: "Within 24 hours of a precipitation event producing ≥ 0.5 inches of rainfall",
    acceptedCertifications: "No state-specific cert required; inspector must be a 'qualified person' knowledgeable in E&SC; CPESC, CESSWI, CISEC accepted; NHDES recommends NH Stormwater Management Handbook familiarity",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required for sites that disturb ≥ 1 acre in MS4-regulated municipalities. NH Phase II MS4 permittees must adopt and enforce post-construction stormwater management programs consistent with NHDES guidance. Low Impact Development (LID) practices are strongly encouraged. Requirements vary by municipality; some communities have adopted local stormwater ordinances that exceed state minimums.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit specified in the construction general permit; narrative standard applies.",
    notes: "Discharges must not cause or contribute to violations of NH Surface Water Quality Standards (Env-Wq 1700). The narrative standard requires that discharges not cause the receiving water to exceed 'aesthetically objectionable' turbidity or violate Class B water quality standards. Disturbed areas must be stabilized with temporary or permanent cover as soon as practicable. No specific NTU threshold is embedded in the construction GP itself.",
  },
  officialLinks: {
    agencyUrl: "https://des.nh.gov/",
    permitApplicationUrl: "https://www.nhdes.org/onestop",
    regulationDocUrl: "https://des.nh.gov/water/wetlands/nhpdes/permits/stormwater.htm",
  },
  lastVerified: "2025-01",
  notes: "New Hampshire uniquely administers construction stormwater through two overlapping programs: the federal NPDES-delegated general permit (NHR10) and the state Alteration of Terrain (AOT) permit under RSA 485-A:17. Both may be required for the same project. The AOT permit covers grading near surface waters and wetlands with its own set of standards. Projects near designated prime wetlands or Outstanding Resource Waters face additional review and potential individual permit requirements. NH has adopted the EPA MS4 Phase II program; regulated municipalities must enforce post-construction requirements. The NHDES Stormwater Management and Erosion and Sediment Control Handbook is the primary technical reference.",
};
