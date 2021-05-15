export {}; // Turn the file into a module

interface ChromieIPC {
    send: Function;
    on: Function;
}

declare global {
    interface Window { chromie_ipc: ChromieIPC }
}
