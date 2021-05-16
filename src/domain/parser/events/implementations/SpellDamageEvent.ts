import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellDamageEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}