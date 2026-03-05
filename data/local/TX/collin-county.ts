import { LocalRegulation } from "../../localTypes";

export const collinCounty: LocalRegulation = {
  localCode: "collin-county",
  localName: "Collin County",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage / Land Disturbance Permit",
    submittalBody: "Collin County Engineering Department",
    leadTime: "10–15 business days typical",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit application, drainage study, and grading plan to Collin County Engineering Department at 2300 Bloomdale Rd., Suite 3100, McKinney, TX 75071",
  },
  waterQuality: {
    imperviousCoverLimit: "No county-wide impervious cover cap for unincorporated areas; post-construction controls required per TCEQ CGP for sites ≥1 acre",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development rates for 2-, 10-, and 100-year storm events per Collin County Criteria Manual for the Design of Flood Control and Drainage Facilities; detention facility must be maintained under a recorded maintenance agreement",
    turbidityStandard: "Comply with TCEQ TXR150000 construction effluent limits; no separate county numeric turbidity standard beyond TCEQ requirements",
  },
  swppp: {
    localPlanRequired: false,
    localPlanName: "N/A — TCEQ TXR150000 SWPPP satisfies county requirements",
    peStampRequired: false,
    notes: "Collin County does not require a separate local SWPPP beyond TCEQ TXR150000. However, drainage studies and engineering plans submitted with the county drainage permit must be prepared and stamped by a licensed Texas PE. Permit holders must maintain TCEQ SWPPP records on site throughout construction.",
  },
  inspections: {
    localRequirements: "Collin County Engineering Department may conduct inspections to verify compliance with approved drainage plans and stormwater controls. Final inspection required prior to permit closeout and acceptance of public drainage infrastructure.",
    qualificationRequired: "TCEQ-qualified inspector required per CGP; county does not impose additional local inspector certification requirements",
  },
  specialZones: [
    {
      name: "FEMA Special Flood Hazard Area (SFHA)",
      trigger: "Any development within the mapped 100-year floodplain",
      restriction: "Floodplain development permit required from Collin County; no net fill without compensatory storage; finished floor elevation requirements apply",
    },
    {
      name: "Lake Lavon Watershed",
      trigger: "Development within the drainage basin contributing to Lake Lavon (USACE reservoir)",
      restriction: "USACE may assert jurisdiction over wetlands and waterways; additional Section 404/401 permits may be required; coordinate with USACE Fort Worth District",
    },
    {
      name: "East Fork Trinity River Corridor",
      trigger: "Development adjacent to or within the East Fork Trinity River floodplain",
      restriction: "Enhanced flood control and erosion protection requirements; coordinate with North Texas Municipal Water District (NTMWD) for regional drainage impacts",
    },
  ],
  designManual: {
    required: true,
    name: "Collin County Criteria Manual for the Design of Flood Control and Drainage Facilities",
    url: "https://www.collincountytx.gov/engineering/Pages/default.aspx",
  },
  officialLinks: {
    agencyUrl: "https://www.collincountytx.gov/engineering/Pages/default.aspx",
    permitUrl: "https://www.collincountytx.gov/engineering/Pages/default.aspx",
    designManualUrl: "https://www.collincountytx.gov/engineering/Pages/default.aspx",
  },
  lastVerified: "2026-03",
  notes: "Collin County is one of the fastest-growing counties in the United States. County regulations apply only to unincorporated areas; incorporated cities (Plano, McKinney, Frisco, Allen, etc.) have their own stormwater programs. Projects in ETJs should confirm applicable jurisdiction. The North Texas Municipal Water District (NTMWD) manages regional water supply infrastructure across the county.",
};
