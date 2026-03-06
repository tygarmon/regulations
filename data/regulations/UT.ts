import { StateRegulation } from "../types";

export const UT: StateRegulation = {
  stateCode: "UT",
  stateName: "Utah",
  agency: "Utah Department of Environmental Quality, Division of Water Quality",
  agencyAbbr: "UDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "UPDES General Permit for Stormwater Discharges Associated with Construction Activity (Permit No. UTR300000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre); Utah administers this under its own UPDES (Utah Pollutant Discharge Elimination System) program, which is the state equivalent of NPDES",
    noticePeriod: "NOI must be submitted to UDEQ Division of Water Quality and acknowledged before land-disturbing activity begins; Utah requires the NOI to be submitted at least 7 business days before construction begins; construction cannot commence until the permittee receives a confirmation of permit coverage from UDEQ",
    applicationMethod: "Online via UDEQ's Utah Environmental Portal (UEP) at uep.utah.gov; paper NOI forms are also accepted; the UEP portal is the preferred and most efficient method for NOI submission and permit management",
    fee: "One-time permit registration fee based on disturbed acreage: sites 1 to < 5 acres: $166; sites 5 to < 10 acres: $357; sites 10 to < 25 acres: $611; sites 25 to < 50 acres: $854; sites 50 to < 75 acres: $1,090; sites ≥ 75 acres: $1,334; fees are established under Utah Admin. Code R317-8 and subject to periodic revision — verify current amounts with UDEQ",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required for all sites covered under UTR300000. The SWPPP must be prepared and implemented before land disturbance begins. No Professional Engineer stamp is required for standard SWPPP preparation. UDEQ provides SWPPP templates and technical guidance on its website. The SWPPP must be kept on-site, available to UDEQ inspectors, and updated as site conditions change. Utah's permit requires that the SWPPP identify specific BMPs for each phase of construction and include a site map with drainage patterns, BMP locations, and discharge points.",
  },
  inspections: {
    frequency: "At least once every 14 calendar days during active construction and within 24 hours (or by the end of the next business day) after any storm event producing measurable precipitation (≥ 0.25 inches in some references; verify with current UTR300000 permit text); during periods of inactivity or after site stabilization, monthly inspections are typically required until the NOT is filed",
    qualificationRequired: "No specific state-issued certification is required under UTR300000; inspections must be conducted by a 'qualified person' with knowledge of stormwater BMPs and permit requirements; UDEQ recommends training through programs such as CPESC (Certified Professional in Erosion and Sediment Control) or state-sponsored stormwater training, but these are not mandated by the general permit",
    rainTrigger: "Within 24 hours (or by end of next business day) of any storm event producing measurable precipitation; current UTR300000 permit text should be verified for exact threshold",
    acceptedCertifications: "No state-specific cert required; inspector must be a 'qualified person'; CPESC, CESSWI accepted; UDEQ-sponsored stormwater training recommended",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under UTR300000 and through Utah's Phase II MS4 permit program for regulated municipalities. Final stabilization (defined as ≥ 70% uniform vegetative cover or equivalent permanent non-vegetative stabilization) must be achieved site-wide before a Notice of Termination (NOT) is submitted. Permanent post-construction BMPs must be identified in the SWPPP and maintained long-term by the property owner. UDEQ's Phase II MS4 program requires regulated MS4 communities to adopt post-construction stormwater ordinances and design standards. Utah's dry climate presents unique challenges for vegetative cover establishment, and UDEQ provides guidance on arid-region stabilization alternatives.",
  },
  dischargeStandards: {
    turbidityLimit: "No universal numeric NTU turbidity limit in UTR300000; narrative water quality standards apply; discharges to some sensitive receiving waters may trigger numeric criteria",
    notes: "Utah's water quality standards (Utah Admin. Code R317-2) include narrative turbidity standards requiring that discharges not cause or contribute to violations of applicable water quality criteria. For waters classified as Tier 3 (Outstanding National Resource Waters) or waters with specific turbidity criteria, numeric limits may apply. Utah's arid environment means many construction sites discharge to ephemeral streams; BMP requirements still apply when such drainages connect to jurisdictional waters of the U.S. Visual monitoring of all stormwater discharges is required at each inspection event. Discharge sampling for turbidity may be required for sites near impaired or sensitive waters.",
  },
  officialLinks: {
    agencyUrl: "https://deq.utah.gov/",
    permitApplicationUrl: "https://deq.utah.gov/water-quality/updes-stormwater-construction-activities",
    regulationDocUrl: "https://deq.utah.gov/water-quality/updes-stormwater-construction-activities",
  },
  lastVerified: "2026-03",
  notes: "Utah operates its own state UPDES (Utah Pollutant Discharge Elimination System) program, which is the state equivalent of the federal NPDES program. Utah's general permit is numbered UTR300000 (not UTR100000 as some sources suggest). The tiered permit fee structure based on disturbed acreage is a notable feature. Utah's arid climate creates unique challenges: vegetative stabilization may be difficult to achieve, and UDEQ provides guidance on non-vegetative final stabilization alternatives appropriate for the Great Basin and desert regions. Many construction projects in Utah encounter issues with dust control that intersect with stormwater SWPPP requirements. The Utah Environmental Portal (UEP) is the state's centralized permitting system. Projects near Great Salt Lake, Utah Lake, or sensitive wetlands may face heightened scrutiny. Utah's MS4 program is administered primarily through Salt Lake City, Salt Lake County, and other urbanized areas along the Wasatch Front.",
};
