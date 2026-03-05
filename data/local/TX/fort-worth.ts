import { LocalRegulation } from "../../localTypes";

export const fortWorth: LocalRegulation = {
  localCode: "fort-worth",
  localName: "City of Fort Worth",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "City of Fort Worth Grading Permit + Stormwater Management Plan Approval",
    submittalBody: "City of Fort Worth Development Services, Stormwater Management Division",
    leadTime: "Plan review: 2–4 weeks standard; Trinity River / Clearfork projects may take longer due to USACE coordination",
    fee: "Grading permit fee based on project size; fee schedule at FortWorthTexas.gov/Development",
    applicationMethod: "Online via ForTWorks development portal; paper submittals accepted at Development Services offices",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; water quality controls required per Fort Worth Stormwater Management Design Standards Manual",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required for net increase in peak runoff; must attenuate to pre-development 100-year storm rates; Fort Worth Design Standards require engineered detention for developments over 1 acre of new impervious cover",
    turbidityStandard: "No local numeric NTU limit; TCEQ TXR150000 narrative standard applies; ESC plan required with grading permit",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ + Stormwater Management Plan (SMP) required for local permit",
    peStampRequired: true,
    notes: "Drainage and stormwater management plans must be prepared and sealed by a Texas-licensed PE. Fort Worth requires a Stormwater Management Plan (SMP) as part of the grading permit package. Projects near the Trinity River or Clearfork must coordinate with the USACE and may require Section 404 permits.",
  },
  inspections: {
    localRequirements: "City of Fort Worth Development Services conducts grading and drainage inspections. Final inspection required before Certificate of Occupancy. Projects near Trinity River may be inspected by USACE.",
    qualificationRequired: "No additional local certification beyond TCEQ requirements; PE-of-record responsible for compliance",
  },
  specialZones: [
    {
      name: "Trinity River / Clearfork Corridor",
      trigger: "Within FEMA floodplain of the Trinity River, West Fork, or Clear Fork of the Trinity River",
      restriction: "USACE Section 404/10 permit may be required; Fort Worth floodplain development permit required; levee setbacks enforced where applicable; Trinity River Vision Authority coordinates major projects",
    },
    {
      name: "FEMA Floodplain / Floodway",
      trigger: "Within FEMA-mapped 100-year floodplain (Zone AE) or floodway",
      restriction: "No fill in floodway; compensatory storage required in flood zone; City floodplain development permit required",
    },
    {
      name: "Eagle Mountain Lake / Benbrook Lake Watershed",
      trigger: "Properties draining to Eagle Mountain Lake or Benbrook Lake (Tarrant County reservoirs)",
      restriction: "Additional water quality protections may apply near public water supply reservoirs; coordinate with TRWD (Tarrant Regional Water District)",
    },
  ],
  designManual: {
    required: true,
    name: "City of Fort Worth Stormwater Management Design Standards Manual",
    url: "https://www.fortworthtexas.gov/departments/tpw/stormwater",
  },
  officialLinks: {
    agencyUrl: "https://www.fortworthtexas.gov/departments/development-services",
    permitUrl: "https://www.fortworthtexas.gov/departments/development-services/permits",
    designManualUrl: "https://www.fortworthtexas.gov/departments/tpw/stormwater",
  },
  lastVerified: "2025-01",
  notes: "Fort Worth's stormwater program is primarily driven by Trinity River watershed requirements and the city's rapid growth on its western and northern edges. The Trinity River Vision Authority (TRWD) is a major stakeholder for projects near the river. Fort Worth's requirements are generally less restrictive than Austin or San Antonio but more structured than suburban Tarrant County municipalities. Coordination with Tarrant Regional Water District (TRWD) is often required for projects near public water supply reservoirs.",
};
