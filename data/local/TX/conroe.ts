import { LocalRegulation } from "../../localTypes";

export const conroe: LocalRegulation = {
  localCode: "conroe",
  localName: "City of Conroe",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Conroe Engineering Department",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Conroe Engineering at 300 W. Davis St., Conroe, TX 77301 or online portal at cityofconroe.org",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per City of Conroe Design Standards; Lake Conroe watershed is a primary water quality concern",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, 25-, and 100-year storms per City of Conroe Engineering Standards; Montgomery County drainage requirements apply in unincorporated areas",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Lake Conroe, San Jacinto River, or Spring Creek",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Conroe is the seat of Montgomery County and the city closest to Lake Conroe, a SJRA water supply reservoir. Projects in the Lake Conroe watershed should implement enhanced water quality BMPs. The city is experiencing rapid growth as a Houston suburban overflow market.",
  },
  inspections: {
    localRequirements: "City of Conroe Engineering Department inspects grading permits at rough grading and final stabilization.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lake Conroe Watershed",
      trigger: "Development draining to Lake Conroe (San Jacinto River Authority water supply reservoir)",
      restriction: "Enhanced water quality BMPs required to protect drinking water supply; San Jacinto River Authority (SJRA) manages Lake Conroe and may require coordination for projects with significant watershed impact",
    },
    {
      name: "San Jacinto River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the West Fork San Jacinto River",
      restriction: "Floodplain development permit required from City of Conroe Floodplain Administrator; no net fill without compensatory storage; USACE coordination required for work in the San Jacinto River channel",
    },
    {
      name: "Montgomery County Drainage Districts",
      trigger: "Development connecting to Montgomery County Drainage District maintained channels in or near Conroe",
      restriction: "Coordinate with applicable Montgomery County Drainage District for outfall connections; district criteria apply for channel connections",
    },
  ],
  designManual: {
    required: true,
    name: "City of Conroe Engineering Design Standards",
    url: "https://www.cityofconroe.org/departments/engineering",
  },
  officialLinks: {
    agencyUrl: "https://www.cityofconroe.org/departments/engineering",
    permitUrl: "https://www.cityofconroe.org/departments/engineering",
    designManualUrl: "https://www.cityofconroe.org/departments/engineering",
  },
  lastVerified: "2026-03",
  notes: "Conroe is the seat of Montgomery County and a major growth center north of Houston along the I-45 corridor. The city has experienced explosive population growth as Houston's northern suburbs expand. Lake Conroe is a significant water supply reservoir managed by the San Jacinto River Authority. Montgomery County updated its drainage design criteria after Hurricane Harvey (2017). The city's development is closely tied to Montgomery County's overall growth and the expansion of The Woodlands-area master-planned communities.",
};
