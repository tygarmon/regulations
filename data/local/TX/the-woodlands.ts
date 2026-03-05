import { LocalRegulation } from "../../localTypes";

export const theWoodlands: LocalRegulation = {
  localCode: "the-woodlands",
  localName: "The Woodlands Township",
  stateCode: "TX",
  type: "district",
  ms4Phase: "not-regulated",
  localPermit: {
    required: true,
    name: "The Woodlands Township Development / Drainage Plan Review",
    submittalBody: "The Woodlands Township Development Standards Committee (DSC), 2801 Technology Forest Blvd., The Woodlands, TX 77381",
    leadTime: "4–8 weeks for DSC review; projects must also obtain Montgomery County drainage permit (allow additional 4–8 weeks). DSC review runs concurrently with county review but both approvals required before construction.",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit development plan application to The Woodlands Township Development Standards Committee. Application must include site plan, drainage plan, tree survey, landscape plan, and impervious cover calculations. Both DSC approval and Montgomery County Engineering Department drainage permit are required before construction commences.",
  },
  waterQuality: {
    imperviousCoverLimit: "The Woodlands Development Standards impose impervious cover limits by land use category more restrictive than Montgomery County baseline. Residential lots: typically 45–65% depending on lot size and village. Commercial/retail: maximum per approved site plan with natural open space and tree canopy preservation requirements.",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Post-development peak discharge must not exceed pre-development conditions per Montgomery County Drainage Criteria Manual (2019 post-Harvey edition). The Woodlands Township additionally requires that natural drainage patterns be preserved to the greatest extent practicable. Storm drainage systems must utilize natural swales, bioswales, and existing low-lying areas before resorting to constructed detention basins.",
    turbidityStandard: "No separate township turbidity numeric standard. TPDES Construction General Permit (TXR150000) applies. High-performance turbidity barriers required near Lake Woodlands and Spring Creek.",
  },
  swppp: {
    localPlanRequired: false,
    localPlanName: "N/A — State TPDES SWPPP satisfies local requirement",
    peStampRequired: true,
    notes: "All drainage and grading plans submitted to the DSC must be signed and sealed by a licensed Texas PE. Tree protection plans must be prepared and implemented by a certified arborist or qualified landscape architect. Erosion control plans must specifically address protection of Lake Woodlands shoreline and Spring Creek banks during and after construction.",
  },
  inspections: {
    localRequirements: "The Woodlands Township Development Standards Committee may conduct site inspections during construction to verify compliance with approved plans, tree protection measures, and impervious cover limits. Montgomery County Engineering Department also inspects drainage facilities. Final DSC sign-off on landscaping and tree preservation compliance required. Tree protection fencing must remain in place and be inspected by a certified arborist throughout the construction phase.",
    qualificationRequired: "Tree protection inspections must be performed by a certified arborist (ISA Certified Arborist credential or equivalent). Drainage as-built certifications must be sealed by a licensed Texas PE or RPLS. Montgomery County inspection requirements also apply.",
  },
  specialZones: [
    {
      name: "Lake Woodlands Watershed Protection Area",
      trigger: "Any development draining to Lake Woodlands or within the defined Lake Woodlands watershed boundary.",
      restriction: "Natural vegetated buffers must be maintained along all tributaries draining to Lake Woodlands. Stormwater outfalls to the lake must include water quality treatment features (vegetated swales, forebays, or constructed wetlands). Turbidity-generating activities must be minimized during storm events.",
    },
    {
      name: "Spring Creek Riparian Corridor",
      trigger: "Any development within 100 ft of the ordinary high water mark of Spring Creek or within the FEMA floodplain of Spring Creek.",
      restriction: "A vegetated riparian buffer of at least 50 ft from the ordinary high water mark must be maintained. No grading, clearing, or impervious cover within the riparian buffer without DSC and county approval. USACE Section 404 permit required for any work in or adjacent to Spring Creek.",
    },
    {
      name: "Natural Drainage Corridor / George Mitchell Greenway Preservation Areas",
      trigger: "Any development adjacent to or within a designated natural drainage corridor, greenway easement, or open space preserve shown on The Woodlands Master Plan.",
      restriction: "Natural drainage corridors are protected open space easements. No grading, clearing, filling, or construction of impervious surfaces within designated corridors without DSC approval. These corridors serve as the primary stormwater conveyance and groundwater recharge network.",
    },
    {
      name: "Tree Preservation Area (Significant and Heritage Trees)",
      trigger: "Any land disturbance on developed or undeveloped land within The Woodlands Township.",
      restriction: "Comprehensive tree preservation ordinance applies. Trees 6 inches DBH or greater must be shown on a certified tree survey. Removal of Significant Trees (18 in DBH+) or Heritage Trees (30 in DBH+) requires DSC approval and mitigation. Tree protection zones (TPZ) must be established per ISA standards before grading begins. Mitigation for approved tree removal typically requires replacement plantings at 2:1 or 3:1 caliper-inch ratio.",
    },
  ],
  designManual: {
    required: true,
    name: "The Woodlands Development Standards and Montgomery County Drainage Criteria Manual (2019 Post-Harvey Edition)",
    url: "https://www.thewoodlandstownship-tx.gov/government/departments/development-standards",
  },
  officialLinks: {
    agencyUrl: "https://www.thewoodlandstownship-tx.gov",
    permitUrl: "https://www.thewoodlandstownship-tx.gov/government/departments/development-standards",
    designManualUrl: "https://www.thewoodlandstownship-tx.gov/government/departments/development-standards",
  },
  lastVerified: "2026-03",
  notes: "The Woodlands Township is a Special Purpose District (not an incorporated city) within Montgomery County. It does not hold an independent TPDES MS4 permit; stormwater regulation is carried out under Montgomery County's MS4 Phase II permit. The Woodlands was master-planned with a distinctive natural drainage philosophy: stormwater is managed through natural swales, lakes, and wooded greenways. Projects within The Woodlands must satisfy both the DSC and Montgomery County Engineering — effectively a dual-approval process. As of 2026, The Woodlands Township continues to evaluate incorporation as a city, which could affect the regulatory structure.",
};
