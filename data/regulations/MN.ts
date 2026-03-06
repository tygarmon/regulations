import { StateRegulation } from "../types";

export const MN: StateRegulation = {
  stateCode: "MN",
  stateName: "Minnesota",
  agency: "Minnesota Pollution Control Agency",
  agencyAbbr: "MPCA",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES/SDS General Permit for Stormwater Associated with Construction Activity (Permit No. MNR100001)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); Minnesota's permit also applies to all construction activity that discharges to a Special Water or impaired water regardless of acreage",
    noticePeriod: "NOI must be submitted online at least 7 days before land disturbance begins; for sites discharging to Special Waters (MN Rule 7050), the NOI must be submitted at least 30 days before disturbance; permit coverage is automatic after the 7-day (or 30-day) waiting period if the NOI is complete",
    applicationMethod: "Online only via MPCA's ePERMITTING system (mpca.state.mn.us/epermitting); paper NOIs are not accepted for the Construction Stormwater General Permit; the online system requires the operator to submit the SWPPP electronically as an attachment",
    fee: "$400 for projects disturbing 1–5 acres; $1,000 for > 5 acres; fee is paid online at the time of NOI submission; annual permit fee of $400 applies for each subsequent permit year; additional $400 fee per year for sites discharging to impaired waters requiring additional BMPs",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Minnesota requires a SWPPP to be developed before submitting the NOI and uploaded as part of the online NOI submission — making MN one of the few states that requires SWPPP submission with the NOI rather than just on-site retention. MPCA provides a detailed SWPPP template (online fillable form) and an extensive Construction Stormwater SWPPP Manual. A PE stamp is not required by the general permit. However, sites disturbing ≥ 50 acres that discharge to a Special Water or impaired water must have the SWPPP reviewed by a Registered Soil Erosion and Sediment Control Inspector (CISEC) or equivalent. The SWPPP must address Permanent Stormwater Management System (PSMS) requirements for post-construction runoff.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours after any rain event that produces ≥ 0.5 inches of rainfall in 24 hours; for sites during frozen conditions (November 1–March 31) when land disturbance is suspended and site is in compliance, inspections may be reduced to once per month; inspection records must be retained for 3 years after permit termination",
    qualificationRequired: "Minnesota requires that at least one person associated with the project has completed MPCA's Construction Stormwater Trained Inspector designation — operators must document that their designated inspector has completed either: (1) MPCA's online Construction Stormwater Inspector training, or (2) a Minnesota-approved equivalent course such as CISEC or CPESC; this trained inspector requirement is codified in the permit language and is one of the more formal state-specific inspector credential requirements in the region",
    rainTrigger: "Within 24 hours of any rain event producing ≥ 0.5 inches of rainfall in 24 hours (≥ 0.25 inches at high-priority sites near impaired waters)",
    acceptedCertifications: "MPCA-approved Construction Stormwater Inspector training REQUIRED; CESSWI, CPESC, CISEC accepted as qualifying credentials; training must be documented in permit file",
  },
  postConstruction: {
    required: true,
    notes: "Minnesota's Construction Stormwater General Permit requires operators to design and implement a Permanent Stormwater Management System (PSMS) before the permit can be terminated. The PSMS must provide volume reduction (infiltration) and water quality treatment that meets the permit's performance standards. For sites draining to impaired waters with a stormwater-related TMDL, the PSMS must meet the wasteload allocation. Local MS4 permits may impose additional post-construction requirements via municipal stormwater management ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric in-stream NTU limit for most sites; however, sites discharging to Special Waters (e.g., trout streams, Outstanding Resource Value Waters) must meet a discharge turbidity benchmark of 25 NTU during active land disturbance; for sites with dewatering or basin discharge, a settling basin effluent turbidity of 150 NTU is required before discharge",
    notes: "Minnesota's permit distinguishes between sites discharging to Special Waters and standard receiving waters. Special Waters include calcareous fens, trout streams, Class 2B Outstanding Resource Value Waters, and other designated sensitive waters — these sites must submit a 30-day advance NOI and meet stricter discharge standards. Minnesota is also notable for requiring that operators submit an application for permit termination (NOT) with documentation that permanent stabilization and PSMS installation are complete before coverage ends.",
  },
  officialLinks: {
    agencyUrl: "https://www.pca.state.mn.us/",
    permitApplicationUrl: "https://www.pca.state.mn.us/business-with-us/stormwater-construction-permit",
    regulationDocUrl: "https://www.pca.state.mn.us/sites/default/files/wq-strm2-51.pdf",
  },
  lastVerified: "2025-01",
  notes: "Minnesota's Construction Stormwater General Permit (MNR100001) is one of the most detailed and prescriptive in the country. Key quirks: (1) SWPPP must be uploaded electronically with the NOI — not just kept on-site; (2) a formal MPCA-recognized trained inspector credential is required; (3) the 30-day advance NOI requirement for Special Waters is among the longest notice periods of any state; (4) the permit requires design and installation of a Permanent Stormwater Management System (PSMS) as a condition of permit termination, essentially embedding post-construction requirements into the construction permit; (5) winter construction provisions allow reduced inspection frequency November–March when disturbance is suspended; (6) Minnesota operates both NPDES (federal) and SDS (State Disposal System) under the same permit number, covering both surface and groundwater pathways.",
};
