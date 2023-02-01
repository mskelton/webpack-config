import { describe, expect, it } from "@jest/globals"
import { createSimpleConfig } from "../createSimpleConfig.js"

it("should configure webpack-dev-server", () => {
  expect(createSimpleConfig({}).devServer).toStrictEqual({
    historyApiFallback: { index: "/index.html" },
    port: 3000,
  })

  expect(
    createSimpleConfig({}, { devServer: { port: 1234 } }).devServer
  ).toStrictEqual({
    historyApiFallback: { index: "/index.html" },
    port: 1234,
  })
})

describe("dev", () => {
  const env = {}

  it("should have mode=development", () => {
    expect(createSimpleConfig(env).mode).toBe("development")
  })

  it("should export source maps", () => {
    expect(createSimpleConfig(env).devtool).toBe("eval-source-map")
  })
})

describe("production", () => {
  const env = { prod: true }

  it("should have mode=production", () => {
    expect(createSimpleConfig(env).mode).toBe("production")
  })

  it("should not export source maps", () => {
    expect(createSimpleConfig(env).devtool).toBe(false)
  })
})
