import { LocalRegulation } from "../../localTypes";

export const edwardsAquifer: LocalRegulation = {
  localCode: "edwards-aquifer",
  localName: "Edwards Aquifer Authority (Regional)",
  stateCode: "TX",
  type: "authority",
  ms4Phase: "not-regulated",
  localPermit: {
    required: true,
    name: "Edwards Aquifer Protection Program (EAPP) Authorization",
    submittalBody: "Edwards Aquifer Authority (EAA), San Antonio",
    leadTime: "30–60 days for Recharge Zone projects; Contributing Zone review may be faster; EAA recommends pre-application meeting",
    fee: "EAPP application fee: $500 base + acreage-based fee (ranges from ~$500 for small sites to $5,000+ for large developments); annual compliance inspection fee may apply",
    applicationMethod: "Paper application to EAA offices (900 E. Quincy St., San Antonio); pre-application consultation strongly encouraged",
  },
  waterQuality: {
    imperviousCoverLimit: "Recharge Zone: 15% max impervious cover (hard cap under EAA Rules); Contributing Zone: varies by subwatershed (typically 30–60%); Transition Zone: no EAA limit but local jurisdiction rules apply",
    onSiteTreatmentRequired: true,
    detentionRequired: true,
    detentionStandard: "Recharge Zone: 100% of the 100-year, 24-hour storm must be retained on-site with no surface discharge to the aquifer recharge features (caves, sinkholes, losing streams); Contributing Zone: water quality volume must be captured and treated before discharge",
    turbidityStandard: "EAA prohibits discharges that could contaminate the aquifer; no numeric NTU limit but turbid discharges reaching recharge features are a violation; zero-discharge standard applies in Recharge Zone",
  },
  swppp: {
    localPlanRequired: true,
    localPlanName: "EAA Best Management Practices (BMP) Plan — required as part of EAPP authorization",
    peStampRequired: true,
    notes: "BMP Plan must be prepared by a Texas-licensed PE familiar with karst geology and Edwards Aquifer hydrology. EAA rules prohibit storage of hazardous materials, fuels, and chemicals above ground in the Recharge Zone. Concrete washout must be contained and disposed of off-site — no washout to ground in Recharge Zone. Spill response plan required on-site at all times.",
  },
  inspections: {
    localRequirements: "EAA conducts site inspections during construction and post-construction in the Recharge Zone. Annual compliance reports required. TCEQ and EAA may conduct joint inspections for large projects.",
    qualificationRequired: "PE-of-record responsible for BMP Plan compliance; no additional EAA-specific certification required, but familiarity with karst geology is strongly recommended",
  },
  specialZones: [
    {
      name: "Edwards Aquifer Recharge Zone",
      trigger: "Overlies the karstic limestone of the Edwards Formation where sinkholes, caves, and losing streams directly recharge the aquifer (mapped by EAA and TCEQ; covers portions of Bexar, Medina, Uvalde, Kinney, Real, Comal, Hays, and Travis counties)",
      restriction: "15% max impervious cover; 100% on-site retention of 100-year storm; no hazardous material storage above ground; no surface discharge to recharge features; EAA permit required; most restrictive development zone in the region",
    },
    {
      name: "Edwards Aquifer Contributing Zone",
      trigger: "Drainage flows to the Recharge Zone but does not directly overlie it (varies by subwatershed; mapped by EAA)",
      restriction: "Water quality controls required to prevent pollutant loading to the aquifer; impervious cover limits vary by local jurisdiction (typically 30–60%); EAA review recommended for larger projects",
    },
    {
      name: "Recharge Features (caves, sinkholes, losing streams)",
      trigger: "Any construction activity within 300 ft of a mapped recharge feature (cave, sinkhole, losing stream reach)",
      restriction: "EAA requires site-specific geologic assessment; construction within 100 ft of a recharge feature generally prohibited; contamination of a recharge feature is a serious EAA violation subject to fines and mandatory remediation",
    },
  ],
  designManual: {
    required: true,
    name: "EAA Edwards Aquifer Protection Program Rules and Technical Guidance",
    url: "https://www.edwardsaquifer.org/water-science-info/protection-programs/",
  },
  officialLinks: {
    agencyUrl: "https://www.edwardsaquifer.org/",
    permitUrl: "https://www.edwardsaquifer.org/water-science-info/protection-programs/",
    designManualUrl: "https://www.edwardsaquifer.org/water-science-info/protection-programs/",
  },
  lastVerified: "2025-01",
  notes: "The Edwards Aquifer Authority is a regional water authority, not a municipal government, but its rules function like development regulations across 8 Texas counties (Bexar, Medina, Uvalde, Kinney, Real, Comal, Hays, Travis). The EAA's Edwards Aquifer Protection Program (EAPP) is the primary regulatory mechanism for protecting water quality in the aquifer. The 15% impervious cover limit in the Recharge Zone is one of the most stringent land use restrictions in the state and is enforced independently of city or county zoning. Municipalities within the EAA's jurisdiction (San Antonio, New Braunfels, San Marcos, Kyle, Buda, Wimberley) layer their own ordinances on top of EAA rules — in some cases more restrictive, in others less.",
};
