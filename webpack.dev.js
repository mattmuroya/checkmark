const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // check for any css or scss files
        use: [
          // Extracts CSS from the JS into the html's style tag
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // postcss
          'postcss-loader',
        ],
      },
    ],
  },
};