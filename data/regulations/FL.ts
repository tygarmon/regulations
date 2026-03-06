import { StateRegulation } from "../types";

export const FL: StateRegulation = {
  stateCode: "FL",
  stateName: "Florida",
  agency: "Florida Department of Environmental Protection",
  agencyAbbr: "FDEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Generic Permit for Stormwater Discharge from Large and Small Construction Activities",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan)",
    noticePeriod: "NOI must be submitted at least 2 business days before construction begins",
    applicationMethod: "Online via FDEP's ePermitting system (www.fldepportal.com)",
    fee: "$400 for projects < 5 acres; $600 for ≥ 5 acres; additional fees may apply for ERP",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Florida also requires a separate Environmental Resource Permit (ERP) through the Water Management District for many construction projects, which has its own stormwater requirements that may overlap or exceed the Generic Permit.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    qualificationRequired: "Stormwater Pollution Prevention Inspector — no specific state certification required, but must be trained and knowledgeable in stormwater BMPs",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "No state-specific mandatory cert; CPESC, CESSWI recognized by FDEP; FDEP-recognized stormwater inspector training accepted; licensed PE/PG qualifies for SWPPP preparation",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is primarily regulated through the Water Management Districts' Environmental Resource Permit (ERP) program. Florida has 5 water management districts with varying specific requirements.",
  },
  dischargeStandards: {
    turbidityLimit: "Discharges must not cause turbidity in receiving waters to exceed 29 NTU above background in Class III waters",
    notes: "Florida's water quality standards are set by rule and apply based on water body classification (Class I through Class V). Special protection applies to Outstanding Florida Waters (OFWs).",
  },
  officialLinks: {
    agencyUrl: "https://floridadep.gov/",
    permitApplicationUrl: "https://floridadep.gov/water/stormwater",
    regulationDocUrl: "https://floridadep.gov/water/stormwater/content/construction-activity",
  },
  lastVerified: "2025-01",
  notes: "Florida is unique in having a dual-permit system: the FDEP Generic Permit (stormwater) AND the Water Management District ERP (stormwater and flooding/floodplain). Both may apply to the same project. Projects in wetlands face additional scrutiny.",
};
