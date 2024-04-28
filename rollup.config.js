import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  external: ['three'],
  output: {
    dir: "dist",
    format: "esm",
    name: "three-gs",
    sourcemap: false
  },
  plugins: [
    typescript(),
    resolve(),
    terser()
  ]
};