const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/app/index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/app"),
        publicPath: ""
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: "babel-loader"},
            {test: /.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        open: true
    }
}