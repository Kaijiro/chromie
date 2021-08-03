import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellDispelEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
