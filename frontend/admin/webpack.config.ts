/* eslint-disable import/no-import-module-exports */
import * as path from 'path';
import 'webpack-dev-server';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';

import {
  IEnv,
  getCommonPlugins,
  getOptimization,
  getWebpackRulesReact,
  sharedReact,
} from '../app.consts';

type LocalEnv = NodeJS.ProcessEnv;

module.exports = function (env: IEnv): webpack.Configuration {
  const { development } = env;
  dotenv.config({
    path: development ? '../.development.env' : '../.production.env',
  });
  const config: LocalEnv = process.env;

  return {
    entry: './src/index',
    ...getOptimization(env),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: config.APP_ADMIN_PORT,
      historyApiFallback: true,
    },
    output: {
      publicPath: 'auto',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: getWebpackRulesReact(),
    },
    plugins: [
      ...getCommonPlugins(),
      new webpack.container.ModuleFederationPlugin({
        name: 'admin',
        filename: 'remoteEntry.js',
        exposes: {
          './Layout': './src/components/Layout/AdminLayout',
        },
        shared: sharedReact,
      }),
    ],
  };
};
