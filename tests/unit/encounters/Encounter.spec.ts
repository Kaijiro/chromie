import Encounter from "../../../src/domain/encounters/Encounter";

describe('Encounter', () => {
    [1, 3, 5, 40].forEach(number => {
        it(`should add ${number} fighters to the encounter`, () => {
            const encounter: Encounter = new Encounter("");

            for(let i = 0; i < number; i++){
                encounter.addFighter(`Fighter ${i}`);
            }

            expect(encounter.fighters.length).toBe(number);

            for(let i = 0; i < number; i++){
                expect(encounter.fighters[i].id).toBe(`Fighter ${i}`);
            }
        });
    });

    it("should add an action to the designed fighter", () => {
        const encounter: Encounter = new Encounter("");
        encounter.addFighter("MyFighter");

        const action = {spellId: 123, spellName: "MySpell", targetId: "Creature-123", targetName: "Big Bad Dummy"};
        encounter.addActionFor("MyFighter", action);

        const fighter = encounter.fighters.find(fighter => fighter.id === "MyFighter");
        expect(fighter).not.toBeUndefined();
        expect(fighter?.actions.length).not.toBe(0);
    });
});
