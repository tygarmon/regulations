import { LocalRegulation } from "../../localTypes";

export const montgomeryCounty: LocalRegulation = {
  localCode: "montgomery-county",
  localName: "Montgomery County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Montgomery County Drainage Permit",
    submittalBody: "Montgomery County Engineering Department, 501 N. Thompson St., Suite 405, Conroe, TX 77301",
    leadTime: "4–8 weeks depending on project complexity and completeness of submittal",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit paper or electronic application to the Montgomery County Engineering Department. Drainage plans must be signed and sealed by a licensed Texas PE.",
  },
  waterQuality: {
    imperviousCoverLimit: "No countywide blanket limit; site-specific detention requirements triggered by increases in impervious cover. Local MUDs and HOA deed restrictions may impose additional limits.",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development conditions for the 2-, 10-, 25-, and 100-year storm events per the Montgomery County Drainage Criteria Manual (post-Harvey 2019 edition). Freeboard and emergency spillway requirements apply to all detention basins.",
    turbidityStandard: "Disturbed areas must comply with TPDES Construction General Permit (TXR150000) effluent limits. No separate county turbidity numeric standard; SWPPP BMPs and weekly inspections required per state CGP.",
  },
  swppp: {
    localPlanRequired: false,
    localPlanName: "N/A — State TPDES SWPPP satisfies local requirement",
    peStampRequired: false,
    notes: "Montgomery County does not require a locally separate SWPPP beyond the state TPDES Construction General Permit SWPPP. However, the drainage permit application must include an erosion and sediment control plan consistent with the approved drainage plan. PE stamp required on drainage/grading plans submitted for the county drainage permit.",
  },
  inspections: {
    localRequirements: "Montgomery County Engineering Department conducts drainage inspections during construction and a final inspection prior to release of the drainage permit. Contractor must request each inspection with at least 48 hours notice. County may require third-party inspection reports for larger projects (typically >10 acres). As-built survey confirming detention basin volumes must be submitted prior to final release.",
    qualificationRequired: "Inspections performed by or under the direct supervision of the county's licensed engineers. Third-party inspectors must be a licensed Texas PE or registered professional land surveyor (RPLS) where as-built surveys are required.",
  },
  specialZones: [
    {
      name: "San Jacinto River Watershed / Post-Harvey Drainage Improvement Zone",
      trigger: "Any development in the San Jacinto River watershed, West Fork San Jacinto, East Fork San Jacinto, Spring Creek, or Caney Creek sub-watersheds that increases impervious cover or modifies drainage patterns.",
      restriction: "Enhanced detention requirements adopted after Hurricane Harvey (August 2017). Detention basins must attenuate peak flows to pre-development levels for all storms up to the 100-year event. Additional freeboard (minimum 1 ft) required. Coordination with San Jacinto River Authority (SJRA) required for projects discharging to SJRA jurisdictional channels or Lake Conroe.",
    },
    {
      name: "FEMA Special Flood Hazard Area (AE, AO, and X-Shaded Zones)",
      trigger: "Any development within FEMA-mapped floodplain boundaries on the current Montgomery County FIRM panels.",
      restriction: "Floodplain development permit required from the Montgomery County Floodplain Administrator. Lowest floor elevation must be at or above BFE plus minimum freeboard per local ordinance. No net fill in the 100-year floodplain without compensatory storage.",
    },
    {
      name: "Municipal Utility District (MUD) Overlay",
      trigger: "Development within any of the numerous MUDs in Montgomery County.",
      restriction: "MUD infrastructure standards and approved engineering plans required in addition to county drainage permit. MUD board approval may be needed for drainage facilities to be dedicated to the MUD.",
    },
  ],
  designManual: {
    required: true,
    name: "Montgomery County Drainage Criteria Manual (2019 Post-Harvey Edition)",
    url: "https://www.mctx.org/departments/engineering/drainage",
  },
  officialLinks: {
    agencyUrl: "https://www.mctx.org/departments/engineering",
    permitUrl: "https://www.mctx.org/departments/engineering/drainage",
    designManualUrl: "https://www.mctx.org/departments/engineering/drainage",
  },
  lastVerified: "2026-03",
  notes: "Montgomery County significantly updated its Drainage Criteria Manual following Hurricane Harvey (August 2017), which caused catastrophic flooding throughout the county. The 2019 revision tightened detention standards and introduced more stringent freeboard requirements. The Woodlands Township (a Special Purpose District within Montgomery County) maintains supplemental development standards — see the-woodlands.ts for details. Projects near Lake Conroe require additional coordination with the San Jacinto River Authority (SJRA).",
};
