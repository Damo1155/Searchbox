const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const isProduction = env.production;

    return {
        devtool: isProduction ? "source-map" : "eval",
        mode: isProduction ? "production" : "development",
        entry: "./src/Development/index.ts",
        output: {
            filename: "index.js",
            path: path.resolve( __dirname, 'dist' )
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_module/,
                    use: "ts-loader"
                }
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, "src/development/index.html")
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        // resolve: {
        //     extensions: [".js"],
        //     alias: {
        //         "Enums": path.resolve(__dirname, "./src/TS/Enums/"),
        //         "Models": path.resolve(__dirname, "./src/TS/Models/"),
        //         "Shared": path.resolve(__dirname, "./src/TS/Shared/"),
        //         "Services": path.resolve(__dirname, "./src/TS/Services/"),
        //         "Structure": path.resolve(__dirname, "./src/TS/Structure/"),
        //         "Listeners": path.resolve(__dirname, "./src/TS/Listeners/")
        //     }
        // },
    }
};