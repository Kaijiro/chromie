import PartyKillParser from "../../../src/domain/parser/matchers/implementations/PartyKillParser";

describe("PartyKill", () => {
    const EVENT_LINE = "9/26 22:57:37.123  PARTY_KILL,Player-1390-09FAE6D0,\"Võssler-Hyjal\",0x512,0x0,Creature-0-3769-2164-22244-100943-00000D2635,\"Totem de mur terrestre\",0x2112,0x0,0";

    it("should parse the line and return a PartyKillEvent", () => {
        const parser: PartyKillParser = new PartyKillParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
