import SpellPeriodicHealParser from "../../../src/domain/parser/matchers/implementations/SpellPeriodicHealParser";

describe("SpellPeriodicHeal", () => {
    const EVENT_LINE = "8/12 21:18:30.950  SPELL_PERIODIC_HEAL,Creature-0-3770-2164-22359-60849-000051BB0D,\"Statue du Serpent de jade\",0x2111,0x0,Player-1390-06D03DE6,\"Kyrron-Hyjal\",0x514,0x0,198533,\"Brume apaisante\",0x8,Player-1390-06D03DE6,0000000000000000,487026,487026,13235,1611,7904,77234,1,250,1000,0,182.16,1457.13,1518,1.5018,420,2642,2642,2642,0,nil";

    it("should parse the line and return a SpellPeriodicHealEvent", () => {
        const parser: SpellPeriodicHealParser = new SpellPeriodicHealParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
