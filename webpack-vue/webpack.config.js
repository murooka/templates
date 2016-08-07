const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const PATHS = {
    src:   path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public'),
};

module.exports = {
    entry: {
        app: './src/js/app.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.vue'],
    },
    output: {
        path: PATHS.build,
        publicPath: '/public/',
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: PATHS.src,
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        contentBase: 'public',
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ];
} else {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            }
        }),
    ];
    module.exports.devtool = '#source-map';
}
