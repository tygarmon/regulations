import { StateRegulation } from "../types";

export const KY: StateRegulation = {
  stateCode: "KY",
  stateName: "Kentucky",
  agency: "Kentucky Energy and Environment Cabinet, Division of Water",
  agencyAbbr: "DOW",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "KPDES Construction Stormwater General Permit (Permit KYR100000)",
    threshold: "≥ 1 acre of land disturbance; < 1 acre if part of a larger common plan of development or sale expected to disturb ≥ 1 acre in total",
    noticePeriod: "Registration (NOI equivalent called a 'Registration Statement') must be submitted to the Division of Water at least 2 days before commencement of land-disturbing activities; coverage under the general permit is automatic after complete registration",
    applicationMethod: "Online via Kentucky Division of Water's eDMR / ePermitting system (Energy and Environment Cabinet Online Services Portal at https://eec.ky.gov/); paper registration also accepted",
    fee: "$200 per Registration Statement (flat fee, paid at time of submission); no acreage-tiered fee for the construction general permit",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Kentucky calls its plan the 'Stormwater Pollution Prevention Plan (SWPPP)' and requires it to be developed before land disturbance begins. DOW provides a SWPPP template and model forms. A PE is not required to prepare or certify the SWPPP for the general permit, though individual KPDES permits or complex projects may require engineering. The SWPPP must be on site, available for inspection, and updated when site conditions change.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours after a storm event that results in a discharge from the site; inspection frequency may be reduced to every 14 days for sites that are temporarily stabilized (e.g., during winter shutdown) when no construction is occurring",
    qualificationRequired: "Inspections must be performed by a qualified person designated by the permittee who is knowledgeable in the principles and practice of stormwater pollution prevention; Kentucky does not require a state-issued inspector certification, but the Division of Water recognizes CISEC, CPESC, and CESSWI credentials",
    rainTrigger: "Within 24 hours of any storm event that results in a discharge from the site (discharge-based trigger)",
    acceptedCertifications: "KY EPSC certification (required for Kentucky Transportation Cabinet projects); CPESC, CESSWI, licensed PE accepted for private construction; state EPSC training is the primary pathway",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater requirements are implemented through Kentucky's KPDES MS4 General Permit program (KYG200000) and local ordinances adopted by regulated MS4 communities. Construction discharging to regulated MS4s must demonstrate compliance with the receiving MS4's post-construction program. Kentucky DOW has also adopted requirements for regulated small MS4s to maintain a post-construction stormwater management program as a condition of their MS4 permit.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in General Permit KYR100000; narrative antidegradation and water quality standards apply",
    notes: "Kentucky's construction general permit does not set a numeric turbidity limit. All discharges must comply with Kentucky's Surface Water Standards (401 KAR 10:026 and 401 KAR 10:031) and the antidegradation policy. Narrative criteria prohibit discharges that cause a visible increase in turbidity in receiving waters. Visual monitoring is required at active discharge points and outfalls. Sites near Outstanding State Resource Waters (Tier III) or Outstanding National Resource Waters have additional protections.",
  },
  officialLinks: {
    agencyUrl: "https://eec.ky.gov/Environmental-Protection/Water/Pages/default.aspx",
    permitApplicationUrl: "https://eec.ky.gov/Environmental-Protection/Water/Permits/Pages/Stormwater.aspx",
    regulationDocUrl: "https://eec.ky.gov/Environmental-Protection/Water/Permits/Pages/Stormwater.aspx",
  },
  lastVerified: "2025-01",
  notes: "Kentucky operates a state program called KPDES (Kentucky Pollutant Discharge Elimination System), which is the state analog to NPDES. The construction general permit is designated KYR100000. A Notice of Termination (NOT) is required when final stabilization is achieved and the permittee no longer needs permit coverage. Kentucky DOW has increasingly focused compliance inspections on active construction sites near impaired waters (303(d)-listed streams). Local jurisdictions such as Jefferson County (Louisville) and Fayette County (Lexington) may impose additional local erosion and sediment control ordinance requirements above the state minimum.",
};
