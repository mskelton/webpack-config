import { Configuration } from 'webpack'
import { getDefaultPlugins } from './plugins'
import { Options } from './types/models'
import { DEFAULT_ENVIRONMENT } from './vars'

export function createWebpackConfig(options: Options): Configuration {
  return {
    devServer: {
      historyApiFallback: {
        index: '/index.html',
      },
      port: 3000,
    },
    devtool: 'source-map',
    entry: options.entry,
    mode: process.env.NODE_ENV || DEFAULT_ENVIRONMENT,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(tsx?|jsx?)$/,
          use: 'babel-loader',
        },
        {
          enforce: 'pre',
          loader: 'source-map-loader',
          test: /\.js$/,
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    output: {
      filename: '[name].[hash].bundle.js',
      path: options.outputPath,
      publicPath: '/',
    },
    plugins: [...getDefaultPlugins(options), ...options.plugins],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  }
}
