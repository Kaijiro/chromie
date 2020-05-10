import {EncounterEvent} from "../events/EncounterEvent";

export interface LineParser {
    parse(line: string): EncounterEvent | undefined
}
