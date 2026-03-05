import { LocalRegulation } from "../localTypes";
import { TX_LOCAL_JURISDICTIONS, getLocalJurisdiction as getTXLocal } from "./TX";

export const LOCAL_MAP: Record<string, LocalRegulation[]> = {
  TX: TX_LOCAL_JURISDICTIONS,
};

export function getLocalJurisdictions(stateCode: string): LocalRegulation[] {
  return LOCAL_MAP[stateCode.toUpperCase()] ?? [];
}

export function getLocalJurisdiction(
  stateCode: string,
  localCode: string
): LocalRegulation | undefined {
  const upper = stateCode.toUpperCase();
  if (upper === "TX") return getTXLocal(localCode);
  return LOCAL_MAP[upper]?.find((j) => j.localCode === localCode);
}

export const ALL_LOCAL_JURISDICTIONS: LocalRegulation[] = Object.values(LOCAL_MAP).flat();
