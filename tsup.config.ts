import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.@(js|ts|tsx)'],
  format: ['cjs', 'esm'],
  esbuildOptions(options) {
    options.assetNames = 'assets/[name]';
  },
  target: 'esnext',
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true
});
