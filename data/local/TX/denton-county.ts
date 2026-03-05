import { LocalRegulation } from "../../localTypes";

export const dentonCounty: LocalRegulation = {
  localCode: "denton-county",
  localName: "Denton County (Unincorporated)",
  stateCode: "TX",
  type: "county",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Floodplain Development Permit / Drainage Review",
    submittalBody: "Denton County Development Services",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via Denton County Development Services at 401 W. Hickory St., Denton, TX 76201 or online portal",
  },
  waterQuality: {
    imperviousCoverLimit: "No countywide impervious cover cap; drainage systems must accommodate design storm flows per Denton County Drainage Design Criteria",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per Denton County Drainage Design Criteria; applies only in unincorporated areas",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000 and not degrade Elm Fork Trinity River, Ray Roberts Lake, or Lewisville Lake",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for county permits",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for development permits in unincorporated Denton County. The county is experiencing explosive growth with many large master-planned communities developing in ETJ areas. Projects near city ETJ boundaries should verify which jurisdiction's standards apply — cities often have review authority in their ETJs.",
  },
  inspections: {
    localRequirements: "Denton County Development Services inspects development permits in unincorporated areas. Rapid growth across the county means frequent BMP inspection is critical.",
    qualificationRequired: "No county-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Lake Ray Roberts Watershed",
      trigger: "Development in the contributing watershed to Lake Ray Roberts (USACE/NTMWD water supply reservoir in northern Denton County)",
      restriction: "Enhanced water quality BMPs required; coordinate with North Texas Municipal Water District and USACE Fort Worth District for projects near the lake boundary",
    },
    {
      name: "Lewisville Lake Watershed",
      trigger: "Development draining to Lewisville Lake (USACE reservoir on the Elm Fork Trinity)",
      restriction: "Water quality BMPs required; USACE manages the lake and shoreline; avoid direct discharge to lake tributaries without adequate sediment control",
    },
    {
      name: "Elm Fork Trinity River Floodplain",
      trigger: "Development within FEMA-mapped 100-year floodplain along the Elm Fork Trinity and its tributaries",
      restriction: "Floodplain development permit required from Denton County Floodplain Administrator; no net fill without compensatory storage",
    },
    {
      name: "Extraterritorial Jurisdiction (ETJ) of Cities",
      trigger: "Development in the ETJ of Denton, Lewisville, Flower Mound, Frisco, Little Elm, and other cities within Denton County",
      restriction: "City ETJ review authority may require conformance with city design standards even for county-permitted projects; verify ETJ boundaries with applicable city before submittal",
    },
  ],
  designManual: {
    required: true,
    name: "Denton County Drainage Design Criteria",
    url: "https://www.dentoncounty.gov/195/Development-Services",
  },
  officialLinks: {
    agencyUrl: "https://www.dentoncounty.gov/195/Development-Services",
    permitUrl: "https://www.dentoncounty.gov/195/Development-Services",
    designManualUrl: "https://www.dentoncounty.gov/195/Development-Services",
  },
  lastVerified: "2026-03",
  notes: "Denton County is one of the fastest-growing counties in the United States, with booming growth in cities like Frisco, McKinney (northern part), Little Elm, Prosper, Celina, and unincorporated areas. The county seat is the City of Denton. This entry covers unincorporated Denton County — most major cities have their own permit requirements. The county contains two major USACE reservoirs (Ray Roberts and Lewisville) that serve as North Texas water supplies. Lake Ray Roberts, completed in 1987, has strict water quality protection requirements in its watershed.",
};
