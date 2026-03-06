import { StateRegulation } from "../types";

export const DE: StateRegulation = {
  stateCode: "DE",
  stateName: "Delaware",
  agency: "Delaware Department of Natural Resources and Environmental Control",
  agencyAbbr: "DNREC",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. DE0050164 / DER10000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale)",
    noticePeriod: "NOI must be submitted and acknowledged by DNREC before earth disturbance begins; no fixed calendar lead time is specified, but DNREC recommends allowing several weeks for processing",
    applicationMethod: "Paper NOI form submitted to DNREC Division of Watershed Stewardship; ePermitting portal (myDNREC) for some applications — verify current method with agency",
    fee: "$200 application fee; annual compliance fee of $200 for sites < 5 acres, $400 for sites 5–10 acres, $600 for sites > 10 acres (verify current schedule with DNREC)",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required before earth disturbance begins. Delaware also requires a Sediment and Stormwater Management Plan (SSMP) approved by a local reviewing authority prior to permit coverage. DNREC provides SWPPP guidance documents. No PE stamp is required for the SWPPP itself, but the SSMP engineering design typically requires a licensed PE.",
  },
  inspections: {
    frequency: "At least every 7 days during active construction and within 24 hours after a storm event producing ≥ 0.5 inches of rainfall",
    qualificationRequired: "Inspector must be knowledgeable about the SWPPP and BMPs; Delaware does not have a state-specific inspector certification, but CPESC (Certified Professional in Erosion and Sediment Control) or equivalent is recommended",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall",
    acceptedCertifications: "No state-specific mandatory cert; CPESC, CESSWI accepted; inspector must be knowledgeable in E&SC and SWPPP",
  },
  postConstruction: {
    required: true,
    notes: "Delaware requires post-construction stormwater management through its Sediment and Stormwater Regulations (7 Del. Admin. Code 5101). Projects must demonstrate compliance with the Delaware Sediment and Stormwater Program, including permanent stormwater management facilities that meet volume and quality standards. Many New Castle County projects are subject to additional county-level requirements.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit specified in the construction general permit; narrative standard applies — discharges must not cause or contribute to violations of Delaware's water quality standards",
    notes: "Delaware water quality standards (7 Del. Admin. Code 7201) prohibit discharges that cause aesthetic degradation, including discoloration and turbidity beyond natural background. Sites discharging to Outstanding Resource Waters (ORW) or other sensitive waterbodies may face more stringent conditions.",
  },
  officialLinks: {
    agencyUrl: "https://dnrec.delaware.gov/",
    permitApplicationUrl: "https://dnrec.delaware.gov/watershed/sediment-stormwater/",
    regulationDocUrl: "https://regulations.delaware.gov/AdminCode/title7/5000/5101/index.shtml",
  },
  lastVerified: "2025-01",
  notes: "Delaware is unique in requiring a locally approved Sediment and Stormwater Management Plan (SSMP) as a prerequisite for NPDES coverage — applicants must work through a local plan reviewer (county or state) before filing the NOI. The state's Sediment and Stormwater Program regulations (7 Del. Admin. Code 5101) govern both the SSMP and construction activity standards. Delaware has adopted the Delaware Sediment and Stormwater Design Manual. Projects in the Inland Bays watershed may face additional nutrient management requirements.",
};
