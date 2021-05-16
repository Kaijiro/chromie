import Encounter from "../../encounters/Encounter";

export default interface EncounterEvent {
    applyOn(encounters: Encounter[]): void
}
