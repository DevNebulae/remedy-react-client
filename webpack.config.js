const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const dist = path.resolve(process.cwd(), "dist/")
const public = path.resolve(process.cwd(), "public/")
const src = path.resolve(process.cwd(), "src/")

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  entry: {
    app: path.resolve(src, "index.js")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(public, "index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
}
