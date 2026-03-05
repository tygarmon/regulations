import { LocalRegulation } from "../../localTypes";

export const elPaso: LocalRegulation = {
  localCode: "el-paso",
  localName: "City of El Paso",
  stateCode: "TX",
  type: "city",
  ms4Phase: "I",
  localPermit: {
    required: true,
    name: "Grading / Land Disturbance Permit",
    submittalBody: "City of El Paso Development Services Department (DSD)",
    leadTime: "Plan review typically 2–4 weeks; permit issued before grading begins",
    fee: "Based on disturbed area and project valuation; contact DSD for current schedule",
    applicationMethod: "Online via El Paso permitting portal (elpasotexas.gov) or in-person at DSD",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage infrastructure must convey design storm flows",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per El Paso Stormwater Management and Design Manual",
    turbidityStandard: "No numeric NTU limit in local ordinance; discharges must comply with TCEQ TXR150000 and not violate Rio Grande water quality standards",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) — aligned with TCEQ TXR150000; local ESC plan as part of grading permit",
    peStampRequired: true,
    notes: "Drainage report stamped by a Texas PE required for projects disturbing ≥ 1 acre. El Paso's arid climate produces intense short-duration storms; BMPs must account for high sediment loads from desert soils. City may require enhanced inlet protection given wind-blown sediment.",
  },
  inspections: {
    localRequirements: "City of El Paso DSD inspects grading permits independently of TCEQ. Inspections required at key milestones: rough grading, drainage structure installation, final stabilization. Complaint-driven inspections also conducted.",
    qualificationRequired: "No city-specific certification beyond TCEQ requirements; contractor responsible for SWPPP implementation",
  },
  specialZones: [
    {
      name: "Rio Grande Floodplain (FEMA AE/AO Zones)",
      trigger: "Development within FEMA-mapped 100-year floodplain along Rio Grande and tributaries",
      restriction: "FEMA floodplain development permit required; finished floor elevations must meet BFE requirements; LOMA/LOMR may be required",
    },
    {
      name: "Desert Arroyo / Wash Corridors",
      trigger: "Development adjacent to or crossing ephemeral desert washes and arroyos",
      restriction: "Setbacks required; culvert crossings must be sized for 100-year flow; erosion protection of channel banks required",
    },
    {
      name: "International Border Zone",
      trigger: "Projects within International Boundary and Water Commission (IBWC) jurisdiction near Rio Grande",
      restriction: "IBWC coordination may be required for projects affecting Rio Grande floodway; no discharge that increases flood risk to Mexico",
    },
  ],
  designManual: {
    required: true,
    name: "El Paso Stormwater Management and Design Manual",
    url: "https://www.elpasotexas.gov/engineering-and-construction-management/stormwater",
  },
  officialLinks: {
    agencyUrl: "https://www.elpasotexas.gov/development-services",
    permitUrl: "https://www.elpasotexas.gov/development-services/permits",
    designManualUrl: "https://www.elpasotexas.gov/engineering-and-construction-management/stormwater",
  },
  lastVerified: "2026-03",
  notes: "El Paso's arid climate (≈8 in/year rainfall) produces intense monsoonal thunderstorms July–September capable of generating significant flash flooding. BMPs must address wind erosion as well as water erosion. The Franklin Mountains create rapid runoff concentration. Projects near the Rio Grande require coordination with IBWC and may have additional federal requirements.",
};
