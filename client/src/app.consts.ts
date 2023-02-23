import * as path from 'path'

export const ACTIVITIES_TITLES = {
  title: 'Lakes for Everyoune',
  subTitle: 'Beauties',
  className: 'Content',
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

export const getWebpackAliases = () => {
  return {
    '@assets': path.resolve(__dirname, 'src/assets/resource/'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@components': path.resolve(__dirname, 'src/components/'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  }
}
