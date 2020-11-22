import SpellAbsorbedParser from "../../../src/domain/parser/matchers/implementations/SpellAbsorbedParser";
import Encounters from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";
import SpellAbsorbedEvent from "../../../src/domain/parser/events/implementations/SpellAbsorbedEvent";

describe("SpellAbsorbed", () => {
    const EVENT_LINE = "8/12 21:18:29.809  SPELL_ABSORBED,Creature-0-3770-2164-22359-152852-000051BAA7,\"Pashmar la Fanatique\",0xa48,0x80,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,115069,\"Report\",0x1,71591,124574";

    it("should parse the line and return a SpellAbsorbed", () => {
        const parser: SpellAbsorbedParser = new SpellAbsorbedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied to an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new SpellAbsorbedEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
