const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/app.js'),
    ],
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ],
 };