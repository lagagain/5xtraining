const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'production',
    entry:{
        index: "./src/index.js",
    },
    output:{
        path: path.resolve(__dirname, "dist"), 
        filename: '[name].js',
    },
    //publicPath: "./",
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
            },{
                test: /\.less$/,
                loader: 'less-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            index: './public/index.html'
        })
    ]
};

module.exports = config;

//npm install --save-dev babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack

