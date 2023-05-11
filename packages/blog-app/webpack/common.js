// Webpack Common Config

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const htmlWebPackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
  minify: {
    collapseWhitespace: true,
  },
});

module.exports = () => {
  return {
    entry: {
      app: path.join(__dirname, '../src', 'index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../build'),
      publicPath: '/',
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [htmlWebPackPlugin, new AddAssetHtmlPlugin({ filepath: require.resolve('../src/globalConfig.js') })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
  };
};
