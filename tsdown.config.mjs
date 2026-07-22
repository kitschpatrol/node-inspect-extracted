import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: './index.mjs',
  },
  format: ['esm', 'cjs', 'umd'],
  globalName: 'util',
  platform: 'neutral',
  target: 'es2020',
  minify: true,
  dts: false,
  hash: false,
  checks: {
    legacyCjs: false,
  },
  outputOptions(options, format) {
    if (format === 'umd') {
      options.entryFileNames = 'inspect.js';
    } else {
      options.entryFileNames = `index.${format === 'es' ? 'mjs' : 'cjs'}`;
    }
    options.exports = 'named';
    return options;
  },
});
