let path = require('path');
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    watch: true //监视文件改动，自动产生build.js
}