import {contextBridge, ipcRenderer} from "electron";
import {IpcRendererEvent} from "electron/renderer";

export default class IPCExposerModule {
    private validChannels = ['CHROMIE_IPC_CHANNEL'];

    public register(): void {
        console.debug("Registering module IPCExposerModule");

        contextBridge.exposeInMainWorld('chromie_ipc', {
            'send': (channel: string, data: any) => {
                if (this.validChannels.includes(channel)) {
                    ipcRenderer.send(channel, data);
                }
            },
            'on': (channel: string, callback: (event: IpcRendererEvent, ...args: any[]) => void) => {
                if (this.validChannels.includes(channel)) {
                    ipcRenderer.on(channel, callback);
                }
            }
        });
    }
}
