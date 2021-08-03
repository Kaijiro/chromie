import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellInterruptEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
