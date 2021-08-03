import {shallowMount} from "@vue/test-utils";
import Planner from "../../../src/components/Planner.vue";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("Planner component", () => {

    const encounter = new Encounter("Boss n°1");
    encounter.addFighter("FighterXYZ");

    xit("should display the list of players of the encounters", () => {
        const mockStore = {
            getters: {
                selectedEncounter: encounter
            }
        };

        const component = shallowMount(Planner, {
            global: {
                mocks: {
                    $store: mockStore
                }
            }
        });

        expect(component["__app"]._container).toMatchSnapshot();
    });

    it("should display the list of enemy of the encounters", () => {

    });

    it("should display the list of technics and spells used by a player when his name is clicked", () => {

    });

    it("should display the list of technics and spells used by an enemy when his name is clicked", () => {

    });
});
