const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    stats: {
        children: false,
        entrypoints: false,
        chunks: false,
    },
    entry: {
        app: path.resolve(__dirname, "../src/main.js"),
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        port: "8888",
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.(js|vue)$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    configFile: "./configs/.eslintrc.js",
                    emitError: true,
                    failOnError: true,
                    quiet: true,
                },
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
    plugins: [
        new StylelintPlugin({
            files: "./src/**/*.{scss,vue}",
			configFile: "./configs/stylelintrc.json",
			failOnError: true			
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
			showErrors: true,
            filename: "index.html",
            template: path.resolve(__dirname, "../src/index.html"),
            inject: true,
        }),
    ],
};
