import {SpellAuraBrokenParser} from "../../../src/domain/parser/matchers/implementations/SpellAuraBrokenParser";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";
import {SpellAuraBrokenEvent} from "../../../src/domain/parser/events/implementations/SpellAuraBrokenEvent";

describe("SpellAuraBroken", () => {
    const EVENT_LINE = "8/12 21:19:22.718  SPELL_AURA_BROKEN,Player-1390-08618EF5,\"Testøstérøne-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,197214,\"Fracture\",0x5,DEBUFF";

    it("should parse the line and return a SpellAuraBroken", () => {
        const parser: SpellAuraBrokenParser = new SpellAuraBrokenParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new SpellAuraBrokenEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
