import { CleanWebpackPlugin } from "clean-webpack-plugin"
import MiniCSSExtractPlugin from "mini-css-extract-plugin"
import { Configuration } from "webpack"
import { Environment, Options } from "./types.js"
import { truthy } from "./utils.js"

export function createSimpleConfig(
  env: Environment,
  options: Options
): Configuration {
  const opts: Options = {
    babel: true,
    clean: true,
    corejs: "3.15",
    css: false,
    react: true,
    sourceMaps: true,
    ...options,
  }

  // The filename in production includes the content hash, while development
  // just uses the chunk name.
  const filename = env.prod ? "[name].[contenthash]" : "[name]"

  return {
    devServer:
      opts.devServer === false
        ? undefined
        : {
            historyApiFallback: { index: "/index.html" },
            port: 3000,
            ...opts.devServer,
          },
    devtool: env.prod ? false : "eval-source-map",
    mode: env.prod ? "production" : "development",
    module: {
      rules: [
        opts.sourceMaps && {
          enforce: "pre" as const,
          loader: "source-map-loader",
          test: /\.js$/,
        },
        opts.babel && {
          exclude: /node_modules/,
          test: /\.[jt]sx?$/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: !env.prod,
              plugins: ["@babel/plugin-transform-runtime"],
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // This version should match the peer dependency version in
                    // the manifest.
                    corejs: opts.corejs,
                    useBuiltIns: "entry",
                  },
                ],
                [
                  "@babel/preset-typescript",
                  {
                    allExtensions: true,
                    isTSX: true,
                  },
                ],
                opts.react && [
                  "@babel/preset-react",
                  {
                    development: !env.prod,
                    runtime: "automatic",
                  },
                ],
              ].filter(truthy),
              targets: "extends @mskelton/browserslist-config",
            },
          },
        },
        opts.css && {
          test: /\.css$/,
          use: [MiniCSSExtractPlugin.loader, "css-loader"],
        },
      ].filter(truthy),
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
      },
    },
    output: {
      chunkFilename: `${filename}.js`,
      filename: `${filename}.js`,
      publicPath: "/",
    },
    plugins: [
      opts.clean && new CleanWebpackPlugin(),
      opts.css &&
        new MiniCSSExtractPlugin({
          chunkFilename: `${filename}.css`,
          filename: `${filename}.css`,
        }),
    ].filter(truthy),
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    target: "browserslist",
  }
}
