const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].bundle.js",
    },
    devServer: {
        static: "./build",
    },
    optimization: {
        runtimeChunk: "single",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/template.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //     type: "asset/resource",
            // },
        ],
    },
};
