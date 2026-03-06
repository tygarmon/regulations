import { StateRegulation } from "../types";

export const OH: StateRegulation = {
  stateCode: "OH",
  stateName: "Ohio",
  agency: "Ohio Environmental Protection Agency",
  agencyAbbr: "Ohio EPA",
  npdesStatus: "delegated",
  constructionPermit: {
    name: "NPDES General Permit for Stormwater Discharges Associated with Construction Activity (OHC000004)",
    threshold: "≥ 1 acre of land disturbance, or < 1 acre if part of a larger common plan of development or sale that will ultimately disturb ≥ 1 acre",
    noticePeriod: "NOI must be submitted at least 7 days before construction activity begins; permit coverage is not effective until Ohio EPA processes the NOI",
    applicationMethod: "Online via Ohio EPA eBusiness Center (eDMR/eNOI portal); paper NOI forms also accepted",
    fee: "$350 base fee for projects disturbing < 5 acres; $750 for 5–9.99 acres; $1,500 for ≥ 10 acres; annual fees apply for multi-year projects",
  },
  swppp: {
    required: true,
    peCertRequired: false,
    templateAvailable: true,
    notes: "A Storm Water Pollution Prevention Plan (SWP3) is required and must be prepared before submitting the NOI. Ohio EPA provides a SWP3 template and a SWP3 Preparation Guide. The SWP3 must be certified by the operator and kept on-site. No PE stamp is required by the general permit, though some local jurisdictions may impose additional requirements. The SWP3 must be updated whenever there is a change in design, construction, operation, or maintenance that affects potential for pollutant discharges.",
  },
  inspections: {
    frequency: "Every 7 days and within 24 hours of a precipitation event that results in a discharge from the site. Inspections may be reduced to every 14 days and within 24 hours of a precipitation event if the site meets stabilization criteria for disturbed areas.",
    qualificationRequired: "Inspector must be a 'qualified inspector' who has completed Ohio EPA-approved training (e.g., Ohio's Water & Soil Resources Commission CPESC or equivalent). No formal state certification credential is mandated by the general permit, but training documentation must be maintained. Many operators use Certified Professional in Erosion and Sediment Control (CPESC) holders.",
    rainTrigger: "Within 24 hours of any precipitation event that results in a discharge from the site (discharge-based trigger; no fixed inch threshold)",
    acceptedCertifications: "Ohio EPA Qualified Inspection Personnel (QIP) certification REQUIRED or equivalent; CPESC, CESSWI, licensed PE/PS accepted; OEPA-approved training is the primary pathway",
  },
  postConstruction: {
    required: true,
    notes: "Post-construction stormwater management is required for projects in regulated MS4 areas per Ohio's Phase II MS4 program. The OHC000004 permit requires that post-construction stormwater controls be installed before permit termination. Ohio EPA's rainwater and land development manual (ODNR H-12) guides post-construction design. Many localities have additional post-construction ordinances.",
  },
  dischargeStandards: {
    turbidityLimit: "No numeric NTU effluent limit in the general permit; discharges must not cause or contribute to violations of Ohio water quality standards",
    notes: "Ohio water quality standards (OAC 3745-1) prohibit discharges that cause turbidity in receiving waters to exceed 5 NTU above natural background in designated outstanding state waters. Visual monitoring of BMPs and discharge points is required at each inspection. If a discharge is observed to be causing a visible sheen, discoloration, or unusual turbidity, corrective action must be taken immediately.",
  },
  officialLinks: {
    agencyUrl: "https://epa.ohio.gov/",
    permitApplicationUrl: "https://epa.ohio.gov/divisions-and-offices/surface-water/permits/npdes-permits/construction-stormwater",
    regulationDocUrl: "https://epa.ohio.gov/static/Portals/35/storm_water/OHC000004_Final_Permit.pdf",
  },
  lastVerified: "2025-01",
  notes: "Ohio's general permit (OHC000004) was reissued in 2018 and remains in effect with administrative continuations. The permit requires operators to file a Notice of Termination (NOT) within 30 days after achieving final stabilization. Ohio EPA uses the term 'SWP3' (Storm Water Pollution Prevention Plan) rather than the more common 'SWPPP' abbreviation — both refer to the same document. Projects located in watersheds with TMDL impairments or Outstanding State Waters may face additional conditions. Ohio's eBusiness Center is the preferred submission portal; paper forms require mailing to the Division of Surface Water.",
};
