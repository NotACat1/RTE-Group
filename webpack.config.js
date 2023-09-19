const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pagesDir = path.resolve(__dirname, 'src/pages');
const pages = fs.readdirSync(pagesDir);

const htmlPlugins = pages.map(page => {
  return new HtmlWebpackPlugin({
    filename: page,
    template: path.resolve(pagesDir, page),
    chunks: [page],
  });
});

const projectRoot = path.resolve(__dirname);

module.exports = {
  mode: 'production',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
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
    },
    extensions: [ '.js', '.json', '.css', '.scss', '.sass', '.svg', '.png', '.jpeg', '.gif', ],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/i,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.ejs$/i,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader', {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: ['src/scss']
            }
          }
        }],
      },
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ],
      },
      {
        test: /\.(woff2?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[hash][ext][query]'
        },
      },
    ],
  },
  plugins: [
    ...htmlPlugins,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};