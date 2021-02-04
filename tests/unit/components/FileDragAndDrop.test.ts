import {shallowMount} from "@vue/test-utils";
import FileDragAndDrop from "../../../src/components/FileDragAndDrop.vue";

describe("FileDragAndDrop component", () => {
    let component: any;

    beforeEach(() => {
        component = shallowMount(FileDragAndDrop, {});
    });

    it(`should not crash`, () => {
        expect(component.vm.files).toEqual([]);
    });
});
