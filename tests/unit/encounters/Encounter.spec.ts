import Encounter from "../../../src/domain/encounters/Encounter";

describe('Encounter', () => {

    describe(`::addFighter()`, () => {
        [1, 3, 5, 40].forEach(number => {
            it(`should add ${number} to the encounter`, () => {
                const encounter: Encounter = new Encounter("");

                for(let i = 0; i < number; i++){
                    encounter.addFighter(`Fighter ${i}`);
                }

                expect(encounter['fighters'].length).toBe(number);
            });
        });
    });

    describe('::countFighters()', () => {
        [0, 1, 7, 15, 40].forEach(number => {
            it(`should return ${number} when ${number} fighter(s) have been added to the encounter`, () => {
                const encounter: Encounter = new Encounter("");

                for (let i = 0; i < number; i++) {
                    encounter.addFighter(`Fighter number ${i}`);
                }

                expect(encounter.countFighters()).toBe(number);
            });
        });
    });

    describe('::getName()', () => {
        it(`should return "Uu'nat" when the encounter is constructed with "Uu'nat"`, () => {
            let encounter: Encounter = new Encounter(`Uu'nat`);

            expect(encounter['name']).toBe(`Uu'nat`);
        });
    });
});
