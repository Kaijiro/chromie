import {EncounterEndParser} from "../../../src/domain/parser/matchers/implementations/EncounterEndParser";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";
import {EncounterEndEvent} from "../../../src/domain/parser/events/implementations/EncounterEndEvent";

describe("EncounterEnd", () => {
    const EVENT_LINE = "8/12 21:21:53.467  ENCOUNTER_END,2311,\"Cour de la reine\",15,13,0";

    it("should parse the line and return a EncounterEndEvent", () => {
        const parser: EncounterEndParser = new EncounterEndParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new EncounterEndEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});