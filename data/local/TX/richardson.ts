import { LocalRegulation } from "../../localTypes";

export const richardson: LocalRegulation = {
  localCode: "richardson",
  localName: "City of Richardson",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Richardson Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Richardson Development Services at 411 W. Arapaho Rd., Richardson, TX 75080 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Richardson Engineering Standards; city is largely built out with redevelopment as primary land use change",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Richardson Drainage Design Standards; redevelopment projects must demonstrate no increase in impervious cover runoff impact",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Duck Creek, Cottonwood Creek, or Spring Creek",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Richardson is a mature, largely built-out telecom/tech suburb (the 'Telecom Corridor') where most construction involves redevelopment or densification. Infill development must carefully manage drainage to avoid increasing runoff to surrounding developed properties.",
  },
  inspections: {
    localRequirements: "City of Richardson Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Duck Creek Greenbelt Corridor",
      trigger: "Development adjacent to Duck Creek and its tributaries, which form greenbelt corridors through the city",
      restriction: "Floodplain development permit required; greenway preservation areas limit encroachment; erosion of creek banks is a community concern requiring riparian buffer protection",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain",
      restriction: "Floodplain development permit required from City of Richardson Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Richardson Engineering Standards",
    url: "https://www.cor.net/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.cor.net/departments/development-services",
    permitUrl: "https://www.cor.net/departments/development-services",
    designManualUrl: "https://www.cor.net/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Richardson is home to the Telecom Corridor, a concentration of technology and telecommunications companies along US-75. The city is largely built out and construction activity is predominantly redevelopment, densification, or tenant improvement. The Duck Creek greenbelt system provides valuable open space and drainage function. Richardson spans both Dallas and Collin counties. The city has a well-established stormwater program with active illicit discharge detection and elimination efforts.",
};
