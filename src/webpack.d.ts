import { Configuration as DevServerConfiguration } from "webpack-dev-server"

declare module "webpack" {
  interface Configuration {
    devServer?: DevServerConfiguration
  }
}
