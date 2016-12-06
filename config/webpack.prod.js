const webpack = require('webpack');
const helpers = require('./helpers');
const commonConfigs = require('./webpack.common.js');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const webpackMerge = require('webpack-merge');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

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
                return 'production: true';
            }
        }]
    })
});

commonConfigs.module.loaders.splice(0, 0, {
    test: /\.ts$/,
    loader: StringReplacePlugin.replace({
        replacements: [{
            pattern: /console\..*/,
            replacement: function(match, pl, offset, string) {
                return '';
            }
        }]
    }),
    include: [/src/]
});

module.exports = webpackMerge(commonConfigs, {
    metadata: METADATA,
    output: {
        path: helpers.root('dist'),
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
        new StringReplacePlugin(),
        new UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin('clarity-ui-min.css'),
        new CopyWebpackPlugin([{
            from: 'src/**/*.css',
            to: './'
        }], {
            ignore: ['*.scss', 'index.html']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        })
    ]
});
