import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
// import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as TerserPlugin from 'terser-webpack-plugin'

module.exports = function (): webpack.Configuration {
  return {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: '/',
    },
    devServer: {
      // static: {
      //   directory: path.join(__dirname, 'dist'),
      // },
      port: 3004,
      historyApiFallback: true,
      proxy: {
        '/': 'http:localhost:3004',
      },
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets/resource/'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.css/i,
          use: [
            {
              loader: 'style-loader',
            },
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
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
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  }
}
