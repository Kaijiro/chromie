import EncounterEndParser from "../../../src/domain/parser/matchers/implementations/EncounterEndParser";
import Encounter from "../../../src/domain/encounters/Encounter";
import EncounterEndEvent from "../../../src/domain/parser/events/implementations/EncounterEndEvent";

describe("EncounterEnd", () => {
    const EVENT_LINE = "8/12 21:21:53.467  ENCOUNTER_END,2311,\"Cour de la reine\",15,13,0";

    it("should parse the line and return a EncounterEndEvent", () => {
        const parser: EncounterEndParser = new EncounterEndParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounter[] = [];
        encounters.push(new Encounter(""));

        const event = new EncounterEndEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounter[] = [];
        expectedEncounters.push(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});