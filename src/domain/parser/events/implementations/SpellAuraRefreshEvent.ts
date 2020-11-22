import EncounterEvent from "../EncounterEvent";
import Encounters from "../../../encounters/Encounters";

export default class SpellAuraRefreshEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
