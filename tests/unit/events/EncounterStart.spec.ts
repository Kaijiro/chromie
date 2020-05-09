import {Encounters} from "../../../src/domain/encounters/Encounters";
import {EncounterStartEvent} from "../../../src/domain/parser/events/implementations/EncounterStartEvent";
import {EncounterStartParser} from "../../../src/domain/parser/matchers/implementations/EncounterStartParser";
import {EncounterEvent} from "../../../src/domain/parser/events/EncounterEvent";

describe("EncounterStartParser and EncounterStartEvent", () => {

    const EVENT_LINE = "7/4 22:24:39.439  ENCOUNTER_START,2273,\"Uu’nat, héraut du Vide\",15,16,2096";

    it(`should add an Encounter to the encounter list`, () => {
        const encounters: Encounters = new Encounters();
        const event: EncounterStartEvent = new EncounterStartEvent("");

        event.applyOn(encounters);

        expect(encounters['encounters'].length).toBe(1);
    });

    it(`should add an Encounter with the specified name to the encounter list`, () => {
        const encounters: Encounters = new Encounters();
        const parser: EncounterStartParser = new EncounterStartParser();

        const event: EncounterEvent | undefined = parser.parse(EVENT_LINE);
        expect(event).not.toBeUndefined();
        if (event === undefined) {
            return;
        }

        const encounterStartEvent = (event as EncounterStartEvent);
        encounterStartEvent.applyOn(encounters);

        expect(encounters['encounters'][0]['name']).toBe("Uu’nat, héraut du Vide");
    });
});