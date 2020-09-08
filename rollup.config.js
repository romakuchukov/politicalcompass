import node from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [{
  onwarn: function (warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  },
  input: 'src/index.js',
  output: {
    name: 'd3',
    dir: 'dist',
    format: 'umd',
    entryFileNames: 'd3.min.js'
  },
  plugins: [node()]
}, {
  input: 'src/custom.js',
  output: {
    dir: 'dist',
    entryFileNames: 'custom.min.js'
  },
  plugins: [node(), terser()]
}];
