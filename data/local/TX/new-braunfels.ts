import { LocalRegulation } from "../../localTypes";

export const newBraunfels: LocalRegulation = {
  localCode: "new-braunfels",
  localName: "City of New Braunfels",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of New Braunfels Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of New Braunfels Development Services at 550 Landa St., New Braunfels, TX 78130 or online portal at newbraunfels.gov",
  },
  waterQuality: {
    imperviousCoverLimit: "Portions of New Braunfels are within the Edwards Aquifer Recharge Zone or Contributing Zone — EAA permit required for development on regulated land; portions near Comal Springs have extreme water quality sensitivity; impervious cover limits and water quality controls required by EAA",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per City of New Braunfels and Comal County Drainage Criteria; Comal and Guadalupe rivers are sensitive receiving waters",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Comal River, Guadalupe River, or Comal Springs water quality",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. New Braunfels is home to Comal Springs, the largest springs in Texas, and the headwaters of the Comal River — one of the shortest rivers in the world and a federally protected habitat for the fountain darter (endangered). EAA permit and USFWS coordination may be required for projects near the springs. The Guadalupe River generates significant tourism (tubing) and is sensitive to turbidity and recreational-use impacts.",
  },
  inspections: {
    localRequirements: "City of New Braunfels Development Services inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Comal Springs / Comal River (Federally Protected Habitat)",
      trigger: "Development that could affect water quality or flow reaching Comal Springs (located in Landa Park) or the Comal River",
      restriction: "USFWS Section 7 consultation required for potential effects on fountain darter (federally endangered); EAA permit required; extreme water quality controls necessary; USACE permits required for work in or adjacent to the Comal River",
    },
    {
      name: "Edwards Aquifer Recharge and Contributing Zones",
      trigger: "Development on land over the Edwards Aquifer Recharge Zone or Contributing Zone",
      restriction: "EAA permit required; impervious cover limits apply (15% recharge zone / variable contributing zone); water quality controls and karst feature protection required; karst topography (sinkholes, caves) is widespread in this area",
    },
    {
      name: "Guadalupe River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Guadalupe River",
      restriction: "Floodplain development permit required from City of New Braunfels Floodplain Administrator; USACE coordination required for channel work; Guadalupe River flooding affects the tubing industry and recreational amenities",
    },
  ],
  designManual: {
    required: true,
    name: "City of New Braunfels Drainage Design Standards",
    url: "https://www.newbraunfels.gov/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.newbraunfels.gov/departments/development-services",
    permitUrl: "https://www.newbraunfels.gov/departments/development-services",
    designManualUrl: "https://www.newbraunfels.gov/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "New Braunfels is in Comal County, one of the fastest-growing counties in the U.S., between San Antonio and Austin on I-35. The city is home to Comal Springs (largest springs in Texas), the source of the Comal River (which flows through the historic Landa Park), and world-famous tubing on the Guadalupe River. The ecological significance of Comal Springs — with its federally endangered fountain darter — creates strict environmental oversight for any development with aquifer recharge or discharge implications. New Braunfels has evolved from a small German heritage community to a major growth center with significant residential, resort, and retail development.",
};
