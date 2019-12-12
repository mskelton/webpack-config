import { Plugin } from 'webpack'

export type Options = {
  entry: string
  html: {
    favicon?: string
    template: string
  }
  outputPath: string
  plugins: Plugin[]
}
