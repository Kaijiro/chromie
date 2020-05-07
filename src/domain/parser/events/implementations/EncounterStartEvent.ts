import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";
import Encounter from "../../../encounters/Encounter";

export class EncounterStartEvent implements EncounterEvent {
    constructor(private encounterName: string) {

    }

    applyOn(encounters: Encounters): void {
        encounters.add(Encounter.with(this.encounterName));
    }
}
