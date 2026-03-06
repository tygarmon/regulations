import { StateRegulation } from "../types";

export const IL: StateRegulation = {
  stateCode: "IL",
  stateName: "Illinois",
  agency: "Illinois Environmental Protection Agency",
  agencyAbbr: "IEPA",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges from Construction Site Activities (Permit No. ILR10)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); Chicago Metropolitan Agency for Planning (CMAP) area may have additional requirements through local MS4 permits",
    noticePeriod: "NOI must be submitted to IEPA and permit coverage must be obtained before construction begins; IEPA typically processes NOIs within 30 days; applicants should plan accordingly and submit at least 30 days in advance",
    applicationMethod: "Online via Illinois EPA's online NOI submission system (MyIEPA / IEPA online permitting); paper NOI also accepted; permit number ILR10 general permit coverage",
    fee: "$700 NOI permit fee for sites disturbing < 5 acres; $1,000 for sites disturbing ≥ 5 acres; fees paid at time of NOI submission",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "Illinois requires a Stormwater Pollution Prevention Plan (SWPPP) to be prepared and implemented before construction begins. No PE stamp is required for the SWPPP itself, but it must be prepared by a 'Qualified Professional' — someone with documented knowledge and training in stormwater management. IEPA provides a SWPPP template and guidance in its construction stormwater permit guidance document. The SWPPP must include a site map, description of BMPs, maintenance schedule, and inspection log. Illinois also requires that the SWPPP address the Illinois Urban Manual BMPs.",
  },
  inspections: {
    frequency: "At least every 7 calendar days and within 24 hours after a storm event producing ≥ 0.5 inches of rainfall over a 24-hour period; inspections must be documented on forms that are retained on-site and available to IEPA",
    qualificationRequired: "Inspections must be performed by a 'Qualified Inspector' — defined as an individual who has completed an approved stormwater inspector training program; Illinois does not have a mandatory state-specific certification but recommends CISEC (Certified Inspector of Sediment and Erosion Control) or CPESC; some MS4 jurisdictions in the Chicago area require certified inspectors",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "IEPA-approved training OR CPESC OR licensed PE required; state-approved training is the primary pathway; CISEC also accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under the ILR10 permit and through Phase II MS4 municipal ordinances. Illinois EPA's permit requires that post-construction BMPs be identified in the SWPPP and installed before final stabilization. The Illinois Urban Manual (IUM) provides design standards for permanent stormwater management facilities. Many Illinois counties and municipalities — particularly in the Chicago metro area — have adopted rigorous local stormwater ordinances (e.g., through the Metropolitan Water Reclamation District of Greater Chicago) that may impose detention, retention, and water quality requirements more stringent than the state baseline.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit in the general permit ILR10; narrative standard applies — discharges must not cause or contribute to violations of Illinois water quality standards",
    notes: "Illinois water quality standards (35 Ill. Admin. Code Part 302) include narrative turbidity and aesthetics standards. Illinois has designated Outstanding Resource Waters (ORW) and impaired water bodies listed on the 303(d) list where additional effluent limitations may apply. Discharges to waterways used for drinking water supply or listed as impaired for turbidity may face individual permit requirements with numeric limits. Visual monitoring at all discharge points is required after qualifying storm events.",
  },
  officialLinks: {
    agencyUrl: "https://epa.illinois.gov/",
    permitApplicationUrl: "https://epa.illinois.gov/topics/water-quality/stormwater/construction.html",
    regulationDocUrl: "https://epa.illinois.gov/topics/water-quality/stormwater/construction.html",
  },
  lastVerified: "2025-01",
  notes: "Illinois has a notably higher permit fee structure compared to most Midwestern states and requires more frequent inspections (every 7 days vs. the common 14-day cycle). The ILR10 permit is one of the most detailed state construction stormwater general permits in the Midwest. Illinois overlaps significantly with local MS4 stormwater requirements — particularly in Cook, DuPage, Lake, Kane, McHenry, and Will counties in the Chicago metro, where local floodplain and stormwater ordinances from municipalities and the Metropolitan Water Reclamation District of Greater Chicago (MWRDGC) apply in addition to the state NPDES permit. The Illinois Urban Manual (IUM) is the primary BMP reference document for construction and post-construction stormwater management. Permit ILR10 was most recently reissued in 2020.",
};
