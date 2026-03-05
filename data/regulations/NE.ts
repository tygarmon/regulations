import { StateRegulation } from "../types";

export const NE: StateRegulation = {
  stateCode: "NE",
  stateName: "Nebraska",
  agency: "Nebraska Department of Environment and Energy",
  agencyAbbr: "NDEE",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (NER100000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre)",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to NDEE and permit coverage confirmed before construction begins. Nebraska requires a minimum 7-day waiting period after NOI submission before commencing land-disturbing activities, unless NDEE grants earlier authorization",
    applicationMethod: "Online submission via NDEE's eDMR/ePermitting system (available at deq.ne.gov); paper NOI forms are also accepted and must be mailed to NDEE's Lincoln office",
    fee: "No fee for initial coverage under the Construction General Permit NER100000; Nebraska does not charge a construction stormwater permit application fee",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required and must be prepared before submitting the NOI. The SWPPP must be kept on-site and made available to NDEE inspectors upon request. Nebraska does not require a professional engineer to prepare or certify the SWPPP as a matter of state regulation, though local jurisdictions or project owners may impose additional requirements. NDEE provides a SWPPP template and construction stormwater guidance on its website. The SWPPP must identify all potential pollutant sources and describe BMPs for each phase of construction.",
  },
  inspections: {
    frequency: "At least every 7 days and within 24 hours after a rainfall event of ≥ 0.25 inches in a 24-hour period. This 7-day inspection interval is more frequent than many states and reflects Nebraska's compliance focus. Inspections may be reduced to every 14 days if the site has reached final stabilization in some areas.",
    qualificationRequired: "No state-mandated inspector certification; inspections must be performed by qualified personnel with sufficient knowledge of stormwater pollution prevention principles, erosion and sediment control BMPs, and the site-specific SWPPP. NDEE does not operate a formal inspector certification program, but recommends industry certifications (CPESC, CESSWI) for personnel conducting inspections.",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements are primarily enforced through Phase II MS4 permits for regulated communities in Nebraska (including Lincoln, Omaha, and other regulated municipalities). The construction general permit requires final site stabilization before permit coverage can be terminated via a Notice of Termination (NOT). Long-term post-construction BMPs are addressed through local MS4 ordinances and, in some cases, through NDEE-approved long-term operation and maintenance agreements.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the Construction General Permit NER100000",
    notes: "Discharges must not cause or contribute to violations of Nebraska's water quality standards (Title 117 — Nebraska Surface Water Quality Standards), which include narrative criteria prohibiting materials that create aesthetically objectionable conditions or interfere with designated uses. Visual monitoring of all discharge points is required at every inspection. Nebraska's plains terrain and significant agricultural context mean sediment-laden runoff is a primary concern, particularly in watersheds already impaired for turbidity or siltation.",
  },
  officialLinks: {
    agencyUrl: "https://dee.ne.gov/",
    permitApplicationUrl: "https://dee.ne.gov/Permitting/Pages/Construction-Stormwater.aspx",
    regulationDocUrl: "https://dee.ne.gov/Permitting/Pages/Construction-Stormwater.aspx",
  },
  lastVerified: "2026-03",
  notes: "Nebraska's 7-day inspection interval is notably more frequent than the standard 14-day interval used by many states, reflecting a stricter compliance posture for construction sites. Nebraska also charges no permit fee, which, combined with its streamlined NOI process, makes it relatively low-burden administratively. NDEE was previously known as NDEQ (Nebraska Department of Environmental Quality) and was renamed when energy functions were merged in 2019 — older references may use the NDEQ abbreviation. Nebraska's vast agricultural landscape means many construction projects must coordinate with the Natural Resources Districts (NRDs), which have independent authority over erosion control and groundwater matters.",
};
