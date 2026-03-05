import { LocalRegulation } from "../../localTypes";

export const austin: LocalRegulation = {
  localCode: "austin",
  localName: "City of Austin",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Drainage Criteria Manual Authorization (site plan / grading permit)",
    submittalBody: "City of Austin Watershed Protection Department (WPD)",
    leadTime: "Variable — site plan approval required before grading permit issuance; plan review typically 2–6 weeks",
    fee: "Based on project size and impervious cover; grading permit fee schedule at AustinTexas.gov/BuildingPermits",
    applicationMethod: "Online via Austin Build + Connect (ABC) portal (abc.austintexas.gov); paper submittals accepted at Development Services Department",
  },
  waterQuality: {
    imperviousCoverLimit: "Varies by watershed: 15% in Barton Springs Zone (BSZ); 25% in Water Supply Rural (WSR); 40% in Water Supply Suburban (WSS); no citywide cap in urban watersheds (some Water Quality Transition Zones apply)",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "2-year and 100-year storm detention required for increases in impervious cover; water quality volume (WQv) capture required; bioretention, wet ponds, or cisterns typical",
    turbidityStandard: "No numeric NTU limit in local ordinance; discharges must comply with TCEQ TXR150000 and not cause erosion or visible turbidity in receiving creeks",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Erosion & Sedimentation Control (ESC) Plan, required as part of grading permit package",
    peStampRequired: true,
    notes: "ESC Plan must be prepared and sealed by a Licensed Professional Engineer (PE) or a Licensed State Land Surveyor for projects exceeding certain thresholds. The ESC Plan is reviewed by WPD prior to grading permit issuance. An Erosion Hazard Zone (EHZ) review is triggered for sites near creeks.",
  },
  inspections: {
    localRequirements: "City of Austin WPD conducts periodic site inspections separate from TCEQ. Inspections triggered by complaints or during storm events. Grading permit requires a final stabilization inspection before close-out.",
    qualificationRequired: "No additional city-specific certification beyond TCEQ requirements; however, the PE-of-record is responsible for ESC plan compliance",
  },
  specialZones: [
    {
      name: "Critical Water Quality Zone (CWQZ)",
      trigger: "Within 200 ft of the centerline of a creek with a drainage area ≥ 64 acres, or within the 100-year floodplain of larger creeks",
      restriction: "No impervious cover, no grading, no fill; only soft-surface trails and utility crossings allowed by variance",
    },
    {
      name: "Water Quality Transition Zone (WQTZ)",
      trigger: "100 ft beyond the outer edge of the CWQZ",
      restriction: "Reduced impervious cover allowed; water quality controls required; native vegetation buffer preferred",
    },
    {
      name: "Barton Springs Zone (BSZ) / Edwards Aquifer Contributing Zone",
      trigger: "Properties over or draining to the Edwards Aquifer recharge and contributing zones (roughly SW Austin and the Hill Country)",
      restriction: "Most stringent: 15% max impervious cover; 100% on-site retention of the 2-yr storm required; no hazardous materials storage; enhanced water quality controls; Save Our Springs (SOS) Ordinance applies",
    },
    {
      name: "Erosion Hazard Zone (EHZ)",
      trigger: "Within 100 ft of a creek or drainage feature subject to lateral erosion",
      restriction: "No development; structural erosion control required; bank stabilization plan may be required",
    },
    {
      name: "Floodplain",
      trigger: "Within FEMA-designated 100-year floodplain or City's more restrictive floodplain mapping",
      restriction: "No fill in floodway; compensatory storage required; floodplain development permit required from WPD",
    },
  ],
  designManual: {
    required: true,
    name: "City of Austin Drainage Criteria Manual (DCM)",
    url: "https://www.austintexas.gov/department/drainage-criteria-manual",
  },
  officialLinks: {
    agencyUrl: "https://www.austintexas.gov/department/watershed-protection",
    permitUrl: "https://abc.austintexas.gov/",
    designManualUrl: "https://www.austintexas.gov/department/drainage-criteria-manual",
  },
  lastVerified: "2025-01",
  notes: "Austin has some of the most complex local stormwater requirements in Texas, driven by the Save Our Springs (SOS) Ordinance protecting Barton Springs Pool and the Edwards Aquifer. Projects in the Barton Springs Zone face requirements that often exceed state standards. The dual-review system (WPD for water quality + Development Services for permits) requires careful coordination. Austin's impervious cover limits are enforced at the subdivision/site plan level and are among the most stringent of any major Texas city.",
};
