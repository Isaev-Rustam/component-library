// buildLoaders.ts
import { ModuleOptions } from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[hash][ext][query]',
    },
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  return [assetLoader, tsLoader];
}
