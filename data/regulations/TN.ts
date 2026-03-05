import { StateRegulation } from "../types";

export const TN: StateRegulation = {
  stateCode: "TN",
  stateName: "Tennessee",
  agency: "Tennessee Department of Environment and Conservation",
  agencyAbbr: "TDEC",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. TNR100000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre); all sites must also comply with Tennessee's Construction General Permit and the Stormwater Management Act",
    noticePeriod: "NOI must be submitted to TDEC at least 7 calendar days before commencement of land-disturbing activity; construction may not begin until the 7-day waiting period expires or TDEC confirms coverage; for sites discharging to waters on the 303(d) impaired waters list, TDEC may require additional review time",
    applicationMethod: "Online via TDEC's myTDEC online portal (available through the TDEC website); paper NOI submission is also accepted; annual fees and permit renewals managed through the same portal",
    fee: "Annual permit fees apply based on acreage: sites 1–5 acres: $52/year; sites > 5 acres: $52 base plus $10.40 per additional acre above 5, up to a maximum annual fee of $500; fees are set under Tennessee's Water Quality Control Act and may be updated — verify current fee schedule with TDEC",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required for all sites covered under TNR100000 and must be prepared before land-disturbing activity begins. No Professional Engineer stamp is required for standard construction SWPPP preparation. TDEC provides a SWPPP template and technical guidance manual on its website. The SWPPP must be kept on-site and made available to TDEC inspectors upon request. Tennessee also requires compliance with the Tennessee Erosion Prevention and Sediment Control (EPSC) handbook, which is the primary BMP reference for the state. Sites within MS4 jurisdictions must also comply with local SWPPP and EPSC requirements.",
  },
  inspections: {
    frequency: "At least once every 14 calendar days during active construction and within 24 hours after any storm event producing ≥ 0.5 inches of precipitation; inspections must document BMP conditions, discharges, and corrective actions; during periods of extended inactivity, at least monthly inspections are required",
    qualificationRequired: "Inspector must be a 'qualified personnel' with training in construction stormwater management principles; Tennessee does not require a specific state license for construction site inspectors under TNR100000, but TDEC recommends certifications such as CPESC or completion of a recognized stormwater training program; municipalities under Phase II MS4 permits may require additional inspector qualifications under local ordinances",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under TNR100000 and Tennessee's Phase II MS4 permit program. Final stabilization requires ≥ 70% uniform vegetative cover or equivalent permanent stabilization before a Notice of Termination (NOT) is filed. TDEC's MS4 program requires regulated municipalities to establish and enforce post-construction stormwater management standards. Tennessee's Stormwater Management Act (T.C.A. § 69-3-1401 et seq.) requires post-construction controls for development projects exceeding applicable thresholds. TDEC's Stormwater Management Guidance Manual provides design standards and BMP references for permanent post-construction controls.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit in TNR100000; narrative water quality standards apply; however, Tennessee has a numeric turbidity criterion of 10 NTU above background for certain high-quality streams",
    notes: "Tennessee water quality standards (Tennessee Rule 0400-40-03) include a narrative turbidity standard and, for Exceptional Tennessee Waters and certain trout-designated streams, a numeric increase limit of no more than 10 NTU above natural background. Sites discharging to such waters must implement heightened BMPs. The general permit does not establish a universal numeric turbidity effluent limit, but narrative standards prohibit discharges that cause or contribute to violations of applicable water quality criteria. Visual monitoring of discharges is required at each inspection event.",
  },
  officialLinks: {
    agencyUrl: "https://www.tn.gov/environment.html",
    permitApplicationUrl: "https://www.tn.gov/environment/program-areas/wpc-water-pollution-control/storm-water/construction-stormwater-permits.html",
    regulationDocUrl: "https://www.tn.gov/environment/program-areas/wpc-water-pollution-control/storm-water/construction-stormwater-permits.html",
  },
  lastVerified: "2026-03",
  notes: "Tennessee's construction stormwater program is notable for its annual permit fee structure, which is relatively unusual among delegated states — most states either charge a one-time NOI fee or no fee at all. TDEC administers the program through its Division of Water Resources. Tennessee's Erosion Prevention and Sediment Control (EPSC) Handbook (Blue Book) is the required BMP reference and is incorporated by reference into the general permit. Sites near Exceptional Tennessee Waters (ETW) or Wild and Scenic rivers must implement heightened BMPs and may need individual permit review. Tennessee is also unusual in having a partial numeric turbidity criterion (10 NTU above background) for certain high-quality classified waters, which can affect construction sites near trout streams and other sensitive waters. TDEC conducts active site inspections and can issue notices of violation with penalties for non-compliance.",
};
