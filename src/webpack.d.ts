import { Configuration as DevServerConfiguration } from "webpack-dev-server"
d

declare module "webpack" {
  interface Configuration {
    devServer?: DevServerConfiguration
  }
}
