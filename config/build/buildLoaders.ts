
import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translate CSS into CommonJS,
      "css-loader",
      // Compiles Sass to CSS,
      "sass-loader"
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