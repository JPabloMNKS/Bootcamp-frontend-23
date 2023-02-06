const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const commonConfig = {
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  };
  
  const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
  };
  
  const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'output'),
    },
  };
  
  module.exports = (env, argv) => {
    if (argv.mode === 'development') {
      return { ...commonConfig, ...devConfig };
    }
    if (argv.mode === 'production') {
      return { ...commonConfig, ...prodConfig };
    }
};