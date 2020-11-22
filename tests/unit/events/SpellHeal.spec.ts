import SpellHealParser from "../../../src/domain/parser/matchers/implementations/SpellHealParser";

describe('SpellHeal', () => {
    const EVENT_LINE = "8/12 21:18:29.830  SPELL_HEAL,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,270117,\"Visage impassible\",0x1,Player-1390-093A288C,0000000000000000,483654,488720,13585,1612,4066,43746,3,100,100,0,212.32,1474.13,1518,1.5016,435,16230,16230,0,0,nil";

    it("should parse the line and return a SpellHealEvent", () => {
        const parser: SpellHealParser = new SpellHealParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
