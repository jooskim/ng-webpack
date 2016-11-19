const webpack = require('webpack');
const helpers = require('./helpers');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);

const METADATA = {
    title: "Angular 2 with Webpack Starter",
    baseUrl: "/"
};

module.exports = {
    metadata: METADATA,
    entry: {
        "vendor": "./src/vendor.ts",
        "main": "./src/main.ts"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".scss", ".css", ".json", ".html"],
        root: helpers.root("src"),
        moduleDirectories: ["node_modules"]
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    helpers.root('node_modules/rxjs'),
                    helpers.root('node_modules/@angular'),
					helpers.root('node_modules/mutationobserver-shim/dist'),
					helpers.root('node_modules/clarity-icons')
                ]

            },
			{
			    test: /\.ts$/,
				loader: 'tslint',
				exclude: [
				    helpers.root('node_modules/clarity-ui'),
					helpers.root('node_modules/clarity-icons')
			    ]
			}
        ],
		noParse: [
		    helpers.root('node_modules/clarity-ui'),
			helpers.root('node_modules/clarity-icons')
		],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader',
				exclude: [
				    /clarity-ui\.min\.css$/
				]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },
            {
                test: /\.scss$/,
                loaders: ['raw-loader', 'sass'],
				exclude: [/node_modules/]
            },
			{
			    test: /clarity-ui\.min\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			}
        ]
    },
    plugins: [],
    node: {
        global: "window",
        crypto: "empty",
        module: false,
        clearImmediate: false,
        setImmmediate: false
    }
}
