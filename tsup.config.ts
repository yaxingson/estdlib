import { readdir } from 'node:fs/promises'
import { statSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'tsup'

const srcDir = join(__dirname, 'src')

export default defineConfig(async () => {
  const dirs = await readdir(srcDir)
  const entry = dirs.filter(dir => statSync(join(srcDir, dir)).isDirectory())
    .map(dir=>`src/${dir}/index.ts`)

  return [
    {
      entry:['src/index.ts'],    
      format:['iife', 'cjs', 'esm'],
      globalName:'_',
      dts:true
    },
    {
      entry:['src/index.ts'],
      format:['iife'],
      globalName:'_',
      minify:true,
      outExtension() {
        return {js:'.global.min.js'}
      },
    },
    {
      entry,
      format:['cjs', 'esm'],
      dts:true
    }
  ]
})
