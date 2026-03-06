import { StateRegulation } from "../types";

export const NC: StateRegulation = {
  stateCode: "NC",
  stateName: "North Carolina",
  agency: "North Carolina Department of Environmental Quality",
  agencyAbbr: "NCDEQ",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activities (Permit No. NCG010000)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will disturb ≥ 1 acre. NC also regulates land-disturbing activity ≥ 500 sq ft under the NC Sedimentation Pollution Control Act (SPCA) of 1973, which is a parallel but distinct state requirement.",
    noticePeriod: "An Erosion and Sediment Control (E&SC) Plan must be approved by NCDEQ's Division of Energy, Mineral, and Land Resources (DEMLR) — or a delegated local program — before any land disturbance begins. The plan review typically takes 30–60 days. The NPDES NCG010000 general permit requires that a Notice of Intent (NOI) be submitted and that E&SC plan approval be in hand before construction commences. There is no separate fixed NOI lead time; the E&SC approval process drives the timeline.",
    applicationMethod: "Online via NCDEQ's eDEQ portal (edocs.deq.nc.gov) or paper submission to the appropriate NCDEQ DEMLR regional office. NC has a unique dual-track system: the SPCA E&SC plan is submitted to DEMLR or a delegated local program (many counties and municipalities), and the NPDES NOI is filed with NCDEQ. Both must be approved before construction begins.",
    fee: "E&SC Plan review fee: $50 per acre, minimum $100, maximum $5,000 for state-reviewed projects. Locally-reviewed projects may have different fee schedules set by the local program. NPDES NCG010000 general permit annual fee: approximately $100–$500 depending on disturbance acreage (per NCDEQ fee schedule under 15A NCAC 02H .0105).",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "North Carolina requires both a SWPPP (for NPDES coverage) and an approved Erosion and Sediment Control (E&SC) Plan (under the SPCA). The E&SC plan must be designed by a qualified Registered Landscape Architect, Professional Engineer, or Land Surveyor for projects disturbing ≥ 1 acre, though the statute allows persons with appropriate training to prepare plans for smaller sites. The SWPPP itself does not require PE stamp; however, the E&SC plan typically does for larger projects. NCDEQ provides a SWPPP template. The SWPPP must incorporate the approved E&SC plan measures.",
  },
  inspections: {
    frequency: "At least every 7 calendar days and within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period. After final stabilization of an area, inspection frequency may be reduced. Inspections must be documented using NCDEQ-approved forms and records retained for at least 3 years.",
    qualificationRequired: "North Carolina requires that E&SC inspections be conducted by a person holding a valid NC Erosion and Sediment Control (E&SC) Program Level I, Level II, or Level III certificate, or by a licensed Professional Engineer or Registered Landscape Architect. The E&SC certification program is administered by NCDEQ DEMLR. Level II certification is required for projects ≥ 1 acre in most cases. This is a state-specific mandatory certification that distinguishes NC from many other states.",
    rainTrigger: "Within 24 hours of a storm event producing ≥ 0.5 inches of rainfall in a 24-hour period",
    acceptedCertifications: "NC E&SC Program Level II certificate (or higher) REQUIRED; administered by NCDEQ DEMLR; CPESC satisfies the requirement; licensed PE or Registered Landscape Architect also qualifies",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required for projects in NPDES Phase II MS4-regulated areas and under the NC Stormwater Management Rules (15A NCAC 02H .1000 et seq.). High Density projects (impervious surface > 24% in most areas, or > 12% in sensitive watershed areas such as WS-I through WS-IV, ORW, or SA waters) must design and implement permanent stormwater control measures (SCMs). SCMs must be designed by a licensed PE and recorded in a stormwater O&M agreement with the local government. Lower-density projects may qualify for low-density treatment via vegetated conveyances.",
  },
  dischargeStandards: {
    turbidityLimit: "50 NTU above background for freshwater streams; specific numeric limits apply to discharges into waters classified as Trout (Tr) or High Quality Waters (HQW).",
    notes: "North Carolina is one of only a handful of states with a specific numeric turbidity standard embedded in its construction stormwater program. The 50 NTU (above background) limit applies to discharges to freshwater streams under NC Surface Water Quality Standards (15A NCAC 02B .0211). For Trout waters or Outstanding Resource Waters, stricter limits may apply. Operators must conduct monitoring if there is a reasonable potential for turbidity exceedances. Visual monitoring and turbidity sampling protocols are outlined in the NCG010000 permit and NCDEQ guidance.",
  },
  officialLinks: {
    agencyUrl: "https://deq.nc.gov/",
    permitApplicationUrl: "https://deq.nc.gov/about/divisions/energy-mineral-land-resources/erosion-stormwater-control",
    regulationDocUrl: "https://www.deq.nc.gov/about/divisions/energy-mineral-and-land-resources/stormwater/stormwater-program/npdes-construction-program",
  },
  permitExpires: "2029-03-31",
  lastVerified: "2025-01",
  notes: "North Carolina administers one of the most robust state construction stormwater programs in the Southeast, driven by the 1973 Sedimentation Pollution Control Act — one of the earliest state erosion control laws in the US. The dual-track SPCA/NPDES system means every major construction project must navigate two separate approval processes. Approximately 60 counties and municipalities operate NCDEQ-delegated local E&SC programs with their own review staff and may have more stringent requirements. The mandatory state E&SC inspector certification (Level I/II/III) is a significant distinguishing feature. NC also maintains a robust list of sensitive watershed overlays (WS-I through WS-IV, ORW, SA, Tr) that trigger more stringent requirements for both construction and post-construction phases.",
};
