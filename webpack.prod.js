const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main-[contenthash].js',
    assetModuleFilename: './[name][ext]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  devServer: {
    static: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // check for any css
        use: [
          // Extracts CSS from the JS into separate files
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // postcss
          'postcss-loader',
        ],
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ],
  },
};