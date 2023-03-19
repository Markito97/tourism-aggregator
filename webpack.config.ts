import * as path from 'path';
import 'webpack-dev-server';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';
import { getWebpackRulesReact } from './app.consts';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

type LocalEnv = NodeJS.ProcessEnv;

module.exports = function (env: any): webpack.Configuration {
  const { development } = env;
  dotenv.config({
    path: development ? '../.development.env' : '../.production.env',
  });
  const config: LocalEnv = process.env;
  const devtool = development ? 'inline-source-map' : 'eval-source-map';
  const mode = development ? 'development' : 'production';
  return {
    entry: './src/index',
    devtool,
    mode,
    devServer: {
      port: 3003,
      historyApiFallback: true,
    },
    output: {
      path: path.resolve(__dirname, 'static'),
      filename: 'app.bundle.js',
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
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
