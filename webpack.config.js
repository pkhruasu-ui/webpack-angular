const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
    entry: {
        main: './src/main.ts',
        'polyfills': './src/polyfills.ts'
    },
    output: {
        path: path.join(__dirname, "./dist/"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist/"),
        port: 9000
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /.html$/, use: 'raw-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.scss$/, use: [ {
                    loader: "style-loader" // 3 creates style nodes from JS strings
                }, {
                    loader: "css-loader" // 2 translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // 1 compiles Sass to CSS
                } ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            showErrors: true,
            title: "Webpack App",
            path: path.join(__dirname, "./dist/"),
            hash: true
        }),
        new ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client'))
    ]
    
}