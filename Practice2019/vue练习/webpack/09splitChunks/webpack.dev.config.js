let path = require('path');
const webpack = require('webpack');
const packagejson = require('./package.json');

module.exports = {
    mode: 'development',
    entry: {
        "main1": "./main1.js",
        "main2": "./main2.js",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: { // 缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 缓存组特有配置，匹配引入文件
                    name: 'vendor', // 抽离代码文件的名字
                    chunks: 'all',　// 同步引入、异步引入都生效
                    minChunks: 1,　// 引用次数
                    priority: 10　　// 优先级。 多个组时生效
                },
                commons: {
                    name: "common",
                    enforce: true,
                    minChunks: 1,
                    chunks: "all"
                }
            }
        }
    }

    
}