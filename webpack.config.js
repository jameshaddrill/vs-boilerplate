const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: {
        app: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
    },
    module: {
        rules: [
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
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            filename: "index.html",
            template: "./src/index.html",
            inject: true,
        }),
    ],
};
