import { StateRegulation } from "../types";

export const MS: StateRegulation = {
  stateCode: "MS",
  stateName: "Mississippi",
  agency: "Mississippi Department of Environmental Quality",
  agencyAbbr: "MDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Sites (MSR100000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre)",
    noticePeriod: "NOI must be submitted and MDEQ authorization received before construction begins; no fixed statutory lead time, but applicants should allow 7–14 days for processing",
    applicationMethod: "Paper NOI submission to MDEQ Office of Pollution Control; MDEQ has pursued online submittal enhancements — verify current portal status at mdeq.ms.gov",
    fee: "No permit fee for coverage under the Construction General Permit MSR100000",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be prepared before NOI submission and kept on-site throughout construction. No professional engineer stamp is required by state rule, though local jurisdictions or plan reviewers may request PE certification. MDEQ provides a SWPPP template and guidance document on its website.",
  },
  inspections: {
    frequency: "At least every 14 days and within 24 hours after any rainfall event of ≥ 0.5 inches during a 24-hour period",
    qualificationRequired: "No state-mandated certification; inspections must be conducted by a qualified personnel who is knowledgeable about the permit and SWPPP requirements. MDEQ recommends familiarity with BMP installation and maintenance.",
    rainTrigger: "Within 24 hours of a rainfall event producing ≥ 0.5 inches in a 24-hour period",
    acceptedCertifications: "No state-specific mandatory cert; inspector must be 'qualified personnel' knowledgeable in permit and SWPPP requirements; CESSWI, CPESC, CISEC accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements apply primarily through Phase II MS4 permits for regulated municipal separate storm sewer systems. Operators in MS4-regulated areas must comply with local post-construction ordinances. State-level numeric post-construction standards are not independently mandated in the construction CGP, but the SWPPP must address site stabilization and final land use.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the Construction General Permit",
    notes: "Discharges must not cause or contribute to violations of Mississippi's water quality standards, including narrative turbidity standards (no abnormal turbidity). Visual monitoring of discharge is required. Projects discharging to Outstanding Resource Waters or impaired water bodies on the 303(d) list may be subject to additional controls.",
  },
  officialLinks: {
    agencyUrl: "https://www.mdeq.ms.gov/",
    permitApplicationUrl: "https://www.mdeq.ms.gov/permits/environmental-permits-division/applications-forms/generalpermits/construction-stormwater/",
    regulationDocUrl: "https://www.mdeq.ms.gov/permits/environmental-permits-division/applications-forms/generalpermits/construction-stormwater/",
  },
  lastVerified: "2026-03",
  notes: "Mississippi does not charge a permit fee for the construction CGP, which is notable among delegated states. The permit number MSR100000 follows the standard EPA pattern for state-issued general permits. Mississippi's program is relatively streamlined — no state inspector certification is required, and the PE stamp is not mandated for SWPPPs. Operators near the Gulf Coast or within the Coastal Zone should also check MDEQ's coastal program requirements. The current general permit was reissued; verify the effective permit version and any recent modifications at mdeq.ms.gov.",
};
