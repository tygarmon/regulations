import { LocalRegulation } from "../../localTypes";

export const carrollton: LocalRegulation = {
  localCode: "carrollton",
  localName: "City of Carrollton",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Carrollton Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Carrollton Development Services at 1945 E. Jackson Rd., Carrollton, TX 75006 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Carrollton Drainage Design Criteria; city spans Dallas and Denton counties",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Carrollton Engineering Standards",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Elm Fork Trinity River or Furneaux Creek",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Carrollton spans both Dallas and Denton counties — projects near the county line should confirm which county's drainage infrastructure requirements apply for outfall connections. The Elm Fork Trinity runs along the western edge of the city.",
  },
  inspections: {
    localRequirements: "City of Carrollton Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Elm Fork Trinity River Corridor",
      trigger: "Development within or adjacent to the Elm Fork Trinity River floodplain on Carrollton's western boundary",
      restriction: "Floodplain development permit required; USACE coordination required for work in or near the Elm Fork channel; Trinity River Authority may have additional requirements",
    },
    {
      name: "FEMA Special Flood Hazard Area",
      trigger: "Development within FEMA-mapped 100-year floodplain along Elm Fork Trinity and Furneaux Creek",
      restriction: "Floodplain development permit required from City of Carrollton Floodplain Administrator; no net fill without compensatory storage",
    },
  ],
  designManual: {
    required: true,
    name: "City of Carrollton Engineering Standards",
    url: "https://www.cityofcarrollton.com/departments/departments-e-m/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofcarrollton.com/departments/departments-e-m/engineering",
    permitUrl: "https://www.cityofcarrollton.com/departments/departments-e-m/engineering",
    designManualUrl: "https://www.cityofcarrollton.com/departments/departments-e-m/engineering",
  },
  lastVerified: "2026-03",
  notes: "Carrollton is a mature inner suburb spanning Dallas and Denton counties, located between Dallas, Addison, Farmers Branch, Lewisville, and Coppell. The city has a mix of industrial, commercial, and residential uses and is largely built out. The Elm Fork Trinity River corridor along the western boundary provides drainage and open space. Construction activity is primarily infill and redevelopment.",
};
