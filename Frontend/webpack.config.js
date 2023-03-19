const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {

        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // expresión regular que indica qué archivos procesar
                type: 'asset/resource', // tipo de módulo a usar
                generator: {
                    filename: 'images/[name][ext]', // nombre del archivo generado
                },
            },
            {
                test: /\.js$/, // archivos que terminan en .js
                exclude: /node_modules/, // excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // usar el loader de babel
                    options: {
                        presets: ['@babel/preset-env'] // usar el preset de babel para convertir el código moderno
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    devServer: {
        static: './dist',
        open: false,
    },
};