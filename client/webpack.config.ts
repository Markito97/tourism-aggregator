import * as path from 'path'
import 'webpack-dev-server'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  IEnv,
  getOptimization,
  getWebpackRulesReact,
} from '../client/app.consts'
import * as dotenv from 'dotenv'
import * as webpack from 'webpack'

interface LocalEnv extends NodeJS.ProcessEnv {}

module.exports = function (env: IEnv): webpack.Configuration {
  const { development } = env
  dotenv.config({
    path: development ? './.development.env' : './.production.env',
  })
  const config: LocalEnv = process.env

  return {
    entry: './src/index',
    ...getOptimization(env),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: config.APP_MAIN_PORT,
      historyApiFallback: true,
    },
    output: {
      publicPath: '/',
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets/resource/'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@components': path.resolve(__dirname, './src/components/'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: getWebpackRulesReact(),
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  }
}
