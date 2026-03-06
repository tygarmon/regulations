import { StateRegulation } from "../types";

export const MT: StateRegulation = {
  stateCode: "MT",
  stateName: "Montana",
  agency: "Montana Department of Environmental Quality",
  agencyAbbr: "MT DEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Montana Pollutant Discharge Elimination System (MPDES) General Permit for Stormwater Discharges Associated with Construction Activity (MTR100000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre); individual construction sites < 1 acre may also require coverage if they discharge to impaired waters",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to MT DEQ at least 10 days before construction begins. Permit coverage is granted upon MT DEQ's issuance of an authorization number.",
    applicationMethod: "Paper NOI form submission to MT DEQ Water Protection Bureau; online submission option available through MT DEQ's Environmental Management System (EMS) portal — verify current portal availability at deq.mt.gov",
    fee: "$200 application fee for construction sites disturbing < 5 acres; $500 for sites disturbing 5 acres or more; fee is a one-time application fee for the duration of the project",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be developed prior to NOI submission and must be kept on-site and available for inspection at all times. Montana does not require a professional engineer to prepare or stamp the SWPPP as a state rule, though certain project types (e.g., highway construction managed by MDT) may have internal PE requirements. MT DEQ provides a SWPPP template, sample BMPs, and guidance documents on its website. The SWPPP must be updated whenever there are changes in design, construction, operations, or maintenance that could affect the discharge of pollutants.",
  },
  inspections: {
    frequency: "At least every 14 days and within 24 hours after any precipitation or snowmelt event that causes or has the potential to cause a stormwater discharge from the site",
    qualificationRequired: "No state-mandated inspector certification program; inspections must be conducted by qualified personnel who are knowledgeable in the principles and practice of erosion and sediment control and who possess the skills to assess conditions at the site and implement corrective measures. MT DEQ recommends but does not require certifications such as CPESC or CESSWI.",
    rainTrigger: "Within 24 hours of any precipitation or snowmelt event that causes or has the potential to cause a stormwater discharge from the site (discharge-based trigger)",
    acceptedCertifications: "No state-specific cert required; inspector must be 'qualified personnel' knowledgeable in E&SC principles; CPESC, CESSWI accepted; MT DEQ recommends but does not mandate certification",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements apply through MS4 permits for regulated communities. Montana has relatively few Phase II MS4-regulated jurisdictions given its rural character, but cities such as Billings, Missoula, and Great Falls operate MS4 programs with post-construction requirements. The construction MPDES permit itself requires final site stabilization (defined as uniform vegetative cover of ≥ 70% of the disturbed area or application of an equivalent permanent surface). Post-construction BMPs for long-term water quality control are generally addressed through local regulations.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the Construction General Permit MTR100000",
    notes: "Discharges must not cause or contribute to violations of Montana's water quality standards (ARM Title 17, Chapter 30), which include narrative standards requiring waters be free from silt, sediment, and other materials that would impair designated uses. Visual monitoring is required at each inspection. Sites discharging to Outstanding Resource Waters (ORW) — Montana has many high-quality cold-water fisheries — may be subject to prohibitions on non-stormwater discharges and enhanced BMP requirements. Montana's significant cold-water fisheries (trout streams, salmonid habitat) make sediment discharge a particularly sensitive issue.",
  },
  officialLinks: {
    agencyUrl: "https://deq.mt.gov/",
    permitApplicationUrl: "https://deq.mt.gov/water/assistance",
    regulationDocUrl: "https://deq.mt.gov/water/assistance",
  },
  lastVerified: "2026-03",
  notes: "Montana uses 'MPDES' (Montana Pollutant Discharge Elimination System) rather than 'NPDES' branding for its permits, reflecting its state-delegated authority under the federal Clean Water Act. The state's vast rural geography and significant agricultural and mining activities create unique stormwater dynamics. Construction near streams with active salmonid populations, wildlife corridors, or glacially-fed systems is particularly scrutinized. The 10-day NOI lead time is a concrete, specific requirement distinguishing Montana from states with vaguer 'before construction' language. MT DEQ's Water Protection Bureau handles permit issuance; the Construction Bureau and Local Government Center handle related local ordinance questions.",
};
