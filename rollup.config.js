import node from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [{
  onwarn: function (warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  },
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/d3.min.js',
    name: 'd3'
  },
  plugins: [node(), terser()]
}, {
  onwarn: function (warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  },
  input: 'src/script.js',
  output: {
    format: 'umd',
    file: 'dist/script.min.js'
  },
  plugins: [node(), terser()]
}];
