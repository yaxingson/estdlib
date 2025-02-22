import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdir } from 'node:fs/promises'
import { defineConfig } from 'rollup'
import { createRequire } from 'node:module'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import license from 'rollup-plugin-license'
import dts from 'rollup-plugin-dts'
import externals from 'rollup-plugin-node-externals'

const absolute = path => resolve(__dirname, path)

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = createRequire(import.meta.url)('./package.json')
const modules = (await readdir(resolve(__dirname, 'lib'))).filter(m => !m.startsWith('_'))

const tsPlugin = typescript({
  removeComments: true,
  noEmitOnError: true,
  declaration: false,
  exclude: []
})

const licensePlugin = license({
  banner: {
    content: `
    estdlib v${pkg.version}
    (c) 2024-present YaXing Son and Estdlib contributors
    @license MIT
    `,
    commentStyle: 'regular'
  }
})

/**
 * @typedef {{minimize:boolean, emitDeclare:boolean}} Config
 * @param {string} entry
 * @param {string[]} formats
 * @param {Config} config
 * @returns {import('rollup').RollupOptions}
 */
function buildRollupOptions(entry, formats, config = {}) {
  const { minimize, emitDeclare } = config

  /**@type {(format:string)=>string} */
  const getOutputPath = format => {}

  return {
    input: entry,
    output: formats.map(format => ({
      file: absolute(getOutputPath(format)),
      format,
      sourcemap: format === 'esm',
      generatedCode: {
        constBindings: true
      },
      preserveModules: false,
      strict: true,
      plugins: []
    })),
    plugins: [externals(), emitDeclare ? dts() : tsPlugin]
  }
}

function buildModuleOptions(moduleName) {
  return {
    input: `lib/${moduleName}/index.ts`,
    output: [
      {
        file: absolute(`dist/${moduleName}/index.js`),
        format: 'esm',
        sourcemap: true
      },
      {
        file: absolute(`dist/${moduleName}/index.cjs`),
        format: 'cjs'
      }
    ],
    plugins: [tsPlugin]
  }
}

function buildModuleDeclarationOptions(moduleName) {
  return {
    input: `lib/${moduleName}/index.ts`,
    output: [
      {
        file: absolute(`dist/${moduleName}/index.d.ts`),
        format: 'esm'
      }
    ],
    plugins: [dts()]
  }
}

function buildLibOptions() {
  return {
    input: 'index.ts',
    output: [
      {
        file: absolute('dist/index.js'),
        format: 'esm',
        sourcemap: true
      },
      {
        file: absolute('dist/index.cjs'),
        format: 'cjs',
        generatedCode: {
          constBindings: true
        },
        preserveModules: false,
        strict: true
      },
      {
        file: absolute('dist/estdlib.js'),
        format: 'iife',
        name: 'estdlib',
        plugins: [licensePlugin]
      },
      {
        file: absolute('dist/estdlib.min.js'),
        format: 'iife',
        name: 'estdlib',
        plugins: [
          terser({
            ecma: 2015,
            keep_fnames: true,
            compress: { sequences: false }
          }),
          licensePlugin
        ]
      },
      {
        file: absolute('dist/estdlib.esm.js'),
        format: 'esm'
      }
    ],
    plugins: [externals(), tsPlugin]
  }
}

function buildLibDeclarationOptions() {
  return {
    input: 'index.ts',
    output: {
      file: absolute('dist/index.d.ts'),
      format: 'esm'
    },
    plugins: [externals(), dts()]
  }
}

export default defineConfig(() => {
  return []
})
