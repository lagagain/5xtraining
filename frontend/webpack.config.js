const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const PUBLIC_PATH = process.env.PUBLIC_URL || '/';

const config = {
    mode: 'development',
    entry:{
        index: "./src/index.js",
        contact: "./src/contact.js",
    },
    output:{
        path: path.resolve(__dirname, "dist"), 
        filename: '[name].js',
        publicPath: PUBLIC_PATH,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        //plugins: [require('@babel/plugin-transform-object-rest-spread')]
                    }
                }
            }, {
                test: /\.css$/,
                //exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }, {
                test: /\.less$/,
                loader: 'less-loader',
            },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './public/index.html'
        // })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    }
};

module.exports = config;

//npm install --save-dev babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack

