const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        stats: {
            children: false,
            entrypoints: false,
            chunks: false,
        },
        entry: {
            app: path.resolve(__dirname, '../src/main.js'),
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            // filename: 'bundle.js',
            filename: '[name].[hash].js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, './public'),
            port: '8888',
        },
        optimization: {
            minimizer: [new UglifyJsPlugin()],
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
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(js|vue)$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        configFile: './configs/.eslintrc.js',
                        emitError: true,
                        failOnError: true,
                        quiet: true,
                    },
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    loader: 'url-loader',
                    options: {
                        // Images larger than 10 KB won’t be inlined
                        limit: 10 * 1024,
                    },
                },
            ],
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
            new StylelintPlugin({
                files: './src/**/*.{scss,vue}',
                configFile: './configs/stylelintrc.json',
                failOnError: true,
            }),
            new MiniCssExtractPlugin({
                filename: 'bundle.css',
            }),
            new VueLoaderPlugin(),
            new HTMLWebpackPlugin({
                showErrors: false,
                filename: 'index.html',
                template: path.resolve(__dirname, '../src/index.html'),
                inject: true,
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './src/images/',
                        to: 'images/',
                    },
                ],
            }),
            new ImageminPlugin({
                disable: env.NODE_ENV !== 'production', // Disable during development
                test: /\.(jpe?g|png|gif|svg)$/i,
            }),
        ],
    };
};
