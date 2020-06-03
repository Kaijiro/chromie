import {SpellMissedParser} from "../../../src/domain/parser/matchers/implementations/SpellMissedParser";

describe("SpellMissed", () => {
    const EVENT_LINE = "8/12 21:18:29.756  SPELL_MISSED,Player-1390-0994B615,\"Raigorn-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,51533,\"Esprit farouche\",0x8,PARRY,nil";

    it("should parse the line and return a SpellMissedEvent", () => {
        const parser: SpellMissedParser = new SpellMissedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
