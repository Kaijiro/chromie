import {expect} from "chai";
import Encounter from "@/domain/Encounter";

describe('Encounter', () => {

    describe('::countFighters()', () => {
        [0, 1, 7, 15, 40].forEach(number => {
            it(`should return ${number} when ${number} fighter(s) have been added to the encounter`, () => {
                let encounter: Encounter = new Encounter();

                for (let i = 0; i < number; i++) {
                    encounter.addFighter(`Fighter number ${i}`);
                }

                expect(encounter.countFighters()).to.equal(number);
            });
        });
    });
});
