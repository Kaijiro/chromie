import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellAuraAppliedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
