import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true
});
