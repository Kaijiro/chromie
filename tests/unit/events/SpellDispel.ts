import SpellDispelParser from "../../../src/domain/parser/matchers/implementations/SpellDispelParser";

describe("SpellDispel", () => {
    const EVENT_LINE = "9/26 22:56:46.251  SPELL_DISPEL,Player-1390-09EFFE21,\"Pouettiro-Hyjal\",0x511,0x20,Player-1390-082FD66D,\"Cyrå-Hyjal\",0x514,0x1,115450,\"Détoxification\",0x8,303657,\"Jaillissement des Arcanes\",64,DEBUFF";

    it("should parse the line and return a SpellDispelEvent.ts", () => {
        const parser: SpellDispelParser = new SpellDispelParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
