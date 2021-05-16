import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellPeriodicHealEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
