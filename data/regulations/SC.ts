import { StateRegulation } from "../types";

export const SC: StateRegulation = {
  stateCode: "SC",
  stateName: "South Carolina",
  agency: "South Carolina Department of Environmental Services",
  agencyAbbr: "SCDES",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. SCR100000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre)",
    noticePeriod: "NOI must be submitted to SCDES and acknowledged before land-disturbing activities begin; SCDES does not specify a minimum advance notice period in SCR100000 but recommends submitting at least 7 days before construction start to allow processing time",
    applicationMethod: "Online via SCDES myDESC online portal (myDESC.sc.gov); paper NOI forms are also accepted by mail",
    fee: "No permit application fee for the SCR100000 general permit NOI; annual permit fees may apply under state law — verify with SCDES as fee schedules have been updated following the agency's 2023 transition from SCDHEC to SCDES",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required for all permitted sites. The SWPPP must be prepared before land-disturbing activity begins, kept on-site, and updated as conditions change. SCDES does not require a Professional Engineer stamp for SWPPP preparation on standard construction sites. SCDES provides a SWPPP template and guidance document on its website. The SWPPP must include a site map, description of BMPs, inspection schedule, and personnel responsible for implementation. Sites located in watersheds with impaired water bodies may need additional documentation.",
  },
  inspections: {
    frequency: "At least once every 7 calendar days during active land-disturbing activity, and within 24 hours after any storm event that produces ≥ 0.5 inches of rainfall in a 24-hour period; reduced inspection frequency (every 14 days) may be allowed for stabilized or inactive portions of the site",
    qualificationRequired: "No specific state certification is required by SCR100000; however, inspections must be conducted by a 'qualified person' who has been trained in stormwater management principles. SCDES recommends training through programs such as CPESC (Certified Professional in Erosion and Sediment Control) or state-recognized courses, but does not mandate a specific credential",
    rainTrigger: "Within 24 hours of any storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "CPESC, CESSWI, CISEC, or SC Land Disturbance Certificate accepted; state credential is an accepted alternative to national certs; licensed PE/RLS also qualifies",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under SCR100000 Part V and through local MS4 permit requirements. Permittees must ensure long-term operation and maintenance of post-construction BMPs. South Carolina's NPDES Phase II MS4 program requires operators of regulated MS4s to implement post-construction stormwater management programs. The South Carolina Stormwater Management BMP Handbook provides design standards for post-construction controls. Final stabilization must be achieved (70% uniform vegetative cover or equivalent) before the NOT (Notice of Termination) is submitted.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit in SCR100000; narrative water quality standards apply",
    notes: "South Carolina's water quality standards (S.C. Reg. 61-68) include narrative standards prohibiting discharges that cause or contribute to violations of surface water standards, including turbidity, color, and aesthetic criteria. Trout waters and other high-quality designated-use waters may trigger more stringent BMP requirements. Discharges to impaired water bodies listed on the 303(d) list require evaluation to ensure the SWPPP addresses the pollutant of concern. No statewide numeric turbidity effluent limit is established in the general permit.",
  },
  officialLinks: {
    agencyUrl: "https://des.sc.gov/",
    permitApplicationUrl: "https://des.sc.gov/programs/bureau-water/stormwater/stormwater-construction-activities",
    regulationDocUrl: "https://des.sc.gov/programs/bureau-water/stormwater/stormwater-construction-activities",
  },
  lastVerified: "2026-03",
  notes: "South Carolina's stormwater construction permit program was administered by SCDHEC until July 1, 2023, when the South Carolina Department of Environmental Services (SCDES) was created as a standalone agency, separating environmental regulatory functions from SCDHEC. The permit number SCR100000 and program requirements carried over, but agency references must reflect the new SCDES branding. The state also requires compliance with the South Carolina Stormwater Management and Sediment Reduction Act (S.C. Code Ann. § 48-14-10 et seq.) and associated regulations (R.72-300 series). Local governments may impose additional erosion and sediment control requirements. Sites near Outstanding Resource Waters or Trout Waters are subject to enhanced standards. The myDESC portal is the primary online interface for NOI submission and permit management.",
};
