
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'

import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Split SVGs and FILEs loaders
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  // Fast Refresh (also known as Hot Reloading) for React components
  const reactRefreshLoader = {
    test: /\.[t]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  }

  // - With no typescript config babel is required to handle JSX
  // - ts-loader handles JSX by default
  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  // CSS Loader. Plugins Order matters
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev
        ? 'style-loader' // Creates `style` nodes from JS strings
        : MiniCssExtractPlugin.loader, // Creates separate "css files" with styles and injects to page

      {
        loader: "css-loader", // Translate CSS into CommonJS,
        options: {
        modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          },
        }
      },

      "sass-loader" // Compiles Sass to CSS,
    ]
  }

  const loaders = [
    fileLoader,
    svgLoader,
    isDev && reactRefreshLoader,
    typescriptLoader,
    cssLoader
  ].filter(Boolean)

  return loaders
}