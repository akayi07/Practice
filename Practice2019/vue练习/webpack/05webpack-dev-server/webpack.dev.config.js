let path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css#$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader?'
            }
        ]
    },
    plugins: [
        //插件
        new htmlWebpackPlugin({
            template: './src/index.html' //参照物
        })
    ]
    
}