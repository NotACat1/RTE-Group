const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pagesDir = path.resolve(__dirname, 'src/pages');
const pages = fs.readdirSync(pagesDir);

const casesData = require('./src/mocks/mock-cases-data.json');
const feedbacksData = require('./src/mocks/mock-feedbacks-data.json');
const feedbacksStaffData = require('./src/mocks/mock-feedbacksStaff-data.json');
const infoCitiesData = require('./src/mocks/mock-infoCities-data.json');
const servicesData = require('./src/mocks/mock-services-data.json');
const templateParameters = {
  casesData,
  feedbacksData,
  feedbacksStaffData,
  infoCitiesData,
  servicesData
};

const htmlPlugins = pages.map(page => {
  return new HtmlWebpackPlugin({
    filename: page,
    template: path.resolve(pagesDir, page),
    chunks: [page],
    templateParameters
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
      '@scss': projectRoot + '/src/scss',
      '@components': projectRoot + '/src/components',
      '@images': projectRoot + '/src/images',
      '@blocks': projectRoot + '/src/blocks',
      '@pages': projectRoot + '/src/pages',
      '@common.blocks': projectRoot + '/src/common.blocks',
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
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            let result;
            try {
              result = _.template(content)(templateParameters);
            } catch (error) {
              loaderContext.emitError(error);
              return content;
            }
            return result;
          },
        }
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