const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[fullhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Production'
        }),
    ],
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /[\\/]node_modules[\\/]/,
                use: 'babel-loader' 
            },
        ]
    }
}