const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, 'www/index.js'),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'MSBubblesSample',
            template: path.resolve(__dirname, 'www/index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'www/css'),
                    to: path.resolve(__dirname, 'dist/css')
                },
                {
                    from: path.resolve(__dirname, 'www/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                },
            ],
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        host: '127.0.0.1',
        port: 8080,
        open: true
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization:{
        minimize: false,
    },
};