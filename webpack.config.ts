import path from 'path';
import webpack from 'webpack';
//
import { buildWebpack } from './src/config/build/buildWebpack';
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from './src/config/build/types/types';
//

/* import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
  buildWebpack,
} from 'webpack-87654321'; */

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  });

  return config;
};
