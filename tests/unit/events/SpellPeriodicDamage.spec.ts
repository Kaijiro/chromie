import SpellPeriodicDamageParser from "../../../src/domain/parser/matchers/implementations/SpellPeriodicDamageParser";

describe("SpellPeriodicDamage", () => {
    const EVENT_LINE = "8/12 21:18:30.227  SPELL_PERIODIC_DAMAGE,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,301624,\"Venin convulsif\",0x8,Creature-0-3770-2164-22359-152853-000051BAA7,0000000000000000,44687727,44695456,0,0,2700,0,3,40,100,0,183.28,1471.38,1518,4.5994,123,496,496,-1,8,0,0,0,nil,nil,nil";

    it("should parse the line and return a SpellPeriodicDamage", () => {
        const parser: SpellPeriodicDamageParser = new SpellPeriodicDamageParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
