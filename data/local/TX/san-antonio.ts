import { LocalRegulation } from "../../localTypes";

export const sanAntonio: LocalRegulation = {
  localCode: "san-antonio",
  localName: "City of San Antonio / Bexar County",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "City of San Antonio Stormwater Permit + Edwards Aquifer Protection Program (EAPP) Review (where applicable)",
    submittalBody: "City of San Antonio Development Services Department (DSD); San Antonio River Authority (SARA) for river-adjacent projects; Edwards Aquifer Authority (EAA) for recharge/contributing zone sites",
    leadTime: "DSD plan review: 2–6 weeks; EAA permit review: 30–60 days for projects in Recharge Zone",
    fee: "City permit fee based on project size; EAA Protection Program review fee: $500–$2,000+ depending on acreage and zone",
    applicationMethod: "City: AMANDA online permitting portal (cosagis.com); EAA: paper application to EAA offices",
  },
  waterQuality: {
    imperviousCoverLimit: "Recharge Zone: 15% max impervious cover (EAA rule); Contributing Zone: 30% max in some subwatersheds; Urban areas outside protected zones: no citywide cap but water quality controls required",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required per SARA Drainage Criteria Manual for 2-year and 100-year storms; Recharge Zone sites must demonstrate 100% on-site infiltration of the 100-year storm with no surface discharge in some areas",
    turbidityStandard: "No local numeric NTU limit; compliance with Edwards Aquifer Protection Program water quality standards required; TCEQ TXR150000 narrative standard applies",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ + City Erosion Control Plan required as part of grading permit",
    peStampRequired: true,
    notes: "All drainage and erosion control plans must be prepared and sealed by a Texas-licensed PE. Projects in the Edwards Aquifer Recharge Zone must also comply with EAA rules prohibiting certain chemicals, materials, and activities. SARA reviews drainage plans for projects near the San Antonio River and its tributaries.",
  },
  inspections: {
    localRequirements: "City DSD inspects grading and drainage installations. SARA inspects permitted work near river corridor. EAA may conduct compliance inspections for Recharge Zone activities.",
    qualificationRequired: "PE-of-record responsible for compliance; no additional local certification beyond TCEQ requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone",
      trigger: "Properties overlying the Edwards Aquifer Recharge Zone (visible on EAA maps; generally north and northwest of San Antonio over the Balcones Fault Zone)",
      restriction: "15% max impervious cover; 100% on-site storm retention often required; no hazardous material storage above ground; enhanced spill containment; EAA permit required; most restrictive zone in the San Antonio area",
    },
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Upstream of the Recharge Zone; drainage flows onto the recharge zone",
      restriction: "30% max impervious cover in sensitive subwatersheds; water quality controls required; Best Management Practices (BMPs) must prevent pollutant loading to the aquifer",
    },
    {
      name: "SARA River Corridor / Greenway",
      trigger: "Within San Antonio River Authority jurisdiction — typically within or adjacent to the San Antonio River and tributary greenways",
      restriction: "SARA permit required; greenway setback rules apply; bank stabilization standards; no fill in floodway",
    },
    {
      name: "FEMA Floodplain (Special Flood Hazard Area)",
      trigger: "Within FEMA-mapped 100-year floodplain",
      restriction: "No fill in floodway; City floodplain development permit required; substantial improvement triggers full compliance upgrade",
    },
  ],
  designManual: {
    required: true,
    name: "San Antonio River Authority (SARA) Drainage Criteria Manual + City of San Antonio Stormwater Design Guide",
    url: "https://www.sara-tx.org/flood-management/drainage-criteria-manual/",
  },
  officialLinks: {
    agencyUrl: "https://www.sanantonio.gov/DSD",
    permitUrl: "https://www.sanantonio.gov/DSD/Permits",
    designManualUrl: "https://www.sara-tx.org/flood-management/drainage-criteria-manual/",
  },
  lastVerified: "2025-01",
  notes: "San Antonio is the most complex local stormwater jurisdiction in Texas outside of Austin, driven entirely by the Edwards Aquifer. The EAA's strict Recharge Zone rules (15% impervious cover cap, near-zero-discharge requirements) are among the most restrictive development standards in the state. Projects that straddle Recharge/Contributing/Contributing-to-Contributing zone boundaries require careful site-specific review. Multi-agency coordination (City DSD + SARA + EAA + TCEQ) is standard for larger projects.",
};
