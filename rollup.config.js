import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    }, {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    babel(),
    resolve(),
    commonjs()
  ]
}
