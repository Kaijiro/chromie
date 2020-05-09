import {Encounters} from "../../../src/domain/encounters/Encounters";
import {CombatantInfoEvent} from "../../../src/domain/parser/events/implementations/CombatantInfoEvent";
import Encounter from "../../../src/domain/encounters/Encounter";
import {CombatantInfoParser} from "../../../src/domain/parser/matchers/implementations/CombatantInfoParser";
import {EncounterEvent} from "../../../src/domain/parser/events/EncounterEvent";

describe("CombatantInfoParser and CombatantInfoEvent", () => {

    const EVENT_LINE = "1/20 22:04:27.857  COMBATANT_INFO,Player-1390-09EFFE21,0,632,1469,19712,12299,0,0,0,1446,1446,1446,49,83,1253,1253,1253,0,1054,595,595,595,2887,270,(123986,116841,197908,116844,122783,115313,274963),(208683,202424,202577,202523),[386,450,0,185,450,0,463,450,0,218,450,0,13,450,0,386,435,2,387,435,2,102,435,2,15,435,2,13,435,2,76,450,4,386,450,4,38,450,4,83,450,4,13,450,4],[27,3,0,16,1,1,17,3,2],[(159302,450,(),(5448,1617,4786,6270),()),(158075,477,(),(6316,4932,4933),()),(168348,435,(),(4823,1502,4786,6268),()),(0,0,(),(),()),(159330,450,(),(5448,1617,4786,6269),()),(159325,440,(),(5010,4802,1612,4783),(168639,120)),(159345,440,(),(5010,1612,4783),()),(159343,440,(),(5010,4802,1612,4783),(168639,120)),(159324,440,(),(5010,4802,1612,4783),(168642,120)),(155889,435,(),(5008,1597,5855,4783),()),(169156,415,(6108,0,0),(4779,1472,4786),()),(168977,415,(6108,0,0),(4779,41,1472,4786),()),(169306,430,(),(4799,1502,4786),()),(169316,430,(),(4799,1502,4786),()),(169223,472,(),(6273,1472),()),(160216,445,(5965,0,0),(5010,4802,1612,5850,4784),(168639,120)),(159669,440,(),(5010,1612,4783),()),(160544,120,(),(),())],[Player-1390-0A48B8B2,21562,Player-1390-0A68E263,1459,Player-1390-09EFFE21,297039,Player-1390-09EFFE21,251837,Player-1390-09EFFE21,298268,Player-1390-09EFFE21,296050],3,0,0,0";

    it(`should add a player to the encounter`, () => {
        const encounters: Encounters = new Encounters();
        const event: CombatantInfoEvent = new CombatantInfoEvent('Player-1390-09EFFE21');

        encounters.add(Encounter.with(""));
        event.applyOn(encounters);

        expect(encounters['encounters'][0]['fighters'].length).toBe(1);
    });

    it(`should add a player to the current encounter`, () => {
        const encounters: Encounters = new Encounters();
        encounters.add(Encounter.with(""));
        const parser: CombatantInfoParser = new CombatantInfoParser();

        const event: EncounterEvent | undefined = parser.parse(EVENT_LINE);
        expect(event).not.toBeUndefined();
        if (event === undefined) {
            return;
        }

        const combatantInfoEvent = (event as CombatantInfoEvent);
        combatantInfoEvent.applyOn(encounters);

        expect(encounters['encounters'][0]['fighters'][0]).toBe('Player-1390-09EFFE21');
    });
});
