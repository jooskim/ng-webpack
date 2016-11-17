const webpack = require('webpack');
const helpers = require('./helpers');
const commonConfigs = require('./webpack.common.js');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const webpackMerge = require('webpack-merge');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const METADATA = webpackMerge(commonConfigs.metadata, {
    host: 'localhost',
    port: 3000,
    baseUrl: '/',
    ENV: ENV
});

commonConfigs.module.loaders.splice(0, 0, {
    test: /environment\.ts$/,
    loader: StringReplacePlugin.replace({
        replacements: [{
            pattern: /production\:.*/,
            replacement: function(match, pl, offset, string) {
                return 'production: false';
            }
        }]
    })
});

module.exports = webpackMerge(commonConfigs, {
    metadata: METADATA,
    devtool: 'cheap-module-source-map',
    output: {
        path: helpers.root('build-dev'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV)
        }),
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        // new webpack.optimize.CommonsChunkPlugin('init.js'),
        new StringReplacePlugin(),
        new ExtractTextPlugin('assets/[name].css'),
        new CopyWebpackPlugin([{
            from: 'src/assets/',
            to: 'assets'
        }], {
            ignore: ['*.scss', 'index.html']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        })
    ],
    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: helpers.root('build-dev')
    }
});
