import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellAuraRefreshEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
