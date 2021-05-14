const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
        analitics: './analitics.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'], 
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@models": path.resolve(__dirname, 'src/models'),
            "@assets": path.resolve(__dirname, 'src/assets'),
            "@style": path.resolve(__dirname, 'src/style'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'webpack_Pasha'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [
                    {loader: 'style-loader'}, 
                    {loader: 'css-loader', options: {url: false}}
                ],
            },
            {
                test: /\.(png|svg|gif|jpg)$/,
                use: [
                    {loader: 'file-loader'}
                ] 
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {loader: 'file-loader'}
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    {loader: 'xml-loader'}
                ]
            },
            {
                test: /\.csv$/,
                use: [
                    {loader: 'csv-loader'}
                ]
            },
        ]
    }
}