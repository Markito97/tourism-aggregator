import * as webpack from 'webpack'
import * as TerserPlugin from 'terser-webpack-plugin'

export interface IEnv {
  WEBPACK_SERVE?: boolean
  WEBPACK_BUNDLE?: boolean
  WEBPACK_BUILD?: boolean
  development?: boolean
  production?: boolean
}

export function getOptimization(env: IEnv): Partial<webpack.Configuration> {
  const { development } = env
  const devtool = development ? 'inline-source-map' : 'eval-source-map'
  const mode = development ? 'development' : 'production'
  console.log(mode)
  return {
    devtool,
    mode,
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  }
}

function getWebpackRulesReactCss() {
  const styleExtract = { loader: 'style-loader' }

  return [
    {
      test: /\.css/i,
      use: [styleExtract, { loader: 'css-loader' }],
    },
  ]
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
  ]
}
