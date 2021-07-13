import { Configuration } from "webpack"
import { getDefaultPlugins } from "./plugins"
import { Options } from "./types"

declare module "webpack" {
  interface Configuration {
    devServer: unknown
  }
}

export function createWebpackConfig(options: Options): Configuration {
  return {
    devServer: {
      historyApiFallback: {
        index: "/index.html",
      },
      port: options.port,
    },
    devtool: "source-map",
    entry: options.entry,
    mode: process.env.NODE_ENV || "development",
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(tsx?|jsx?)$/,
          use: "babel-loader",
        },
        {
          enforce: "pre",
          loader: "source-map-loader",
          test: /\.js$/,
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    output: {
      filename: "[name].[hash].bundle.js",
      path: options.outputPath,
      publicPath: "/",
    },
    plugins: [...getDefaultPlugins(options), ...options.plugins],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  }
}
