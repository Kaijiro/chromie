import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellAuraRemovedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}