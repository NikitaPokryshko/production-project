import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'

import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),

    // Shows build time progress
    new webpack.ProgressPlugin(),

    // - Replaces inline styles in a final build to separate CSS files
    // - Set file name format and chunks name format
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}