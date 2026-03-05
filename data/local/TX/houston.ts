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
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Detention required for net increase in impervious cover; flat rate of ~0.80 ac-ft/ac for sites < 20 acres (2025 IDM); larger projects follow Harris County Flood Control criteria starting at 0.65 ac-ft/ac. Post-Harvey requirements (2018–2020+) significantly strengthened; many areas require 500-year storm attenuation.",
    turbidityStandard: "No local numeric NTU limit; TCEQ TXR150000 narrative standard applies. IDM Chapter 13 requires a Stormwater Quality Management Plan (SWQMP) identifying site pollutants with on-site BMPs designed to remove them (10-minute residence time, max 48-hour ponding, ≥ 3 inches freeboard). Bioretention/LID facilities allowed where soils permit; underdrains required in clay-heavy soils.",
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
  lastVerified: "2026-03",
  notes: "Houston is unique in Texas (and nationally) for having no traditional zoning, which creates a complex stormwater landscape. Two parallel requirements apply: (1) Detention — the primary flood control tool, significantly strengthened post-Harvey with flat rates of ~0.80 ac-ft/ac for sites < 20 acres under the 2025 IDM supplement (effective May 16, 2025); and (2) Water Quality Treatment — IDM Chapter 13 requires a Stormwater Quality Management Plan (SWQMP) with on-site BMPs sized to meet residence time and ponding standards. A 2026 IDM edition is effective March 2, 2026 (mandatory for submittals after June 1, 2026). Projects near HCFCD-maintained bayous require a separate HCFCD permit. The dual-agency review (City + HCFCD) adds complexity and time.",
};
