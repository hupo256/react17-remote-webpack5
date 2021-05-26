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
        sample: "sample@http://localhost:8081/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
      // shared: {
      //   reactRexport: {
      //     import: "react",
      //     shareKey: "react",
      //     shareScope: "default",
      //     singleton: true,
      //     eager: false,
      //     // don't use shared version when version isn't valid. Singleton or modules without fallback will throw, otherwise fallback is used
      //     // strictVersion: true,
      //     version: require("react").version,
      //     requiredVersion: require("./package.json").dependencies["react"],
      //   },
      // },
      // shared: {
      //   react: { singleton: true },
      //   // "react-dom": { singleton: true },
      //   // "react-router-dom": { singleton: true, eager: true },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
