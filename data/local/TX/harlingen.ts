import { LocalRegulation } from "../../localTypes";

export const harlingen: LocalRegulation = {
  localCode: "harlingen",
  localName: "City of Harlingen",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Harlingen Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Harlingen Building Department at 118 E. Tyler Ave., Harlingen, TX 78550 or contact city engineering",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Harlingen Drainage Design Criteria; flat RGV topography requires pump-assisted drainage in low areas",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Harlingen Drainage Design Criteria; Rio Grande Valley irrigation canals and the Cameron County Drainage District system are interconnected with urban stormwater",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Arroyo Colorado or Rio Grande water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Harlingen is in Cameron County in the Rio Grande Valley. The Arroyo Colorado — a natural Rio Grande distributary — flows through Harlingen and is classified as an impaired waterway by TCEQ (TMDL for bacteria). The interconnected irrigation and drainage canal system in the RGV creates a complex drainage environment. Hurricane season preparedness is important in this coastal-adjacent region.",
  },
  inspections: {
    localRequirements: "City of Harlingen Public Works inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Arroyo Colorado (Impaired Waterway)",
      trigger: "Development draining to the Arroyo Colorado",
      restriction: "TCEQ has established a TMDL for bacteria in the Arroyo Colorado; enhanced pathogen and pollution controls required; Arroyo Colorado is a state priority water quality concern for the Rio Grande Valley",
    },
    {
      name: "Cameron County Irrigation / Drainage Districts",
      trigger: "Development in areas served by Cameron County Irrigation Districts (CCID) or Drainage Districts",
      restriction: "Cameron County Irrigation Districts control the network of canals that serve dual irrigation and drainage purposes; outfall connections to irrigation or drainage canals require district approval; do not introduce sediment into irrigation canals",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Harlingen Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Harlingen Drainage Design Criteria",
    url: "https://www.myharlingen.us/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.myharlingen.us/departments/public-works",
    permitUrl: "https://www.myharlingen.us/departments/public-works",
    designManualUrl: "https://www.myharlingen.us/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Harlingen is a commercial hub city in Cameron County in the Rio Grande Valley, home to a major VA hospital, South Texas College of Law, and significant retail and medical industry. The city sits on the Arroyo Colorado, which is impaired for bacteria and subject to a TCEQ TMDL. The RGV's flat topography and interconnected irrigation/drainage canal network create a unique drainage management environment. The region is in one of the few areas where agricultural irrigation canals and urban stormwater drainage are directly interconnected.",
};
