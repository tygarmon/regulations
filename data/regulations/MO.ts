import { StateRegulation } from "../types";

export const MO: StateRegulation = {
  stateCode: "MO",
  stateName: "Missouri",
  agency: "Missouri Department of Natural Resources",
  agencyAbbr: "MDNR",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES/SDS Land Disturbance General Permit (MOR100000)",
    threshold: "≥ 1 acre of total land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre); also applies to any earth-disturbing activity that the Director determines has the potential to cause water quality violations",
    noticePeriod: "Land Disturbance Permit (LDP) application and NOI must be submitted and authorization received before any land-disturbing activities begin. Missouri requires a minimum 2-business-day processing period for complete applications; applicants should allow 5–10 business days in practice",
    applicationMethod: "Online via Missouri's Environmental Online Permitting System (myMOEnvironment portal at my.moenv.org); paper applications also accepted at MDNR regional offices",
    fee: "$75 application fee for disturbances < 5 acres; $150 for 5–10 acres; $225 for > 10 acres; annual renewal fees apply if permit coverage extends beyond one year",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required and must be developed before the NOI is submitted. The SWPPP must be signed by the permittee and kept on-site at all times. A professional engineer stamp is not required by state rule, but the SWPPP preparer must be a Certified Erosion, Sediment and Stormwater Inspector (CESSI) or similarly qualified person. MDNR provides a SWPPP template and BMP guidance materials through its Land Disturbance program page.",
  },
  inspections: {
    frequency: "At least every 14 days and within 24 hours after any measurable precipitation event (defined as ≥ 0.5 inches of rainfall in a 24-hour period). Inspections must also be conducted after any snowmelt that causes a discharge.",
    qualificationRequired: "Missouri requires that at least one Certified Erosion, Sediment and Stormwater Inspector (CESSI) be identified for each project. CESSI certification is obtained through MDNR-approved training programs (e.g., CPESC, CESSWI, or equivalent). This is a state-mandated certification requirement, making Missouri one of the more stringent states for inspector qualifications.",
    rainTrigger: "Within 24 hours of any measurable precipitation event producing ≥ 0.5 inches of rainfall in a 24-hour period; also required after snowmelt causing a discharge",
    acceptedCertifications: "CESSI (Certified Erosion, Sediment and Stormwater Inspector) designation REQUIRED by Missouri DNR; CPESC, CESSWI accepted as equivalents through MDNR-approved training programs",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required for projects in Phase I and Phase II MS4-regulated areas. Regulated MS4 communities must adopt post-construction stormwater management programs consistent with MDNR's MS4 general permit. There is no standalone state-level post-construction general permit; compliance is enforced through local MS4 ordinances and the land disturbance permit conditions requiring final stabilization and permanent BMP installation.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the Land Disturbance General Permit MOR100000",
    notes: "Discharges must not cause or contribute to violations of Missouri's water quality standards (10 CSR 20-7.031), which include narrative criteria prohibiting aesthetically objectionable conditions and abnormal turbidity. Visual monitoring of discharge points is required at every inspection. Effluent characterization sampling may be required by MDNR for larger sites or sites discharging to sensitive or impaired water bodies.",
  },
  officialLinks: {
    agencyUrl: "https://dnr.mo.gov/",
    permitApplicationUrl: "https://dnr.mo.gov/water/business-industry-other-entities/permits-certification-engineering-fees/stormwater/land-disturbance-stormwater-permit",
    regulationDocUrl: "https://dnr.mo.gov/water/business-industry-other-entities/permits-certification-engineering-fees/stormwater/land-disturbance-stormwater-permit",
  },
  lastVerified: "2026-03",
  notes: "Missouri's requirement for a CESSI-certified inspector is a notable state-specific quirk — one of a minority of states mandating formal inspector credentialing. The myMOEnvironment online portal (my.moenv.org) consolidated multiple prior legacy systems. Missouri also regulates land disturbance under its state Surface Water Protection Law (Chapter 644 RSMo) in parallel with the federal NPDES program, meaning the state Land Disturbance Permit (LDP) and the NPDES general permit are issued together as a combined authorization. Projects near Outstanding State Resource Waters (OSRWs) face additional anti-degradation requirements.",
};
