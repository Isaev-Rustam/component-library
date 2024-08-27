### webpack plugin

- ForkTsCheckerWebpackPlugin:
Пакет: fork-ts-checker-webpack-plugin
Назначение: Этот плагин используется для ускорения проверки TypeScript и ESLint. Он запускает проверку в отдельном процессе, чтобы не блокировать основной процесс сборки Webpack. Это позволяет ускорить время сборки и проверок.
Установка: npm install fork-ts-checker-webpack-plugin --save-dev

- BundleAnalyzerPlugin:
Пакет: webpack-bundle-analyzer
Назначение: Этот плагин визуализирует размер вашего Webpack-бандла и его зависимости. Это помогает понять, какие модули занимают наибольшее место в бандле, и оптимизировать его размер.
Установка: npm install webpack-bundle-analyzer --save-dev

- CopyPlugin:
Пакет: copy-webpack-plugin
Назначение: Этот плагин позволяет копировать файлы и директории из одного места в другое в процессе сборки Webpack. Это полезно для переноса статических ресурсов, таких как изображения или шрифты, в выходной каталог сборки.
Установка: npm install copy-webpack-plugin --save-dev

- ReactRefreshWebpackPlugin:
Пакет: @pmmmwh/react-refresh-webpack-plugin
Назначение: Этот плагин предоставляет поддержку для горячей перезагрузки (hot reloading) в React. Он работает в связке с react-refresh и позволяет обновлять React компоненты без полной перезагрузки страницы.
Установка: npm install @pmmmwh/react-refresh-webpack-plugin --save-dev
