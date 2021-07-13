import { CleanWebpackPlugin } from "clean-webpack-plugin"
import {
  HotModuleReplacementPlugin,
  WebpackPluginInstance
} from "webpack"
import { Options } from "./types"
import { isDev } from "./vars"

type ExcludesFalse = <T>(x: T | false) => x is T

export function getDefaultPlugins({ html }: Options): WebpackPluginInstance[] {
  return [
    new CleanWebpackPlugin() as any,
    // new HtmlPlugin(html),
    isDev && new HotModuleReplacementPlugin(),
  ].filter((Boolean as WebpackPluginInstance) as ExcludesFalse)
}
