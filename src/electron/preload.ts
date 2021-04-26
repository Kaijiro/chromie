import IPCController from "./controller/IPCController";

console.debug("Preload script launched");

const modules = [
    new IPCController()
];

modules.forEach(module => module.register());
