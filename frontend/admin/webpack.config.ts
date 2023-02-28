import * as path from 'path';
import {
  IEnv,
  getCommonPlugins,
  getOptimization,
  getWebpackRulesReact,
  sharedReact,
} from '../app.consts';
import 'webpack-dev-server';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';

interface LocalEnv extends NodeJS.ProcessEnv {}

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
          './Button': './src/Button',
        },
        shared: sharedReact,
      }),
    ],
  };
};
