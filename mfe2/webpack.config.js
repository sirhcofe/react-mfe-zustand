const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const pkg = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.ts|\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "mfe2",
      filename: "remoteEntry.js",
      remotes: {
        host: "host@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./app": "./src/App",
      },
      shared: {
        ...pkg.devDependencies,
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: pkg.dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: pkg.dependencies["react-router-dom"],
        },
        zustand: {
          singleton: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
