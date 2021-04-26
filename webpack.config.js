const path = require("path");

module.exports = {
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
