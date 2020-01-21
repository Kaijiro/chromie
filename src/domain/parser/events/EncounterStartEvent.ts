import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";
import {Encounters} from "@/domain/encounters/Encounters";
import Encounter from "@/domain/encounters/Encounter";

export class EncounterStartEvent implements EncounterEvent {
    constructor(private encounterName: string) {

    }

    applyOn(encounters: Encounters): void {
        encounters.add(Encounter.with(this.encounterName));
    }
}
