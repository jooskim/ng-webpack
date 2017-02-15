var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, '../'),
    entry: './config/karma-entry.ts',
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.html'],
        modules: ['node_modules', 'src']
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader?sourceMap=false&inlineSourceMap=true',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                enforce: 'post',
                exclude: [
                    'node_modules',
                    /karma-entry\.ts$/,
                    /\.(e2e|spec)\.ts$/
                ]
            }
        ]
    }
}
