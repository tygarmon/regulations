import { StateRegulation } from "../types";

export const VT: StateRegulation = {
  stateCode: "VT",
  stateName: "Vermont",
  agency: "Vermont Department of Environmental Conservation",
  agencyAbbr: "DEC",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "Construction General Permit 3-9020 (CGP 3-9020) — Vermont's Construction Stormwater General Permit; Vermont operates under its own state water quality permit program (not branded as NPDES, but functionally equivalent and EPA-authorized)",
    threshold: "≥ 1 acre of land disturbance (or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre); Vermont also regulates stormwater from smaller sites through its municipal stormwater program and Act 250 land use review process; sites disturbing ≥ 1 acre in regulated watersheds may face additional requirements under the Vermont Stormwater Management Rule",
    noticePeriod: "A complete Notice of Intent (NOI) or permit application must be submitted to Vermont DEC Stormwater Program and approved before construction begins; Vermont recommends submitting the NOI at least 14 days before the planned construction start date to allow for DEC review and processing; no construction may begin until written permit authorization is received from DEC",
    applicationMethod: "Online via Vermont's eDEC electronic permitting system (available at dec.vermont.gov/permits); paper applications are also accepted; the eDEC portal is the preferred method; some permit types may still require supplemental paper documentation",
    fee: "One-time permit application fee based on disturbed acreage: 1 to < 5 acres: $362; 5 to < 10 acres: $720; 10 to < 25 acres: $1,080; 25 to < 50 acres: $1,440; ≥ 50 acres: $1,800; fees are set under Vermont's environmental permit fee schedule and subject to periodic legislative adjustment — verify current amounts with Vermont DEC",
  },
  swppp: {
    required: true,
    peCertRequired: true,
    templateAvailable: true,
    notes: "Vermont requires a Stormwater Pollution Prevention Plan (SWPPP), which Vermont DEC refers to as a Stormwater Management Plan or SWPPP. Notably, Vermont is one of the few states that requires a Licensed Site Technician (LST) or a Professional Engineer (PE) licensed in Vermont to prepare or certify the SWPPP/Stormwater Management Plan for sites covered under CGP 3-9020. Vermont DEC provides SWPPP templates, technical guidance, and the Vermont Stormwater Management Manual (2017, updated periodically) as the primary design reference. The SWPPP must include a site erosion prevention and sediment control plan, a post-construction stormwater management plan (where required), and an inspection and maintenance program. This PE/LST requirement is a significant state-specific quirk.",
  },
  inspections: {
    frequency: "At least once every 7 calendar days during active construction and within 24 hours after any storm event producing ≥ 0.5 inches of precipitation in a 24-hour period; during winter months or periods of frozen ground, inspection frequency may be modified per DEC guidance; when the site is temporarily stabilized, inspections may be reduced to monthly",
    qualificationRequired: "Vermont requires inspections to be performed by or under the supervision of a Vermont-licensed Site Technician (LST) or Professional Engineer (PE); the Licensed Site Technician certification is a Vermont-specific credential administered through the Vermont DEC; this is one of the most stringent inspector qualification requirements of any state construction stormwater program",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required under CGP 3-9020 and Vermont's Stormwater Management Rule (Environmental Protection Rules, Chapter 22). Vermont has one of the most comprehensive post-construction stormwater programs in the nation. Sites that create or expand impervious surfaces (≥ 1 acre of new impervious) may require a separate Stormwater Discharge Permit (individual permit) for post-construction stormwater management. The Vermont Stormwater Management Manual (VSMM) provides detailed design standards for post-construction BMPs. Vermont also regulates stormwater from smaller impervious areas through its Stormwater Management Rule and has watershed-specific enhanced standards for Lake Champlain and other priority receiving waters. Final stabilization requires ≥ 70% uniform vegetative cover before a NOT is filed.",
  },
  dischargeStandards: {
    turbidityLimit: "No universal numeric NTU turbidity effluent limit in CGP 3-9020; narrative water quality standards apply; however, Vermont's water quality standards include specific turbidity criteria for certain classified waters",
    notes: "Vermont's Water Quality Standards (Environmental Protection Rules, Chapter 29A) include narrative turbidity standards and specific criteria for Class A and Class B waters. Discharges must not cause or contribute to violations of applicable water quality criteria. Vermont has some of the most protective freshwater water quality standards in New England. Sites near Lake Champlain, priority cold-water fisheries, or Class A waters must implement heightened BMPs. Vermont is particularly focused on phosphorus loadings to Lake Champlain, and construction sites in the Lake Champlain basin may face additional nutrient-related BMP requirements. Visual monitoring of all stormwater discharge points is required at each inspection.",
  },
  officialLinks: {
    agencyUrl: "https://dec.vermont.gov/",
    permitApplicationUrl: "https://dec.vermont.gov/watershed/stormwater/construction",
    regulationDocUrl: "https://dec.vermont.gov/watershed/stormwater/rules-statutes-guidance",
  },
  lastVerified: "2026-03",
  notes: "Vermont has one of the most rigorous construction stormwater programs in the United States, with several notable quirks: (1) PE or Licensed Site Technician (LST) certification is required for both SWPPP preparation and site inspections — a requirement found in very few other states; (2) Vermont's LST program is a state-unique credential that requires training and examination through Vermont DEC; (3) Vermont's post-construction stormwater standards are among the most comprehensive, with separate permitting pathways for post-construction impervious area; (4) Vermont does not brand its program as 'NPDES' — it operates under state authority as an EPA-approved state program under the Clean Water Act, using permit number CGP 3-9020; (5) The Lake Champlain basin triggers heightened phosphorus BMP requirements for most of northwestern Vermont; (6) Vermont's Act 250 land use and development control law (10 V.S.A. Chapter 151) imposes additional environmental review requirements for many large construction projects, which intersects with stormwater permitting. Vermont DEC's Stormwater Program is housed within the Watershed Management Division.",
};
