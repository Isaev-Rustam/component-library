const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // Режим сборки: 'development' для режима разработки, 'production' для продакшн-сборки
  entry: {
    app: './src/index.tsx', // Основная точка входа приложения
    vendor: ['styled-components'], // Добавляем styled-components в отдельный чанк
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Директория, куда будет сохранён итоговый бандл
    filename: '[name].bundle.js', // Шаблон для имени файла
    clean: true, // Очищать директорию dist перед сборкой
  },
  externals: {
    'styled-components': {
      //предотвращает дублирование styled-components при сборке нескольких приложений на одной странице.
      commonjs: 'styled-components', // Объявляет styled-components как внешнюю зависимость для CommonJS
      commonjs2: 'styled-components', // Объявляет styled-components как внешнюю зависимость для CommonJS2
      amd: 'styled-components', // Объявляет styled-components как внешнюю зависимость для AMD
      root: 'styled', // Объявляет styled-components как внешнюю зависимость для глобального объекта (для браузеров)
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Расширения файлов, которые Webpack должен обрабатывать
    alias: {
      'styled-components': path.resolve(
        __dirname,
        'node_modules',
        'styled-components'
      ), // Создание alias для styled-components
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Правила для обработки файлов TypeScript и TSX
        use: 'ts-loader', // Использование ts-loader для компиляции TypeScript
        exclude: /node_modules/, // Исключение node_modules из обработки
      },
      {
        test: /\.css$/, // Правила для обработки CSS файлов
        use: ['style-loader', 'css-loader'], // Использование style-loader и css-loader для обработки CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон HTML для генерации финального HTML-файла
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // Имя чанка для внешних библиотек
      minChunks: Infinity, // Количество раз, когда модуль должен быть использован, чтобы попасть в этот чанк
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Директория для статических файлов
    compress: true, // Включение сжатия
    port: 9000, // Порт для сервера разработки
    hot: true, // Включение горячей перезагрузки модулей
    open: true, // Открывать браузер при запуске
  },
};
