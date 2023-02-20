import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "static"),
    // publicPath: "/static/",
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          {
            loader: "style-loader",
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "esnext",
        },
      },
    ],
  },
  optimization: {
    emitOnErrors: true,
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/resource/"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};

export default config;
