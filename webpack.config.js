const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analitics: './src/analitics.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}