const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const projectRoot = path.resolve(__dirname);
const pageRoot = './src/pages/';

function getPages(root) {
  const files = fs.readdirSync(root, {
    encoding: 'utf-8',
    withFileTypes: true,
  });

  return files
    .filter((entry) => entry.isFile())
    .filter((entry) => path.extname(entry.name))
    .map((entry) => entry.name);
}

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '@': projectRoot + '/src',
      '@fonts': projectRoot + '/src/fonts',
      '@components': projectRoot + '/src/components',
      '@images': projectRoot + '/src/images',
      '@blocks': projectRoot + '/src/blocks',
      '@pages': projectRoot + '/src/pages',
    },
    extensions: [
      '.js',
      '.json',
      '.css',
      '.scss',
      '.sass',
      '.svg',
      '.png',
      '.jpeg',
      '.gif',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    ...getPages(pageRoot).map(
      (page) =>
        new HtmlWebpackPlugin({
          template: pageRoot + page,
          inject: 'body',
          filename: page,
        })
    ),

    new HtmlWebpackPartialsPlugin({
      path: './src/blocks/header/header.html',
      location: 'template-header',
      template_filename: getPages(pageRoot),
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
