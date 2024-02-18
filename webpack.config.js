const path = require("path");

module.exports = {
  entry: "./src/lazy-load-images.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "lazyLoadImages.bundle.js",
    library: "LazyLoadImages",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
