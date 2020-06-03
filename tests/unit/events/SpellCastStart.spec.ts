import {SpellCastStartParser} from "../../../src/domain/parser/matchers/implementations/SpellCastStartParser";

describe('SpellCastStart', () => {
    const EVENT_LINE = "8/12 21:18:29.830  SPELL_CAST_START,Player-1390-092698C0,\"Scadavre-Hyjal\",0x514,0x0,0000000000000000,nil,0x80000000,0x80000000,116011,\"Rune de puissance\",0x40";

    it("should parse the line and return a SpellCastStart", () => {
        const parser: SpellCastStartParser = new SpellCastStartParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
