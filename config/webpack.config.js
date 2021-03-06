var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env) {
    var base = {
        context: path.resolve(__dirname, '../'),
        devtool: env.is_production ? 'source-map' : 'inline-source-map',
        entry: {
            'vendor': './src/vendor.ts',
            'main': env.is_aot ? './src/main-aot.ts' : './src/main.ts'
        },
        output: {
            path: env.is_production ? './dist' : './build-dev',
            filename: '[name].bundle.js',
            publicPath: '/'
        },
        resolve: {
            modules: ['node_modules'],
            extensions: [".ts", ".js", ".scss", ".css", ".json", ".html"],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'source-map-loader',
                    exclude: [
                        path.resolve(__dirname, 'node_modules/rxjs'),
                        path.resolve(__dirname, 'node_modules/@angular')
                    ]
                },
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    exclude: [
                        /node_modules/,
                        /aot/
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'raw-loader',
                        'sass-loader'
                    ],
                    exclude: [/node_modules/]
                },
                {
                    test: /\.ts$/,
                    use: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [
                        path.resolve(__dirname, 'src/index.html')
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                __dirname
            ),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                chunksSortMode: 'dependency'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            })
        ],
        performance: {
            hints: false
        },
        target: 'web',
        stats: 'errors-only'
    };

    base.module.rules.splice(0, 0, {
        test: /environment\.ts$/,
        enforce: 'pre',
        loader: 'string-replace-loader',
        options: {
            search: /production\:.*/,
            replace: env.is_production ? 'production: true' : 'production: false'
        }
    },{
        test: /index\.html$/,
        enforce: 'post',
        loader: 'string-replace-loader',
        options: {
            search: 'APP_BASE_URL',
            replace: '/'
        }
    });

    if (env.is_production) {
        base.devServer = {
            port: 3001,
            host: '0.0.0.0',
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            outputPath: path.resolve(__dirname, 'dist')
        };
        base.plugins.splice(1, 0,
            new webpack.optimize.UglifyJsPlugin()
        );
    } else {
        base.devServer = {
            port: 3001,
            host: '0.0.0.0',
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            outputPath: path.resolve(__dirname, 'build-dev')
        };
    }

    return base;
}