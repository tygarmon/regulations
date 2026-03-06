import { StateRegulation } from "../types";

export const SD: StateRegulation = {
  stateCode: "SD",
  stateName: "South Dakota",
  agency: "South Dakota Department of Agriculture and Natural Resources",
  agencyAbbr: "DANR",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activity (Permit No. SDR10)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre); sites disturbing ≥ 5 acres that discharge to waters of the state require a Notice of Intent",
    noticePeriod: "NOI must be submitted to DANR at least 7 calendar days before the commencement of construction activity; authorization is granted upon receipt unless DANR requests additional information",
    applicationMethod: "Paper NOI submitted by mail or in person to DANR; South Dakota does not currently offer a fully online NOI submission portal — paper forms are the standard method; applicants may contact DANR's Water Quality Program for current submission procedures",
    fee: "No permit application fee for the SDR10 general permit NOI at the state level; South Dakota does not charge a fee for construction stormwater general permit coverage",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required for all sites covered under SDR10. The SWPPP must be prepared prior to the submittal of the NOI and implemented before land disturbance begins. No Professional Engineer stamp is required for standard construction sites. DANR provides SWPPP guidance and template documents on its website. The SWPPP must be kept on-site or at a location readily available to operators, inspectors, and DANR staff. It must be updated whenever significant changes are made to BMPs or site conditions.",
  },
  inspections: {
    frequency: "At least once every 14 calendar days during active construction, and within 24 hours after any storm event producing ≥ 0.5 inches of rainfall in a 24-hour period; during periods of inactivity (no land disturbance), inspections may be performed at least once per month",
    qualificationRequired: "No specific state certification is mandated by the SDR10 permit; inspections must be performed by a 'qualified inspector' who is knowledgeable in the principles of stormwater pollution prevention; DANR recommends training consistent with programs such as CPESC, but does not require a specific license or credential",
    rainTrigger: "Within 24 hours of any storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "No state-specific cert required; inspector must be a 'qualified inspector' knowledgeable in stormwater pollution prevention; CPESC, CESSWI accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under SDR10 and through Phase II MS4 permit requirements for regulated municipalities. Final stabilization (defined as uniform vegetative cover of ≥ 70% density, or equivalent permanent stabilization) must be achieved before a Notice of Termination (NOT) is submitted. Permanent post-construction BMPs must be noted in the SWPPP and transferred to the long-term operator at project completion. DANR's Phase II MS4 program requires regulated MS4 municipalities to establish post-construction stormwater ordinances and BMP standards.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit in SDR10; narrative water quality standards apply",
    notes: "South Dakota's water quality standards (ARSD 74:54) include narrative turbidity standards requiring that discharges not cause or contribute to violations of applicable water quality criteria. South Dakota's cold-water fisheries (Class A waters) and other sensitive designated-use waters may require additional BMP implementation. No numeric turbidity effluent limit is specified in the general permit. Visual monitoring of stormwater discharges is required at each inspection.",
  },
  officialLinks: {
    agencyUrl: "https://danr.sd.gov/",
    permitApplicationUrl: "https://danr.sd.gov/OfficeOfWater/SurfaceWaterQuality/stormwater/StormWaterConstruction.aspx",
    regulationDocUrl: "https://danr.sd.gov/OfficeOfWater/SurfaceWaterQuality/stormwater/StormWaterConstruction.aspx",
  },
  lastVerified: "2026-03",
  notes: "South Dakota is a delegated NPDES state and administers its construction stormwater program through the DANR Water Quality Program. The state permit SDR10 mirrors many of the EPA Construction General Permit (CGP) requirements but is issued under South Dakota state authority. South Dakota's program is relatively straightforward with no state-specific inspector certification requirement or PE stamp requirement. The state has a low population and large agricultural land base; construction stormwater issues often intersect with agricultural drainage and tributary water quality concerns, particularly for projects near the Missouri River and Lake Oahe. Operators should also check for local erosion and sediment control ordinances in municipalities such as Sioux Falls and Rapid City, which may have additional requirements.",
};
