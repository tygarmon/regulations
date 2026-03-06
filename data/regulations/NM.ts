import { StateRegulation } from "../types";

export const NM: StateRegulation = {
  stateCode: "NM",
  stateName: "New Mexico",
  agency: "New Mexico Environment Department",
  agencyAbbr: "NMED",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES/NMPDES General Permit for Stormwater Discharges from Construction Activities (Permit No. NMR10A000)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre. Sites < 1 acre not part of a larger plan are regulated by NMED on a case-by-case basis if they discharge to waters of New Mexico.",
    noticePeriod: "A Notice of Intent (NOI) must be submitted to NMED at least 2 business days before land disturbance begins and before the discharge commences. The 2-day lead time is notably shorter than most states. NMED acknowledges coverage; operators should confirm receipt before disturbing land.",
    applicationMethod: "Online submission via NMED's Environmental Bureau of Information Services (EBIS) online portal, or paper NOI mailed to NMED Ground and Surface Water Protection Bureau in Santa Fe. Online submission is preferred. A SWPPP must be completed before the NOI is filed.",
    fee: "No permit fee for the NPDES/NMPDES construction general permit at the state level under current NMED rules. However, if an individual permit is required (rather than general permit coverage), fees apply based on NMED's fee schedule.",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A SWPPP is required and must be completed before land disturbance begins. NMED does not require a licensed PE to prepare or certify the SWPPP. The operator (permittee) must sign and certify the SWPPP. NMED provides a SWPPP template and Best Management Practices (BMP) guidance. The SWPPP must be maintained on-site and made available to NMED inspectors. New Mexico's arid climate creates unique challenges: SWPPP provisions for wind erosion control and re-vegetation of disturbed soils in low-rainfall zones are emphasized.",
  },
  inspections: {
    frequency: "At least every 14 days and within 24 hours of a precipitation event producing ≥ 0.5 inches of rainfall. In arid areas of NM where rainfall is infrequent, inspections must still occur every 14 days during the active construction period. Inspection reports must be retained as part of the SWPPP record.",
    qualificationRequired: "No state-specific certification is required by the general permit. Inspectors must be knowledgeable individuals familiar with the SWPPP and BMP requirements. NMED does not currently mandate a specific credential such as CPESC or a state-issued inspector license. The operator or their designee may conduct inspections.",
    rainTrigger: "Within 24 hours of a precipitation event producing ≥ 0.5 inches of rainfall; in arid areas, the 14-day routine inspection applies even when rainfall is infrequent",
    acceptedCertifications: "No state-specific cert required; inspector must be a 'qualified person' familiar with SWPPP; CPESC, CESSWI accepted",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management requirements apply in MS4-regulated areas (Albuquerque, Rio Rancho, Las Cruces, and other Phase I and II MS4 communities). Each MS4 permittee adopts and enforces local post-construction ordinances. The NMED general permit requires final stabilization of all disturbed areas and proper closure/termination procedures (NOT submission) before permit coverage terminates. Statewide post-construction requirements outside of MS4 areas are less prescriptive, relying primarily on narrative standards.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit specified in NMR10A000; narrative water quality standards apply.",
    notes: "Discharges must comply with New Mexico Water Quality Standards (20.6.4 NMAC). The narrative standard prohibits discharges that cause or contribute to violations of applicable designated use standards. No site-specific NTU limit is embedded in the construction general permit. NMED's focus is on BMP implementation and final stabilization rather than numeric effluent limits. Sites discharging to Outstanding National Resource Waters (ONRWs) or impaired waters may face additional requirements or be required to obtain an individual permit.",
  },
  officialLinks: {
    agencyUrl: "https://www.env.nm.gov/",
    permitApplicationUrl: "https://www.env.nm.gov/water-quality/npdes/construction/",
    regulationDocUrl: "https://www.env.nm.gov/water-quality/npdes/construction/",
  },
  lastVerified: "2025-01",
  notes: "New Mexico's construction stormwater program reflects its arid climate: re-vegetation requirements emphasize drought-tolerant native species, and the program acknowledges that conventional re-vegetation timelines may not apply in low-rainfall areas. The 2-day NOI lead time is among the shortest in the country. NMED has a smaller enforcement staff relative to the size of the state, so BMP self-monitoring and documentation are critical. Wind erosion controls (e.g., wind fences, dust suppression) are specifically addressed in NMED guidance due to frequent high-wind events in the state. Projects within 100 feet of an acequia (traditional irrigation ditch) or a jurisdictional water of the US may face additional NMED Surface Water Quality Bureau review.",
};
