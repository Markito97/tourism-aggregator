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
