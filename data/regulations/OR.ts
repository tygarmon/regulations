import { StateRegulation } from "../types";

export const OR: StateRegulation = {
  stateCode: "OR",
  stateName: "Oregon",
  agency: "Oregon Department of Environmental Quality",
  agencyAbbr: "Oregon DEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES/WPCF General Permit for Stormwater Discharges from Construction Activities (1200-C)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre; projects < 1 acre not part of a common plan are generally exempt from 1200-C",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to Oregon DEQ and permit coverage confirmed at least 7 days before land disturbance begins; projects with high erosion potential in sensitive basins may require earlier submission",
    applicationMethod: "Online via Oregon DEQ's online permit portal (Oregon DEQ Permit Portal / ePermitting system); paper NOI also accepted by mail",
    fee: "$200 for sites < 5 acres; $400 for 5–19.99 acres; $600 for 20–49.99 acres; $800 for ≥ 50 acres; fees are one-time and based on project disturbance area",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "An Erosion and Sediment Control Plan (ESCP), which Oregon treats as equivalent to a SWPPP, must be developed and implemented prior to any land-disturbing activity. Oregon DEQ provides an ESCP template and 1200-C Permit Fact Sheet. For projects ≥ 5 acres, the ESCP must be prepared by or under the direction of a Registered Professional Engineer (PE), Oregon Licensed Landscape Architect, or other qualified professional. DEQ provides a model ESCP and BMP handbook. The plan must remain on site and be available to inspectors.",
  },
  inspections: {
    frequency: "Every 7 days during the wet season (October 1 through April 30) and within 48 hours of a storm event producing ≥ 0.5 inches of rainfall; every 14 days during the dry season (May 1 through September 30) and within 48 hours of a qualifying storm event. Inspection frequency may be reduced for stabilized areas.",
    qualificationRequired: "No mandatory state certification under 1200-C; inspections must be conducted by a 'qualified person' knowledgeable in BMPs and the ESCP. However, for projects ≥ 5 acres, the responsible party for ESCP preparation must be a licensed PE, licensed landscape architect, or Certified Professional in Erosion and Sediment Control (CPESC). Inspector training and familiarity with the permit requirements are expected.",
    rainTrigger: "Within 48 hours of a storm event producing ≥ 0.5 inches of precipitation, OR any storm event that causes a discharge from the site; wet-season (Oct–Apr) inspections required every 7 days",
    acceptedCertifications: "CESCL (Certified Erosion and Sediment Control Lead) or Oregon-specific CESCL REQUIRED; meets 1200-C Erosion and Sediment Control Inspector (ESCI) requirement; WA CESCL (BMP C160) also accepted",
  },
  postConstruction: {
    required: true,
    notes: "Oregon 1200-C requires that post-construction stormwater management facilities be installed and stabilized before final termination. For projects in regulated MS4 jurisdictions, local post-construction stormwater management requirements apply per Oregon's Phase II MS4 rules (OAR 340-041). Oregon DEQ's Stormwater Management Manual for Western Oregon provides design standards for post-construction controls. Eastern Oregon projects may have different requirements based on precipitation patterns.",
  },
  dischargeStandards: {
    turbidityLimit: "Discharges must not cause or contribute to violations of Oregon water quality standards; no single numeric NTU effluent limit in 1200-C, but discharges to 303(d)-listed turbidity-impaired waters require enhanced BMPs",
    notes: "Oregon water quality standards (OAR 340-041) require that stormwater discharges not cause turbidity increases of more than 10% above natural background in most waters. Oregon 1200-C requires visual monitoring of discharges and receiving waters. If a discharge is causing visible discoloration or turbidity in the receiving water, BMPs must be upgraded immediately. Projects discharging to Oregon's Outstanding Resource Waters (ORW) or sensitive fishery streams (particularly salmon-bearing streams) face heightened conditions and may require additional monitoring.",
  },
  officialLinks: {
    agencyUrl: "https://www.oregon.gov/deq/",
    permitApplicationUrl: "https://www.oregon.gov/deq/permits/Pages/stormwater.aspx",
    regulationDocUrl: "https://www.oregon.gov/deq/wq/Documents/1200CPermit.pdf",
  },
  permitExpires: "2030-12-14",
  lastVerified: "2025-01",
  notes: "Oregon's 1200-C permit is one of the more prescriptive state construction stormwater programs. The permit distinguishes between wet and dry seasons with different inspection schedules, reflecting Oregon's strongly seasonal precipitation climate. Projects within the Urban Growth Boundary of a regulated MS4 must also comply with local stormwater management ordinances. Oregon requires a Notice of Termination (NOT) be filed after final stabilization. The 1200-C is periodically reissued (most recently updated in 2022). Oregon also administers a separate General Permit (1200-COLS) specifically for construction in the Columbia Slough area of Portland.",
};
