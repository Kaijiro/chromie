import {shallowMount} from "@vue/test-utils";
import Sidebar from "../../../src/components/Sidebar.vue";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("Sidebar component", () => {
    it(`should display a list of all encounters`, () => {
        const mockStore = {
            state: {
                encounters: [new Encounter("Boss n°1"), new Encounter("Boss n°2"), new Encounter("Boss n°3")]
            }
        };
        const component = shallowMount(Sidebar, {
            global: {
                mocks: {
                    $store: mockStore
                }
            }
        });

        // It's currently a bit dirty to access these private attributes but this is the only way right now
        expect(component["__app"]._container).toMatchSnapshot();
    });
});
