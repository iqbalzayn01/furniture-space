const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devtool: false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: [
                        ['@babel/preset-env'],
                    ]
                    }
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "postcss-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [require("tailwindcss")],
                    //         },
                    //     },
                    // },
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
        ],
    },
};