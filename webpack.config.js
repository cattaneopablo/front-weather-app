const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProductionEnv = process.env.NODE_ENV === 'production'

module.exports = {
    mode: "development",
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        // configuration regarding modules
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            // Conditions:
            test: /\.js?$/,    
            // Actions:
            loader: "babel-loader",
          },
          {
            // Conditions:
            test: /\.css?$/,    
            // Actions:
            use: [
                isProductionEnv ? MiniCssExtractPlugin.loader : "style-loader",
                "css-loader"
            ]
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
}