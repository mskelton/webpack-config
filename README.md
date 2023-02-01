# @mskelton/webpack-config

[![Build status](https://github.com/mskelton/webpack-config/workflows/Build/badge.svg)](https://github.com/mskelton/webpack-config/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Shared webpack config for my projects.

## Installation

```bash
pnpm add -D @mskelton/webpack-config
pnpm add core-js
```

## Usage

This package is not a one-size fits all solution. It's a starting point for your
own config. As such, the `createSimpleConfig` function is used to generate much
of the boilerplate config, which you can then merge with your own config such as
entry points, plugins, outputs, etc.

```javascript
// webpack.config.mjs
import { createSimpleConfig } from "@mskelton/webpack-config"
import { fileURLToPath } from "node:url"
import { merge } from "webpack-merge"

export default function config(env) {
  const baseConfig = createSimpleConfig(env, {
    // config options...
  })

  return merge(baseConfig, {
    entry: "./src/index.tsx",
    output: {
      path: fileURLToPath(new URL("./public", import.meta.url)),
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
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

```javascript
import "core-js/stable"
```

## Advanced Configuration

This package is built with extensibility and customization in mind. While a
number of features are enabled by default, you can easily pick and choose which
features you want to use. To enable a feature, simply set the corresponding
option to `true` in the options object. For example, to enable the CSS feature
which will setup the `css-loader`, you can set the `css` option to `true`:

```javascript
const baseConfig = createSimpleConfig({
  css: true,
})
```

The full list of available features is documented in the TypeScript definitions
for the `createSimpleConfig` function.
