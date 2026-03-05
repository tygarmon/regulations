import { LocalRegulation } from "../../localTypes";

export const odessa: LocalRegulation = {
  localCode: "odessa",
  localName: "City of Odessa",
  stateCode: "TX",
  type: "city",
  ms4Phase: "II",
  localPermit: {
    required: true,
    name: "Grading / Drainage Permit",
    submittalBody: "City of Odessa Public Works / Engineering",
    leadTime: "Plan review typically 2–4 weeks",
    fee: "Contact agency for current fee schedule",
    applicationMethod: "Submit via City of Odessa Engineering at 411 W. 8th St., Odessa, TX 79760 or contact city engineering department",
  },
  waterQuality: {
    imperviousCoverLimit: "No citywide impervious cover cap; drainage systems must accommodate design storm flows per Odessa Drainage Design Criteria; arid climate with flat Permian Basin topography",
    onSiteTreatmentRequired: false,
    detentionRequired: true,
    detentionStandard: "Detention required to limit post-development peak flows to pre-development levels for 2-, 10-, and 100-year storms per City of Odessa Drainage Design Criteria; flat terrain and low permeability caliche soils require careful detention sizing; intense thunderstorms can exceed 100-year design storms",
    turbidityStandard: "No numeric NTU limit; discharges must comply with TCEQ TXR150000; Odessa has few perennial receiving streams — most drainage flows to playas or evaporates",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "SWPPP per TCEQ TXR150000; drainage report required for local permit",
    peStampRequired: true,
    notes: "Drainage study prepared by a Texas PE required for grading permits. Odessa shares the Permian Basin with Midland — the twin cities serve as the economic and service center for the West Texas oil patch. Construction activity spikes during oil boom cycles. Flat terrain means drainage relies heavily on detention and conveyance to playa lakes. Wind erosion is a significant concern during site disturbance — standard BMPs may need augmentation for wind-blown sediment control.",
  },
  inspections: {
    localRequirements: "City of Odessa Public Works inspects grading permits at rough grading and final stabilization. Wind-blown sediment is a significant BMP concern during active construction.",
    qualificationRequired: "No city-specific certification required beyond TCEQ SWPPP requirements",
  },
  specialZones: [
    {
      name: "Playa Lakes (Closed Drainage Basins)",
      trigger: "Development adjacent to or draining into playa lakes, which are the primary receiving water bodies for stormwater in the Permian Basin",
      restriction: "Playas are closed basins and may not have outfalls — drainage must be carefully designed to avoid exporting water from one playa to another; playas can fill rapidly during intense thunderstorms; some playas have protected status as migratory bird habitat",
    },
    {
      name: "Oil Field Infrastructure Proximity",
      trigger: "Construction near active or historic oil field production areas, well pads, pipelines, or processing facilities",
      restriction: "Potential hydrocarbon soil contamination; SWPPP must address petroleum product runoff prevention; coordinate with RRC (Railroad Commission of Texas) for projects near active well production; stormwater could mobilize legacy contamination",
    },
  ],
  designManual: {
    required: true,
    name: "City of Odessa Drainage Design Criteria",
    url: "https://www.odessa-tx.gov/government/departments/public-works",
  },
  officialLinks: {
    agencyUrl: "https://www.odessa-tx.gov/government/departments/public-works",
    permitUrl: "https://www.odessa-tx.gov/government/departments/public-works",
    designManualUrl: "https://www.odessa-tx.gov/government/departments/public-works",
  },
  lastVerified: "2026-03",
  notes: "Odessa is the western half of the Midland-Odessa metro in the Permian Basin, one of the most productive oil and gas regions in the world. The city's economy is closely tied to crude oil prices — construction booms during high oil prices and slows during downturns. The flat Permian Basin topography with caliche soils and playa lakes creates a unique drainage environment with few perennial streams. Most stormwater either ponds in playas, infiltrates, or evaporates. Wind erosion is a significant construction site management challenge. Oil field proximity creates legacy contamination concerns at many development sites.",
};
