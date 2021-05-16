import UnitDiedParser from "../../../src/domain/parser/matchers/implementations/UnitDiedParser";
import Encounter from "../../../src/domain/encounters/Encounter";
import UnitDiedEvent from "../../../src/domain/parser/events/implementations/UnitDiedEvent";

describe("UnitDied", () => {
    const EVENT_LINE = "8/12 21:18:53.643  UNIT_DIED,0000000000000000,nil,0x80000000,0x80000000,Creature-0-3770-2164-22359-148432-000051BB94,\"Totem de fureur de Tonneraan\",0x2114,0x0,0";

    it("should parse the line and return a UnitDiedEvent", () => {
        const parser: UnitDiedParser = new UnitDiedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounter[] = [];
        encounters.push(new Encounter(""));

        const event = new UnitDiedEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounter[] = [];
        expectedEncounters.push(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
