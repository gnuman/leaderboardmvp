import webpack from "webpack";
import path from "path";

const jsRule = {
  use: "babel-loader",
  test: /\.js$/,
  exclude: /node_modules/
};

const jsonRule = {
  use: "json-loader",
  exclude: /node_modules/,
  test: /\.json$/
};

const esLintRule = {
  test: /\.js$/,
  use: "eslint-loader",
  exclude: /node_modules/,
  enforce: "pre"
};

export default {
  target: "node",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "./bundle.js"
  },
  module: {
    rules: [jsRule, jsonRule, esLintRule]
  }
};
