import EncounterEvent from "../events/EncounterEvent";

export default interface LineParser {
    parse(line: string): EncounterEvent | undefined
}
