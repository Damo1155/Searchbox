const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const isProduction = env.production;

    return {
        devtool: isProduction ? "source-map" : "eval",
        mode: isProduction ? "production" : "development",
        entry: "./src/Development/index.tsx",
        output: {
            filename: "index.js",
            path: path.resolve( __dirname, "dist" )
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    exclude: /node_module/,
                    use: "ts-loader"
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      "style-loader",
                      "css-loader",
                      "sass-loader",
                    ],
                  },
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, "src/development/index.html")
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        resolve: {
            extensions: [ ".tsx", ".ts", ".js" ],
            alias: {
                "Shared": path.resolve(__dirname, "./src/TS/Shared/"),
            }
        }
        // resolve: {
        //     extensions: [".js"],

        // },
    }
};