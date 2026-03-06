import { StateRegulation } from "../types";

export const IN: StateRegulation = {
  stateCode: "IN",
  stateName: "Indiana",
  agency: "Indiana Department of Environmental Management",
  agencyAbbr: "IDEM",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES Construction Stormwater General Permit (Rule 5 / Permit INR100000)",
    threshold: "≥ 1 acre of land disturbance; < 1 acre if part of a larger common plan of development or sale",
    noticePeriod: "NOI must be submitted and approved before earth-disturbing activities begin; no fixed calendar lead time is prescribed, but IDEM review typically takes several business days",
    applicationMethod: "Online via IDEM's myidem.in.gov portal (electronic NOI submission); paper NOI also accepted but online is preferred",
    fee: "$100 per NOI filing (flat fee); no acreage-based scaling",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "SWPPP must be prepared prior to submitting the NOI and must be on site and available for inspection throughout the project. IDEM provides a Rule 5 SWPPP template and construction plan checklist on its website. A PE stamp is not required for the SWPPP itself, though local drainage plans may require engineering sign-off. The SWPPP must be updated whenever site conditions change significantly.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours after a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period; frequency may be reduced to every 14 days when the entire site is temporarily stabilized or runoff is unlikely due to winter conditions",
    qualificationRequired: "Inspections must be conducted by a qualified inspector who is knowledgeable about the permit requirements and BMP implementation; Indiana does not mandate a specific state-issued certification, but IDEM recommends Certified Inspector of Sediment and Erosion Control (CISEC) or equivalent training",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "IDEM-approved training effectively required; licensed PE/RLS also qualifies; CPESC, CESSWI accepted in conjunction with Indiana-approved training",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater quality management is required under Rule 13 (327 IAC 15-13) for regulated MS4 communities and under Rule 15 (327 IAC 15-15) for certain construction projects discharging to regulated MS4s. Requirements include long-term operation and maintenance of structural BMPs. Specific design standards (volume capture, infiltration) are set by the local MS4 entity.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the general permit; narrative standard applies",
    notes: "Indiana's Rule 5 permit does not establish a numeric turbidity limit. Discharges must not cause or contribute to a violation of the state's water quality standards (narrative turbidity and color standards at 327 IAC 2-1-6). Visual monitoring is required at all discharge points. If a discharge causes visible turbidity in the receiving water, corrective action is required.",
  },
  officialLinks: {
    agencyUrl: "https://www.in.gov/idem/",
    permitApplicationUrl: "https://www.in.gov/idem/stormwater/construction-stormwater/",
    regulationDocUrl: "https://www.in.gov/idem/stormwater/construction-land-disturbance-permitting/",
  },
  lastVerified: "2025-01",
  notes: "Indiana's construction stormwater program is commonly called 'Rule 5' after 327 IAC 15-5. IDEM issues a state general permit (INR100000) rather than delegating to counties. Operators of sites ≥ 5 acres must also submit a Notice of Termination (NOT) when construction is complete and final stabilization is achieved. Sites < 1 acre that are part of a common plan of development still need coverage. IDEM publishes a Land Quality Rule 5 Technical Guidance Manual that is widely used in practice.",
};
