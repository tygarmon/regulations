import { StateRegulation } from "../types";

export const CO: StateRegulation = {
  stateCode: "CO",
  stateName: "Colorado",
  agency: "Colorado Department of Public Health and Environment, Water Quality Control Division",
  agencyAbbr: "CDPHE WQCD",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Construction Dewatering and Stormwater General Permit (COR400000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development exceeding 1 acre)",
    noticePeriod: "Stormwater Management Plan (SWMP) must be developed before construction; permit coverage active upon filing NOI",
    applicationMethod: "Online via CDPHE's Stormwater Compliance Assistance Program (SCAP) portal",
    fee: "$340 annual fee; $170 for < 1 year of coverage",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Colorado refers to the SWPPP as a Stormwater Management Plan (SWMP). The SWMP must be prepared by a Stormwater Management Plan Designer — no professional engineer stamp is required by the state, but some local jurisdictions require it.",
  },
  inspections: {
    frequency: "Every 14 days and within 24 hours of precipitation events producing ≥ 0.5 inches (or ≥ 0.1 inches in the semiarid zone)",
    qualificationRequired: "Stormwater Management Plan Inspector (SMPI) — must complete CDPHE-approved training course. Certification must be renewed every 3 years.",
    rainTrigger: "Within 24 hours of a precipitation event producing ≥ 0.5 inches (≥ 0.1 inches in designated semiarid zones)",
    acceptedCertifications: "No state-specific cert required; CDPHE requires a trained 'SWMP Administrator'; CPESC, CESSWI accepted; CDPHE-approved training recommended",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction requirements are primarily handled at the local level through MS4 programs. Many Colorado municipalities (Denver, Boulder, Fort Collins) have adopted specific Low Impact Development (LID) standards.",
  },
  dischargeStandards: {
    turbidityLimit: "Not specified as a numeric limit in the General Permit; discharges must comply with narrative water quality standards",
    notes: "High-altitude and semiarid conditions in Colorado create unique stormwater challenges. Projects near Outstanding Waters of Colorado (OWC) or impaired streams have additional restrictions.",
  },
  officialLinks: {
    agencyUrl: "https://cdphe.colorado.gov/wq",
    permitApplicationUrl: "https://cdphe.colorado.gov/stormwater-construction-discharges",
    regulationDocUrl: "https://cdphe.colorado.gov/sites/cdphe/files/AP-COR400000.pdf",
  },
  lastVerified: "2025-01",
  notes: "Colorado requires a state-certified SMPI for inspections, making it one of the few states with a mandatory inspector certification program. Altitude and arid conditions affect BMP effectiveness — conventional sediment controls perform differently than in humid climates.",
};
