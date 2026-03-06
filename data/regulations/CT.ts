import { StateRegulation } from "../types";

export const CT: StateRegulation = {
  stateCode: "CT",
  stateName: "Connecticut",
  agency: "Connecticut Department of Energy and Environmental Protection",
  agencyAbbr: "DEEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "General Permit for the Discharge of Stormwater and Dewatering Wastewaters from Construction Activities (Permit No. 9-300-100, reissued 2021)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale; also applies to any dewatering discharges from construction sites of any size",
    noticePeriod: "Registration (NOI equivalent) must be submitted at least 5 days before construction begins; DEEP issues a registration number upon receipt of a complete submission",
    applicationMethod: "Online via CT DEEP eDEP (electronic submission portal) at https://www.ct.gov/deep/edep; paper registration form also accepted",
    fee: "$625 for initial registration; no annual renewal fee for the term of the general permit",
  },
  swppp: {
    required: true,
    peCertRequired: true,
    templateAvailable: true,
    notes: "Connecticut requires that the SWPPP (called a Stormwater Pollution Prevention Plan or SWPPP) be prepared by a Certified Soil Erosion and Sediment Control (SESC) professional OR signed and stamped by a licensed Professional Engineer (PE) or licensed Land Surveyor for sites disturbing ≥ 2 acres. For sites of 1 to < 2 acres, the SWPPP must be prepared by a qualified individual. CT DEEP provides a SWPPP template and the 2002 Connecticut Guidelines for Soil Erosion and Sediment Control. This PE/SESC requirement is one of the most notable quirks of Connecticut's program.",
  },
  inspections: {
    frequency: "At least every 7 calendar days and within 24 hours of any storm event that produces 0.5 inches or more of rainfall; sites that have achieved final stabilization may reduce inspection frequency",
    qualificationRequired: "Inspections must be conducted by a Certified Soil Erosion and Sediment Control (SESC) Inspector or a qualified professional with equivalent training. Connecticut's SESC Inspector certification is administered by the Connecticut DEEP and the University of Connecticut Extension. This certification is a notable state-specific requirement not common in other states.",
    rainTrigger: "Within 24 hours of any storm event producing ≥ 0.5 inches of rainfall",
    acceptedCertifications: "Certified Soil Erosion and Sediment Control (SESC) Inspector (CT-specific credential) required or qualified professional with equivalent training; DEEP-recognized",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under Connecticut's General Permit for Stormwater Discharges Associated with Municipal Separate Storm Sewer Systems (MS4) for regulated municipalities. Additionally, Connecticut's Stormwater Quality Manual provides design criteria for permanent stormwater management BMPs. Sites must achieve final stabilization and submit a Notice of Termination before permit coverage ends. Many municipalities have adopted local stormwater ordinances that impose additional post-construction requirements.",
  },
  dischargeStandards: {
    turbidityLimit: "No specific numeric NTU limit in the construction general permit; narrative water quality standard applies; dewatering discharges must meet a turbidity limit of 50 NTU or demonstrate best practicable treatment",
    notes: "Connecticut's construction general permit applies to both stormwater and dewatering (groundwater) discharges. Dewatering discharges have a 50 NTU turbidity limit, which is stricter than many states. Discharges to impaired water bodies (TMDL waters) may require enhanced BMPs or individual permits. Connecticut is classified entirely as a coastal state with LONG ISLAND SOUND as the primary receiving water, creating heightened nutrient and sediment sensitivity.",
  },
  officialLinks: {
    agencyUrl: "https://portal.ct.gov/DEEP",
    permitApplicationUrl: "https://portal.ct.gov/DEEP/Water/Stormwater/Stormwater-General-Permits",
    regulationDocUrl: "https://portal.ct.gov/deep/water-regulating-and-discharges/stormwater/construction-stormwater-gp",
  },
  lastVerified: "2025-01",
  notes: "Connecticut has several notable quirks: (1) The 7-day inspection frequency is more stringent than the 14-day federal CGP default. (2) SWPPP preparation requires a CT-licensed PE, land surveyor, or SESC-certified professional for larger sites — the only state among these five with a professional credentialing requirement for SWPPP authorship. (3) The permit covers both stormwater AND dewatering wastewaters under a single registration, which simplifies compliance for sites requiring groundwater management. (4) The registration fee of $625 is relatively high. (5) Connecticut's proximity to Long Island Sound drives strict water quality goals under the Long Island Sound TMDL program.",
};
