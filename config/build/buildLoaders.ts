
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev
        ? 'style-loader' // Creates `style` nodes from JS strings
        : MiniCssExtractPlugin.loader, // Creates css files for styles

      "css-loader", // Translate CSS into CommonJS,

      "sass-loader" // Compiles Sass to CSS,
    ]
  }

  // - With no typescript config babel is required to handle JSX
  // - ts-loader handles JSX by default
  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    cssLoader
  ]
}