let path = require('path');
const webpack = require('webpack');
const packagejson = require('./package.json');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        "main": "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 缓存组特有配置，匹配引入文件
                    name: 'vendor', // 抽离代码文件的名字
                    chunks: 'all',　// 同步引入、异步引入都生效
                    minChunks: 1,　// 引用次数
                    priority: 10　　// 优先级。 多个组时生效
                }
            }
               
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html', //参照物
            //chunks用于多入口文件，当你有多个入口文件的时候，它就会编译生成多个打包后的文件，chunks就能选择使用哪些文件
            chunks: ["vendor", 'main'],
            inject: true
            //inject head body true

        })
    ]
}