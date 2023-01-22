const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: "./src/components/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "lit-css-loader",
        options: {
          specifier: "lit", // defaults to `lit`
        },
      },
    ],
  },
};
