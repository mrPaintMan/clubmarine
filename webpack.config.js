const path = require("path");

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
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
}