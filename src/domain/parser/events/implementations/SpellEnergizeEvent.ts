import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellEnergizeEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
