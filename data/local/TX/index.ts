import { LocalRegulation } from "../../localTypes";

// Original 6
import { austin } from "./austin";
import { houston } from "./houston";
import { sanAntonio } from "./san-antonio";
import { dallas } from "./dallas";
import { fortWorth } from "./fort-worth";
import { edwardsAquifer } from "./edwards-aquifer";

// DFW Metro — original batch
import { tarrantCounty } from "./tarrant-county";
import { arlington } from "./arlington";
import { denton } from "./denton";
import { collinCounty } from "./collin-county";
import { plano } from "./plano";
import { mckinney } from "./mckinney";

// DFW Metro — expanded
import { frisco } from "./frisco";
import { irving } from "./irving";
import { garland } from "./garland";
import { grandPrairie } from "./grand-prairie";
import { lewisville } from "./lewisville";
import { allen } from "./allen";
import { richardson } from "./richardson";
import { carrollton } from "./carrollton";
import { dentonCounty } from "./denton-county";

// Houston Metro — original batch
import { montgomeryCounty } from "./montgomery-county";
import { fortBendCounty } from "./fort-bend-county";
import { galvestonCounty } from "./galveston-county";
import { theWoodlands } from "./the-woodlands";

// Houston Metro — expanded
import { pearland } from "./pearland";
import { leagueCity } from "./league-city";
import { sugarLand } from "./sugar-land";
import { pasadena } from "./pasadena";
import { conroe } from "./conroe";
import { brazoriaCounty } from "./brazoria-county";
import { hcfcd } from "./hcfcd";

// Austin Metro — original batch
import { travisCounty } from "./travis-county";
import { williamsonCounty } from "./williamson-county";
import { roundRock } from "./round-rock";
import { cedarPark } from "./cedar-park";

// Austin Metro — expanded
import { georgetown } from "./georgetown";
import { leander } from "./leander";
import { pflugerville } from "./pflugerville";
import { kyle } from "./kyle";
import { buda } from "./buda";
import { sanMarcos } from "./san-marcos";
import { haysCounty } from "./hays-county";

// San Antonio Metro
import { newBraunfels } from "./new-braunfels";
import { comalCounty } from "./comal-county";

// Secondary Cities — original batch
import { elPaso } from "./el-paso";
import { corpusChristi } from "./corpus-christi";
import { lubbock } from "./lubbock";
import { amarillo } from "./amarillo";
import { mcallen } from "./mcallen";
import { midland } from "./midland";
import { waco } from "./waco";
import { collegeStation } from "./college-station";
import { beaumont } from "./beaumont";
import { laredo } from "./laredo";

// Secondary Cities — expanded
import { brownsville } from "./brownsville";
import { harlingen } from "./harlingen";
import { edinburg } from "./edinburg";
import { odessa } from "./odessa";
import { tyler } from "./tyler";
import { abilene } from "./abilene";
import { killeen } from "./killeen";
import { bryan } from "./bryan";
import { victoria } from "./victoria";

export const TX_LOCAL_JURISDICTIONS: LocalRegulation[] = [
  // Major cities — original 6
  austin,
  houston,
  dallas,
  sanAntonio,
  fortWorth,

  // DFW Metro cities
  arlington,
  plano,
  garland,
  irving,
  grandPrairie,
  frisco,
  mckinney,
  carrollton,
  richardson,
  lewisville,
  allen,
  denton,

  // DFW Metro counties
  tarrantCounty,
  collinCounty,
  dentonCounty,

  // Houston Metro cities
  pearland,
  leagueCity,
  sugarLand,
  pasadena,
  conroe,

  // Houston Metro counties & districts
  montgomeryCounty,
  fortBendCounty,
  galvestonCounty,
  brazoriaCounty,
  hcfcd,
  theWoodlands,

  // Austin Metro cities
  roundRock,
  cedarPark,
  georgetown,
  leander,
  pflugerville,
  kyle,
  buda,
  sanMarcos,

  // Austin Metro counties
  travisCounty,
  williamsonCounty,
  haysCounty,

  // San Antonio Metro
  newBraunfels,
  comalCounty,

  // Major statewide cities
  elPaso,
  corpusChristi,
  lubbock,
  amarillo,
  mcallen,
  brownsville,
  laredo,
  harlingen,
  edinburg,
  midland,
  odessa,
  waco,
  abilene,
  killeen,
  collegeStation,
  bryan,
  beaumont,
  tyler,
  victoria,

  // Regional authorities
  edwardsAquifer,
];

export function getLocalJurisdiction(localCode: string): LocalRegulation | undefined {
  return TX_LOCAL_JURISDICTIONS.find((j) => j.localCode === localCode);
}
