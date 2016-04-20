var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    devtool: 'source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx', '.scss', '.png', '.jpg']
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: "/static/"
    },
    module: {
        loaders: [{
            test: /\.jsx?/,

            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
