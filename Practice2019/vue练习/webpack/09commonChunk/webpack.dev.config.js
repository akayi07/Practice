let path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        "main1": "./main1.js",
        "main2": "./main2.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    }
    
}