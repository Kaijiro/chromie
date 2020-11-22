import SpellCastSuccessParser from "../../../src/domain/parser/matchers/implementations/SpellCastSuccessParser";

describe("SpellCastSuccess", () => {
    const EVENT_LINE = "8/12 21:18:29.434  SPELL_CAST_SUCCESS,Player-1390-06D03DE6,\"Kyrron-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,8921,\"Éclat lunaire\",0x40,Player-1390-06D03DE6,0000000000000000,487026,487026,13235,1611,7904,77234,1,250,1000,0,183.86,1436.85,1518,1.4615,420";

    it("should parse the line and return a SpellCastSuccessEvent", () => {
        const parser: SpellCastSuccessParser = new SpellCastSuccessParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
