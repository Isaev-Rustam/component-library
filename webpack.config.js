const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SplitChunksPlugin } = require('webpack').optimize;

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: {
      app: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js', // Используем хэши для кэширования
      clean: true,
      library: 'MyLibrary', // Название глобальной переменной для вашей библиотеки
      libraryTarget: 'umd', // Поддержка разных типов модулей
      globalObject: 'this', // Для поддержки Node.js и браузеров
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'public', 'index.html'),

      }),
      new SplitChunksPlugin({
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: -20,
          },
        },
      }),
    ],
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      hot: true,
      open: true,
    },
    devtool: 'source-map', // Добавление source maps для отладки
  };
};
