import { LocalRegulation } from "../../localTypes";

export const hcfcd: LocalRegulation = {
  localCode: "hcfcd",
  localName: "Harris County Flood Control District",
  stateCode: "TX",
  type: "district",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "HCFCD Channel Use Permit / Outfall Permit",
    submittalBody: "Harris County Flood Control District — Permit Center",
    leadTime: "Plan review typically 4–8 weeks; complex projects may require longer review",
    fee: "Fee schedule based on project type and impact; contact HCFCD for current schedule",
    applicationMethod: "Submit via HCFCD Permit Center online at harriscountyfws.org or in person at 9900 Northwest Freeway, Houston, TX 77092",
  },
  waterQuality: {
    imperviousCoverLimit: "HCFCD does not regulate impervious cover; however, drainage submissions must demonstrate that post-development flows do not exceed channel conveyance capacity and erosion thresholds",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required for all development connecting to HCFCD channels or when development increases runoff to HCFCD channels beyond allowed thresholds; HCFCD Criteria Manual specifies sizing standards for Harris County; post-Harvey revised standards require 100-year detention analysis for larger projects",
    turbidityStandard: "No numeric NTU limit imposed by HCFCD; discharges to HCFCD channels must comply with TCEQ TXR150000 and not degrade channel or downstream water quality; erosion of channel banks is a primary concern",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; HCFCD requires drainage report demonstrating compliance with channel criteria",
    peStampRequired: true,
    notes: "HCFCD operates 2,500+ miles of channels throughout Harris County. Any project with an outfall to an HCFCD channel or that increases runoff to an HCFCD channel requires HCFCD review and permit. HCFCD's Criteria Manual for Harris County is the definitive drainage design reference for the Houston region. The district significantly updated its criteria after Hurricane Harvey (2017) using NOAA Atlas 14 revised rainfall frequencies. Detention pond design must use the updated HCFCD criteria, which now require larger facilities than pre-Harvey standards in many cases.",
  },
  inspections: {
    localRequirements: "HCFCD inspects all work within or adjacent to HCFCD channels and easements. Inspections required at channel connection, outfall installation, and project completion. HCFCD has authority to require corrective action for erosion or sediment impacts to its channels.",
    qualificationRequired: "No specific HCFCD certification required, but drainage engineer of record must be a Texas PE familiar with HCFCD Criteria Manual",
  },
  specialZones: [
    {
      name: "HCFCD Primary Channel System",
      trigger: "Any development with an outfall to Buffalo Bayou, Brays Bayou, White Oak Bayou, Greens Bayou, Cypress Creek, Clear Creek, or other primary HCFCD channels",
      restriction: "HCFCD Channel Use Permit required; outfall design must comply with HCFCD Criteria Manual; erosion protection at outfall required; HCFCD may require modification of outfall design to protect channel",
    },
    {
      name: "HCFCD Detention Basin Adjacency",
      trigger: "Development adjacent to HCFCD regional detention basins (Barker, Addicks, Brays Bayou, etc.)",
      restriction: "Development in or near HCFCD detention facility easements prohibited or restricted; HCFCD easement encroachment permit required; post-Harvey expanded detention project footprints may affect adjacent development",
    },
    {
      name: "Post-Harvey Updated Floodplain",
      trigger: "Development in areas where FEMA maps have been or are being revised post-Hurricane Harvey",
      restriction: "HCFCD advises using post-Harvey updated hydrology even where FEMA maps have not yet been formally revised; HCFCD and Harris County may require compliance with updated hydrology before FEMA map revision is complete",
    },
    {
      name: "HCFCD Bayou Greenway Initiative",
      trigger: "Development adjacent to bayou greenway corridors included in the Harris County Bayou Greenways 2020 initiative",
      restriction: "Coordinate with Harris County and Houston Parks Board regarding greenway trail access and buffer protection; erosion protection of bayou banks is critical within greenway corridors",
    },
  ],
  designManual: {
    required: true,
    name: "Harris County Flood Control District Criteria Manual",
    url: "https://www.harriscountyfws.org/info/criteriamanual",
  },
  officialLinks: {
    agencyUrl: "https://www.harriscountyfws.org",
    permitUrl: "https://www.harriscountyfws.org/permits",
    designManualUrl: "https://www.harriscountyfws.org/info/criteriamanual",
  },
  lastVerified: "2026-03",
  notes: "The Harris County Flood Control District (HCFCD) is one of the most important stormwater regulatory bodies in Texas, managing over 2,500 miles of channels and approximately 130 stormwater detention basins throughout Harris County. Unlike a city or county government, HCFCD focuses exclusively on flood risk reduction and drainage — but its permit requirements affect virtually every significant construction project in the Houston metro. Hurricane Harvey (2017) caused over $125 billion in damage across the Houston region and fundamentally changed HCFCD's approach to drainage design. Post-Harvey, HCFCD adopted the updated NOAA Atlas 14 precipitation data, which significantly increased the rainfall depths used for design, requiring larger detention facilities. HCFCD coordinates with the City of Houston and surrounding municipalities on regional drainage. For any project in Harris County with stormwater outfalls, HCFCD review is almost always required in addition to city or county permits.",
};
