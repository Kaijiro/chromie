import {ipcRenderer, contextBridge} from "electron";

export default class IPCController {
    private validChannels = ['CHROMIE_IPC_CHANNEL'];

    constructor() {
        console.debug("Registering module IPCController");
    }

    public register(){
        contextBridge.exposeInMainWorld('chromie_ipc', {
            'send': (channel: string, data: any) => {
                if(this.validChannels.includes(channel)){
                    ipcRenderer.send(channel, data);
                }
            }
        });
    }
}
