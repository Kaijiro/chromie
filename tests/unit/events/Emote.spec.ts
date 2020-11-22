import {EmoteParser} from "../../../src/domain/parser/matchers/implementations/EmoteParser";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";
import {EmoteEvent} from "../../../src/domain/parser/events/implementations/EmoteEvent";

describe("Emote", () => {
    const EVENT_LINE = "8/12 21:18:59.112  EMOTE,Creature-0-3770-2164-22359-153370-000051B654,\"En formation\",0000000000000000,nil,|TInterface\\ICONS\\SPELL_HOLY_PRAYEROFHEALING.BLP:20|t La reine Azshara promulgue son décret |cFFFF0404|Hspell:298050|h[En formation]|h|r !";

    it("should parse the line and return a EmoteEvent", () => {
        const parser: EmoteParser = new EmoteParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeNull();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new EmoteEvent();

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
