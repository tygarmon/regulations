import { StateRegulation } from "../types";

export const NJ: StateRegulation = {
  stateCode: "NJ",
  stateName: "New Jersey",
  agency: "New Jersey Department of Environmental Protection",
  agencyAbbr: "NJDEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NJPDES Stormwater General Permit for Construction Activity (Permit No. NJG0088323)",
    threshold: "≥ 1 acre of total land disturbance, or < 1 acre if part of a larger common plan of development or sale that will disturb ≥ 1 acre in total. Individual lot disturbances < 1 acre in a larger subdivision require coverage.",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to NJDEP and acknowledged before land disturbance begins. NJDEP generally processes complete NOIs within 30 days; operators may begin work if no deficiency letter is received within that window. The SWPPP must also be completed before construction starts.",
    applicationMethod: "Online via NJDEP's ePermitting system (accessible through njdep.state.nj.us/ePTS). Paper NOI submissions are also accepted. The project's Soil Erosion and Sediment Control (SESC) plan must be approved by the appropriate County Soil Conservation District before or concurrently with the NOI filing.",
    fee: "Annual maintenance fee of $200 per year of permit coverage. No separate NOI application fee for the stormwater general permit itself, but SESC plan review fees apply at the county level (vary by county, typically $50–$300+ based on disturbance acreage).",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A SWPPP is required for all sites seeking NJG0088323 coverage. New Jersey additionally requires a Soil Erosion and Sediment Control (SESC) plan approved by the local County Soil Conservation District — this is a notable dual-plan requirement unique to NJ. The SWPPP and SESC plan together constitute the erosion control framework. A licensed PE or Professional Engineer is not required to prepare the SWPPP, but the SESC plan may require review by a licensed engineer at the county district level. NJDEP provides a SWPPP template and guidance. The SWPPP must be kept on-site at all times.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours after a storm event producing ≥ 0.25 inches of rainfall. Inspections must be conducted by a qualified individual and documented in writing. Frequency may be reduced for stabilized sites or during periods of little or no land-disturbing activity.",
    qualificationRequired: "New Jersey requires that SWPPP inspections be conducted by a Certified Soil Erosion and Sediment Control Inspector (CSESCI) or a person under the direct supervision of one. The CSESCI credential is administered by the NJ State Soil Conservation Committee. This is a state-specific certification requirement that distinguishes NJ from most other states.",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.25 inches of rainfall (one of the lower thresholds nationally)",
    acceptedCertifications: "Certified Soil Erosion and Sediment Control Inspector (CSESCI) REQUIRED or direct supervision by one; administered by the NJ State Soil Conservation Committee — state-specific mandatory credential",
  },
  postConstruction: {
    required: true,
    notes: "New Jersey has one of the most comprehensive post-construction stormwater management programs in the country. Under the 2020 revised NJ Stormwater Management Rules (N.J.A.C. 7:8), projects disturbing ≥ 1 acre (or in certain municipalities ≥ 0.25 acre) must implement green infrastructure and meet groundwater recharge, water quality, and quantity management standards. Major developments must achieve 100% recharge of 1-year, 24-hour storm event. The rules also impose 'net zero increase' in impervious cover requirements in certain contexts. Each municipality may have additional requirements under adopted local Stormwater Control Ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit specified in NJG0088323; narrative standard applies.",
    notes: "Discharges must comply with NJ Surface Water Quality Standards (N.J.A.C. 7:9B) and must not cause or contribute to violations. The narrative standard prohibits discharges that cause aesthetically objectionable conditions or turbidity that impairs designated uses. No specific NTU threshold is in the general permit. SESC plan compliance and BMP maintenance are the primary control mechanisms.",
  },
  officialLinks: {
    agencyUrl: "https://www.nj.gov/dep/",
    permitApplicationUrl: "https://www.nj.gov/dep/stormwater/construction_gpermit.htm",
    regulationDocUrl: "https://dep.nj.gov/njpdes-stormwater/industrial-stormwater-program/general-permits/5g3/",
  },
  lastVerified: "2025-01",
  notes: "New Jersey has a notably complex construction stormwater framework driven by both the NJPDES general permit (NJG0088323) and the state's Soil Erosion and Sediment Control (SESC) Act (N.J.S.A. 4:24-39 et seq.). Both a SWPPP and an approved SESC plan are required, and SESC plan approval must come from one of New Jersey's 15 County Soil Conservation Districts. The CSESCI inspector certification is a state-specific requirement rarely found elsewhere. The 2020 stormwater management rule revisions (effective March 2021 for most projects) significantly expanded post-construction green infrastructure requirements, making NJ one of the most demanding states for post-construction compliance. Projects in Highlands or Pinelands regions face additional land use and environmental review.",
};
