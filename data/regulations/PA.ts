import { StateRegulation } from "../types";

export const PA: StateRegulation = {
  stateCode: "PA",
  stateName: "Pennsylvania",
  agency: "Pennsylvania Department of Environmental Protection",
  agencyAbbr: "PA DEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activities (PAG-02)",
    threshold: "≥ 1 acre of earth disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre; Pennsylvania also requires a separate E&S permit (via Chapter 102) for all earth disturbance ≥ 5,000 sq ft (approximately 0.11 acre)",
    noticePeriod: "NOI must be submitted to the applicable County Conservation District (CCD) or PA DEP regional office and approved before earth disturbance begins; PA DEP targets a 30-day review period but review can extend to 60 days for complete applications",
    applicationMethod: "Online via PA DEP's eFACTS/eNOI system or paper application submitted to the County Conservation District (CCD) or PA DEP regional office; most projects are reviewed and approved at the CCD level under delegated authority",
    fee: "$100 to $500 depending on acreage for general permit (PAG-02); Individual NPDES permits (required for discharges to High Quality or Exceptional Value waters) have higher fee schedules. County Conservation Districts may charge additional review fees.",
  },
  swppp: {
    required: true,
    peCertRequired: true,
    templateAvailable: true,
    notes: "Pennsylvania requires both an Erosion and Sediment Control (E&S) Plan and a Post-Construction Stormwater Management (PCSM) Plan, together comprising the functional equivalent of a SWPPP. For projects disturbing ≥ 1 acre, the E&S Plan and PCSM Plan must be prepared and sealed by a licensed Professional Engineer (PE), Registered Landscape Architect (RLA), or other Pennsylvania-licensed professional. PA DEP provides Chapter 102 E&S BMP Manual and PCSM guidance. Plans must be retained on site and available to inspectors. A pollution prevention plan (P2) may also be required.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a precipitation event that results in a discharge from the earth disturbance area. Inspections must be documented on DEP-approved inspection report forms.",
    qualificationRequired: "Inspections must be performed by an 'Responsible Person for Erosion and Sedimentation Compliance' — Pennsylvania requires that at least one person responsible for compliance hold a valid Responsible Land Disturber (RLD) certificate issued by the County Conservation District or PA DEP. The RLD must be trained and tested on Pennsylvania's E&S requirements. This is a state-specific certification; training and testing are administered through the PA State Conservation Commission.",
    rainTrigger: "Within 24 hours of any precipitation event that results in a discharge from the earth disturbance area (discharge-based trigger; no fixed inch threshold)",
    acceptedCertifications: "DEP Clean Water Academy Qualified Site Inspector training REQUIRED every 2 years; OR active CPESC or CESSWI certification; PA-specific training is the mandatory baseline",
  },
  postConstruction: {
    required: true,
    notes: "Pennsylvania Chapter 102 regulations require a Post-Construction Stormwater Management (PCSM) Plan for all earth disturbance activities ≥ 1 acre. The PCSM Plan must be prepared by a licensed PE or RLA and demonstrate volume and peak rate controls to meet PA DEP's performance standards. PCSM controls must be installed, inspected, and certified before the NOI is terminated. Pennsylvania's Act 167 Stormwater Management Act governs watershed-level stormwater management; municipalities with adopted Act 167 plans may impose additional requirements.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit in PAG-02 for most discharges; however, discharges to High Quality (HQ) or Exceptional Value (EV) waters are prohibited under Chapter 102 unless an individual NPDES permit is obtained — no general permit coverage is available for such discharges",
    notes: "Pennsylvania's anti-degradation policy (Chapter 93) strictly limits discharges to HQ and EV waters. Visual monitoring and BMP effectiveness assessment are required at each inspection. Pennsylvania does not specify a numeric NTU limit in the general permit but prohibits discharges that cause or contribute to violations of Chapter 93 water quality standards. Receiving water narrative standards include turbidity provisions. Projects near Exceptional Value or High Quality waters face the most stringent requirements in the state.",
  },
  officialLinks: {
    agencyUrl: "https://www.dep.pa.gov/",
    permitApplicationUrl: "https://www.dep.pa.gov/Business/Water/CleanWater/StormwaterMgmt/ConstructionActivities/Pages/default.aspx",
    regulationDocUrl: "https://www.dep.pa.gov/Business/Water/CleanWater/StormwaterMgmt/ConstructionActivities/Pages/Chapter-102-Regulations.aspx",
  },
  lastVerified: "2025-01",
  notes: "Pennsylvania has one of the most complex construction stormwater programs in the nation, governed by Chapter 102 (Erosion and Sediment Control) and Chapter 93 (Water Quality Standards). A key quirk is that the earth disturbance threshold for E&S plan requirements starts at 5,000 sq ft — well below the federal 1-acre NPDES threshold — making Pennsylvania's program broader than most states. Projects in HQ/EV watersheds cannot use the PAG-02 general permit and must obtain an individual NPDES permit. County Conservation Districts serve as the primary front-line review and enforcement body under a delegated authority arrangement with PA DEP. The Responsible Land Disturber (RLD) certification is a notable Pennsylvania-specific requirement with no direct equivalent in most other states.",
};
