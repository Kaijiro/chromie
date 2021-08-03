import SpellInterruptParser from "../../../src/domain/parser/matchers/implementations/SpellInterruptParser";

describe("SpellInterrupt", () => {
    const EVENT_LINE = "9/26 22:51:20.576  SPELL_INTERRUPT,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x80,Vehicle-0-3769-2164-22244-153059-00000D23B2,\"Aethanel\",0xa48,0x0,116705,\"Pique de main\",0x1,297972,\"Chaîne d’éclairs\",8";

    it("should parse the line and return a SpellInterruptEvent", () => {
        const parser: SpellInterruptParser = new SpellInterruptParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
