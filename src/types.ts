export interface Environment {
  /**
   * When true, configures webpack for production.
   */
  prod?: boolean
}

export interface DevServerOptions {
  /**
   * The dev server port.
   * @default 3000
   */
  port: number
}

export interface Options {
  /**
   * When true, enables the `babel-loader` for JavaScript and TypeScript.
   */
  babel?: boolean
  /**
   * When true, enables the `clean-webpack-plugin`.
   */
  clean?: boolean
  /**
   * core-js version to use when deciding which polyfills to include. By default,
   * this will match the core-js peer dependency version.
   */
  corejs?: string
  /**
   * When true, enables the `css-loader` for CSS.
   */
  css?: boolean
  /**
   * When specified, enables the `webpack-dev-server`. The dev server can be
   * disabled by setting this to `false`.
   */
  devServer?: DevServerOptions | false
  /**
   * When true, enables the Babel preset for React.
   */
  react?: boolean
  /**
   * When true, enables the `source-map-loader`.
   * @default true
   */
  sourceMaps?: boolean
}
