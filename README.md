# @mskelton/webpack-config

[![Build status](https://github.com/mskelton/webpack-config/workflows/Build/badge.svg)](https://github.com/mskelton/webpack-config/actions)

Shared webpack config for my projects.

## Installation

```sh
yarn add -D @mskelton/webpack-config
```

## Usage

```js
const { createWebpackConfig } = require("@mskelton/webpack-config")

module.exports = createWebpackConfig({
  entry: "./src/index.tsx",
  html: {
    favicon: "",
    template: "",
  },
  outputPath: "",
})
```
