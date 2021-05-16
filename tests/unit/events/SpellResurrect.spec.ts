import SpellResurrectParser from "../../../src/domain/parser/matchers/implementations/SpellResurrectParser";
import Encounter from "../../../src/domain/encounters/Encounter";
import SpellResurrectEvent from "../../../src/domain/parser/events/implementations/SpellResurrectEvent";

describe("SpellResurrect", () => {
    const EVENT_LINE = "8/12 21:21:28.701  SPELL_RESURRECT,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,Player-1390-09EFFE21,\"Pouettiro-Hyjal\",0x511,0x0,20484,\"Renaissance\",0x8";

    it("should parse the line and return a SpellResurrectEvent", () => {
        const parser: SpellResurrectParser = new SpellResurrectParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounter[] = [];
        encounters.push(new Encounter(""));

        const event = new SpellResurrectEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounter[] = [];
        expectedEncounters.push(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
