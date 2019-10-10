import {expect} from "chai";
import Encounter from "@/domain/Encounter";

describe('Encounter', () => {

    describe('::countFighters()', () => {
        [0, 1, 7, 15, 40].forEach(number => {
            it(`should return ${number} when ${number} fighter(s) have been added to the encounter`, () => {
                const encounter: Encounter = Encounter.with("");

                for (let i = 0; i < number; i++) {
                    encounter.addFighter(`Fighter number ${i}`);
                }

                expect(encounter['fighters'].length).to.equal(number);
            });
        });
    });

    describe('::getName()', () => {
        it(`should return "Uu'nat" when the encounter is constructed with "Uu'nat"`, () => {
            let encounter: Encounter = Encounter.with(`Uu'nat`);

            expect(encounter['name']).to.equal(`Uu'nat`);
        });
    });
});
