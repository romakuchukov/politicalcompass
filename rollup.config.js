import node from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: {
    format: 'umd',
    file: 'd3.min.js',
    name: 'd3'
  },
  plugins: [node(), terser()]
};
