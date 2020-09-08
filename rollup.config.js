import node from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const onwarn = (warning, warn) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') return;
  warn(warning);
};

export default [{
  onwarn: onwarn,
  input: 'src/index.js',
  output: {
    name: 'd3',
    dir: 'dist',
    format: 'umd',
    entryFileNames: 'd3.min.js'
  },
  plugins: [node(), terser()]
}, {
  input: 'src/custom.js',
  output: {
    dir: 'dist',
    entryFileNames: 'custom.min.js'
  },
  plugins: [node(), terser()]
}];
