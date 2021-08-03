import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class PartyKillEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]) {
    }
}
