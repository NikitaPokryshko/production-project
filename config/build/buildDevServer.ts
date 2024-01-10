import { BuildOptions } from "./types/config"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,

    // Allows to proxy requests through a specified index page
    // Add a fallback when initially loading page different from main (for example /about)
    historyApiFallback: true
  }
}