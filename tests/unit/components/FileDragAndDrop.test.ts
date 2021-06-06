import {shallowMount} from "@vue/test-utils";
import FileDragAndDrop from "../../../src/components/FileDragAndDrop.vue";
import Mock = jest.Mock;

describe("FileDragAndDrop component", () => {
    let component: any;

    beforeEach(() => {
        component = shallowMount(FileDragAndDrop, {});
    });

    it(`should react when a file is dropped`, () => {
        const fileDroppedMock = jest.fn();

        component.vm.addFile = fileDroppedMock;
        component.find('.container').trigger('drop');

        expect(fileDroppedMock).toBeCalledTimes(1);
    });

    it(`should call the IPC channel to retrieve the encounters from the dropped file`, () => {
        // TODO It is actually a will to treat ONLY the first dropped file. Later, treat all file dropped.
        const IPCSendMock = window.chromie_ipc.send as Mock;

        component.find('.container').trigger('drop', {
            dataTransfer: {
                files: [{
                    name: "filename",
                    path: "/path/to/file"
                }]
            }
        });

        expect(IPCSendMock).toBeCalledTimes(1);
        expect(IPCSendMock.mock.calls[0][0]).toBe("CHROMIE_IPC_CHANNEL");
        expect(IPCSendMock.mock.calls[0][1]).toBe("/path/to/file");
    });

    it(`should display the drag and drop prompt`, () => {
        // It's currently a bit dirty to access these private attributes but this is the only way right now
        expect(component["__app"]._container).toMatchSnapshot();
    });
});
