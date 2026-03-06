import { StateRegulation } from "../types";

export const NV: StateRegulation = {
  stateCode: "NV",
  stateName: "Nevada",
  agency: "Nevada Division of Environmental Protection",
  agencyAbbr: "NDEP",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Nevada Pollutant Discharge Elimination System (NPDES) General Permit for Stormwater Discharges Associated with Construction Activity (NVR100000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre). Note: Nevada is a predominantly arid state, and many small sites that would not generate discharge in wetter climates are still required to obtain coverage.",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to NDEP at least 30 days before construction begins. This 30-day lead time is longer than most states and is a notable Nevada-specific requirement.",
    applicationMethod: "Online submission via NDEP's eBusiness portal (ebusiness.nv.gov) for NOI and permit management; paper forms also available. The eBusiness portal handles NOI submission, permit fee payment, Notice of Termination, and annual reporting.",
    fee: "$500 for projects disturbing < 5 acres; $1,000 for projects disturbing ≥ 5 acres. Fees are payable at the time of NOI submission through the NDEP eBusiness portal.",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) must be developed before the NOI is submitted and must be completed before any land disturbance begins. Nevada does not require a professional engineer to prepare or stamp the SWPPP under state general permit conditions, but given Nevada's unique arid and desert conditions, NDEP strongly recommends qualified preparers familiar with desert BMP effectiveness. NDEP provides a SWPPP template tailored to Nevada conditions, including guidance on managing infrequent but intense desert storm events (monsoon-season flash flooding) and wind erosion (dust control). The SWPPP must address both water-borne and wind-borne sediment transport, which is a Nevada-specific requirement not commonly found in other state SWPPPs.",
  },
  inspections: {
    frequency: "At least every 14 days and within 24 hours after any precipitation event (including thunderstorms and monsoon events) that results in a discharge from the site. Given Nevada's arid climate, sites may experience long dry periods between rain events; inspections must still occur every 14 days regardless of precipitation. During the monsoon season (typically July–September in southern Nevada), increased vigilance is required due to the potential for intense, short-duration storm events.",
    qualificationRequired: "No state-mandated inspector certification program; inspections must be performed by qualified personnel who are knowledgeable in the principles and practice of erosion and sediment control and who can assess site conditions and implement corrective action. NDEP does not require formal certification, but recommends that inspectors be familiar with arid-region stormwater BMPs and desert construction practices, which differ substantially from humid-climate approaches.",
    rainTrigger: "Within 24 hours of any precipitation event (including monsoon events) that results in a discharge from the site (discharge-based trigger; no fixed inch threshold)",
    acceptedCertifications: "No mandatory state-specific cert; CISEC, CPESC strongly preferred; NDEP-approved training required; inspector must understand arid-region and monsoon-season BMP requirements",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements apply primarily through Phase II MS4 permits for regulated communities, including the Clark County District (Las Vegas metro area), City of Las Vegas, City of Reno, Washoe County, and other regulated MS4s. Clark County and the Las Vegas Valley Water District have adopted detailed regional stormwater management programs. The construction general permit requires final site stabilization before permit termination; in Nevada's arid climate, achieving 70% vegetative cover (the standard EPA threshold) may require alternative stabilization methods such as gravel mulch, erosion control blankets, or rock armoring, which NDEP permits as equivalent to vegetative stabilization for arid sites.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the Construction General Permit NVR100000",
    notes: "Discharges must not cause or contribute to violations of Nevada's water quality standards (NAC 445A), which include narrative standards requiring waters be free from substances causing nuisance conditions or aesthetically objectionable characteristics. Visual monitoring is required at each inspection event. Nevada's desert environment presents unique water quality challenges: ephemeral streams and desert washes that only flow during storm events are regulated as waters of the United States in many cases, and discharges to these systems must comply with permit conditions even when the receiving water is typically dry. Projects near Lake Tahoe in the Truckee Meadows are subject to significantly more stringent turbidity and water quality requirements under the Tahoe Regional Planning Agency (TRPA) jurisdiction.",
  },
  officialLinks: {
    agencyUrl: "https://ndep.nv.gov/",
    permitApplicationUrl: "https://ndep.nv.gov/water/water-pollution-control/permitting/stormwater-discharge-permits/construction-sites-greater-than-1-acre",
    regulationDocUrl: "https://ndep.nv.gov/water/water-pollution-control/permitting/stormwater-discharge-permits/construction-sites-greater-than-1-acre",
  },
  lastVerified: "2026-03",
  notes: "Nevada's 30-day NOI lead time is among the longest in the country and is a critical planning consideration for contractors. Nevada uses 'NPDES' branding (not a state-specific acronym) reflecting its delegated authority. The state's extreme arid climate creates unique challenges: conventional humid-climate BMPs (silt fences, straw wattles) perform very differently in desert conditions, and NDEP's guidance specifically addresses desert-adapted BMPs. Two very different climate regimes exist within the state — the arid Mojave (Las Vegas) and the semi-arid Great Basin / Sierra Nevada foothills (Reno/Tahoe) — requiring different BMP approaches. The Tahoe Basin carries special requirements under TRPA authority, including stringent turbidity standards that are among the tightest in the nation. Projects in Clark County should also reference the Southern Nevada Regional Plan for stormwater management.",
};
