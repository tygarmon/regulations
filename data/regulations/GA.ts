import { StateRegulation } from "../types";

export const GA: StateRegulation = {
  stateCode: "GA",
  stateName: "Georgia",
  agency: "Georgia Department of Natural Resources, Environmental Protection Division",
  agencyAbbr: "EPD",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. GAR100001)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); ≥ 5 acres triggers additional land disturbance activity permit requirements under state law",
    noticePeriod: "NOI must be submitted to EPD and a permit confirmation received before land disturbance begins; EPD typically processes NOIs within 7 business days",
    applicationMethod: "Online via Georgia EPD's online NOI system (ePD Online); paper NOI option also available; local issuing authorities (LIAs) administer the Erosion and Sedimentation Act permit at the county/city level",
    fee: "No state-level NPDES permit fee for GAR100001; however, local LIA permit fees apply and vary by jurisdiction (commonly $50–$500+ depending on acreage and locality)",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Georgia calls its plan an Erosion, Sedimentation and Pollution Control Plan (ESPCP), which functions as the SWPPP. The ESPCP must be prepared by a Certified Plan Designer (Level II certification under GSWCC) for sites ≥ 5 acres or where EPD requires it. For sites < 5 acres, a Certified Plan Reviewer (Level I) may prepare it. Georgia EPD provides model SWPPP/ESPCP guidance and templates. No PE stamp is required, but GSWCC certification is required for plan designers.",
  },
  inspections: {
    frequency: "At least every 7 calendar days during active land disturbance and within 24 hours after a rainfall event of ≥ 0.5 inches; certified personnel must conduct inspections",
    qualificationRequired: "Inspector must hold a Georgia Soil and Water Conservation Commission (GSWCC) Inspector certification (Level IA, IB, or II); on-site inspection reports must be completed by or under the supervision of a certified inspector",
    rainTrigger: "Within 24 hours of a rainfall event producing ≥ 0.5 inches",
    acceptedCertifications: "GSWCC Level 1B CIESC (Certified Inspector of Erosion and Sediment Control) REQUIRED for all SWPPP inspections; CPESC satisfies the Level 2 requirement; Level 1A required for all construction personnel",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under the Georgia Stormwater Management Manual (the 'Blue Book') for sites in MS4 jurisdictions. Georgia Phase II MS4 communities must implement post-construction runoff control programs. Design standards emphasize water quality volume treatment and channel protection. Statewide post-construction requirements for non-MS4 areas are addressed through the ESPCP and local ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No statewide numeric NTU turbidity limit in GAR100001; narrative standards apply — discharges must not cause or contribute to violations of Georgia's water quality standards",
    notes: "Georgia water quality standards (Ga. Comp. R. & Regs. § 391-3-6) include narrative turbidity and aesthetic standards. Discharges to Trout Waters or other classified streams may face more stringent protections. Visual monitoring and BMP maintenance records are required.",
  },
  officialLinks: {
    agencyUrl: "https://epd.georgia.gov/",
    permitApplicationUrl: "https://epd.georgia.gov/watershed-protection-branch/npdes-stormwater/construction-stormwater-program",
    regulationDocUrl: "https://epd.georgia.gov/watershed-protection-branch/npdes-stormwater/construction-stormwater-program",
  },
  lastVerified: "2025-01",
  notes: "Georgia's program is distinctive in its dual-permit system: the federal NPDES permit (GAR100001 from EPD) works alongside the state Erosion and Sedimentation Act permit issued by local issuing authorities (LIAs) such as counties and cities. Both permits are required for most construction sites ≥ 1 acre. Georgia also has one of the few state programs requiring specific GSWCC certification for plan designers and inspectors. The Georgia Soil and Water Conservation Commission (GSWCC) administers the certification program. All land-disturbing activity requires an approved Erosion, Sedimentation and Pollution Control Plan before work begins.",
};
