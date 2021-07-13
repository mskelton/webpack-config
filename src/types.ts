import { WebpackPluginInstance } from 'webpack'

export type Options = {
  entry: string
  html: {
    favicon?: string
    template: string
  }
  outputPath: string
  plugins: WebpackPluginInstance[]
  port?: number
}
