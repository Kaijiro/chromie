import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellPeriodicMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}