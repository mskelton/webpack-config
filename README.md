# @mskelton/webpack-config

[![Build status](https://github.com/mskelton/webpack-config/workflows/Build/badge.svg)](https://github.com/mskelton/webpack-config/actions)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)

> Shared webpack config for my React projects.

## Installation

```sh
# Yarn
yarn add --dev @mskelton/webpack-config

# npm
npm install --save-dev @mskelton/webpack-config
```

## Usage

```js
const { createWebpackConfig } = require('@mskelton/webpack-config')

module.exports = createWebpackConfig({
  entry: './src/index.tsx',
  html: {
    favicon: '',
    template: '',
  },
  outputPath: '',
})
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
