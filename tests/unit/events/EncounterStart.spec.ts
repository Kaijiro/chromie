import {Encounters} from "@/domain/encounters/Encounters";
import {EncounterStartEvent} from "@/domain/parser/events/implementations/EncounterStartEvent";
import {expect} from 'chai';
import {EncounterStartParser} from "@/domain/parser/matchers/implementations/EncounterStartParser";
import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";

describe("EncounterStartParser and EncounterStartEvent", () => {

    const EVENT_LINE = "7/4 22:24:39.439  ENCOUNTER_START,2273,\"Uu’nat, héraut du Vide\",15,16,2096";

    it(`should add an Encounter to the encounter list`, () => {
        const encounters: Encounters = new Encounters();
        const event: EncounterStartEvent = new EncounterStartEvent("");

        event.applyOn(encounters);

        expect(encounters['encounters'].length).to.be.equal(1);
    });

    it(`should add an Encounter with the specified name to the encounter list`, () => {
        const encounters: Encounters = new Encounters();
        const parser: EncounterStartParser = new EncounterStartParser();

        const event: EncounterEvent | undefined = parser.parse(EVENT_LINE);
        expect(event).not.undefined;
        if (event === undefined) {
            return;
        }

        const encounterStartEvent = (event as EncounterStartEvent);
        encounterStartEvent.applyOn(encounters);

        expect(encounters['encounters'][0]['name']).to.be.equal("Uu’nat, héraut du Vide");
    });
});