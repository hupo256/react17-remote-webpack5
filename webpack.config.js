const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

let isProduction = false;

module.exports = {
  devtool: false,
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3004,
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    publicPath: "http://localhost:3004/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: "../" },
              }
            : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: isProduction,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "fdTest",
      filename: "remoteEntry.js",
      exposes: {
        "./sayHi": "./src/sayHi",
      },
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
        // app2: "app2@http://localhost:3002/remoteEntry.js",
      },
      // shared: ["react", "react-dom", "react-router-dom"],
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
