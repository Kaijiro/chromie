const electron = require("electron");
const contextBridge = electron.contextBridge;
const ipcRenderer = electron.ipcRenderer;

const validChannels = ['CHROMIE_IPC_CHANNEL'];

console.debug("Preload script is enriching the window object !");

contextBridge.exposeInMainWorld('chromie_ipc', {
    'send': (channel, data) => {
        if(validChannels.includes(channel)){
            ipcRenderer.send(channel, data);
        }
    }
});
