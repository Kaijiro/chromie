import SwingDamageParser from "../../../src/domain/parser/matchers/implementations/SwingDamageParser";

describe("SwingDamage", () => {
    const EVENT_LINE = "8/12 21:18:29.786  SWING_DAMAGE,Creature-0-3770-2164-22359-152852-000051BAA7,\"Pashmar la Fanatique\",0xa48,0x80,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152852-000051BAA7,0000000000000000,44695456,44695456,0,0,2700,0,3,0,100,0,208.94,1480.70,1518,4.7443,123,21296,124574,-1,1,0,0,71591,nil,nil,nil";

    it("should parse the line and return a SwingDamageEvent", () => {
        const parser: SwingDamageParser = new SwingDamageParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
