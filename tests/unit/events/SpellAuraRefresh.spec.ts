import SpellAuraRefreshParser from "../../../src/domain/parser/matchers/implementations/SpellAuraRefreshParser";

describe("SpellAuraRefresh", () => {
    const EVENT_LINE = "8/12 21:18:31.049  SPELL_AURA_REFRESH,Player-1390-06D03DE6,\"Kyrron-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,164812,\"Éclat lunaire\",0x40,DEBUFF";

    it("should parse the line and return a SpellAuraRefresh event", () => {
        const parser: SpellAuraRefreshParser = new SpellAuraRefreshParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
