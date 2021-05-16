import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellAuraBrokenSpellEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}