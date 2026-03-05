import { LocalRegulation } from "../../localTypes";

export const haysCounty: LocalRegulation = {
  localCode: "hays-county",
  localName: "Hays County (Unincorporated)",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Floodplain Development Permit / Drainage Review",
    submittalBody: "Hays County Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via Hays County Development Services at 712 S. Stagecoach Trail, Suite 1033, San Marcos, TX 78666 or online portal at hayscountytx.com",
  },
  waterQuality: {
    imperviousCoverLimit: "Portions of unincorporated Hays County are within the Edwards Aquifer Recharge and Contributing Zones — EAA permit required for development over the aquifer; impervious cover caps apply as required by EAA rules",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 5-, 10-, 25-, and 100-year storms per Hays County Drainage Design Standards; applies in unincorporated areas and ETJs where cities lack their own standards",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Blanco River, Onion Creek, Plum Creek, or San Marcos River",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for county permits",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for development permits in unincorporated Hays County. The county is experiencing explosive growth as the fastest-growing county in Texas. Edwards Aquifer recharge and contributing zones cover significant portions of the county. The Blanco River and Onion Creek have a history of catastrophic flash flooding. County drainage standards adopted in response to rapid growth may be less developed than city standards — verify current requirements with Hays County Development Services.",
  },
  inspections: {
    localRequirements: "Hays County Development Services inspects development in unincorporated areas. County capacity has been stressed by rapid growth.",
    qualificationRequired: "No county-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone",
      trigger: "Development over the Edwards Aquifer Recharge Zone in unincorporated Hays County (primarily the western, higher-elevation areas)",
      restriction: "EAA permit required; impervious cover limited to 15%; water quality controls and karst protection required; direct discharge to sinkholes, caves, or other recharge features prohibited",
    },
    {
      name: "Blanco River Floodplain",
      trigger: "Development within FEMA-mapped floodplain along the Blanco River",
      restriction: "Floodplain development permit required from Hays County Floodplain Administrator; the Blanco experienced unprecedented flooding in May 2015 (Memorial Day flood — 40+ feet rise in Wimberley); current FEMA maps may understate actual flood risk; use conservative freeboard",
    },
    {
      name: "Onion Creek Floodplain",
      trigger: "Development within FEMA-mapped floodplain along Onion Creek in the eastern, lower-elevation parts of the county",
      restriction: "Floodplain development permit required; Onion Creek has experienced repeated major flash floods; FEMA has remapped and bought out flood-prone properties; use current effective maps with conservative safety margin",
    },
    {
      name: "City ETJ Areas",
      trigger: "Development in the Extraterritorial Jurisdiction of Kyle, Buda, San Marcos, Wimberley, or other Hays County cities",
      restriction: "City ETJ review authority may impose city standards even in unincorporated areas; verify ETJ boundaries and applicable standards with the relevant city before submitting county permits",
    },
  ],
  designManual: {
    required: true,
    name: "Hays County Drainage Design Standards",
    url: "https://www.hayscountytx.com/departments/development-services",
  },
  officialLinks: {
    agencyUrl: "https://www.hayscountytx.com/departments/development-services",
    permitUrl: "https://www.hayscountytx.com/departments/development-services",
    designManualUrl: "https://www.hayscountytx.com/departments/development-services",
  },
  lastVerified: "2026-03",
  notes: "Hays County has been the fastest-growing county in Texas and consistently one of the fastest-growing in the nation, driven by Austin tech sector spillover into the I-35 corridor cities of Kyle, Buda, and San Marcos, and the FM 1626/Mopac South corridor. This entry covers unincorporated Hays County. The county's growth has significantly stressed its development services capacity. The Edwards Aquifer, Blanco River, and Onion Creek create a complex regulatory environment. The May 2015 Memorial Day flood devastated Wimberley (12+ deaths) and revealed the extreme flash flood hazard of the Hill Country rivers flowing from the Edwards Plateau.",
};
