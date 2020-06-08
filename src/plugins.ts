import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import { EnvironmentPlugin, HotModuleReplacementPlugin, Plugin } from 'webpack'
import { Options } from './types/models'
import { DEFAULT_ENVIRONMENT, isDev } from './vars'

type ExcludesFalse = <T>(x: T | false) => x is T

export function getDefaultPlugins({ html }: Options): Plugin[] {
  return [
    new EnvironmentPlugin({ NODE_ENV: DEFAULT_ENVIRONMENT }),
    new CleanWebpackPlugin() as any,
    new HtmlPlugin(html),
    isDev && new HotModuleReplacementPlugin(),
  ].filter((Boolean as Plugin) as ExcludesFalse)
}
