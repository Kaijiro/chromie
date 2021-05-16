import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellResurrectEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}