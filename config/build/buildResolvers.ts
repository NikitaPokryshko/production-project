import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {

  return {
    // avoid file extension endings when importing
    extensions: ['.tsx', '.ts', '.js'],


    ///////////////////////////////////////////////////////////////////////////////
    // Enable absolute imports priority
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'], // Explicitly defines main filename for each module
    alias: {
      // Option 1:
      // "@": options.paths.src, // =>  @/shared/classNames or @/entities/Article

      // Option 2:
      // Keep aliases as empty object // =>  shared/classNames or entities/Article
    }
    ///////////////////////////////////////////////////////////////////////////////
  }
}