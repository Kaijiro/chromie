import {SpellAuraRemovedParser} from "../../../src/domain/parser/matchers/implementations/SpellAuraRemovedParser";

describe("SpellAuraRemoved", () => {
    const EVENT_LINE = "8/12 21:18:29.434  SPELL_AURA_REMOVED,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,287790,\"Pulsar arcanique\",0x1,BUFF";

    it("should parse the line and return a SpellAuraRemovedEvent", () => {
        const parser: SpellAuraRemovedParser = new SpellAuraRemovedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
