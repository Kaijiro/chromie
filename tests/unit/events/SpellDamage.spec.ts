import SpellDamageParser from "../../../src/domain/parser/matchers/implementations/SpellDamageParser";

describe("SpellDamage", () => {
    const EVENT_LINE = "8/12 21:18:29.434  SPELL_DAMAGE,Player-1390-06D03DE6,\"Kyrron-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,164812,\"Éclat lunaire\",0x40,Creature-0-3770-2164-22359-152853-000051BAA7,0000000000000000,44694161,44695456,0,0,2700,0,3,40,100,0,183.81,1480.65,1518,4.5048,123,1295,1294,-1,64,0,0,0,nil,nil,nil";

    it("should parse the line and return a SpellDamageEvent", () => {
        const parser: SpellDamageParser = new SpellDamageParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
