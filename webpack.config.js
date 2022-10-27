const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const isProduction = env.production;

    return {
        devtool: isProduction ? "source-map" : "eval",
        mode: isProduction ? "production" : "development",
        entry: {
            // "searchbox": "./src/TS/searchbox.ts",
            "index": "./src/Development/index.ts"
        },
        // output: {
        //     library: "Searchbox",
        //     libraryTarget: "umd",
        //     libraryExport: "default",
        //     filename: "[name].js",
        //     path: path.resolve(__dirname, "dist/Scripts")
        // },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "babel-loader",
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
        // optimization: {
        //     minimize: env.isProduction,
        //     minimizer: [
        //         new TerserPlugin({
        //             extractComments: false,
        //             terserOptions: {
        //                 output: {
        //                     comments: false
        //                 }
        //             }
        //         })
        //     ]
        // }
    }
};