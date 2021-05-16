import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellHealEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
