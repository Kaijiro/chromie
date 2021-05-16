import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
