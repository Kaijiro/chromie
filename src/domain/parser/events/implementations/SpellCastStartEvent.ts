import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellCastStartEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
