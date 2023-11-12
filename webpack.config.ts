import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.mode === 'production' ? process.env.mode : 'development'; 
console.log(mode);
const config: webpack.Configuration = {
  mode: mode,
  entry:  path.resolve(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10240,
              iesafe: true,
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          
          {
            loader: mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [ path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html'), favicon: "./src/shared/assets/favicon.png", title: "Portfolio"}),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      linkType: "text/css",
    }),
  ],
};

export default config;