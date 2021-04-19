// As Electron overload some types and add some properties, we use a definition file to declare those overload explicitly

export {}; // Turn the file into a module

declare global {
    interface File { path: string; }
}
