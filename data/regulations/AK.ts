import { StateRegulation } from "../types";

export const AK: StateRegulation = {
  stateCode: "AK",
  stateName: "Alaska",
  agency: "Alaska Department of Environmental Conservation",
  agencyAbbr: "DEC",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "APDES Construction General Permit (CGP) — Permit No. AKR10A000 (active permit reissued 2021)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale",
    noticePeriod: "NOI must be submitted at least 30 days before the planned start of construction activity; DEC issues a written authorization letter before work may begin",
    applicationMethod: "Online submission via the Alaska DEC APDES online permitting portal; paper NOI forms also accepted by mail",
    fee: "$50 NOI processing fee for sites disturbing < 5 acres; $100 for sites disturbing ≥ 5 acres",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be prepared and implemented before construction begins. Alaska DEC provides SWPPP templates and guidance documents. The SWPPP must be signed by the permittee and available on-site at all times. No PE stamp is required. The plan must include site maps, BMPs, inspection schedules, and a maintenance plan.",
  },
  inspections: {
    frequency: "At least every 14 calendar days and within 24 hours of a precipitation or snowmelt event that results in a discharge from the site; during frozen ground conditions, inspections may be reduced to monthly if the site is fully stabilized",
    qualificationRequired: "A knowledgeable person familiar with the SWPPP must conduct inspections. Alaska does not require a state-specific inspector certification, but the person must understand construction stormwater BMPs. Many operators voluntarily use EPA's Developing Your SWPPP training.",
    rainTrigger: "Within 24 hours of any precipitation or snowmelt event that results in a discharge from the site (no fixed inch threshold — discharge-based trigger)",
    acceptedCertifications: "No state-specific cert required; EPA CGP requires 'qualified personnel' knowledgeable in E&SC; CPESC, CESSWI, CISEC accepted",
  },
  postConstruction: {
    required: true,
    notes: "Permit coverage ends after final stabilization is achieved and a Notice of Termination (NOT) is filed with DEC. Post-construction stormwater management requirements are primarily addressed through local municipality ordinances for regulated MS4 communities in Anchorage and Fairbanks. Most of Alaska is not covered by a Phase II MS4 permit.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU limit in the CGP; narrative water quality standard applies",
    notes: "Discharges must not cause or contribute to violations of Alaska water quality standards. Alaska's water quality standards are protective of cold-water fisheries and anadromous fish habitat. Sites discharging to anadromous fish streams may require coordination with Alaska Department of Fish and Game (ADF&G) and may face stricter conditions. Visual monitoring is required.",
  },
  officialLinks: {
    agencyUrl: "https://dec.alaska.gov/",
    permitApplicationUrl: "https://dec.alaska.gov/water/wastewater/stormwater/construction/",
    regulationDocUrl: "https://dec.alaska.gov/water/wastewater/stormwater/construction/",
  },
  lastVerified: "2025-01",
  permitExpires: "2027-02-17", // EPA CGP 2022 — expires Feb 17 2027
  notes: "Alaska administers its own NPDES-equivalent program called APDES (Alaska Pollutant Discharge Elimination System). The 30-day NOI lead time is longer than most states. The 30-day review window reflects DEC's need to coordinate with Alaska Department of Fish and Game on anadromous waterway impacts, which is a major quirk unique to Alaska. Operators working near salmon streams should plan for potential additional permit conditions or requirements from ADF&G under AS 16.05.871.",
};
