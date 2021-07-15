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
});
