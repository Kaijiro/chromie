import IPCExposerModule from "./modules/IPCExposerModule";

// Electron preload script act as a bridge between the web page and the backend Node API.
// We use this script to expose backend APIs to front. Use with caution.

console.debug("Preload script launched");

const modules = [
    new IPCExposerModule()
];

modules.forEach(module => module.register());
