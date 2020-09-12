import babel from 'rollup-plugin-babel';
import node from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import browsersync from 'rollup-plugin-browsersync'

const src = 'src/';
const dist = 'dist';
const env = process.env.DEV ? browsersync : terser;

const plugins = [node(), babel(), env()];

const onwarn = (warning, warn) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') return;
  warn(warning);
};

export default [{
  onwarn: onwarn,
  input: `${src}index.js`,
  output: {
    name: 'd3',
    dir: dist,
    format: 'umd',
    entryFileNames: 'd3.min.js'
  },
  plugins: plugins
}, {
  input: `${src}custom.js`,
  output: {
    dir: dist,
    entryFileNames: 'custom.min.js'
  },
  plugins: plugins
}];
