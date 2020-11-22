import {SpellAuraBrokenSpellParser} from "../../../src/domain/parser/matchers/implementations/SpellAuraBrokenSpellParser";

describe("SpellAuraBrokenSpell", () => {
    const EVENT_LINE = "8/12 21:18:38.490  SPELL_AURA_BROKEN_SPELL,Player-1390-08618EF5,\"Testøstérøne-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,197214,\"Fracture\",0x5,295367,\"Flamme antique\",4,DEBUFF";

    it("should parse the line and return a SpellAuraBrokenSpellEvent", () => {
        const parser: SpellAuraBrokenSpellParser = new SpellAuraBrokenSpellParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
