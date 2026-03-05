import { LocalRegulation } from "../../localTypes";

export const beaumont: LocalRegulation = {
  localCode: "beaumont",
  localName: "City of Beaumont",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Beaumont Public Works / Engineering Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Beaumont Development Services at 801 Main St., Beaumont, TX 77701 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows; FEMA floodplain areas impose significant elevation and fill restrictions given extensive floodplain coverage",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Beaumont Drainage Design Criteria; Southeast Texas receives among the highest annual rainfall in the state, requiring conservative storm routing assumptions",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Neches River, Taylor Bayou, or receiving waterways",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Beaumont is in the Golden Triangle region (Beaumont-Port Arthur-Orange), one of the largest petrochemical refining and processing complexes in the world. Industrial construction activity is significant; SWPPP must address both water quality controls and potential hydrocarbon/chemical spill prevention for projects near industrial facilities.",
  },
  inspections: {
    localRequirements: "City of Beaumont Public Works inspects grading permits at rough grading, drainage infrastructure installation, and final stabilization. Hurricane season (June–November) requires heightened BMP maintenance. Tropical storms and hurricanes can produce catastrophic rainfall in Southeast Texas.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "FEMA Special Flood Hazard Area — Neches River and Pine Island Bayou",
      trigger: "Development within extensive FEMA-mapped 100-year floodplains along the Neches River, Pine Island Bayou, Taylor Bayou, and other SE Texas waterways",
      restriction: "Floodplain development permit required from City of Beaumont Floodplain Administrator; no net fill without compensatory storage; extensive floodplain coverage in Beaumont area means many development sites are affected; flood insurance mandatory for federally backed loans",
    },
    {
      name: "Industrial / Petrochemical Corridor Stormwater Zone",
      trigger: "Construction on or adjacent to petrochemical refineries, chemical plants, or industrial facilities along the Neches River industrial corridor",
      restriction: "SPCC (Spill Prevention, Control, and Countermeasure) plan coordination required; stormwater discharges may be subject to additional TCEQ industrial permit requirements; coordinate with facility environmental staff before beginning construction",
    },
    {
      name: "USACE Neches River Navigation Channel",
      trigger: "Any construction activity adjacent to or potentially affecting the Neches River navigation channel (maintained by USACE)",
      restriction: "USACE Section 404/10 permits required for any work in or adjacent to the navigable channel; coordinate with USACE Galveston District",
    },
  ],
  designManual: {
    required: true,
    name: "City of Beaumont Drainage Design Criteria",
    url: "https://www.beaumonttexas.gov/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.beaumonttexas.gov/departments/public-works",
    permitUrl: "https://www.beaumonttexas.gov/departments/public-works",
    designManualUrl: "https://www.beaumonttexas.gov/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Beaumont is located in Southeast Texas, one of the wettest regions in the state (averaging 55+ inches of rainfall annually) and the heart of the Gulf Coast petrochemical corridor. Hurricane Harvey (2017) produced record-breaking rainfall in the region (60+ inches in some areas) and caused catastrophic flooding, prompting renewed attention to drainage design standards. Construction in this region must account for an extremely active hurricane season and the possibility of extreme rainfall events. The area's industrial heritage means many sites have potential legacy contamination issues that interact with stormwater management.",
};
