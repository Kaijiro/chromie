import {shallowMount} from "@vue/test-utils";
import App from "../../../src/components/App.vue";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("App component", () => {

    it(`should display the drag and drop component when no file has been dropped`, () => {
        const mockStore = {
            state: {
                encounters: []
            }
        };
        const component = shallowMount(App, {
            global: {
                mocks: {
                    $store: mockStore
                }
            }
        });

        // It's currently a bit dirty to access these private attributes but this is the only way right now
        expect(component["__app"]._container).toMatchSnapshot();
    });

    it(`should display the sidebar and the main area when encounters are available`, () => {
        const encounter = new Encounter("A boss");
        const mockStore = {
            state: {
                encounters: [encounter]
            }
        };
        const component = shallowMount(App, {
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
