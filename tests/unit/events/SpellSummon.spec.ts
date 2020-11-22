import SpellSummonParser from "../../../src/domain/parser/matchers/implementations/SpellSummonParser";

describe("SpellSummon", () => {
    const EVENT_LINE = "8/12 21:18:29.756  SPELL_SUMMON,Player-1390-0994B615,\"Raigorn-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-29264-000051BB83,\"Esprit du loup\",0xa28,0x0,228562,\"Esprit farouche\",0x8";

    it("should parse the line and return a SpellSummonEvent", () => {
        const parser: SpellSummonParser = new SpellSummonParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
