const path = require("path");

const preloadConfig = {
    entry: './src/electron/preload.ts',
    mode: 'development',
    target: 'electron-preload',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'preload.js',
        path: path.resolve(__dirname, 'dist')
    }
};

const listenersConfig = {
    entry: './src/electron/listeners.ts',
    mode: 'development',
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'listeners.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = [preloadConfig, listenersConfig];
