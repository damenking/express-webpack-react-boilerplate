// const webpack = require('webpack');

module.exports = {
  entry: ['./src/app.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test:/\.css|scss$/,
        use:['style-loader','css-loader', "sass-loader"]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
