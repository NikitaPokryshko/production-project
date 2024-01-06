import { ResolveOptions } from 'webpack'

export function buildResolvers(): ResolveOptions {

  return {
    // avoid file extension endings when importing
    extensions: ['.tsx', '.ts', '.js']
  }
}