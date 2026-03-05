import { StateRegulation } from "../types";

import { AL } from "./AL";
import { AK } from "./AK";
import { AZ } from "./AZ";
import { AR } from "./AR";
import { CA } from "./CA";
import { CO } from "./CO";
import { CT } from "./CT";
import { DE } from "./DE";
import { FL } from "./FL";
import { GA } from "./GA";
import { HI } from "./HI";
import { ID } from "./ID";
import { IL } from "./IL";
import { IN } from "./IN";
import { IA } from "./IA";
import { KS } from "./KS";
import { KY } from "./KY";
import { LA } from "./LA";
import { ME } from "./ME";
import { MD } from "./MD";
import { MA } from "./MA";
import { MI } from "./MI";
import { MN } from "./MN";
import { MS } from "./MS";
import { MO } from "./MO";
import { MT } from "./MT";
import { NE } from "./NE";
import { NV } from "./NV";
import { NH } from "./NH";
import { NJ } from "./NJ";
import { NM } from "./NM";
import { NY } from "./NY";
import { NC } from "./NC";
import { ND } from "./ND";
import { OH } from "./OH";
import { OK } from "./OK";
import { OR } from "./OR";
import { PA } from "./PA";
import { RI } from "./RI";
import { SC } from "./SC";
import { SD } from "./SD";
import { TN } from "./TN";
import { TX } from "./TX";
import { UT } from "./UT";
import { VT } from "./VT";
import { VA } from "./VA";
import { WA } from "./WA";
import { WV } from "./WV";
import { WI } from "./WI";
import { WY } from "./WY";

export const ALL_STATES: StateRegulation[] = [
  AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA,
  HI, ID, IL, IN, IA, KS, KY, LA, ME, MD,
  MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ,
  NM, NY, NC, ND, OH, OK, OR, PA, RI, SC,
  SD, TN, TX, UT, VT, VA, WA, WV, WI, WY,
];

export const STATE_MAP: Record<string, StateRegulation> = Object.fromEntries(
  ALL_STATES.map((s) => [s.stateCode.toLowerCase(), s])
);

export function getState(code: string): StateRegulation | undefined {
  return STATE_MAP[code.toLowerCase()];
}
