module.exports = {
    devtool: 'inline-source-map',
    verbose: true,
    resolve: {
        extensions: ['', '.ts', '.js', '.scss', '.html'],
        modulesDirectories: ['node_modules', 'src']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader?sourceMap=false&inlineSourceMap=true', 'angular2-template-loader']
            },
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.scss$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader']},
            {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']}
        ],
        postLoaders: [
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter',
                exclude: [
                    'node_modules',
                    /karma-entry\.ts$/,
                    /\.(e2e|spec)\.ts$/
                ]
            }
        ]
    }
}
