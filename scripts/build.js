import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdir, stat } from 'node:fs/promises'
import { rollup } from 'rollup'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import license from 'rollup-plugin-license'
import del from 'rollup-plugin-delete'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function build() {
  const modules = await readdir(resolve(__dirname, '../lib'))
  
  for(const module of modules) {
    const inputOptions = {
      input:resolve(__dirname, `../lib/${module}/index.ts`),
      plugins:[
        typescript(),
    
      ]
    }

    const outputOptions = [
      {
        file:resolve(__dirname, `../dist/${module}/index.js`),
        format:'esm',
        sourcemap:true
      },
      {
        file:resolve(__dirname, `../dist/${module}/index.cjs`),
        format:'cjs',
        sourcemap:true
      }
    ]

    const bundle = await rollup(inputOptions)

    for(const outputOption of outputOptions) {
      await bundle.write(outputOption)
    }
  }

  const outputOptions = [
    {
      file:resolve(__dirname, `../dist/estdlib.mjs`),
      format:'esm',
      sourcemap:true
    },
    {
      file:resolve(__dirname, `../dist/estdlib.min.mjs`),
      format:'esm',
      sourcemap:true,
      plugins:[terser()]
    },
    {
      file:resolve(__dirname, `../dist/estdlib.cjs`),
      format:'cjs',
      sourcemap:true
    },
    {
      file:resolve(__dirname, `../dist/estdlib.min.cjs`),
      format:'cjs',
      sourcemap:true,
      plugins:[terser()]
    },
    {
      file:resolve(__dirname, `../dist/estdlib.js`),
      format:'iife',
      sourcemap:true,
      name:'estdlib',
    },
     {
      file:resolve(__dirname, `../dist/estdlib.min.js`),
      format:'iife',
      sourcemap:true,
      name:'estdlib',
      plugins:[terser()]
    }
  ]

  const bundle = await rollup({
    input:resolve(__dirname, '../lib/index.ts'),
    plugins:[
      typescript(),
      license({
        banner:{
          content:`
          estdlib v0.0.8
          (c) 2024-present YaXing Son and Estdlib contributors
          @license MIT
          `,
          commentStyle:'regular'
        }
      })
    ]
  })

  for(const outputOption of outputOptions) {
    await bundle.write(outputOption)
  }

}

build()
