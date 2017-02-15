var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env) {
    var base = {
        context: path.resolve(__dirname, '../'),
        devtool: env.is_prod ? 'source-map' : 'inline-source-map',
        entry: {
            'vendor': './src/vendor.ts',
            'main': './src/main.ts'
        },
        output: {
            path: env.is_prod ? './dist' : './build-dev',
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
                    exclude: [/node_modules/]
                },
                {
                    test: /\.ts$/,
                    use: [
                        'angular2-template-loader',
                        'awesome-typescript-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    loader: 'raw-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [
                        path.resolve(__dirname, 'src/index.html')
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'raw-loader',
                        'sass-loader'
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
            new CopyWebpackPlugin([
                {
                    from: 'src/assets',
                    to: 'assets'
                }], {
                    ignore: ['*.scss', 'index.html']
                }
            )
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
            replace: env.is_prod ? 'production: true' : 'production: false'
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

    if (!env.is_prod) {
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