/*---------------------------------------------------------------------------------------------
 * Webpack configuration for bundling code-eol as a VS Code web extension.
 * Target 'webworker' is required by VS Code for browser-based extension hosts.
 *--------------------------------------------------------------------------------------------*/
'use strict';

const path = require('path');

module.exports = {
    target: 'webworker',
    mode: 'none',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist', 'web'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    externals: {
        // vscode is provided by the extension host at runtime; do not bundle it
        vscode: 'commonjs vscode',
    },
    resolve: {
        // Prefer browser-specific entry points when a package exposes them
        mainFields: ['browser', 'module', 'main'],
        extensions: ['.js'],
    },
    performance: {
        hints: false,
    },
    devtool: 'nosources-source-map',
    infrastructureLogging: {
        level: 'log',
    },
};
