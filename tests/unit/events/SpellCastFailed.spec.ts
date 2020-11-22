import {SpellCastFailedParser} from "../../../src/domain/parser/matchers/implementations/SpellCastFailedParser";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";
import {SpellCastFailedEvent} from "../../../src/domain/parser/events/implementations/SpellCastFailedEvent";

describe("SpellFailed", () => {
    const EVENT_LINE = "8/12 21:19:02.639  SPELL_CAST_FAILED,Player-1390-09EFFE21,\"Pouettiro-Hyjal\",0x511,0x0,0000000000000000,nil,0x80000000,0x80000000,191837,\"Réceptacle d’essence\",0x8,\"Récupération incomplète\"";

    it("should parse the line and return a SpellCastFailedEvent", () => {
        const parser: SpellCastFailedParser = new SpellCastFailedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should do not anything when applied on an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new SpellCastFailedEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
