/// <binding />
"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: 'development',
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        },
        entry: {
            index: "./index.tsx"
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            clean: true
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: [path.join(__dirname, "src"), /node_modules/]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin()
        ]
    }
};
