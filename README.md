# @mskelton/webpack-config

[![Build status](https://github.com/mskelton/webpack-config/workflows/Build/badge.svg)](https://github.com/mskelton/webpack-config/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Shared webpack config for my projects.

## Installation

```sh
yarn add -D @mskelton/webpack-config webpack{,-cli,-merge}
yarn add core-js
```

## Usage

This package is not a one-size fits all solution. It's a starting point for your own config. As such, the `createWebpackConfig` function is used to generate much of the boilerplate config, which you can then merge with your own config such as entry points, plugins, outputs, etc.

```js
// webpack.config.js
const { createWebpackConfig } = require("@mskelton/webpack-config")
const { merge } = require("path")
const { merge } = require("webpack-merge")

module.exports = (env) => {
  const baseConfig = createWebpackConfig(env)

  return merge(baseConfig, {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "public"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
  })
}
```

Next, in your `package.json` file, add the following to your `scripts` section:

```json
{
  "build": "webpack",
  "build:prod": "webpack --env prod"
}
```

Finally, import the `core-js` polyfills in your entry point of your application.

```js
import "core-js/stable"
```

## Advanced Configuration

This package is built with extensibility and customization in mind. While a number of features are enabled by default, you can easily pick and choose which features you want to use. To enable a feature, simply set the corresponding option to `true` in the options object. For example, to enable the CSS feature which will setup the `css-loader`, you can set the `css` option to `true`:

```js
const baseConfig = createWebpackConfig({
  css: true,
})
```

The full list of available features is documented in the TypeScript definitions for the `createWebpackConfig` function.
