export {}; // Turn the file into a module

interface ChromieIPC {
    send: Function;
}

declare global {
    interface Window { chromie_ipc: ChromieIPC }
}
