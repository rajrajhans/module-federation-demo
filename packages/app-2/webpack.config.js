const { ModuleFederationPlugin } = require("webpack").container;

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./index.js",
  output: {
    publicPath: "http://localhost:3002/",
  },
  devtool: "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_2",
      library: {
        type: "var",
        name: "app_2",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./AppTwoComponent": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
