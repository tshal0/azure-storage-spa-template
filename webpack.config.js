const path = require('path');
// const LodashModuleReplacementPlugin = ​require​('lodash-webpack-plugin');

const bundleFileName = 'bundle';
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const ROOT_DIR = path.resolve(__dirname, './');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');

module.exports = {
    entry: ['./src/index.scss', './src/index.tsx'],
    devtool: "source-map",
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss']
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            // filename: __dirname + "/dist/js/bundle.ejs",
            template: __dirname + "/src/index.html",
            // inject: 'body',
            // chunks: ['vendor', 'app'],
            // chunksSortMode: 'manual'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // new BundleAnalyzerPlugin(),
        // new LodashModuleReplacementPlugin
    ],
    module: {
        rules: [
            {
                // this is so that we can compile any React,
                // ES6 and above into normal ES5 syntax
                test: /\.(ts|tsx)$/,
                // we do not want anything from node_modules to be compiled
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: { includePaths: ['./node_modules'] },
                        },
                    }
                ],
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader?name=[name].[ext]']
            },
        ]
    }
};