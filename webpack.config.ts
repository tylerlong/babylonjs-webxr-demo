/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';

const config: Configuration = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
};

export default config;
