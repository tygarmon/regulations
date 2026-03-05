import { StateRegulation } from "../types";

export const ID: StateRegulation = {
  stateCode: "ID",
  stateName: "Idaho",
  agency: "Idaho Department of Environmental Quality",
  agencyAbbr: "IDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activity (Permit No. IDG10-000)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale); disturbing < 1 acre may still require coverage if DEQ determines the site poses a risk to water quality",
    noticePeriod: "NOI must be submitted to IDEQ at least 2 days before construction begins (48-hour advance notice minimum); permit coverage is effective upon receipt of NOI acknowledgment from IDEQ",
    applicationMethod: "Online via Idaho DEQ's MyDEQ online portal (preferred); paper NOI form also accepted; NOI submitted to IDEQ Boise office",
    fee: "No permit fee required for the NPDES construction general permit in Idaho; IDEQ does not charge an application or annual fee for the IDG10-000 general permit",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A SWPPP is required to be prepared before construction begins and kept on-site. No PE stamp is required for the SWPPP. IDEQ provides a SWPPP template and guidance document (Idaho Construction Stormwater General Permit SWPPP Template). The SWPPP must be updated as site conditions change, and all amendments must be documented. A Pollution Prevention Team must be identified in the SWPPP.",
  },
  inspections: {
    frequency: "At least every 14 calendar days and within 24 hours after a storm event producing ≥ 0.5 inches of rainfall; inspections must be documented in the SWPPP",
    qualificationRequired: "Inspector must be a member of the permittee's Pollution Prevention Team identified in the SWPPP; no state-specific certification is required, but the inspector must be knowledgeable about the SWPPP and BMPs; CPESC or equivalent professional credential is accepted",
  },
  postConstruction: {
    required: false,
    notes: "Idaho's NPDES construction general permit (IDG10-000) does not include post-construction stormwater management requirements within its scope; post-construction requirements are addressed through local municipal ordinances and the Phase II MS4 program for applicable jurisdictions. Some municipalities (e.g., Boise, Nampa, Coeur d'Alene) have adopted stormwater management ordinances that impose post-construction controls. Idaho DEQ administers the state's MS4 permits separately.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU turbidity limit specified in the general permit; narrative standard applies — discharges must not cause or contribute to violations of Idaho's water quality standards",
    notes: "Idaho water quality standards (IDAPA 58.01.02) include narrative turbidity and suspended sediment criteria. Idaho has Designated Beneficial Uses for water bodies including cold water aquatic life and salmonid spawning, which make construction sediment discharges particularly regulated near sensitive streams. Visual monitoring of discharge points is required after storm events.",
  },
  officialLinks: {
    agencyUrl: "https://www.deq.idaho.gov/",
    permitApplicationUrl: "https://www.deq.idaho.gov/water-quality/stormwater/construction-stormwater/",
    regulationDocUrl: "https://www.deq.idaho.gov/water-quality/stormwater/construction-stormwater/",
  },
  lastVerified: "2025-01",
  notes: "Idaho is one of the few delegated NPDES states that charges no fee for its construction stormwater general permit, which is notable. The IDG10-000 permit is administered entirely by IDEQ with a relatively streamlined 48-hour NOI lead time. Idaho's permit is similar in structure to the EPA's federal CGP because the state adopted key provisions when it received NPDES delegation. Projects on U.S. Forest Service or BLM lands may require separate federal coordination. Idaho's abundant cold-water fisheries (trout and salmon habitat) make sediment control especially important; violations can trigger ESA consultations. The current permit was reissued in 2021 with a 5-year term.",
};
