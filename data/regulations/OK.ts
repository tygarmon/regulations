import { StateRegulation } from "../types";

export const OK: StateRegulation = {
  stateCode: "OK",
  stateName: "Oklahoma",
  agency: "Oklahoma Department of Environmental Quality",
  agencyAbbr: "ODEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "OPDES General Permit for Stormwater Discharges from Construction Activities (OKR10)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre",
    noticePeriod: "NOI must be submitted and acknowledged by ODEQ before construction activities begin; operators must wait for authorization acknowledgment (typically within 2–7 business days for online submissions)",
    applicationMethod: "Online via ODEQ's Oklahoma Environmental Permitting System (OEPS); paper NOI (Form 605-007) also accepted via mail",
    fee: "$300 for sites disturbing < 5 acres; $800 for sites disturbing ≥ 5 acres; no annual renewal fee for the duration of the project",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be developed and implemented before submitting the NOI. ODEQ provides a sample SWPPP template and BMP guidance manual. The SWPPP must be signed by an authorized signatory. No PE stamp is required by the general permit, though ODEQ encourages involvement of qualified professionals. The SWPPP must be retained on-site or at a readily accessible location and made available to ODEQ upon request.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a precipitation event that causes a discharge from the site. Frequency may be reduced to every 14 days for sites where all disturbed areas have been temporarily or finally stabilized, or where runoff is unlikely due to winter conditions.",
    qualificationRequired: "No formal state certification is required by OKR10; inspections must be conducted by a 'qualified person' with knowledge of BMPs and the SWPPP. Oklahoma does not mandate a specific inspector certification credential under the general permit, though training through organizations such as CPESC or CESSWI is common practice.",
    rainTrigger: "Within 24 hours of any precipitation event that causes a discharge from the site (discharge-based trigger)",
    acceptedCertifications: "No state-specific mandatory cert; inspector must be a 'qualified person' with knowledge of BMPs and SWPPP; CPESC, CESSWI, CISEC accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management controls must be installed and functioning prior to permit termination per OKR10 conditions. Regulated MS4 communities in Oklahoma are required to implement post-construction programs under Phase II rules. ODEQ does not administer a statewide post-construction design manual; local MS4 ordinances govern specific design standards.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit specified in OKR10; discharges must not cause or contribute to violations of Oklahoma water quality standards",
    notes: "Oklahoma water quality standards (OAC 252:690) require that stormwater discharges not cause turbidity in receiving waters to exceed levels that render the water unsuitable for its designated uses. Visual inspections of BMPs and discharge points are required. Discharges to Outstanding Resource Waters (ORWs) or Sensitive Public and Private Water Supplies have heightened protection requirements. Corrective action is required if a discharge is observed to be causing visible turbidity or other water quality impacts.",
  },
  officialLinks: {
    agencyUrl: "https://deq.ok.gov/",
    permitApplicationUrl: "https://deq.ok.gov/divisions/water-quality/stormwater/stormwater-construction/",
    regulationDocUrl: "https://deq.ok.gov/wp-content/uploads/Water-Quality-Division/stormwater/okr10-general-permit.pdf",
  },
  lastVerified: "2025-01",
  notes: "Oklahoma administers its own NPDES-equivalent program called OPDES (Oklahoma Pollutant Discharge Elimination System) under state authority (27A O.S. § 2-6-201). The OKR10 permit number has evolved over reissuances; the current permit is sometimes referenced as OKR10-0000. Oklahoma's program closely mirrors the federal CGP structure but uses OPDES nomenclature. The state requires a Notice of Termination (NOT) after final stabilization. Projects in the Lake Thunderbird or Lake Hefner watersheds or near Sensitive Public Water Supplies face additional BMP requirements.",
};
