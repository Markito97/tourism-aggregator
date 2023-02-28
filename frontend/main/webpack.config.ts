/* eslint-disable import/no-import-module-exports */
import * as path from 'path';
import 'webpack-dev-server';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';
import {
  AppName,
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
      port: config.APP_MAIN_PORT,
      historyApiFallback: true,
    },
    output: {
      publicPath: 'auto',
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
      ...getCommonPlugins(),
      new webpack.container.ModuleFederationPlugin({
        name: AppName.APP_MAIN,
        remotes: {
          admin: 'admin@http://localhost:3004/remoteEntry.js',
          // [AppName.APP_ADMIN]: `${AppName.APP_ADMIN}@//${config.APP_ADMIN_URL}/remoteEntry.js`,
        },
        shared: sharedReact,
      }),
    ],
  };
};
