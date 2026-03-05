import { LocalRegulation } from "../../localTypes";

export const houston: LocalRegulation = {
  localCode: "houston",
  localName: "City of Houston / Harris County",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Harris County Flood Control District (HCFCD) Permit + City of Houston Drainage Permit",
    submittalBody: "Harris County Flood Control District (HCFCD) for drainage design; City of Houston PWE for right-of-way and detention",
    leadTime: "Drainage design review: 4–8 weeks typical; Harris County review for HCFCD-regulated channels can take 6–12 weeks",
    fee: "City of Houston drainage permit fee based on project type; HCFCD review fee varies by project complexity (typically $500–$5,000+)",
    applicationMethod: "City: ProjectDox online plan review portal (houston.permitsmarts.com); HCFCD: paper submittals to HCFCD offices",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap (Houston has no traditional zoning); however, detention required for any net increase in runoff",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required for net increase in impervious cover; must attenuate 100-year storm to pre-development rates per Harris County Criteria (post-Harvey requirements significantly strengthened in 2018–2020); many projects must also meet 500-year storm attenuation in designated areas",
    turbidityStandard: "No local numeric NTU limit; TCEQ TXR150000 narrative standard applies; drainage permit requires construction BMPs per City of Houston Infrastructure Design Manual",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "Stormwater Pollution Prevention Plan (SWPPP) per TCEQ; City requires ESC notes on grading plans",
    peStampRequired: true,
    notes: "All drainage plans submitted to the City of Houston must be prepared and sealed by a Licensed PE registered in Texas. Harris County drainage analysis must follow HCFCD's Policy, Criteria and Procedure Manual (PCPM). Post-Harvey (2017), requirements have become substantially more stringent — particularly for detention sizing.",
  },
  inspections: {
    localRequirements: "City of Houston PWE inspects drainage and grading installations. HCFCD inspects permitted work within or adjacent to HCFCD-maintained channels. Construction inspections required before final certificate of occupancy.",
    qualificationRequired: "PE-of-record responsible for drainage design compliance; no additional city-specific inspector certification required beyond TCEQ",
  },
  specialZones: [
    {
      name: "FEMA Floodway / Special Flood Hazard Area (SFHA)",
      trigger: "Within FEMA-mapped 100-year floodplain (Zone AE) or floodway",
      restriction: "No fill in floodway; substantial improvement rules apply; floodplain development permit required; Harris County has adopted more restrictive 500-year standards in many areas",
    },
    {
      name: "Harris County Flood Control District (HCFCD) Channel Setback",
      trigger: "Within 25–100 ft of an HCFCD-maintained bayou or channel (varies by channel size)",
      restriction: "No permanent structures; HCFCD right-of-entry and permit required for construction within setback; channel bank stabilization standards apply",
    },
    {
      name: "Subsidence-Affected Area",
      trigger: "Much of Harris County and surrounding region",
      restriction: "Land subsidence from groundwater withdrawal is a major issue; projects may encounter subsidence-related drainage design complications; Texas Groundwater Conservation Districts regulate pumping",
    },
  ],
  designManual: {
    required: true,
    name: "Harris County Flood Control District Policy, Criteria and Procedure Manual (PCPM) + City of Houston Infrastructure Design Manual (IDM)",
    url: "https://www.hcfcd.org/Resources/Design-Criteria",
  },
  officialLinks: {
    agencyUrl: "https://www.hcfcd.org/",
    permitUrl: "https://www.houstonpermittingcenter.org/",
    designManualUrl: "https://www.hcfcd.org/Resources/Design-Criteria",
  },
  lastVerified: "2025-01",
  notes: "Houston is unique in Texas (and nationally) for having no traditional zoning, which creates a complex stormwater landscape. Detention requirements are the primary tool for managing runoff. Post-Hurricane Harvey (2017), Harris County significantly strengthened detention requirements and adopted more conservative design standards. Projects near HCFCD-maintained bayous require a separate HCFCD permit in addition to City permits. The dual-agency review (City + HCFCD) adds complexity and time to the permitting process.",
};
