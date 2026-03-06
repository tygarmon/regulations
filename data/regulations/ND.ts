import { StateRegulation } from "../types";

export const ND: StateRegulation = {
  stateCode: "ND",
  stateName: "North Dakota",
  agency: "North Dakota Department of Environmental Quality",
  agencyAbbr: "NDDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activity (Permit No. NDR10-0000)",
    threshold: "≥ 1 acre of total land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre. Linear projects (pipelines, roads) use total disturbance area for threshold calculation.",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to NDDEQ and acknowledged at least 7 days before land disturbance begins. NDDEQ provides written confirmation of permit coverage. Operators should allow additional time for NDDEQ review of complete NOIs, though the 7-day lead time is the regulatory minimum.",
    applicationMethod: "Paper NOI submission mailed or hand-delivered to NDDEQ Division of Water Quality in Bismarck, ND. As of 2024–2025, NDDEQ does not have a dedicated online e-permitting portal for stormwater NOIs; submission is primarily paper-based. The NOI form is available for download on the NDDEQ website.",
    fee: "No permit fee for NPDES construction general permit coverage under NDR10-0000. North Dakota does not charge an NOI application fee for the stormwater construction general permit.",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A SWPPP is required for all sites seeking general permit coverage. NDDEQ does not require a licensed PE to prepare or certify the SWPPP. The operator must sign and certify the SWPPP. NDDEQ provides a SWPPP template and BMP guidance documents. The SWPPP must be maintained on-site during active construction. ND's flat, prairie terrain means drainage and ponding patterns can be highly site-specific; the SWPPP must address local drainage conditions including prairie potholes and wetlands.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours of a precipitation event producing ≥ 0.5 inches of rainfall. During periods of extended frozen ground with no land disturbance, inspection frequency may be reduced. Written inspection reports must be retained as part of the SWPPP documentation.",
    qualificationRequired: "No state-specific certification is required by the NDR10-0000 general permit. Inspectors must be qualified individuals knowledgeable in the design, installation, and maintenance of stormwater BMPs. NDDEQ does not currently administer or require a state-issued inspector credential. Industry certifications such as CPESC (Certified Professional in Erosion and Sediment Control) are recognized as evidence of qualification but are not mandated.",
    rainTrigger: "Within 24 hours of a precipitation event producing ≥ 0.5 inches of rainfall",
    acceptedCertifications: "No state-specific cert required; inspector must be a 'qualified individual' knowledgeable in BMP design, installation, and maintenance; CPESC, CESSWI, CISEC accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements apply in NPDES Phase II MS4-regulated communities in North Dakota, primarily Bismarck, Fargo, Grand Forks, and Minot. These MS4 permittees must adopt and enforce post-construction stormwater management programs. Outside of regulated MS4 areas, state-level post-construction requirements are minimal; the general permit requires final stabilization of disturbed areas before permit termination. ND's predominantly agricultural landscape means many construction projects outside urban areas face no municipal post-construction requirements beyond those in the state permit.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit specified in NDR10-0000; narrative water quality standards apply.",
    notes: "Discharges must comply with North Dakota Water Quality Standards (N.D. Admin. Code ch. 33.1-16-02). The narrative standard prohibits discharges that cause or contribute to violations of applicable water quality standards or impair designated uses. No site-specific NTU limit is embedded in the construction general permit. Prairie potholes and wetlands in North Dakota serve as de facto stormwater retention features and are jurisdictionally sensitive; discharges to or near these features require particular BMP attention.",
  },
  officialLinks: {
    agencyUrl: "https://deq.nd.gov/",
    permitApplicationUrl: "https://deq.nd.gov/wq/2_NDPDES_Permits/8_Stormwater/stw.aspx",
    regulationDocUrl: "https://deq.nd.gov/wq/2_NDPDES_Permits/8_Stormwater/stw.aspx",
  },
  lastVerified: "2025-01",
  notes: "North Dakota received NPDES delegation from EPA and administers the program through NDDEQ's Division of Water Quality. The state's program closely mirrors the EPA Construction General Permit structure. A notable feature of ND's landscape is the prevalence of prairie potholes (isolated wetlands) and ephemeral drainages throughout the state; these features are jurisdictionally complex under federal Section 404 and state law, and construction near them requires careful BMP planning. ND experiences significant freeze-thaw cycles that affect soil stabilization and erosion control — SWPPP seasonal considerations are important. The state has no permit fee for general permit coverage, which is unusual. Oil and gas-related construction (Bakken region) often triggers additional NDDEQ surface disturbance and environmental review requirements beyond the standard construction stormwater permit.",
};
