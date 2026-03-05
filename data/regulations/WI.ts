import { StateRegulation } from "../types";

export const WI: StateRegulation = {
  stateCode: "WI",
  stateName: "Wisconsin",
  agency: "Wisconsin Department of Natural Resources",
  agencyAbbr: "WDNR",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Wisconsin Pollutant Discharge Elimination System (WPDES) Construction Site Stormwater General Permit (WI-S067831)",
    threshold: "≥ 1 acre of land disturbance; also applies to sites < 1 acre that are part of a larger common plan of development or sale disturbing ≥ 1 acre; Wisconsin additionally requires a Notice of Intent for sites disturbing ≥ 4,000 sq ft in certain MS4 areas under local ordinance (not state permit threshold)",
    noticePeriod: "Notice of Intent (NOI) must be submitted to WDNR at least 14 days before land disturbance begins; permit coverage is not automatic — operators must receive written authorization from WDNR before disturbing land",
    applicationMethod: "Online via WDNR's Surface Water Data Viewer / eBusiness portal (DNR Online Services); paper NOI also available; NOI must include the stormwater pollution prevention plan (SWPPP) certification",
    fee: "No state-level NOI fee for the construction general permit as of the most recent permit term; local municipalities may charge separate fees under local stormwater ordinances",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Stormwater Pollution Prevention Plan (SWPPP) is required and must be prepared before any land disturbance. WDNR provides a comprehensive SWPPP template and guidance. The SWPPP must be prepared by a Qualified Stormwater Management Inspector (QSMI) or a professional with equivalent qualifications. No PE stamp is required for the SWPPP itself under the general permit. The SWPPP must be kept on-site and updated when site conditions change. Wisconsin specifically requires the SWPPP to include a site map, description of BMPs, and maintenance schedules.",
  },
  inspections: {
    frequency: "At least once every 7 calendar days and within 24 hours of a rain event of 0.5 inches or greater within a 24-hour period; if site is undergoing final stabilization, reduced frequency of once per month is allowed; inspection records must be retained for 3 years after permit termination",
    qualificationRequired: "Inspections must be conducted by a Qualified Stormwater Management Inspector (QSMI) — Wisconsin requires completion of a WDNR-approved training program. The WDNR partners with organizations such as the University of Wisconsin-Extension for QSMI training. Certification must be maintained through periodic re-training. The QSMI must sign off on all inspection reports.",
  },
  postConstruction: {
    required: true,
    notes: "Wisconsin's NR 151 (Runoff Management) and NR 216 (WPDES Stormwater Permits) establish post-construction stormwater management requirements. Construction sites disturbing ≥ 1 acre must implement post-construction practices to manage the water quality volume (WQv) — the volume of runoff from the 90th percentile 24-hour storm event. MS4 municipalities must adopt local post-construction stormwater management programs under NR 216. Infiltration is the preferred method; detention and water quality treatment are alternatives. Peak flow control is also required in many cases.",
  },
  dischargeStandards: {
    turbidityLimit: "No specific numeric NTU limit in the construction general permit; discharges must not cause or contribute to violations of Wisconsin water quality standards (NR 102–NR 106)",
    notes: "Wisconsin water quality standards contain narrative criteria for turbidity and suspended solids. Wisconsin is notable for its Outstanding Resource Waters (ORW) and Exceptional Resource Waters (ERW) designations — discharges to these waters are subject to nondegradation review and may require stricter controls. Visual monitoring for turbidity is required during inspections. Projects near trout streams or designated coldwater communities face enhanced scrutiny.",
  },
  officialLinks: {
    agencyUrl: "https://dnr.wisconsin.gov/",
    permitApplicationUrl: "https://dnr.wisconsin.gov/topic/Stormwater/construction",
    regulationDocUrl: "https://docs.legis.wisconsin.gov/code/admin_code/nr/100/151",
  },
  lastVerified: "2025-01",
  notes: "Wisconsin operates the WPDES program under EPA delegation. A key state-specific feature is the mandatory Qualified Stormwater Management Inspector (QSMI) certification — one of the more formalized state inspector certification programs in the Midwest. The state's NR 151 regulations on runoff management are comprehensive and cover both construction and post-construction phases. Wisconsin also has a robust erosion control program: sites disturbing soil must comply with NR 151.11 (erosion control performance standards) requiring 90% reduction in upland erosion. Local MS4 jurisdictions (Milwaukee, Madison, etc.) layer additional requirements on top of state minimums.",
};
