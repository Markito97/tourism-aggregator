import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export enum AppName {
  APP_MAIN = 'main',
  APP_ADMIN = 'admin',
}

export interface IEnv {
  WEBPACK_SERVE?: boolean;
  WEBPACK_BUNDLE?: boolean;
  WEBPACK_BUILD?: boolean;
  development?: boolean;
  production?: boolean;
}

export const sharedReact = {
  react: {
    singleton: true,
    requiredVersion: '18.2.0',
  },
  'react-dom': {
    singleton: true,
    requiredVersion: '18.2.0',
  },
};

export function getOptimization(env: IEnv): Partial<webpack.Configuration> {
  const { development } = env;
  const devtool = development ? 'inline-source-map' : 'eval-source-map';
  const mode = development ? 'development' : 'production';

  return {
    devtool,
    mode,
    // optimization: {
    //   minimize: true,
    //   minimizer: [new TerserPlugin()],
    // },
  };
}

function getWebpackRulesReactCss() {
  const styleExtract = { loader: 'style-loader' };

  return [
    {
      test: /\.css/i,
      use: [styleExtract, { loader: 'css-loader' }],
    },
    {
      test: /\.sass/,
      use: [
        styleExtract,
        {
          loader: 'css-loader',
          options: {
            esModule: true,
            modules: {
              exportLocalsConvention: 'dashesOnly',
              namedExport: true,
            },
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
  ];
}

export const getWebpackRulesReact = () => {
  return [
    ...getWebpackRulesReactCss(),
    {
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      loader: '@svgr/webpack',
    },
    {
      test: /\.(png|jpg|gif)$/,
      issuer: /\.tsx?$/,
      type: 'asset/resource',
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      issuer: /\.sass$/,
      type: 'asset/resource',
    },
    {
      test: /\.tsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    },
  ];
};

export function getCommonPlugins() {
  return [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ];
}