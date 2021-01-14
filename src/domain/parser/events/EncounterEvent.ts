import Encounters from "../../encounters/Encounters";

export default interface EncounterEvent {
    applyOn(encounters: Encounters): void
}
