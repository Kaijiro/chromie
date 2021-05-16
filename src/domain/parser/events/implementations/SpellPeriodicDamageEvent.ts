import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellPeriodicDamageEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
